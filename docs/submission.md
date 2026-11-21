# Assignment 9 — Category 001 submission

Project: MentorLagbe

- Live website: https://mentorlagbe-mh.vercel.app
- Client repository: https://github.com/MH-git-ui/A09
- Server repository: https://github.com/MH-git-ui/A09-server
- Live API: https://mentorlagbe-api-mh.vercel.app

## Evaluator login details

These are dedicated assignment demonstration accounts, not infrastructure credentials.

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Tutor | tutor@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Student | student@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |

## Review guide

1. Browse the twelve approved tuitions and try search, filters and pagination.
2. Sign in as student to review applications and profile; use the tutor account for tuition management and applicants.
3. Sign in as admin to review users, tuition moderation, revenue and transactions.
4. To test upgrading, register a new free student or tutor and choose Pro. In Stripe sandbox use card 4242 4242 4242 4242, a future expiry and any three-digit CVC. Existing seeded tutor/student accounts already have Pro.

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
