"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  UserRound,
  LogOut,
  Plus,
  ClipboardList,
} from "lucide-react";
import { useAuth } from "./auth-provider";
import { Protected } from "./protected";
import { Brand } from "./brand";
import { Avatar } from "./site-header";
import { Badge } from "./feedback";
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const role = user?.role;
  const links =
    role === "student"
      ? ([
          ["/dashboard/student", "Overview", LayoutDashboard],
          [
            "/dashboard/student/my-applications",
            "My Applications",
            ClipboardList,
          ],
        ] as const)
      : role === "tutor"
        ? ([
            ["/dashboard/tutor", "Overview", LayoutDashboard],
            ["/dashboard/tutor/post-tuition", "Post a Tuition", Plus],
            ["/dashboard/tutor/my-tuitions", "My Tuitions", BookOpen],
            ["/dashboard/tutor/applicants", "Applicants", Users],
          ] as const)
        : ([
            ["/dashboard/admin", "Overview", LayoutDashboard],
            ["/dashboard/admin/users", "Users", Users],
            ["/dashboard/admin/tuitions", "Tuition Approvals", BookOpen],
            ["/dashboard/admin/transactions", "Transactions", CreditCard],
          ] as const);
  return (
    <Protected>
      <div className={`dashboard ${collapsed ? "dashboard-collapsed" : ""}`}>
        <button
          className="dashboard-menu icon-button"
          aria-label="Toggle dashboard sidebar"
          aria-expanded={open}
          aria-controls="dashboard-sidebar"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <button
            className="sidebar-backdrop"
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
          />
        )}
        <aside id="dashboard-sidebar" className={`dashboard-sidebar ${open ? "sidebar-open" : ""}`}>
          <Brand />
          <p className="sidebar-label">YOUR LEARNING SPACE</p>
          <nav aria-label="Dashboard navigation">
            {links.map(([href, label, Icon]) => (
              <Link
                href={href}
                key={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                <Icon size={19} />
                {label}
              </Link>
            ))}
            <Link
              href="/dashboard/profile"
              className={pathname === "/dashboard/profile" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <UserRound size={19} />
              Update Profile
            </Link>
            <Link href="/pricing">
              <CreditCard size={19} />
              Plans & Pricing
            </Link>
          </nav>
          <div className="sidebar-bottom">
            <Link href="/">Back to website</Link>
            <button onClick={() => void signOut()}>
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </aside>
        <div className="dashboard-body">
          <header className="dashboard-topbar">
            <button
              className="desktop-sidebar-toggle icon-button"
              aria-label={collapsed ? "Expand dashboard sidebar" : "Collapse dashboard sidebar"}
              aria-expanded={!collapsed}
              aria-controls="dashboard-sidebar"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu />
            </button>
            <span>Small steps. Meaningful progress.</span>
            {user && (
              <div className="dashboard-user">
                <Avatar name={user.name} image={user.image} />
                <div>
                  <strong>{user.name}</strong>
                  <Badge value={user.role} />
                </div>
              </div>
            )}
          </header>
          <main id="main-content" className="dashboard-content">
            {children}
          </main>
        </div>
      </div>
    </Protected>
  );
}
export function DashboardRedirect() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) router.replace(`/dashboard/${user.role}`);
  }, [user, router]);
  return <p>Opening your dashboard…</p>;
}
