"use client";

import type { LearnModule } from "@/lib/learn";
import Link from "next/link";
import { List } from "lucide-react";
import { CourseOutline } from "@/components/learn/CourseOutline";
import { useLearnProgress } from "@/components/learn/useLearnProgress";

type Props = {
  modules: LearnModule[];
  activeLessonId: string;
  sectionHeadings: string[];
};

export function LessonReaderOutline({ modules, activeLessonId, sectionHeadings }: Props) {
  const { completed, toggleLesson } = useLearnProgress();

  return (
    <div className="space-y-4">
      <div className="hidden rounded-2xl border border-ink/8 bg-white p-4 shadow-sm lg:block">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
          <List size={14} />
          On this page
        </p>
        <ul className="mt-3 space-y-1">
          {sectionHeadings.map((heading, i) => (
            <li key={heading}>
              <a
                href={`#section-${i}`}
                className="block rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-paper-warm hover:text-accent"
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Full course
        </p>
        <div className="mt-3 max-h-[min(60vh,520px)] overflow-y-auto pr-1">
          <CourseOutline
            modules={modules}
            activeLessonId={activeLessonId}
            completed={completed}
            onToggleComplete={toggleLesson}
            compact
          />
        </div>
        <Link
          href="/learn"
          className="mt-4 block text-center text-sm font-semibold text-accent hover:underline"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
