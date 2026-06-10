export const serviceSections = [
  {
    id: "start",
    title: "Start your business",
    subtitle: "Get registered and ready to operate",
    items: [
      { name: "Private Limited Company", timeline: "10–15 days", desc: "Limited liability, funding-ready, professional credibility." },
      { name: "LLP Registration", timeline: "10–15 days", desc: "Ideal for consultancies and partnerships with lighter compliance." },
      { name: "Partnership Firm", timeline: "3–5 days", desc: "Simple structure for trusted co-founders and family ventures." },
      { name: "Startup India Registration", timeline: "3–5 days", desc: "DPIIT recognition, tax benefits, and funding access." },
      { name: "MSME Registration", timeline: "1–2 days", desc: "Udyam registration for tenders, subsidies, and better loan terms." },
    ],
  },
  {
    id: "tax",
    title: "Tax & GST",
    subtitle: "Stay compliant and optimize legally",
    items: [
      { name: "GST Registration", timeline: "3–5 days", desc: "Mandatory above turnover thresholds; unlock input tax credits." },
      { name: "Monthly GST Filing", timeline: "Monthly", desc: "On-time returns to avoid penalties and maximize credits." },
      { name: "Income Tax Filing (ITR)", timeline: "Annual", desc: "Personal and business returns with legitimate deductions." },
      { name: "TDS Returns", timeline: "Quarterly", desc: "Salary and contractor TDS deducted, deposited, and reported." },
      { name: "Accounting & Bookkeeping", timeline: "Monthly", desc: "Clear books and monthly reports you can act on." },
    ],
  },
  {
    id: "protect",
    title: "Protect your business",
    subtitle: "Legal shields for brand and IP",
    items: [
      { name: "Trademark Registration", timeline: "6–12 months", desc: "Protect name, logo, and tagline nationwide." },
      { name: "Copyright Registration", timeline: "6–8 months", desc: "Secure creative assets — code, design, content." },
      { name: "ISO 9001 Certification", timeline: "15–30 days", desc: "Signal quality standards to enterprise clients." },
      { name: "FSSAI License", timeline: "15–30 days", desc: "Required for food businesses selling in India." },
    ],
  },
  {
    id: "compliance",
    title: "Stay compliant",
    subtitle: "Ongoing filings without surprises",
    items: [
      { name: "Annual ROC Filings", timeline: "Annual", desc: "AOC-4, MGT-7, and related MCA compliance." },
      { name: "Statutory Audit Support", timeline: "Annual", desc: "Coordinate auditors and close books on schedule." },
      { name: "Director KYC", timeline: "Annual", desc: "DIR-3 KYC with reminders before deadlines." },
      { name: "Labour & Shop Act Registrations", timeline: "Varies", desc: "Shop establishment, PF, ESI where applicable." },
    ],
  },
  {
    id: "grow",
    title: "Grow & scale",
    subtitle: "Systems for the next stage",
    items: [
      { name: "HR Policy Setup", timeline: "7–10 days", desc: "Contracts, leave policy, and handbook essentials." },
      { name: "Payroll Structuring", timeline: "5–7 days", desc: "Tax-efficient CTC with PF, ESI, and PT compliance." },
      { name: "Business Strategy", timeline: "Custom", desc: "Growth roadmaps and operational improvements." },
      { name: "Project Reports for Loans", timeline: "7–10 days", desc: "Bank-ready documentation for funding." },
    ],
  },
] as const;

export { tools } from "@/lib/tools";
export type { ToolDefinition, ToolId, ToolCategory } from "@/lib/tools";

export { learnModules, learnStats } from "@/lib/learn";
export { blogPosts, blogCategories } from "@/lib/blog";
export type { BlogPost, BlogCategory } from "@/lib/blog";
export { serviceBlogByName, getBlogSlugForService } from "@/lib/blog-services";

export const faqs = [
  { q: "How much does company registration cost?", a: "Private Limited starts from ₹18,000+ including professional and government fees; LLP is comparable. We quote upfront — no hidden line items." },
  { q: "How long does incorporation take?", a: "With documents ready, Pvt Ltd or LLP is usually 10–15 working days including COI, PAN, and TAN." },
  { q: "Do I need GST as a startup?", a: "Mandatory above ₹20L turnover (₹10L in special category states) or for certain e-commerce cases. Early GST can help with input credits." },
  { q: "What documents do directors need?", a: "PAN, Aadhaar, photo, and address proof per director. We send a tailored checklist after your first call." },
] as const;

export const comparison = {
  traditional: ["Opaque pricing", "Slow email loops", "Generic templates", "No proactive reminders"],
  pelago: ["Fixed packages", "WhatsApp + dedicated advisor", "Startup-specific playbooks", "Deadline alerts built in"],
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    desc: "WhatsApp or a free call. We map services to your stage — pre-revenue, funded, or scaling.",
    deliverable: "Scope + fixed quote within 24 hours",
  },
  {
    step: "02",
    title: "Share documents",
    desc: "Secure upload or WhatsApp. We review and flag gaps before filing.",
    deliverable: "Tailored checklist + gap review",
  },
  {
    step: "03",
    title: "We file & follow up",
    desc: "Government portals, status tracking, and updates without you chasing.",
    deliverable: "Filing refs + portal status screenshots",
  },
  {
    step: "04",
    title: "Receive deliverables",
    desc: "Certificates and compliance docs digitally — physical copies when required.",
    deliverable: "COI, PAN, TAN, GST cert — digital vault",
  },
] as const;

export { careerRoles as openRoles } from "@/lib/careers-content";
export type { CareerRole } from "@/lib/careers-content";
