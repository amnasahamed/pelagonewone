/** Site imagery — real Pelago photos from pelagoconsultants.com */

export const imagePrompts = {
  hero: {
    path: "/office/office-3.jpg",
    prompt:
      "Pelago leadership team group portrait — five founders in business casual in Kozhikode",
    aspect: "4:5",
  },
  aboutTeam: {
    path: "/office/office-3.jpg",
    prompt:
      "Pelago leadership team group portrait — five founders in business casual in Kozhikode",
    aspect: "4:3",
  },
  aboutOffice: {
    path: "/office/office-2.jpg",
    prompt: "Pelago team collaborating at shared desks at the Kozhikode office",
    aspect: "3:2",
  },
  servicesStart: {
    path: "/office/office-1.jpg",
    prompt:
      "Pelago workspace with compliance documents on screen and motivational quote frames on the wall",
    aspect: "16:10",
  },
  servicesTax: {
    path: "/office/office-6.jpg",
    prompt:
      "Pelago advisor reviewing financial ratios and cash-flow data on a laptop at the Kozhikode office",
    aspect: "16:10",
  },
  contact: {
    path: "/office/office-5.jpg",
    prompt:
      "Pelago advisors in a client strategy meeting around a desk at the Kozhikode office",
    aspect: "16:9",
  },
  careers: {
    path: "/office/office-4.jpg",
    prompt: "Pelago team working at open-plan desks at the Kozhikode office",
    aspect: "16:9",
  },
  blogDefault: {
    path: "/office/office-7.jpg",
    prompt:
      "Pelago consultant analyzing market charts on a MacBook at the Kozhikode office",
    aspect: "16:9",
  },
} as const;

export type ImagePromptKey = keyof typeof imagePrompts;
