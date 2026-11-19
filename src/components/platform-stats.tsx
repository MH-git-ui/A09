"use client";
import { useData } from "@/hooks/use-data";
export function PlatformStats() {
  const { data } = useData<{
    tuitions: number;
    tutors: number;
    students: number;
  }>("/stats");
  if (!data) return null;
  return (
    <section className="container platform-stats">
      <div>
        <p className="eyebrow">GROWING, ONE CONNECTION AT A TIME</p>
        <h2>
          A place to learn.
          <br />A community to grow.
        </h2>
        <p className="muted">
          Explore our demonstration community of learners and mentors.
        </p>
      </div>
      <div className="community-counts">
        {[
          [data.tuitions, "Active tuitions"],
          [data.tutors, "Tutor accounts"],
          [data.students, "Student accounts"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
