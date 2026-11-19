'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { ApiError, clearToken, json, request, session } from '@/lib/api';
import type { User } from '@/lib/types';
type AuthState = { user: User | null; loading: boolean; error: string; refresh: () => Promise<void>; signOut: () => Promise<void> };
const AuthContext = createContext<AuthState | null>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const refresh = useCallback(async () => {
    try { const result = await session(); setUser(result.user); setError(''); }
    catch (err) { if (err instanceof ApiError && err.status === 401) { setUser(null); setError(''); } else { setError(err instanceof Error ? err.message : 'Unable to check your session.'); } }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void refresh(); const focus = () => void refresh(); window.addEventListener('focus', focus); return () => window.removeEventListener('focus', focus); }, [refresh]);
  const signOut = async () => { try { await request('/auth/sign-out', json('POST', {})); clearToken(); setUser(null); toast.success('You have signed out.'); } catch (err) { toast.error((err as Error).message); } };
  return <AuthContext.Provider value={{ user, loading, error, refresh, signOut }}>{children}<Toaster position="top-right" richColors closeButton /></AuthContext.Provider>;
}
export function useAuth() { const value = useContext(AuthContext); if (!value) throw new Error('AuthProvider is required.'); return value; }
