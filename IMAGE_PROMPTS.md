# Image placeholders & generation prompts

Replace files under `public/images/` when you have final assets. Each placeholder in the UI maps to a prompt below.

| File | Used on | Prompt |
|------|---------|--------|
| `hero-founder.jpg` | Home hero | Creative abstract illustration — navy/blue compliance motif (documents, shield, growth), modern editorial 3D-flat style, no text |
| `about-team.jpg` | About | Professional team photo, small Indian business consultancy of 4 people in smart casual at HiLITE Business Park office, diverse ages, warm natural light, candid not posed corporate cliché |
| `about-office.jpg` | About | Architectural interior shot of modern business park office corridor in Kozhikode, clean lines, plants, soft daylight, no people |
| `services-incorporation.jpg` | Services | Close-up hands stamping approved company registration certificate on wooden desk, Indian context, teal accent folder, documentary photography |
| `services-tax.jpg` | Services | Organized desk with GST return forms, calculator, laptop showing spreadsheet, calm focused mood, overhead angle |
| `contact-consultation.jpg` | Contact | Friendly consultant on video call with startup founder, laptop and notebook, warm office, authentic Indian business setting |
| `careers-culture.jpg` | Careers | Young professionals collaborating at whiteboard with compliance workflow, energetic startup office India, natural light |
| `blog-default.jpg` | Blog cards | Abstract minimal composition, startup paperwork and coffee on marble, soft shadows, muted teal and cream palette |

### Hero background video (optional loop)

| File | Notes |
|------|--------|
| `public/videos/hero-loop.mp4` | Primary loop (H.264). Target **&lt; 5 MB**, **10–20 s**, no audio. |
| `public/videos/hero-loop.webm` | Optional VP9/WebM for smaller downloads. |

**Content ideas:** slow office B-roll (advisor at desk, signing documents, Kozhikode skyline), or abstract navy/blue motion graphics. Keep movement subtle so the scrim and copy stay readable.

Toggle in `src/lib/home-content.ts` → `heroVideo.enabled`. Poster fallback uses `hero-founder.jpg`. Respects `prefers-reduced-motion` (static poster only).

Also see `src/lib/image-prompts.ts` for programmatic access.
