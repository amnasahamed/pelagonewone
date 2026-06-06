"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeHeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="animate-fade-up-delay-2 home-hero-stats relative z-20 mx-auto mt-10 max-w-4xl lg:mt-14"
    >
      <div className="home-stat-dock home-stat-dock-slim home-stat-dock--float overflow-hidden">
        <ul className="grid grid-cols-2 divide-y divide-ink/6 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {site.stats.map((s, i) => (
            <li
              key={s.label}
              className={cn(
                "home-stat-item px-4 py-4 text-center sm:px-5 sm:py-5",
                visible && "home-stat-item--visible",
              )}
              style={
                visible ? { transitionDelay: `${80 + i * 60}ms` } : undefined
              }
            >
              <p className="font-display text-xl font-bold text-accent sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-muted sm:text-xs">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
