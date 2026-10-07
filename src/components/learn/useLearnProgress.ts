"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "pelago-learn-progress";
const PROGRESS_EVENT = "pelago-learn-progress-changed";
let sessionProgress = "[]";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(PROGRESS_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(PROGRESS_EVENT, callback);
  };
}
function snapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? sessionProgress;
  } catch {
    return sessionProgress;
  }
}
function parseCompleted(raw: string | null): Set<string> {
  try {
    const parsed: unknown = JSON.parse(raw ?? "[]");
    return new Set(
      Array.isArray(parsed)
        ? parsed.filter((key): key is string => typeof key === "string")
        : [],
    );
  } catch {
    return new Set();
  }
}
export function useLearnProgress() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  const completed = useMemo(() => parseCompleted(raw), [raw]);
  const toggleLesson = useCallback((key: string) => {
    const next = parseCompleted(snapshot());
    if (next.has(key)) next.delete(key);
    else next.add(key);
    sessionProgress = JSON.stringify([...next]);
    try {
      localStorage.setItem(STORAGE_KEY, sessionProgress);
    } catch {
      /* Progress remains available for this session. */
    }
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  }, []);
  return { completed, toggleLesson, ready: raw !== null };
}
