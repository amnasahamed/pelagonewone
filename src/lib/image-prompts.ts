/** Image generation prompts — replace placeholders in /public/images when ready */

export const imagePrompts = {
  hero: {
    path: "/images/hero-founder.jpg",
    prompt:
      "Creative modern hero illustration for Indian startup compliance: abstract geometric documents, shield checkmark, and growth motif in navy (#121d40) and blue (#3a67d8) with cream highlights. Contemporary editorial 3D-flat style, subtle grain, no text or logos, trustworthy fintech-consultancy mood",
    aspect: "4:5",
  },
  aboutTeam: {
    path: "/images/about-team.jpg",
    prompt:
      "Professional team photo, small Indian business consultancy of 4 people in smart casual at HiLITE Business Park office, diverse ages, warm natural light, candid not posed corporate cliché, Kerala India",
    aspect: "4:3",
  },
  aboutOffice: {
    path: "/images/about-office.jpg",
    prompt:
      "Architectural interior shot of modern business park office corridor in Kozhikode, clean lines, plants, soft daylight, no people, premium but approachable",
    aspect: "3:2",
  },
  servicesStart: {
    path: "/images/services-incorporation.jpg",
    prompt:
      "Close-up hands stamping approved company registration certificate on wooden desk, Indian context, teal accent folder, crisp documentary photography",
    aspect: "16:10",
  },
  servicesTax: {
    path: "/images/services-tax.jpg",
    prompt:
      "Organized desk with GST return forms, calculator, laptop showing spreadsheet, Indian rupee notes subtle in background, calm focused mood, overhead angle",
    aspect: "16:10",
  },
  contact: {
    path: "/images/contact-consultation.jpg",
    prompt:
      "Friendly consultant on video call with startup founder, split feeling of connection, laptop and notebook, warm office, authentic Indian business setting",
    aspect: "16:9",
  },
  careers: {
    path: "/images/careers-culture.jpg",
    prompt:
      "Young professionals collaborating at whiteboard with compliance workflow diagram, energetic startup office India, natural light, diverse team",
    aspect: "16:9",
  },
  blogDefault: {
    path: "/images/blog-default.jpg",
    prompt:
      "Abstract minimal composition, Indian startup paperwork and coffee cup on marble surface, soft shadows, editorial product photography, muted teal and cream palette",
    aspect: "16:9",
  },
} as const;

export type ImagePromptKey = keyof typeof imagePrompts;
