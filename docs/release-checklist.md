# Release checklist

## Implemented and locally verified

- [x] Separate repositories and more than 20 client / 12 server commits.
- [x] Next.js production build and TypeScript check.
- [x] Eighteen backend tests including role/ownership restrictions, duplicate application handling, atomic free limits, and payment idempotency.
- [x] Browser registration, subject filtering and authenticated dashboard reload.
- [x] Twelve approved connected demo tuitions and sample applications.
- [x] Pagination and connected seeding optional features.

## Required before submission

- [ ] Configure cloud MongoDB and independent random BetterAuth/JWT secrets in the server environment.
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

The original requirements.md preserves the full assignment scope. Unchecked items there are historical implementation planning, not a substitute for this evidence-based release checklist. Do not claim live payments/uploads/deployment work before these checks pass.
