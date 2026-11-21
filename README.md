# MentorLagbe

A tuition and mentorship platform for Assignment 9, Category 001. Its original Warm Academic interface helps students find tutors and lets tutors and administrators manage tuition activity.

## Submission links

- Live website: https://mentorlagbe-mh.vercel.app
- Client repository: https://github.com/MH-git-ui/A09
- Server repository: https://github.com/MH-git-ui/A09-server
- Live API: https://mentorlagbe-api-mh.vercel.app

## Demo accounts

These are dedicated assignment demonstration accounts, not infrastructure credentials.

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Tutor | tutor@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Student | student@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |

## Features and packages

- BetterAuth student/tutor signup, persistent sessions and server-verified JWT roles.
- Approved tuition search, subject/class/mode filters, pagination and full tuition details.
- Student applications, duplicate protection, pending cancellation and Pro priority review.
- Tutor CRUD, two-post free limit, unlimited Pro posts, verified badge and applicant decisions.
- Admin moderation, user roles, statistics, revenue and transaction history.
- Profile and banner ImgBB uploads, Stripe Checkout, signed webhooks and idempotent Pro fulfillment.
- Responsive dashboards, toast feedback, loading skeletons, error boundary and custom 404.

Client packages: Next.js App Router, React, TypeScript, Tailwind CSS, DaisyUI, Lucide React and Sonner. Server packages: Express, MongoDB driver, BetterAuth, jsonwebtoken, Zod, Stripe, Multer, Helmet, cors and express-rate-limit.

## Run locally

Requires Node.js 22+ and pnpm 11.25.0. In the sibling A09-server folder run pnpm install and pnpm dev:local. This starts local MongoDB and seeds demo data. In this folder run pnpm install and pnpm dev; open http://localhost:3000. Copy .env.example to .env.local to override API_SERVER_URL.

The local runner generates its own password in the server's ignored .local/config.json; the table above is for the hosted demo. Do not publish local configuration or service secrets. Browser requests use the same-origin /api proxy. Run pnpm typecheck and pnpm build for production checks.

## Database and verification

The live application uses exactly four physical MongoDB collections: users, tuitions, applications and payments. The official BetterAuth MongoDB adapter stores its account/session/verification logical models as tagged records inside users. Mandatory model filters keep those records out of application user queries and counts; authentication joins are disabled. An automated test verifies isolation and the physical collection count. The previous companion database is retained only as an offline migration backup; the application no longer reads or writes it.

Verification completed November 21, 2026:

- All 24 backend tests passed; the client production build passed all 22 routes and TypeScript checks.
- Hosted admin, tutor and student signin, session persistence, JWT authorization, dashboards, role restrictions and logout revocation passed.
- Browser checks covered public search, dashboard reloads, mobile navigation at 375px and tablet layout at 768px, with no document-level horizontal overflow in the checked views.
- Both profile and tuition banner upload controls returned real ImgBB previews. Authenticated upload and hosted image retrieval passed.
- Stripe sandbox payments succeeded for student $10 USD and tutor $15 USD. Success pages confirmed Pro upgrades; repeated verification passed for both. Student webhook delivery and manual resend returned HTTP 200 without duplicate payment records.
- Tutor checkout cancellation returned to the cancel page and left the free plan unchanged before the subsequent successful test.
- Twelve approved tuitions and connected demonstration users/applications are seeded in MongoDB Atlas.
- Footer email, phone and Facebook use the supplied public contact details. The X logo links to sharing the site on X.

Stripe remains in test mode; no real money was charged. Pro is a one-time upgrade because the assignment specifies prices but no recurring interval. Tuition fees are separate monthly BDT amounts. Optional features selected: server-side pagination and realistic connected seeding.

See [submission details](docs/submission.md), [requirements](docs/requirements.md), [release evidence](docs/release-checklist.md) and [deployment guide](docs/vercel-deployment.md). Both repositories exceed the required 20 client / 12 server meaningful commits.
