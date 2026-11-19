"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main-content" className="container result-page">
      <h1>A little pause in the journey.</h1>
      <p>Something went wrong loading this page. Please try again.</p>
      <div className="actions">
        <button className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
