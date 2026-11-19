import Link from "next/link";
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
        <div>
          <h3>Get in touch</h3>
          <a href="mailto:hello@mentorlagbe.example">
            hello@mentorlagbe.example
          </a>
          <p>
            Dhaka, Bangladesh
            <br />
            <small>Demo contact — replace before launch</small>
          </p>
          <div className="social-links">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
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
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
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
