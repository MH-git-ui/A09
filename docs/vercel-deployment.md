# Vercel deployment

Create two Vercel projects from the existing GitHub repositories. No plugin installation is required. The frontend uses Next.js; the backend uses Vercel's native Express support and its root `app.js` export. The repositories include their build settings in `vercel.json`.

## Required account configuration

1. Import `MH-git-ui/A09-server` and `MH-git-ui/A09` into Vercel. Use Node.js 24 for both projects. Keep the generated project domains available for the environment configuration below. An initial deployment without these variables is not a working release.
2. Create a MongoDB Atlas cluster and a dedicated database user. Grant that user read/write access to `mentorlagbe` and `mentorlagbe_auth` for the current authentication implementation. Configure network access for the deployment. Store the connection string only in the backend environment.
3. Add the backend environment variables from the table. Use independent, randomly generated secrets, not the values in `.env.example`. Configure Preview separately if needed; do not point preview deployments at production data by accident.
4. Set the frontend `API_SERVER_URL` to the backend HTTPS origin, without a trailing slash, then deploy the frontend. This variable is used at build time; redeploy after changing it.
5. Redeploy the backend with `CLIENT_URL` and `BETTER_AUTH_URL` both set to the stable frontend HTTPS origin. Requests from the browser use the frontend's `/api` proxy so authentication cookies stay on the frontend domain.
6. Configure the Stripe test webhook on the backend `/api/payments/webhook` for `checkout.session.completed` and `checkout.session.async_payment_succeeded`. Store the endpoint's signing secret as `STRIPE_WEBHOOK_SECRET` and redeploy.
7. Seed the hosted database from the server repository using `pnpm seed` with the hosted environment and a dedicated `SEED_PASSWORD` of at least 12 characters. The seed does not overwrite existing passwords. Do not commit credentials.

| Backend variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `MONGODB_URI` | Atlas connection string |
| `MONGODB_DB` | `mentorlagbe` |
| `CLIENT_URL` | Stable frontend HTTPS origin |
| `BETTER_AUTH_URL` | Same frontend HTTPS origin |
| `BETTER_AUTH_SECRET` | Random secret, at least 32 characters |
| `JWT_SECRET` | Different random secret, at least 32 characters |
| `STRIPE_SECRET_KEY` | Stripe test secret key |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for the deployed webhook |
| `IMGBB_API_KEY` | ImgBB upload key |

Only `API_SERVER_URL` belongs in the frontend environment. The frontend needs no database, Stripe secret, ImgBB key, or JWT secret.

## Verify before submission

- Backend `/api/health` and frontend `/api/health` must return JSON. A deployment-protection sign-in page prevents the frontend proxy and Stripe webhooks from reaching the backend; use an externally reachable production backend.
- Verify signup, signin, private-route refresh and signout on the stable frontend URL.
- Verify all role dashboards, listing moderation, applications, Pro upgrades, and ImgBB uploads. Uploads are capped at 4 MB to fit Vercel's 4.5 MB request limit including multipart overhead.
- Verify Stripe success/cancel and repeat webhook delivery, and check that exactly one transaction is recorded.
- Add verified URLs and dedicated demo credentials to the submission only after successful hosted checks.

## Remaining schema decision

The current official BetterAuth adapter uses four business collections plus a companion authentication database. This does not satisfy a global exactly-four-collections interpretation. Deployment configuration does not resolve that requirement; instructor acceptance or a tested alternative authentication-storage implementation is still required.

References: [Express on Vercel](https://vercel.com/docs/frameworks/backend/express), [function limits](https://vercel.com/docs/functions/limitations).
