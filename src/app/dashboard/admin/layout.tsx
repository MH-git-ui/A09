import { Protected } from '@/components/protected';
export default function Layout({ children }: { children: React.ReactNode }) { return <Protected role="admin">{children}</Protected>; }
