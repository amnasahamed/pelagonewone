import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { LearnModule } from "@/lib/learn";
import { getAdjacentLessons } from "@/lib/learn-nav";
import { getModuleTheme } from "@/lib/learn-theme";

type Props = { lessonId: string; modules: LearnModule[] };

export function LessonPagination({ lessonId, modules }: Props) {
  const { prev, next } = getAdjacentLessons(lessonId, modules);

  if (!prev && !next) return null;

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/learn/${prev.id}`}
          className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-5 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            <ArrowLeft size={14} />
            Previous
          </span>
          <span className="mt-2 font-display text-lg font-bold text-ink group-hover:text-accent">
            {prev.title}
          </span>
          <span className="mt-1 text-xs text-muted">Module {prev.moduleNum}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/learn/${next.id}`}
          className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-5 text-right shadow-sm transition-all hover:border-accent/30 hover:shadow-md sm:items-end"
          style={{
            background: `linear-gradient(135deg, ${getModuleTheme(next.moduleNum).accentSoft}, white 70%)`,
          }}
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            Next
            <ArrowRight size={14} />
          </span>
          <span className="mt-2 font-display text-lg font-bold text-ink group-hover:text-accent">
            {next.title}
          </span>
          <span className="mt-1 text-xs text-muted">Module {next.moduleNum}</span>
        </Link>
      ) : null}
    </div>
  );
}
