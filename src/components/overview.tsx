"use client";
import Link from "next/link";
import { useData } from "@/hooks/use-data";
import { useAuth } from "./auth-provider";
import { Loading, ErrorState } from "./feedback";
export function Overview() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useData<
    Record<string, number | string>
  >("/dashboard/overview", true, true);
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h1>Hello, {user?.name.split(" ")[0]}.</h1>
        <p>Here’s what’s happening in your learning space.</p>
      </div>
      {loading ? (
        <Loading count={4} />
      ) : error ? (
        <ErrorState message={error} retry={reload} />
      ) : (
        <div className="stats-grid">
          {Object.entries(data ?? {}).map(([label, value]) => (
            <article className="stat-card" key={label}>
              <p>{label}</p>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      )}
      <section className="dashboard-welcome">
        <div>
          <h2>
            {user?.role === "tutor"
              ? "Share what you know."
              : user?.role === "admin"
                ? "Keep good learning on track."
                : "Keep your curiosity growing."}
          </h2>
          <p>
            {user?.role === "tutor"
              ? "Create your next tuition and help a student take a step forward."
              : user?.role === "admin"
                ? "Review new tuition listings and manage your community."
                : "Your next mentor might be just a subject away."}
          </p>
        </div>
        <Link
          className="btn btn-primary"
          href={
            user?.role === "tutor"
              ? "/dashboard/tutor/post-tuition"
              : user?.role === "admin"
                ? "/dashboard/admin/tuitions"
                : "/tuitions"
          }
        >
          {user?.role === "tutor"
            ? "Post a Tuition"
            : user?.role === "admin"
              ? "Review Tuitions"
              : "Explore Tuitions"}
        </Link>
      </section>
    </>
  );
}
