import type { LearnLesson, LearnModule } from "@/lib/learn";
import { learnModules as staticModules, learnStats as staticLearnStats } from "@/lib/learn";
import {
  convertLegacySection,
  extractKeyTakeaways,
  normalizeCmsSection,
  type TypedLessonSection,
} from "@/lib/learn-section-utils";
import type { LessonContent, LessonCta } from "@/lib/lesson-content";
import { lessonContentById as staticLessonContent } from "@/lib/lesson-content";
import { fetchFromCms, fetchListFromCms } from "@/lib/cms/fetch";
import {
  learnLessonBySlugQuery,
  learnLessonSlugsQuery,
  learnLessonsMetaQuery,
  learnModulesQuery,
} from "@/sanity/lib/queries";

type SanityModule = { num: number; title: string; duration: string };
type SanityLessonMeta = LearnLesson & { moduleNum: number; orderInModule: number };

type SanityLessonContent = {
  id: string;
  title: string;
  keyTakeaways?: string[];
  cta?: LessonCta;
  sections?: Array<{
    sectionType?: TypedLessonSection["sectionType"];
    heading: string;
    paragraphs?: string[];
    items?: string[];
    tableHeaders?: string[];
    tableRows?: Array<{ cells?: string[] }>;
    tipBody?: string;
  }>;
};

const defaultLessonCta: LessonCta = {
  title: "Questions about this lesson?",
  subtitle: "Talk to a Pelago advisor — we'll map the right structure and compliance for your stage.",
  href: "/contact",
  buttonLabel: "Book a consultation",
};

function buildModules(
  modules: SanityModule[],
  lessons: SanityLessonMeta[],
): LearnModule[] {
  return modules.map((mod) => {
    const items = lessons
      .filter((l) => l.moduleNum === mod.num)
      .sort((a, b) => a.orderInModule - b.orderInModule)
      .map(({ id, title, duration, summary }) => ({ id, title, duration, summary }));

    return {
      num: mod.num,
      title: mod.title,
      duration: mod.duration,
      lessons: items.length,
      items,
    };
  });
}

function computeStats(modules: LearnModule[]) {
  const totalLessons = modules.reduce((n, m) => n + m.items.length, 0);
  const nextLesson = modules[0]?.items[0]?.title ?? staticLearnStats.nextLesson;
  return {
    totalLessons,
    totalModules: modules.length,
    totalDuration: staticLearnStats.totalDuration,
    nextLesson,
  };
}

function normalizeLessonContent(raw: SanityLessonContent, summary?: string): LessonContent {
  const sections = (raw.sections ?? []).map(normalizeCmsSection);

  return {
    id: raw.id,
    title: raw.title,
    sections,
    keyTakeaways:
      raw.keyTakeaways?.length
        ? raw.keyTakeaways
        : extractKeyTakeaways(
            sections.map((s) => ({
              heading: s.heading,
              paragraphs: [
                ...s.paragraphs,
                ...s.items.map((item) => `• ${item}`),
                ...(s.tableHeaders.length
                  ? [s.tableHeaders.join(" | "), ...s.tableRows.map((r) => r.join(" | "))]
                  : []),
                ...(s.tipBody ? [s.tipBody] : []),
              ],
            })),
            summary ?? "",
          ),
    cta: raw.cta ?? defaultLessonCta,
  };
}

function normalizeStaticLesson(
  content: { id: string; title: string; sections: { heading: string; paragraphs: string[] }[] },
  summary: string,
): LessonContent {
  const sections = content.sections.map((section) =>
    "sectionType" in section && section.sectionType
      ? (section as TypedLessonSection)
      : convertLegacySection(section),
  );

  return {
    id: content.id,
    title: content.title,
    sections,
    keyTakeaways: extractKeyTakeaways(content.sections, summary),
    cta: defaultLessonCta,
  };
}

export async function getLearnModules(): Promise<LearnModule[]> {
  const [modules, lessons] = await Promise.all([
    fetchListFromCms<SanityModule>("learn", learnModulesQuery),
    fetchListFromCms<SanityLessonMeta>("learn", learnLessonsMetaQuery),
  ]);

  if (modules && lessons?.length) {
    return buildModules(modules, lessons);
  }

  return staticModules;
}

export async function getLearnStats() {
  const modules = await getLearnModules();
  return computeStats(modules);
}

export async function getLessonContent(id: string): Promise<LessonContent | undefined> {
  const fromCms = await fetchFromCms<SanityLessonContent>("learn", learnLessonBySlugQuery, {
    slug: id,
  });

  if (fromCms?.sections?.length) {
    const meta = staticModules.flatMap((m) => m.items).find((l) => l.id === id);
    return normalizeLessonContent(fromCms, meta?.summary);
  }

  const staticContent = staticLessonContent[id];
  if (!staticContent) return undefined;

  const meta = staticModules.flatMap((m) => m.items).find((l) => l.id === id);
  return normalizeStaticLesson(staticContent, meta?.summary ?? "");
}

export async function getLessonSlugs(): Promise<string[]> {
  const rows = await fetchListFromCms<{ slug: string }>("learn", learnLessonSlugsQuery);
  if (rows?.length) return rows.map((r) => r.slug);

  return staticModules.flatMap((m) => m.items.map((l) => l.id));
}

export type { TypedLessonSection as LessonSection };
