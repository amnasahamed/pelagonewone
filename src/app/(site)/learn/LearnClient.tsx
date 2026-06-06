"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  Clock,
  GraduationCap,
  Play,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CourseOutline } from "@/components/learn/CourseOutline";
import { useLearnProgress } from "@/components/learn/useLearnProgress";
import type { LearnModule } from "@/lib/learn";
import { getFlatLessons } from "@/lib/learn-nav";
import { getModuleTheme } from "@/lib/learn-theme";

type LearnStats = {
  totalLessons: number;
  totalModules: number;
  totalDuration: string;
  nextLesson: string;
};

type Props = {
  modules: LearnModule[];
  learnStats: LearnStats;
};

export function LearnClient({ modules, learnStats }: Props) {
  const { completed, toggleLesson } = useLearnProgress();

  const progress = Math.round(
    (completed.size / learnStats.totalLessons) * 100,
  );

  const continueLesson = useMemo(() => {
    const flat = getFlatLessons(modules);
    const next = flat.find((l) => {
      const ctx = modules.find((m) => m.num === l.moduleNum);
      if (!ctx) return true;
      const i = ctx.items.findIndex((item) => item.id === l.id);
      return !completed.has(`${l.moduleNum}-${i}`);
    });
    return next ?? flat[0];
  }, [completed, modules]);

  const continueTheme = continueLesson
    ? getModuleTheme(continueLesson.moduleNum)
    : getModuleTheme(1);

  return (
    <>
      <PageHero
        badge={
          <>
            <GraduationCap size={14} />
            Founder launchpad · Free course
          </>
        }
        title="Zero-to-one manual"
        subtitle={`A structured LMS for Indian founders — incorporation, finance, compliance, funding, and growth in ${learnStats.totalDuration}.`}
        actions={
          <>
            <Link
              href={`/learn/${continueLesson.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95 active:scale-[0.98]"
            >
              <Play size={16} className="text-accent" />
              {completed.size > 0 ? "Continue learning" : "Start course"}
            </Link>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Browse curriculum
            </a>
          </>
        }
        aside={
          <div className="learn-glass rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/90">Your progress</p>
              <span className="font-display text-2xl font-bold text-white">{progress}%</span>
            </div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-light to-white transition-all duration-500"
                style={{ width: `${Math.max(progress, 4)}%` }}
              />
            </div>
            <p className="mt-4 text-sm text-white/55">
              {completed.size} of {learnStats.totalLessons} lessons completed
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                { icon: BookOpen, label: "Lessons", value: String(learnStats.totalLessons) },
                { icon: Sparkles, label: "Modules", value: String(learnStats.totalModules) },
                { icon: Clock, label: "Duration", value: "~4h" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon size={18} className="mx-auto text-accent-light" />
                  <p className="mt-2 font-display text-lg font-bold">{value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section
        id="curriculum"
        className="border-t border-ink/6 bg-gradient-to-b from-paper-warm to-paper py-14 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-12">
            <div>
              <PageSection className="mb-10">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  Curriculum
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                  Your learning path
                </h2>
                <p className="mt-2 max-w-xl text-muted">
                  Eight modules from incorporation to exit. Open any lesson for
                  full guides, checklists, and founder-ready explanations.
                </p>
              </PageSection>

              <div className="space-y-5 lg:hidden">
                {modules.map((mod) => {
                  const theme = getModuleTheme(mod.num);
                  const Icon = theme.icon;
                  const modPct = Math.round(
                    (mod.items.filter((_, i) => completed.has(`${mod.num}-${i}`))
                      .length /
                      mod.items.length) *
                      100,
                  );

                  return (
                    <RevealOnScroll key={mod.num} delay={mod.num * 45} variant="subtle">
                    <article
                      className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm"
                    >
                      <div
                        className="flex items-center gap-4 border-b border-ink/6 px-5 py-4"
                        style={{ borderLeft: `4px solid ${theme.accent}` }}
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                          style={{ background: theme.gradient }}
                        >
                          <Icon size={20} />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">
                            Module {mod.num}
                          </p>
                          <h3 className="font-display text-lg font-bold text-ink">
                            {mod.title}
                          </h3>
                          <p className="text-sm text-muted">
                            {mod.lessons} lessons · {mod.duration} · {modPct}% done
                          </p>
                        </div>
                      </div>
                      <ul className="divide-y divide-ink/5 p-3">
                        {mod.items.map((lesson) => (
                          <li key={lesson.id}>
                            <Link
                              href={`/learn/${lesson.id}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-paper-warm"
                            >
                              <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                                style={{ background: theme.gradient }}
                              >
                                <Play size={16} fill="currentColor" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-ink">
                                  {lesson.title}
                                </span>
                                <span className="text-xs text-muted">
                                  {lesson.duration}
                                </span>
                              </span>
                              <ChevronRight size={18} className="text-muted" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </article>
                    </RevealOnScroll>
                  );
                })}
              </div>

              <div className="hidden lg:block">
                <CourseOutline
                  modules={modules}
                  completed={completed}
                  onToggleComplete={toggleLesson}
                />
              </div>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
              {continueLesson && (
                <div
                  className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-md"
                  style={{
                    boxShadow: `0 16px 40px -20px ${continueTheme.accent}55`,
                  }}
                >
                  <div
                    className="px-5 py-4 text-white"
                    style={{ background: continueTheme.gradient }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                      Up next
                    </p>
                    <p className="mt-1 font-display text-lg font-bold leading-snug">
                      {continueLesson.title}
                    </p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted line-clamp-3">
                      {continueLesson.summary}
                    </p>
                    <Link
                      href={`/learn/${continueLesson.id}`}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                    >
                      <Play size={16} />
                      Open lesson
                    </Link>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink">
                  How this course works
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">1.</span>
                    Pick a module and open any lesson.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">2.</span>
                    Read structured sections with checklists and tables.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">3.</span>
                    Mark complete and track progress locally.
                  </li>
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <div className="pb-24">
        <CtaBand title="Want an advisor to walk through your module?" />
      </div>
    </>
  );
}
