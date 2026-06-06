# Pelago website — UI audit report

**Date:** June 3, 2026  
**Method:** Code review + live route verification (`npm run dev`, HTTP 200 on all routes). Viewport checklist applied at 375 / 768 / 1280px against component structure and responsive classes.  
**Templates sampled:** 3 blog articles, 3 learn lessons (see §12).

---

## Executive summary — top 5 themes

1. **Broken / missing color token** — `bg-cream` used on About (Milestones) and Startup Bundle but not defined in `@theme`; sections render as transparent/wrong vs intent.
2. **Dual accent vocabulary** — `teal` (alias of accent) used on utility pages and blog body while marketing pages use `accent`; reads inconsistent in code and risks drift if aliases change.
3. **Layout width drift** — `max-w-6xl` (home, contact, CTA) vs `max-w-7xl` (about, services, learn); not wrong, but utility pages feel narrower without a hero transition.
4. **Repeated dark hero markup** — ~8 pages duplicate the same gradient + grid hero; maintenance cost and subtle CTA/button inconsistencies (raw `Link` vs `Button`).
5. **Utility pages lack marketing rhythm** — Contact, Startup Bundle, and Health Check skip the navy hero; navbar/footer still full chrome — acceptable if styled deliberately (warm background + consistent tokens).

---

## Global chrome

