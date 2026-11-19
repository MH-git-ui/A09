# MentorLagbe

A tuition and mentorship platform connecting students with tutors offering online and offline classes. Built for Assignment 9, Category 001.

## Project status

Milestone 1: runnable Next.js client foundation with the Warm Academic design, responsive homepage introduction, subject categories, and how-it-works section. This is not the finished assignment: authentication, live tuition listings, dashboards, images, and payments remain to be implemented. Follow [the requirements checklist](docs/requirements.md).

## Run locally

Use Node.js 22+ and pnpm 11.25.0. From this directory:

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Copy `.env.example` to `.env.local` when connecting the backend. The Express server is in `../A09-server` and starts separately on port 5000.

```sh
pnpm typecheck
pnpm build
pnpm start
```

Development and production builds use Next.js's Webpack option because Turbopack's CSS worker failed to start in this Windows environment.

## Planned technology

- Client: Next.js App Router, TypeScript, and a supported UI library.
- Server: Node.js, Express, and MongoDB.
- Authentication: BetterAuth with its MongoDB adapter, plus JWT-protected APIs and role checks.
- Payments: Stripe Checkout and verified payment synchronization.
- Images: ImgBB uploads for tuition banners and profile photos.

## Key features to build

- Search and filter approved, active tuition listings.
- Student applications with duplicate prevention and pending cancellation.
- Tutor listing management, applicant decisions, and a two-post free-plan limit.
- Admin user management, tuition moderation, and payment reporting.
- Pro upgrades: $15 for tutors and $10 for students.
- Responsive public pages and role-based dashboards.

See [the implementation checklist](docs/requirements.md) for the full delivery scope and open design questions.

## Repository and delivery plan

The assignment requires separate client and server repository links, with at least 20 meaningful client commits and 12 meaningful server commits. This repository (`A09`) contains the client; the sibling `A09-server` contains the server and has its own Git repository. The user makes all commits. See [the milestone plan](docs/commit-plan.md); commit completed, reviewable changes rather than empty commits.

## Configuration

Keep real credentials in ignored environment files. The client uses `.env.local`; the server uses `.env`. Commit only placeholder `.env.example` files when configuration is implemented. Never commit database credentials, authentication secrets, or Stripe secret keys.

## Submission details

- Live site: pending deployment.
- Client repository: https://github.com/MH-git-ui/A09
- Server repository: pending creation.
- Admin test credentials: pending dedicated demo account setup.
- Tutor test credentials: pending dedicated demo account setup.
- Installed packages: Next.js, React, React DOM, Lucide React, TypeScript, Tailwind CSS, the Tailwind PostCSS plugin, DaisyUI, and Node/React type definitions. Exact versions are locked in `pnpm-lock.yaml`.

## Requirements source

[Assignment 9 — Category 001](https://docs.google.com/document/d/103gcgFIyXzuzn1jEjb0i3J_O2cV5Vwzqu3au7aZJ_48/edit)

The written assignment takes precedence over the accompanying video. The interface must use an original design.

