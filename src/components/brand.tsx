import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Brand() {
  return <Link className="brand" href="/" aria-label="MentorLagbe home"><span className="brand-icon"><BookOpen size={22} strokeWidth={1.8} /></span><span>Mentor<span className="brand-light">Lagbe</span><span className="brand-dot">.</span></span></Link>;
}
