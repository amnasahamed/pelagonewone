#!/usr/bin/env python3
"""Generate enriched src/lib/blog.ts from POSTS definitions."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
POSTS: list[dict] = []


def P(*paragraphs: str) -> list[str]:
    return list(paragraphs)


def S(heading: str, *paragraphs: str, callout: str | None = None) -> dict:
    section: dict = {"heading": heading, "paragraphs": list(paragraphs)}
    if callout:
        section["callout"] = callout
    return section


def post(
    slug: str,
    title: str,
    category: str,
    readTime: str,
    date: str,
    excerpt: str,
    valueLabel: str,
    keyTakeaways: list[str],
    cta: dict,
    sections: list[dict],
) -> None:
    POSTS.append(
        {
            "slug": slug,
            "title": title,
            "category": category,
            "readTime": readTime,
            "date": date,
            "excerpt": excerpt,
            "valueLabel": valueLabel,
            "keyTakeaways": keyTakeaways,
            "cta": cta,
            "sections": sections,
        }
    )


# ─── 1. Pvt Ltd vs LLP ─────────────────────────────────────────────────────────

post(
    "pvt-ltd-vs-llp-guide-2024",
    "Pvt Ltd vs LLP: The Ultimate Guide for Indian Founders (2024)",
    "Registration",
    "8 min",
    "January 28, 2024",
    "Choose the structure that matches your fundraising plan—not just this year's invoice volume—and avoid a costly conversion when investors arrive.",
    "Pick the right entity in 10 minutes",
    [
        "Pvt Ltd is the default if you want ESOPs, priced equity, or VC cheques within 24 months.",
        "LLP saves ₹8,000–₹15,000 in year-one compliance when you are bootstrapped and service-led.",
        "Audit triggers differ: LLP only beyond ₹40L turnover or ₹25L capital; Pvt Ltd audit is mandatory.",
        "Pelago maps your revenue model and cap table story before you file SPICe+ or FiLLiP.",
    ],
    {
        "title": "Not sure which structure fits?",
        "subtitle": "Free 20-minute entity comparison for founders in Kerala and across India.",
        "href": "/contact",
        "buttonLabel": "Get free structure review",
    },
    [
        S(
            "Why this decision locks your cap table",
            "Your legal structure decides whether you can issue equity to angels, grant ESOPs, or only split profits. In India, founders who pick LLP for 'lower fees' often pay ₹50,000+ later to convert when a term sheet arrives.",
            "Private Limited companies are governed by the Companies Act, 2013. LLPs follow the LLP Act, 2008. Both offer limited liability, but only Pvt Ltd can issue shares and attract institutional capital cleanly.",
            "Factor | Pvt Ltd | LLP",
            "Equity to investors | Yes (shares) | No (only partner capital)",
            "ESOPs | Standard | Difficult / uncommon",
            "MCA annual filings | AOC-4, MGT-7, etc. | Form 8 & 11",
            "Typical year-1 compliance spend | ₹25,000–₹60,000 | ₹12,000–₹35,000",
            callout="Founder tip: If your pitch deck mentions a 'round' in 18 months, incorporate as Pvt Ltd on day one.",
        ),
        S(
            "When Pvt Ltd is the right default",
            "SaaS, D2C, fintech, and marketplace startups planning angel or VC funding should almost always choose Pvt Ltd. Banks and enterprise buyers also prefer dealing with a company limited by shares.",
            "Tax options matter: eligible manufacturing startups can access lower effective rates under Section 115BAB; LLPs are taxed at flat partnership rates without the same equity toolkit.",
            "• You need a ESOP pool before hiring senior talent.",
            "• You will raise funds at a premium (angel tax planning applies).",
            "• You want a single founder today but room for directors and investors tomorrow.",
        ),
        S(
            "When LLP wins for bootstrapped teams",
            "Consultancies, agencies, studios, and professional firms with 2–4 partners and no external equity often thrive on LLP flexibility. Profit shares can be reallocated in the LLP agreement without issuing new shares.",
            "Compliance is lighter until you cross audit thresholds—turnover above ₹40 lakhs or capital contribution above ₹25 lakhs triggers statutory audit for LLPs.",
            "• No mandatory board meetings or dividend distribution rules.",
            "• Lower incorporation stamp duty in many states vs high authorised capital Pvt Ltd.",
            "• Ideal when every partner is actively working and no passive investors exist.",
        ),
        S(
            "Cost and timeline snapshot (indicative)",
            "Item | Pvt Ltd (SPICe+) | LLP (FiLLiP)",
            "DSC (2 partners/directors) | ₹2,000–₹3,000 | ₹2,000–₹3,000",
            "Govt fees + stamp duty | ₹2,000–₹12,000 | ₹1,500–₹8,000",
            "Professional fees | ₹5,000–₹15,000 | ₹4,000–₹12,000",
            "Time to COI | 7–15 working days | 7–12 working days",
            "Pelago handles RUN name approval, MOA/AOA or LLP agreement drafting, and post-COI bank/GST handoff so you start trading compliantly—not just incorporated.",
        ),
        S(
            "Common mistakes founders regret",
            "• Incorporating with ₹10 lakh authorised capital 'to look big'—stamp duty scales with authorised capital in several states.",
            "• Assuming LLP means zero MCA filings—you still file Form 8 (solvency) and Form 11 (annual return).",
            "• Splitting 50-50 without vesting because the structure paperwork was easier than the founder conversation.",
            "Book a structure review before you pay incorporation fees; switching later burns cash and investor diligence time.",
        ),
    ],
)

# ─── 2. GST calendar ───────────────────────────────────────────────────────────

post(
    "gst-filing-calendar-2024",
    "GST Filing Calendar 2025: Never Miss a Due Date",
    "Tax & Compliance",
    "6 min",
    "January 25, 2024",
    "Build a repeatable monthly rhythm for GSTR-1 and GSTR-3B so you never block customer ITC or pay ₹50/day late fees that compound quietly.",
    "Stay penalty-free all year",
    [
        "GSTR-1 by the 11th (monthly) feeds your buyers' GSTR-2B—late filing hurts their ITC and your relationships.",
        "GSTR-3B is your cash tax payment; mismatch with 2B is the #1 audit trigger.",
        "QRMP filers follow quarterly GSTR-1 with monthly tax via PMT-06—know your scheme before onboarding.",
        "Pelago's compliance calendar syncs GST, TDS, and ROC dates for founder-led teams.",
    ],
    {
        "title": "GST keeping you up at night?",
        "subtitle": "Monthly filing support with reconciliation before every GSTR-3B.",
        "href": "/services",
        "buttonLabel": "Book compliance call",
    },
    [
        S(
            "Why timing is a revenue issue, not just compliance",
            "Missing GSTR-1 does not only attract late fees—it blocks your customers from claiming Input Tax Credit on your invoices. B2B buyers will chase you, delay payments, or switch vendors.",
            "GSTR-3B is where you declare tax liability and pay cash to the government. Filing without reconciling against GSTR-2B (purchase ITC) is how startups discover ₹1–2 lakh discrepancies during scrutiny.",
            "• Late fee: ₹50 per day per act (CGST + SGST), capped but painful on thin margins.",
            "• Interest: 18% per annum on tax paid late.",
            "• Reputation: Large clients run vendor compliance checks before renewals.",
        ),
        S(
            "Monthly due dates (regular taxpayers)",
            "Form | Purpose | Typical due date",
            "GSTR-1 | Outward supplies (sales) | 11th of next month",
            "GSTR-3B | Summary return + tax payment | 20th of next month",
            "GSTR-2B | Auto-drafted purchase ITC (read-only) | Generated after supplier files",
            "IFF (optional) | QRMP intra-quarter sales | 13th of next month (if opted)",
            "Mark the 8th and 18th on your calendar for data prep—not the due date itself.",
            callout="Founder tip: Reconcile purchases in accounting software every Friday; do not wait for the 19th panic.",
        ),
        S(
            "QRMP scheme: who it helps and who it hurts",
            "Quarterly Return Monthly Payment (QRMP) suits businesses with steady tax outflow but low B2B invoice volume. You file GSTR-1 quarterly but pay tax monthly via Form PMT-06.",
            "If most of your revenue is B2B, staying on monthly GSTR-1 keeps your buyers' ITC flowing every month—another reason to understand your customer mix before opting in.",
            "• Turnover up to ₹5 crore may opt for QRMP (check latest notifications).",
            "• GSTR-3B quarterly for QRMP: 22nd or 24th after quarter end (state-dependent).",
            "• Annual return GSTR-9 still required if applicable to your turnover tier.",
        ),
        S(
            "Annual returns and audit trail",
            "GSTR-9 (annual return) consolidates monthly data for the financial year. GSTR-9C is a reconciliation statement when turnover exceeds audit thresholds—treat March–May as close-the-books season, not optional admin.",
            "For FY 2024–25, plan ITC reversals, credit notes, and e-invoice gaps before December filing windows—extensions happen but should not be your plan A.",
            "Pelago pairs GST filings with books review so your numbers match what the CA signs on the audit report.",
        ),
        S(
            "Founder checklist before every 3B",
            "• Match sales register to GSTR-1 already filed or about to file.",
            "• Download GSTR-2B; flag missing supplier filings.",
            "• Reverse ineligible ITC (blocked credits, motor vehicles, etc.).",
            "• Pay via challan before filing; keep ARN screenshot in your data room.",
            "One disciplined rhythm beats twelve emergency filings—and keeps your next fundraise diligence clean.",
        ),
    ],
)

# ─── 3. Startup India ──────────────────────────────────────────────────────────

post(
    "startup-india-tax-benefits",
    "How to Save Taxes with Startup India Registration (DPIIT)",
    "Startup",
    "7 min",
    "January 22, 2024",
    "DPIIT recognition is the gateway to Section 80-IAC profit holidays and angel tax relief—but only if you apply before your first priced round, not after.",
    "Unlock Startup India tax perks",
    [
        "DPIIT certificate alone does not exempt tax—you need separate 80-IAC approval for the 3-year profit holiday.",
        "Section 56(2)(viib) relief protects premium on angel shares when conditions are met.",
        "Apply while your website, pitch, and MOA objects still tell one innovation story.",
        "Pelago coordinates DPIIT, 80-IAC, and cap table cleanup before investor due diligence.",
    ],
    {
        "title": "Raising angel capital soon?",
        "subtitle": "We align DPIIT, 80-IAC, and Form 2 declarations with your term sheet timeline.",
        "href": "/startup-bundle",
        "buttonLabel": "Explore startup bundle",
    },
    [
        S(
            "What DPIIT recognition actually gives you",
            "Startup India recognition from DPIIT labels your Pvt Ltd or LLP as a 'startup' for policy benefits. It is not a tax exemption by itself—it unlocks applications for tax holidays, angel tax relief, and faster compliance narratives.",
            "Eligibility typically requires incorporation under 10 years, turnover below prescribed limits (₹100 crore historically—verify current notification), and innovation or scalability in your application narrative.",
            "• Self-certification under select labour and environment laws (check active list).",
            "• Faster exit and public procurement concessions in some programs.",
            "• Credibility signal for state grants and accelerator cohorts.",
        ),
        S(
            "Section 80-IAC: the 3-year profit holiday",
            "Recognised startups can apply for 100% deduction on profits for any three consecutive years out of the first ten since incorporation. This requires Inter-Ministerial Board (IMB) approval—not automatic with DPIIT.",
            "You must be Pvt Ltd or LLP, incorporated after April 1, 2016, and pass the innovation/scalability test. Plan application 2–3 months before you need the benefit in financial projections.",
            "• Carry forward matters if you miss the window year.",
            "• Clean books and pitch deck alignment reduce rejection risk.",
            "• Coordinate with your CA on which three years maximise cash savings.",
            callout="Founder tip: Apply for 80-IAC before showing inflated profits in investor models—you cannot rewrite prior years casually.",
        ),
        S(
            "Angel tax (Section 56(2)(viib)) relief",
            "When angels pay above face value, the premium was historically taxed as income in the startup's hands. DPIIT-recognised startups can file declarations (including Form 2 compliance) to seek exemption when conditions are met.",
            "This is critical for priced seed rounds in India. Cap table errors, unrelated party shares, or late filings can void relief and scare investors.",
            "• Aggregate paid-up capital and post-money valuation caps apply—track latest rules.",
            "• Maintain valuation report and board resolutions in your data room.",
            "• Pelago reviews shareholder agreements before the first closing.",
        ),
        S(
            "Operational perks founders undervalue",
            "Labour law self-certification, IP fast-track fee rebates, and easier narrative for government pilots save indirect cost even when you are pre-profit.",
            "State policies (Kerala Startup Mission, Karnataka, etc.) often require DPIIT as a baseline document for subsidies and office programs.",
            "Update your Startup India profile when you pivot—stale descriptions cause renewal issues during due diligence.",
        ),
        S(
            "Application mistakes to avoid",
            "• Applying with a generic website that does not match MOA objects.",
            "• Waiting until angel round week to start 56(2)(viib) paperwork.",
            "• Assuming recognition equals automatic 80-IAC approval.",
            "Pelago bundles incorporation, DPIIT filing, and investor-ready compliance so tax benefits support your raise—not delay it.",
        ),
    ],
)

# ─── 4. ISO 9001 ───────────────────────────────────────────────────────────────

post(
    "iso-9001-brand-trust",
    "Boost Your Brand Trust with ISO 9001 Certification",
    "Certifications",
    "5 min",
    "January 20, 2024",
    "Win PSU and enterprise tenders you are currently disqualified from—ISO 9001 is often the cheapest trust signal that unlocks ₹50L+ contracts.",
    "Open doors to big tenders",
    [
        "ISO 9001:2015 proves you run a documented Quality Management System buyers can audit.",
        "Gap analysis → documentation → staff training → certification audit is a 8–16 week path for SMEs.",
        "Certificate is globally recognised—one audit, multiple markets.",
        "Pelago implements QMS with minimal disruption to daily delivery work.",
    ],
    {
        "title": "Chasing a government or OEM tender?",
        "subtitle": "ISO 9001 implementation and certification body coordination.",
        "href": "/services",
        "buttonLabel": "Talk to certification team",
    },
    [
        S(
            "Why buyers demand ISO 9001",
            "In crowded B2B markets, claims of 'quality delivery' are noise. ISO 9001:2015 is an internationally recognised Quality Management System (QMS) standard that tells procurement teams you document, measure, and improve processes.",
            "Many PSU, defence, and large corporate tenders list ISO 9001 as mandatory eligibility. Without it, you never reach technical evaluation—regardless of price.",
            "• Reduces vendor risk scoring in RFPs.",
            "• Shortens security questionnaires for IT and services vendors.",
            "• Signals operational maturity to international partners.",
        ),
        S(
            "Implementation roadmap",
            "Stage | Activity | Typical duration",
            "Gap analysis | Map current SOPs vs ISO clauses | 1–2 weeks",
            "Documentation | Quality manual, procedures, records | 3–6 weeks",
            "Implementation | Train teams, run internal audits | 4–8 weeks",
            "Certification audit | Stage 1 + Stage 2 by CB | 2–4 weeks",
            "Surveillance | Annual audit to maintain certificate | Ongoing",
            "Founders should assign one internal 'quality owner'—usually COO or delivery head—not outsource ownership entirely.",
            callout="Founder tip: Start documenting your biggest client delivery process first; certifiers reward real workflows over template manuals.",
        ),
        S(
            "Costs and ROI (indicative)",
            "Consulting + documentation for SMEs often runs ₹1.5–₹4 lakhs; certification body fees depend on employee count and sites. Compare that to one lost tender worth ₹25–₹100 lakhs.",
            "Operational benefits: fewer rework hours, clearer onboarding for new hires, and defined corrective action when clients complain.",
            "• Combine with ISO 27001 only if buyers explicitly require both—do not over-certify early.",
            "• Display certificate number on website and proposals.",
        ),
        S(
            "Maintaining certification after the audit",
            "ISO is not a one-time poster. Surveillance audits annually and recertification every three years test whether you still run the QMS—not just whether you still pay fees.",
            "Keep management review minutes, internal audit logs, and customer feedback records ready. Pelago helps maintain the system so recertification is boring, not a fire drill.",
        ),
        S(
            "When to delay ISO",
            "Pre-product-market-fit startups with no enterprise pipeline can defer ISO and invest in delivery speed. The moment a tender PDF lists ISO as mandatory, start the clock—lead time is rarely under two months.",
        ),
    ],
)

# ─── 5. Trademark ──────────────────────────────────────────────────────────────

post(
    "trademark-registration-guide",
    "Protect Your Brand: A Founder's Guide to Trademark Registration",
    "Legal & IP",
    "6 min",
    "January 18, 2024",
    "File in the right Nice class before a competitor blocks your rebrand—TM symbol in weeks, ® after registration in 6–12 months.",
    "Secure your brand name early",
    [
        "Trademark search on IP India prevents costly rebrands after marketing spend.",
        "Class 9 for software, Class 35 for SaaS marketing—pick classes by what you sell.",
        "TM after filing; ® only after registration certificate issues.",
        "Pelago handles search, filing, and objection replies for Indian and Madrid routes.",
    ],
    {
        "title": "Launching a brand this quarter?",
        "subtitle": "Comprehensive trademark search + filing across relevant classes.",
        "href": "/contact",
        "buttonLabel": "Start trademark search",
    },
    [
        S(
            "Your brand is an asset—treat it like one",
            "Founders spend lakhs on logos and domains but delay trademark filing. In India, bad-faith applications and 'first to file' disputes can force a rebrand after traction.",
            "Registration grants exclusive use of your mark in the classes filed—national protection for 10 years, renewable.",
            "• Word mark vs device mark: word marks protect the name in any font.",
            "• Collective marks and certification marks are separate strategies (rare for startups).",
        ),
        S(
            "Choosing the right classes",
            "Trademarks are filed under Nice Classification (45 classes). Examples for tech founders:",
            "Class | Typical use",
            "9 | Software, SaaS products, electronics",
            "35 | Advertising, business management, online marketplaces",
            "42 | IT services, software development, cloud",
            "43 | Restaurants (if F&B brand)",
            "Filing wrong class = protection in the wrong industry. List your actual revenue lines for the next 3 years.",
            callout="Founder tip: File word mark + logo as separate applications if budget allows—stronger coverage than logo alone.",
        ),
        S(
            "Process and timeline",
            "• Search: Check IP India and common law usage.",
            "• Application: Form TM-A with applicant details (company or individual).",
            "• Examination: Objections under absolute/relative grounds—reply within 30 days.",
            "• Journal publication: 4 months opposition window.",
            "• Registration: Certificate issued; use ® symbol.",
            "Expect 6–12 months barring opposition; budget ₹4,500–₹9,000 per class government fees plus professional fees.",
        ),
        S(
            "TM vs ® and enforcement",
            "Use ™ immediately after filing. Use ® only after registration. Sending cease-and-desist letters without registration is weaker—registered marks unlock customs recordal and platform takedowns.",
            "Monitor similar filings quarterly; oppositions are cheaper than litigation after launch.",
        ),
        S(
            "International expansion",
            "Madrid Protocol filings can extend Indian base applications to other countries when you enter those markets—plan after domestic filing, not before validating the brand locally.",
            "Pelago coordinates Indian filing and international strategy so fundraising decks match registered IP.",
        ),
    ],
)

# ─── 6. Udyam ──────────────────────────────────────────────────────────────────

post(
    "udyam-registration-benefits",
    "Unlock Collateral-Free Loans with Udyam (MSME) Registration",
    "Registration",
    "5 min",
    "January 15, 2024",
    "Register on the Udyam portal in 15 minutes to access cheaper credit, tender set-asides, and 3× interest when buyers pay after 45 days.",
    "Claim MSME benefits legally",
    [
        "Udyam is free, paperless, and based on self-declared turnover and investment—no renewal fee.",
        "CGTMSE-backed collateral-free loans up to prescribed limits for eligible MSMEs.",
        "MSME Samadhaan forces payment for delays beyond 45 days from large buyers.",
        "Pelago registers Udyam and links it to GST and bank KYC for lenders.",
    ],
    {
        "title": "Need cheaper working capital?",
        "subtitle": "Udyam registration + lender-ready documentation pack.",
        "href": "/contact",
        "buttonLabel": "Register my MSME",
    },
    [
        S(
            "What changed for 'small' businesses",
            "India expanded MSME definitions—enterprises with turnover up to ₹250 crore can qualify as medium in some cases. Udyam Registration on udyamregistration.gov.in is the only official MSME certificate recognised for schemes and banks.",
            "Old Udyog Aadhaar is obsolete for new registrations. Migration to Udyam is required for existing benefits.",
            "• Micro, Small, Medium categories depend on investment and turnover caps (manufacturing vs services differ).",
            "• Aadhaar OTP verification for proprietors; company PAN for entities.",
        ),
        S(
            "Financial benefits founders use",
            "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) enables collateral-free loans—government acts as guarantor so you do not pledge personal property.",
            "Many banks price MSME loans 1–1.5% below standard business loan ROI when Udyam is on file.",
            "Priority sector lending norms push banks to lend to MSMEs—your application is scored higher with a valid Udyam number.",
            callout="Founder tip: Update Udyam when turnover crosses thresholds—wrong classification can void tender eligibility.",
        ),
        S(
            "MSME Samadhaan for delayed payments",
            "If a buyer (including large corporates) does not pay within 45 days, they owe compound interest at three times the RBI bank rate. File on the Samadhaan portal with invoices and Udyam proof.",
            "This is underused leverage for B2B founders bleeding on 90-day payment terms.",
        ),
        S(
            "Tenders and subsidies",
            "Government tenders often reserve categories or price preferences for MSMEs. State export and capital subsidy schemes frequently list Udyam as mandatory KYC.",
            "Pair Udyam with IEC if you export services—benefits stack.",
        ),
        S(
            "Registration steps",
            "• Visit Udyam portal; use Aadhaar + OTP.",
            "• Enter PAN; system pulls GST and IT data where linked.",
            "• Declare investment in plant/equipment and turnover.",
            "• Download e-certificate with dynamic QR.",
            "Pelago completes registration and advises when to upgrade category after fundraising or capex.",
        ),
    ],
)

# ─── 7. OPC ────────────────────────────────────────────────────────────────────

post(
    "one-person-company-guide",
    "One Person Company (OPC): The Solopreneur's Best Legal Structure",
    "Registration",
    "6 min",
    "January 12, 2024",
    "Get Pvt Ltd–style limited liability as a solo founder—without inventing a co-founder on paper or risking personal assets like a proprietorship.",
    "Solo founder? Start here",
    [
        "OPC allows one member and one director (same person possible).",
        "Mandatory nominee ensures business continuity if incapacitated.",
        "Turnover above ₹2 crore or paid-up capital above ₹50 lakh triggers OPC → Pvt Ltd conversion.",
        "Pelago incorporates OPC via SPICe+ with nominee documentation done right.",
    ],
    {
        "title": "Building alone but want limited liability?",
        "subtitle": "OPC incorporation + first-year compliance checklist.",
        "href": "/startup-bundle",
        "buttonLabel": "Start OPC incorporation",
    },
    [
        S(
            "Why OPC beats proprietorship for serious solos",
            "Proprietorship exposes personal assets to business liability. OPC is a separate legal person under Companies Act 2013 with one shareholder—corporate veil for freelancers scaling to ₹30L+ revenue or hiring employees.",
            "Banks and enterprise clients trust OPC invoices more than proprietorship bills for the same work.",
            "• Single person can be director and shareholder.",
            "• No minimum paid-up capital prescribed beyond practical banking needs.",
        ),
        S(
            "Nominee requirement explained",
            "You must appoint a nominee (natural person) who takes over if the sole member dies or becomes incapacitated. This is not a 'fake co-founder'—it is succession planning required by law.",
            "Choose someone trustworthy; document consent in INC-3 and nominee forms during incorporation.",
            callout="Founder tip: Inform your nominee—they may need to sign MCA forms during incorporation.",
        ),
        S(
            "Compliance reality check",
            "OPC follows Pvt Ltd–style ROC filings: AOC-4, MGT-7A (as applicable), board meetings, and mandatory audit. It is not 'LLP-light'—plan ₹20,000–₹40,000 annual compliance.",
            "When turnover exceeds ₹2 crore or paid-up capital crosses ₹50 lakh, convert to Pvt Ltd—budget conversion in year two if you are growing fast.",
        ),
        S(
            "Tax and fundraising",
            "OPC taxed like company; cannot easily issue ESOPs or multiple share classes. Convert to Pvt Ltd before angel round or ESOP pool.",
            "DPIIT Startup India recognition applies to OPC same as Pvt Ltd if innovation criteria met.",
        ),
        S(
            "When to skip OPC",
            "Side income under ₹10L with no liability risk may stay proprietorship until stable. If you already have a co-founder, go Pvt Ltd or LLP—OPC is strictly one member.",
            "Pelago advises OPC vs Pvt Ltd in one call based on your 24-month hiring and fundraising plan.",
        ),
    ],
)

# ─── 8. Partnership firm ───────────────────────────────────────────────────────

post(
    "partnership-firm-registration",
    "Is a Partnership Firm Right for Your Small Business?",
    "Registration",
    "5 min",
    "January 10, 2024",
    "Start trading in days with a partnership deed—or register with the Registrar of Firms so you can legally enforce contracts and sue delinquent clients.",
    "Fastest multi-founder setup",
    [
        "Unregistered partnerships cannot sue third parties for contract enforcement in many cases.",
        "Cheapest structure for family shops and local trading businesses with 2+ partners.",
        "Partnership deed should cover profit share, capital, retirement, and dispute resolution.",
        "Pelago drafts deeds and ROF registration where enforcement matters.",
    ],
    {
        "title": "Two partners, need to start this week?",
        "subtitle": "Partnership deed + optional Registrar of Firms filing.",
        "href": "/contact",
        "buttonLabel": "Draft partnership deed",
    },
    [
        S(
            "Partnership vs LLP vs Pvt Ltd",
            "Traditional partnership under Indian Partnership Act 1932 is still popular for kirana chains, trading firms, and professional duos who do not want MCA filings.",
            "Partners have unlimited joint liability unless limited partnership structures apply (rare). LLPs and Pvt Ltd cap liability—partnership does not.",
            "Structure | Liability | Equity investors | Compliance",
            "Partnership | Unlimited (general) | No | Income tax + deed",
            "LLP | Limited | No | MCA + tax",
            "Pvt Ltd | Limited | Yes | MCA + tax",
        ),
        S(
            "Registered vs unregistered",
            "You can operate on a notarised partnership deed alone. Registration with Registrar of Firms (ROF) under state law adds:",
            "• Power to file suits against third parties for firm debts.",
            "• Better standing with banks for partnership accounts.",
            "• Clear public record of partners and dissolution terms.",
            "Registration fees are low (state-specific, often under ₹5,000) but procedures vary—Maharashtra 'Gumasta' culture differs from Kerala ROF practice.",
            callout="Founder tip: If B2B clients ask for 'firm registration proof,' register—unregistered deeds alone may fail vendor KYC.",
        ),
        S(
            "What the deed must cover",
            "• Capital contribution and profit-sharing ratio (not always 50-50).",
            "• Roles, drawings, and banking signatories.",
            "• Admission and retirement of partners.",
            "• Dispute resolution and dissolution waterfall.",
            "Ambiguous deeds cause expensive litigation when one partner exits.",
        ),
        S(
            "Taxation",
            "Firm files return; partners receive shares taxed in their hands. No dividend distribution tax complexity like companies—simple for small profits.",
            "GST registration in firm name if turnover crosses threshold; partners need PAN linked.",
        ),
        S(
            "When to graduate out",
            "If you need VC, ESOPs, or limited liability, migrate to LLP or Pvt Ltd. Pelago maps conversion timelines before you sign large personal guarantees.",
        ),
    ],
)

# ─── 9. Post-incorporation ─────────────────────────────────────────────────────

post(
    "post-incorporation-compliance-checklist",
    "The Essential Post-Incorporation Compliance Checklist",
    "Tax & Compliance",
    "7 min",
    "January 08, 2024",
    "Your Certificate of Incorporation is day zero—miss auditor appointment, INC-20A, or GST activation and you risk penalties before your first sale.",
    "First 30 days done right",
    [
        "Appoint statutory auditor within 30 days of incorporation—mandatory even at zero revenue.",
        "Open current account and deposit subscribed capital before commencing business.",
        "File INC-20A within 180 days to declare commencement of business.",
        "Pelago runs post-COI checklists so founders ship product—not ROC notices.",
    ],
    {
        "title": "Just received your COI?",
        "subtitle": "Post-incorporation compliance pack: bank, GST, ROC, payroll.",
        "href": "/startup-bundle",
        "buttonLabel": "Get post-COI checklist",
    },
    [
        S(
            "Day 1–7: corporate hygiene",
            "COI in hand means the clock started. Board must appoint first auditor (Form ADT-1 within 15 days of appointment) within 30 days of incorporation.",
            "Apply for company PAN (often via SPICe+), TAN, and EPFO/ESIC if shown on certificate.",
            "• Issue share certificates and maintain register of members.",
            "• Adopt common seal only if needed—most startups skip physical seal.",
        ),
        S(
            "Banking and capital",
            "Open current account with COI, MOA, AOA, PAN, board resolution, and KYC of directors.",
            "Shareholders must transfer subscription money stated in MOA into this account—do not use personal UPI for company receipts.",
            "File INC-20A within 180 days certifying capital deposit and commencement—without it, borrowing and some contracts are legally risky.",
            callout="Founder tip: One board resolution template pack saves hours when banks ask for different wordings.",
        ),
        S(
            "Tax and labour registrations",
            "GST: Mandatory if turnover crosses threshold or inter-state supply from day one. Voluntary GST helps B2B invoicing with ITC.",
            "Professional tax (PTRC/PTEC) in states like Karnataka, Maharashtra, Kerala—employer registration before first salary.",
            "Shop & Establishment registration for physical office within state timelines.",
            "Pelago sequences registrations so payroll software and GSTIN align.",
        ),
        S(
            "First-year ROC calendar",
            "• First AGM within 9 months of FY end.",
            "• AOC-4 (financials) within 30 days of AGM.",
            "• MGT-7/7A (annual return) within 60 days of AGM.",
            "• DIR-3 KYC for directors by 30 September annually.",
            "Missing these triggers ₹100–₹500 per day penalties and director disqualification risk.",
        ),
        S(
            "Founder agreements and IP",
            "Sign founders' agreement with vesting. Assign all IP created before and after incorporation to the company via assignment deeds.",
            "Update website footer with CIN, registered office, and GSTIN when live.",
        ),
    ],
)

# ─── 10. DSC ───────────────────────────────────────────────────────────────────

post(
    "dsc-digital-signature-guide",
    "Digital Signature Certificate (DSC): Why Every Director Needs One",
    "Legal & IP",
    "4 min",
    "January 05, 2024",
    "Without a valid Class 3 DSC you cannot file SPICe+, GST, or income tax—budget ₹1,000–₹1,500 per director and renew before expiry.",
    "Get directors signing digitally",
    [
        "Class 3 DSC on USB token is standard for MCA and GST filings.",
        "Two-year validity typical; renew 30 days before expiry to avoid filing lockouts.",
        "Video KYC providers issue DSC in 1–3 days with correct documents.",
        "Pelago provisions DSCs during incorporation so SPICe+ is not delayed.",
    ],
    {
        "title": "Incorporating this month?",
        "subtitle": "DSC procurement + SPICe+ filing in one workflow.",
        "href": "/startup-bundle",
        "buttonLabel": "Add DSC to my package",
    },
    [
        S(
            "What a DSC is",
            "Digital Signature Certificate is your legally recognised electronic signature for government portals. Physical signatures are rejected for ROC, GST, income tax, and most tender submissions.",
            "Stored on USB e-token (ProxKey, etc.) with PIN—treat like a debit card.",
        ),
        S(
            "Class 3 and who needs it",
            "Class 3 offers highest assurance—required for company incorporation, DIN-related filings, and GST for authorised signatories.",
            "Every proposed director and subscriber typically needs DSC before SPICe+ or FiLLiP filing.",
            "• Company secretary or external filer may use their DSC only if formally authorised—founders should own their tokens.",
            callout="Founder tip: Keep one backup token if you have two directors—expired DSC on filing day is a common startup delay.",
        ),
        S(
            "Uses across your stack",
            "• MCA: SPICe+, DIR-3, MGT-14, annual forms.",
            "• GST: Registration, GSTR filings, e-way bill (where applicable).",
            "• Income tax: ITR verification, TDS returns.",
            "• Tenders: e-procurement portals.",
        ),
        S(
            "Application documents",
            "PAN, Aadhaar, photo, email/mobile verification. Organisational DSCs need additional board resolutions.",
            "Foreign directors follow certifying authority rules for passport-based KYC.",
        ),
        S(
            "Security practices",
            "Do not share PINs on Slack. Revoke tokens when directors exit. Pelago tracks expiry dates for retainer clients so compliance filings never stall on hardware.",
        ),
    ],
)

# ─── 11. Professional tax ──────────────────────────────────────────────────────

post(
    "professional-tax-kerala-india",
    "Understanding Professional Tax (PT) Obligations",
    "Tax & Compliance",
    "5 min",
    "January 03, 2024",
    "Deduct and deposit professional tax correctly in Kerala and other states—or face employee disputes and employer penalties that scale with headcount.",
    "Fix payroll tax in one pass",
    [
        "PT applies to salaried employees and practising professionals in many states—not 'only for doctors'.",
        "Employer registers PTRC, deducts monthly, files returns; company pays PTEC for its existence.",
        "Kerala slabs differ from Karnataka/Maharashtra—use state-specific rules.",
        "Pelago sets up PTRC/PTEC and syncs with payroll before first salary run.",
    ],
    {
        "title": "Hiring your first employee?",
        "subtitle": "Professional tax + PF/ESI registration aligned to your state.",
        "href": "/services",
        "buttonLabel": "Book payroll setup call",
    },
    [
        S(
            "What professional tax really is",
            "State-level tax on income from employment and professions. Article 276 of the Constitution caps how states charge—it is not a central GST-style tax.",
            "Despite the name, it hits regular employees, not only doctors and lawyers. Founders paying themselves salary must deduct PT where applicable.",
        ),
        S(
            "Employer obligations",
            "• Obtain PTRC (Professional Tax Registration Certificate) before employment starts.",
            "• Deduct PT from salary each month per state slab (often ₹100–₹2,500 annually spread monthly).",
            "• Deposit to state treasury and file periodic returns.",
            "• Pay PTEC (employer enrolment) annually for the entity itself in many states.",
            callout="Founder tip: In Kerala, verify latest slab notifications—slabs changed historically and payroll software defaults may be wrong.",
        ),
        S(
            "Kerala vs other states (snapshot)",
            "State | Notes for startups",
            "Kerala | Slab-based deduction; registration on state portal",
            "Karnataka | Slab up to ₹2,500 per year for higher salaries",
            "Maharashtra | ₹2,500 for many salaried employees (gender rules varied—check current)",
            "Telangana/AP | PT applies with local forms",
            "Remote teams: PT usually follows where employee works, not where startup is incorporated.",
        ),
        S(
            "Penalties and audits",
            "Late registration and non-deduction trigger interest and penalties; employees may question payslips during funding due diligence.",
            "Align PT with PF/ESI registration—Pelago bundles labour registrations for first hires.",
        ),
        S(
            "Exemptions and special cases",
            "Some categories (parents of disabled, certain disabilities) may claim exemptions—document proofs. Directors' remuneration may have different treatment—confirm with state rules and CA.",
        ),
    ],
)

# ─── 12. IEC ───────────────────────────────────────────────────────────────────

post(
    "iec-code-import-export",
    "How to Start an Import-Export Business: IEC Code Guide",
    "Registration",
    "5 min",
    "December 28, 2023",
    "Get your 10-digit IEC in 2–5 days to receive export dollars legally, claim SEIS/RODTEP benefits, and clear customs without courier rejections.",
    "Go global with IEC",
    [
        "IEC (Import Export Code) is mandatory for import/export of goods and most service exports.",
        "Lifetime validity—no renewal fee, but annual DGFT update (April–June) is mandatory.",
        "Link IEC with AD code at bank for foreign inward remittance settlement.",
        "Pelago files IEC and coordinates AD code with your current account bank.",
    ],
    {
        "title": "First international client?",
        "subtitle": "IEC + AD code + export documentation starter pack.",
        "href": "/contact",
        "buttonLabel": "Apply for IEC",
    },
    [
        S(
            "Who must have IEC",
            "Any business importing goods into India or exporting goods/services out needs IEC issued by DGFT. Freelancers receiving USD/EUR for export of services typically need IEC for FEMA-compliant FIRC and scheme benefits.",
            "No IEC means customs cannot clear your shipment and banks may flag foreign credits.",
        ),
        S(
            "Application process (online)",
            "Apply on DGFT portal with PAN, bank account, address proof, and digital signature.",
            "Fee historically ₹500; timeline 2–5 working days with clean documents.",
            "• Proprietorship uses owner PAN; company uses company PAN.",
            "• Branch addresses need clarity for inspection risk.",
            callout="Founder tip: File IEC before first FEMA inward remittance—banks ask for it during FIRC.",
        ),
        S(
            "After IEC: AD code and schemes",
            "Authorised Dealer (AD) code links your IEC to a specific bank branch for export proceeds. Without AD code registration at customs, remittance settlement delays.",
            "Schemes: SEIS for service exporters, RoDTEP for goods—eligibility requires IEC + compliant shipping bills/Softex.",
        ),
        S(
            "Annual update",
            "IEC must be updated every April–June even if zero trade—non-update can deactivate code and freeze shipments.",
            "Set calendar reminder with GST and ROC dates.",
        ),
        S(
            "Common mistakes",
            "• Using personal savings account without informing bank of export purpose.",
            "• Missing LUT for GST on exports (zero-rated supplies need bond/LUT).",
            "Pelago sets IEC, LUT, and GST export documentation together for SaaS and D2C exporters.",
        ),
    ],
)

# ─── 13. Shop Act ──────────────────────────────────────────────────────────────

post(
    "shop-and-establishment-act",
    "Shop & Establishment Act: Is it Mandatory for Your Office?",
    "Registration",
    "4 min",
    "December 25, 2023",
    "Register your office or store under the state Shop Act before labour inspectors or bank KYC reject you—often within 30 days of opening.",
    "Legitimise your workplace",
    [
        "Shop Act applies to most commercial establishments with employees—not only retail shops.",
        "State-specific names: Gumasta (Maharashtra), Form I (Karnataka), Kerala Shops Act registration.",
        "Covers working hours, overtime, leaves, and employment registers.",
        "Pelago files Shop Act alongside PF/GST when you open physical premises.",
    ],
    {
        "title": "Opening an office or storefront?",
        "subtitle": "Shop & Establishment + labour registrations in one pass.",
        "href": "/services",
        "buttonLabel": "Register my establishment",
    },
    [
        S(
            "Why banks and landlords ask for it",
            "Shop and Establishment registration is state law regulating working conditions. It applies to offices, IT parks, restaurants, and retail—not only 'shops'.",
            "Banks, commercial landlords, and franchise licensors often demand Shop Act certificate in KYC packs.",
        ),
        S(
            "What it regulates",
            "• Maximum working hours and overtime pay rules.",
            "• Weekly holidays and annual leave.",
            "• Employment registers, notices, and child labour prohibitions.",
            "• Women working night shifts (state-specific conditions).",
            "Compliance is labour-inspector territory—registration is the first gate.",
            callout="Founder tip: Co-working address? You still need registration for your operating state if employees work there—virtual office alone is not a free pass.",
        ),
        S(
            "Timeline and documents",
            "Typically register within 30 days of starting business in the state. Documents: PAN, address proof, rent agreement/NOC, employee count, employer ID.",
            "Fees are modest (₹200–₹5,000 state-dependent).",
        ),
        S(
            "Multi-state teams",
            "If you hire in another state, separate registration may be required there. Do not assume one Kerala registration covers Bangalore staff.",
        ),
        S(
            "Renewals and display",
            "Renew annually or as per state portal. Display certificate prominently; maintain muster rolls and wage registers for inspections.",
            "Pelago aligns Shop Act with professional tax and PF so your first HR hire is audit-ready.",
        ),
    ],
)

# ─── 14. FSSAI ─────────────────────────────────────────────────────────────────

post(
    "fssai-food-license-guide",
    "FSSAI License: A Complete Guide for Food Businesses",
    "Certifications",
    "6 min",
    "December 22, 2023",
    "Pick Basic, State, or Central FSSAI license by turnover—operate legally on Swiggy, Amazon, and retail shelves without delisting risk.",
    "Food business? License first",
    [
        "Every Food Business Operator needs FSSAI—home bakers included above petty limits.",
        "14-digit license number must appear on labels and premises.",
        "Central license for large manufacturers, importers, and e-commerce at scale.",
        "Pelago classifies license type and files on FoSCoS portal.",
    ],
    {
        "title": "Launching a food brand?",
        "subtitle": "FSSAI registration + label compliance review.",
        "href": "/services",
        "buttonLabel": "Get FSSAI license",
    },
    [
        S(
            "FSSAI in one minute",
            "Food Safety and Standards Authority of India regulates all food businesses. Operating without FSSAI risks penalties, platform delisting, and product seizure.",
            "Apply via FoSCoS portal with Form A (registration) or Form B (license).",
        ),
        S(
            "Which license tier",
            "Tier | Turnover (typical) | Form",
            "Basic Registration | Up to ₹12 lakh/year | Form A",
            "State License | ₹12 lakh – ₹20 crore | Form B",
            "Central License | Above ₹20 crore or specific activities | Form B central",
            "Importers, 100% export units, airports, and e-commerce aggregators at scale need Central license regardless of turnover.",
            callout="Founder tip: D2C brands selling nationwide should plan State or Central before marketplaces ask during onboarding.",
        ),
        S(
            "Documents and inspections",
            "Blueprint/layout for manufacturing units, water test reports, NOC from municipality, list of products, and responsible person qualification.",
            "Inspections may follow for high-risk categories. Maintain FSMS plan and recall procedure for audits.",
        ),
        S(
            "Labelling rules",
            "Display FSSAI number on packages and marketing. Allergen declarations, veg/non-veg logos, and nutritional labelling rules apply by category.",
            "Marketplace delisting for label errors is common—cheaper to fix pre-launch.",
        ),
        S(
            "Renewal",
            "Basic: 1–5 years depending on option; State/Central typically annual renewal with fee. Pelago tracks expiry so cloud kitchens do not miss renewals during busy seasons.",
        ),
    ],
)

# ─── 15. ESOP ──────────────────────────────────────────────────────────────────

post(
    "esop-employee-stock-options",
    "Retain Top Talent: How to Structure an Employee Stock Option Plan (ESOP)",
    "Startup",
    "7 min",
    "December 20, 2023",
    "Offer ownership without crushing cash burn—structure vesting, pool size, and exercise price so ESOPs help hiring and survive investor due diligence.",
    "Design ESOP without cap table shock",
    [
        "ESOP pool of 10–15% pre-Series A is common; document in SHA and board resolutions.",
        "Standard vesting: 4 years with 1-year cliff aligns incentives.",
        "Exercise price must follow Companies Act and FEMA rules for foreign employees.",
        "Pelago drafts ESOP scheme, grant letters, and cap table models.",
    ],
    {
        "title": "Hiring senior talent on startup salary?",
        "subtitle": "ESOP policy + board approvals + cap table hygiene.",
        "href": "/startup-bundle",
        "buttonLabel": "Structure our ESOP",
    },
    [
        S(
            "Why ESOPs exist",
            "Early startups cannot match FAANG salaries. Employee Stock Option Plans grant the right to buy shares later at a predetermined exercise price—aligning wealth with company outcome.",
            "Only Pvt Ltd (and some structures) issue ESOPs cleanly; LLPs use profit share instead.",
        ),
        S(
            "Key terms founders must understand",
            "• Grant date: Board approves specific employee grants.",
            "• Vesting: Earn options over time (e.g. 25% after year 1, monthly thereafter).",
            "• Cliff: Zero vest before 12 months—protects against quick leavers.",
            "• Exercise price: Fair market value or discounted per law and FMV report.",
            "• Pool: Unallocated shares reserved—dilutes founders when investors join if not planned.",
            callout="Founder tip: Model dilution with and without 15% pool before signing term sheets—surprises kill founder morale.",
        ),
        S(
            "Legal and tax mechanics",
            "Companies Act 2013 rules on ESOP approval (special resolution, sweat equity limits). Employees pay perquisite tax on exercise; capital gains on sale.",
            "FMV from merchant banker or CA valuation required for compliance. Stock appreciation rights (SARs) are alternative if cash exercise is hard.",
        ),
        S(
            "Investor perspective",
            "Angels and VCs review ESOP scheme, acceleration clauses, and leaking grants to advisors without vesting. Clean cap table in Carta or spreadsheet is mandatory.",
            "Refresh pool at Series A—negotiate top-up so hiring does not come only from founder dilution.",
        ),
        S(
            "Operational rollout",
            "Board approves scheme → grant letters → explain tax at exercise → exit process (unvested lapse, vested window on termination).",
            "Pelago implements ESOP policy and coordinates with counsel on SHA amendments.",
        ),
    ],
)

# ─── 16. Section 8 ─────────────────────────────────────────────────────────────

post(
    "section-8-ngo-registration",
    "Starting a Non-Profit? Guide to Section 8 Company Registration",
    "Registration",
    "6 min",
    "December 18, 2023",
    "Build donor trust with a Section 8 company—MCA-regulated, no dividends, and eligible for 12A/80G when you are ready for CSR and institutional grants.",
    "NGO structure that scales trust",
    [
        "Section 8 companies cannot distribute profits to members—surplus reinvested in objects.",
        "Higher credibility with CSR donors than unregistered trusts in many programs.",
        "Requires licence from MCA before incorporation (Form INC-12).",
        "Pelago handles licence, incorporation, and 12A/80G coordination with CAs.",
    ],
    {
        "title": "Starting a social enterprise?",
        "subtitle": "Section 8 incorporation + 12A/80G roadmap.",
        "href": "/contact",
        "buttonLabel": "Start Section 8 setup",
    },
    [
        S(
            "Section 8 vs trust vs society",
            "Section 8 company (Companies Act 2013) is for charitable objects—arts, science, education, sports, environment. It operates like a company but without profit distribution.",
            "Trusts are simpler but slower to change; societies democratic but less familiar to corporate donors.",
            "Factor | Section 8 | Trust",
            "Regulator | MCA | State charity commissioner",
            "CSR appeal | High | Medium",
            "Equity investment | Not for profit distribution | N/A",
        ),
        S(
            "Licence and incorporation flow",
            "• File INC-12 for licence with MOA objects, projected income/expense, promoter background.",
            "• After approval, file SPICe+ with Section 8-specific attachments.",
            "• No 'Ltd' suffix—names often include Foundation, Association, etc.",
            "Timeline commonly 4–8 weeks including MCA scrutiny.",
            callout="Founder tip: Draft objects clause tightly—vague 'social work' invites MCA objections.",
        ),
        S(
            "12A and 80G registrations",
            "12A exempts organisation income tax; 80G lets donors deduct donations (with limits). Applied via Income Tax Department after incorporation.",
            "CSR-eligible companies prefer 80G and clean FCRA (if foreign funds) before large grants.",
        ),
        S(
            "Governance essentials",
            "Board meetings, conflict of interest policy, and project-wise fund tracking are donor due diligence items.",
            "Pay reasonable salaries—excessive related-party payments trigger scrutiny.",
        ),
        S(
            "When not to choose Section 8",
            "For-profit social ventures wanting dividends should use regular Pvt Ltd with impact reporting, not Section 8.",
            "Pelago advises structure based on funding source (CSR vs impact VC vs grants).",
        ),
    ],
)

# ─── 17. Nidhi ─────────────────────────────────────────────────────────────────

post(
    "nidhi-company-registration",
    "Nidhi Company Registration: Starting a Lending Business",
    "Registration",
    "6 min",
    "December 15, 2023",
    "Start a members-only lending society with ₹10 lakh minimum capital—without RBI NBFC licence, if you stay inside Nidhi rules.",
    "Members-only lending model",
    [
        "Nidhi companies borrow and lend only among registered members.",
        "Minimum 7 members, 3 directors, ₹10 lakh net owned funds to start.",
        "Cannot advertise to public or run current accounts for non-members.",
        "Pelago incorporates Nidhi and sets first-year NDH compliance calendar.",
    ],
    {
        "title": "Building a cooperative credit model?",
        "subtitle": "Nidhi incorporation + member onboarding compliance.",
        "href": "/contact",
        "buttonLabel": "Discuss Nidhi setup",
    },
    [
        S(
            "What a Nidhi company is",
            "Nidhi (mutual benefit society) encourages thrift among members—accepts deposits and lends only to members, secured primarily against gold/property.",
            "Cheaper entry than NBFC (which needs crores of capital and RBI approval).",
        ),
        S(
            "Capital and membership rules",
            "• Minimum paid-up equity ₹10 lakh.",
            "• At least 200 members within 1 year of incorporation (NDH rules).",
            "• Net owned funds requirements increase with business—monitor NDH-4 filings.",
            "• Branches allowed after profit and NOF thresholds.",
            callout="Founder tip: Member KYC and loan documentation are your audit shield—treat like a small bank.",
        ),
        S(
            "Restrictions you cannot ignore",
            "• No advertising for deposits from public.",
            "• No current accounts for non-members.",
            "• Cannot partner with fintech apps for public deposit mobilisation.",
            "• Vehicle finance and unsecured personal loans are restricted—check latest NDH rules.",
        ),
        S(
            "Compliance calendar",
            "File NDH-1, NDH-2, NDH-3 as applicable; maintain statutory registers; board meetings quarterly.",
            "Penalties for treating Nidhi like an NBFC marketing on Instagram are severe.",
        ),
        S(
            "When to choose NBFC instead",
            "If you need public deposits, pan-India app, or unsecured consumer lending at scale, Nidhi is wrong vehicle—plan RBI NBFC route with capital advisors.",
            "Pelago incorporates Nidhi for community cooperatives and gold-loan societies in Kerala and beyond.",
        ),
    ],
)

# ─── 18. Name change ───────────────────────────────────────────────────────────

post(
    "company-name-change-procedure",
    "Business Pivots: How to Legally Change Your Company Name",
    "Legal & IP",
    "4 min",
    "December 12, 2023",
    "Rebrand without legal loose ends—reserve the new name, pass special resolution, file MGT-14 and INC-24, then update PAN, GST, and bank in one sweep.",
    "Rebrand with clean ROC records",
    [
        "RUN name reservation must approve new name before EGM.",
        "Special resolution and MGT-14 within 30 days of resolution.",
        "INC-24 with altered MOA for new name certificate.",
        "Pelago manages ROC filings and bank/GST amendment letters.",
    ],
    {
        "title": "Pivoting your brand name?",
        "subtitle": "End-to-end company name change with tax and bank updates.",
        "href": "/contact",
        "buttonLabel": "Plan name change",
    },
    [
        S(
            "When startups rename",
            "Pivot, merger of brands, or investor trademark conflict drives name changes. Customers see marketing rebrand; lawyers see ROC, tax, and contract updates.",
            "Skipping MCA steps leaves you invoicing under a name the government does not recognise.",
        ),
        S(
            "Step-by-step ROC process",
            "• Board meeting to propose change and authorise RUN filing.",
            "• Reserve name via RUN or integrated flow—have 2–3 options.",
            "• EGM with special resolution (Section 114).",
            "• File MGT-14 within 30 days.",
            "• File INC-24 with altered MOA and resolution.",
            "• Receive fresh COI with new name.",
            callout="Founder tip: Pause new contracts for 2 weeks during change—or sign under old name with assignment clause.",
        ),
        S(
            "After COI: mandatory updates",
            "• PAN name change application on NSDL.",
            "• GST amendment on portal.",
            "• Bank account name change with fresh COI and board resolution.",
            "• Update IEC, PF, ESIC, insurance, and active customer contracts.",
        ),
        S(
            "IP and marketing",
            "File new trademark if brand word changed; assign old TM to company if keeping rights.",
            "Update website CIN display, email footers, and App Store listings.",
        ),
        S(
            "Timeline and cost",
            "ROC leg: 3–6 weeks. Bank and GST: 2–4 weeks parallel. Budget ₹15,000–₹40,000 all-in with professional fees.",
            "Pelago runs rename playbooks so payroll and GST filings do not break mid-month.",
        ),
    ],
)

# ─── 19. Fast track exit ───────────────────────────────────────────────────────

post(
    "fast-track-exit-company-closure",
    "Fast Track Exit: How to Legally Close a Private Limited Company",
    "Tax & Compliance",
    "5 min",
    "December 10, 2023",
    "Strike off a defunct Pvt Ltd via FTE/STK-2 instead of letting ROC penalties stack—only if you have zero assets, zero liabilities, and clean filings.",
    "Close dormant companies cleanly",
    [
        "FTE suits companies inactive 2+ years or never commenced business within 1 year.",
        "File STK-2 with indemnity bond and statement of accounts.",
        "All directors must consent; clear tax and ROC defaults first.",
        "Pelago evaluates strike-off vs voluntary liquidation before you apply.",
    ],
    {
        "title": "Stuck with a zero-revenue company?",
        "subtitle": "Strike-off eligibility review + STK-2 filing.",
        "href": "/contact",
        "buttonLabel": "Review company closure",
    },
    [
        S(
            "Why dormant companies hurt founders",
            "Inactive Pvt Ltd still needs annual ROC filings and tax returns. Penalties accumulate; directors risk disqualification under Section 164.",
            "Closing cleanly preserves your ability to start the next company without MCA flags.",
        ),
        S(
            "Fast Track Exit (FTE) eligibility",
            "• Not commenced business within 1 year of incorporation, OR",
            "• No business activity for 2 preceding financial years and no assets/liabilities.",
            "• All shareholders agree; company not under litigation.",
            "• GST, income tax, and ROC filings should be current or regularised first.",
            callout="Founder tip: 'Zero business' still requires filed NIL returns—strike-off with defaults gets rejected.",
        ),
        S(
            "STK-2 application pack",
            "• Board resolution and shareholder affidavit.",
            "• Indemnity bond from directors.",
            "• Statement of accounts certified by CA (zero assets/liabilities).",
            "• Publish notice if required; ROC publishes in gazette for objections.",
            "Timeline often 3–6 months including objection window.",
        ),
        S(
            "When FTE is not enough",
            "Companies with creditors, active litigation, or assets need voluntary liquidation under IBC rules—more expensive but proper.",
            "Do not transfer assets out then apply strike-off—that is fraud.",
        ),
        S(
            "Post-strike-off",
            "PAN becomes inactive; bank account must close. Directors should keep STK-2 acknowledgement for future MCA queries.",
            "Pelago audits eligibility before filing so you do not waste months on rejected applications.",
        ),
    ],
)

# ─── 20. Annual return ─────────────────────────────────────────────────────────

post(
    "annual-return-filing-guide",
    "Annual Return (MGT-7 & AOC-4) Filing Guide",
    "Tax & Compliance",
    "6 min",
    "December 08, 2023",
    "File AOC-4 and MGT-7 on time every year—even at zero revenue—or directors face disqualification and due diligence red flags.",
    "Never miss MCA annual filings",
    [
        "First AGM within 9 months of financial year end (31 March for most).",
        "AOC-4 within 30 days of AGM attaches audited financials.",
        "MGT-7/7A within 60 days of AGM captures shareholding and meetings.",
        "Pelago retainer covers AGM, boards, and ROC filings end-to-end.",
    ],
    {
        "title": "Annual compliance overdue?",
        "subtitle": "Catch-up filings, AGM, and director KYC restoration.",
        "href": "/services",
        "buttonLabel": "Book compliance call",
    },
    [
        S(
            "Why zero-revenue companies still file",
            "Pvt Ltd under Companies Act 2013 must file annual financial statements and annual return irrespective of turnover. 'We did no business' is not an exemption—it's a NIL filing.",
            "Investors and acquirers pull MCA master data—gaps kill deals.",
        ),
        S(
            "AOC-4: financial statements",
            "Board approves financials; auditors sign report (mandatory audit for Pvt Ltd). File AOC-4 within 30 days of AGM attaching balance sheet, P&L, auditor report, and director report.",
            "XBRL filing applies above turnover thresholds—verify each year.",
            callout="Founder tip: Close books by May for March year-end—rushing September AGM invites errors.",
        ),
        S(
            "MGT-7 / MGT-7A: annual return",
            "Discloses shareholding, debentures, directors, and AGM date. Due within 60 days of AGM.",
            "Small companies and OPC may use MGT-7A—confirm eligibility annually.",
        ),
        S(
            "Adjacent annual obligations",
            "• DIR-3 KYC for all directors by 30 September.",
            "• DPT-3 for outstanding loans/deposits (even if NIL).",
            "• Income tax return and tax audit if turnover crosses limits.",
            "• GST annual return GSTR-9 if registered.",
        ),
        S(
            "Penalties and remediation",
            "Additional fees escalate with delay; persistent default leads to company strike-off and director disqualification for 5 years.",
            "Pelago's annual compliance retainer schedules AGM, prepares board minutes, and files AOC-4/MGT-7 so founders focus on revenue—not MCA portals.",
        ),
    ],
)

from blog_posts_alignment import register_alignment_posts

register_alignment_posts(post, S)


def write_blog_ts() -> None:
    out = ROOT / "src/lib/blog.ts"
    lines = [
        "export type BlogCategory =",
        '  | "All"',
        '  | "Tax & Compliance"',
        '  | "Registration"',
        '  | "Startup"',
        '  | "Certifications"',
        '  | "Legal & IP";',
        "",
        "export type BlogSection = { heading: string; paragraphs: string[]; callout?: string };",
        "",
        "export type BlogPost = {",
        "  slug: string;",
        "  title: string;",
        "  category: Exclude<BlogCategory, \"All\">;",
        "  readTime: string;",
        "  date: string;",
        "  excerpt: string;",
        "  valueLabel: string;",
        "  keyTakeaways: string[];",
        "  cta: { title: string; subtitle: string; href: string; buttonLabel: string };",
        "  sections: BlogSection[];",
        "};",
        "",
        'export const blogCategories: BlogCategory[] = ["All", "Tax & Compliance", "Registration", "Startup", "Certifications", "Legal & IP"];',
        "",
        "export const blogPosts: BlogPost[] = "
        + json.dumps(POSTS, indent=2, ensure_ascii=False)
        + ";",
        "",
    ]
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out} ({len(POSTS)} posts)")


def main() -> None:
    assert len(POSTS) == 34, f"Expected 34 posts, got {len(POSTS)}"
    write_blog_ts()
    print("Success: generate_enriched_blog.py completed.")


if __name__ == "__main__":
    main()
