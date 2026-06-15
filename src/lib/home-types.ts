import type { ImagePromptKey } from "@/lib/image-prompts";
import { comparison, processSteps } from "@/lib/data";
import {
  homeServiceHighlights,
  homeWhyBlocks,
  comparisonScenario,
  teamTrust,
} from "@/lib/home-content";

export type HeroJourneyStatus = "complete" | "active" | "upcoming";

export type HeroJourneyStep = {
  title: string;
  detail: string;
  status: HeroJourneyStatus;
};

export type HomeWhyBlock = {
  eyebrow: string;
  title: string;
  body: string;
  imageKey: ImagePromptKey;
  points: string[];
  href: string;
  cta: string;
};

export type HomeProcessStep = {
  step: string;
  title: string;
  desc: string;
  deliverable: string;
};

export type HomeServiceHighlight = {
  sectionId: string;
  fromPrice: string;
  timeline: string;
};

export type HeroTrustIcon = "users" | "star" | "shield";

export type HeroTrustItem = {
  icon: HeroTrustIcon;
  value: string;
  label: string;
};

export type HomePageContent = {
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    trustItems: HeroTrustItem[];
  };
  whySection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    blocks: HomeWhyBlock[];
  };
  processSteps: HomeProcessStep[];
  comparison: {
    traditional: string[];
    pelago: string[];
    scenarioTraditional: string;
    scenarioPelago: string;
  };
  teamTrust: {
    title: string;
    subtitle: string;
    points: string[];
  };
  serviceHighlights: HomeServiceHighlight[];
  cta: {
    title: string;
    subtitle: string;
  };
};

export const staticHomePage: HomePageContent = {
  hero: {
    badge: "Startup India certified · Kozhikode",
    headlineLine1: "Build your company.",
    headlineLine2: "We'll handle compliance.",
    description:
      "From incorporation to annual filing, one advisor on WhatsApp, every step of the way.",
    trustItems: [
      { icon: "users", value: "6,000+", label: "Founders served" },
      { icon: "star", value: "4.9/5", label: "Client rating" },
      { icon: "shield", value: "Startup India", label: "Certified" },
    ],
  },
  whySection: {
    eyebrow: "Why founders choose us",
    title: "Professional compliance, without the consultant runaround",
    subtitle:
      "The clarity and polish you expect from a modern firm — with a named advisor and WhatsApp updates from Kozhikode.",
    blocks: homeWhyBlocks.map((b) => ({ ...b, points: [...b.points] })),
  },
  processSteps: processSteps.map((s) => ({ ...s })),
  comparison: {
    traditional: [...comparison.traditional],
    pelago: [...comparison.pelago],
    scenarioTraditional: comparisonScenario.traditional,
    scenarioPelago: comparisonScenario.pelago,
  },
  teamTrust: {
    title: teamTrust.title,
    subtitle: teamTrust.subtitle,
    points: [...teamTrust.points],
  },
  serviceHighlights: Object.entries(homeServiceHighlights).map(
    ([sectionId, value]) => ({
      sectionId,
      fromPrice: value.fromPrice,
      timeline: value.timeline,
    }),
  ),
  cta: {
    title: "Not sure what your business needs?",
    subtitle:
      "Tell us your stage — we'll recommend the right filings. No pressure, reply within 2 hours.",
  },
};

export function serviceHighlightsMap(
  highlights: HomeServiceHighlight[],
): Record<string, { fromPrice: string; timeline: string }> {
  return Object.fromEntries(
    highlights.map((h) => [h.sectionId, { fromPrice: h.fromPrice, timeline: h.timeline }]),
  );
}