| Area | Score | Findings |
|------|-------|----------|
| Navbar | Minor | Sticky `bg-black` vs page heroes `bg-ink` (#121d40) — slight seam at top. **Fix:** use `bg-ink`. Mobile menu + WhatsApp FAB: FAB 56×56px (pass); menu links lack `focus-visible` ring on some items (Minor). |
| Footer | Pass | 4-column grid, badges, links — consistent with dark chrome. |
| CtaBand | Pass | `max-w-6xl`, navy card, accent glow — reused well; titles customized per page. |
| SectionHeader | Pass | `badge-pill` eyebrows; center/left align — used consistently on inner pages. |
| Button | Pass | Variants cover heroes; focus outline uses `accent`. |
| Design tokens | Major (fixed) | `--cream` missing; `--teal` aliases to accent in `globals.css` but used as separate semantic in JSX. |

---

## Page-by-page findings

### `/` — Home

| Section | Score | Notes |
|---------|-------|-------|
| Hero | Pass | Light gradient hero unique to home; stat dock, chips, animations respect `prefers-reduced-motion`. |
| Services | Pass | Curved overlap into warm background works. |
| Comparison | Pass | Mirrors About comparison data — intentional reinforcement. |
| Testimonials | Pass | |
| Process | Pass | |
| Team trust | Pass | |
| Tools teaser | Pass | |
| Featured blog | Minor | First card `ring-accent/15` — good; grid equal height OK at md+. |
| FAQ | Minor | `home-faq-item` style differs from Services/About FAQ cards (soft panel vs bordered white). |
| CTA | Pass | |

### `/about`

| Section | Score | Notes |
|---------|-------|-------|
| Dark hero + stats | Pass | Matches services/clients pattern. |
| Who we are | Pass | |
| Comparison | Minor | Duplicate of home comparison — OK for narrative. |
| Principles | Pass | |
| Milestones | **Major** | `bg-cream/40` — undefined token. **Fixed → `bg-paper-warm`.** |
| Workspace | Pass | |
| CTA | Pass | |

### `/services`

| Section | Score | Notes |
|---------|-------|-------|
| Hero + anchor pills | Pass | In-page nav pills scroll to `#start` etc. |
| 5 category blocks | Minor | Sticky `MediaVisual` only on `start` and `tax`; `protect` / `compliance` / `grow` keep `lg:grid-cols-[1fr_260px]` with empty right column. **Fixed → single column when no image.** |
| Process | Pass | |
| FAQ | Pass | Bordered white cards — consider aligning home FAQ later (P2). |
| CTA | Pass | |

### `/clients`

| Section | Score | Notes |
|---------|-------|-------|
| Hero | Pass | |
| Logo grid | Minor | 2-col on xs tight for long names; `line-clamp-2` helps. Filter buttons lack visible focus ring (Minor). |
| CTA | Pass | |

### `/tools`

| Section | Score | Notes |
|---------|-------|-------|
| Hero | Pass | |
| Calculator workspace | Pass | Tool cards + panel; `?tool=` deep link works. Mobile: stacked layout from client component. |
| CTA | Pass | |

### `/learn`

| Section | Score | Notes |
|---------|-------|-------|
| Hero + progress glass | Pass | |
| Curriculum | Pass | Mobile module cards vs desktop `CourseOutline` — good split. |
| Sidebar (Up next) | Pass | Sticky at xl. |
| CTA | Pass | |

### `/learn/[lessonId]` (template)

| Section | Score | Notes |
|---------|-------|-------|
| Module header | Pass | Per-module gradient from `learn-theme`. |
| Outline + body | Pass | Numbered sections, tables, checklists render via `LessonContent`. |
| Pagination + CTA | Pass | |

### `/blog`

| Section | Score | Notes |
|---------|-------|-------|
| Hero | Pass | |
| Filter + grid | Pass | Featured post layout strong at lg+. |

### `/blog/[slug]` (template)

| Section | Score | Notes |
|---------|-------|-------|
| Category header | Pass | |
| Takeaways | Pass | |
| Prose | Minor | Checklist icons used `text-teal` — **fixed → accent.** Callout box `border-teal/20` — **fixed.** |
| Related + CTA | Pass | |

### `/careers`

| Section | Score | Notes |
|---------|-------|-------|
| Hero | Pass | |
| Culture | Pass | |
| Open roles | Minor | Role header used hard-coded Tailwind blues, not service module gradients. **Fixed → accent gradient.** |
| Hiring | Pass | |
| CTA | Pass | |

### `/contact`

| Section | Score | Notes |
|---------|-------|-------|
| Page shell | Minor | No dark hero; flat warm page — OK with `utility-page` wrapper. |
| Channels | Minor | `text-teal` on links/icons — **fixed.** |
| Image + form | Minor | Mobile order was info → image → form. **Fixed → info → form → image.** |
| ContactForm | Minor | `focus:border-teal`, `hover:bg-teal` — **fixed;** placeholder alert only (content, not UI). |

### `/startup-bundle`

| Section | Score | Notes |
|---------|-------|-------|
| Split card | **Major** | `bg-cream/50` undefined — **fixed.** Eyebrow/check icons `teal` — **fixed.** |

### `/health-check`

| Section | Score | Notes |
|---------|-------|-------|
| Checklist | Pass | |
| CTA panel | Minor | `bg-teal` panel — **fixed → `bg-accent`.** Copy notes demo/placeholder (out of scope for quiz build). |

---

## §12 — Template samples

### Blog

| Slug | Focus | Result |
|------|--------|--------|
| `pvt-ltd-vs-llp-guide-2024` | Registration, tables (5 sections) | Pass after accent token fix |
| `trademark-registration-guide` | IP / protect category theme | Pass |
| `post-incorporation-compliance-checklist` | Checklists | Pass |

### Learn

| Lesson ID | Focus | Result |
|-----------|--------|--------|
| `choosing-structure` | Module 1, pipe-table paragraph | Pass — table renders in `LessonContent` |
| `cash-flows` | Mid-course, dense prose | Pass |
| `unit-economics` | Financial module theme | Pass |

---

## Prioritized backlog

### P0 — Fixed in this pass

- [x] Replace undefined `bg-cream` with `bg-paper-warm`
- [x] Standardize `teal` UI usage to `accent` on utility pages, blog body, contact form
- [x] Health-check CTA panel uses `bg-accent`

### P1 — Fixed in this pass

- [x] Navbar (and mobile drawer) use `bg-ink` to match heroes
- [x] Contact mobile: form before image
- [x] Services grid: no empty 260px column without sticky image
- [x] Careers role card header uses brand accent gradient
- [x] Utility pages: `utility-page` background wrapper

### P2 — Deferred / future

- [ ] Extract shared `PageHero` component to DRY 8 hero sections
- [ ] Unify FAQ card pattern (home `home-faq-item` vs bordered FAQ elsewhere)
- [ ] Align all inner pages to one container width (`max-w-7xl` vs `max-w-6xl` decision)
- [ ] Add `focus-visible` rings to clients filter chips and blog filters
- [ ] Build interactive health-check quiz (product scope)
- [ ] Wire `ContactForm` to backend

---

## Verification

- `npm run build` — passed (73 static routes).
- All audit routes return HTTP 200 on local dev server.
- `npm run lint` — pre-existing warnings/errors in `useLearnProgress.ts`, `ToolsPageClient.tsx`, `RevealOnScroll.tsx` (unchanged by this pass); no new issues in files modified for UI fixes.
