import type { ImagePromptKey } from "@/lib/image-prompts";
import type { HomePageContent, HeroJourneyStatus } from "@/lib/home-types";
import { staticHomePage } from "@/lib/home-types";
import { fetchFromCms } from "@/lib/cms/fetch";
import { homePageQuery } from "@/sanity/lib/queries";

type SanityHomePage = {
  hero?: {
    badge?: string;
    headlineHighlight?: string;
    headlineSub?: string;
    description?: string;
    pills?: string[];
    journeySteps?: Array<{ title?: string; detail?: string; status?: HeroJourneyStatus }>;
    journeyFooter?: string;
  };
  whySection?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    blocks?: Array<{
      eyebrow?: string;
      title?: string;
      body?: string;
      imageKey?: string;
      points?: string[];
      href?: string;
      cta?: string;
    }>;
  };
  processSteps?: Array<{
    step?: string;
    title?: string;
    desc?: string;
    deliverable?: string;
  }>;
  comparison?: {
    traditional?: string[];
    pelago?: string[];
    scenarioTraditional?: string;
    scenarioPelago?: string;
  };
  teamTrust?: {
    title?: string;
    subtitle?: string;
    points?: string[];
  };
  serviceHighlights?: Array<{
    sectionId?: string;
    fromPrice?: string;
    timeline?: string;
  }>;
  cta?: {
    title?: string;
    subtitle?: string;
  };
};

const VALID_IMAGE_KEYS = new Set<ImagePromptKey>([
  "servicesStart",
  "contact",
  "aboutTeam",
  "aboutOffice",
  "servicesTax",
  "careers",
  "hero",
  "blogDefault",
]);

function isValidImageKey(key: string | undefined): key is ImagePromptKey {
  return Boolean(key && VALID_IMAGE_KEYS.has(key as ImagePromptKey));
}

function normalizeHomePage(raw: SanityHomePage): HomePageContent | null {
  if (!raw.hero?.headlineHighlight || !raw.whySection?.blocks?.length) return null;

  return {
    hero: staticHomePage.hero,
    whySection: {
      eyebrow: raw.whySection.eyebrow ?? staticHomePage.whySection.eyebrow,
      title: raw.whySection.title ?? staticHomePage.whySection.title,
      subtitle: raw.whySection.subtitle ?? staticHomePage.whySection.subtitle,
      blocks: raw.whySection.blocks.map((b, i) => {
        const fallback = staticHomePage.whySection.blocks[i];
        const imageKey = isValidImageKey(b.imageKey)
          ? b.imageKey
          : (fallback?.imageKey ?? "servicesStart");
        return {
          eyebrow: b.eyebrow ?? fallback?.eyebrow ?? "",
          title: b.title ?? fallback?.title ?? "",
          body: b.body ?? fallback?.body ?? "",
          imageKey,
          points: b.points?.length ? b.points : (fallback?.points ?? []),
          href: b.href ?? fallback?.href ?? "/contact",
          cta: b.cta ?? fallback?.cta ?? "Learn more",
        };
      }),
    },
    processSteps: raw.processSteps?.length
      ? raw.processSteps.map((s, i) => ({
          step: s.step ?? staticHomePage.processSteps[i]?.step ?? String(i + 1).padStart(2, "0"),
          title: s.title ?? staticHomePage.processSteps[i]?.title ?? "",
          desc: s.desc ?? staticHomePage.processSteps[i]?.desc ?? "",
          deliverable: s.deliverable ?? staticHomePage.processSteps[i]?.deliverable ?? "",
        }))
      : staticHomePage.processSteps,
    comparison: {
      traditional: raw.comparison?.traditional?.length
        ? raw.comparison.traditional
        : staticHomePage.comparison.traditional,
      pelago: raw.comparison?.pelago?.length
        ? raw.comparison.pelago
        : staticHomePage.comparison.pelago,
      scenarioTraditional:
        raw.comparison?.scenarioTraditional ?? staticHomePage.comparison.scenarioTraditional,
      scenarioPelago:
        raw.comparison?.scenarioPelago ?? staticHomePage.comparison.scenarioPelago,
    },
    teamTrust: {
      title: raw.teamTrust?.title ?? staticHomePage.teamTrust.title,
      subtitle: raw.teamTrust?.subtitle ?? staticHomePage.teamTrust.subtitle,
      points: raw.teamTrust?.points?.length
        ? raw.teamTrust.points
        : staticHomePage.teamTrust.points,
    },
    serviceHighlights: raw.serviceHighlights?.length
      ? raw.serviceHighlights
          .filter((h) => h.sectionId && h.fromPrice && h.timeline)
          .map((h) => ({
            sectionId: h.sectionId!,
            fromPrice: h.fromPrice!,
            timeline: h.timeline!,
          }))
      : staticHomePage.serviceHighlights,
    cta: {
      title: raw.cta?.title ?? staticHomePage.cta.title,
      subtitle: raw.cta?.subtitle ?? staticHomePage.cta.subtitle,
    },
  };
}

export async function getHomePage(): Promise<HomePageContent> {
  const fromCms = await fetchFromCms<SanityHomePage>("home", homePageQuery);
  if (fromCms) {
    const normalized = normalizeHomePage(fromCms);
    if (normalized) return normalized;
  }
  return staticHomePage;
}
