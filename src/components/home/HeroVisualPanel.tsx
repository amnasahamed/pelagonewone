"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import type { HeroJourneyStep } from "@/lib/home-types";
import { cn } from "@/lib/utils";

type Props = {
  journeySteps: HeroJourneyStep[];
  journeyFooter: string;
};

export function HeroVisualPanel({ journeySteps, journeyFooter }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "home-hero-journey mx-auto w-full max-w-sm lg:max-w-none",
        ready && "home-hero-journey--ready",
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        Your compliance path
      </p>
      <ol className="mt-4 space-y-3">
        {journeySteps.map((step, i) => (
          <li
            key={step.title}
            className={cn(
              "home-journey-step flex gap-3",
              step.status === "active" &&
                "home-journey-step--active rounded-xl border border-accent/20 bg-accent/5 px-3 py-2.5",
              step.status !== "active" && "px-1 py-0.5",
            )}
            style={ready ? { transitionDelay: `${180 + i * 70}ms` } : undefined}
          >
            <span className="mt-0.5 shrink-0" aria-hidden>
              {step.status === "complete" ? (
                <CheckCircle2 size={18} className="text-accent" />
              ) : step.status === "active" ? (
                <span className="home-journey-active-dot flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  →
                </span>
              ) : (
                <Circle size={18} className="text-ink/15" />
              )}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-ink">{step.title}</span>
              <span className="mt-0.5 block text-xs text-muted">{step.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="home-journey-footer mt-4 border-t border-ink/6 pt-3 text-xs text-muted">
        {journeyFooter}
      </p>
    </div>
  );
}
