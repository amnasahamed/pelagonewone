import type { TypedLessonSection } from "@/lib/learn-section-utils";

export type LegacyLessonSection = { heading: string; paragraphs: string[] };
export type LessonSection = TypedLessonSection;
export type LessonCta = {
  title: string;
  subtitle: string;
  href: string;
  buttonLabel: string;
};
export type LessonContent = {
  id: string;
  title: string;
  sections: LessonSection[];
  keyTakeaways?: string[];
  cta?: LessonCta;
};

type LegacyLessonContent = {
  id: string;
  title: string;
  sections: LegacyLessonSection[];
};

export const lessonContentById: Record<string, LegacyLessonContent> = {
  "choosing-structure": {
    "id": "choosing-structure",
    "title": "Choosing the Right Structure",
    "sections": [
      {
        "heading": "Why structure matters on day one",
        "paragraphs": [
          "Your legal structure decides how much personal risk you carry, how investors can buy in, how much compliance you owe each year, and even how customers perceive you.",
          "Founders in India often pick Pvt Ltd because it sounds 'serious,' or LLP because a CA said it's cheaper — without mapping the choice to fundraising, co-founders, and tax.",
          "Switching later (proprietorship → company, LLP → Pvt Ltd) is possible but costs time, stamp duty, and professional fees. Starting with the right structure avoids a painful migration at Series A."
        ]
      },
      {
        "heading": "Structures Indian founders actually use",
        "paragraphs": [
          "Sole proprietorship: One person, unlimited personal liability, minimal compliance. Fine for freelancers billing under ₹20–30L with no employees.",
          "Partnership firm: Two or more partners, joint liability unless limited. Rare for tech startups; still seen in family trading businesses.",
          "LLP (Limited Liability Partnership): Separate legal entity, partners have limited liability, cannot issue equity shares to VCs. Strong fit for agencies, consultancies, and bootstrapped service firms.",
          "Private Limited Company: Separate legal entity, shares, board, ROC filings. Default for startups that want ESOPs, angel/VC money, or enterprise sales.",
          "OPC (One Person Company): Single founder with limited liability; share capital and turnover caps apply. Useful for solo operators who outgrow proprietorship."
        ]
      },
      {
        "heading": "Quick comparison for startups",
        "paragraphs": [
          "Factor | Sole prop / Partnership | LLP | Pvt Ltd",
          "Personal liability | High / Joint | Limited | Limited",
          "Raise equity from investors | No | No | Yes",
          "ESOPs for team | No | Difficult | Yes",
          "Typical annual compliance cost | Low | Medium | Medium–High",
          "Audit requirement | Income tax based | If turnover > ₹40L or capital > ₹25L | Mandatory",
          "Best default for VC-backed ambition | No | Rarely | Yes"
        ]
      },
      {
        "heading": "Decision guide by founder situation",
        "paragraphs": [
          "• Bootstrapped agency with 2–4 partners, no equity investors → LLP is often enough.",
          "• SaaS / product startup planning angel round in 12–18 months → Pvt Ltd early.",
          "• Solo consultant testing idea → proprietorship or OPC, convert when revenue stabilises.",
          "• E-commerce brand with inventory and suppliers → Pvt Ltd for contracts and GST credibility.",
          "• Non-profit social impact → Section 8 company (covered in a later module)."
        ]
      },
      {
        "heading": "Common mistakes",
        "paragraphs": [
          "• Incorporating Pvt Ltd with ₹10L authorised capital 'for show' — higher stamp duty in many states.",
          "• Ignoring registered office rules (cannot be a random virtual address without documentation).",
          "• Assuming LLP is 'zero compliance' — you still file Form 8, Form 11, and IT returns.",
          "• Splitting equity 50-50 without vesting because structure paperwork is easier than founder conversations."
        ]
      },
      {
        "heading": "Pro tips",
        "paragraphs": [
          "Match structure to your cap table story in 3 years, not just today's invoice volume.",
          "Book a 30-minute structure review with an advisor before paying incorporation fees — Pelago maps structure to your revenue model and state."
        ]
      }
    ]
  },
  "incorporation-process": {
    "id": "incorporation-process",
    "title": "The Incorporation Process & Costs",
    "sections": [
      {
        "heading": "SPICe+ in plain English",
        "paragraphs": [
          "Most new Private Limited companies in India are incorporated through MCA's SPICe+ form on the Ministry of Corporate Affairs portal.",
          "One integrated filing can grant DIN (Director ID), PAN, TAN, EPFO/ESIC registration (where applicable), GSTIN (optional in same flow), and Certificate of Incorporation (COI).",
          "Timeline is typically 7–15 working days after documents are clean — delays usually come from name rejection or DSC issues, not 'government is slow' alone."
        ]
      },
      {
        "heading": "Step-by-step checklist",
        "paragraphs": [
          "• Obtain Class 3 DSC for each proposed director (₹1,000–₹1,500 per DSC, 1–2 days).",
          "• Apply for name reservation via RUN or Part A of SPICe+ (have 2–3 unique names ready).",
          "• Draft MOA/AOA aligned to objects clause — investors read this in due diligence.",
          "• File SPICe+ Part B with capital, registered office, subscriber details.",
          "• Receive COI, PAN, TAN; open current account with COI + MOA/AOA + board resolution.",
          "• File INC-20A (commencement of business) when applicable; activate GST if liable."
        ]
      },
      {
        "heading": "Estimated costs (indicative)",
        "paragraphs": [
          "Item | Typical range (₹)",
          "DSC (2 directors) | 2,000 – 3,000",
          "Government fees + stamp duty | 2,000 – 12,000 (state-dependent)",
          "Professional fees (CA/CS) | 5,000 – 15,000",
          "Registered office / virtual office (annual) | 3,000 – 15,000",
          "Total first-year setup | 12,000 – 35,000"
        ]
      },
      {
        "heading": "Documents founders should prepare early",
        "paragraphs": [
          "• PAN and Aadhaar of all directors and subscribers.",
          "• Address proof (utility bill / bank statement) — not older than 2 months.",
          "• Passport-size photo and specimen signature.",
          "• Registered office proof: rent agreement + NOC from owner, or owned property papers.",
          "• Main objects clause in plain language (what you actually sell)."
        ]
      },
      {
        "heading": "After COI: don't stop here",
        "paragraphs": [
          "Incorporation is step one. Within 30–60 days most startups need: bank account, GST (if applicable), professional tax, shop establishment (state), and founder agreement.",
          "Missing INC-20A or first-year ROC filings can block future funding or cause director disqualification — treat post-incorporation as a checklist, not a celebration pause."
        ]
      }
    ]
  },
  "dipp-recognition": {
    "id": "dipp-recognition",
    "title": "DIPP Recognition & Startup India",
    "sections": [
      {
        "heading": "What DPIIT recognition is",
        "paragraphs": [
          "Department for Promotion of Industry and Internal Trade (DPIIT) recognition labels your entity a 'startup' under Startup India policy.",
          "It is not the same as incorporating a company — you must already be a Pvt Ltd, LLP, or partnership registered in India, usually less than 10 years old with turnover under prescribed limits.",
          "Recognition unlocks access to self-certification under labour/environment laws (where applicable), Fund of Funds visibility, and tax benefits if you separately qualify."
        ]
      },
      {
        "heading": "Eligibility snapshot",
        "paragraphs": [
          "• Entity incorporated in India, < 10 years from incorporation.",
          "• Turnover below ₹100 crore in any previous financial year (check latest notification).",
          "• Working towards innovation / improvement of products or processes.",
          "• Not formed by splitting or restructuring an existing business.",
          "Apply via startupindia.gov.in with incorporation certificate, pitch deck optional, and brief about innovation."
        ]
      },
      {
        "heading": "Tax benefits founders ask about",
        "paragraphs": [
          "Section 80-IAC: 100% deduction on profits for 3 consecutive years out of 10 — requires inter-ministerial board approval; not automatic with DPIIT certificate.",
          "Section 56(2)(viib) angel tax relief: DPIIT + compliance conditions can exempt premium on share issue from angel tax — critical for early priced rounds.",
          "These require separate applications and clean cap table documentation — plan 2–3 months before you need them, not the week before term sheet signing."
        ]
      },
      {
        "heading": "Non-tax perks that still help",
        "paragraphs": [
          "• Faster patent fee rebates and IP support schemes.",
          "• Access to Startup India hub resources and state-level policies.",
          "• Easier narrative for government tenders and corporate innovation programs.",
          "• Self-certification under select labour laws for recognised startups (verify current list)."
        ]
      },
      {
        "heading": "Practical application tips",
        "paragraphs": [
          "• Apply soon after incorporation while objects clause and website match your 'innovation' story.",
          "• Keep pitch and website consistent — mismatches cause rejection.",
          "• Update DPIIT profile when you pivot business model.",
          "• Coordinate with your CA before first angel round for 56(2)(viib) eligibility paperwork."
        ]
      }
    ]
  },
  "cofounders": {
    "id": "cofounders",
    "title": "Co-Founders & Partner Addition",
    "sections": [
      {
        "heading": "Beyond the handshake split",
        "paragraphs": [
          "Equity split is a proxy for risk, role, capital, and IP contributed. 50-50 is fine when vesting, decision rights, and exit scenarios are documented.",
          "Without a founders' agreement (even 5 pages), you rely on Companies Act defaults — which do not cover vesting, non-compete, or what happens if a founder stops showing up."
        ]
      },
      {
        "heading": "What a founders' agreement should cover",
        "paragraphs": [
          "• Roles, decision areas (product vs sales vs finance), and tie-break mechanism.",
          "• Vesting schedule (standard: 4 years, 1-year cliff).",
          "• IP assignment to the company for all past and future work.",
          "• Full-time commitment expectations and side-project rules.",
          "• Good leaver / bad leaver buyback formula.",
          "• Confidentiality and non-solicit (enforceability varies — draft with a lawyer)."
        ]
      },
      {
        "heading": "Adding a co-founder after incorporation",
        "paragraphs": [
          "Pvt Ltd: allot new shares via board + shareholder resolution, file PAS-3, update cap table, revise SHA if investors exist.",
          "LLP: amend LLP agreement, file Form 4 for partner admission, update profit-sharing ratios.",
          "Price per share matters — allotting at ₹10 face value vs fair market value has tax implications under Section 56."
        ]
      },
      {
        "heading": "Adding a director without equity",
        "paragraphs": [
          "Not every early hire should be a director. Directors have fiduciary duties and DIN KYC obligations.",
          "Use director appointment for people who need signing authority; use employee or advisor agreements for others.",
          "File DIR-12 within 30 days of appointment; remove via DIR-12 when they leave."
        ]
      },
      {
        "heading": "Red flags investors see",
        "paragraphs": [
          "• Founder not on cap table but controlling bank account.",
          "• Multiple related-party entities with unclear IP ownership.",
          "• No vesting on founders who joined at different times.",
          "• Verbal promise of 10% equity to early employee never papered."
        ]
      }
    ]
  },
  "shop-establishment": {
    "id": "shop-establishment",
    "title": "Shop & Establishment Act",
    "sections": [
      {
        "heading": "What it is (state law)",
        "paragraphs": [
          "Shop and Establishment (S&E) registration is a state-level licence for any commercial establishment — office, store, warehouse, co-working seat used as registered workplace.",
          "In Maharashtra it's often called Gumasta; Karnataka has e-Karmika; names differ, purpose is similar: regulate working hours, holidays, and employment conditions."
        ]
      },
      {
        "heading": "Who needs it",
        "paragraphs": [
          "• Any Pvt Ltd / LLP with a physical office or commercial address.",
          "• Retail outlets, restaurants, clinics, and service centres.",
          "• Often required to open current account or obtain local trade licences.",
          "Pure work-from-home solo founders may still need it if the registered office is commercial — check state rules."
        ]
      },
      {
        "heading": "How to register (typical flow)",
        "paragraphs": [
          "• Identify state labour department portal.",
          "• Submit establishment details, owner/director IDs, address proof, rent NOC.",
          "• Pay nominal fee (₹200–₹2,000 depending on state and employee count).",
          "• Display registration certificate at premises (physical or digital per state).",
          "Renewal timelines vary — calendar reminders prevent penalties."
        ]
      },
      {
        "heading": "Link to HR compliance",
        "paragraphs": [
          "S&E registration underpins compliance for working hours, weekly offs, and leave registers.",
          "When you hire employees, this registration is often checked alongside PF/ESI setup.",
          "Maintain registers even if you're small — labour inspections do happen in retail and F&B."
        ]
      },
      {
        "heading": "Founder checklist",
        "paragraphs": [
          "• Register within 30 days of starting operations in a state (many states mandate this).",
          "• Update when you shift office to a new state — new registration required.",
          "• Align S&E establishment name with GST and bank account names to reduce KYC friction."
        ]
      }
    ]
  },
  "unit-economics": {
    "id": "unit-economics",
    "title": "Unit Economics 101",
    "sections": [
      {
        "heading": "The one question unit economics answers",
        "paragraphs": [
          "Do you make money on each customer or order after direct costs? If not, scale makes losses worse, not better.",
          "Unit economics turns vague 'we'll monetise later' into measurable contribution margin per user, order, or contract."
        ]
      },
      {
        "heading": "Core metrics (define yours clearly)",
        "paragraphs": [
          "ARPU / ACV: average revenue per user or account per month or year.",
          "COGS: direct costs — hosting, payment gateway fees, delivery, customer support tied to delivery, inventory.",
          "Contribution margin = Revenue − COGS (per unit).",
          "CAC: sales + marketing spend to acquire one paying customer.",
          "LTV: contribution margin × average customer lifetime (months) − retention curve matters."
        ]
      },
      {
        "heading": "India-specific cost lines founders miss",
        "paragraphs": [
          "• Payment gateway ~1.5–2% + GST on digital payments.",
          "• Cash-on-delivery returns and RTO in e-commerce (can destroy margin).",
          "• GST output tax vs input credit timing — cash flow, not just P&L.",
          "• Inside sales salaries + commissions in B2B — fully loaded CAC.",
          "• UPI is cheap for users, but business still bears infrastructure and reconciliation cost."
        ]
      },
      {
        "heading": "Worked mindset example",
        "paragraphs": [
          "SaaS: ₹999/month plan, ₹150 hosting + support COGS → ₹849 contribution. CAC ₹3,000 → payback ~3.5 months if churn is low.",
          "If monthly churn is 8%, average life ~12 months → LTV ≈ ₹10k — still healthy if CAC stays ₹3k.",
          "Change one assumption (churn 15%) and LTV halves — sensitivity tables prevent fantasy forecasts."
        ]
      },
      {
        "heading": "Action items this week",
        "paragraphs": [
          "• Build a one-row spreadsheet: price, COGS, CAC, churn → LTV and payback.",
          "• Separate India GST in/out from 'revenue' line.",
          "• Review last 20 customers — which segment has best contribution margin? Double down there."
        ]
      }
    ]
  },
  "burn-rate": {
    "id": "burn-rate",
    "title": "Burn Rate & Runway",
    "sections": [
      {
        "heading": "Gross vs net burn",
        "paragraphs": [
          "Gross burn: total cash out each month (salaries, rent, tools, marketing).",
          "Net burn: gross burn minus cash collected from customers — what actually leaves the bank.",
          "Founders raising funds should speak net burn after revenue; bootstrapped founders often track gross to control costs."
        ]
      },
      {
        "heading": "Runway formula",
        "paragraphs": [
          "Runway (months) = Cash in bank ÷ Net monthly burn.",
          "Always model two scenarios: base case and 'revenue drops 30%' — Indian B2B sales often slip by a quarter.",
          "Add 2-month buffer for GST payments, advance tax, and festival-season slowdowns."
        ]
      },
      {
        "heading": "What belongs in burn (India)",
        "paragraphs": [
          "• Founder salaries (even ₹50k matters for runway honesty).",
          "• Employer PF/ESI contributions.",
          "• Professional fees: CA, legal, compliance retainers.",
          "• Cloud, SaaS tools, WeWork/co-working.",
          "• Performance marketing and sales travel.",
          "• One-time costs: incorporation, trademark, ESOP setup — tag separately so they don't inflate recurring burn."
        ]
      },
      {
        "heading": "When to cut vs when to invest",
        "paragraphs": [
          "Cut: tools with overlap, unused seats, marketing with CAC > LTV, hiring ahead of revenue.",
          "Invest: compliance that prevents penalties, sales after proven unit economics, inventory only when turnover justifies.",
          "Rule of thumb: below 6 months runway, freeze discretionary spend and model bridge or revenue plan explicitly."
        ]
      },
      {
        "heading": "Board and investor reporting",
        "paragraphs": [
          "Share monthly: opening cash, inflows, outflows by category, closing cash, runway.",
          "Indian angels often ask 'GST working capital' — show receivables ageing if B2B."
        ]
      }
    ]
  },
  "cash-flows": {
    "id": "cash-flows",
    "title": "Projecting Cash Flows",
    "sections": [
      {
        "heading": "Profit ≠ cash in India",
        "paragraphs": [
          "You can show accounting profit and still fail because GST, TDS, advance tax, and vendor advances drain cash earlier than revenue lands.",
          "Cash-flow forecasting is about timing — when money moves, not when you recognise revenue."
        ]
      },
      {
        "heading": "Build a 12-month rolling forecast",
        "paragraphs": [
          "• Row 1: opening cash balance.",
          "• Inflows: customer receipts (lag sales by collection days), investment, loans.",
          "• Outflows: payroll (monthly), rent, vendors (net 30/45), GST paid monthly, TDS deposited, advance tax quarterly.",
          "• Closing balance → feeds next month opening.",
          "Update actuals monthly; variance analysis beats rebuilding from scratch."
        ]
      },
      {
        "heading": "GST and working capital",
        "paragraphs": [
          "If you collect 18% GST from customers but pay vendors with input credit, timing gaps still hit when output tax exceeds credits.",
          "Export businesses: LUT and refund cycles affect cash — model separately.",
          "Do not treat GST collected as revenue — it passes through."
        ]
      },
      {
        "heading": "Scenario planning",
        "paragraphs": [
          "• Base: pipeline converts at historical rate.",
          "• Downside: 30% slower collections, one enterprise deal slips 90 days.",
          "• Upside: only if contract signed — not 'likely intro'.",
          "Founders who model downside sleep better through Diwali quarter slumps."
        ]
      },
      {
        "heading": "Tools and discipline",
        "paragraphs": [
          "Spreadsheet is enough until ₹5–10Cr turnover; then integrate accounting (Zoho Books, Tally, QuickBooks India).",
          "Reconcile bank statement to forecast every month — 30-minute habit prevents surprises."
        ]
      }
    ]
  },
  "bootstrapping": {
    "id": "bootstrapping",
    "title": "Bootstrapping Smartly",
    "sections": [
      {
        "heading": "Bootstrap with a plan, not pride",
        "paragraphs": [
          "Bootstrapping means growth funded by customers and discipline, not 'no budget for compliance.'",
          "Indian bootstrapped winners optimise CAC, collections, and hiring pace — they do not skip GST or PF."
        ]
      },
      {
        "heading": "Revenue-first tactics that work here",
        "paragraphs": [
          "• Pre-sales and pilots with LOIs before building full product.",
          "• Annual prepay discounts to pull cash forward (watch GST on advance receipts).",
          "• Focus on one geography or vertical until repeatability — India is heterogeneous by state and language.",
          "• Partner with distributors only when unit economics survive margin share."
        ]
      },
      {
        "heading": "Cost controls without killing growth",
        "paragraphs": [
          "• Cap tool spend; review SaaS stack quarterly.",
          "• Hire slow — contractor vs employee decision upfront (see HR module).",
          "• Use co-working until team size justifies lease + deposit + S&E.",
          "• Negotiate vendor credit 30–45 days after 3 paid invoices."
        ]
      },
      {
        "heading": "When bootstrap breaks",
        "paragraphs": [
          "Working capital crunch from inventory, long enterprise payment terms, or regulatory capital needs (NBFC, fintech) — equity or debt may be required.",
          "If competitors raise and buy keywords + talent, bootstrapped niches can shrink — monitor market share, not just burn."
        ]
      },
      {
        "heading": "Bridge to funding",
        "paragraphs": [
          "Clean books, filed GST/ROC, and 6 months metrics make angel conversations faster even if you stay bootstrapped.",
          "Treat investors as optional leverage, not rescue."
        ]
      }
    ]
  },
  "gst-basics": {
    "id": "gst-basics",
    "title": "GST Basics for Founders",
    "sections": [
      {
        "heading": "When GST registration is mandatory",
        "paragraphs": [
          "Turnover above ₹20 lakh (₹10 lakh in special category states) in a financial year for goods/services.",
          "Inter-state supply, e-commerce sellers, and certain categories have registration regardless of turnover.",
          "Voluntary registration makes sense if you want input tax credit (ITC) on B2B purchases early."
        ]
      },
      {
        "heading": "Key returns founders must know",
        "paragraphs": [
          "GSTR-1: outward supplies (sales) — monthly or quarterly depending on scheme.",
          "GSTR-3B: summary return with tax payment — monthly for most startups.",
          "GSTR-9 / 9C: annual return and reconciliation (turnover thresholds apply).",
          "Missing GSTR-3B blocks your buyers' ITC and attracts late fees + interest."
        ]
      },
      {
        "heading": "Composition scheme — fit or trap?",
        "paragraphs": [
          "Small taxpayers can pay tax at fixed rate on turnover with simpler compliance.",
          "Cannot collect GST from customers separately or claim ITC in most cases.",
          "Bad fit if you sell to large companies that need ITC on invoices."
        ]
      },
      {
        "heading": "Invoicing rules that prevent disputes",
        "paragraphs": [
          "GSTIN, HSN/SAC, place of supply, tax rate, and reverse charge flag (if applicable) on every invoice.",
          "B2B: match legal name on invoice to buyer GST portal name.",
          "Export: LUT or bond for zero-rated supplies — plan before first shipment."
        ]
      },
      {
        "heading": "Founder mistakes",
        "paragraphs": [
          "• Using personal account for business without clear books.",
          "• Not reconciling GSTR-2B with purchase books monthly.",
          "• Treating GST collected as revenue in pitch decks.",
          "• Ignoring e-invoicing thresholds when you cross turnover limits."
        ]
      }
    ]
  },
  "tds": {
    "id": "tds",
    "title": "TDS (Tax Deducted at Source)",
    "sections": [
      {
        "heading": "Why TDS exists",
        "paragraphs": [
          "Government collects tax at source on certain payments so evasion is harder.",
          "As a payer (company), you deduct TDS, deposit with government, and file quarterly returns.",
          "As a payee, TDS shows in Form 26AS and reduces advance tax liability."
        ]
      },
      {
        "heading": "Sections startups use constantly",
        "paragraphs": [
          "Section 192 — salary TDS via payroll software.",
          "Section 194J — professional fees (consultants, lawyers, some vendors) typically 10%.",
          "Section 194C — contractors for labour/services — 1% (individual/HUF) or 2% (others).",
          "Section 194H — commission/brokerage — 5%.",
          "Section 194-I — rent — 10% for land/building, 2% for plant/machinery."
        ]
      },
      {
        "heading": "Compliance calendar",
        "paragraphs": [
          "• Deduct TDS when payment is due or made (earlier of).",
          "• Deposit by 7th of next month (April for March).",
          "• File 24Q (salary) and 26Q (non-salary) quarterly.",
          "• Issue Form 16 / 16A to deductees.",
          "Late deposit: interest + disallowance risk in your tax audit."
        ]
      },
      {
        "heading": "Contractor vs employee (TDS angle)",
        "paragraphs": [
          "Misclassifying employees as consultants to avoid PF can trigger reclassification, penalties, and wrong TDS section.",
          "Consultant invoices need PAN; without PAN, higher rate applies (Section 206AA)."
        ]
      },
      {
        "heading": "Practical setup",
        "paragraphs": [
          "Enable TDS in accounting software day one; maintain challan PDFs.",
          "Reconcile 26AS before filing your ITR — mismatches delay refunds."
        ]
      }
    ]
  },
  "pf-esi": {
    "id": "pf-esi",
    "title": "PF & ESI Compliance",
    "sections": [
      {
        "heading": "When registration triggers",
        "paragraphs": [
          "EPF (PF): generally mandatory when you have 20+ employees; voluntary registration possible earlier for benefits.",
          "ESIC (ESI): applies when you have 10+ employees (in non-exempt establishments) with wages up to ceiling — check latest wage ceiling notification.",
          "Many startups register PF early to offer credible benefits to first hires."
        ]
      },
      {
        "heading": "Employer cost reality",
        "paragraphs": [
          "PF: employer contributes 12% of basic wages (split across EPS/EPF/admin); employee 12% deducted.",
          "ESI: employer ~3.25%, employee 0.75% on applicable wages (rates subject to notification).",
          "Structure CTC statements so founders know true cost — '₹12L CTC' is not ₹1L/month take-home."
        ]
      },
      {
        "heading": "Monthly process",
        "paragraphs": [
          "• Calculate wages and deductions.",
          "• File ECR on EPFO portal by 15th with payment.",
          "• ESIC challan and return on esic.in.",
          "• Update exits/joins within deadlines to avoid compliance gaps."
        ]
      },
      {
        "heading": "Common startup pitfalls",
        "paragraphs": [
          "• Paying interns cash without documentation.",
          "• Founders on payroll without minimum wages compliance in some states.",
          "• Not issuing UAN to employees — delays withdrawal and transfers.",
          "• Ignoring multi-state establishment rules when hiring remote."
        ]
      },
      {
        "heading": "Why investors care",
        "paragraphs": [
          "Labour non-compliance surfaces in due diligence and can block NBFC partnerships or enterprise vendor onboarding."
        ]
      }
    ]
  },
  "roc-filings": {
    "id": "roc-filings",
    "title": "ROC Annual Filings",
    "sections": [
      {
        "heading": "Annual ROC package for Pvt Ltd",
        "paragraphs": [
          "AOC-4: financial statements attachment within 30 days of AGM.",
          "MGT-7: annual return with shareholding pattern.",
          "ADT-1: auditor appointment tracking.",
          "DIR-3 KYC: each director annually (DIN active).",
          "Missing these → ₹100–₹500 per day penalties and director disqualification risk."
        ]
      },
      {
        "heading": "AGM timeline",
        "paragraphs": [
          "First AGM within 18 months of incorporation, then every year within 6 months of financial year end.",
          "Most startups use 31 March FY — AGM by 30 September, filings soon after.",
          "Board approves accounts before AGM; auditor signs financials."
        ]
      },
      {
        "heading": "What founders should track",
        "paragraphs": [
          "• Share allotments during year → PAS-3 filed?",
          "• Director changes → DIR-12.",
          "• Charge creation on assets → CHG-1.",
          "• Registered office change → INC-22.",
          "Cap table in MGT-7 must match SHA and PAS records — critical for fundraising."
        ]
      },
      {
        "heading": "LLP note",
        "paragraphs": [
          "LLPs file Form 8 (statement of accounts) and Form 11 (annual return) — different forms, same discipline."
        ]
      },
      {
        "heading": "Pro tip",
        "paragraphs": [
          "Calendar ROC + GST + ITR in one compliance tracker; Pelago sends deadline reminders tied to your structure."
        ]
      }
    ]
  },
  "funding-landscape": {
    "id": "funding-landscape",
    "title": "The Funding Landscape",
    "sections": [
      {
        "heading": "Stages and who writes cheques",
        "paragraphs": [
          "Pre-seed: angels, friends & family, micro-VCs — idea + team, ₹25L–₹2Cr typical.",
          "Seed: angels + seed funds — early traction, ₹2–8Cr.",
          "Series A: institutional VCs — repeatable revenue, ₹10Cr+.",
          "India has active hubs: Bengaluru, Mumbai, Delhi-NCR, plus growing Chennai, Hyderabad, Kochi networks."
        ]
      },
      {
        "heading": "Instruments you'll hear",
        "paragraphs": [
          "Equity: priced round with valuation and share allotment.",
          "SAFE / convertible note: converts later with cap and discount (less common in India than US, growing).",
          "CCPS: Compulsorily Convertible Preference Shares — popular for VC flexibility.",
          "Understand what you sign — instrument matters as much as valuation."
        ]
      },
      {
        "heading": "What Indian investors evaluate",
        "paragraphs": [
          "Team and founder-market fit.",
          "TAM in India context — not US deck copy-paste.",
          "Unit economics and retention, not only GMV.",
          "Regulatory path (fintech, health, edtech have extra scrutiny).",
          "Cap table cleanliness and DPIIT/tax posture."
        ]
      },
      {
        "heading": "Preparation before outreach",
        "paragraphs": [
          "• Data room: COI, MOA/AOA, GST certs, 12-month bank statements, contracts, cap table.",
          "• Clarify IP assignment from founders.",
          "• Know your 18-month use of funds in INR.",
          "• Identify 30 target investors by thesis, not spray 300 emails."
        ]
      },
      {
        "heading": "Alternatives to equity",
        "paragraphs": [
          "Revenue-based financing, venture debt post-revenue, government grants (Startup India, state schemes), and bank CGTMSE-backed loans for MSMEs — dilution is not the only fuel."
        ]
      }
    ]
  },
  "investment-instruments": {
    "id": "investment-instruments",
    "title": "Investment Instruments",
    "sections": [
      {
        "heading": "Equity shares (ordinary)",
        "paragraphs": [
          "Founders and investors hold equity with voting and dividend rights per SHA.",
          "Priced round sets pre-money valuation → price per share.",
          "Dilution = new shares ÷ (old shares + new shares)."
        ]
      },
      {
        "heading": "CCPS and CCDs",
        "paragraphs": [
          "CCPS: preference shares convertible to equity; liquidation preference possible.",
          "CCD: debentures convertible to equity; treated as debt until conversion.",
          "Investors use these for downside protection and regulatory flexibility."
        ]
      },
      {
        "heading": "Convertible notes / SAFEs",
        "paragraphs": [
          "Invest today, convert at next priced round with valuation cap and/or discount.",
          "Watch Companies Act and FEMA if foreign investors involved.",
          "Document interest rate, maturity, and what happens if no future round."
        ]
      },
      {
        "heading": "ESOP pool interaction",
        "paragraphs": [
          "Investors often ask for 10–15% option pool created pre-money or post-money — massive dilution difference.",
          "Negotiate pool size against hiring plan, not template."
        ]
      },
      {
        "heading": "Founder homework",
        "paragraphs": [
          "Model three scenarios on a cap table: seed, pool expansion, Series A.",
          "Ask lawyer to explain liquidation preference in exit at 1× non-participating vs participating."
        ]
      }
    ]
  },
  "term-sheet": {
    "id": "term-sheet",
    "title": "Term Sheet Jargon",
    "sections": [
      {
        "heading": "Economics terms",
        "paragraphs": [
          "Pre-money valuation: company value before new money.",
          "Post-money = pre-money + investment.",
          "Liquidation preference: investors get paid first on exit — 1× is standard; participating is harsher.",
          "Anti-dilution: protects investor if down round — weighted average broad-based is founder-friendlier than full ratchet."
        ]
      },
      {
        "heading": "Control terms",
        "paragraphs": [
          "Board composition: observer vs seat vs veto rights.",
          "Reserved matters: list requiring investor consent (sale, new share issue, debt above threshold).",
          "Drag-along: forces minority to sell if majority/investors agree.",
          "Tag-along: lets minorities join a sale on same terms."
        ]
      },
      {
        "heading": "India-specific add-ons",
        "paragraphs": [
          "FEMA pricing for foreign investors — valuation report from CA.",
          "RBI reporting timelines on share allotment.",
          "Tax indemnity clauses — who pays if historical GST/IT issues surface."
        ]
      },
      {
        "heading": "What to negotiate first",
        "paragraphs": [
          "Valuation band, liquidation preference type, board seat, option pool size, founder vesting restart requests.",
          "Do not give unlimited personal guarantees — separate founder from company."
        ]
      },
      {
        "heading": "Before you sign",
        "paragraphs": [
          "Lawyer review is non-optional; 48-hour turn on term sheet is normal.",
          "Align term sheet to SHA — term sheet alone is not fully binding but sets momentum."
        ]
      }
    ]
  },
  "trademarking": {
    "id": "trademarking",
    "title": "Trademarking Your Brand",
    "sections": [
      {
        "heading": "What to protect first",
        "paragraphs": [
          "Word mark for brand name; logo as separate device mark if design is distinctive.",
          "Tagline only if central to marketing.",
          "Domain + trademark + company name alignment reduces impersonation."
        ]
      },
      {
        "heading": "Class selection (Nice classification)",
        "paragraphs": [
          "Class 35: business services, advertising, SaaS sales often here.",
          "Class 42: software development, SaaS platform services.",
          "Class 9: downloadable apps sometimes.",
          "File in classes you use now and plan in 3 years — extra classes cost more but prevent copycats."
        ]
      },
      {
        "heading": "Timeline and process",
        "paragraphs": [
          "Search → file TM-A → examination → objection reply (if any) → journal advertisement → registration certificate.",
          "12–24 months typical; ™ symbol allowed while pending.",
          "Use ® only after registration certificate."
        ]
      },
      {
        "heading": "Enforcement in India",
        "paragraphs": [
          "Monitor IP India journal and Google Ads for copycats.",
          "Cease-and-desist → opposition proceedings → civil suit as escalation.",
          "Marketplace takedowns need registration proof."
        ]
      },
      {
        "heading": "Founder checklist",
        "paragraphs": [
          "• File before big marketing launch.",
          "• Assign logo IP from designer to company via contract.",
          "• Check international Madrid protocol if expanding abroad."
        ]
      }
    ]
  },
  "patents-copyrights": {
    "id": "patents-copyrights",
    "title": "Patents & Copyrights",
    "sections": [
      {
        "heading": "Copyright — default for code and content",
        "paragraphs": [
          "Copyright exists on creation for code, blogs, videos, designs.",
          "Registration at Copyright Office strengthens evidence in disputes (optional but useful).",
          "Work-for-hire: employees — generally company owns; contractors need IP assignment clause."
        ]
      },
      {
        "heading": "Patents — when they matter",
        "paragraphs": [
          "Novel, non-obvious technical invention with industrial application.",
          "Long timeline (2–4 years) and cost — rare for pure software unless technical effect in India.",
          "Hardware, medtech, agri-tech, deeptech see stronger patent value."
        ]
      },
      {
        "heading": "Trade secrets",
        "paragraphs": [
          "Algorithms, customer lists, pricing — protect via NDAs and access control, not publication.",
          "Do not pitch detailed secret sauce in public demo days without protection strategy."
        ]
      },
      {
        "heading": "Open source risk",
        "paragraphs": [
          "Using GPL code in proprietary product can force disclosure — legal review dependency trees.",
          "MIT/Apache more permissive; still attribute notices."
        ]
      },
      {
        "heading": "Investor due diligence",
        "paragraphs": [
          "IP assignment agreements from all founders and key contractors before data room opens."
        ]
      }
    ]
  },
  "salary-ctc": {
    "id": "salary-ctc",
    "title": "Structuring Salary (CTC)",
    "sections": [
      {
        "heading": "CTC anatomy in India",
        "paragraphs": [
          "Cost to Company = Gross salary + employer PF + gratuity accrual + insurance + other benefits.",
          "Employees care about in-hand (net pay after PF, PT, TDS).",
          "Founders must model true hiring cost, not headline CTC."
        ]
      },
      {
        "heading": "Typical components",
        "paragraphs": [
          "Basic salary: drives PF and gratuity calculations — usually 40–50% of gross.",
          "HRA: tax exemption if rent paid (metro rules).",
          "Special allowance: flexible bucket.",
          "LTA, medical, food coupons: tax-efficient perks if structured correctly."
        ]
      },
      {
        "heading": "Tax regimes",
        "paragraphs": [
          "New vs old tax regime choice per employee — payroll software should support both.",
          "Standard deduction and 80C/80D proofs in old regime.",
          "Founders on payroll: plan advance tax if salary is low and other income exists."
        ]
      },
      {
        "heading": "Compliance on payroll",
        "paragraphs": [
          "Professional tax by state (e.g. Karnataka, Maharashtra slabs).",
          "TDS under 192 monthly.",
          "Payslips with breakup mandatory for morale and audits."
        ]
      },
      {
        "heading": "Offer letter must match",
        "paragraphs": [
          "CTC breakup in offer letter = fewer disputes at joining.",
          "Clarify probation, notice period, and variable pay conditions."
        ]
      }
    ]
  },
  "esops": {
    "id": "esops",
    "title": "ESOPs: The Golden Handcuff",
    "sections": [
      {
        "heading": "Why ESOPs exist",
        "paragraphs": [
          "Startups cannot always match cash from Flipkart or TCS — equity aligns long-term upside.",
          "ESOP pool carved from founder equity before or during funding — dilution event."
        ]
      },
      {
        "heading": "Plan design basics",
        "paragraphs": [
          "Pool size: 10–15% post-money common for seed stage.",
          "Vesting: 4 years, 1-year cliff standard.",
          "Exercise price: fair market value per valuation norms — 409A-style in India via merchant banker for larger cos.",
          "Good leaver vs bad leaver defines buyback price."
        ]
      },
      {
        "heading": "Legal and tax touchpoints",
        "paragraphs": [
          "ESOP scheme approved by board and shareholders.",
          "Perquisite tax on exercise for employees — budget for it.",
          "Companies Act rules on buyback and sweat equity if used.",
          "FEMA if foreign holding company grants options to India employees."
        ]
      },
      {
        "heading": "Communication to team",
        "paragraphs": [
          "Explain paper value vs cash — avoid promising '₹1Cr ESOP' without exit math.",
          "Refresh grant letters when down rounds change FMV narrative."
        ]
      },
      {
        "heading": "Investor perspective",
        "paragraphs": [
          "Unclear ESOP promises to early hires without board approval block clean cap table."
        ]
      }
    ]
  },
  "consultant-employee": {
    "id": "consultant-employee",
    "title": "Consultant vs Employee",
    "sections": [
      {
        "heading": "Legal difference",
        "paragraphs": [
          "Employee: control over how/when/where work is done, part of organisation, PF/TDS 192.",
          "Consultant: independent service contract, TDS 194J/194C, no PF unless misclassified.",
          "Law looks at substance, not invoice title."
        ]
      },
      {
        "heading": "When consultant makes sense",
        "paragraphs": [
          "Short projects, specialised skills, part-time fractional CXO.",
          "Clear deliverables, own tools, no exclusivity (unless negotiated).",
          "GST-registered consultant invoices with GST if registered."
        ]
      },
      {
        "heading": "When employee is required",
        "paragraphs": [
          "Full-time core team, reports to founder, uses company email and systems daily.",
          "Trying to save 12% PF by calling engineers 'consultants' is a due diligence red flag."
        ]
      },
      {
        "heading": "Contract essentials",
        "paragraphs": [
          "Scope, IP assignment, confidentiality, payment terms, termination, non-solicit (reasonable).",
          "MSA + SOW for consultants; appointment letter + policies for employees."
        ]
      },
      {
        "heading": "Audit readiness",
        "paragraphs": [
          "Labour inspector or investor DD will sample contracts — keep consistent classification."
        ]
      }
    ]
  },
  "b2b-sales": {
    "id": "b2b-sales",
    "title": "B2B Sales in India",
    "sections": [
      {
        "heading": "Indian B2B buying reality",
        "paragraphs": [
          "Decisions involve finance, IT, legal, and sometimes procurement — long cycles (3–9 months).",
          "Relationship and trust often beat slick deck alone.",
          "Pilot → paid conversion needs written success criteria upfront."
        ]
      },
      {
        "heading": "GST-compliant invoicing builds trust",
        "paragraphs": [
          "Enterprise buyers need your GSTIN, correct HSN/SAC, and credit terms on PO.",
          "Mismatch delays payment and hurts renewal."
        ]
      },
      {
        "heading": "Pricing and collections",
        "paragraphs": [
          "Net-30 is a wish; net-45/60 common — model cash flow accordingly.",
          "TDS deducted on your invoice — ensure you account for net receipt.",
          "MSME Samadhaan helps delayed payments to MSME suppliers — know if you qualify."
        ]
      },
      {
        "heading": "Founder-led sales playbook",
        "paragraphs": [
          "• ICP: industry, size, decision maker title.",
          "• Outbound: LinkedIn + warm intros beat cold spray in India.",
          "• Demo customisation to one pain metric.",
          "• Proposal with ROI in INR and implementation timeline.",
          "• Follow-up cadence 48 hours, not 2 weeks."
        ]
      },
      {
        "heading": "Scaling beyond founder",
        "paragraphs": [
          "Hire sales when repeatability shows — same pitch closes 3+ times.",
          "CRM hygiene (HubSpot, Zoho) before hiring second rep."
        ]
      }
    ]
  },
  "whatsapp-marketing": {
    "id": "whatsapp-marketing",
    "title": "WhatsApp Marketing",
    "sections": [
      {
        "heading": "Why WhatsApp in India",
        "paragraphs": [
          "500M+ users; open rates beat email for SMB outreach.",
          "WhatsApp Business API (via BSPs like Interakt, AiSensy, Gupshup) enables broadcast at scale with opt-in."
        ]
      },
      {
        "heading": "Compliance basics",
        "paragraphs": [
          "Opt-in consent required — no purchased lists.",
          "Template messages need Meta approval for promotional content.",
          "DND / TRAI rules for SMS overlap — WhatsApp is separate but brand trust is one."
        ]
      },
      {
        "heading": "What works for founders",
        "paragraphs": [
          "• Onboarding sequences after signup.",
          "• Payment reminders and GST invoice links.",
          "• Webinar and demo follow-ups within 24 hours.",
          "• Regional language templates for Tier-2 expansion."
        ]
      },
      {
        "heading": "What fails",
        "paragraphs": [
          "Broadcasting discounts daily without segmentation.",
          "No opt-out path — users block and report.",
          "Using personal WhatsApp for 500+ leads — account bans."
        ]
      },
      {
        "heading": "Metrics",
        "paragraphs": [
          "Track delivery, read, reply, and conversion to call booked — not vanity reads alone."
        ]
      }
    ]
  },
  "influencer-marketing": {
    "id": "influencer-marketing",
    "title": "Influencer Marketing on a Budget",
    "sections": [
      {
        "heading": "Micro-influencers > celebrities for startups",
        "paragraphs": [
          "10k–100k followers in a niche (finance, D2C, parenting) convert better than generic fame.",
          "Cost per reel ₹5k–₹50k vs crores for celebrities.",
          "Look for engagement rate and comment quality, not follower count alone."
        ]
      },
      {
        "heading": "Disclosure and ASCI",
        "paragraphs": [
          "Paid partnerships must be disclosed (#ad) per ASCI guidelines.",
          "Contracts should cover usage rights, whitelisting for ads, and deliverables (1 reel + 2 stories)."
        ]
      },
      {
        "heading": "Structure deals",
        "paragraphs": [
          "Fixed fee + affiliate code tracking (UTM + coupon).",
          "Pay part on delivery, part on metrics to reduce risk.",
          "Avoid pure equity-for-post unless influencer is true brand ambassador."
        ]
      },
      {
        "heading": "Measure ROI",
        "paragraphs": [
          "CAC from influencer channel = spend ÷ attributed signups.",
          "Compare to Google/Meta — kill underperformers fast.",
          "Store creative assets for paid amplification if whitelisting allowed."
        ]
      },
      {
        "heading": "India-specific angles",
        "paragraphs": [
          "Regional creators for Bharat markets; festival calendars (Diwali, Onam) planned 6 weeks ahead."
        ]
      }
    ]
  },
  "strike-off": {
    "id": "strike-off",
    "title": "Strike Off (FTE)",
    "sections": [
      {
        "heading": "When to close vs sell",
        "paragraphs": [
          "Strike off is for dormant or failed startups with no assets/liabilities — not a substitute for selling the business.",
          "If you have revenue, debt, or disputes, winding up or sale process is different."
        ]
      },
      {
        "heading": "FTE (Fast Track Exit) eligibility snapshot",
        "paragraphs": [
          "No commenced business or ceased operations.",
          "No assets and liabilities at time of application.",
          "No pending litigation (or disclosures as required).",
          "All directors and shareholders agree — indemnity bonds required."
        ]
      },
      {
        "heading": "Steps overview",
        "paragraphs": [
          "• Clear liabilities: GST cancellation, IT returns, bank closure letter.",
          "• File STK-2 with ROC fees.",
          "• Publish notice if required; ROC strikes name off register.",
          "• PAN/TAN eventually deactivated — follow up separately."
        ]
      },
      {
        "heading": "What founders forget",
        "paragraphs": [
          "Outstanding PF/ESI dues block clean exit.",
          "Pending angel investment with CCPS needs shareholder resolution.",
          "Foreign investor? FEMA reporting on exit."
        ]
      },
      {
        "heading": "Emotional and legal closure",
        "paragraphs": [
          "Inform creditors and customers in writing.",
          "Retain records 8+ years for tax queries even after strike-off.",
          "Founders remain liable for pre-strike-off liabilities if concealed."
        ]
      }
    ]
  }
};
