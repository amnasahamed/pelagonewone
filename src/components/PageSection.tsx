"use client";

import type { ReactNode } from "react";
import {
  RevealOnScroll,
  type RevealVariant,
} from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
};

/** Scroll-reveal wrapper for page sections — use inside `<section>` or as a block */
export function PageSection({
  children,
  className,
  variant = "subtle",
  delay = 0,
}: Props) {
  return (
    <RevealOnScroll variant={variant} delay={delay} className={cn(className)}>
      {children}
    </RevealOnScroll>
  );
}
