export type LearnLesson = { id: string; title: string; duration: string; summary: string; };
export type LearnModule = { num: number; title: string; lessons: number; duration: string; items: LearnLesson[]; };

export const learnStats = { totalLessons: 25, totalModules: 8, totalDuration: "~3h 55m", nextLesson: "Choosing the Right Structure" } as const;

export const learnModules: LearnModule[] = [
  {
    "num": 1,
    "title": "Incorporation & Setup",
    "lessons": 5,
    "duration": "36 min",
    "items": [
      {
        "id": "choosing-structure",
        "title": "Choosing the Right Structure",
        "duration": "8 min",
        "summary": "Your legal structure decides how much personal risk you carry, how investors can buy in, how much compliance you owe each year, and even how customers perceive you."
      },
      {
        "id": "incorporation-process",
        "title": "The Incorporation Process & Costs",
        "duration": "10 min",
        "summary": "Most new Private Limited companies in India are incorporated through MCA's SPICe+ form on the Ministry of Corporate Affairs portal."
      },
      {
        "id": "dipp-recognition",
        "title": "DIPP Recognition & Startup India",
        "duration": "7 min",
        "summary": "Department for Promotion of Industry and Internal Trade (DPIIT) recognition labels your entity a 'startup' under Startup India policy."
      },
      {
        "id": "cofounders",
        "title": "Co-Founders & Partner Addition",
        "duration": "6 min",
        "summary": "Equity split is a proxy for risk, role, capital, and IP contributed. 50-50 is fine when vesting, decision rights, and exit scenarios are documented."
      },
      {
        "id": "shop-establishment",
        "title": "Shop & Establishment Act",
        "duration": "5 min",
        "summary": "Shop and Establishment (S&E) registration is a state-level licence for any commercial establishment — office, store, warehouse, co-working seat used as registered workplace."
      }
    ]
  },
  {
    "num": 2,
    "title": "Financial Basics",
    "lessons": 4,
    "duration": "37 min",
    "items": [
      {
        "id": "unit-economics",
        "title": "Unit Economics 101",
        "duration": "10 min",
        "summary": "Do you make money on each customer or order after direct costs? If not, scale makes losses worse, not better."
      },
      {
        "id": "burn-rate",
        "title": "Burn Rate & Runway",
        "duration": "8 min",
        "summary": "Gross burn: total cash out each month (salaries, rent, tools, marketing)."
      },
      {
        "id": "cash-flows",
        "title": "Projecting Cash Flows",
        "duration": "12 min",
        "summary": "You can show accounting profit and still fail because GST, TDS, advance tax, and vendor advances drain cash earlier than revenue lands."
      },
      {
        "id": "bootstrapping",
        "title": "Bootstrapping Smartly",
        "duration": "7 min",
        "summary": "Bootstrapping means growth funded by customers and discipline, not 'no budget for compliance.'"
      }
    ]
  },
  {
    "num": 3,
    "title": "Compliance & Taxes",
    "lessons": 4,
    "duration": "39 min",
    "items": [
      {
        "id": "gst-basics",
        "title": "GST Basics for Founders",
        "duration": "12 min",
        "summary": "Turnover above ₹20 lakh (₹10 lakh in special category states) in a financial year for goods/services."
      },
      {
        "id": "tds",
        "title": "TDS (Tax Deducted at Source)",
        "duration": "10 min",
        "summary": "Government collects tax at source on certain payments so evasion is harder."
      },
      {
        "id": "pf-esi",
        "title": "PF & ESI Compliance",
        "duration": "8 min",
        "summary": "EPF (PF): generally mandatory when you have 20+ employees; voluntary registration possible earlier for benefits."
      },
      {
        "id": "roc-filings",
        "title": "ROC Annual Filings",
        "duration": "9 min",
        "summary": "AOC-4: financial statements attachment within 30 days of AGM. MGT-7, DIR-3 KYC, and on-time filings keep your company in good standing with MCA."
      }
    ]
  },
  {
    "num": 4,
    "title": "Funding & Equity",
    "lessons": 3,
    "duration": "37 min",
    "items": [
      {
        "id": "funding-landscape",
        "title": "The Funding Landscape",
        "duration": "10 min",
        "summary": "Pre-seed: angels, friends & family, micro-VCs — idea + team, ₹25L–₹2Cr typical."
      },
      {
        "id": "investment-instruments",
        "title": "Investment Instruments",
        "duration": "12 min",
        "summary": "Founders and investors hold equity with voting and dividend rights per SHA."
      },
      {
        "id": "term-sheet",
        "title": "Term Sheet Jargon",
        "duration": "15 min",
        "summary": "Pre-money valuation: company value before new money."
      }
    ]
  },
  {
    "num": 5,
    "title": "Intellectual Property",
    "lessons": 2,
    "duration": "22 min",
    "items": [
      {
        "id": "trademarking",
        "title": "Trademarking Your Brand",
        "duration": "10 min",
        "summary": "Word mark for brand name; logo as separate device mark if design is distinctive."
      },
      {
        "id": "patents-copyrights",
        "title": "Patents & Copyrights",
        "duration": "12 min",
        "summary": "Copyright exists on creation for code, blogs, videos, designs."
      }
    ]
  },
  {
    "num": 6,
    "title": "Hiring & Human Resources",
    "lessons": 3,
    "duration": "27 min",
    "items": [
      {
        "id": "salary-ctc",
        "title": "Structuring Salary (CTC)",
        "duration": "8 min",
        "summary": "Cost to Company = Gross salary + employer PF + gratuity accrual + insurance + other benefits."
      },
      {
        "id": "esops",
        "title": "ESOPs: The Golden Handcuff",
        "duration": "12 min",
        "summary": "Startups cannot always match cash from Flipkart or TCS — equity aligns long-term upside."
      },
      {
        "id": "consultant-employee",
        "title": "Consultant vs Employee",
        "duration": "7 min",
        "summary": "Employee: control over how/when/where work is done, part of organisation, PF/TDS 192."
      }
    ]
  },
  {
    "num": 7,
    "title": "Growth & Marketing",
    "lessons": 3,
    "duration": "27 min",
    "items": [
      {
        "id": "b2b-sales",
        "title": "B2B Sales in India",
        "duration": "10 min",
        "summary": "Decisions involve finance, IT, legal, and sometimes procurement — long cycles (3–9 months)."
      },
      {
        "id": "whatsapp-marketing",
        "title": "WhatsApp Marketing",
        "duration": "8 min",
        "summary": "500M+ users in India; WhatsApp Business API with opt-in beats spray-and-pray email for SMB growth."
      },
      {
        "id": "influencer-marketing",
        "title": "Influencer Marketing on a Budget",
        "duration": "9 min",
        "summary": "Micro-influencers (10k–100k) in a tight niche usually beat celebrity spend — track engagement rate and CAC, not followers alone."
      }
    ]
  },
  {
    "num": 8,
    "title": "Exits & Winding Up",
    "lessons": 1,
    "duration": "10 min",
    "items": [
      {
        "id": "strike-off",
        "title": "Strike Off (FTE)",
        "duration": "10 min",
        "summary": "Strike off is for dormant or failed startups with no assets/liabilities — not a substitute for selling the business."
      }
    ]
  }
];
