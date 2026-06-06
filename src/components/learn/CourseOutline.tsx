"use client";

import Link from "next/link";
import { Check, Circle } from "lucide-react";
import type { LearnModule } from "@/lib/learn";
import { getModuleTheme } from "@/lib/learn-theme";
import { getModuleProgress } from "@/lib/learn-nav";

type Props = {
  modules: LearnModule[];
  activeLessonId?: string;
  completed: Set<string>;
  onToggleComplete?: (key: string) => void;
  compact?: boolean;
};

export function CourseOutline({
  modules,
  activeLessonId,
  completed,
  onToggleComplete,
  compact = false,
}: Props) {
  return (
    <nav className="space-y-3" aria-label="Course outline">
      {modules.map((mod) => {
        const theme = getModuleTheme(mod.num);
        const pct = getModuleProgress(mod, completed);
        const Icon = theme.icon;

        return (
          <div
            key={mod.num}
            className="overflow-hidden rounded-xl border border-ink/8 bg-white shadow-sm"
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: theme.accentSoft }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white shadow-sm"
                style={{ background: theme.gradient }}
              >
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Module {mod.num}
                </p>
                <p className="truncate text-sm font-semibold text-ink">{mod.title}</p>
              </div>
              {!compact && (
                <span className="text-xs font-bold tabular-nums text-muted">{pct}%</span>
              )}
            </div>

            <ul className="divide-y divide-ink/5 px-2 py-1">
              {mod.items.map((lesson, i) => {
                const key = `${mod.num}-${i}`;
                const done = completed.has(key);
                const active = activeLessonId === lesson.id;

                return (
                  <li key={lesson.id}>
                    <div
                      className={`flex items-start gap-2 rounded-lg px-2 py-2.5 transition-colors ${
                        active ? "bg-accent/10 ring-1 ring-accent/25" : "hover:bg-paper-warm"
                      }`}
                    >
                      {onToggleComplete ? (
                        <button
                          type="button"
                          onClick={() => onToggleComplete(key)}
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            done
                              ? "border-accent bg-accent text-white"
                              : "border-ink/15 hover:border-accent"
                          }`}
                          aria-label={done ? "Mark incomplete" : "Mark complete"}
                        >
                          {done ? <Check size={12} strokeWidth={3} /> : null}
                        </button>
                      ) : (
                        <span className="mt-1 shrink-0">
                          {done ? (
                            <Check size={16} className="text-accent" />
                          ) : (
                            <Circle size={16} className="text-ink/15" />
                          )}
                        </span>
                      )}
                      <Link
                        href={`/learn/${lesson.id}`}
                        className={`min-w-0 flex-1 ${active ? "text-accent" : "text-ink hover:text-accent"}`}
                      >
                        <span className="block text-sm font-medium leading-snug">
                          {lesson.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted">
                          {lesson.duration}
                        </span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
