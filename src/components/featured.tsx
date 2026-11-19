'use client';
import Link from 'next/link';
import { useData } from '@/hooks/use-data';
import { TuitionPage } from '@/lib/types';
import { TuitionCard } from './tuition-card';
import { Loading, Empty, ErrorState } from './feedback';
export function Featured() { const { data, loading, error, reload } = useData<TuitionPage>('/tuitions?limit=6'); return <section className="section container"><div className="section-heading"><div><p className="eyebrow">FIND YOUR KIND OF LEARNING</p><h2>A good place to begin.</h2></div><Link className="text-link" href="/tuitions">Browse all tuitions</Link></div>{loading ? <Loading count={6} /> : error ? <ErrorState message={error} retry={reload} /> : data?.items.length ? <div className="tuition-grid">{data.items.map(t => <TuitionCard key={t._id} tuition={t} />)}</div> : <Empty title="New learning opportunities are on their way">Approved tuitions will appear here.</Empty>}</section>; }
