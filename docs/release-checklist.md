# Release verification

- Live website: https://mentorlagbe-mh.vercel.app
- Client repository: https://github.com/MH-git-ui/A09
- Server repository: https://github.com/MH-git-ui/A09-server
- Live API: https://mentorlagbe-api-mh.vercel.app

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

## Storage compliance

The live application uses exactly four physical MongoDB collections: users, tuitions, applications and payments. The official BetterAuth MongoDB adapter stores its account/session/verification logical models as tagged records inside users. Mandatory model filters keep those records out of application user queries and counts; authentication joins are disabled. An automated test verifies isolation and the physical collection count. The previous companion database is retained only as an offline migration backup; the application no longer reads or writes it.

## Submission package

- [x] Separate GitHub repositories; minimum commit counts exceeded.
- [x] Hosted frontend and backend configured under MH-git-ui's Vercel Web workspace.
- [x] MongoDB, Stripe test checkout/webhooks and ImgBB configured.
- [x] Mandatory features reviewed against the assignment; two optional features selected.
- [x] Demo credentials and submission links included in README and submission.md.
- [x] Public contact details replaced and responsive role dashboards checked.

Infrastructure secrets remain in ignored local environment files and Vercel environment variables. Only dedicated demonstration login credentials are published for evaluation. Earlier Acme deployments are not submission URLs.
