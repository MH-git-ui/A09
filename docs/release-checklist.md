# Release checklist

## Implemented and locally verified

Verification on November 20, 2026: the production build completed all 22 routes with TypeScript checks. After Vercel preparation, all 22 backend tests passed, including initialization retry/reuse and production configuration checks. These local checks do not verify hosted services.

- [x] Separate repositories and more than 20 client / 12 server commits.
- [x] Next.js production build and TypeScript check.
- [x] Twenty-two backend tests including role/ownership restrictions, duplicate application handling, atomic free limits, payment idempotency, and deployment initialization.
- [x] Vercel project configuration for both repositories, a cached Express entry point, and 4 MB upload limits.
- [x] Browser registration, subject filtering and authenticated dashboard reload.
- [x] Twelve approved connected demo tuitions and sample applications.
- [x] Pagination and connected seeding optional features.

## Required before submission

- [x] Connect and seed cloud MongoDB; provision restricted app credentials and independent BetterAuth/JWT secrets in the initial Vercel API project.
- [ ] Configure Stripe test secret and signed webhook secret. Subscribe to checkout.session.completed and checkout.session.async_payment_succeeded at /api/payments/webhook.
- [ ] Configure IMGBB_API_KEY; test actual image uploads on profile and tuition forms.
- [ ] Deploy the Express server and Next.js client to Node-compatible hosting.
- [ ] Set client API_SERVER_URL to the backend origin. Set server CLIENT_URL and BETTER_AUTH_URL to the frontend HTTPS origin, without trailing slash.
- [ ] Seed the hosted database using SEED_PASSWORD, then supply dedicated admin/tutor credentials in the final submission README.
- [ ] Test actual Stripe success, cancellation, repeated webhook delivery and plan refresh.
- [ ] Replace demo contact details and social destinations with project-owned details.
- [ ] Confirm the instructor accepts four business collections plus BetterAuth storage in a separate auth database.
- [ ] Confirm one-time Pro pricing or specify the required recurring billing interval.
- [ ] Complete mobile visual verification and test each role on the deployed site, including direct private-route reloads.
- [ ] Add the verified live site URL and check for CORS/404/504 failures.

## Initial hosted verification — November 20, 2026

The initial deployments are https://mentorlagbe-client-delta.vercel.app and https://mentorlagbe-api.vercel.app. The homepage, frontend API proxy, API health endpoint and twelve cloud-backed tuitions returned HTTP 200. These are provisional deployments in the Acme workspace, not a completed submission.

Vercel blocked the subsequent API deployment because the Git commit author lacks team access. The API's environment now contains the actual frontend origin, but that update has not reached the running deployment. Authentication on the website remains unverified. The user selected switching to the Vercel account connected to MH-git-ui; account authorization is pending. Git integration also failed in Acme due to repository permissions.

Cloud MongoDB was successfully seeded with five demo accounts, twelve approved tuitions and three applications. The seed password is kept only in the server's ignored .env file. All 23 local backend tests pass, including demo-account sign-in and repeatable seeding. Stripe and ImgBB remain unconfigured.

The original requirements.md preserves the full assignment scope. Unchecked items there are historical implementation planning, not a substitute for this evidence-based release checklist. Do not claim live payments/uploads/deployment work before these checks pass.
