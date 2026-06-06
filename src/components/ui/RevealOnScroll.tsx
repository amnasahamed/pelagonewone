"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant =
  | "subtle"
  | "rise"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "zoom";

const variantClass: Record<RevealVariant, { base: string; visible: string }> = {
  subtle: {
    base: "reveal-subtle",
    visible: "reveal-subtle--visible",
  },
  rise: {
    base: "reveal-rise",
    visible: "reveal-rise--visible",
  },
  "slide-left": {
    base: "reveal-slide-left",
    visible: "reveal-slide-left--visible",
  },
  "slide-right": {
    base: "reveal-slide-right",
    visible: "reveal-slide-right--visible",
  },
  scale: {
    base: "reveal-scale",
    visible: "reveal-scale--visible",
  },
  zoom: {
    base: "reveal-zoom",
    visible: "reveal-zoom--visible",
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms when section enters view */
  delay?: number;
  /** @deprecated Use `variant="subtle"` */
  tone?: "default" | "subtle";
  variant?: RevealVariant;
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  tone,
  variant: variantProp,
}: Props) {
  const variant: RevealVariant =
    variantProp ?? (tone === "subtle" ? "subtle" : "rise");
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
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = variantClass[variant];

  return (
    <div
      ref={ref}
      className={cn(classes.base, visible && classes.visible, className)}
      style={visible && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
