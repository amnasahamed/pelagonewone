import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageSection } from "@/components/PageSection";
import { LessonContent } from "@/components/learn/LessonContent";
import { LessonPagination } from "@/components/learn/LessonPagination";
import { LessonReaderOutline } from "@/components/learn/LessonReaderOutline";
import { getLearnModules, getLessonContent, getLessonSlugs } from "@/lib/cms";
import { findLessonContext } from "@/lib/learn-nav";
import { getModuleTheme } from "@/lib/learn-theme";

type Props = { params: Promise<{ lessonId: string }> };

export async function generateStaticParams() {
  const slugs = await getLessonSlugs();
  return slugs.map((lessonId) => ({ lessonId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params;
  const [content, modules] = await Promise.all([
    getLessonContent(lessonId),
    getLearnModules(),
  ]);
  if (!content) return { title: "Lesson" };
  const meta = findLessonContext(lessonId, modules);
  return {
    title: content.title,
    description: meta?.lesson.summary?.slice(0, 160),
  };
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;
  const [content, modules] = await Promise.all([
    getLessonContent(lessonId),
    getLearnModules(),
  ]);
  const meta = findLessonContext(lessonId, modules);
  if (!content || !meta) notFound();

  const { module, lesson } = meta;
  const theme = getModuleTheme(module.num);
  const Icon = theme.icon;

  return (
    <div className="min-h-screen bg-paper-warm">
      <header
        className="relative overflow-hidden text-white"
        style={{ background: theme.gradient }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 0%, white 0%, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <ArrowLeft size={16} />
            Course home
          </Link>

          <div className="mt-8 flex flex-wrap items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon size={28} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-white/75">
                Module {module.num} · {module.title}
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {content.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1">
                  <Clock size={14} />
                  {lesson.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1">
                  <BookOpen size={14} />
                  {content.sections.length} sections
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LessonReaderOutline
              modules={modules}
              activeLessonId={lessonId}
              sectionHeadings={content.sections.map((s) => s.heading)}
            />
          </aside>

          <main>
            <PageSection variant="subtle">
            <article className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[var(--shadow-card)]">
              <div
                className="border-b border-ink/6 px-6 py-4 lg:px-10"
                style={{ background: theme.accentSoft }}
              >
                <p className="text-sm font-medium text-ink">
                  Lesson content
                </p>
                <p className="text-xs text-muted">
                  Scroll through numbered sections or jump via the outline.
                </p>
              </div>

              <div className="px-6 py-10 lg:px-10 lg:py-12">
                {content.keyTakeaways && content.keyTakeaways.length > 0 && (
                  <div className="mb-10 rounded-2xl border border-accent/15 bg-accent/[0.04] p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      What you&apos;ll take away
                    </p>
                    <ul className="mt-4 space-y-3">
                      {content.keyTakeaways.map((item) => (
                        <li
                          key={item.slice(0, 48)}
                          className="flex gap-3 text-[1.02rem] leading-relaxed text-ink/90"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-0.5 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <LessonContent sections={content.sections} />
              </div>
            </article>
            </PageSection>

            <PageSection delay={80}>
            <LessonPagination lessonId={lessonId} modules={modules} />
            </PageSection>
          </main>
        </div>
      </div>

      <CtaBand
        title={content.cta?.title ?? "Questions about this lesson? Talk to an advisor."}
        subtitle={content.cta?.subtitle}
      />
    </div>
  );
}
