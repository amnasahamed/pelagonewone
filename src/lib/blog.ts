export type BlogCategory =
  | "All"
  | "Tax & Compliance"
  | "Registration"
  | "Startup"
  | "Certifications"
  | "Legal & IP";

export type BlogSection = { heading: string; paragraphs: string[]; callout?: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "All">;
  readTime: string;
  date: string;
  excerpt: string;
  valueLabel: string;
  keyTakeaways: string[];
  cta: { title: string; subtitle: string; href: string; buttonLabel: string };
  sections: BlogSection[];
};

export const blogCategories: BlogCategory[] = ["All", "Tax & Compliance", "Registration", "Startup", "Certifications", "Legal & IP"];

export const blogPosts: BlogPost[] = [
  {
    "slug": "pvt-ltd-vs-llp-guide-2024",
    "title": "Pvt Ltd vs LLP: The Ultimate Guide for Indian Founders (2024)",
    "category": "Registration",
    "readTime": "8 min",
    "date": "January 28, 2024",
    "excerpt": "Choose the structure that matches your fundraising plan—not just this year's invoice volume—and avoid a costly conversion when investors arrive.",
    "valueLabel": "Pick the right entity in 10 minutes",
    "keyTakeaways": [
      "Pvt Ltd is the default if you want ESOPs, priced equity, or VC cheques within 24 months.",
      "LLP saves ₹8,000–₹15,000 in year-one compliance when you are bootstrapped and service-led.",
      "Audit triggers differ: LLP only beyond ₹40L turnover or ₹25L capital; Pvt Ltd audit is mandatory.",
      "Pelago maps your revenue model and cap table story before you file SPICe+ or FiLLiP."
    ],
    "cta": {
      "title": "Not sure which structure fits?",
      "subtitle": "Free 20-minute entity comparison for founders in Kerala and across India.",
      "href": "/contact",
      "buttonLabel": "Get free structure review"
    },
    "sections": [
      {
        "heading": "Why this decision locks your cap table",
        "paragraphs": [
          "Your legal structure decides whether you can issue equity to angels, grant ESOPs, or only split profits. In India, founders who pick LLP for 'lower fees' often pay ₹50,000+ later to convert when a term sheet arrives.",
          "Private Limited companies are governed by the Companies Act, 2013. LLPs follow the LLP Act, 2008. Both offer limited liability, but only Pvt Ltd can issue shares and attract institutional capital cleanly.",
          "Factor | Pvt Ltd | LLP",
          "Equity to investors | Yes (shares) | No (only partner capital)",
          "ESOPs | Standard | Difficult / uncommon",
          "MCA annual filings | AOC-4, MGT-7, etc. | Form 8 & 11",
          "Typical year-1 compliance spend | ₹25,000–₹60,000 | ₹12,000–₹35,000"
        ],
        "callout": "Founder tip: If your pitch deck mentions a 'round' in 18 months, incorporate as Pvt Ltd on day one."
      },
      {
        "heading": "When Pvt Ltd is the right default",
        "paragraphs": [
          "SaaS, D2C, fintech, and marketplace startups planning angel or VC funding should almost always choose Pvt Ltd. Banks and enterprise buyers also prefer dealing with a company limited by shares.",
          "Tax options matter: eligible manufacturing startups can access lower effective rates under Section 115BAB; LLPs are taxed at flat partnership rates without the same equity toolkit.",
          "• You need a ESOP pool before hiring senior talent.",
          "• You will raise funds at a premium (angel tax planning applies).",
          "• You want a single founder today but room for directors and investors tomorrow."
        ]
      },
      {
        "heading": "When LLP wins for bootstrapped teams",
        "paragraphs": [
          "Consultancies, agencies, studios, and professional firms with 2–4 partners and no external equity often thrive on LLP flexibility. Profit shares can be reallocated in the LLP agreement without issuing new shares.",
          "Compliance is lighter until you cross audit thresholds—turnover above ₹40 lakhs or capital contribution above ₹25 lakhs triggers statutory audit for LLPs.",
          "• No mandatory board meetings or dividend distribution rules.",
          "• Lower incorporation stamp duty in many states vs high authorised capital Pvt Ltd.",
          "• Ideal when every partner is actively working and no passive investors exist."
        ]
      },
      {
        "heading": "Cost and timeline snapshot (indicative)",
        "paragraphs": [
          "Item | Pvt Ltd (SPICe+) | LLP (FiLLiP)",
          "DSC (2 partners/directors) | ₹2,000–₹3,000 | ₹2,000–₹3,000",
          "Govt fees + stamp duty | ₹2,000–₹12,000 | ₹1,500–₹8,000",
          "Professional fees | ₹5,000–₹15,000 | ₹4,000–₹12,000",
          "Time to COI | 7–15 working days | 7–12 working days",
          "Pelago handles RUN name approval, MOA/AOA or LLP agreement drafting, and post-COI bank/GST handoff so you start trading compliantly—not just incorporated."
        ]
      },
      {
        "heading": "Common mistakes founders regret",
        "paragraphs": [
          "• Incorporating with ₹10 lakh authorised capital 'to look big'—stamp duty scales with authorised capital in several states.",
          "• Assuming LLP means zero MCA filings—you still file Form 8 (solvency) and Form 11 (annual return).",
          "• Splitting 50-50 without vesting because the structure paperwork was easier than the founder conversation.",
          "Book a structure review before you pay incorporation fees; switching later burns cash and investor diligence time."
        ]
      }
    ]
  },
  {
    "slug": "gst-filing-calendar-2024",
    "title": "GST Filing Calendar 2025: Never Miss a Due Date",
    "category": "Tax & Compliance",
    "readTime": "6 min",
    "date": "January 25, 2024",
    "excerpt": "Build a repeatable monthly rhythm for GSTR-1 and GSTR-3B so you never block customer ITC or pay ₹50/day late fees that compound quietly.",
    "valueLabel": "Stay penalty-free all year",
    "keyTakeaways": [
      "GSTR-1 by the 11th (monthly) feeds your buyers' GSTR-2B—late filing hurts their ITC and your relationships.",
      "GSTR-3B is your cash tax payment; mismatch with 2B is the #1 audit trigger.",
      "QRMP filers follow quarterly GSTR-1 with monthly tax via PMT-06—know your scheme before onboarding.",
      "Pelago's compliance calendar syncs GST, TDS, and ROC dates for founder-led teams."
    ],
    "cta": {
      "title": "GST keeping you up at night?",
      "subtitle": "Monthly filing support with reconciliation before every GSTR-3B.",
      "href": "/services",
      "buttonLabel": "Book compliance call"
    },
    "sections": [
      {
        "heading": "Why timing is a revenue issue, not just compliance",
        "paragraphs": [
          "Missing GSTR-1 does not only attract late fees—it blocks your customers from claiming Input Tax Credit on your invoices. B2B buyers will chase you, delay payments, or switch vendors.",
          "GSTR-3B is where you declare tax liability and pay cash to the government. Filing without reconciling against GSTR-2B (purchase ITC) is how startups discover ₹1–2 lakh discrepancies during scrutiny.",
          "• Late fee: ₹50 per day per act (CGST + SGST), capped but painful on thin margins.",
          "• Interest: 18% per annum on tax paid late.",
          "• Reputation: Large clients run vendor compliance checks before renewals."
        ]
      },
      {
        "heading": "Monthly due dates (regular taxpayers)",
        "paragraphs": [
          "Form | Purpose | Typical due date",
          "GSTR-1 | Outward supplies (sales) | 11th of next month",
          "GSTR-3B | Summary return + tax payment | 20th of next month",
          "GSTR-2B | Auto-drafted purchase ITC (read-only) | Generated after supplier files",
          "IFF (optional) | QRMP intra-quarter sales | 13th of next month (if opted)",
          "Mark the 8th and 18th on your calendar for data prep—not the due date itself."
        ],
        "callout": "Founder tip: Reconcile purchases in accounting software every Friday; do not wait for the 19th panic."
      },
      {
        "heading": "QRMP scheme: who it helps and who it hurts",
        "paragraphs": [
          "Quarterly Return Monthly Payment (QRMP) suits businesses with steady tax outflow but low B2B invoice volume. You file GSTR-1 quarterly but pay tax monthly via Form PMT-06.",
          "If most of your revenue is B2B, staying on monthly GSTR-1 keeps your buyers' ITC flowing every month—another reason to understand your customer mix before opting in.",
          "• Turnover up to ₹5 crore may opt for QRMP (check latest notifications).",
          "• GSTR-3B quarterly for QRMP: 22nd or 24th after quarter end (state-dependent).",
          "• Annual return GSTR-9 still required if applicable to your turnover tier."
        ]
      },
      {
        "heading": "Annual returns and audit trail",
        "paragraphs": [
          "GSTR-9 (annual return) consolidates monthly data for the financial year. GSTR-9C is a reconciliation statement when turnover exceeds audit thresholds—treat March–May as close-the-books season, not optional admin.",
          "For FY 2024–25, plan ITC reversals, credit notes, and e-invoice gaps before December filing windows—extensions happen but should not be your plan A.",
          "Pelago pairs GST filings with books review so your numbers match what the CA signs on the audit report."
        ]
      },
      {
        "heading": "Founder checklist before every 3B",
        "paragraphs": [
          "• Match sales register to GSTR-1 already filed or about to file.",
          "• Download GSTR-2B; flag missing supplier filings.",
          "• Reverse ineligible ITC (blocked credits, motor vehicles, etc.).",
          "• Pay via challan before filing; keep ARN screenshot in your data room.",
          "One disciplined rhythm beats twelve emergency filings—and keeps your next fundraise diligence clean."
        ]
      }
    ]
  },
  {
    "slug": "startup-india-tax-benefits",
    "title": "How to Save Taxes with Startup India Registration (DPIIT)",
    "category": "Startup",
    "readTime": "7 min",
    "date": "January 22, 2024",
    "excerpt": "DPIIT recognition is the gateway to Section 80-IAC profit holidays and angel tax relief—but only if you apply before your first priced round, not after.",
    "valueLabel": "Unlock Startup India tax perks",
    "keyTakeaways": [
      "DPIIT certificate alone does not exempt tax—you need separate 80-IAC approval for the 3-year profit holiday.",
      "Section 56(2)(viib) relief protects premium on angel shares when conditions are met.",
      "Apply while your website, pitch, and MOA objects still tell one innovation story.",
      "Pelago coordinates DPIIT, 80-IAC, and cap table cleanup before investor due diligence."
    ],
    "cta": {
      "title": "Raising angel capital soon?",
      "subtitle": "We align DPIIT, 80-IAC, and Form 2 declarations with your term sheet timeline.",
      "href": "/startup-bundle",
      "buttonLabel": "Explore startup bundle"
    },
    "sections": [
      {
        "heading": "What DPIIT recognition actually gives you",
        "paragraphs": [
          "Startup India recognition from DPIIT labels your Pvt Ltd or LLP as a 'startup' for policy benefits. It is not a tax exemption by itself—it unlocks applications for tax holidays, angel tax relief, and faster compliance narratives.",
          "Eligibility typically requires incorporation under 10 years, turnover below prescribed limits (₹100 crore historically—verify current notification), and innovation or scalability in your application narrative.",
          "• Self-certification under select labour and environment laws (check active list).",
          "• Faster exit and public procurement concessions in some programs.",
          "• Credibility signal for state grants and accelerator cohorts."
        ]
      },
      {
        "heading": "Section 80-IAC: the 3-year profit holiday",
        "paragraphs": [
          "Recognised startups can apply for 100% deduction on profits for any three consecutive years out of the first ten since incorporation. This requires Inter-Ministerial Board (IMB) approval—not automatic with DPIIT.",
          "You must be Pvt Ltd or LLP, incorporated after April 1, 2016, and pass the innovation/scalability test. Plan application 2–3 months before you need the benefit in financial projections.",
          "• Carry forward matters if you miss the window year.",
          "• Clean books and pitch deck alignment reduce rejection risk.",
          "• Coordinate with your CA on which three years maximise cash savings."
        ],
        "callout": "Founder tip: Apply for 80-IAC before showing inflated profits in investor models—you cannot rewrite prior years casually."
      },
      {
        "heading": "Angel tax (Section 56(2)(viib)) relief",
        "paragraphs": [
          "When angels pay above face value, the premium was historically taxed as income in the startup's hands. DPIIT-recognised startups can file declarations (including Form 2 compliance) to seek exemption when conditions are met.",
          "This is critical for priced seed rounds in India. Cap table errors, unrelated party shares, or late filings can void relief and scare investors.",
          "• Aggregate paid-up capital and post-money valuation caps apply—track latest rules.",
          "• Maintain valuation report and board resolutions in your data room.",
          "• Pelago reviews shareholder agreements before the first closing."
        ]
      },
      {
        "heading": "Operational perks founders undervalue",
        "paragraphs": [
          "Labour law self-certification, IP fast-track fee rebates, and easier narrative for government pilots save indirect cost even when you are pre-profit.",
          "State policies (Kerala Startup Mission, Karnataka, etc.) often require DPIIT as a baseline document for subsidies and office programs.",
          "Update your Startup India profile when you pivot—stale descriptions cause renewal issues during due diligence."
        ]
      },
      {
        "heading": "Application mistakes to avoid",
        "paragraphs": [
          "• Applying with a generic website that does not match MOA objects.",
          "• Waiting until angel round week to start 56(2)(viib) paperwork.",
          "• Assuming recognition equals automatic 80-IAC approval.",
          "Pelago bundles incorporation, DPIIT filing, and investor-ready compliance so tax benefits support your raise—not delay it."
        ]
      }
    ]
  },
  {
    "slug": "iso-9001-brand-trust",
    "title": "Boost Your Brand Trust with ISO 9001 Certification",
    "category": "Certifications",
    "readTime": "5 min",
    "date": "January 20, 2024",
    "excerpt": "Win PSU and enterprise tenders you are currently disqualified from—ISO 9001 is often the cheapest trust signal that unlocks ₹50L+ contracts.",
    "valueLabel": "Open doors to big tenders",
    "keyTakeaways": [
      "ISO 9001:2015 proves you run a documented Quality Management System buyers can audit.",
      "Gap analysis → documentation → staff training → certification audit is a 8–16 week path for SMEs.",
      "Certificate is globally recognised—one audit, multiple markets.",
      "Pelago implements QMS with minimal disruption to daily delivery work."
    ],
    "cta": {
      "title": "Chasing a government or OEM tender?",
      "subtitle": "ISO 9001 implementation and certification body coordination.",
      "href": "/services",
      "buttonLabel": "Talk to certification team"
    },
    "sections": [
      {
        "heading": "Why buyers demand ISO 9001",
        "paragraphs": [
          "In crowded B2B markets, claims of 'quality delivery' are noise. ISO 9001:2015 is an internationally recognised Quality Management System (QMS) standard that tells procurement teams you document, measure, and improve processes.",
          "Many PSU, defence, and large corporate tenders list ISO 9001 as mandatory eligibility. Without it, you never reach technical evaluation—regardless of price.",
          "• Reduces vendor risk scoring in RFPs.",
          "• Shortens security questionnaires for IT and services vendors.",
          "• Signals operational maturity to international partners."
        ]
      },
      {
        "heading": "Implementation roadmap",
        "paragraphs": [
          "Stage | Activity | Typical duration",
          "Gap analysis | Map current SOPs vs ISO clauses | 1–2 weeks",
          "Documentation | Quality manual, procedures, records | 3–6 weeks",
          "Implementation | Train teams, run internal audits | 4–8 weeks",
          "Certification audit | Stage 1 + Stage 2 by CB | 2–4 weeks",
          "Surveillance | Annual audit to maintain certificate | Ongoing",
          "Founders should assign one internal 'quality owner'—usually COO or delivery head—not outsource ownership entirely."
        ],
        "callout": "Founder tip: Start documenting your biggest client delivery process first; certifiers reward real workflows over template manuals."
      },
      {
        "heading": "Costs and ROI (indicative)",
        "paragraphs": [
          "Consulting + documentation for SMEs often runs ₹1.5–₹4 lakhs; certification body fees depend on employee count and sites. Compare that to one lost tender worth ₹25–₹100 lakhs.",
          "Operational benefits: fewer rework hours, clearer onboarding for new hires, and defined corrective action when clients complain.",
          "• Combine with ISO 27001 only if buyers explicitly require both—do not over-certify early.",
          "• Display certificate number on website and proposals."
        ]
      },
      {
        "heading": "Maintaining certification after the audit",
        "paragraphs": [
          "ISO is not a one-time poster. Surveillance audits annually and recertification every three years test whether you still run the QMS—not just whether you still pay fees.",
          "Keep management review minutes, internal audit logs, and customer feedback records ready. Pelago helps maintain the system so recertification is boring, not a fire drill."
        ]
      },
      {
        "heading": "When to delay ISO",
        "paragraphs": [
          "Pre-product-market-fit startups with no enterprise pipeline can defer ISO and invest in delivery speed. The moment a tender PDF lists ISO as mandatory, start the clock—lead time is rarely under two months."
        ]
      }
    ]
  },
  {
    "slug": "trademark-registration-guide",
    "title": "Protect Your Brand: A Founder's Guide to Trademark Registration",
    "category": "Legal & IP",
    "readTime": "6 min",
    "date": "January 18, 2024",
    "excerpt": "File in the right Nice class before a competitor blocks your rebrand—TM symbol in weeks, ® after registration in 6–12 months.",
    "valueLabel": "Secure your brand name early",
    "keyTakeaways": [
      "Trademark search on IP India prevents costly rebrands after marketing spend.",
      "Class 9 for software, Class 35 for SaaS marketing—pick classes by what you sell.",
      "TM after filing; ® only after registration certificate issues.",
      "Pelago handles search, filing, and objection replies for Indian and Madrid routes."
    ],
    "cta": {
      "title": "Launching a brand this quarter?",
      "subtitle": "Comprehensive trademark search + filing across relevant classes.",
      "href": "/contact",
      "buttonLabel": "Start trademark search"
    },
    "sections": [
      {
        "heading": "Your brand is an asset—treat it like one",
        "paragraphs": [
          "Founders spend lakhs on logos and domains but delay trademark filing. In India, bad-faith applications and 'first to file' disputes can force a rebrand after traction.",
          "Registration grants exclusive use of your mark in the classes filed—national protection for 10 years, renewable.",
          "• Word mark vs device mark: word marks protect the name in any font.",
          "• Collective marks and certification marks are separate strategies (rare for startups)."
        ]
      },
      {
        "heading": "Choosing the right classes",
        "paragraphs": [
          "Trademarks are filed under Nice Classification (45 classes). Examples for tech founders:",
          "Class | Typical use",
          "9 | Software, SaaS products, electronics",
          "35 | Advertising, business management, online marketplaces",
          "42 | IT services, software development, cloud",
          "43 | Restaurants (if F&B brand)",
          "Filing wrong class = protection in the wrong industry. List your actual revenue lines for the next 3 years."
        ],
        "callout": "Founder tip: File word mark + logo as separate applications if budget allows—stronger coverage than logo alone."
      },
      {
        "heading": "Process and timeline",
        "paragraphs": [
          "• Search: Check IP India and common law usage.",
          "• Application: Form TM-A with applicant details (company or individual).",
          "• Examination: Objections under absolute/relative grounds—reply within 30 days.",
          "• Journal publication: 4 months opposition window.",
          "• Registration: Certificate issued; use ® symbol.",
          "Expect 6–12 months barring opposition; budget ₹4,500–₹9,000 per class government fees plus professional fees."
        ]
      },
      {
        "heading": "TM vs ® and enforcement",
        "paragraphs": [
          "Use ™ immediately after filing. Use ® only after registration. Sending cease-and-desist letters without registration is weaker—registered marks unlock customs recordal and platform takedowns.",
          "Monitor similar filings quarterly; oppositions are cheaper than litigation after launch."
        ]
      },
      {
        "heading": "International expansion",
        "paragraphs": [
          "Madrid Protocol filings can extend Indian base applications to other countries when you enter those markets—plan after domestic filing, not before validating the brand locally.",
          "Pelago coordinates Indian filing and international strategy so fundraising decks match registered IP."
        ]
      }
    ]
  },
  {
    "slug": "udyam-registration-benefits",
    "title": "Unlock Collateral-Free Loans with Udyam (MSME) Registration",
    "category": "Registration",
    "readTime": "5 min",
    "date": "January 15, 2024",
    "excerpt": "Register on the Udyam portal in 15 minutes to access cheaper credit, tender set-asides, and 3× interest when buyers pay after 45 days.",
    "valueLabel": "Claim MSME benefits legally",
    "keyTakeaways": [
      "Udyam is free, paperless, and based on self-declared turnover and investment—no renewal fee.",
      "CGTMSE-backed collateral-free loans up to prescribed limits for eligible MSMEs.",
      "MSME Samadhaan forces payment for delays beyond 45 days from large buyers.",
      "Pelago registers Udyam and links it to GST and bank KYC for lenders."
    ],
    "cta": {
      "title": "Need cheaper working capital?",
      "subtitle": "Udyam registration + lender-ready documentation pack.",
      "href": "/contact",
      "buttonLabel": "Register my MSME"
    },
    "sections": [
      {
        "heading": "What changed for 'small' businesses",
        "paragraphs": [
          "India expanded MSME definitions—enterprises with turnover up to ₹250 crore can qualify as medium in some cases. Udyam Registration on udyamregistration.gov.in is the only official MSME certificate recognised for schemes and banks.",
          "Old Udyog Aadhaar is obsolete for new registrations. Migration to Udyam is required for existing benefits.",
          "• Micro, Small, Medium categories depend on investment and turnover caps (manufacturing vs services differ).",
          "• Aadhaar OTP verification for proprietors; company PAN for entities."
        ]
      },
      {
        "heading": "Financial benefits founders use",
        "paragraphs": [
          "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) enables collateral-free loans—government acts as guarantor so you do not pledge personal property.",
          "Many banks price MSME loans 1–1.5% below standard business loan ROI when Udyam is on file.",
          "Priority sector lending norms push banks to lend to MSMEs—your application is scored higher with a valid Udyam number."
        ],
        "callout": "Founder tip: Update Udyam when turnover crosses thresholds—wrong classification can void tender eligibility."
      },
      {
        "heading": "MSME Samadhaan for delayed payments",
        "paragraphs": [
          "If a buyer (including large corporates) does not pay within 45 days, they owe compound interest at three times the RBI bank rate. File on the Samadhaan portal with invoices and Udyam proof.",
          "This is underused leverage for B2B founders bleeding on 90-day payment terms."
        ]
      },
      {
        "heading": "Tenders and subsidies",
        "paragraphs": [
          "Government tenders often reserve categories or price preferences for MSMEs. State export and capital subsidy schemes frequently list Udyam as mandatory KYC.",
          "Pair Udyam with IEC if you export services—benefits stack."
        ]
      },
      {
        "heading": "Registration steps",
        "paragraphs": [
          "• Visit Udyam portal; use Aadhaar + OTP.",
          "• Enter PAN; system pulls GST and IT data where linked.",
          "• Declare investment in plant/equipment and turnover.",
          "• Download e-certificate with dynamic QR.",
          "Pelago completes registration and advises when to upgrade category after fundraising or capex."
        ]
      }
    ]
  },
  {
    "slug": "one-person-company-guide",
    "title": "One Person Company (OPC): The Solopreneur's Best Legal Structure",
    "category": "Registration",
    "readTime": "6 min",
    "date": "January 12, 2024",
    "excerpt": "Get Pvt Ltd–style limited liability as a solo founder—without inventing a co-founder on paper or risking personal assets like a proprietorship.",
    "valueLabel": "Solo founder? Start here",
    "keyTakeaways": [
      "OPC allows one member and one director (same person possible).",
      "Mandatory nominee ensures business continuity if incapacitated.",
      "Turnover above ₹2 crore or paid-up capital above ₹50 lakh triggers OPC → Pvt Ltd conversion.",
      "Pelago incorporates OPC via SPICe+ with nominee documentation done right."
    ],
    "cta": {
      "title": "Building alone but want limited liability?",
      "subtitle": "OPC incorporation + first-year compliance checklist.",
      "href": "/startup-bundle",
      "buttonLabel": "Start OPC incorporation"
    },
    "sections": [
      {
        "heading": "Why OPC beats proprietorship for serious solos",
        "paragraphs": [
          "Proprietorship exposes personal assets to business liability. OPC is a separate legal person under Companies Act 2013 with one shareholder—corporate veil for freelancers scaling to ₹30L+ revenue or hiring employees.",
          "Banks and enterprise clients trust OPC invoices more than proprietorship bills for the same work.",
          "• Single person can be director and shareholder.",
          "• No minimum paid-up capital prescribed beyond practical banking needs."
        ]
      },
      {
        "heading": "Nominee requirement explained",
        "paragraphs": [
          "You must appoint a nominee (natural person) who takes over if the sole member dies or becomes incapacitated. This is not a 'fake co-founder'—it is succession planning required by law.",
          "Choose someone trustworthy; document consent in INC-3 and nominee forms during incorporation."
        ],
        "callout": "Founder tip: Inform your nominee—they may need to sign MCA forms during incorporation."
      },
      {
        "heading": "Compliance reality check",
        "paragraphs": [
          "OPC follows Pvt Ltd–style ROC filings: AOC-4, MGT-7A (as applicable), board meetings, and mandatory audit. It is not 'LLP-light'—plan ₹20,000–₹40,000 annual compliance.",
          "When turnover exceeds ₹2 crore or paid-up capital crosses ₹50 lakh, convert to Pvt Ltd—budget conversion in year two if you are growing fast."
        ]
      },
      {
        "heading": "Tax and fundraising",
        "paragraphs": [
          "OPC taxed like company; cannot easily issue ESOPs or multiple share classes. Convert to Pvt Ltd before angel round or ESOP pool.",
          "DPIIT Startup India recognition applies to OPC same as Pvt Ltd if innovation criteria met."
        ]
      },
      {
        "heading": "When to skip OPC",
        "paragraphs": [
          "Side income under ₹10L with no liability risk may stay proprietorship until stable. If you already have a co-founder, go Pvt Ltd or LLP—OPC is strictly one member.",
          "Pelago advises OPC vs Pvt Ltd in one call based on your 24-month hiring and fundraising plan."
        ]
      }
    ]
  },
  {
    "slug": "partnership-firm-registration",
    "title": "Is a Partnership Firm Right for Your Small Business?",
    "category": "Registration",
    "readTime": "5 min",
    "date": "January 10, 2024",
    "excerpt": "Start trading in days with a partnership deed—or register with the Registrar of Firms so you can legally enforce contracts and sue delinquent clients.",
    "valueLabel": "Fastest multi-founder setup",
    "keyTakeaways": [
      "Unregistered partnerships cannot sue third parties for contract enforcement in many cases.",
      "Cheapest structure for family shops and local trading businesses with 2+ partners.",
      "Partnership deed should cover profit share, capital, retirement, and dispute resolution.",
      "Pelago drafts deeds and ROF registration where enforcement matters."
    ],
    "cta": {
      "title": "Two partners, need to start this week?",
      "subtitle": "Partnership deed + optional Registrar of Firms filing.",
      "href": "/contact",
      "buttonLabel": "Draft partnership deed"
    },
    "sections": [
      {
        "heading": "Partnership vs LLP vs Pvt Ltd",
        "paragraphs": [
          "Traditional partnership under Indian Partnership Act 1932 is still popular for kirana chains, trading firms, and professional duos who do not want MCA filings.",
          "Partners have unlimited joint liability unless limited partnership structures apply (rare). LLPs and Pvt Ltd cap liability—partnership does not.",
          "Structure | Liability | Equity investors | Compliance",
          "Partnership | Unlimited (general) | No | Income tax + deed",
          "LLP | Limited | No | MCA + tax",
          "Pvt Ltd | Limited | Yes | MCA + tax"
        ]
      },
      {
        "heading": "Registered vs unregistered",
        "paragraphs": [
          "You can operate on a notarised partnership deed alone. Registration with Registrar of Firms (ROF) under state law adds:",
          "• Power to file suits against third parties for firm debts.",
          "• Better standing with banks for partnership accounts.",
          "• Clear public record of partners and dissolution terms.",
          "Registration fees are low (state-specific, often under ₹5,000) but procedures vary—Maharashtra 'Gumasta' culture differs from Kerala ROF practice."
        ],
        "callout": "Founder tip: If B2B clients ask for 'firm registration proof,' register—unregistered deeds alone may fail vendor KYC."
      },
      {
        "heading": "What the deed must cover",
        "paragraphs": [
          "• Capital contribution and profit-sharing ratio (not always 50-50).",
          "• Roles, drawings, and banking signatories.",
          "• Admission and retirement of partners.",
          "• Dispute resolution and dissolution waterfall.",
          "Ambiguous deeds cause expensive litigation when one partner exits."
        ]
      },
      {
        "heading": "Taxation",
        "paragraphs": [
          "Firm files return; partners receive shares taxed in their hands. No dividend distribution tax complexity like companies—simple for small profits.",
          "GST registration in firm name if turnover crosses threshold; partners need PAN linked."
        ]
      },
      {
        "heading": "When to graduate out",
        "paragraphs": [
          "If you need VC, ESOPs, or limited liability, migrate to LLP or Pvt Ltd. Pelago maps conversion timelines before you sign large personal guarantees."
        ]
      }
    ]
  },
  {
    "slug": "post-incorporation-compliance-checklist",
    "title": "The Essential Post-Incorporation Compliance Checklist",
    "category": "Tax & Compliance",
    "readTime": "7 min",
    "date": "January 08, 2024",
    "excerpt": "Your Certificate of Incorporation is day zero—miss auditor appointment, INC-20A, or GST activation and you risk penalties before your first sale.",
    "valueLabel": "First 30 days done right",
    "keyTakeaways": [
      "Appoint statutory auditor within 30 days of incorporation—mandatory even at zero revenue.",
      "Open current account and deposit subscribed capital before commencing business.",
      "File INC-20A within 180 days to declare commencement of business.",
      "Pelago runs post-COI checklists so founders ship product—not ROC notices."
    ],
    "cta": {
      "title": "Just received your COI?",
      "subtitle": "Post-incorporation compliance pack: bank, GST, ROC, payroll.",
      "href": "/startup-bundle",
      "buttonLabel": "Get post-COI checklist"
    },
    "sections": [
      {
        "heading": "Day 1–7: corporate hygiene",
        "paragraphs": [
          "COI in hand means the clock started. Board must appoint first auditor (Form ADT-1 within 15 days of appointment) within 30 days of incorporation.",
          "Apply for company PAN (often via SPICe+), TAN, and EPFO/ESIC if shown on certificate.",
          "• Issue share certificates and maintain register of members.",
          "• Adopt common seal only if needed—most startups skip physical seal."
        ]
      },
      {
        "heading": "Banking and capital",
        "paragraphs": [
          "Open current account with COI, MOA, AOA, PAN, board resolution, and KYC of directors.",
          "Shareholders must transfer subscription money stated in MOA into this account—do not use personal UPI for company receipts.",
          "File INC-20A within 180 days certifying capital deposit and commencement—without it, borrowing and some contracts are legally risky."
        ],
        "callout": "Founder tip: One board resolution template pack saves hours when banks ask for different wordings."
      },
      {
        "heading": "Tax and labour registrations",
        "paragraphs": [
          "GST: Mandatory if turnover crosses threshold or inter-state supply from day one. Voluntary GST helps B2B invoicing with ITC.",
          "Professional tax (PTRC/PTEC) in states like Karnataka, Maharashtra, Kerala—employer registration before first salary.",
          "Shop & Establishment registration for physical office within state timelines.",
          "Pelago sequences registrations so payroll software and GSTIN align."
        ]
      },
      {
        "heading": "First-year ROC calendar",
        "paragraphs": [
          "• First AGM within 9 months of FY end.",
          "• AOC-4 (financials) within 30 days of AGM.",
          "• MGT-7/7A (annual return) within 60 days of AGM.",
          "• DIR-3 KYC for directors by 30 September annually.",
          "Missing these triggers ₹100–₹500 per day penalties and director disqualification risk."
        ]
      },
      {
        "heading": "Founder agreements and IP",
        "paragraphs": [
          "Sign founders' agreement with vesting. Assign all IP created before and after incorporation to the company via assignment deeds.",
          "Update website footer with CIN, registered office, and GSTIN when live."
        ]
      }
    ]
  },
  {
    "slug": "dsc-digital-signature-guide",
    "title": "Digital Signature Certificate (DSC): Why Every Director Needs One",
    "category": "Legal & IP",
    "readTime": "4 min",
    "date": "January 05, 2024",
    "excerpt": "Without a valid Class 3 DSC you cannot file SPICe+, GST, or income tax—budget ₹1,000–₹1,500 per director and renew before expiry.",
    "valueLabel": "Get directors signing digitally",
    "keyTakeaways": [
      "Class 3 DSC on USB token is standard for MCA and GST filings.",
      "Two-year validity typical; renew 30 days before expiry to avoid filing lockouts.",
      "Video KYC providers issue DSC in 1–3 days with correct documents.",
      "Pelago provisions DSCs during incorporation so SPICe+ is not delayed."
    ],
    "cta": {
      "title": "Incorporating this month?",
      "subtitle": "DSC procurement + SPICe+ filing in one workflow.",
      "href": "/startup-bundle",
      "buttonLabel": "Add DSC to my package"
    },
    "sections": [
      {
        "heading": "What a DSC is",
        "paragraphs": [
          "Digital Signature Certificate is your legally recognised electronic signature for government portals. Physical signatures are rejected for ROC, GST, income tax, and most tender submissions.",
          "Stored on USB e-token (ProxKey, etc.) with PIN—treat like a debit card."
        ]
      },
      {
        "heading": "Class 3 and who needs it",
        "paragraphs": [
          "Class 3 offers highest assurance—required for company incorporation, DIN-related filings, and GST for authorised signatories.",
          "Every proposed director and subscriber typically needs DSC before SPICe+ or FiLLiP filing.",
          "• Company secretary or external filer may use their DSC only if formally authorised—founders should own their tokens."
        ],
        "callout": "Founder tip: Keep one backup token if you have two directors—expired DSC on filing day is a common startup delay."
      },
      {
        "heading": "Uses across your stack",
        "paragraphs": [
          "• MCA: SPICe+, DIR-3, MGT-14, annual forms.",
          "• GST: Registration, GSTR filings, e-way bill (where applicable).",
          "• Income tax: ITR verification, TDS returns.",
          "• Tenders: e-procurement portals."
        ]
      },
      {
        "heading": "Application documents",
        "paragraphs": [
          "PAN, Aadhaar, photo, email/mobile verification. Organisational DSCs need additional board resolutions.",
          "Foreign directors follow certifying authority rules for passport-based KYC."
        ]
      },
      {
        "heading": "Security practices",
        "paragraphs": [
          "Do not share PINs on Slack. Revoke tokens when directors exit. Pelago tracks expiry dates for retainer clients so compliance filings never stall on hardware."
        ]
      }
    ]
  },
  {
    "slug": "professional-tax-kerala-india",
    "title": "Understanding Professional Tax (PT) Obligations",
    "category": "Tax & Compliance",
    "readTime": "5 min",
    "date": "January 03, 2024",
    "excerpt": "Deduct and deposit professional tax correctly in Kerala and other states—or face employee disputes and employer penalties that scale with headcount.",
    "valueLabel": "Fix payroll tax in one pass",
    "keyTakeaways": [
      "PT applies to salaried employees and practising professionals in many states—not 'only for doctors'.",
      "Employer registers PTRC, deducts monthly, files returns; company pays PTEC for its existence.",
      "Kerala slabs differ from Karnataka/Maharashtra—use state-specific rules.",
      "Pelago sets up PTRC/PTEC and syncs with payroll before first salary run."
    ],
    "cta": {
      "title": "Hiring your first employee?",
      "subtitle": "Professional tax + PF/ESI registration aligned to your state.",
      "href": "/services",
      "buttonLabel": "Book payroll setup call"
    },
    "sections": [
      {
        "heading": "What professional tax really is",
        "paragraphs": [
          "State-level tax on income from employment and professions. Article 276 of the Constitution caps how states charge—it is not a central GST-style tax.",
          "Despite the name, it hits regular employees, not only doctors and lawyers. Founders paying themselves salary must deduct PT where applicable."
        ]
      },
      {
        "heading": "Employer obligations",
        "paragraphs": [
          "• Obtain PTRC (Professional Tax Registration Certificate) before employment starts.",
          "• Deduct PT from salary each month per state slab (often ₹100–₹2,500 annually spread monthly).",
          "• Deposit to state treasury and file periodic returns.",
          "• Pay PTEC (employer enrolment) annually for the entity itself in many states."
        ],
        "callout": "Founder tip: In Kerala, verify latest slab notifications—slabs changed historically and payroll software defaults may be wrong."
      },
      {
        "heading": "Kerala vs other states (snapshot)",
        "paragraphs": [
          "State | Notes for startups",
          "Kerala | Slab-based deduction; registration on state portal",
          "Karnataka | Slab up to ₹2,500 per year for higher salaries",
          "Maharashtra | ₹2,500 for many salaried employees (gender rules varied—check current)",
          "Telangana/AP | PT applies with local forms",
          "Remote teams: PT usually follows where employee works, not where startup is incorporated."
        ]
      },
      {
        "heading": "Penalties and audits",
        "paragraphs": [
          "Late registration and non-deduction trigger interest and penalties; employees may question payslips during funding due diligence.",
          "Align PT with PF/ESI registration—Pelago bundles labour registrations for first hires."
        ]
      },
      {
        "heading": "Exemptions and special cases",
        "paragraphs": [
          "Some categories (parents of disabled, certain disabilities) may claim exemptions—document proofs. Directors' remuneration may have different treatment—confirm with state rules and CA."
        ]
      }
    ]
  },
  {
    "slug": "iec-code-import-export",
    "title": "How to Start an Import-Export Business: IEC Code Guide",
    "category": "Registration",
    "readTime": "5 min",
    "date": "December 28, 2023",
    "excerpt": "Get your 10-digit IEC in 2–5 days to receive export dollars legally, claim SEIS/RODTEP benefits, and clear customs without courier rejections.",
    "valueLabel": "Go global with IEC",
    "keyTakeaways": [
      "IEC (Import Export Code) is mandatory for import/export of goods and most service exports.",
      "Lifetime validity—no renewal fee, but annual DGFT update (April–June) is mandatory.",
      "Link IEC with AD code at bank for foreign inward remittance settlement.",
      "Pelago files IEC and coordinates AD code with your current account bank."
    ],
    "cta": {
      "title": "First international client?",
      "subtitle": "IEC + AD code + export documentation starter pack.",
      "href": "/contact",
      "buttonLabel": "Apply for IEC"
    },
    "sections": [
      {
        "heading": "Who must have IEC",
        "paragraphs": [
          "Any business importing goods into India or exporting goods/services out needs IEC issued by DGFT. Freelancers receiving USD/EUR for export of services typically need IEC for FEMA-compliant FIRC and scheme benefits.",
          "No IEC means customs cannot clear your shipment and banks may flag foreign credits."
        ]
      },
      {
        "heading": "Application process (online)",
        "paragraphs": [
          "Apply on DGFT portal with PAN, bank account, address proof, and digital signature.",
          "Fee historically ₹500; timeline 2–5 working days with clean documents.",
          "• Proprietorship uses owner PAN; company uses company PAN.",
          "• Branch addresses need clarity for inspection risk."
        ],
        "callout": "Founder tip: File IEC before first FEMA inward remittance—banks ask for it during FIRC."
      },
      {
        "heading": "After IEC: AD code and schemes",
        "paragraphs": [
          "Authorised Dealer (AD) code links your IEC to a specific bank branch for export proceeds. Without AD code registration at customs, remittance settlement delays.",
          "Schemes: SEIS for service exporters, RoDTEP for goods—eligibility requires IEC + compliant shipping bills/Softex."
        ]
      },
      {
        "heading": "Annual update",
        "paragraphs": [
          "IEC must be updated every April–June even if zero trade—non-update can deactivate code and freeze shipments.",
          "Set calendar reminder with GST and ROC dates."
        ]
      },
      {
        "heading": "Common mistakes",
        "paragraphs": [
          "• Using personal savings account without informing bank of export purpose.",
          "• Missing LUT for GST on exports (zero-rated supplies need bond/LUT).",
          "Pelago sets IEC, LUT, and GST export documentation together for SaaS and D2C exporters."
        ]
      }
    ]
  },
  {
    "slug": "shop-and-establishment-act",
    "title": "Shop & Establishment Act: Is it Mandatory for Your Office?",
    "category": "Registration",
    "readTime": "4 min",
    "date": "December 25, 2023",
    "excerpt": "Register your office or store under the state Shop Act before labour inspectors or bank KYC reject you—often within 30 days of opening.",
    "valueLabel": "Legitimise your workplace",
    "keyTakeaways": [
      "Shop Act applies to most commercial establishments with employees—not only retail shops.",
      "State-specific names: Gumasta (Maharashtra), Form I (Karnataka), Kerala Shops Act registration.",
      "Covers working hours, overtime, leaves, and employment registers.",
      "Pelago files Shop Act alongside PF/GST when you open physical premises."
    ],
    "cta": {
      "title": "Opening an office or storefront?",
      "subtitle": "Shop & Establishment + labour registrations in one pass.",
      "href": "/services",
      "buttonLabel": "Register my establishment"
    },
    "sections": [
      {
        "heading": "Why banks and landlords ask for it",
        "paragraphs": [
          "Shop and Establishment registration is state law regulating working conditions. It applies to offices, IT parks, restaurants, and retail—not only 'shops'.",
          "Banks, commercial landlords, and franchise licensors often demand Shop Act certificate in KYC packs."
        ]
      },
      {
        "heading": "What it regulates",
        "paragraphs": [
          "• Maximum working hours and overtime pay rules.",
          "• Weekly holidays and annual leave.",
          "• Employment registers, notices, and child labour prohibitions.",
          "• Women working night shifts (state-specific conditions).",
          "Compliance is labour-inspector territory—registration is the first gate."
        ],
        "callout": "Founder tip: Co-working address? You still need registration for your operating state if employees work there—virtual office alone is not a free pass."
      },
      {
        "heading": "Timeline and documents",
        "paragraphs": [
          "Typically register within 30 days of starting business in the state. Documents: PAN, address proof, rent agreement/NOC, employee count, employer ID.",
          "Fees are modest (₹200–₹5,000 state-dependent)."
        ]
      },
      {
        "heading": "Multi-state teams",
        "paragraphs": [
          "If you hire in another state, separate registration may be required there. Do not assume one Kerala registration covers Bangalore staff."
        ]
      },
      {
        "heading": "Renewals and display",
        "paragraphs": [
          "Renew annually or as per state portal. Display certificate prominently; maintain muster rolls and wage registers for inspections.",
          "Pelago aligns Shop Act with professional tax and PF so your first HR hire is audit-ready."
        ]
      }
    ]
  },
  {
    "slug": "fssai-food-license-guide",
    "title": "FSSAI License: A Complete Guide for Food Businesses",
    "category": "Certifications",
    "readTime": "6 min",
    "date": "December 22, 2023",
    "excerpt": "Pick Basic, State, or Central FSSAI license by turnover—operate legally on Swiggy, Amazon, and retail shelves without delisting risk.",
    "valueLabel": "Food business? License first",
    "keyTakeaways": [
      "Every Food Business Operator needs FSSAI—home bakers included above petty limits.",
      "14-digit license number must appear on labels and premises.",
      "Central license for large manufacturers, importers, and e-commerce at scale.",
      "Pelago classifies license type and files on FoSCoS portal."
    ],
    "cta": {
      "title": "Launching a food brand?",
      "subtitle": "FSSAI registration + label compliance review.",
      "href": "/services",
      "buttonLabel": "Get FSSAI license"
    },
    "sections": [
      {
        "heading": "FSSAI in one minute",
        "paragraphs": [
          "Food Safety and Standards Authority of India regulates all food businesses. Operating without FSSAI risks penalties, platform delisting, and product seizure.",
          "Apply via FoSCoS portal with Form A (registration) or Form B (license)."
        ]
      },
      {
        "heading": "Which license tier",
        "paragraphs": [
          "Tier | Turnover (typical) | Form",
          "Basic Registration | Up to ₹12 lakh/year | Form A",
          "State License | ₹12 lakh – ₹20 crore | Form B",
          "Central License | Above ₹20 crore or specific activities | Form B central",
          "Importers, 100% export units, airports, and e-commerce aggregators at scale need Central license regardless of turnover."
        ],
        "callout": "Founder tip: D2C brands selling nationwide should plan State or Central before marketplaces ask during onboarding."
      },
      {
        "heading": "Documents and inspections",
        "paragraphs": [
          "Blueprint/layout for manufacturing units, water test reports, NOC from municipality, list of products, and responsible person qualification.",
          "Inspections may follow for high-risk categories. Maintain FSMS plan and recall procedure for audits."
        ]
      },
      {
        "heading": "Labelling rules",
        "paragraphs": [
          "Display FSSAI number on packages and marketing. Allergen declarations, veg/non-veg logos, and nutritional labelling rules apply by category.",
          "Marketplace delisting for label errors is common—cheaper to fix pre-launch."
        ]
      },
      {
        "heading": "Renewal",
        "paragraphs": [
          "Basic: 1–5 years depending on option; State/Central typically annual renewal with fee. Pelago tracks expiry so cloud kitchens do not miss renewals during busy seasons."
        ]
      }
    ]
  },
  {
    "slug": "esop-employee-stock-options",
    "title": "Retain Top Talent: How to Structure an Employee Stock Option Plan (ESOP)",
    "category": "Startup",
    "readTime": "7 min",
    "date": "December 20, 2023",
    "excerpt": "Offer ownership without crushing cash burn—structure vesting, pool size, and exercise price so ESOPs help hiring and survive investor due diligence.",
    "valueLabel": "Design ESOP without cap table shock",
    "keyTakeaways": [
      "ESOP pool of 10–15% pre-Series A is common; document in SHA and board resolutions.",
      "Standard vesting: 4 years with 1-year cliff aligns incentives.",
      "Exercise price must follow Companies Act and FEMA rules for foreign employees.",
      "Pelago drafts ESOP scheme, grant letters, and cap table models."
    ],
    "cta": {
      "title": "Hiring senior talent on startup salary?",
      "subtitle": "ESOP policy + board approvals + cap table hygiene.",
      "href": "/startup-bundle",
      "buttonLabel": "Structure our ESOP"
    },
    "sections": [
      {
        "heading": "Why ESOPs exist",
        "paragraphs": [
          "Early startups cannot match FAANG salaries. Employee Stock Option Plans grant the right to buy shares later at a predetermined exercise price—aligning wealth with company outcome.",
          "Only Pvt Ltd (and some structures) issue ESOPs cleanly; LLPs use profit share instead."
        ]
      },
      {
        "heading": "Key terms founders must understand",
        "paragraphs": [
          "• Grant date: Board approves specific employee grants.",
          "• Vesting: Earn options over time (e.g. 25% after year 1, monthly thereafter).",
          "• Cliff: Zero vest before 12 months—protects against quick leavers.",
          "• Exercise price: Fair market value or discounted per law and FMV report.",
          "• Pool: Unallocated shares reserved—dilutes founders when investors join if not planned."
        ],
        "callout": "Founder tip: Model dilution with and without 15% pool before signing term sheets—surprises kill founder morale."
      },
      {
        "heading": "Legal and tax mechanics",
        "paragraphs": [
          "Companies Act 2013 rules on ESOP approval (special resolution, sweat equity limits). Employees pay perquisite tax on exercise; capital gains on sale.",
          "FMV from merchant banker or CA valuation required for compliance. Stock appreciation rights (SARs) are alternative if cash exercise is hard."
        ]
      },
      {
        "heading": "Investor perspective",
        "paragraphs": [
          "Angels and VCs review ESOP scheme, acceleration clauses, and leaking grants to advisors without vesting. Clean cap table in Carta or spreadsheet is mandatory.",
          "Refresh pool at Series A—negotiate top-up so hiring does not come only from founder dilution."
        ]
      },
      {
        "heading": "Operational rollout",
        "paragraphs": [
          "Board approves scheme → grant letters → explain tax at exercise → exit process (unvested lapse, vested window on termination).",
          "Pelago implements ESOP policy and coordinates with counsel on SHA amendments."
        ]
      }
    ]
  },
  {
    "slug": "section-8-ngo-registration",
    "title": "Starting a Non-Profit? Guide to Section 8 Company Registration",
    "category": "Registration",
    "readTime": "6 min",
    "date": "December 18, 2023",
    "excerpt": "Build donor trust with a Section 8 company—MCA-regulated, no dividends, and eligible for 12A/80G when you are ready for CSR and institutional grants.",
    "valueLabel": "NGO structure that scales trust",
    "keyTakeaways": [
      "Section 8 companies cannot distribute profits to members—surplus reinvested in objects.",
      "Higher credibility with CSR donors than unregistered trusts in many programs.",
      "Requires licence from MCA before incorporation (Form INC-12).",
      "Pelago handles licence, incorporation, and 12A/80G coordination with CAs."
    ],
    "cta": {
      "title": "Starting a social enterprise?",
      "subtitle": "Section 8 incorporation + 12A/80G roadmap.",
      "href": "/contact",
      "buttonLabel": "Start Section 8 setup"
    },
    "sections": [
      {
        "heading": "Section 8 vs trust vs society",
        "paragraphs": [
          "Section 8 company (Companies Act 2013) is for charitable objects—arts, science, education, sports, environment. It operates like a company but without profit distribution.",
          "Trusts are simpler but slower to change; societies democratic but less familiar to corporate donors.",
          "Factor | Section 8 | Trust",
          "Regulator | MCA | State charity commissioner",
          "CSR appeal | High | Medium",
          "Equity investment | Not for profit distribution | N/A"
        ]
      },
      {
        "heading": "Licence and incorporation flow",
        "paragraphs": [
          "• File INC-12 for licence with MOA objects, projected income/expense, promoter background.",
          "• After approval, file SPICe+ with Section 8-specific attachments.",
          "• No 'Ltd' suffix—names often include Foundation, Association, etc.",
          "Timeline commonly 4–8 weeks including MCA scrutiny."
        ],
        "callout": "Founder tip: Draft objects clause tightly—vague 'social work' invites MCA objections."
      },
      {
        "heading": "12A and 80G registrations",
        "paragraphs": [
          "12A exempts organisation income tax; 80G lets donors deduct donations (with limits). Applied via Income Tax Department after incorporation.",
          "CSR-eligible companies prefer 80G and clean FCRA (if foreign funds) before large grants."
        ]
      },
      {
        "heading": "Governance essentials",
        "paragraphs": [
          "Board meetings, conflict of interest policy, and project-wise fund tracking are donor due diligence items.",
          "Pay reasonable salaries—excessive related-party payments trigger scrutiny."
        ]
      },
      {
        "heading": "When not to choose Section 8",
        "paragraphs": [
          "For-profit social ventures wanting dividends should use regular Pvt Ltd with impact reporting, not Section 8.",
          "Pelago advises structure based on funding source (CSR vs impact VC vs grants)."
        ]
      }
    ]
  },
  {
    "slug": "nidhi-company-registration",
    "title": "Nidhi Company Registration: Starting a Lending Business",
    "category": "Registration",
    "readTime": "6 min",
    "date": "December 15, 2023",
    "excerpt": "Start a members-only lending society with ₹10 lakh minimum capital—without RBI NBFC licence, if you stay inside Nidhi rules.",
    "valueLabel": "Members-only lending model",
    "keyTakeaways": [
      "Nidhi companies borrow and lend only among registered members.",
      "Minimum 7 members, 3 directors, ₹10 lakh net owned funds to start.",
      "Cannot advertise to public or run current accounts for non-members.",
      "Pelago incorporates Nidhi and sets first-year NDH compliance calendar."
    ],
    "cta": {
      "title": "Building a cooperative credit model?",
      "subtitle": "Nidhi incorporation + member onboarding compliance.",
      "href": "/contact",
      "buttonLabel": "Discuss Nidhi setup"
    },
    "sections": [
      {
        "heading": "What a Nidhi company is",
        "paragraphs": [
          "Nidhi (mutual benefit society) encourages thrift among members—accepts deposits and lends only to members, secured primarily against gold/property.",
          "Cheaper entry than NBFC (which needs crores of capital and RBI approval)."
        ]
      },
      {
        "heading": "Capital and membership rules",
        "paragraphs": [
          "• Minimum paid-up equity ₹10 lakh.",
          "• At least 200 members within 1 year of incorporation (NDH rules).",
          "• Net owned funds requirements increase with business—monitor NDH-4 filings.",
          "• Branches allowed after profit and NOF thresholds."
        ],
        "callout": "Founder tip: Member KYC and loan documentation are your audit shield—treat like a small bank."
      },
      {
        "heading": "Restrictions you cannot ignore",
        "paragraphs": [
          "• No advertising for deposits from public.",
          "• No current accounts for non-members.",
          "• Cannot partner with fintech apps for public deposit mobilisation.",
          "• Vehicle finance and unsecured personal loans are restricted—check latest NDH rules."
        ]
      },
      {
        "heading": "Compliance calendar",
        "paragraphs": [
          "File NDH-1, NDH-2, NDH-3 as applicable; maintain statutory registers; board meetings quarterly.",
          "Penalties for treating Nidhi like an NBFC marketing on Instagram are severe."
        ]
      },
      {
        "heading": "When to choose NBFC instead",
        "paragraphs": [
          "If you need public deposits, pan-India app, or unsecured consumer lending at scale, Nidhi is wrong vehicle—plan RBI NBFC route with capital advisors.",
          "Pelago incorporates Nidhi for community cooperatives and gold-loan societies in Kerala and beyond."
        ]
      }
    ]
  },
  {
    "slug": "company-name-change-procedure",
    "title": "Business Pivots: How to Legally Change Your Company Name",
    "category": "Legal & IP",
    "readTime": "4 min",
    "date": "December 12, 2023",
    "excerpt": "Rebrand without legal loose ends—reserve the new name, pass special resolution, file MGT-14 and INC-24, then update PAN, GST, and bank in one sweep.",
    "valueLabel": "Rebrand with clean ROC records",
    "keyTakeaways": [
      "RUN name reservation must approve new name before EGM.",
      "Special resolution and MGT-14 within 30 days of resolution.",
      "INC-24 with altered MOA for new name certificate.",
      "Pelago manages ROC filings and bank/GST amendment letters."
    ],
    "cta": {
      "title": "Pivoting your brand name?",
      "subtitle": "End-to-end company name change with tax and bank updates.",
      "href": "/contact",
      "buttonLabel": "Plan name change"
    },
    "sections": [
      {
        "heading": "When startups rename",
        "paragraphs": [
          "Pivot, merger of brands, or investor trademark conflict drives name changes. Customers see marketing rebrand; lawyers see ROC, tax, and contract updates.",
          "Skipping MCA steps leaves you invoicing under a name the government does not recognise."
        ]
      },
      {
        "heading": "Step-by-step ROC process",
        "paragraphs": [
          "• Board meeting to propose change and authorise RUN filing.",
          "• Reserve name via RUN or integrated flow—have 2–3 options.",
          "• EGM with special resolution (Section 114).",
          "• File MGT-14 within 30 days.",
          "• File INC-24 with altered MOA and resolution.",
          "• Receive fresh COI with new name."
        ],
        "callout": "Founder tip: Pause new contracts for 2 weeks during change—or sign under old name with assignment clause."
      },
      {
        "heading": "After COI: mandatory updates",
        "paragraphs": [
          "• PAN name change application on NSDL.",
          "• GST amendment on portal.",
          "• Bank account name change with fresh COI and board resolution.",
          "• Update IEC, PF, ESIC, insurance, and active customer contracts."
        ]
      },
      {
        "heading": "IP and marketing",
        "paragraphs": [
          "File new trademark if brand word changed; assign old TM to company if keeping rights.",
          "Update website CIN display, email footers, and App Store listings."
        ]
      },
      {
        "heading": "Timeline and cost",
        "paragraphs": [
          "ROC leg: 3–6 weeks. Bank and GST: 2–4 weeks parallel. Budget ₹15,000–₹40,000 all-in with professional fees.",
          "Pelago runs rename playbooks so payroll and GST filings do not break mid-month."
        ]
      }
    ]
  },
  {
    "slug": "fast-track-exit-company-closure",
    "title": "Fast Track Exit: How to Legally Close a Private Limited Company",
    "category": "Tax & Compliance",
    "readTime": "5 min",
    "date": "December 10, 2023",
    "excerpt": "Strike off a defunct Pvt Ltd via FTE/STK-2 instead of letting ROC penalties stack—only if you have zero assets, zero liabilities, and clean filings.",
    "valueLabel": "Close dormant companies cleanly",
    "keyTakeaways": [
      "FTE suits companies inactive 2+ years or never commenced business within 1 year.",
      "File STK-2 with indemnity bond and statement of accounts.",
      "All directors must consent; clear tax and ROC defaults first.",
      "Pelago evaluates strike-off vs voluntary liquidation before you apply."
    ],
    "cta": {
      "title": "Stuck with a zero-revenue company?",
      "subtitle": "Strike-off eligibility review + STK-2 filing.",
      "href": "/contact",
      "buttonLabel": "Review company closure"
    },
    "sections": [
      {
        "heading": "Why dormant companies hurt founders",
        "paragraphs": [
          "Inactive Pvt Ltd still needs annual ROC filings and tax returns. Penalties accumulate; directors risk disqualification under Section 164.",
          "Closing cleanly preserves your ability to start the next company without MCA flags."
        ]
      },
      {
        "heading": "Fast Track Exit (FTE) eligibility",
        "paragraphs": [
          "• Not commenced business within 1 year of incorporation, OR",
          "• No business activity for 2 preceding financial years and no assets/liabilities.",
          "• All shareholders agree; company not under litigation.",
          "• GST, income tax, and ROC filings should be current or regularised first."
        ],
        "callout": "Founder tip: 'Zero business' still requires filed NIL returns—strike-off with defaults gets rejected."
      },
      {
        "heading": "STK-2 application pack",
        "paragraphs": [
          "• Board resolution and shareholder affidavit.",
          "• Indemnity bond from directors.",
          "• Statement of accounts certified by CA (zero assets/liabilities).",
          "• Publish notice if required; ROC publishes in gazette for objections.",
          "Timeline often 3–6 months including objection window."
        ]
      },
      {
        "heading": "When FTE is not enough",
        "paragraphs": [
          "Companies with creditors, active litigation, or assets need voluntary liquidation under IBC rules—more expensive but proper.",
          "Do not transfer assets out then apply strike-off—that is fraud."
        ]
      },
      {
        "heading": "Post-strike-off",
        "paragraphs": [
          "PAN becomes inactive; bank account must close. Directors should keep STK-2 acknowledgement for future MCA queries.",
          "Pelago audits eligibility before filing so you do not waste months on rejected applications."
        ]
      }
    ]
  },
  {
    "slug": "annual-return-filing-guide",
    "title": "Annual Return (MGT-7 & AOC-4) Filing Guide",
    "category": "Tax & Compliance",
    "readTime": "6 min",
    "date": "December 08, 2023",
    "excerpt": "File AOC-4 and MGT-7 on time every year—even at zero revenue—or directors face disqualification and due diligence red flags.",
    "valueLabel": "Never miss MCA annual filings",
    "keyTakeaways": [
      "First AGM within 9 months of financial year end (31 March for most).",
      "AOC-4 within 30 days of AGM attaches audited financials.",
      "MGT-7/7A within 60 days of AGM captures shareholding and meetings.",
      "Pelago retainer covers AGM, boards, and ROC filings end-to-end."
    ],
    "cta": {
      "title": "Annual compliance overdue?",
      "subtitle": "Catch-up filings, AGM, and director KYC restoration.",
      "href": "/services",
      "buttonLabel": "Book compliance call"
    },
    "sections": [
      {
        "heading": "Why zero-revenue companies still file",
        "paragraphs": [
          "Pvt Ltd under Companies Act 2013 must file annual financial statements and annual return irrespective of turnover. 'We did no business' is not an exemption—it's a NIL filing.",
          "Investors and acquirers pull MCA master data—gaps kill deals."
        ]
      },
      {
        "heading": "AOC-4: financial statements",
        "paragraphs": [
          "Board approves financials; auditors sign report (mandatory audit for Pvt Ltd). File AOC-4 within 30 days of AGM attaching balance sheet, P&L, auditor report, and director report.",
          "XBRL filing applies above turnover thresholds—verify each year."
        ],
        "callout": "Founder tip: Close books by May for March year-end—rushing September AGM invites errors."
      },
      {
        "heading": "MGT-7 / MGT-7A: annual return",
        "paragraphs": [
          "Discloses shareholding, debentures, directors, and AGM date. Due within 60 days of AGM.",
          "Small companies and OPC may use MGT-7A—confirm eligibility annually."
        ]
      },
      {
        "heading": "Adjacent annual obligations",
        "paragraphs": [
          "• DIR-3 KYC for all directors by 30 September.",
          "• DPT-3 for outstanding loans/deposits (even if NIL).",
          "• Income tax return and tax audit if turnover crosses limits.",
          "• GST annual return GSTR-9 if registered."
        ]
      },
      {
        "heading": "Penalties and remediation",
        "paragraphs": [
          "Additional fees escalate with delay; persistent default leads to company strike-off and director disqualification for 5 years.",
          "Pelago's annual compliance retainer schedules AGM, prepares board minutes, and files AOC-4/MGT-7 so founders focus on revenue—not MCA portals."
        ]
      }
    ]
  },
  {
    "slug": "private-limited-company-registration",
    "title": "Private Limited Company Registration in India: Step-by-Step",
    "category": "Registration",
    "readTime": "9 min",
    "date": "June 02, 2025",
    "excerpt": "Register a Pvt Ltd in 7–10 working days with SPICe+—know exact documents, costs, and post-COI steps before investors ask.",
    "valueLabel": "Incorporate Pvt Ltd the right way",
    "keyTakeaways": [
      "SPICe+ files DIN, PAN, TAN, and COI in one flow when documents are clean.",
      "Budget ₹12,000–₹35,000 all-in for DSC, stamp duty, and professional fees.",
      "INC-20A and current account must follow within 180 days of incorporation.",
      "Pelago handles name approval through COI and hands you a compliance calendar."
    ],
    "cta": {
      "title": "Ready to incorporate?",
      "subtitle": "Fixed-quote Pvt Ltd package—7–10 day timeline with WhatsApp updates.",
      "href": "/contact",
      "buttonLabel": "Get Pvt Ltd quote"
    },
    "sections": [
      {
        "heading": "Before you file SPICe+",
        "paragraphs": [
          "You need 2 directors (one can be nominee later in OPC, but standard Pvt Ltd needs two), unique name options, registered office proof, and MOA objects that match what you actually sell.",
          "Authorised capital choice affects stamp duty—don't inflate to ₹10L for vanity."
        ],
        "callout": "Founder tip: Align company name with domain, trademark search, and GST trade name early."
      },
      {
        "heading": "SPICe+ filing sequence",
        "paragraphs": [
          "• Class 3 DSC for each subscriber/director.",
          "• Reserve name (Part A) or file combined in Part B.",
          "• Attach MOA/AOA, NOC, utility bill, and subscriber sheet.",
          "• Receive COI, PAN, TAN—open current account with board resolution.",
          "• File INC-20A when applicable; register for GST if liable or voluntary."
        ]
      },
      {
        "heading": "Cost breakdown (indicative)",
        "paragraphs": [
          "Item | Typical ₹ range",
          "DSC (2) | 2,000 – 3,000",
          "Govt fees + stamp | 2,000 – 12,000",
          "Professional fees | 5,000 – 15,000",
          "Virtual office (annual) | 3,000 – 15,000"
        ]
      },
      {
        "heading": "After COI: first 30 days",
        "paragraphs": [
          "Appoint statutory auditor (ADT-1), deposit subscription money, file commencement proofs, and set up accounting + GST if needed.",
          "Pelago bundles incorporation with post-incorporation checklist execution so nothing slips before your first invoice."
        ]
      }
    ]
  },
  {
    "slug": "llp-registration-india",
    "title": "LLP Registration in India: Process, Cost & Compliance",
    "category": "Registration",
    "readTime": "7 min",
    "date": "June 01, 2025",
    "excerpt": "Register an LLP via FiLLiP in about a week—lighter compliance than Pvt Ltd when you are not raising equity.",
    "valueLabel": "LLP setup without equity drama",
    "keyTakeaways": [
      "FiLLiP integrates DIN, PAN, TAN, and LLP agreement filing.",
      "Ideal for agencies and bootstrapped partnerships—not for VC-backed product startups.",
      "Audit only if turnover > ₹40L or capital > ₹25L.",
      "Pelago drafts LLP agreement and files through COI."
    ],
    "cta": {
      "title": "Registering an LLP?",
      "subtitle": "Partner-friendly agreement + MCA filing in one package.",
      "href": "/contact",
      "buttonLabel": "Start LLP registration"
    },
    "sections": [
      {
        "heading": "When LLP beats Pvt Ltd",
        "paragraphs": [
          "Two or more partners, profit-share flexibility, no share certificates, and lower recurring MCA burden.",
          "You cannot issue ESOPs or CCPS—if that's on the roadmap, choose Pvt Ltd instead."
        ]
      },
      {
        "heading": "Documents checklist",
        "paragraphs": [
          "• PAN/Aadhaar of partners and designated partners.",
          "• Registered office rent agreement + owner NOC.",
          "• LLP agreement (capital contribution, profit ratio, decision rights).",
          "• Main business activity description for incorporation form."
        ]
      },
      {
        "heading": "Annual compliance rhythm",
        "paragraphs": [
          "• Form 11 (annual return) and Form 8 (statement of accounts).",
          "• Income tax return for LLP.",
          "• GST if registered."
        ],
        "callout": "Founder tip: Document partner exits in the agreement—verbal splits are painful without buyback clauses."
      },
      {
        "heading": "Pelago LLP package",
        "paragraphs": [
          "We file FiLLiP, register LLP agreement, and hand you a compliance calendar with GST and tax filing options if you need them."
        ]
      }
    ]
  },
  {
    "slug": "gst-registration-india",
    "title": "GST Registration in India: When, How & What Happens Next",
    "category": "Tax & Compliance",
    "readTime": "8 min",
    "date": "May 28, 2025",
    "excerpt": "Get your GSTIN in 3–5 days when you're liable—or voluntarily—to claim ITC and invoice enterprises with confidence.",
    "valueLabel": "GSTIN without portal confusion",
    "keyTakeaways": [
      "Mandatory above ₹20L turnover (₹10L in special category states) or inter-state supply.",
      "Voluntary registration unlocks input tax credit on B2B purchases.",
      "GSTIN must match legal name on invoices and bank KYC.",
      "Pelago files REG-01 and tracks ARN to certificate."
    ],
    "cta": {
      "title": "Need GST registration?",
      "subtitle": "We file, respond to queries, and set up your first GSTR-1/3B calendar.",
      "href": "/contact",
      "buttonLabel": "Register for GST"
    },
    "sections": [
      {
        "heading": "Do you need GST now?",
        "paragraphs": [
          "E-commerce sellers, inter-state B2B, and brands crossing turnover thresholds must register.",
          "B2C local-only under threshold may wait—but enterprise clients often demand your GSTIN on the PO."
        ]
      },
      {
        "heading": "Registration process",
        "paragraphs": [
          "• Apply on gst.gov.in with PAN, Aadhaar authentication, bank proof, address proof.",
          "• Track Application Reference Number (ARN).",
          "• Respond to department queries within timelines.",
          "• Receive GSTIN certificate—update invoices, contracts, and marketplaces."
        ]
      },
      {
        "heading": "Immediately after GSTIN",
        "paragraphs": [
          "• Issue GST-compliant invoices (HSN/SAC, place of supply).",
          "• File GSTR-1 and GSTR-3B per your frequency (monthly/quarterly).",
          "• Reconcile GSTR-2B with purchase books monthly."
        ],
        "callout": "Founder tip: Separate GST collected in accounting—it's not revenue."
      },
      {
        "heading": "Common rejection reasons",
        "paragraphs": [
          "Address mismatch, inactive DIN, or trade name unlike legal name. Pelago pre-validates documents before submission to avoid 2-week delays."
        ]
      }
    ]
  },
  {
    "slug": "itr-filing-startups",
    "title": "Income Tax Return (ITR) Filing for Startups & Directors",
    "category": "Tax & Compliance",
    "readTime": "9 min",
    "date": "May 25, 2025",
    "excerpt": "File the correct ITR form on time—company, LLP, and founder personal returns—with deductions you are actually entitled to.",
    "valueLabel": "File ITR without last-minute panic",
    "keyTakeaways": [
      "Pvt Ltd typically files ITR-6; LLP uses ITR-5; founders file ITR-2/3 based on income.",
      "Due date is usually 31 July (extensions announced in stressful years).",
      "Late filing costs ₹5,000+ penalty and blocks loss carry-forward.",
      "Pelago prepares books-linked returns for business and directors."
    ],
    "cta": {
      "title": "ITR season approaching?",
      "subtitle": "Business + director returns with advance tax and 26AS reconciliation.",
      "href": "/contact",
      "buttonLabel": "Book ITR filing"
    },
    "sections": [
      {
        "heading": "Which ITR form?",
        "paragraphs": [
          "Company (domestic) | ITR-6",
          "LLP / Partnership | ITR-5",
          "Director with salary + capital gains | Often ITR-2 or ITR-3",
          "Startups with 80-IAC benefit | ITR-6 with schedule claiming holiday—documentation must be airtight."
        ]
      },
      {
        "heading": "Documents to compile",
        "paragraphs": [
          "• Audited financials (Pvt Ltd) or books (smaller entities).",
          "• Form 26AS and AIS for TDS credits.",
          "• GST annual reconciliation if registered.",
          "• Details of foreign investments, ESOP perquisites, and director loans."
        ]
      },
      {
        "heading": "Advance tax for profitable cos",
        "paragraphs": [
          "If tax liability exceeds ₹10,000 after TDS, pay advance tax in instalments (15 Jun, 15 Sep, 15 Dec, 15 Mar).",
          "Missed advance tax attracts interest under Sections 234B and 234C."
        ],
        "callout": "Founder tip: Pay yourself a reasonable salary so personal and company taxes are planned—not accidental."
      },
      {
        "heading": "Pelago ITR workflow",
        "paragraphs": [
          "We close books, reconcile TDS/GST, pick the correct form, and file with e-verification—plus a summary founders can share with investors."
        ]
      }
    ]
  },
  {
    "slug": "tds-returns-compliance",
    "title": "TDS Returns for Startups: Deduction, Deposit & Quarterly Filing",
    "category": "Tax & Compliance",
    "readTime": "8 min",
    "date": "May 22, 2025",
    "excerpt": "Deduct, deposit, and file 24Q/26Q on schedule—so contractors trust you and your ITR matches Form 26AS.",
    "valueLabel": "TDS compliance in one system",
    "keyTakeaways": [
      "Section 192 for salary; 194J for consultants; 194C for contractors.",
      "Deposit by 7th of next month; file quarterly returns.",
      "Issue Form 16/16A or vendors cannot claim credit.",
      "Pelago runs payroll + vendor TDS end-to-end."
    ],
    "cta": {
      "title": "Paying consultants or payroll?",
      "subtitle": "TDS calculation, challans, and quarterly returns handled for you.",
      "href": "/contact",
      "buttonLabel": "Setup TDS compliance"
    },
    "sections": [
      {
        "heading": "Sections startups use weekly",
        "paragraphs": [
          "• 192 — salary TDS via payroll.",
          "• 194J — professional fees (10% typical).",
          "• 194C — contractors (1%/2% based on payee).",
          "• 194I — rent on office (10% building, 2% equipment).",
          "Without PAN, higher rates apply (206AA)."
        ]
      },
      {
        "heading": "Monthly rhythm",
        "paragraphs": [
          "• Deduct TDS when invoice is paid or due (earlier).",
          "• Pay challan by 7th (April challan for March).",
          "• Track cumulative thresholds per section annually."
        ]
      },
      {
        "heading": "Quarterly returns",
        "paragraphs": [
          "Form 24Q for salary; Form 26Q for non-salary deductees.",
          "Issue Form 16 to employees by 15 June; Form 16A to vendors quarterly."
        ],
        "callout": "Founder tip: Never label employees as consultants to skip PF—TDS and labour law still expose you."
      },
      {
        "heading": "Pelago TDS retainer",
        "paragraphs": [
          "Payroll structuring, challan payments, return filing, and mismatch resolution before your tax audit."
        ]
      }
    ]
  },
  {
    "slug": "accounting-bookkeeping-startups",
    "title": "Accounting & Bookkeeping for Indian Startups: What Good Looks Like",
    "category": "Tax & Compliance",
    "readTime": "8 min",
    "date": "May 20, 2025",
    "excerpt": "Clean monthly books mean faster ITR, credible investor diligence, and GST ITC you can actually defend.",
    "valueLabel": "Books investors trust",
    "keyTakeaways": [
      "Separate company and founder transactions from day one.",
      "Monthly P&L, balance sheet, and cash flow—not just an annual scramble.",
      "Chart of accounts aligned to GST and TDS from the start.",
      "Pelago delivers monthly MIS founders can read."
    ],
    "cta": {
      "title": "Books messy after year one?",
      "subtitle": "Catch-up bookkeeping + monthly accounting with GST/TDS sync.",
      "href": "/contact",
      "buttonLabel": "Start bookkeeping"
    },
    "sections": [
      {
        "heading": "Minimum viable finance stack",
        "paragraphs": [
          "Current account only for business, accounting software (Zoho/Tally), invoice numbering, and expense policy for founders.",
          "Reimbursement sheets beat personal card chaos at audit time."
        ]
      },
      {
        "heading": "Monthly deliverables",
        "paragraphs": [
          "• Bank reconciliation.",
          "• Accounts payable/receivable aging.",
          "• GST-ready revenue and expense classification.",
          "• Burn rate and runway dashboard."
        ]
      },
      {
        "heading": "When investors ask for data",
        "paragraphs": [
          "Due diligence wants 24-month trends, related-party disclosures, and cap table tie to share capital in books.",
          "Pelago keeps books audit-ready so statutory audit is a checkpoint—not a rebuild."
        ],
        "callout": "Founder tip: Tag every Razorpay/PG settlement to invoices—unexplained 'other income' scares CAs."
      },
      {
        "heading": "Catch-up vs ongoing",
        "paragraphs": [
          "Missed a year? We reconstruct from bank/GST and normalize before ROC/ITR deadlines. Then move to monthly retainer."
        ]
      }
    ]
  },
  {
    "slug": "copyright-registration-india",
    "title": "Copyright Registration in India: Protect Code, Design & Content",
    "category": "Legal & IP",
    "readTime": "7 min",
    "date": "May 18, 2025",
    "excerpt": "Register copyright on apps, courses, and creative work—stronger proof in disputes and investor IP due diligence.",
    "valueLabel": "Own what your team builds",
    "keyTakeaways": [
      "Copyright exists at creation; registration strengthens evidence.",
      "Software, UI, blogs, videos, and training material can be registered.",
      "Contractors need IP assignment—even with registration.",
      "Pelago files applications and tracks diary numbers."
    ],
    "cta": {
      "title": "Shipping product or content?",
      "subtitle": "Copyright + contractor IP assignment reviewed before launch.",
      "href": "/contact",
      "buttonLabel": "Protect creative IP"
    },
    "sections": [
      {
        "heading": "What to register",
        "paragraphs": [
          "• Source code and documentation (literary work).",
          "• UI/UX assets (artistic work).",
          "• Marketing videos and course material.",
          "• Logo may be trademark; copyright covers expression not brand name."
        ]
      },
      {
        "heading": "Process overview",
        "paragraphs": [
          "• Application on copyright.gov.in with work sample and author details.",
          "• Diary number issued; objections rare if paperwork clean.",
          "• Certificate strengthens injunctive relief in copycat disputes."
        ]
      },
      {
        "heading": "Employment vs contractor",
        "paragraphs": [
          "Employees: IP generally vests with employer under contract and law.",
          "Freelancers: require explicit assignment of present and future work."
        ],
        "callout": "Founder tip: Register after major release—version date on deposit should match shipping date."
      },
      {
        "heading": "Pelago IP bundle",
        "paragraphs": [
          "Pair copyright with trademark search and assignment template review so acquirers see clean IP schedules."
        ]
      }
    ]
  },
  {
    "slug": "statutory-audit-india",
    "title": "Statutory Audit for Private Limited Companies: Timeline & Prep",
    "category": "Tax & Compliance",
    "readTime": "7 min",
    "date": "May 15, 2025",
    "excerpt": "Coordinate your first audit without panic—documents, auditor appointment, and AOC-4 filing in one rhythm.",
    "valueLabel": "Survive audit season",
    "keyTakeaways": [
      "Pvt Ltd audit is mandatory regardless of revenue.",
      "ADT-1 appoints auditor within 30 days of incorporation.",
      "Audit signs financials before AGM and AOC-4 filing.",
      "Pelago coordinates auditors and closes book queries."
    ],
    "cta": {
      "title": "First audit coming up?",
      "subtitle": "Book closure, auditor coordination, and ROC filing support.",
      "href": "/contact",
      "buttonLabel": "Get audit support"
    },
    "sections": [
      {
        "heading": "Auditor appointment rules",
        "paragraphs": [
          "First auditor at board within 30 days of incorporation; subsequent at AGM.",
          "File ADT-1 within 15 days of appointment.",
          "Rotate auditor every 5/10 years per company size rules."
        ]
      },
      {
        "heading": "What auditors request",
        "paragraphs": [
          "• Bank statements and reconciliations.",
          "• GST returns and annual reconciliation.",
          "• TDS challans and Form 26AS.",
          "• Related-party contracts and founder loan statements.",
          "• Fixed asset registers and vendor contracts."
        ]
      },
      {
        "heading": "Timeline to AGM",
        "paragraphs": [
          "Close books → draft financials → audit fieldwork → signed report → board approval → AGM → AOC-4 within 30 days."
        ],
        "callout": "Founder tip: Respond to PBC lists within 48 hours—audit delays push ROC penalties."
      },
      {
        "heading": "Pelago's role",
        "paragraphs": [
          "We prepare schedules, liaise with auditors, and file AOC-4/MGT-7 so founders aren't learning MCA forms under deadline pressure."
        ]
      }
    ]
  },
  {
    "slug": "director-kyc-dir3-guide",
    "title": "Director KYC (DIR-3): Annual Compliance Every Director Must File",
    "category": "Tax & Compliance",
    "readTime": "5 min",
    "date": "May 12, 2025",
    "excerpt": "File DIR-3 KYC by 30 September or your DIN gets deactivated—and ROC filings stop cold.",
    "valueLabel": "Keep DIN active",
    "keyTakeaways": [
      "Every director with DIN must file DIR-3 KYC annually.",
      "Uses Aadhaar-verified mobile and email on MCA.",
      "Deactivated DIN blocks signing SPICe+, MGT-7, and bank KYC updates.",
      "Pelago sends reminders and files for your board."
    ],
    "cta": {
      "title": "DIN KYC pending?",
      "subtitle": "We reactivate DIN and complete DIR-3 for all directors.",
      "href": "/contact",
      "buttonLabel": "Complete DIR-3 KYC"
    },
    "sections": [
      {
        "heading": "Who must file",
        "paragraphs": [
          "All directors on active companies—even if not signing day-to-day filings.",
          "New directors complete KYC after DIN allotment; existing ones annually by 30 Sep."
        ]
      },
      {
        "heading": "How to file",
        "paragraphs": [
          "• Login MCA with director credentials.",
          "• Verify OTP on Aadhaar-linked mobile/email.",
          "• Confirm address and DIN details.",
          "• Pay nominal fees if applicable for late cases."
        ]
      },
      {
        "heading": "If DIN is deactivated",
        "paragraphs": [
          "File DIR-3 KYC in compliance mode, pay additional fees, wait for reactivation before any ROC submission."
        ],
        "callout": "Founder tip: Calendar DIR-3 with AGM prep—not the week investors need a signing."
      },
      {
        "heading": "Pelago compliance calendar",
        "paragraphs": [
          "Bundled with annual ROC retainer: DIR-3, DPT-3, MGT-7, AOC-4 reminders on WhatsApp."
        ]
      }
    ]
  },
  {
    "slug": "pf-esi-labour-compliance",
    "title": "PF & ESI Registration: Labour Compliance for Growing Teams",
    "category": "Tax & Compliance",
    "readTime": "8 min",
    "date": "May 10, 2025",
    "excerpt": "Register PF and ESI before scale bites—true employer cost, monthly filings, and inspector-ready records.",
    "valueLabel": "Hire without labour surprises",
    "keyTakeaways": [
      "PF often at 20+ employees; many startups register early for benefits.",
      "ESI applies from 10+ employees in covered establishments.",
      "Employer cost is 12%+ on PF wages—not optional if liable.",
      "Pelago sets up EPFO/ESIC and monthly ECR."
    ],
    "cta": {
      "title": "First hires on payroll?",
      "subtitle": "PF/ESI registration, CTC structuring, and monthly compliance.",
      "href": "/contact",
      "buttonLabel": "Setup payroll compliance"
    },
    "sections": [
      {
        "heading": "PF basics",
        "paragraphs": [
          "Employees and employer each contribute 12% of basic wages (within wage ceiling).",
          "UAN must be generated for every employee.",
          "Monthly ECR filed by 15th with payment."
        ]
      },
      {
        "heading": "ESI basics",
        "paragraphs": [
          "Applies when headcount and establishment type meet thresholds; wage ceiling notifications change—verify yearly.",
          "Employer ~3.25%, employee ~0.75% on applicable wages."
        ]
      },
      {
        "heading": "Registers and inspections",
        "paragraphs": [
          "Maintain attendance, wages, and leave registers under Shops Act.",
          "Contractors on site may trigger labour-code scrutiny—classify correctly."
        ],
        "callout": "Founder tip: Show true PF-inclusive CTC in offer letters—surprise deductions kill offer acceptance."
      },
      {
        "heading": "Pelago payroll stack",
        "paragraphs": [
          "CTC design, PF/ESI registration, monthly challans, Form 16, and coordination with Shop Act registration."
        ]
      }
    ]
  },
  {
    "slug": "hr-policy-setup-startups",
    "title": "HR Policies for Startups: Handbook, Leave & Contracts That Scale",
    "category": "Startup",
    "readTime": "7 min",
    "date": "May 08, 2025",
    "excerpt": "Put leave, probation, and IP policies on paper before your fifth hire—avoid disputes and due diligence gaps.",
    "valueLabel": "HR basics without an HR team",
    "keyTakeaways": [
      "Appointment letters must match actual CTC and PF structure.",
      "Handbook covers leave, POSH, remote work, and device security.",
      "Founder-friendly ≠ legally vague—Indian labour law still applies.",
      "Pelago drafts policies sized to your headcount."
    ],
    "cta": {
      "title": "Hiring your first team?",
      "subtitle": "Offer letters, handbook, and POSH framework in 7–10 days.",
      "href": "/contact",
      "buttonLabel": "Setup HR policies"
    },
    "sections": [
      {
        "heading": "Core documents",
        "paragraphs": [
          "• Appointment letter + CTC annexure.",
          "• Confidentiality and IP assignment.",
          "• Leave and attendance policy (state-aware).",
          "• Code of conduct and disciplinary process."
        ]
      },
      {
        "heading": "POSH compliance",
        "paragraphs": [
          "10+ employees trigger POSH internal committee requirements in many contexts—document committee and training.",
          "Remote teams still need harassment redressal pathways."
        ]
      },
      {
        "heading": "Contractor vs employee policy",
        "paragraphs": [
          "Define when you use consultants vs payroll—misclassification is a top due diligence finding."
        ],
        "callout": "Founder tip: Version-control HR policies—send change logs when you update leave rules."
      },
      {
        "heading": "Pelago HR kit",
        "paragraphs": [
          "Templates customized to Kerala/other states, plus payroll compliance hookup when you flip from contractors to FTEs."
        ]
      }
    ]
  },
  {
    "slug": "payroll-ctc-structuring",
    "title": "Payroll & CTC Structuring: True Cost of Hiring in India",
    "category": "Startup",
    "readTime": "8 min",
    "date": "May 05, 2025",
    "excerpt": "Structure salary so in-hand pay, PF, TDS, and employer cost are transparent—before you extend an offer.",
    "valueLabel": "Offers candidates understand",
    "keyTakeaways": [
      "CTC ≠ in-hand—basic, HRA, allowances, PF, and TDS change take-home.",
      "Basic drives PF and gratuity—balance tax efficiency and compliance.",
      "Professional tax varies by state.",
      "Pelago models CTC and runs monthly payroll."
    ],
    "cta": {
      "title": "Making an offer this week?",
      "subtitle": "CTC breakup, compliance, and payslips—5–7 day setup.",
      "href": "/contact",
      "buttonLabel": "Structure payroll"
    },
    "sections": [
      {
        "heading": "CTC components",
        "paragraphs": [
          "Basic salary | 40–50% of gross typical",
          "HRA | Tax benefit if rent paid",
          "Special allowance | Flexible bucket",
          "Employer PF | ~12% of basic",
          "Gratuity accrual | Long-term liability"
        ]
      },
      {
        "heading": "Tax regime choice",
        "paragraphs": [
          "New vs old regime per employee—payroll must support both with proof collection in old regime.",
          "Founders on payroll: plan advance tax on other income too."
        ]
      },
      {
        "heading": "Monthly payroll outputs",
        "paragraphs": [
          "• Payslips with breakup.",
          "• TDS under 192 deposited.",
          "• PF ECR filed.",
          "• Reimbursement tracking."
        ],
        "callout": "Founder tip: Use our Employee Cost calculator on /tools before promising '₹1L in-hand'."
      },
      {
        "heading": "Pelago payroll",
        "paragraphs": [
          "Offer letter CTC design, compliance registration, monthly processing, and Form 16 at year-end."
        ]
      }
    ]
  },
  {
    "slug": "business-strategy-scaling",
    "title": "Business Strategy for SMEs: From Survival to Scalable Systems",
    "category": "Startup",
    "readTime": "9 min",
    "date": "May 03, 2025",
    "excerpt": "Turn ad-hoc growth into a 12-month operating plan—unit economics, hiring waves, and compliance that won't break at scale.",
    "valueLabel": "Strategy tied to numbers",
    "keyTakeaways": [
      "Strategy without unit economics is a slide deck, not a plan.",
      "Map revenue, hiring, and compliance costs in one quarterly view.",
      "Pelago pairs finance clarity with operational roadmaps.",
      "Best for ₹1Cr–₹25Cr revenue teams outgrowing founder-only decisions."
    ],
    "cta": {
      "title": "Revenue up but chaos too?",
      "subtitle": "Custom growth diagnostic—finance, ops, and compliance alignment.",
      "href": "/contact",
      "buttonLabel": "Book strategy session"
    },
    "sections": [
      {
        "heading": "When you need this",
        "paragraphs": [
          "• Hitting consistent ₹10L+ monthly revenue but margins unclear.",
          "• Hiring managers before HR/compliance exists.",
          "• Preparing for debt or equity with messy internals.",
          "• Expanding to new states without tax/registrations mapped."
        ]
      },
      {
        "heading": "What a useful plan contains",
        "paragraphs": [
          "• 12-month revenue and expense forecast.",
          "• Hiring plan tied to PF/GST triggers.",
          "• Working capital and collection cadence (B2B India realities).",
          "• Compliance calendar synced to growth milestones."
        ]
      },
      {
        "heading": "What we don't do",
        "paragraphs": [
          "Generic motivational consulting. Pelago focuses on executable plans—registration, tax, payroll, and MIS you can hand to a board."
        ],
        "callout": "Founder tip: Run strategy quarterly; Indian regulation and GST rules change mid-year."
      },
      {
        "heading": "Engagement shape",
        "paragraphs": [
          "Diagnostic workshop → 90-day priority map → optional retainer for finance/compliance execution."
        ]
      }
    ]
  },
  {
    "slug": "project-report-bank-loan",
    "title": "Project Reports for Bank Loans: CMA Data & MSME Documentation",
    "category": "Startup",
    "readTime": "8 min",
    "date": "May 01, 2025",
    "excerpt": "Package bank-ready project reports with realistic projections—so PSU and private banks take your file seriously.",
    "valueLabel": "Loan files that pass scrutiny",
    "keyTakeaways": [
      "Banks want CMA/project report, not just a pitch deck.",
      "Udyam registration and 2–3 years projections must reconcile.",
      "Collateral-free schemes need stronger cash-flow narrative.",
      "Pelago builds reports in 7–10 working days."
    ],
    "cta": {
      "title": "Applying for a business loan?",
      "subtitle": "Project report + financial schedules aligned to your GST/ITR data.",
      "href": "/contact",
      "buttonLabel": "Get project report"
    },
    "sections": [
      {
        "heading": "What banks evaluate",
        "paragraphs": [
          "• Promoter background and credit history.",
          "• Historical financials (or proxy for new cos).",
          "• DSCR—debt service coverage ratio.",
          "• Industry risk and working capital cycle."
        ]
      },
      {
        "heading": "Documents in a strong file",
        "paragraphs": [
          "• Project report with capex/working capital breakup.",
          "• CMA data where required.",
          "• GST returns and bank statements.",
          "• Udyam certificate for MSME schemes.",
          "• Collateral or guarantee details if applicable."
        ]
      },
      {
        "heading": "MSME and CGTMSE angle",
        "paragraphs": [
          "Collateral-free guarantee schemes still need credible projections—not hockey sticks.",
          "Delayed payments from large buyers? Show MSME Samadhaan awareness in narrative."
        ],
        "callout": "Founder tip: Match loan ask to use-of-funds line items—vague 'working capital' raises red flags."
      },
      {
        "heading": "Pelago deliverable",
        "paragraphs": [
          "Bank-specific format, promoter interview for assumptions, and revision round after branch manager feedback."
        ]
      }
    ]
  }
];
