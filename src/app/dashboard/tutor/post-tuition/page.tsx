import { TuitionForm } from "@/components/tuition-form";
export default function Page() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">SHARE WHAT YOU KNOW</p>
        <h1>Post a Tuition</h1>
        <p>A new opportunity for someone’s next chapter.</p>
      </div>
      <TuitionForm />
    </>
  );
}
