export type ToolCategory = "All" | "Tax" | "Finance" | "Hiring" | "Fundraising" | "Setup";

export type ToolId =
  | "gst"
  | "gst-reverse"
  | "burn-rate"
  | "runway"
  | "incorporation"
  | "tds"
  | "advance-tax"
  | "employee-cost"
  | "pf-contribution"
  | "break-even"
  | "profit-margin"
  | "roi"
  | "mrr-arr"
  | "equity-dilution"
  | "safe-cap"
  | "msme-udyam";

export type ToolDefinition = {
  id: ToolId;
  name: string;
  category: Exclude<ToolCategory, "All">;
  desc: string;
  valueLabel: string;
  why: string;
  tips: string[];
  relatedBlogSlug?: string;
  relatedLearnSlug?: string;
};

export const toolCategories: ToolCategory[] = [
  "All",
  "Tax",
  "Finance",
  "Hiring",
  "Fundraising",
  "Setup",
];

export const tools: ToolDefinition[] = [
  {
    id: "gst",
    name: "GST Calculator",
    category: "Tax",
    valueLabel: "Invoice-ready GST",
    desc: "Split GST from taxable value for 0%, 5%, 12%, 18%, and 28% slabs—match what you put on GSTR-1.",
    why: "Wrong GST on invoices blocks buyer ITC and triggers rework.",
    tips: [
      "Show tax breakdown separately on B2B invoices—buyers need it for GSTR-2B matching.",
      "Export invoices may be zero-rated; domestic B2B usually needs GSTIN on the bill.",
      "GST collected is not revenue—park it in a liability line in your books.",
    ],
    relatedBlogSlug: "gst-registration-india",
    relatedLearnSlug: "gst-basics",
  },
  {
    id: "burn-rate",
    name: "Burn Rate Estimator",
    category: "Finance",
    valueLabel: "Know monthly cash out",
    desc: "Add rent, payroll, software, and misc costs to see true monthly burn—not just salary.",
    why: "Founders underestimate burn when they ignore GST payments, TDS, and annual prepaids.",
    tips: [
      "Include founder salaries if on payroll; exclude one-time legal if tagged separately.",
      "Add 2-month buffer for GST and advance tax when planning runway.",
      "Net burn = burn minus monthly revenue (even if lumpy).",
    ],
    relatedBlogSlug: "accounting-bookkeeping-startups",
    relatedLearnSlug: "burn-rate",
  },
  {
    id: "runway",
    name: "Runway Calculator",
    category: "Finance",
    valueLabel: "Months of cash left",
    desc: "Divide cash in bank by monthly net burn to see when you must break even or raise.",
    why: "Investors ask runway in the first meeting—have a number, not a guess.",
    tips: [
      "Below 6 months: freeze discretionary spend and model bridge scenarios.",
      "Use net burn after revenue, not gross burn, if you have paying customers.",
      "Pelago clients often pair this with our Burn Rate tool then book a compliance review.",
    ],
    relatedLearnSlug: "burn-rate",
  },
  {
    id: "incorporation",
    name: "Incorporation Cost",
    category: "Setup",
    valueLabel: "Budget to incorporate",
    desc: "Estimate government fees plus professional costs for Pvt Ltd, LLP, or OPC before you commit.",
    why: "Surprise stamp duty or high authorised capital inflates day-one costs by ₹10,000+.",
    tips: [
      "Stamp duty varies by state and authorised capital—don't default to ₹10L capital for vanity.",
      "Add DSC, current account, and first-year compliance retainer to your real budget.",
      "Cheapest structure isn't always cheapest after 12 months—compare LLP vs Pvt Ltd total cost.",
    ],
    relatedBlogSlug: "private-limited-company-registration",
    relatedLearnSlug: "incorporation-process",
  },
  {
    id: "tds",
    name: "TDS Calculator",
    category: "Tax",
    valueLabel: "Deduct before you pay",
    desc: "Estimate TDS on contractor, professional, and commission payments under common sections.",
    why: "Paying gross without TDS creates compliance debt and vendor 26AS mismatches.",
    tips: [
      "194J (10%) for most consultants; 194C for contractors—rate depends on payee type.",
      "Deposit TDS by the 7th and file quarterly returns—late deposit has interest.",
      "Employees are Section 192 via payroll, not 194J, even if they feel like consultants.",
    ],
    relatedBlogSlug: "tds-returns-compliance",
    relatedLearnSlug: "tds",
  },
  {
    id: "employee-cost",
    name: "Employee Cost",
    category: "Hiring",
    valueLabel: "CTC vs in-hand",
    desc: "Rough monthly in-hand and employer PF from annual CTC before you send an offer letter.",
    why: "Candidates reject offers when promised '₹1L in-hand' doesn't match CTC math.",
    tips: [
      "Basic salary drives PF—very low basic saves PF but hurts employee long-term benefits.",
      "New vs old tax regime changes take-home for the same CTC.",
      "Employer cost ≈ CTC + any insurance, gratuity accrual, and admin overhead.",
    ],
    relatedBlogSlug: "payroll-ctc-structuring",
    relatedLearnSlug: "salary-ctc",
  },
  {
    id: "break-even",
    name: "Break-Even Point",
    category: "Finance",
    valueLabel: "Units to cover costs",
    desc: "Find how many units or orders you need monthly when you know fixed costs and margin per unit.",
    why: "Sales targets without break-even math are wishful thinking.",
    tips: [
      "Separate fixed costs (rent, core team) from variable (COGS, delivery).",
      "For SaaS, translate 'units' to customers × ARPU with gross margin %.",
      "Break-even is monthly unless you annualize all inputs consistently.",
    ],
    relatedLearnSlug: "unit-economics",
  },
  {
    id: "roi",
    name: "ROI Calculator",
    category: "Finance",
    valueLabel: "Was it worth it?",
    desc: "Compare gain against spend for marketing, equipment, or agency projects as a % return.",
    why: "Helps kill channels that look busy but don't pay back in rupees.",
    tips: [
      "Use contribution margin after variable costs, not revenue, for marketing ROI.",
      "Include time cost for founder-led sales—opportunity cost is real.",
      "Pair with payback period for subscriptions (CAC vs LTV).",
    ],
  },
  {
    id: "equity-dilution",
    name: "Equity Dilution",
    category: "Fundraising",
    valueLabel: "Ownership after round",
    desc: "Model pre-money, investment size, and your stake after a priced round (simplified).",
    why: "Founders sign term sheets without knowing post-money ownership.",
    tips: [
      "Option pool created pre-money dilutes founders more than post-money—negotiate size.",
      "This ignores anti-dilution and multiple tranches—use for directional planning only.",
      "Same math applies to angel vs VC; only the amounts change.",
    ],
    relatedBlogSlug: "investment-instruments",
    relatedLearnSlug: "investment-instruments",
  },
  {
    id: "gst-reverse",
    name: "GST Inclusive Split",
    category: "Tax",
    valueLabel: "Back out GST from total",
    desc: "Enter an invoice total that includes GST and split taxable value, tax, and rate—common for retail and B2C bills.",
    why: "Founders mis-book revenue when they treat GST-inclusive collections as full turnover.",
    tips: [
      "For B2B, issue tax-exclusive invoices when possible—cleaner for buyer ITC.",
      "Reverse calculation: taxable = total ÷ (1 + rate/100).",
      "Round to 2 decimals on invoices; books can use paise precision.",
    ],
    relatedBlogSlug: "gst-registration-india",
    relatedLearnSlug: "gst-basics",
  },
  {
    id: "advance-tax",
    name: "Advance Tax Estimator",
    category: "Tax",
    valueLabel: "Quarterly tax instalments",
    desc: "Estimate annual tax liability and split into four advance tax payments (15 Jun, 15 Sep, 15 Dec, 15 Mar).",
    why: "Missing advance tax triggers interest under Sections 234B and 234C—even for profitable startups.",
    tips: [
      "Companies pay advance tax if liability exceeds ₹10,000 after TDS credits.",
      "First instalment (15 Jun): typically 15% of annual estimate; catch up in later quarters.",
      "Pair with Pelago ITR filing so estimates match books, not guesswork.",
    ],
    relatedBlogSlug: "itr-filing-startups",
    relatedLearnSlug: "cash-flows",
  },
  {
    id: "pf-contribution",
    name: "PF Calculator",
    category: "Hiring",
    valueLabel: "Employee + employer PF",
    desc: "Estimate monthly PF on basic wages at 12% employee and 12% employer (capped at wage ceiling).",
    why: "PF miscalculation shows up in EPFO inspections and skews true hiring cost.",
    tips: [
      "PF applies on basic + DA; not on full CTC unless structure is wrong.",
      "Wage ceiling for contribution is ₹15,000/month (statutory cap on calculation).",
      "Register on EPFO when you cross 20 employees—or voluntarily earlier.",
    ],
    relatedBlogSlug: "pf-esi-labour-compliance",
    relatedLearnSlug: "pf-esi",
  },
  {
    id: "profit-margin",
    name: "Profit Margin",
    category: "Finance",
    valueLabel: "Gross & net margin %",
    desc: "From revenue and direct costs, see gross margin; add operating expenses for a simple net margin view.",
    why: "Investors and lenders ask margin % before they ask about logo design.",
    tips: [
      "Gross margin = (Revenue − COGS) ÷ Revenue; COGS is delivery, not rent.",
      "Net margin needs consistent monthly opex—don't mix one-off legal fees.",
      "SaaS: use gross margin after hosting and payment gateway, not just people cost.",
    ],
    relatedBlogSlug: "accounting-bookkeeping-startups",
    relatedLearnSlug: "unit-economics",
  },
  {
    id: "mrr-arr",
    name: "MRR → ARR",
    category: "Finance",
    valueLabel: "Annualize subscription revenue",
    desc: "Convert monthly recurring revenue to ARR and model a simple growth scenario for board updates.",
    why: "Indian SaaS founders report ARR to angels; mixing MRR and one-time fees confuses the room.",
    tips: [
      "ARR = MRR × 12 only for true recurring contracts—not setup fees.",
      "Net revenue retention above 100% means expansion beats churn.",
      "Show both MRR and ARR in pitch decks; label one-time revenue separately.",
    ],
    relatedBlogSlug: "business-strategy-scaling",
    relatedLearnSlug: "unit-economics",
  },
  {
    id: "safe-cap",
    name: "SAFE / Cap Note",
    category: "Fundraising",
    valueLabel: "Ownership at conversion",
    desc: "Rough stake an investor gets when a SAFE or cap note converts at the next priced round.",
    why: "Founders agree to ₹Cr caps without modelling dilution at conversion.",
    tips: [
      "Lower cap = more dilution to founders when round prices above cap.",
      "Discount + cap: investor usually gets the better (for them) of the two.",
      "This is directional—lawyers paper the actual instrument.",
    ],
    relatedBlogSlug: "esop-employee-stock-options",
    relatedLearnSlug: "investment-instruments",
  },
  {
    id: "msme-udyam",
    name: "MSME Classification",
    category: "Setup",
    valueLabel: "Micro / Small / Medium",
    desc: "Check likely MSME category from investment in plant & machinery and annual turnover (manufacturing vs services rules).",
    why: "Wrong classification blocks priority lending, tender preferences, and Udyam-linked schemes.",
    tips: [
      "Udyam registration is free on the government portal—renew when limits change.",
      "Turnover limits were revised; verify latest notification before filing.",
      "Export turnover is often excluded from the turnover test—confirm with your CA.",
    ],
    relatedBlogSlug: "udyam-registration-benefits",
    relatedLearnSlug: "dipp-recognition",
  },
];

export const toolById = Object.fromEntries(tools.map((t) => [t.id, t])) as Record<
  ToolId,
  ToolDefinition
>;

export function getToolByName(name: string): ToolDefinition | undefined {
  return tools.find((t) => t.name === name);
}
