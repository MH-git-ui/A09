import { AuthForm } from '@/components/auth-form';
import { PublicShell } from '@/components/public-shell';
export const metadata = { title: 'Create your account' };
export default function Page() { return <PublicShell><AuthForm mode="signup" /></PublicShell>; }
