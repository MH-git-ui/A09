# Release checklist

## Implemented and locally verified

Verification on November 20, 2026: the production build completed all 22 routes with TypeScript checks. All 23 backend tests passed, including initialization retry/reuse, production configuration and repeatable connected seeding. Hosted verification is recorded below.

- [x] Separate repositories and more than 20 client / 12 server commits.
- [x] Next.js production build and TypeScript check.
- [x] Twenty-three backend tests including role/ownership restrictions, duplicate application handling, atomic free limits, payment idempotency, deployment initialization and connected seed accounts.
- [x] Vercel project configuration for both repositories, a cached Express entry point, and 4 MB upload limits.
- [x] Browser registration, subject filtering and authenticated dashboard reload.
- [x] Twelve approved connected demo tuitions and sample applications.
- [x] Pagination and connected seeding optional features.

## Required before submission

- [x] Connect and seed cloud MongoDB; provision restricted app credentials and independent BetterAuth/JWT secrets in the initial Vercel API project.
- [x] Configure Stripe test secret and signed webhook secret. Subscribe to checkout.session.completed and checkout.session.async_payment_succeeded at /api/payments/webhook.
- [x] Configure IMGBB_API_KEY and verify authenticated live upload/retrieval.
- [ ] Verify both profile and tuition upload forms in the browser.
- [x] Deploy the Express server and Next.js client to Vercel under MH-git-ui (Web workspace), with both GitHub repositories connected.
- [x] Set client API_SERVER_URL to the backend origin. Set server CLIENT_URL and BETTER_AUTH_URL to the frontend HTTPS origin, without trailing slash.
- [ ] Seed the hosted database using SEED_PASSWORD, then supply dedicated admin/tutor credentials in the final submission README.
- [x] Test Stripe sandbox success, repeated webhook delivery and plan refresh.
- [ ] Verify checkout cancellation and the tutor checkout in the browser.
- [ ] Replace demo contact details and social destinations with project-owned details.
- [ ] Confirm the instructor accepts four business collections plus BetterAuth storage in a separate auth database.
- [ ] Confirm one-time Pro pricing or specify the required recurring billing interval.
- [ ] Complete mobile visual verification and test each role on the deployed site, including direct private-route reloads.
- [x] Add verified live URLs; homepage, listings, proxy and authentication API checks return expected responses.

## Hosted verification — November 20, 2026

The canonical deployments are https://mentorlagbe-mh.vercel.app and https://mentorlagbe-api-mh.vercel.app. Both are READY in the MH-git-ui account's Web workspace, with GitHub connections enabled. Use these URLs for review.

Live verification through the frontend API proxy passed for public listings and all three roles: signin, secure session cookies, JWT issuance, dashboard access, admin restrictions and logout revocation. Mobile browser checks at 375px verified the homepage and browse page with no horizontal document overflow; selecting Physics returned two listings. Full dashboard visual checks remain pending.

Earlier provisional deployments in Acme remain separate and are not the submission URLs. No deletion was performed during the account switch.

Cloud MongoDB was successfully seeded with five demo accounts, twelve approved tuitions and three applications. The seed password is kept only in the server's ignored .env file. All 23 local backend tests pass, including demo-account sign-in and repeatable seeding. Stripe and ImgBB were subsequently configured and verified as recorded below.

The original requirements.md preserves the full assignment scope. Unchecked items there are historical implementation planning, not a substitute for this evidence-based release checklist. Do not claim live payments/uploads/deployment work before these checks pass.

## Integration verification — November 21, 2026

Stripe test credentials, signed webhooks and ImgBB are configured in Vercel. Authenticated ImgBB upload and hosted image retrieval passed. A $10 USD sandbox checkout completed, the success page confirmed payment, and the demo student dashboard showed Pro after reload. Automatic and manually resent Stripe webhooks both returned HTTP 200; repeated verification and delivery retained exactly one MongoDB payment record. No real money was charged. Adaptive Pricing is disabled to preserve the fixed USD plan prices. All 23 backend tests passed.

Browser checks for checkout cancellation, the $15 tutor checkout, both upload forms and the remaining role dashboards are still pending. The existing collection-count clarification and project contact requirements remain open.
