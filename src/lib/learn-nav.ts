import type { LearnLesson, LearnModule } from "@/lib/learn";

export type FlatLesson = LearnLesson & {
  moduleNum: number;
  moduleTitle: string;
  indexInModule: number;
};

export function getFlatLessons(modules: LearnModule[]): FlatLesson[] {
  return modules.flatMap((mod) =>
    mod.items.map((lesson, indexInModule) => ({
      ...lesson,
      moduleNum: mod.num,
      moduleTitle: mod.title,
      indexInModule,
    })),
  );
}

export function findLessonContext(lessonId: string, modules: LearnModule[]) {
  for (const mod of modules) {
    const index = mod.items.findIndex((l) => l.id === lessonId);
    if (index >= 0) {
      return { module: mod, lesson: mod.items[index], index };
    }
  }
  return null;
}

export function getAdjacentLessons(lessonId: string, modules: LearnModule[]) {
  const flat = getFlatLessons(modules);
  const i = flat.findIndex((l) => l.id === lessonId);
  if (i < 0) return { prev: null, next: null, current: null };
  return {
    current: flat[i],
    prev: i > 0 ? flat[i - 1] : null,
    next: i < flat.length - 1 ? flat[i + 1] : null,
  };
}

export function getModuleProgress(
  module: LearnModule,
  completed: Set<string>,
): number {
  if (module.items.length === 0) return 0;
  const done = module.items.filter((_, i) =>
    completed.has(`${module.num}-${i}`),
  ).length;
  return Math.round((done / module.items.length) * 100);
}
