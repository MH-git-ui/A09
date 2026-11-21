import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "./brand";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Brand />
          <p>
            A little guidance for your biggest goals.
            <br />
            Online and home tuition, built around you.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/tuitions">Browse Tuitions</Link>
          <Link href="/pricing">Free & Pro Plans</Link>
          <Link href="/about">How It Works</Link>
          <Link href="/sign-up">Become a Tutor</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact info</h3>
          <address className="footer-contact-list">
            <a href="mailto:contact@mentorlagbe.example"><Mail aria-hidden="true" /><span>contact@mentorlagbe.example</span></a>
            <a href="tel:+8801000000000"><Phone aria-hidden="true" /><span>+880 1000-000000</span></a>
            <p><MapPin aria-hidden="true" /><span>Dhaka, Bangladesh</span></p>
          </address>
          <p className="footer-demo-note">Demo contact details — not monitored.</p>
        </div>
        <div className="footer-connect">
          <h3>Connect with us</h3>
          <p>Share MentorLagbe with your community and help someone find their next mentor.</p>
          <div className="social-links footer-socials">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmentorlagbe-mh.vercel.app" target="_blank" rel="noreferrer" aria-label="Share MentorLagbe on Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.7-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z" /></svg>
            </a>
            <a
              href="https://x.com/intent/post?text=Find%20your%20next%20mentor%20on%20MentorLagbe&url=https%3A%2F%2Fmentorlagbe-mh.vercel.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Share MentorLagbe on X"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l8.1-9.3L.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Open Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmentorlagbe-mh.vercel.app" target="_blank" rel="noreferrer" aria-label="Share MentorLagbe on LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM8 18H5V9h3ZM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 18h-3v-4.5c0-1.2-.4-2-1.4-2-1.1 0-1.6.8-1.6 2V18h-3V9h2.9v1.2c.5-.9 1.4-1.5 2.7-1.5 2.2 0 3.4 1.4 3.4 4Z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} MentorLagbe. All rights reserved.
        </span>
        <span>Stay curious. Keep growing.</span>
      </div>
    </footer>
  );
}
