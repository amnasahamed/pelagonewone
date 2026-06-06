export type CareerRole = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  youAre: string[];
};

export const culturePerks = [
  {
    title: "Small team, real ownership",
    desc: "You'll see your work in client outcomes—not buried in a 200-person hierarchy.",
    icon: "users" as const,
  },
  {
    title: "Founder empathy daily",
    desc: "We serve people building companies for the first time. Patience and clarity are core skills.",
    icon: "heart" as const,
  },
  {
    title: "Hybrid & remote-friendly",
    desc: "Kozhikode HQ at HiLITE Business Park; several roles are remote across India.",
    icon: "map" as const,
  },
  {
    title: "Learn while you ship",
    desc: "Exposure to MCA, GST, ROC, and startup tax—great if you're studying CA/CS or building a compliance career.",
    icon: "graduation" as const,
  },
] as const;

export const hiringSteps = [
  { step: "01", title: "Intro email", desc: "Tell us the role, link your CV or LinkedIn, and one paragraph on why Pelago." },
  { step: "02", title: "Conversation", desc: "30–45 min with a lead—culture fit and how you think through messy founder questions." },
  { step: "03", title: "Short task", desc: "Role-specific (writing sample, mock client email, or compliance checklist)—paid where applicable." },
  { step: "04", title: "Offer", desc: "Clear CTC, location, and start date. We move fast when it's a mutual yes." },
] as const;

export const careerRoles: CareerRole[] = [
  {
    id: "compliance-associate",
    title: "Compliance Associate",
    location: "Kozhikode / Hybrid",
    type: "Full-time",
    summary: "Own filings end-to-end for startup clients—from document collection to MCA/GST status updates.",
    responsibilities: [
      "Prepare and review SPICe+, GST, ROC, and TDS filings with senior review.",
      "Track government portal statuses and chase clients for missing docs politely.",
      "Maintain checklists so deadlines (GSTR-1, advance tax, DIR-3 KYC) never slip.",
    ],
    youAre: [
      "CA inter / CS inter / B.Com with 1–2 years in compliance or audit.",
      "Comfortable with MCA and GST portals; willing to learn fast on edge cases.",
      "Clear written English for founder-facing WhatsApp updates.",
    ],
  },
  {
    id: "inside-sales",
    title: "Inside Sales — Startup Segment",
    location: "Kozhikode",
    type: "Full-time",
    summary: "Help founders choose the right package—incorporation, GST, trademark—not oversell what they don't need.",
    responsibilities: [
      "Respond to inbound WhatsApp and web leads within SLA.",
      "Qualify stage (idea, incorporated, funded) and route to the right service bundle.",
      "Coordinate quotes with operations; follow up until onboarding starts.",
    ],
    youAre: [
      "1+ years in B2B or services sales; startup ecosystem exposure is a plus.",
      "Honest communicator—founders remember when you save them money.",
      "Organised in CRM/spreadsheets; comfortable on calls in English and Malayalam.",
    ],
  },
  {
    id: "content-writer",
    title: "Content Writer (Business / Tax)",
    location: "Remote (India)",
    type: "Part-time",
    summary: "Turn complex Indian compliance topics into guides founders actually read—blog, Learn, and WhatsApp snippets.",
    responsibilities: [
      "Draft and update blog posts and lesson outlines with legal/factual review.",
      "Maintain tone: practical, India-specific, no AI slop or generic US advice.",
      "Suggest tool and Learn cross-links that help founders self-serve before calling.",
    ],
    youAre: [
      "Portfolio of business, finance, or legal-adjacent writing.",
      "Comfort researching MCA/GST notifications and citing sources.",
      "Fast turnarounds; open to feedback from founders and compliance leads.",
    ],
  },
];
