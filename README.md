# MentorLagbe

MentorLagbe is a tuition and mentorship platform that connects students with tutors in Bangladesh. Students can discover suitable tuition, tutors can manage listings and applications, and administrators can oversee users, moderation and payments.

## Live website and repositories

- **Live website:** [MentorLagbe](https://mentorlagbe-mh.vercel.app)
- **Client repository:** [MH-git-ui/A09](https://github.com/MH-git-ui/A09)
- **Server repository:** [MH-git-ui/A09-server](https://github.com/MH-git-ui/A09-server)
- **Live API:** [MentorLagbe API](https://mentorlagbe-api-mh.vercel.app)

## Demo login credentials

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Tutor | tutor@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |
| Student | student@mentorlagbe.demo | 3UG2aX8GbPtzeDYmMhAT_I0Aa5U |

These accounts are provided for evaluating the hosted project. Local development generates a separate password in the server's ignored `.local/config.json` file.

## Key features

- Student and tutor registration with BetterAuth, persistent sessions and role-based dashboards.
- Search approved tuitions by title or subject; filter by subject, class and learning mode.
- Tuition details with schedules, tutor information, monthly fees and application forms.
- Student application tracking, duplicate prevention and pending-application cancellation.
- Tutor tuition creation, editing, deletion, active/closed status and applicant decisions.
- Admin user-role management, tuition approval/rejection, platform statistics and transactions.
- Free and Pro plans: tutors can post two tuitions for free or upgrade for unlimited posts and a verified badge; Pro students receive priority application review.
- Stripe Checkout with verified payment results and ImgBB uploads for profiles and tuition banners.
- Responsive Warm Academic design, mobile dashboard navigation, loading states, toast notifications and a custom error/404 experience.
- Server-side pagination and twelve realistic, connected demo tuitions.

## Technologies and npm packages

| Package | Purpose |
| --- | --- |
| Next.js, React, React DOM | App Router pages and interactive interface |
| TypeScript | Type checking |
| Tailwind CSS, @tailwindcss/postcss, DaisyUI | Styling and UI utilities |
| lucide-react | Interface icons |
| sonner | Toast notifications |
| Prettier | Code formatting |

## Run locally

Use Node.js 22+ and pnpm 11.25.0. Start the sibling server first:

```bash
cd ../A09-server
pnpm install
pnpm dev:local
```

In another terminal, start the client:

```bash
cd A09
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000). Copy `.env.example` to `.env.local` if you need to change `API_SERVER_URL`; its default is `http://127.0.0.1:5000`. The same-origin API proxy keeps authentication cookies on the frontend domain.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm typecheck` | Check TypeScript |
| `pnpm build` | Create production build |
| `pnpm start` | Serve production build |

## Payments and deployment

Stripe runs in test mode. Pro upgrades are one-time payments of **$15 USD for tutors** and **$10 USD for students**; tuition fees are separate monthly BDT amounts. To test an upgrade, register a new free account and use Stripe test card `4242 4242 4242 4242`, a future expiry and any three-digit CVC. The seeded tutor and student accounts already have Pro.

Both applications are deployed on Vercel, with MongoDB Atlas for persistence. See the [deployment guide](docs/vercel-deployment.md) for environment configuration. Service secrets and local environment files are excluded from Git.
