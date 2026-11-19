import type { User } from './types';
export class ApiError extends Error { constructor(message: string, public status: number) { super(message); } }
let token: string | null = null;
let tokenRequest: Promise<{ token: string; user: User }> | null = null;
export function clearToken() { token = null; }
export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  let response: Response;
  try { response = await fetch(`/api${path}`, { ...options, credentials: 'include', headers: { ...(options.body && !(options.body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), ...options.headers }, signal: options.signal ?? AbortSignal.timeout(35000) }); }
  catch { throw new ApiError('Could not reach MentorLagbe. Check your connection and try again.', 0); }
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new ApiError(data?.error?.message || data?.message || 'This request could not be completed. Please try again.', response.status);
  return data as T;
}
export async function session() {
  if (!tokenRequest) tokenRequest = request<{ token: string; user: User }>('/token').then(result => { token = result.token; return result; }).finally(() => { tokenRequest = null; });
  return tokenRequest;
}
export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!token) await session();
  try { return await request<T>(path, { ...options, headers: { ...options.headers, Authorization: `Bearer ${token}` } }); }
  catch (error) {
    if (!(error instanceof ApiError) || error.status !== 401) throw error;
    clearToken(); await session();
    return request<T>(path, { ...options, headers: { ...options.headers, Authorization: `Bearer ${token}` } });
  }
}
export const json = (method: string, data?: unknown): RequestInit => ({ method, ...(data !== undefined ? { body: JSON.stringify(data) } : {}) });
