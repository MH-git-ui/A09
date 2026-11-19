# MentorLagbe

A tuition and mentorship platform connecting students with tutors offering online and offline classes. Built for Assignment 9, Category 001.

## Project status

Planning and repository setup. Application features and deployment are not implemented yet.

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

The assignment requires separate client and server repository links, with at least 20 meaningful client commits and 12 meaningful server commits. This repository is the starting point; application placement and the second repository must be established before implementation. Commit completed, reviewable changes as the project progresses; do not create empty commits to satisfy the count.

## Configuration

Keep real credentials in ignored environment files. The client uses `.env.local`; the server uses `.env`. Commit only placeholder `.env.example` files when configuration is implemented. Never commit database credentials, authentication secrets, or Stripe secret keys.

## Submission details

- Live site: pending deployment.
- Client repository: pending application placement.
- Server repository: pending creation.
- Admin test credentials: pending dedicated demo account setup.
- Tutor test credentials: pending dedicated demo account setup.
- Installed npm packages: none yet; document actual dependencies when added.

## Requirements source

[Assignment 9 — Category 001](https://docs.google.com/document/d/103gcgFIyXzuzn1jEjb0i3J_O2cV5Vwzqu3au7aZJ_48/edit)

The written assignment takes precedence over the accompanying video. The interface must use an original design.

