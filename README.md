# Pelago Consultants — Website

Next.js 16 marketing site (Fraunces + DM Sans, teal/ink palette). Optimized for **Vercel** static + serverless hosting — no database required.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: contact form email
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com) (Next.js preset).
2. Add contact env vars — see [docs/VERCEL.md](docs/VERCEL.md) and `.env.example`.
3. Deploy. Optional: add your custom domain in project settings.

**Free tier:** Static pages + occasional serverless calls for the contact form are enough for typical consultancy traffic. Do not use on-disk SQLite on Vercel.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about/` | About |
| `/services/` | Services |
| `/clients/` | Client directory + search |
| `/tools/` | Free calculators |
| `/learn/` | Founder Launchpad |
| `/blog/` | Articles |
| `/blog/[slug]/` | Article detail |
| `/careers/` | Jobs |
| `/contact/` | Contact + serverless form |
| `/health-check/` | Compliance health check |
| `/startup-bundle/` | Bundle offer |
| `/api/health` | Deploy health JSON |

## Contact form

Server Action (`src/app/contact/actions.ts`) sends email via **Resend** or **Web3Forms** — no DB. Configure one provider in Vercel environment variables before go-live.

## Images

Brand photos in **`public/images/`** (see **`IMAGE_PROMPTS.md`**). Client logos in **`public/clients/`**.

## Content

Blog and learn content live in `src/lib/blog.ts` and `src/lib/learn.ts`. Edit and redeploy to publish.

## Docs

- [docs/VERCEL.md](docs/VERCEL.md) — deployment, env vars, limits
- [docs/UI-AUDIT.md](docs/UI-AUDIT.md) — optional polish backlog
