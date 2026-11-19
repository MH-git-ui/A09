import Link from 'next/link';
import { PublicShell } from '@/components/public-shell';
export default function Page() { return <PublicShell><section className="container result-page"><p className="eyebrow">TAKE YOUR TIME</p><h1>Your checkout was cancelled.</h1><p>Your plan has not changed. You can return whenever you’re ready.</p><Link className="btn btn-primary" href="/pricing">Back to Plans</Link></section></PublicShell>; }
