"""Additional blog posts for 1:1 Pelago services coverage. Imported by generate_enriched_blog.py."""


def register_alignment_posts(post, S) -> None:
    # ─── Private Limited Company (service) ───────────────────────────────────
    post(
        "private-limited-company-registration",
        "Private Limited Company Registration in India: Step-by-Step",
        "Registration",
        "9 min",
        "June 02, 2025",
        "Register a Pvt Ltd in 7–10 working days with SPICe+—know exact documents, costs, and post-COI steps before investors ask.",
        "Incorporate Pvt Ltd the right way",
        [
            "SPICe+ files DIN, PAN, TAN, and COI in one flow when documents are clean.",
            "Budget ₹12,000–₹35,000 all-in for DSC, stamp duty, and professional fees.",
            "INC-20A and current account must follow within 180 days of incorporation.",
            "Pelago handles name approval through COI and hands you a compliance calendar.",
        ],
        {
            "title": "Ready to incorporate?",
            "subtitle": "Fixed-quote Pvt Ltd package—7–10 day timeline with WhatsApp updates.",
            "href": "/contact",
            "buttonLabel": "Get Pvt Ltd quote",
        },
        [
            S(
                "Before you file SPICe+",
                "You need 2 directors (one can be nominee later in OPC, but standard Pvt Ltd needs two), unique name options, registered office proof, and MOA objects that match what you actually sell.",
                "Authorised capital choice affects stamp duty—don't inflate to ₹10L for vanity.",
                callout="Founder tip: Align company name with domain, trademark search, and GST trade name early.",
            ),
            S(
                "SPICe+ filing sequence",
                "• Class 3 DSC for each subscriber/director.",
                "• Reserve name (Part A) or file combined in Part B.",
                "• Attach MOA/AOA, NOC, utility bill, and subscriber sheet.",
                "• Receive COI, PAN, TAN—open current account with board resolution.",
                "• File INC-20A when applicable; register for GST if liable or voluntary.",
            ),
            S(
                "Cost breakdown (indicative)",
                "Item | Typical ₹ range",
                "DSC (2) | 2,000 – 3,000",
                "Govt fees + stamp | 2,000 – 12,000",
                "Professional fees | 5,000 – 15,000",
                "Virtual office (annual) | 3,000 – 15,000",
            ),
            S(
                "After COI: first 30 days",
                "Appoint statutory auditor (ADT-1), deposit subscription money, file commencement proofs, and set up accounting + GST if needed.",
                "Pelago bundles incorporation with post-incorporation checklist execution so nothing slips before your first invoice.",
            ),
        ],
    )

    # ─── LLP Registration (service) ──────────────────────────────────────────
    post(
        "llp-registration-india",
        "LLP Registration in India: Process, Cost & Compliance",
        "Registration",
        "7 min",
        "June 01, 2025",
        "Register an LLP via FiLLiP in about a week—lighter compliance than Pvt Ltd when you are not raising equity.",
        "LLP setup without equity drama",
        [
            "FiLLiP integrates DIN, PAN, TAN, and LLP agreement filing.",
            "Ideal for agencies and bootstrapped partnerships—not for VC-backed product startups.",
            "Audit only if turnover > ₹40L or capital > ₹25L.",
            "Pelago drafts LLP agreement and files through COI.",
        ],
        {
            "title": "Registering an LLP?",
            "subtitle": "Partner-friendly agreement + MCA filing in one package.",
            "href": "/contact",
            "buttonLabel": "Start LLP registration",
        },
        [
            S(
                "When LLP beats Pvt Ltd",
                "Two or more partners, profit-share flexibility, no share certificates, and lower recurring MCA burden.",
                "You cannot issue ESOPs or CCPS—if that's on the roadmap, choose Pvt Ltd instead.",
            ),
            S(
                "Documents checklist",
                "• PAN/Aadhaar of partners and designated partners.",
                "• Registered office rent agreement + owner NOC.",
                "• LLP agreement (capital contribution, profit ratio, decision rights).",
                "• Main business activity description for incorporation form.",
            ),
            S(
                "Annual compliance rhythm",
                "• Form 11 (annual return) and Form 8 (statement of accounts).",
                "• Income tax return for LLP.",
                "• GST if registered.",
                callout="Founder tip: Document partner exits in the agreement—verbal splits are painful without buyback clauses.",
            ),
            S(
                "Pelago LLP package",
                "We file FiLLiP, register LLP agreement, and hand you a compliance calendar with GST and tax filing options if you need them.",
            ),
        ],
    )

    # ─── GST Registration ──────────────────────────────────────────────────────
    post(
        "gst-registration-india",
        "GST Registration in India: When, How & What Happens Next",
        "Tax & Compliance",
        "8 min",
        "May 28, 2025",
        "Get your GSTIN in 3–5 days when you're liable—or voluntarily—to claim ITC and invoice enterprises with confidence.",
        "GSTIN without portal confusion",
        [
            "Mandatory above ₹20L turnover (₹10L in special category states) or inter-state supply.",
            "Voluntary registration unlocks input tax credit on B2B purchases.",
            "GSTIN must match legal name on invoices and bank KYC.",
            "Pelago files REG-01 and tracks ARN to certificate.",
        ],
        {
            "title": "Need GST registration?",
            "subtitle": "We file, respond to queries, and set up your first GSTR-1/3B calendar.",
            "href": "/contact",
            "buttonLabel": "Register for GST",
        },
        [
            S(
                "Do you need GST now?",
                "E-commerce sellers, inter-state B2B, and brands crossing turnover thresholds must register.",
                "B2C local-only under threshold may wait—but enterprise clients often demand your GSTIN on the PO.",
            ),
            S(
                "Registration process",
                "• Apply on gst.gov.in with PAN, Aadhaar authentication, bank proof, address proof.",
                "• Track Application Reference Number (ARN).",
                "• Respond to department queries within timelines.",
                "• Receive GSTIN certificate—update invoices, contracts, and marketplaces.",
            ),
            S(
                "Immediately after GSTIN",
                "• Issue GST-compliant invoices (HSN/SAC, place of supply).",
                "• File GSTR-1 and GSTR-3B per your frequency (monthly/quarterly).",
                "• Reconcile GSTR-2B with purchase books monthly.",
                callout="Founder tip: Separate GST collected in accounting—it's not revenue.",
            ),
            S(
                "Common rejection reasons",
                "Address mismatch, inactive DIN, or trade name unlike legal name. Pelago pre-validates documents before submission to avoid 2-week delays.",
            ),
        ],
    )

    # ─── Income Tax Filing (ITR) ───────────────────────────────────────────────
    post(
        "itr-filing-startups",
        "Income Tax Return (ITR) Filing for Startups & Directors",
        "Tax & Compliance",
        "9 min",
        "May 25, 2025",
        "File the correct ITR form on time—company, LLP, and founder personal returns—with deductions you are actually entitled to.",
        "File ITR without last-minute panic",
        [
            "Pvt Ltd typically files ITR-6; LLP uses ITR-5; founders file ITR-2/3 based on income.",
            "Due date is usually 31 July (extensions announced in stressful years).",
            "Late filing costs ₹5,000+ penalty and blocks loss carry-forward.",
            "Pelago prepares books-linked returns for business and directors.",
        ],
        {
            "title": "ITR season approaching?",
            "subtitle": "Business + director returns with advance tax and 26AS reconciliation.",
            "href": "/contact",
            "buttonLabel": "Book ITR filing",
        },
        [
            S(
                "Which ITR form?",
                "Company (domestic) | ITR-6",
                "LLP / Partnership | ITR-5",
                "Director with salary + capital gains | Often ITR-2 or ITR-3",
                "Startups with 80-IAC benefit | ITR-6 with schedule claiming holiday—documentation must be airtight.",
            ),
            S(
                "Documents to compile",
                "• Audited financials (Pvt Ltd) or books (smaller entities).",
                "• Form 26AS and AIS for TDS credits.",
                "• GST annual reconciliation if registered.",
                "• Details of foreign investments, ESOP perquisites, and director loans.",
            ),
            S(
                "Advance tax for profitable cos",
                "If tax liability exceeds ₹10,000 after TDS, pay advance tax in instalments (15 Jun, 15 Sep, 15 Dec, 15 Mar).",
                "Missed advance tax attracts interest under Sections 234B and 234C.",
                callout="Founder tip: Pay yourself a reasonable salary so personal and company taxes are planned—not accidental.",
            ),
            S(
                "Pelago ITR workflow",
                "We close books, reconcile TDS/GST, pick the correct form, and file with e-verification—plus a summary founders can share with investors.",
            ),
        ],
    )

    # ─── TDS Returns ───────────────────────────────────────────────────────────
    post(
        "tds-returns-compliance",
        "TDS Returns for Startups: Deduction, Deposit & Quarterly Filing",
        "Tax & Compliance",
        "8 min",
        "May 22, 2025",
        "Deduct, deposit, and file 24Q/26Q on schedule—so contractors trust you and your ITR matches Form 26AS.",
        "TDS compliance in one system",
        [
            "Section 192 for salary; 194J for consultants; 194C for contractors.",
            "Deposit by 7th of next month; file quarterly returns.",
            "Issue Form 16/16A or vendors cannot claim credit.",
            "Pelago runs payroll + vendor TDS end-to-end.",
        ],
        {
            "title": "Paying consultants or payroll?",
            "subtitle": "TDS calculation, challans, and quarterly returns handled for you.",
            "href": "/contact",
            "buttonLabel": "Setup TDS compliance",
        },
        [
            S(
                "Sections startups use weekly",
                "• 192 — salary TDS via payroll.",
                "• 194J — professional fees (10% typical).",
                "• 194C — contractors (1%/2% based on payee).",
                "• 194I — rent on office (10% building, 2% equipment).",
                "Without PAN, higher rates apply (206AA).",
            ),
            S(
                "Monthly rhythm",
                "• Deduct TDS when invoice is paid or due (earlier).",
                "• Pay challan by 7th (April challan for March).",
                "• Track cumulative thresholds per section annually.",
            ),
            S(
                "Quarterly returns",
                "Form 24Q for salary; Form 26Q for non-salary deductees.",
                "Issue Form 16 to employees by 15 June; Form 16A to vendors quarterly.",
                callout="Founder tip: Never label employees as consultants to skip PF—TDS and labour law still expose you.",
            ),
            S(
                "Pelago TDS retainer",
                "Payroll structuring, challan payments, return filing, and mismatch resolution before your tax audit.",
            ),
        ],
    )

    # ─── Accounting & Bookkeeping ────────────────────────────────────────────
    post(
        "accounting-bookkeeping-startups",
        "Accounting & Bookkeeping for Indian Startups: What Good Looks Like",
        "Tax & Compliance",
        "8 min",
        "May 20, 2025",
        "Clean monthly books mean faster ITR, credible investor diligence, and GST ITC you can actually defend.",
        "Books investors trust",
        [
            "Separate company and founder transactions from day one.",
            "Monthly P&L, balance sheet, and cash flow—not just an annual scramble.",
            "Chart of accounts aligned to GST and TDS from the start.",
            "Pelago delivers monthly MIS founders can read.",
        ],
        {
            "title": "Books messy after year one?",
            "subtitle": "Catch-up bookkeeping + monthly accounting with GST/TDS sync.",
            "href": "/contact",
            "buttonLabel": "Start bookkeeping",
        },
        [
            S(
                "Minimum viable finance stack",
                "Current account only for business, accounting software (Zoho/Tally), invoice numbering, and expense policy for founders.",
                "Reimbursement sheets beat personal card chaos at audit time.",
            ),
            S(
                "Monthly deliverables",
                "• Bank reconciliation.",
                "• Accounts payable/receivable aging.",
                "• GST-ready revenue and expense classification.",
                "• Burn rate and runway dashboard.",
            ),
            S(
                "When investors ask for data",
                "Due diligence wants 24-month trends, related-party disclosures, and cap table tie to share capital in books.",
                "Pelago keeps books audit-ready so statutory audit is a checkpoint—not a rebuild.",
                callout="Founder tip: Tag every Razorpay/PG settlement to invoices—unexplained 'other income' scares CAs.",
            ),
            S(
                "Catch-up vs ongoing",
                "Missed a year? We reconstruct from bank/GST and normalize before ROC/ITR deadlines. Then move to monthly retainer.",
            ),
        ],
    )

    # ─── Copyright Registration ──────────────────────────────────────────────
    post(
        "copyright-registration-india",
        "Copyright Registration in India: Protect Code, Design & Content",
        "Legal & IP",
        "7 min",
        "May 18, 2025",
        "Register copyright on apps, courses, and creative work—stronger proof in disputes and investor IP due diligence.",
        "Own what your team builds",
        [
            "Copyright exists at creation; registration strengthens evidence.",
            "Software, UI, blogs, videos, and training material can be registered.",
            "Contractors need IP assignment—even with registration.",
            "Pelago files applications and tracks diary numbers.",
        ],
        {
            "title": "Shipping product or content?",
            "subtitle": "Copyright + contractor IP assignment reviewed before launch.",
            "href": "/contact",
            "buttonLabel": "Protect creative IP",
        },
        [
            S(
                "What to register",
                "• Source code and documentation (literary work).",
                "• UI/UX assets (artistic work).",
                "• Marketing videos and course material.",
                "• Logo may be trademark; copyright covers expression not brand name.",
            ),
            S(
                "Process overview",
                "• Application on copyright.gov.in with work sample and author details.",
                "• Diary number issued; objections rare if paperwork clean.",
                "• Certificate strengthens injunctive relief in copycat disputes.",
            ),
            S(
                "Employment vs contractor",
                "Employees: IP generally vests with employer under contract and law.",
                "Freelancers: require explicit assignment of present and future work.",
                callout="Founder tip: Register after major release—version date on deposit should match shipping date.",
            ),
            S(
                "Pelago IP bundle",
                "Pair copyright with trademark search and assignment template review so acquirers see clean IP schedules.",
            ),
        ],
    )

    # ─── Statutory Audit Support ───────────────────────────────────────────────
    post(
        "statutory-audit-india",
        "Statutory Audit for Private Limited Companies: Timeline & Prep",
        "Tax & Compliance",
        "7 min",
        "May 15, 2025",
        "Coordinate your first audit without panic—documents, auditor appointment, and AOC-4 filing in one rhythm.",
        "Survive audit season",
        [
            "Pvt Ltd audit is mandatory regardless of revenue.",
            "ADT-1 appoints auditor within 30 days of incorporation.",
            "Audit signs financials before AGM and AOC-4 filing.",
            "Pelago coordinates auditors and closes book queries.",
        ],
        {
            "title": "First audit coming up?",
            "subtitle": "Book closure, auditor coordination, and ROC filing support.",
            "href": "/contact",
            "buttonLabel": "Get audit support",
        },
        [
            S(
                "Auditor appointment rules",
                "First auditor at board within 30 days of incorporation; subsequent at AGM.",
                "File ADT-1 within 15 days of appointment.",
                "Rotate auditor every 5/10 years per company size rules.",
            ),
            S(
                "What auditors request",
                "• Bank statements and reconciliations.",
                "• GST returns and annual reconciliation.",
                "• TDS challans and Form 26AS.",
                "• Related-party contracts and founder loan statements.",
                "• Fixed asset registers and vendor contracts.",
            ),
            S(
                "Timeline to AGM",
                "Close books → draft financials → audit fieldwork → signed report → board approval → AGM → AOC-4 within 30 days.",
                callout="Founder tip: Respond to PBC lists within 48 hours—audit delays push ROC penalties.",
            ),
            S(
                "Pelago's role",
                "We prepare schedules, liaise with auditors, and file AOC-4/MGT-7 so founders aren't learning MCA forms under deadline pressure.",
            ),
        ],
    )

    # ─── Director KYC ──────────────────────────────────────────────────────────
    post(
        "director-kyc-dir3-guide",
        "Director KYC (DIR-3): Annual Compliance Every Director Must File",
        "Tax & Compliance",
        "5 min",
        "May 12, 2025",
        "File DIR-3 KYC by 30 September or your DIN gets deactivated—and ROC filings stop cold.",
        "Keep DIN active",
        [
            "Every director with DIN must file DIR-3 KYC annually.",
            "Uses Aadhaar-verified mobile and email on MCA.",
            "Deactivated DIN blocks signing SPICe+, MGT-7, and bank KYC updates.",
            "Pelago sends reminders and files for your board.",
        ],
        {
            "title": "DIN KYC pending?",
            "subtitle": "We reactivate DIN and complete DIR-3 for all directors.",
            "href": "/contact",
            "buttonLabel": "Complete DIR-3 KYC",
        },
        [
            S(
                "Who must file",
                "All directors on active companies—even if not signing day-to-day filings.",
                "New directors complete KYC after DIN allotment; existing ones annually by 30 Sep.",
            ),
            S(
                "How to file",
                "• Login MCA with director credentials.",
                "• Verify OTP on Aadhaar-linked mobile/email.",
                "• Confirm address and DIN details.",
                "• Pay nominal fees if applicable for late cases.",
            ),
            S(
                "If DIN is deactivated",
                "File DIR-3 KYC in compliance mode, pay additional fees, wait for reactivation before any ROC submission.",
                callout="Founder tip: Calendar DIR-3 with AGM prep—not the week investors need a signing.",
            ),
            S(
                "Pelago compliance calendar",
                "Bundled with annual ROC retainer: DIR-3, DPT-3, MGT-7, AOC-4 reminders on WhatsApp.",
            ),
        ],
    )

    # ─── PF & ESI (Labour) ─────────────────────────────────────────────────────
    post(
        "pf-esi-labour-compliance",
        "PF & ESI Registration: Labour Compliance for Growing Teams",
        "Tax & Compliance",
        "8 min",
        "May 10, 2025",
        "Register PF and ESI before scale bites—true employer cost, monthly filings, and inspector-ready records.",
        "Hire without labour surprises",
        [
            "PF often at 20+ employees; many startups register early for benefits.",
            "ESI applies from 10+ employees in covered establishments.",
            "Employer cost is 12%+ on PF wages—not optional if liable.",
            "Pelago sets up EPFO/ESIC and monthly ECR.",
        ],
        {
            "title": "First hires on payroll?",
            "subtitle": "PF/ESI registration, CTC structuring, and monthly compliance.",
            "href": "/contact",
            "buttonLabel": "Setup payroll compliance",
        },
        [
            S(
                "PF basics",
                "Employees and employer each contribute 12% of basic wages (within wage ceiling).",
                "UAN must be generated for every employee.",
                "Monthly ECR filed by 15th with payment.",
            ),
            S(
                "ESI basics",
                "Applies when headcount and establishment type meet thresholds; wage ceiling notifications change—verify yearly.",
                "Employer ~3.25%, employee ~0.75% on applicable wages.",
            ),
            S(
                "Registers and inspections",
                "Maintain attendance, wages, and leave registers under Shops Act.",
                "Contractors on site may trigger labour-code scrutiny—classify correctly.",
                callout="Founder tip: Show true PF-inclusive CTC in offer letters—surprise deductions kill offer acceptance.",
            ),
            S(
                "Pelago payroll stack",
                "CTC design, PF/ESI registration, monthly challans, Form 16, and coordination with Shop Act registration.",
            ),
        ],
    )

    # ─── HR Policy Setup ───────────────────────────────────────────────────────
    post(
        "hr-policy-setup-startups",
        "HR Policies for Startups: Handbook, Leave & Contracts That Scale",
        "Startup",
        "7 min",
        "May 08, 2025",
        "Put leave, probation, and IP policies on paper before your fifth hire—avoid disputes and due diligence gaps.",
        "HR basics without an HR team",
        [
            "Appointment letters must match actual CTC and PF structure.",
            "Handbook covers leave, POSH, remote work, and device security.",
            "Founder-friendly ≠ legally vague—Indian labour law still applies.",
            "Pelago drafts policies sized to your headcount.",
        ],
        {
            "title": "Hiring your first team?",
            "subtitle": "Offer letters, handbook, and POSH framework in 7–10 days.",
            "href": "/contact",
            "buttonLabel": "Setup HR policies",
        },
        [
            S(
                "Core documents",
                "• Appointment letter + CTC annexure.",
                "• Confidentiality and IP assignment.",
                "• Leave and attendance policy (state-aware).",
                "• Code of conduct and disciplinary process.",
            ),
            S(
                "POSH compliance",
                "10+ employees trigger POSH internal committee requirements in many contexts—document committee and training.",
                "Remote teams still need harassment redressal pathways.",
            ),
            S(
                "Contractor vs employee policy",
                "Define when you use consultants vs payroll—misclassification is a top due diligence finding.",
                callout="Founder tip: Version-control HR policies—send change logs when you update leave rules.",
            ),
            S(
                "Pelago HR kit",
                "Templates customized to Kerala/other states, plus payroll compliance hookup when you flip from contractors to FTEs.",
            ),
        ],
    )

    # ─── Payroll Structuring ───────────────────────────────────────────────────
    post(
        "payroll-ctc-structuring",
        "Payroll & CTC Structuring: True Cost of Hiring in India",
        "Startup",
        "8 min",
        "May 05, 2025",
        "Structure salary so in-hand pay, PF, TDS, and employer cost are transparent—before you extend an offer.",
        "Offers candidates understand",
        [
            "CTC ≠ in-hand—basic, HRA, allowances, PF, and TDS change take-home.",
            "Basic drives PF and gratuity—balance tax efficiency and compliance.",
            "Professional tax varies by state.",
            "Pelago models CTC and runs monthly payroll.",
        ],
        {
            "title": "Making an offer this week?",
            "subtitle": "CTC breakup, compliance, and payslips—5–7 day setup.",
            "href": "/contact",
            "buttonLabel": "Structure payroll",
        },
        [
            S(
                "CTC components",
                "Basic salary | 40–50% of gross typical",
                "HRA | Tax benefit if rent paid",
                "Special allowance | Flexible bucket",
                "Employer PF | ~12% of basic",
                "Gratuity accrual | Long-term liability",
            ),
            S(
                "Tax regime choice",
                "New vs old regime per employee—payroll must support both with proof collection in old regime.",
                "Founders on payroll: plan advance tax on other income too.",
            ),
            S(
                "Monthly payroll outputs",
                "• Payslips with breakup.",
                "• TDS under 192 deposited.",
                "• PF ECR filed.",
                "• Reimbursement tracking.",
                callout="Founder tip: Use our Employee Cost calculator on /tools before promising '₹1L in-hand'.",
            ),
            S(
                "Pelago payroll",
                "Offer letter CTC design, compliance registration, monthly processing, and Form 16 at year-end.",
            ),
        ],
    )

    # ─── Business Strategy ─────────────────────────────────────────────────────
    post(
        "business-strategy-scaling",
        "Business Strategy for SMEs: From Survival to Scalable Systems",
        "Startup",
        "9 min",
        "May 03, 2025",
        "Turn ad-hoc growth into a 12-month operating plan—unit economics, hiring waves, and compliance that won't break at scale.",
        "Strategy tied to numbers",
        [
            "Strategy without unit economics is a slide deck, not a plan.",
            "Map revenue, hiring, and compliance costs in one quarterly view.",
            "Pelago pairs finance clarity with operational roadmaps.",
            "Best for ₹1Cr–₹25Cr revenue teams outgrowing founder-only decisions.",
        ],
        {
            "title": "Revenue up but chaos too?",
            "subtitle": "Custom growth diagnostic—finance, ops, and compliance alignment.",
            "href": "/contact",
            "buttonLabel": "Book strategy session",
        },
        [
            S(
                "When you need this",
                "• Hitting consistent ₹10L+ monthly revenue but margins unclear.",
                "• Hiring managers before HR/compliance exists.",
                "• Preparing for debt or equity with messy internals.",
                "• Expanding to new states without tax/registrations mapped.",
            ),
            S(
                "What a useful plan contains",
                "• 12-month revenue and expense forecast.",
                "• Hiring plan tied to PF/GST triggers.",
                "• Working capital and collection cadence (B2B India realities).",
                "• Compliance calendar synced to growth milestones.",
            ),
            S(
                "What we don't do",
                "Generic motivational consulting. Pelago focuses on executable plans—registration, tax, payroll, and MIS you can hand to a board.",
                callout="Founder tip: Run strategy quarterly; Indian regulation and GST rules change mid-year.",
            ),
            S(
                "Engagement shape",
                "Diagnostic workshop → 90-day priority map → optional retainer for finance/compliance execution.",
            ),
        ],
    )

    # ─── Project Reports for Loans ─────────────────────────────────────────────
    post(
        "project-report-bank-loan",
        "Project Reports for Bank Loans: CMA Data & MSME Documentation",
        "Startup",
        "8 min",
        "May 01, 2025",
        "Package bank-ready project reports with realistic projections—so PSU and private banks take your file seriously.",
        "Loan files that pass scrutiny",
        [
            "Banks want CMA/project report, not just a pitch deck.",
            "Udyam registration and 2–3 years projections must reconcile.",
            "Collateral-free schemes need stronger cash-flow narrative.",
            "Pelago builds reports in 7–10 working days.",
        ],
        {
            "title": "Applying for a business loan?",
            "subtitle": "Project report + financial schedules aligned to your GST/ITR data.",
            "href": "/contact",
            "buttonLabel": "Get project report",
        },
        [
            S(
                "What banks evaluate",
                "• Promoter background and credit history.",
                "• Historical financials (or proxy for new cos).",
                "• DSCR—debt service coverage ratio.",
                "• Industry risk and working capital cycle.",
            ),
            S(
                "Documents in a strong file",
                "• Project report with capex/working capital breakup.",
                "• CMA data where required.",
                "• GST returns and bank statements.",
                "• Udyam certificate for MSME schemes.",
                "• Collateral or guarantee details if applicable.",
            ),
            S(
                "MSME and CGTMSE angle",
                "Collateral-free guarantee schemes still need credible projections—not hockey sticks.",
                "Delayed payments from large buyers? Show MSME Samadhaan awareness in narrative.",
                callout="Founder tip: Match loan ask to use-of-funds line items—vague 'working capital' raises red flags.",
            ),
            S(
                "Pelago deliverable",
                "Bank-specific format, promoter interview for assumptions, and revision round after branch manager feedback.",
            ),
        ],
    )
