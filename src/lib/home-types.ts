import type { ImagePromptKey } from "@/lib/image-prompts";
import { comparison, processSteps } from "@/lib/data";
import {
  heroOutcomePills,
  heroJourneySteps,
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

export type HomePageContent = {
  hero: {
    badge: string;
    headlineHighlight: string;
    headlineSub: string;
    description: string;
    pills: string[];
    journeySteps: HeroJourneyStep[];
    journeyFooter: string;
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
    headlineHighlight: "10–15 days",
    headlineSub: "One advisor. Fixed quote.",
    description:
      "Pvt Ltd, GST, and ROC—with government fees itemised and updates on WhatsApp from our Kozhikode team.",
    pills: [...heroOutcomePills],
    journeySteps: heroJourneySteps.map((s) => ({ ...s })),
    journeyFooter: "One advisor on WhatsApp from quote to filing.",
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
