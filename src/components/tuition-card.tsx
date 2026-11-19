'use client';
import Link from 'next/link';
import { CalendarDays, MapPin, Monitor, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Tuition, money } from '@/lib/types';
export function TuitionImage({ src, alt }: { src: string; alt: string }) { const [failed, setFailed] = useState(false); return failed ? <div className="image-placeholder" role="img" aria-label={alt}><BookOpen size={48} /></div> : <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />; }
export function TuitionCard({ tuition: t }: { tuition: Tuition }) { return <article className="tuition-card"><div className="tuition-cover"><TuitionImage src={t.bannerImage} alt={`${t.subject} learning materials`} /><span className="subject-pill">{t.subject}</span></div><div className="tuition-card-body"><div className="card-meta"><span>{t.classLevel}</span><span>{t.mode === 'Online' ? <Monitor size={14} /> : <MapPin size={14} />}{t.mode}</span></div><h3><Link href={`/tuitions/${t._id}`}>{t.title}</Link></h3><p className="tutor-line">with <strong>{t.tutorName}</strong></p><p className="schedule-line"><CalendarDays size={15} />{t.daysPerWeek} days a week</p><div className="tuition-card-bottom"><p><strong>{money(t.monthlyFee)}</strong><small>/ month</small></p><Link className="btn btn-outline" href={`/tuitions/${t._id}`}>View Details</Link></div></div></article>; }
