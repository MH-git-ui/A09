"use client";
import Link from "next/link";
import { CalendarDays, MapPin, Monitor, BookOpen, BadgeCheck } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Tuition, money } from "@/lib/types";
import { ErrorState, Loading, Badge } from "./feedback";
import { TuitionImage } from "./tuition-card";
import { Avatar } from "./site-header";
import { ApplicationForm } from "./application-form";
export function TuitionDetails({ id }: { id: string }) {
  const {
    data: t,
    loading,
    error,
    reload,
  } = useData<Tuition>(`/tuitions/${id}`);
  if (loading)
    return (
      <div className="container section">
        <Loading />
      </div>
    );
  if (error || !t)
    return (
      <div className="container section">
        <ErrorState message={error || "Tuition not found."} retry={reload} />
        <Link href="/tuitions" className="text-link">
          Back to Browse Tuitions
        </Link>
      </div>
    );
  return (
    <div className="container details-page">
      <p className="breadcrumb">
        <Link href="/tuitions">Browse Tuitions</Link> / {t.subject}
      </p>
      <div className="details-layout">
        <article>
          <div className="details-cover">
            <TuitionImage src={t.bannerImage} alt={t.title} />
          </div>
          <div className="detail-tags">
            <Badge value={t.subject} />
            <Badge value={t.classLevel} />
            <Badge value={t.mode} />
          </div>
          <h1>{t.title}</h1>
          <div className="detail-facts">
            <span>
              <CalendarDays />
              {t.daysPerWeek} days per week
            </span>
            <span>
              {t.mode === "Online" ? <Monitor /> : <MapPin />}
              {t.location}
            </span>
            <span>
              <BookOpen />
              {t.schedule}
            </span>
          </div>
          <section className="detail-section">
            <h2>About this tuition</h2>
            <p className="preserve-lines">{t.description}</p>
          </section>
          <section className="detail-section">
            <h2>Meet your tutor</h2>
            <div className="tutor-profile">
              <Avatar name={t.tutorName} image={t.tutor?.image} />
              <div>
                <h3>{t.tutorName}</h3>
                {t.tutor?.plan === "pro" && (
                  <span className="verified-tutor-badge" title="Verified Pro membership; not a qualification check">
                    <BadgeCheck size={16} aria-hidden="true" /> Verified Pro tutor
                  </span>
                )}
              </div>
            </div>
            <p>
              {t.tutor?.bio ||
                "This tutor is ready to help you take your next learning step."}
            </p>
          </section>
        </article>
        <aside className="application-panel">
          <p className="price">
            <strong>{money(t.monthlyFee)}</strong>
            <span> / month</span>
          </p>
          <p className="muted">A little guidance. Lasting progress.</p>
          <hr />
          <ApplicationForm tuitionId={id} />
        </aside>
      </div>
    </div>
  );
}
