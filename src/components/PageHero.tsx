import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  badge: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  aside?: ReactNode;
  /** Wider second column (e.g. hero image) */
  asideWide?: boolean;
  className?: string;
};

export function PageHero({
  badge,
  title,
  subtitle,
  actions,
  footer,
  aside,
  asideWide = false,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "page-hero relative overflow-hidden bg-paper-warm text-ink",
        className,
      )}
    >
      <div
        className="page-hero__glow pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="page-hero__grid pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div
          className={cn(
            aside
              ? asideWide
                ? "grid gap-12 lg:grid-cols-2 lg:items-center"
                : "grid gap-12 lg:grid-cols-[1fr_minmax(0,300px)] lg:items-end"
              : undefined,
          )}
        >
          <div className={cn(!aside && "max-w-3xl")}>
            <div className="page-hero__badge animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-1.5 text-xs font-semibold text-accent">
                {badge}
              </span>
            </div>
            <h1 className="page-hero__title animate-fade-up-delay mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              {title}
            </h1>
            {subtitle ? (
              <p className="page-hero__subtitle animate-fade-up-delay mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                {subtitle}
              </p>
            ) : null}
            {actions ? (
              <div className="page-hero__actions animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
                {actions}
              </div>
            ) : null}
            {footer ? (
              <div className="page-hero__footer animate-fade-up-delay-2 mt-6 text-sm font-medium text-muted">
                {footer}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div className="page-hero__aside animate-fade-up-delay-2 lg:justify-self-end">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
