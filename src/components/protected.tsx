"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./auth-provider";
import { ErrorState, Loading } from "./feedback";
import type { Role } from "@/lib/types";
export function Protected({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: Role;
}) {
  const { user, loading, error, refresh } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!loading && !error && !user)
      router.replace(`/sign-in?next=${encodeURIComponent(pathname)}`);
  }, [loading, error, user, pathname, router]);
  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} retry={() => void refresh()} />;
  if (!user) return <Loading count={1} />;
  if (role && user.role !== role)
    return (
      <ErrorState message="Your account does not have access to this dashboard." />
    );
  return children;
}
