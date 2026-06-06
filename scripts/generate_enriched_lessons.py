#!/usr/bin/env python3
"""Generate enriched lesson-content.ts and update learn.ts summaries."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Each lesson: title + sections (heading, paragraphs list)
LESSONS = {}

def L(lesson_id, title, sections):
    LESSONS[lesson_id] = {"id": lesson_id, "title": title, "sections": sections}

def S(heading, *paragraphs):
    return {"heading": heading, "paragraphs": list(paragraphs)}


# ─── Module 1: Incorporation & Setup ───────────────────────────────────────────

L("choosing-structure", "Choosing the Right Structure", [
    S("Why structure matters on day one",
      "Your legal structure decides how much personal risk you carry, how investors can buy in, how much compliance you owe each year, and even how customers perceive you.",
      "Founders in India often pick Pvt Ltd because it sounds 'serious,' or LLP because a CA said it's cheaper — without mapping the choice to fundraising, co-founders, and tax.",
      "Switching later (proprietorship → company, LLP → Pvt Ltd) is possible but costs time, stamp duty, and professional fees. Starting with the right structure avoids a painful migration at Series A."),
    S("Structures Indian founders actually use",
      "Sole proprietorship: One person, unlimited personal liability, minimal compliance. Fine for freelancers billing under ₹20–30L with no employees.",
      "Partnership firm: Two or more partners, joint liability unless limited. Rare for tech startups; still seen in family trading businesses.",
      "LLP (Limited Liability Partnership): Separate legal entity, partners have limited liability, cannot issue equity shares to VCs. Strong fit for agencies, consultancies, and bootstrapped service firms.",
      "Private Limited Company: Separate legal entity, shares, board, ROC filings. Default for startups that want ESOPs, angel/VC money, or enterprise sales.",
      "OPC (One Person Company): Single founder with limited liability; share capital and turnover caps apply. Useful for solo operators who outgrow proprietorship."),
    S("Quick comparison for startups",
      "Factor | Sole prop / Partnership | LLP | Pvt Ltd",
      "Personal liability | High / Joint | Limited | Limited",
      "Raise equity from investors | No | No | Yes",
      "ESOPs for team | No | Difficult | Yes",
      "Typical annual compliance cost | Low | Medium | Medium–High",
      "Audit requirement | Income tax based | If turnover > ₹40L or capital > ₹25L | Mandatory",
      "Best default for VC-backed ambition | No | Rarely | Yes"),
    S("Decision guide by founder situation",
      "• Bootstrapped agency with 2–4 partners, no equity investors → LLP is often enough.",
      "• SaaS / product startup planning angel round in 12–18 months → Pvt Ltd early.",
      "• Solo consultant testing idea → proprietorship or OPC, convert when revenue stabilises.",
      "• E-commerce brand with inventory and suppliers → Pvt Ltd for contracts and GST credibility.",
      "• Non-profit social impact → Section 8 company (covered in a later module)."),
    S("Common mistakes",
      "• Incorporating Pvt Ltd with ₹10L authorised capital 'for show' — higher stamp duty in many states.",
      "• Ignoring registered office rules (cannot be a random virtual address without documentation).",
      "• Assuming LLP is 'zero compliance' — you still file Form 8, Form 11, and IT returns.",
      "• Splitting equity 50-50 without vesting because structure paperwork is easier than founder conversations."),
    S("Pro tips",
      "Match structure to your cap table story in 3 years, not just today's invoice volume.",
      "Book a 30-minute structure review with an advisor before paying incorporation fees — Pelago maps structure to your revenue model and state."),
])

L("incorporation-process", "The Incorporation Process & Costs", [
    S("SPICe+ in plain English",
      "Most new Private Limited companies in India are incorporated through MCA's SPICe+ form on the Ministry of Corporate Affairs portal.",
      "One integrated filing can grant DIN (Director ID), PAN, TAN, EPFO/ESIC registration (where applicable), GSTIN (optional in same flow), and Certificate of Incorporation (COI).",
      "Timeline is typically 7–15 working days after documents are clean — delays usually come from name rejection or DSC issues, not 'government is slow' alone."),
    S("Step-by-step checklist",
      "• Obtain Class 3 DSC for each proposed director (₹1,000–₹1,500 per DSC, 1–2 days).",
      "• Apply for name reservation via RUN or Part A of SPICe+ (have 2–3 unique names ready).",
      "• Draft MOA/AOA aligned to objects clause — investors read this in due diligence.",
      "• File SPICe+ Part B with capital, registered office, subscriber details.",
      "• Receive COI, PAN, TAN; open current account with COI + MOA/AOA + board resolution.",
      "• File INC-20A (commencement of business) when applicable; activate GST if liable."),
    S("Estimated costs (indicative)",
      "Item | Typical range (₹)",
      "DSC (2 directors) | 2,000 – 3,000",
      "Government fees + stamp duty | 2,000 – 12,000 (state-dependent)",
      "Professional fees (CA/CS) | 5,000 – 15,000",
      "Registered office / virtual office (annual) | 3,000 – 15,000",
      "Total first-year setup | 12,000 – 35,000"),
    S("Documents founders should prepare early",
      "• PAN and Aadhaar of all directors and subscribers.",
      "• Address proof (utility bill / bank statement) — not older than 2 months.",
      "• Passport-size photo and specimen signature.",
      "• Registered office proof: rent agreement + NOC from owner, or owned property papers.",
      "• Main objects clause in plain language (what you actually sell)."),
    S("After COI: don't stop here",
      "Incorporation is step one. Within 30–60 days most startups need: bank account, GST (if applicable), professional tax, shop establishment (state), and founder agreement.",
      "Missing INC-20A or first-year ROC filings can block future funding or cause director disqualification — treat post-incorporation as a checklist, not a celebration pause."),
])

L("dipp-recognition", "DIPP Recognition & Startup India", [
    S("What DPIIT recognition is",
      "Department for Promotion of Industry and Internal Trade (DPIIT) recognition labels your entity a 'startup' under Startup India policy.",
      "It is not the same as incorporating a company — you must already be a Pvt Ltd, LLP, or partnership registered in India, usually less than 10 years old with turnover under prescribed limits.",
      "Recognition unlocks access to self-certification under labour/environment laws (where applicable), Fund of Funds visibility, and tax benefits if you separately qualify."),
    S("Eligibility snapshot",
      "• Entity incorporated in India, < 10 years from incorporation.",
      "• Turnover below ₹100 crore in any previous financial year (check latest notification).",
      "• Working towards innovation / improvement of products or processes.",
      "• Not formed by splitting or restructuring an existing business.",
      "Apply via startupindia.gov.in with incorporation certificate, pitch deck optional, and brief about innovation."),
    S("Tax benefits founders ask about",
      "Section 80-IAC: 100% deduction on profits for 3 consecutive years out of 10 — requires inter-ministerial board approval; not automatic with DPIIT certificate.",
      "Section 56(2)(viib) angel tax relief: DPIIT + compliance conditions can exempt premium on share issue from angel tax — critical for early priced rounds.",
      "These require separate applications and clean cap table documentation — plan 2–3 months before you need them, not the week before term sheet signing."),
    S("Non-tax perks that still help",
      "• Faster patent fee rebates and IP support schemes.",
      "• Access to Startup India hub resources and state-level policies.",
      "• Easier narrative for government tenders and corporate innovation programs.",
      "• Self-certification under select labour laws for recognised startups (verify current list)."),
    S("Practical application tips",
      "• Apply soon after incorporation while objects clause and website match your 'innovation' story.",
      "• Keep pitch and website consistent — mismatches cause rejection.",
      "• Update DPIIT profile when you pivot business model.",
      "• Coordinate with your CA before first angel round for 56(2)(viib) eligibility paperwork."),
])

L("cofounders", "Co-Founders & Partner Addition", [
    S("Beyond the handshake split",
      "Equity split is a proxy for risk, role, capital, and IP contributed. 50-50 is fine when vesting, decision rights, and exit scenarios are documented.",
      "Without a founders' agreement (even 5 pages), you rely on Companies Act defaults — which do not cover vesting, non-compete, or what happens if a founder stops showing up."),
    S("What a founders' agreement should cover",
      "• Roles, decision areas (product vs sales vs finance), and tie-break mechanism.",
      "• Vesting schedule (standard: 4 years, 1-year cliff).",
      "• IP assignment to the company for all past and future work.",
      "• Full-time commitment expectations and side-project rules.",
      "• Good leaver / bad leaver buyback formula.",
      "• Confidentiality and non-solicit (enforceability varies — draft with a lawyer)."),
    S("Adding a co-founder after incorporation",
      "Pvt Ltd: allot new shares via board + shareholder resolution, file PAS-3, update cap table, revise SHA if investors exist.",
      "LLP: amend LLP agreement, file Form 4 for partner admission, update profit-sharing ratios.",
      "Price per share matters — allotting at ₹10 face value vs fair market value has tax implications under Section 56."),
    S("Adding a director without equity",
      "Not every early hire should be a director. Directors have fiduciary duties and DIN KYC obligations.",
      "Use director appointment for people who need signing authority; use employee or advisor agreements for others.",
      "File DIR-12 within 30 days of appointment; remove via DIR-12 when they leave."),
    S("Red flags investors see",
      "• Founder not on cap table but controlling bank account.",
      "• Multiple related-party entities with unclear IP ownership.",
      "• No vesting on founders who joined at different times.",
      "• Verbal promise of 10% equity to early employee never papered."),
])

L("shop-establishment", "Shop & Establishment Act", [
    S("What it is (state law)",
      "Shop and Establishment (S&E) registration is a state-level licence for any commercial establishment — office, store, warehouse, co-working seat used as registered workplace.",
      "In Maharashtra it's often called Gumasta; Karnataka has e-Karmika; names differ, purpose is similar: regulate working hours, holidays, and employment conditions."),
    S("Who needs it",
      "• Any Pvt Ltd / LLP with a physical office or commercial address.",
      "• Retail outlets, restaurants, clinics, and service centres.",
      "• Often required to open current account or obtain local trade licences.",
      "Pure work-from-home solo founders may still need it if the registered office is commercial — check state rules."),
    S("How to register (typical flow)",
      "• Identify state labour department portal.",
      "• Submit establishment details, owner/director IDs, address proof, rent NOC.",
      "• Pay nominal fee (₹200–₹2,000 depending on state and employee count).",
      "• Display registration certificate at premises (physical or digital per state).",
      "Renewal timelines vary — calendar reminders prevent penalties."),
    S("Link to HR compliance",
      "S&E registration underpins compliance for working hours, weekly offs, and leave registers.",
      "When you hire employees, this registration is often checked alongside PF/ESI setup.",
      "Maintain registers even if you're small — labour inspections do happen in retail and F&B."),
    S("Founder checklist",
      "• Register within 30 days of starting operations in a state (many states mandate this).",
      "• Update when you shift office to a new state — new registration required.",
      "• Align S&E establishment name with GST and bank account names to reduce KYC friction."),
])

# Module 2: Financial Basics
L("unit-economics", "Unit Economics 101", [
    S("The one question unit economics answers",
      "Do you make money on each customer or order after direct costs? If not, scale makes losses worse, not better.",
      "Unit economics turns vague 'we'll monetise later' into measurable contribution margin per user, order, or contract."),
    S("Core metrics (define yours clearly)",
      "ARPU / ACV: average revenue per user or account per month or year.",
      "COGS: direct costs — hosting, payment gateway fees, delivery, customer support tied to delivery, inventory.",
      "Contribution margin = Revenue − COGS (per unit).",
      "CAC: sales + marketing spend to acquire one paying customer.",
      "LTV: contribution margin × average customer lifetime (months) − retention curve matters."),
    S("India-specific cost lines founders miss",
      "• Payment gateway ~1.5–2% + GST on digital payments.",
      "• Cash-on-delivery returns and RTO in e-commerce (can destroy margin).",
      "• GST output tax vs input credit timing — cash flow, not just P&L.",
      "• Inside sales salaries + commissions in B2B — fully loaded CAC.",
      "• UPI is cheap for users, but business still bears infrastructure and reconciliation cost."),
    S("Worked mindset example",
      "SaaS: ₹999/month plan, ₹150 hosting + support COGS → ₹849 contribution. CAC ₹3,000 → payback ~3.5 months if churn is low.",
      "If monthly churn is 8%, average life ~12 months → LTV ≈ ₹10k — still healthy if CAC stays ₹3k.",
      "Change one assumption (churn 15%) and LTV halves — sensitivity tables prevent fantasy forecasts."),
    S("Action items this week",
      "• Build a one-row spreadsheet: price, COGS, CAC, churn → LTV and payback.",
      "• Separate India GST in/out from 'revenue' line.",
      "• Review last 20 customers — which segment has best contribution margin? Double down there."),
])

L("burn-rate", "Burn Rate & Runway", [
    S("Gross vs net burn",
      "Gross burn: total cash out each month (salaries, rent, tools, marketing).",
      "Net burn: gross burn minus cash collected from customers — what actually leaves the bank.",
      "Founders raising funds should speak net burn after revenue; bootstrapped founders often track gross to control costs."),
    S("Runway formula",
      "Runway (months) = Cash in bank ÷ Net monthly burn.",
      "Always model two scenarios: base case and 'revenue drops 30%' — Indian B2B sales often slip by a quarter.",
      "Add 2-month buffer for GST payments, advance tax, and festival-season slowdowns."),
    S("What belongs in burn (India)",
      "• Founder salaries (even ₹50k matters for runway honesty).",
      "• Employer PF/ESI contributions.",
      "• Professional fees: CA, legal, compliance retainers.",
      "• Cloud, SaaS tools, WeWork/co-working.",
      "• Performance marketing and sales travel.",
      "• One-time costs: incorporation, trademark, ESOP setup — tag separately so they don't inflate recurring burn."),
    S("When to cut vs when to invest",
      "Cut: tools with overlap, unused seats, marketing with CAC > LTV, hiring ahead of revenue.",
      "Invest: compliance that prevents penalties, sales after proven unit economics, inventory only when turnover justifies.",
      "Rule of thumb: below 6 months runway, freeze discretionary spend and model bridge or revenue plan explicitly."),
    S("Board and investor reporting",
      "Share monthly: opening cash, inflows, outflows by category, closing cash, runway.",
      "Indian angels often ask 'GST working capital' — show receivables ageing if B2B."),
])

L("cash-flows", "Projecting Cash Flows", [
    S("Profit ≠ cash in India",
      "You can show accounting profit and still fail because GST, TDS, advance tax, and vendor advances drain cash earlier than revenue lands.",
      "Cash-flow forecasting is about timing — when money moves, not when you recognise revenue."),
    S("Build a 12-month rolling forecast",
      "• Row 1: opening cash balance.",
      "• Inflows: customer receipts (lag sales by collection days), investment, loans.",
      "• Outflows: payroll (monthly), rent, vendors (net 30/45), GST paid monthly, TDS deposited, advance tax quarterly.",
      "• Closing balance → feeds next month opening.",
      "Update actuals monthly; variance analysis beats rebuilding from scratch."),
    S("GST and working capital",
      "If you collect 18% GST from customers but pay vendors with input credit, timing gaps still hit when output tax exceeds credits.",
      "Export businesses: LUT and refund cycles affect cash — model separately.",
      "Do not treat GST collected as revenue — it passes through."),
    S("Scenario planning",
      "• Base: pipeline converts at historical rate.",
      "• Downside: 30% slower collections, one enterprise deal slips 90 days.",
      "• Upside: only if contract signed — not 'likely intro'.",
      "Founders who model downside sleep better through Diwali quarter slumps."),
    S("Tools and discipline",
      "Spreadsheet is enough until ₹5–10Cr turnover; then integrate accounting (Zoho Books, Tally, QuickBooks India).",
      "Reconcile bank statement to forecast every month — 30-minute habit prevents surprises."),
])

L("bootstrapping", "Bootstrapping Smartly", [
    S("Bootstrap with a plan, not pride",
      "Bootstrapping means growth funded by customers and discipline, not 'no budget for compliance.'",
      "Indian bootstrapped winners optimise CAC, collections, and hiring pace — they do not skip GST or PF."),
    S("Revenue-first tactics that work here",
      "• Pre-sales and pilots with LOIs before building full product.",
      "• Annual prepay discounts to pull cash forward (watch GST on advance receipts).",
      "• Focus on one geography or vertical until repeatability — India is heterogeneous by state and language.",
      "• Partner with distributors only when unit economics survive margin share."),
    S("Cost controls without killing growth",
      "• Cap tool spend; review SaaS stack quarterly.",
      "• Hire slow — contractor vs employee decision upfront (see HR module).",
      "• Use co-working until team size justifies lease + deposit + S&E.",
      "• Negotiate vendor credit 30–45 days after 3 paid invoices."),
    S("When bootstrap breaks",
      "Working capital crunch from inventory, long enterprise payment terms, or regulatory capital needs (NBFC, fintech) — equity or debt may be required.",
      "If competitors raise and buy keywords + talent, bootstrapped niches can shrink — monitor market share, not just burn."),
    S("Bridge to funding",
      "Clean books, filed GST/ROC, and 6 months metrics make angel conversations faster even if you stay bootstrapped.",
      "Treat investors as optional leverage, not rescue."),
])

# ─── Module 3: Compliance & Taxes ────────────────────────────────────────────

L("gst-basics", "GST Basics for Founders", [
    S("When GST registration is mandatory",
      "Turnover above ₹20 lakh (₹10 lakh in special category states) in a financial year for goods/services.",
      "Inter-state supply, e-commerce sellers, and certain categories have registration regardless of turnover.",
      "Voluntary registration makes sense if you want input tax credit (ITC) on B2B purchases early."),
    S("Key returns founders must know",
      "GSTR-1: outward supplies (sales) — monthly or quarterly depending on scheme.",
      "GSTR-3B: summary return with tax payment — monthly for most startups.",
      "GSTR-9 / 9C: annual return and reconciliation (turnover thresholds apply).",
      "Missing GSTR-3B blocks your buyers' ITC and attracts late fees + interest."),
    S("Composition scheme — fit or trap?",
      "Small taxpayers can pay tax at fixed rate on turnover with simpler compliance.",
      "Cannot collect GST from customers separately or claim ITC in most cases.",
      "Bad fit if you sell to large companies that need ITC on invoices."),
    S("Invoicing rules that prevent disputes",
      "GSTIN, HSN/SAC, place of supply, tax rate, and reverse charge flag (if applicable) on every invoice.",
      "B2B: match legal name on invoice to buyer GST portal name.",
      "Export: LUT or bond for zero-rated supplies — plan before first shipment."),
    S("Founder mistakes",
      "• Using personal account for business without clear books.",
      "• Not reconciling GSTR-2B with purchase books monthly.",
      "• Treating GST collected as revenue in pitch decks.",
      "• Ignoring e-invoicing thresholds when you cross turnover limits."),
])

L("tds", "TDS (Tax Deducted at Source)", [
    S("Why TDS exists",
      "Government collects tax at source on certain payments so evasion is harder.",
      "As a payer (company), you deduct TDS, deposit with government, and file quarterly returns.",
      "As a payee, TDS shows in Form 26AS and reduces advance tax liability."),
    S("Sections startups use constantly",
      "Section 192 — salary TDS via payroll software.",
      "Section 194J — professional fees (consultants, lawyers, some vendors) typically 10%.",
      "Section 194C — contractors for labour/services — 1% (individual/HUF) or 2% (others).",
      "Section 194H — commission/brokerage — 5%.",
      "Section 194-I — rent — 10% for land/building, 2% for plant/machinery."),
    S("Compliance calendar",
      "• Deduct TDS when payment is due or made (earlier of).",
      "• Deposit by 7th of next month (April for March).",
      "• File 24Q (salary) and 26Q (non-salary) quarterly.",
      "• Issue Form 16 / 16A to deductees.",
      "Late deposit: interest + disallowance risk in your tax audit."),
    S("Contractor vs employee (TDS angle)",
      "Misclassifying employees as consultants to avoid PF can trigger reclassification, penalties, and wrong TDS section.",
      "Consultant invoices need PAN; without PAN, higher rate applies (Section 206AA)."),
    S("Practical setup",
      "Enable TDS in accounting software day one; maintain challan PDFs.",
      "Reconcile 26AS before filing your ITR — mismatches delay refunds."),
])

L("pf-esi", "PF & ESI Compliance", [
    S("When registration triggers",
      "EPF (PF): generally mandatory when you have 20+ employees; voluntary registration possible earlier for benefits.",
      "ESIC (ESI): applies when you have 10+ employees (in non-exempt establishments) with wages up to ceiling — check latest wage ceiling notification.",
      "Many startups register PF early to offer credible benefits to first hires."),
    S("Employer cost reality",
      "PF: employer contributes 12% of basic wages (split across EPS/EPF/admin); employee 12% deducted.",
      "ESI: employer ~3.25%, employee 0.75% on applicable wages (rates subject to notification).",
      "Structure CTC statements so founders know true cost — '₹12L CTC' is not ₹1L/month take-home."),
    S("Monthly process",
      "• Calculate wages and deductions.",
      "• File ECR on EPFO portal by 15th with payment.",
      "• ESIC challan and return on esic.in.",
      "• Update exits/joins within deadlines to avoid compliance gaps."),
    S("Common startup pitfalls",
      "• Paying interns cash without documentation.",
      "• Founders on payroll without minimum wages compliance in some states.",
      "• Not issuing UAN to employees — delays withdrawal and transfers.",
      "• Ignoring multi-state establishment rules when hiring remote."),
    S("Why investors care",
      "Labour non-compliance surfaces in due diligence and can block NBFC partnerships or enterprise vendor onboarding."),
])

L("roc-filings", "ROC Annual Filings", [
    S("Annual ROC package for Pvt Ltd",
      "AOC-4: financial statements attachment within 30 days of AGM.",
      "MGT-7: annual return with shareholding pattern.",
      "ADT-1: auditor appointment tracking.",
      "DIR-3 KYC: each director annually (DIN active).",
      "Missing these → ₹100–₹500 per day penalties and director disqualification risk."),
    S("AGM timeline",
      "First AGM within 18 months of incorporation, then every year within 6 months of financial year end.",
      "Most startups use 31 March FY — AGM by 30 September, filings soon after.",
      "Board approves accounts before AGM; auditor signs financials."),
    S("What founders should track",
      "• Share allotments during year → PAS-3 filed?",
      "• Director changes → DIR-12.",
      "• Charge creation on assets → CHG-1.",
      "• Registered office change → INC-22.",
      "Cap table in MGT-7 must match SHA and PAS records — critical for fundraising."),
    S("LLP note",
      "LLPs file Form 8 (statement of accounts) and Form 11 (annual return) — different forms, same discipline."),
    S("Pro tip",
      "Calendar ROC + GST + ITR in one compliance tracker; Pelago sends deadline reminders tied to your structure."),
])

# ─── Module 4: Funding & Equity ──────────────────────────────────────────────

L("funding-landscape", "The Funding Landscape", [
    S("Stages and who writes cheques",
      "Pre-seed: angels, friends & family, micro-VCs — idea + team, ₹25L–₹2Cr typical.",
      "Seed: angels + seed funds — early traction, ₹2–8Cr.",
      "Series A: institutional VCs — repeatable revenue, ₹10Cr+.",
      "India has active hubs: Bengaluru, Mumbai, Delhi-NCR, plus growing Chennai, Hyderabad, Kochi networks."),
    S("Instruments you'll hear",
      "Equity: priced round with valuation and share allotment.",
      "SAFE / convertible note: converts later with cap and discount (less common in India than US, growing).",
      "CCPS: Compulsorily Convertible Preference Shares — popular for VC flexibility.",
      "Understand what you sign — instrument matters as much as valuation."),
    S("What Indian investors evaluate",
      "Team and founder-market fit.",
      "TAM in India context — not US deck copy-paste.",
      "Unit economics and retention, not only GMV.",
      "Regulatory path (fintech, health, edtech have extra scrutiny).",
      "Cap table cleanliness and DPIIT/tax posture."),
    S("Preparation before outreach",
      "• Data room: COI, MOA/AOA, GST certs, 12-month bank statements, contracts, cap table.",
      "• Clarify IP assignment from founders.",
      "• Know your 18-month use of funds in INR.",
      "• Identify 30 target investors by thesis, not spray 300 emails."),
    S("Alternatives to equity",
      "Revenue-based financing, venture debt post-revenue, government grants (Startup India, state schemes), and bank CGTMSE-backed loans for MSMEs — dilution is not the only fuel."),
])

L("investment-instruments", "Investment Instruments", [
    S("Equity shares (ordinary)",
      "Founders and investors hold equity with voting and dividend rights per SHA.",
      "Priced round sets pre-money valuation → price per share.",
      "Dilution = new shares ÷ (old shares + new shares)."),
    S("CCPS and CCDs",
      "CCPS: preference shares convertible to equity; liquidation preference possible.",
      "CCD: debentures convertible to equity; treated as debt until conversion.",
      "Investors use these for downside protection and regulatory flexibility."),
    S("Convertible notes / SAFEs",
      "Invest today, convert at next priced round with valuation cap and/or discount.",
      "Watch Companies Act and FEMA if foreign investors involved.",
      "Document interest rate, maturity, and what happens if no future round."),
    S("ESOP pool interaction",
      "Investors often ask for 10–15% option pool created pre-money or post-money — massive dilution difference.",
      "Negotiate pool size against hiring plan, not template."),
    S("Founder homework",
      "Model three scenarios on a cap table: seed, pool expansion, Series A.",
      "Ask lawyer to explain liquidation preference in exit at 1× non-participating vs participating."),
])

L("term-sheet", "Term Sheet Jargon", [
    S("Economics terms",
      "Pre-money valuation: company value before new money.",
      "Post-money = pre-money + investment.",
      "Liquidation preference: investors get paid first on exit — 1× is standard; participating is harsher.",
      "Anti-dilution: protects investor if down round — weighted average broad-based is founder-friendlier than full ratchet."),
    S("Control terms",
      "Board composition: observer vs seat vs veto rights.",
      "Reserved matters: list requiring investor consent (sale, new share issue, debt above threshold).",
      "Drag-along: forces minority to sell if majority/investors agree.",
      "Tag-along: lets minorities join a sale on same terms."),
    S("India-specific add-ons",
      "FEMA pricing for foreign investors — valuation report from CA.",
      "RBI reporting timelines on share allotment.",
      "Tax indemnity clauses — who pays if historical GST/IT issues surface."),
    S("What to negotiate first",
      "Valuation band, liquidation preference type, board seat, option pool size, founder vesting restart requests.",
      "Do not give unlimited personal guarantees — separate founder from company."),
    S("Before you sign",
      "Lawyer review is non-optional; 48-hour turn on term sheet is normal.",
      "Align term sheet to SHA — term sheet alone is not fully binding but sets momentum."),
])

# ─── Module 5: Intellectual Property ─────────────────────────────────────────

L("trademarking", "Trademarking Your Brand", [
    S("What to protect first",
      "Word mark for brand name; logo as separate device mark if design is distinctive.",
      "Tagline only if central to marketing.",
      "Domain + trademark + company name alignment reduces impersonation."),
    S("Class selection (Nice classification)",
      "Class 35: business services, advertising, SaaS sales often here.",
      "Class 42: software development, SaaS platform services.",
      "Class 9: downloadable apps sometimes.",
      "File in classes you use now and plan in 3 years — extra classes cost more but prevent copycats."),
    S("Timeline and process",
      "Search → file TM-A → examination → objection reply (if any) → journal advertisement → registration certificate.",
      "12–24 months typical; ™ symbol allowed while pending.",
      "Use ® only after registration certificate."),
    S("Enforcement in India",
      "Monitor IP India journal and Google Ads for copycats.",
      "Cease-and-desist → opposition proceedings → civil suit as escalation.",
      "Marketplace takedowns need registration proof."),
    S("Founder checklist",
      "• File before big marketing launch.",
      "• Assign logo IP from designer to company via contract.",
      "• Check international Madrid protocol if expanding abroad."),
])

L("patents-copyrights", "Patents & Copyrights", [
    S("Copyright — default for code and content",
      "Copyright exists on creation for code, blogs, videos, designs.",
      "Registration at Copyright Office strengthens evidence in disputes (optional but useful).",
      "Work-for-hire: employees — generally company owns; contractors need IP assignment clause."),
    S("Patents — when they matter",
      "Novel, non-obvious technical invention with industrial application.",
      "Long timeline (2–4 years) and cost — rare for pure software unless technical effect in India.",
      "Hardware, medtech, agri-tech, deeptech see stronger patent value."),
    S("Trade secrets",
      "Algorithms, customer lists, pricing — protect via NDAs and access control, not publication.",
      "Do not pitch detailed secret sauce in public demo days without protection strategy."),
    S("Open source risk",
      "Using GPL code in proprietary product can force disclosure — legal review dependency trees.",
      "MIT/Apache more permissive; still attribute notices."),
    S("Investor due diligence",
      "IP assignment agreements from all founders and key contractors before data room opens."),
])

# ─── Module 6: Hiring & HR ─────────────────────────────────────────────────────

L("salary-ctc", "Structuring Salary (CTC)", [
    S("CTC anatomy in India",
      "Cost to Company = Gross salary + employer PF + gratuity accrual + insurance + other benefits.",
      "Employees care about in-hand (net pay after PF, PT, TDS).",
      "Founders must model true hiring cost, not headline CTC."),
    S("Typical components",
      "Basic salary: drives PF and gratuity calculations — usually 40–50% of gross.",
      "HRA: tax exemption if rent paid (metro rules).",
      "Special allowance: flexible bucket.",
      "LTA, medical, food coupons: tax-efficient perks if structured correctly."),
    S("Tax regimes",
      "New vs old tax regime choice per employee — payroll software should support both.",
      "Standard deduction and 80C/80D proofs in old regime.",
      "Founders on payroll: plan advance tax if salary is low and other income exists."),
    S("Compliance on payroll",
      "Professional tax by state (e.g. Karnataka, Maharashtra slabs).",
      "TDS under 192 monthly.",
      "Payslips with breakup mandatory for morale and audits."),
    S("Offer letter must match",
      "CTC breakup in offer letter = fewer disputes at joining.",
      "Clarify probation, notice period, and variable pay conditions."),
])

L("esops", "ESOPs: The Golden Handcuff", [
    S("Why ESOPs exist",
      "Startups cannot always match cash from Flipkart or TCS — equity aligns long-term upside.",
      "ESOP pool carved from founder equity before or during funding — dilution event."),
    S("Plan design basics",
      "Pool size: 10–15% post-money common for seed stage.",
      "Vesting: 4 years, 1-year cliff standard.",
      "Exercise price: fair market value per valuation norms — 409A-style in India via merchant banker for larger cos.",
      "Good leaver vs bad leaver defines buyback price."),
    S("Legal and tax touchpoints",
      "ESOP scheme approved by board and shareholders.",
      "Perquisite tax on exercise for employees — budget for it.",
      "Companies Act rules on buyback and sweat equity if used.",
      "FEMA if foreign holding company grants options to India employees."),
    S("Communication to team",
      "Explain paper value vs cash — avoid promising '₹1Cr ESOP' without exit math.",
      "Refresh grant letters when down rounds change FMV narrative."),
    S("Investor perspective",
      "Unclear ESOP promises to early hires without board approval block clean cap table."),
])

L("consultant-employee", "Consultant vs Employee", [
    S("Legal difference",
      "Employee: control over how/when/where work is done, part of organisation, PF/TDS 192.",
      "Consultant: independent service contract, TDS 194J/194C, no PF unless misclassified.",
      "Law looks at substance, not invoice title."),
    S("When consultant makes sense",
      "Short projects, specialised skills, part-time fractional CXO.",
      "Clear deliverables, own tools, no exclusivity (unless negotiated).",
      "GST-registered consultant invoices with GST if registered."),
    S("When employee is required",
      "Full-time core team, reports to founder, uses company email and systems daily.",
      "Trying to save 12% PF by calling engineers 'consultants' is a due diligence red flag."),
    S("Contract essentials",
      "Scope, IP assignment, confidentiality, payment terms, termination, non-solicit (reasonable).",
      "MSA + SOW for consultants; appointment letter + policies for employees."),
    S("Audit readiness",
      "Labour inspector or investor DD will sample contracts — keep consistent classification."),
])

# ─── Module 7: Growth & Marketing ────────────────────────────────────────────

L("b2b-sales", "B2B Sales in India", [
    S("Indian B2B buying reality",
      "Decisions involve finance, IT, legal, and sometimes procurement — long cycles (3–9 months).",
      "Relationship and trust often beat slick deck alone.",
      "Pilot → paid conversion needs written success criteria upfront."),
    S("GST-compliant invoicing builds trust",
      "Enterprise buyers need your GSTIN, correct HSN/SAC, and credit terms on PO.",
      "Mismatch delays payment and hurts renewal."),
    S("Pricing and collections",
      "Net-30 is a wish; net-45/60 common — model cash flow accordingly.",
      "TDS deducted on your invoice — ensure you account for net receipt.",
      "MSME Samadhaan helps delayed payments to MSME suppliers — know if you qualify."),
    S("Founder-led sales playbook",
      "• ICP: industry, size, decision maker title.",
      "• Outbound: LinkedIn + warm intros beat cold spray in India.",
      "• Demo customisation to one pain metric.",
      "• Proposal with ROI in INR and implementation timeline.",
      "• Follow-up cadence 48 hours, not 2 weeks."),
    S("Scaling beyond founder",
      "Hire sales when repeatability shows — same pitch closes 3+ times.",
      "CRM hygiene (HubSpot, Zoho) before hiring second rep."),
])

L("whatsapp-marketing", "WhatsApp Marketing", [
    S("Why WhatsApp in India",
      "500M+ users; open rates beat email for SMB outreach.",
      "WhatsApp Business API (via BSPs like Interakt, AiSensy, Gupshup) enables broadcast at scale with opt-in."),
    S("Compliance basics",
      "Opt-in consent required — no purchased lists.",
      "Template messages need Meta approval for promotional content.",
      "DND / TRAI rules for SMS overlap — WhatsApp is separate but brand trust is one."),
    S("What works for founders",
      "• Onboarding sequences after signup.",
      "• Payment reminders and GST invoice links.",
      "• Webinar and demo follow-ups within 24 hours.",
      "• Regional language templates for Tier-2 expansion."),
    S("What fails",
      "Broadcasting discounts daily without segmentation.",
      "No opt-out path — users block and report.",
      "Using personal WhatsApp for 500+ leads — account bans."),
    S("Metrics",
      "Track delivery, read, reply, and conversion to call booked — not vanity reads alone."),
])

L("influencer-marketing", "Influencer Marketing on a Budget", [
    S("Micro-influencers > celebrities for startups",
      "10k–100k followers in a niche (finance, D2C, parenting) convert better than generic fame.",
      "Cost per reel ₹5k–₹50k vs crores for celebrities.",
      "Look for engagement rate and comment quality, not follower count alone."),
    S("Disclosure and ASCI",
      "Paid partnerships must be disclosed (#ad) per ASCI guidelines.",
      "Contracts should cover usage rights, whitelisting for ads, and deliverables (1 reel + 2 stories)."),
    S("Structure deals",
      "Fixed fee + affiliate code tracking (UTM + coupon).",
      "Pay part on delivery, part on metrics to reduce risk.",
      "Avoid pure equity-for-post unless influencer is true brand ambassador."),
    S("Measure ROI",
      "CAC from influencer channel = spend ÷ attributed signups.",
      "Compare to Google/Meta — kill underperformers fast.",
      "Store creative assets for paid amplification if whitelisting allowed."),
    S("India-specific angles",
      "Regional creators for Bharat markets; festival calendars (Diwali, Onam) planned 6 weeks ahead."),
])

# ─── Module 8: Exits & Winding Up ──────────────────────────────────────────────

L("strike-off", "Strike Off (FTE)", [
    S("When to close vs sell",
      "Strike off is for dormant or failed startups with no assets/liabilities — not a substitute for selling the business.",
      "If you have revenue, debt, or disputes, winding up or sale process is different."),
    S("FTE (Fast Track Exit) eligibility snapshot",
      "No commenced business or ceased operations.",
      "No assets and liabilities at time of application.",
      "No pending litigation (or disclosures as required).",
      "All directors and shareholders agree — indemnity bonds required."),
    S("Steps overview",
      "• Clear liabilities: GST cancellation, IT returns, bank closure letter.",
      "• File STK-2 with ROC fees.",
      "• Publish notice if required; ROC strikes name off register.",
      "• PAN/TAN eventually deactivated — follow up separately."),
    S("What founders forget",
      "Outstanding PF/ESI dues block clean exit.",
      "Pending angel investment with CCPS needs shareholder resolution.",
      "Foreign investor? FEMA reporting on exit."),
    S("Emotional and legal closure",
      "Inform creditors and customers in writing.",
      "Retain records 8+ years for tax queries even after strike-off.",
      "Founders remain liable for pre-strike-off liabilities if concealed."),
])


def write_lesson_content_ts():
    out = ROOT / "src/lib/lesson-content.ts"
    lines = [
        'export type LessonSection = { heading: string; paragraphs: string[] };',
        'export type LessonContent = { id: string; title: string; sections: LessonSection[] };',
        '',
        'export const lessonContentById: Record<string, LessonContent> = '
        + json.dumps(LESSONS, indent=2, ensure_ascii=False)
        + ';',
        '',
        'export function getLessonContent(id: string): LessonContent | undefined {',
        '  return lessonContentById[id];',
        '}',
        '',
    ]
    out.write_text('\n'.join(lines), encoding='utf-8')
    print(f"Wrote {out} ({len(LESSONS)} lessons)")


def _replace_lesson_summary(text: str, lid: str, summary: str) -> tuple[str, bool]:
    marker = f'"id": "{lid}"'
    start = text.find(marker)
    if start == -1:
        return text, False
    key = text.find('"summary":', start)
    if key == -1:
        return text, False
    quote_start = text.find('"', key + len('"summary":')) + 1
    i = quote_start
    while i < len(text):
        if text[i] == '"' and text[i - 1] != "\\":
            break
        i += 1
    return text[:quote_start] + summary + text[i:], True


def update_learn_summaries():
    path = ROOT / "src/lib/learn.ts"
    text = path.read_text(encoding="utf-8")
    updated = 0
    for lid, lesson in LESSONS.items():
        summary = lesson["sections"][0]["paragraphs"][0]
        if len(summary) > 220:
            summary = summary[:217] + "..."
        summary = summary.replace("\\", "\\\\").replace('"', '\\"')
        text, ok = _replace_lesson_summary(text, lid, summary)
        if ok:
            updated += 1
    path.write_text(text, encoding="utf-8")
    print(f"Updated learn.ts summaries ({updated}/{len(LESSONS)})")


def main():
    assert len(LESSONS) == 25, f"Expected 25 lessons, got {len(LESSONS)}"
    write_lesson_content_ts()
    update_learn_summaries()


if __name__ == "__main__":
    main()
