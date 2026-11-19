"use client";
import { useCallback, useEffect, useState } from "react";
import { api, request } from "@/lib/api";
export function useData<T>(
  path: string | null,
  protectedRoute = false,
  poll = false,
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [revision, setRevision] = useState(0);
  const reload = useCallback(() => setRevision((n) => n + 1), []);
  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    let active = true;
    setLoading(true);
    setError("");
    const load = () =>
      (protectedRoute ? api<T> : request<T>)(path, {
        signal: controller.signal,
      })
        .then((value) => {
          if (active) {
            setData(value);
            setError("");
          }
        })
        .catch((err) => {
          if (active) setError(err.message);
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    void load();
    const timer = poll
      ? setInterval(() => {
          if (document.visibilityState === "visible") void load();
        }, 15000)
      : undefined;
    return () => {
      active = false;
      controller.abort();
      clearInterval(timer);
    };
  }, [path, protectedRoute, poll, revision]);
  return { data, error, loading, reload };
}
