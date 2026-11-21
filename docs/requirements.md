# MentorLagbe implementation checklist

Reviewed against the original assignment on November 21, 2026. Checked items are implemented; verification evidence is in release-checklist.md.

## Architecture decisions before implementation

- [x] Establish separate client and server repositories and track meaningful commits in each (client: at least 20; server: at least 12).
- [x] Use exactly four physical collections: `users`, `tuitions`, `applications`, and `payments`; official BetterAuth adapter models are isolated tagged records inside users.
- [x] Document one-time $15 tutor / $10 student Pro upgrades; the assignment does not specify a recurring interval.
- [x] Define Pro student priority-booking behavior and tutor verified-badge behavior.

## Data and security

- [x] Model users with student/tutor/admin roles and free/pro plans.
- [x] Model tuitions with tutor ownership, pending/approved/rejected moderation, and active/closed state.
- [x] Model applications linking a student, tutor, and tuition with pending/accepted/rejected status.
- [x] Model payments with verified Stripe transaction and session identifiers.
- [x] Configure BetterAuth signup/signin, MongoDB persistence, validation, and signout.
- [x] Issue or retrieve JWTs through authenticated flows and verify them on the server.
- [x] Implement `verifyToken`, `verifyStudent`, `verifyTutor`, and `verifyAdmin` middleware.
- [x] Enforce ownership, role restrictions, plan limits, and duplicate-application prevention on the server.
- [x] Preserve authenticated sessions when private routes reload.
- [x] Store credentials in environment variables and configure production CORS.

## Public pages

- [x] Shared navbar with public links and authenticated avatar, name, role, dashboard, profile, and signout controls.
- [x] Footer with brand, contact details, navigation, copyright, and social links using the X logo.
- [x] Home: original hero, six latest approved active tuitions, pricing, how-it-works, subjects/statistics/testimonials, and animations.
- [x] `/tuitions`: approved active listings with server-side title/subject search and subject/class/mode filtering.
- [x] `/tuitions/[id]`: banner, complete tuition details, schedule, tutor summary, and student-only application form.
- [x] Application form: phone, preferred schedule, and learning note; prevent duplicates.
- [x] `/pricing`: student and tutor Free/Pro tiers and Stripe checkout.
- [x] `/sign-up` and `/sign-in`: validated forms; signup allows student or tutor only and defaults to free.
- [x] How-it-works or About page.
- [x] `/payment/success` and `/payment/cancel`.

## Dashboards

- [x] Responsive full-width layout, collapsible sidebar, top bar, profile summary, and role-based routing.
- [x] `/dashboard/student`: applied/accepted/pending counts and current plan.
- [x] `/dashboard/student/my-applications`: tuition/tutor/fee/date/status and pending-only cancellation.
- [x] `/dashboard/tutor`: posted/approved/applicant counts and current plan.
- [x] `/dashboard/tutor/post-tuition`: validated fields and ImgBB banner upload; enforce free limit of two posts.
- [x] `/dashboard/tutor/my-tuitions`: edit, delete, active/closed toggle, and moderation state.
- [x] `/dashboard/tutor/applicants`: applicant details and accept/reject actions.
- [x] `/dashboard/admin`: users/tutors/moderation counts and Stripe revenue.
- [x] `/dashboard/admin/users`: protected user role management.
- [x] `/dashboard/admin/tuitions`: approve/reject listings.
- [x] `/dashboard/admin/transactions`: user, role, plan, amount, transaction ID, and payment date.
- [x] `/dashboard/profile`: update name, phone, bio, and ImgBB profile upload.

## Payments

- [x] Create authenticated checkout sessions using server-controlled plan prices.
- [x] Verify successful payments through a signed webhook or server-side checkout verification.
- [x] Record payments and upgrade the correct user's plan to pro; handle repeated delivery without duplicate transactions.
- [x] Show verified payment outcome on success/cancel pages.

## Quality and optional scope

- [x] Loading skeletons, custom not-found page, and error boundary with home navigation.
- [x] Toast feedback for authentication, forms, CRUD, and errors.
- [x] Consistent typography, spacing, buttons, images, and equal-sized cards on mobile/tablet/desktop.
- [x] Seed at least 10–12 approved tuitions across subjects with realistic connected records.
- [x] Complete 2–5 optional features. Proposed initial choices: server-side pagination and a connected data seed script.
- Not selected (optional): saved tuitions, dark/light mode, and accepted-student reviews. The required two optional features are pagination and connected seeding.

## Release and submission

- [x] Verify all three roles and access restrictions, listing moderation, applications, free limits, and payments.
- [x] Verify direct navigation and reloads across public/private routes on deployment.
- [x] Verify production API availability without CORS/404/504 errors.
- [x] Provide live URL, separate repository links, and dedicated admin/tutor demo credentials.
- [x] Update README with actual packages, setup instructions, features, purpose, and submission details.
- [x] Confirm meaningful commit totals in each repository.
