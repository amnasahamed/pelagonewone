# Deploying on Vercel (Hobby / free tier)

This site is built for **static-first** hosting with **Sanity CMS** for content. Marketing pages are generated at build time and pull from Sanity when env vars are set. There is **no SQLite or filesystem database** — safe for Vercel serverless.

## Quick deploy

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com), **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build` (default). Output: Next.js default.
5. Add environment variables (see below), then deploy.

Custom domain: Project → **Settings → Domains**.

## Environment variables

Set these in Vercel → **Settings → Environment Variables** (Production + Preview).

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | **Yes** | Sanity project ID (e.g. `v4ec3fro`) |
| `NEXT_PUBLIC_SANITY_DATASET` | **Yes** | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Optional | Defaults to `2024-01-01` |
| `RESEND_API_KEY` | One of Resend **or** Web3Forms | Send contact form email via [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Optional | Inbox (defaults to `info@pelagoconsultants.com`) |
| `CONTACT_FROM_EMAIL` | Optional with Resend | Verified sender (use `onboarding@resend.dev` only for testing) |
| `WEB3FORMS_ACCESS_KEY` | Alternative to Resend | [Web3Forms](https://web3forms.com) — no extra npm deps |

**Do not** add `SANITY_API_WRITE_TOKEN` to Vercel — that token is for local migration only.

Without Sanity env vars, the site falls back to bundled static content in `src/lib/`.

Local dev: copy `.env.example` to `.env.local`. With no contact keys, submissions log to the terminal and return success.

### Sanity CORS (required for Studio)

In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → CORS origins**, add:

- `http://localhost:3000` (local dev, credentials enabled)
- `https://your-production-domain.com` (after deploy, credentials enabled)

## What runs on the server

| Feature | Runtime | Notes |
|---------|---------|--------|
| Marketing pages | Static (SSG) | Pre-rendered at build; content from Sanity |
| `/blog/[slug]/`, `/learn/[lessonId]/` | Static | Slugs from CMS at build time |
| `/studio/` | Dynamic | Sanity Studio embedded in the app |
| Contact form | Server Action | `src/app/contact/actions.ts` |
| Health check | Edge/API route | `GET /api/health` |

## Content updates

1. Edit in **Sanity Studio** at `https://your-domain.com/studio/`
2. **Redeploy** on Vercel (or trigger rebuild) so static pages pick up new content at build time

For a one-time import from code: run `npm run sanity:migrate` locally with `SANITY_API_WRITE_TOKEN` in `.env.local`.

CMS content types: home page, blog, learn (modules + lessons), clients, services, tools, careers, testimonials, FAQs.

## Verify after deploy

- Home, services, clients, blog, learn load quickly (static).
- `/studio/` loads and you can sign in to Sanity.
- `/contact/` — submit test message (with env vars set).
- `/api/health` — returns `{ "ok": true }`.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Pages show old content after CMS edit | Redeploy on Vercel (SSG rebuild) |
| Studio blank / CORS error | Add production URL to Sanity CORS origins |
| Contact form error in production | Add `RESEND_API_KEY` or `WEB3FORMS_ACCESS_KEY` in Vercel env |
| Resend 403 / domain | Verify domain in Resend; set `CONTACT_FROM_EMAIL` |
| Images 404 | Ensure files exist under `public/` |
| Trailing slash | Site uses `trailingSlash: true` — links should use `/about/` style |
