# MentorLagbe

A tuition and mentorship platform for Assignment 9, Category 001. The original Warm Academic interface uses Next.js App Router, React, TypeScript, Tailwind CSS, DaisyUI, Lucide icons and Sonner notifications.

## Implemented

- BetterAuth student/tutor registration, sign-in, sign-out and persistent sessions.
- Approved tuition search, subject/class/mode filters and server-side pagination.
- Tuition details, student-only applications, duplicate protection and pending cancellation.
- Tutor CRUD, two-post free limit, applicant decisions and statistics.
- Admin moderation, role management, statistics and payment history.
- Profile editing, ImgBB upload integration, Stripe checkout and verified payment results.
- Loading states, error boundary, 404 page and responsive dashboard navigation.
- Two optional features: pagination and realistic connected seed data.

## Run locally

Requires Node.js 22+ and pnpm 11.25.0. In the sibling A09-server folder run `pnpm install` then `pnpm dev:local`. This starts a local MongoDB and seeds twelve approved tuitions. In this client folder run `pnpm install` then `pnpm dev`. Open http://localhost:3000.

Copy .env.example to .env.local to change API_SERVER_URL. Browser requests use a same-origin /api proxy so authentication cookies survive navigation and reloads. Production checks: `pnpm typecheck` and `pnpm build`; serve the build with `pnpm start`.

## Demo accounts

- Admin: admin@mentorlagbe.demo
- Tutor: tutor@mentorlagbe.demo
- Student: student@mentorlagbe.demo

The local runner generates a password in the server's ignored `.local/config.json` file (password field). Do not publish that file: it also contains authentication secrets. For hosted demo accounts, set SEED_PASSWORD before running the server seed command and supply that dedicated demo password to the evaluator.

## Verification and remaining release work

All pages passed a production build and all 23 server tests pass. On the deployed frontend, API checks verified admin, tutor and student signin, secure cookies, session-bound tokens, dashboard access, role restrictions and logout. Browser checks verified the homepage and subject filtering at a 375px viewport without horizontal document overflow. Full dashboard visual checks remain pending; see the integration verification below.

Vercel hosting and cloud MongoDB are configured and verified. The project is NOT ready for final submission until the outstanding requirements below are resolved. The footer currently identifies its contact as a demonstration address; replace it with the project contact before submission.

The application database has four business collections. BetterAuth account/session/verification storage uses a separate companion database. This must be clarified with the instructor if 'exactly four collections' applies across every database. Pro is implemented as a one-time $15 tutor / $10 student upgrade because the assignment does not specify a billing interval.

## Submission links

- Client: https://github.com/MH-git-ui/A09
- Server: https://github.com/MH-git-ui/A09-server
- Live site: https://mentorlagbe-mh.vercel.app
- Live API: https://mentorlagbe-api-mh.vercel.app

See docs/release-checklist.md for configuration and remaining acceptance checks. Commits are authorized by the user and represent separate implementation milestones; the required minimums are 20 client and 12 server commits.

## Integration verification — November 21, 2026

Stripe test credentials, signed webhooks and ImgBB are configured in Vercel. Authenticated ImgBB upload and hosted image retrieval passed. A $10 USD sandbox checkout completed, the success page confirmed payment, and the demo student dashboard showed Pro after reload. Automatic and manually resent Stripe webhooks both returned HTTP 200; repeated verification and delivery retained exactly one MongoDB payment record. No real money was charged. Adaptive Pricing is disabled to preserve the fixed USD plan prices. All 23 backend tests passed.

Browser checks for checkout cancellation, the $15 tutor checkout, both upload forms and the remaining role dashboards are still pending. The existing collection-count clarification and project contact requirements remain open.
