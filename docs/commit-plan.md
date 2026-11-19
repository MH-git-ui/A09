# User-owned commit checkpoints

The assistant must not create commits or push. Tell the user when a coherent milestone is verified and ready to commit. The user controls Git history. Check actual Git history rather than counting this checklist as completed commits.

The client requires at least **20 meaningful commits** and the server at least **12**, in separate repositories. Existing documentation commits are recorded in Git but this plan includes enough substantive work without relying on those initial commits. Checkpoints can change with implementation needs; do not create empty or artificial commits.

## Client: A09

1. Next.js/TypeScript foundation, UI dependencies, Warm Academic tokens, and homepage foundation.
2. Responsive shared navigation, mobile menu, footer, and route structure.
3. API client, loading states, error handling, and toast infrastructure.
4. Role-based signup form and validation.
5. Signin/signout and persistent authenticated session state.
6. Protected role-specific dashboard layout and navigation.
7. Reusable tuition cards and database-backed featured listings.
8. Browse page with server-side search and filters.
9. Server-side pagination and URL-persisted browse state.
10. Complete tuition details and tutor summary.
11. Student application form and duplicate/error feedback.
12. Student dashboard statistics and pending application cancellation.
13. Tutor tuition form and ImgBB banner upload.
14. Tutor listing edits, deletion, active toggle, and free-plan limit UI.
15. Tutor overview and applicant decisions.
16. Admin overview and tuition moderation.
17. Admin users and role management.
18. Profile editing and ImgBB profile upload.
19. Pricing and authenticated Stripe checkout.
20. Verified payment outcome pages and plan refresh.
21. Admin payment history.
22. Finish homepage sections, imagery, motion, and responsive accessibility review.
23. Deployment, route/session reload verification, and submission README.

## Server: A09-server

1. Express foundation, health endpoint, CORS, and error handling with HTTP tests.
2. Validated configuration, MongoDB connection, collection/index design.
3. BetterAuth adapter and secure student/tutor registration.
4. Authenticated JWT issuance and role/ownership middleware.
5. Public approved/active tuition query, search, filtering, pagination.
6. Tutor tuition CRUD, plan limit, and image validation.
7. Student applications, duplicate protection, pending cancellation.
8. Tutor applicant status management and dashboard aggregates.
9. Admin moderation, user role management, and platform statistics.
10. Profile update and image integration.
11. Stripe checkout, verified idempotent payment sync, and transactions.
12. Connected realistic seed data with at least 12 approved tuitions.
13. Integration/security checks and production deployment documentation.

## Decisions that must not be silently skipped

- BetterAuth normally needs auth persistence beyond the four business collections. Resolve the strict collection-count interpretation before implementing MongoDB persistence.
- Pro pricing is $15 tutor / $10 student; billing interval is unspecified.
- Choose at least two optional features: planned server-side pagination and realistic connected seeding.
- Demo credentials must be dedicated testing accounts, never personal credentials.
