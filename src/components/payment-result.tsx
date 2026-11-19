"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";
import { api, json } from "@/lib/api";
import { useAuth } from "./auth-provider";
import { Loading, ErrorState } from "./feedback";
export function PaymentResult() {
  const params = useSearchParams();
  const { refresh, user } = useAuth();
  const id = params.get("session_id");
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true;
    if (!id) {
      setError("No payment session was provided.");
      setState("error");
      return;
    }
    setState("loading");
    void api("/payments/verify", json("POST", { sessionId: id }))
      .then(async () => {
        await refresh();
        if (active) {
          setState("success");
          toast.success("Your Pro plan is active.");
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message);
          setState("error");
        }
      });
    return () => {
      active = false;
    };
  }, [id, refresh, retry]);
  return (
    <section className="container result-page">
      {state === "loading" ? (
        <>
          <h1>Confirming your payment…</h1>
          <Loading count={1} />
        </>
      ) : state === "error" ? (
        <>
          <h1>Let’s check that payment.</h1>
          <ErrorState message={error} retry={() => setRetry((n) => n + 1)} />
          <Link href="/pricing" className="text-link">
            Back to plans
          </Link>
        </>
      ) : (
        <>
          <CircleCheck size={64} />
          <p className="eyebrow">MORE POSSIBILITY AHEAD</p>
          <h1>Welcome to Pro.</h1>
          <p>Your payment is verified and your account has been upgraded.</p>
          <Link
            className="btn btn-primary"
            href={`/dashboard/${user?.role ?? "student"}`}
          >
            Go to Dashboard
          </Link>
        </>
      )}
    </section>
  );
}
