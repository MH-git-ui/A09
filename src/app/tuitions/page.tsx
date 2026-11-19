import { Suspense } from 'react';
import { Browse } from '@/components/browse';
import { PublicShell } from '@/components/public-shell';
import { Loading } from '@/components/feedback';
export const metadata = { title: 'Browse Tuitions' };
export default function Page() { return <PublicShell><Suspense fallback={<Loading />}><Browse /></Suspense></PublicShell>; }
