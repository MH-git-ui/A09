# MentorLagbe implementation checklist

Unchecked items are planned work, not implemented functionality.

## Architecture decisions before implementation

- [ ] Establish separate client and server repositories and track meaningful commits in each (client: at least 20; server: at least 12).
- [ ] Review BetterAuth persistence against the assignment's exactly-four-collections constraint. The four specified business collections are `users`, `tuitions`, `applications`, and `payments`; determine how authentication storage will comply before choosing an adapter configuration.
- [ ] Resolve payment cadence: the assignment specifies $15/$10 Pro upgrades but does not define a billing interval. Do not silently assume a monthly subscription.
- [ ] Define Pro student priority-booking behavior and tutor verified-badge behavior.

## Data and security

- [ ] Model users with student/tutor/admin roles and free/pro plans.
- [ ] Model tuitions with tutor ownership, pending/approved/rejected moderation, and active/closed state.
- [ ] Model applications linking a student, tutor, and tuition with pending/accepted/rejected status.
- [ ] Model payments with verified Stripe transaction and session identifiers.
- [ ] Configure BetterAuth signup/signin, MongoDB persistence, validation, and signout.
- [ ] Issue or retrieve JWTs through authenticated flows and verify them on the server.
- [ ] Implement `verifyToken`, `verifyStudent`, `verifyTutor`, and `verifyAdmin` middleware.
- [ ] Enforce ownership, role restrictions, plan limits, and duplicate-application prevention on the server.
- [ ] Preserve authenticated sessions when private routes reload.
- [ ] Store credentials in environment variables and configure production CORS.

## Public pages

- [ ] Shared navbar with public links and authenticated avatar, name, role, dashboard, profile, and signout controls.
- [ ] Footer with brand, contact details, navigation, copyright, and social links using the X logo.
- [ ] Home: original hero, six latest approved active tuitions, pricing, how-it-works, subjects/statistics/testimonials, and animations.
- [ ] `/tuitions`: approved active listings with server-side title/subject search and subject/class/mode filtering.
- [ ] `/tuitions/[id]`: banner, complete tuition details, schedule, tutor summary, and student-only application form.
- [ ] Application form: phone, preferred schedule, and learning note; prevent duplicates.
- [ ] `/pricing`: student and tutor Free/Pro tiers and Stripe checkout.
- [ ] `/sign-up` and `/sign-in`: validated forms; signup allows student or tutor only and defaults to free.
- [ ] How-it-works or About page.
- [ ] `/payment/success` and `/payment/cancel`.

## Dashboards

- [ ] Responsive full-width layout, collapsible sidebar, top bar, profile summary, and role-based routing.
- [ ] `/dashboard/student`: applied/accepted/pending counts and current plan.
- [ ] `/dashboard/student/my-applications`: tuition/tutor/fee/date/status and pending-only cancellation.
- [ ] `/dashboard/tutor`: posted/approved/applicant counts and current plan.
- [ ] `/dashboard/tutor/post-tuition`: validated fields and ImgBB banner upload; enforce free limit of two posts.
- [ ] `/dashboard/tutor/my-tuitions`: edit, delete, active/closed toggle, and moderation state.
- [ ] `/dashboard/tutor/applicants`: applicant details and accept/reject actions.
- [ ] `/dashboard/admin`: users/tutors/moderation counts and Stripe revenue.
- [ ] `/dashboard/admin/users`: protected user role management.
- [ ] `/dashboard/admin/tuitions`: approve/reject listings.
- [ ] `/dashboard/admin/transactions`: user, role, plan, amount, transaction ID, and payment date.
- [ ] `/dashboard/profile`: update name, phone, bio, and ImgBB profile upload.

## Payments

- [ ] Create authenticated checkout sessions using server-controlled plan prices.
- [ ] Verify successful payments through a signed webhook or server-side checkout verification.
- [ ] Record payments and upgrade the correct user's plan to pro; handle repeated delivery without duplicate transactions.
- [ ] Show verified payment outcome on success/cancel pages.

## Quality and optional scope

- [ ] Loading skeletons, custom not-found page, and error boundary with home navigation.
- [ ] Toast feedback for authentication, forms, CRUD, and errors.
- [ ] Consistent typography, spacing, buttons, images, and equal-sized cards on mobile/tablet/desktop.
- [ ] Seed at least 10–12 approved tuitions across subjects with realistic connected records.
- [ ] Complete 2–5 optional features. Proposed initial choices: server-side pagination and a connected data seed script.
- [ ] Remaining optional choices: saved tuitions, dark/light mode, and accepted-student reviews.

## Release and submission

- [ ] Verify all three roles and access restrictions, listing moderation, applications, free limits, and payments.
- [ ] Verify direct navigation and reloads across public/private routes on deployment.
- [ ] Verify production API availability without CORS/404/504 errors.
- [ ] Provide live URL, separate repository links, and dedicated admin/tutor demo credentials.
- [ ] Update README with actual packages, setup instructions, features, purpose, and submission details.
- [ ] Confirm meaningful commit totals in each repository.
