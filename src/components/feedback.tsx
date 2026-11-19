import { AlertCircle, BookOpen } from 'lucide-react';
export function Loading({ count = 3 }: { count?: number }) { return <div className="loading-grid" role="status" aria-label="Loading"><span className="sr-only">Loading, please wait.</span>{Array.from({ length: count }, (_, i) => <div className="skeleton-card" key={i}><div /><span /><span /></div>)}</div>; }
export function Empty({ title = 'Nothing here yet', children }: { title?: string; children?: React.ReactNode }) { return <div className="empty-state"><BookOpen size={32} /><h3>{title}</h3><p>{children}</p></div>; }
export function ErrorState({ message, retry }: { message: string; retry?: () => void }) { return <div className="error-state" role="alert"><AlertCircle /><p>{message}</p>{retry && <button className="btn btn-outline" onClick={retry}>Try again</button>}</div>; }
export function Badge({ value }: { value: string }) { return <span className={`status-badge status-${value.toLowerCase()}`}>{value}</span>; }
