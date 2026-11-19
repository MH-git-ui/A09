import { Suspense } from 'react';
import { PaymentResult } from '@/components/payment-result';
import { PublicShell } from '@/components/public-shell';
import { Protected } from '@/components/protected';
import { Loading } from '@/components/feedback';
export default function Page() { return <PublicShell><Protected><Suspense fallback={<Loading />}><PaymentResult /></Suspense></Protected></PublicShell>; }
