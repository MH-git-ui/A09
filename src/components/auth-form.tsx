'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { request, json, clearToken, session } from '@/lib/api';
import { useAuth } from './auth-provider';
export function AuthForm({ mode }: { mode: 'signup' | 'signin' }) {
  const signup = mode === 'signup'; const [busy, setBusy] = useState(false); const [error, setError] = useState(''); const router = useRouter(); const { refresh } = useAuth();
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget); setBusy(true); setError('');
    try {
      await request(`/auth/${signup ? 'sign-up' : 'sign-in'}/email`, json('POST', { email: String(data.get('email')).trim().toLowerCase(), password: data.get('password'), ...(signup ? { name: String(data.get('name')).trim(), role: data.get('role') } : {}) }));
      clearToken(); const result = await session(); await refresh(); toast.success(signup ? 'Your learning journey starts here!' : 'Welcome back!');
      const next = new URLSearchParams(window.location.search).get('next');
      router.push(next?.startsWith('/') && !next.startsWith('//') && !next.includes('\\') ? next : `/dashboard/${result.user.role}`);
    } catch (err) { setError((err as Error).message); toast.error((err as Error).message); } finally { setBusy(false); }
  }
  return <section className="auth-page container"><div className="auth-intro"><p className="eyebrow">YOUR NEXT CHAPTER</p><h1>{signup ? <>Great learning<br />starts with <em>you.</em></> : <>A familiar place.<br />A fresh <em>start.</em></>}</h1><p>{signup ? 'Find your mentor or share what you know. There’s a place for you at MentorLagbe.' : 'Your tuitions, applications, and next possibilities are waiting for you.'}</p><div className="auth-quote">“Learning is a journey.<br />You don’t have to do it alone.”</div></div><div className="form-card"><h2>{signup ? 'Create your account' : 'Welcome back'}</h2><p className="muted">{signup ? 'Start free. Grow at your own pace.' : 'Sign in to continue your journey.'}</p><form onSubmit={submit}>{signup && <><label>Full name<input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your full name" /></label><fieldset><legend>I want to</legend><div className="role-options"><label><input type="radio" name="role" value="student" defaultChecked /> Find a tutor</label><label><input type="radio" name="role" value="tutor" /> Teach students</label></div></fieldset></>}<label>Email address<input name="email" type="email" required autoComplete="email" maxLength={254} placeholder="you@example.com" /></label><label>Password<input name="password" type="password" required minLength={8} maxLength={128} autoComplete={signup ? 'new-password' : 'current-password'} placeholder="At least 8 characters" /></label>{error && <p className="field-error" role="alert">{error}</p>}<button className="btn btn-primary full-width" disabled={busy}>{busy ? 'Please wait…' : signup ? 'Create account' : 'Sign in'}</button></form><p className="form-switch">{signup ? 'Already part of MentorLagbe?' : 'New here?'} <Link href={signup ? '/sign-in' : '/sign-up'}>{signup ? 'Sign in' : 'Create an account'}</Link></p></div></section>;
}
