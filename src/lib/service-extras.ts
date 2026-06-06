import type { ToolId } from "@/lib/tools";

/** Extra copy and cross-links per service line item */
export const serviceExtras: Record<
  string,
  { valueLabel: string; toolId?: ToolId; learnSlug?: string }
> = {
  "Private Limited Company": { valueLabel: "Investor-ready structure", learnSlug: "choosing-structure" },
  "LLP Registration": { valueLabel: "Light compliance for partners", learnSlug: "choosing-structure" },
  "Partnership Firm": { valueLabel: "Fast setup for trusted partners" },
  "Startup India Registration": { valueLabel: "DPIIT benefits unlocked", learnSlug: "dipp-recognition" },
  "MSME Registration": { valueLabel: "Udyam for tenders & credit", toolId: "msme-udyam", learnSlug: "dipp-recognition" },
  "GST Registration": { valueLabel: "GSTIN in days", toolId: "gst", learnSlug: "gst-basics" },
  "Monthly GST Filing": { valueLabel: "On-time GSTR-1/3B", toolId: "gst" },
  "Income Tax Filing (ITR)": { valueLabel: "Books-aligned returns", toolId: "advance-tax" },
  "TDS Returns": { valueLabel: "Quarterly compliance", toolId: "tds", learnSlug: "tds" },
  "Accounting & Bookkeeping": { valueLabel: "Investor-grade books", toolId: "burn-rate", learnSlug: "cash-flows" },
  "Trademark Registration": { valueLabel: "Protect brand nationwide" },
  "Copyright Registration": { valueLabel: "Secure creative IP" },
  "ISO 9001 Certification": { valueLabel: "Enterprise trust signal" },
  "FSSAI License": { valueLabel: "Food business compliance" },
  "Annual ROC Filings": { valueLabel: "MCA good standing", learnSlug: "roc-filings" },
  "Statutory Audit Support": { valueLabel: "Clean audit trail" },
  "Director KYC": { valueLabel: "DIR-3 on time" },
  "Labour & Shop Act Registrations": { valueLabel: "PF, ESI, S&E", toolId: "pf-contribution", learnSlug: "pf-esi" },
  "HR Policy Setup": { valueLabel: "Scale-ready people ops" },
  "Payroll Structuring": { valueLabel: "CTC that works", toolId: "employee-cost", learnSlug: "salary-ctc" },
  "Business Strategy": { valueLabel: "Growth with compliance", toolId: "mrr-arr" },
  "Project Reports for Loans": { valueLabel: "Bank-ready narrative" },
};

export function countServices(
  sections: readonly { items: readonly unknown[] }[],
): number {
  return sections.reduce((n, s) => n + s.items.length, 0);
}
