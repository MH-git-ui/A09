"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useData } from "@/hooks/use-data";
import { api, json } from "@/lib/api";
import { Application, money, date } from "@/lib/types";
import { Loading, ErrorState, Empty, Badge } from "./feedback";
export function MyApplications() {
  const { data, loading, error, reload } = useData<Application[]>(
    "/applications",
    true,
    true,
  );
  const [busy, setBusy] = useState("");
  async function cancel(id: string) {
    if (!confirm("Cancel this pending application? You can apply again later."))
      return;
    setBusy(id);
    try {
      await api(`/applications/${id}`, json("DELETE"));
      toast.success("Application cancelled.");
      reload();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy("");
    }
  }
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">YOUR LEARNING JOURNEY</p>
        <h1>My Applications</h1>
        <p>Follow your connections. Status updates refresh automatically.</p>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorState message={error} retry={reload} />
      ) : data?.length ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tuition</th>
                <th>Tutor</th>
                <th>Monthly fee</th>
                <th>Applied</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => (
                <tr key={a._id}>
                  <td>
                    <strong>{a.tuitionTitle}</strong>
                    <small>{a.subject}</small>
                  </td>
                  <td>
                    {a.tutorName}
                    <small>{a.tutorEmail}</small>
                  </td>
                  <td>{money(a.monthlyFee)}</td>
                  <td>{date(a.appliedAt)}</td>
                  <td>
                    <Badge value={a.status} />
                  </td>
                  <td>
                    {a.status === "pending" ? (
                      <button
                        className="btn btn-danger"
                        disabled={busy === a._id}
                        onClick={() => void cancel(a._id)}
                      >
                        Cancel
                      </button>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty title="Your next connection starts here">
          Browse tuitions and apply to a mentor who fits your goals.
        </Empty>
      )}
    </>
  );
}
