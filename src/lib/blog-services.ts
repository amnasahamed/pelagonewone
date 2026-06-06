/**
 * Maps each Pelago service (from serviceSections) to its primary blog guide.
 * Every service on /services should have an entry here.
 */
export const serviceBlogByName: Record<string, string> = {
  "Private Limited Company": "private-limited-company-registration",
  "LLP Registration": "llp-registration-india",
  "Partnership Firm": "partnership-firm-registration",
  "Startup India Registration": "startup-india-tax-benefits",
  "MSME Registration": "udyam-registration-benefits",
  "GST Registration": "gst-registration-india",
  "Monthly GST Filing": "gst-filing-calendar-2024",
  "Income Tax Filing (ITR)": "itr-filing-startups",
  "TDS Returns": "tds-returns-compliance",
  "Accounting & Bookkeeping": "accounting-bookkeeping-startups",
  "Trademark Registration": "trademark-registration-guide",
  "Copyright Registration": "copyright-registration-india",
  "ISO 9001 Certification": "iso-9001-brand-trust",
  "FSSAI License": "fssai-food-license-guide",
  "Annual ROC Filings": "annual-return-filing-guide",
  "Statutory Audit Support": "statutory-audit-india",
  "Director KYC": "director-kyc-dir3-guide",
  "Labour & Shop Act Registrations": "pf-esi-labour-compliance",
  "HR Policy Setup": "hr-policy-setup-startups",
  "Payroll Structuring": "payroll-ctc-structuring",
  "Business Strategy": "business-strategy-scaling",
  "Project Reports for Loans": "project-report-bank-loan",
} as const;

export function getBlogSlugForService(serviceName: string): string | undefined {
  return serviceBlogByName[serviceName as keyof typeof serviceBlogByName];
}

/** Validate at build time that all service items have a blog slug */
export function assertServiceBlogCoverage(
  serviceNames: readonly string[],
): void {
  const missing = serviceNames.filter((name) => !serviceBlogByName[name]);
  if (missing.length > 0 && process.env.NODE_ENV === "development") {
    console.warn("[blog-services] Missing blog mapping for:", missing);
  }
}
