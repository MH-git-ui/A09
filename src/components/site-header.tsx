"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { Brand } from "./brand";
import { useAuth } from "./auth-provider";
import { Badge } from "./feedback";
export function Avatar({ name, image }: { name: string; image?: string }) {
  const [failedImage, setFailedImage] = useState<string>();
  return image && image !== failedImage ? (
    <img
      className="avatar-image"
      src={image}
      alt={`${name}'s profile`}
      onError={() => setFailedImage(image)}
    />
  ) : (
    <span className="avatar-initial" aria-label={name}>
      {name.slice(0, 1).toUpperCase()}
    </span>
  );
}
export function SiteHeader() {
  const { user, loading, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="announcement">
        <Sprout size={15} />
        <span>A little guidance. A world of possibility.</span>
      </div>
      <header className="site-header">
        <div className="container site-nav">
          <Brand />
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-links"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            className={open ? "site-links is-open" : "site-links"}
            id="site-links"
            aria-label="Main navigation"
          >
            {[
              ["/", "Home"],
              ["/tuitions", "Browse Tuitions"],
              ["/pricing", "Pricing"],
              ["/about", "How It Works"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            {loading ? (
              <span className="muted">Checking session…</span>
            ) : user ? (
              <details className="user-menu">
                <summary>
                  <Avatar name={user.name} image={user.image} />
                  <span>{user.name.split(" ")[0]}</span>
                  <Badge value={user.role} />
                </summary>
                <div>
                  <Link
                    href={`/dashboard/${user.role}`}
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setOpen(false)}
                  >
                    Update Profile
                  </Link>
                  <button
                    onClick={() => {
                      void signOut();
                      setOpen(false);
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </details>
            ) : (
              <div className="auth-links">
                <Link href="/sign-in" onClick={() => setOpen(false)}>
                  Sign In
                </Link>
                <Link
                  className="btn btn-primary"
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
