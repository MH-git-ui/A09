import { PublicShell } from "@/components/public-shell";
import { TuitionDetails } from "@/components/tuition-details";
export const metadata = { title: "Tuition Details" };
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <PublicShell>
      <TuitionDetails id={id} />
    </PublicShell>
  );
}
