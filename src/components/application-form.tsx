"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useAuth } from "./auth-provider";
import { api, json } from "@/lib/api";
export function ApplicationForm({ tuitionId }: { tuitionId: string }) {
  const { user, loading } = useAuth();
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  if (loading) return <p>Checking your account…</p>;
  if (!user)
    return (
      <Link
        className="btn btn-primary full-width"
        href={`/sign-in?next=/tuitions/${tuitionId}`}
      >
        Sign in to apply
      </Link>
    );
  if (user.role !== "student")
    return (
      <p className="notice">
        Only students can apply for tuition. You’re signed in as a {user.role}.
      </p>
    );
  if (sent)
    return (
      <div className="notice">
        <h3>Application sent!</h3>
        <p>Your tutor will review your request.</p>
        <Link className="text-link" href="/dashboard/student/my-applications">
          Track your application
        </Link>
      </div>
    );
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setError("");
    try {
      await api(`/applications/${tuitionId}`, json("POST", fields));
      setSent(true);
      toast.success("Application submitted.");
    } catch (err) {
      setError((err as Error).message);
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form onSubmit={submit}>
      <h3>Start your next chapter</h3>
      <label>
        Phone number
        <input
          name="studentPhone"
          type="tel"
          required
          minLength={7}
          maxLength={25}
          defaultValue={user.phone}
          placeholder="+880…"
        />
      </label>
      <label>
        Preferred schedule
        <input
          name="preferredSchedule"
          required
          minLength={3}
          maxLength={160}
          placeholder="e.g. Weekday evenings"
        />
      </label>
      <label>
        Your learning goals
        <textarea
          name="studentNote"
          maxLength={1000}
          rows={3}
          placeholder="Tell your tutor where you’d like some guidance."
        />
      </label>
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
      <button className="btn btn-primary full-width" disabled={busy}>
        {busy ? "Sending…" : "Apply for Tuition"}
      </button>
      <p className="small muted">
        Your tutor will review and accept or decline your application.
      </p>
    </form>
  );
}
