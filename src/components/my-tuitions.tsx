"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useData } from "@/hooks/use-data";
import { api, json } from "@/lib/api";
import { Tuition, money } from "@/lib/types";
import { Loading, ErrorState, Empty, Badge } from "./feedback";
import { TuitionForm } from "./tuition-form";
export function MyTuitions() {
  const { data, error, loading, reload } = useData<Tuition[]>(
    "/tutor/tuitions",
    true,
    true,
  );
  const [editing, setEditing] = useState<Tuition | null>(null);
  const [busy, setBusy] = useState("");
  async function action(t: Tuition, remove = false) {
    if (remove && !confirm(`Delete “${t.title}”? This cannot be undone.`))
      return;
    setBusy(t._id);
    try {
      await api(
        `/tutor/tuitions/${t._id}${remove ? "" : "/active"}`,
        json(
          remove ? "DELETE" : "PATCH",
          remove ? undefined : { isActive: !t.isActive },
        ),
      );
      toast.success(remove ? "Tuition deleted." : "Tuition status updated.");
      reload();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy("");
    }
  }
  return (
    <>
      <div className="page-heading heading-with-action">
        <div>
          <p className="eyebrow">YOUR TEACHING SPACE</p>
          <h1>My Tuitions</h1>
          <p>Manage your batches and keep your next opportunity open.</p>
        </div>
        <Link href="/dashboard/tutor/post-tuition" className="btn btn-primary">
          Post a Tuition
        </Link>
      </div>
      {editing ? (
        <TuitionForm
          key={editing._id}
          tuition={editing}
          onSaved={() => {
            setEditing(null);
            reload();
          }}
          onCancel={() => setEditing(null)}
        />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <ErrorState message={error} retry={reload} />
      ) : data?.length ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tuition</th>
                <th>Fee</th>
                <th>Review</th>
                <th>Availability</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((t) => (
                <tr key={t._id}>
                  <td>
                    <strong>{t.title}</strong>
                    <small>
                      {t.subject} · {t.classLevel}
                    </small>
                  </td>
                  <td>{money(t.monthlyFee)}</td>
                  <td>
                    <Badge value={t.approvalStatus} />
                  </td>
                  <td>
                    <Badge value={t.isActive ? "active" : "closed"} />
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        className="btn btn-outline"
                        onClick={() => setEditing(t)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline"
                        disabled={busy === t._id}
                        onClick={() => void action(t)}
                      >
                        {t.isActive ? "Close" : "Activate"}
                      </button>
                      <button
                        className="btn btn-danger"
                        disabled={busy === t._id}
                        onClick={() => void action(t, true)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty title="Your first tuition is waiting to happen">
          Create a tuition and share your knowledge.
        </Empty>
      )}
    </>
  );
}
