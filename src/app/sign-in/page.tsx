import { AuthForm } from "@/components/auth-form";
import { PublicShell } from "@/components/public-shell";
export const metadata = { title: "Welcome back" };
export default function Page() {
  return (
    <PublicShell>
      <AuthForm mode="signin" />
    </PublicShell>
  );
}
