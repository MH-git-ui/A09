import Link from "next/link";
import { PublicShell } from "@/components/public-shell";
export default function Page() {
  return (
    <PublicShell>
      <section className="container result-page">
        <p className="eyebrow">404 · A SMALL DETOUR</p>
        <h1>This chapter isn’t here.</h1>
        <p>The page may have moved, or the link might be incomplete.</p>
        <Link className="btn btn-primary" href="/">
          Back to Home
        </Link>
      </section>
    </PublicShell>
  );
}
