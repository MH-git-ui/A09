import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '@/components/auth-provider';

export const metadata: Metadata = {
  title: { default: "MentorLagbe | A little guidance. A world of possibility.", template: "%s | MentorLagbe" },
  description: "Find tuition and mentorship in Bangladesh, from school subjects to your next big skill. Learn online or in person with MentorLagbe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><AuthProvider>{children}</AuthProvider></body></html>;
}
