# Optional Vercel hosting

The current deployment target is Infinity. See [INFINITY.md](INFINITY.md) for the GitHub Actions setup and server details.

The project now uses Next.js static export (`output: "export"`). `npm run build` creates `out/`; there is no application server at runtime. If hosting this version on Vercel, use the static `out` directory as the build output and configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` at build time.

The contact form submits directly from the browser to Web3Forms. The older Server Action and Resend implementation remain in the source for reference but are not connected to the current form. `RESEND_API_KEY` and `WEB3FORMS_ACCESS_KEY` do not configure this static version. Never expose a Resend key with a `NEXT_PUBLIC_` prefix.

Optional Sanity build variables are `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION`. Without a project ID, public pages use bundled content in `src/lib/`. Studio lives at `/studio/` and uses hash navigation. Content changes require a new build. Add the deployed origin to Sanity CORS settings for Studio access.

`SANITY_API_WRITE_TOKEN` is only for the local migration script, not a public variable or deployment requirement. `/api/health` contains a static build marker, including the generation timestamp; it does not report current server uptime.
