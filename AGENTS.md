<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Deploy (Vercel)

- Static-first: content in `src/lib/*`, no SQLite or filesystem DB.
- Contact form: Server Action + `RESEND_API_KEY` or `WEB3FORMS_ACCESS_KEY` (see `docs/VERCEL.md`, `.env.example`).
- `npm run build` must pass before deploy.
