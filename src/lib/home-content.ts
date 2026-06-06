/** Home-page trust, pricing highlights, and social proof — replace testimonials with verified quotes when available. */

import { stockImages } from "@/lib/stock-images";

/**
 * Looping hero background. Use `youtubeId` for a YouTube loop, or add `public/videos/hero-loop.mp4`.
 * Self-hosted is better for production (no branding, faster). YouTube is fine for previews.
 */
export const heroVideo = {
  enabled: true,
  /** https://youtu.be/09w5NOv0fhQ — loops via iframe API (no playlist param) */
  youtubeId: "09w5NOv0fhQ",
  mp4: "/videos/hero-loop.mp4",
  webm: "/videos/hero-loop.webm",
  /** Not shown on load — gradient only until video fades in */
  poster: stockImages.hero,
} as const;

export const heroOutcome =
  "Pvt Ltd in 7–10 days · GST on schedule · Fixed quote before you pay";

export const heroOutcomePills = [
  "Quote before you pay",
  "Government fees itemised",
  "Named advisor on WhatsApp",
] as const;

/** Founder lifecycle shown in the home hero journey panel */
export const heroJourneySteps = [
  {
    title: "Incorporate",
    detail: "Pvt Ltd · COI, PAN & TAN",
    status: "complete" as const,
  },
  {
    title: "GST",
    detail: "Registration & monthly returns",
    status: "active" as const,
  },
  {
    title: "ROC",
    detail: "Annual MCA filings",
    status: "upcoming" as const,
  },
  {
    title: "Ongoing",
    detail: "One advisor on WhatsApp",
    status: "upcoming" as const,
  },
] as const;

export const homeServiceHighlights: Record<
  string,
  { fromPrice: string; timeline: string }
> = {
  start: { fromPrice: "Pvt Ltd from ₹8,000+", timeline: "7–10 days avg." },
  tax: { fromPrice: "GST reg from ₹3,500+", timeline: "3–5 days avg." },
  protect: { fromPrice: "TM filing from ₹6,500+", timeline: "6–12 months" },
  compliance: { fromPrice: "ROC annual from ₹5,000+", timeline: "On calendar" },
  grow: { fromPrice: "HR setup from ₹4,500+", timeline: "7–10 days" },
};

/** Wix-style alternating image + copy blocks on the home page */
export const homeWhyBlocks = [
  {
    eyebrow: "Upfront pricing",
    title: "Every fee itemised before you transfer",
    body:
      "Professional fees and government charges are listed separately on every quote — no surprise add-ons after you've paid MCA or GSTN.",
    imageKey: "servicesStart" as const,
    points: [
      "Fixed packages on email before payment",
      "MCA, GSTN, and stamp duties broken out line by line",
      "Changes scoped in writing before extra work",
    ],
    href: "/startup-bundle",
    cta: "See startup packages",
  },
  {
    eyebrow: "Stay in the loop",
    title: "WhatsApp updates, not endless email threads",
    body:
      "Your named advisor shares checklist progress, portal screenshots, and filing confirmations — the way modern founders expect to work.",
    imageKey: "contact" as const,
    points: [
      "Same advisor from incorporation through GST",
      "Document review within 24–48 hours",
      "Status updates when MCA or GST portals move",
    ],
    href: "/contact",
    cta: "Book a free call",
  },
] as const;

export const comparisonScenario = {
  traditional:
    "3+ weeks · endless email · surprise add-ons after you've paid government fees",
  pelago:
    "7–10 days · WhatsApp updates · quote agreed upfront — government fees itemised",
} as const;

export const testimonials = [
  {
    quote:
      "They sent a document checklist the same day and incorporated our Pvt Ltd in eight working days. Every government fee was listed separately on the invoice.",
    name: "Anjali K.",
    role: "D2C founder",
    location: "Kozhikode",
    service: "Pvt Ltd + GST",
    rating: 5,
  },
  {
    quote:
      "Our advisor chased MCA status without us asking. GST filing reminders on WhatsApp saved us from a late fee in our first year.",
    name: "Rahul M.",
    role: "SaaS co-founder",
    location: "Bengaluru",
    service: "GST + ROC",
    rating: 5,
  },
  {
    quote:
      "We compared three CAs — Pelago was the only one with fixed packages on email before we transferred anything.",
    name: "Priya S.",
    role: "Consultancy partner",
    location: "Kochi",
    service: "LLP registration",
    rating: 5,
  },
] as const;

export const teamTrust = {
  title: "Named advisors, not a ticket queue",
  subtitle:
    "Every engagement gets a dedicated point of contact at our Kozhikode office — same person from incorporation through your first GST cycle.",
  points: [
    "Direct WhatsApp line to your advisor",
    "Document review within 24–48 hours",
    "Status screenshots from MCA / GST portals",
  ],
} as const;

export const featuredTools = [
  { id: "gst" as const, label: "GST Calculator" },
  { id: "incorporation" as const, label: "Incorporation cost" },
  { id: "runway" as const, label: "Runway planner" },
] as const;

export const homeExtraFaqs = [
  {
    q: "What if MCA rejects our company name?",
    a: "We run name availability checks before filing and suggest alternates. A rejection usually means a quick resubmission — no duplicate government fee for a standard name change in most cases.",
  },
  {
    q: "Are government fees included in your quote?",
    a: "Yes — we itemise Pelago professional fees and government/stamp charges separately on every quote so you know exactly what goes to MCA, GSTN, or the trademark office.",
  },
  {
    q: "Who handles my documents and data?",
    a: "Your named advisor and our internal compliance team only. Documents are shared over secure channels; we don't sell data or bundle unrelated services without your sign-off.",
  },
] as const;
