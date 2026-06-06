import { Check, Sparkles, X } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { HomePageContent } from "@/lib/home-types";

type Props = Pick<HomePageContent, "comparison">;

export function HomeComparison({ comparison }: Props) {
  return (
    <section className="home-section-pad home-surface-warm border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <SectionHeader
            eyebrow="Why Pelago"
            title="Compliance that feels like a product, not paperwork"
            align="center"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <RevealOnScroll variant="subtle" delay={40}>
            <div className="home-comparison-card h-full rounded-3xl border border-ink/8 bg-white p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                Traditional consultants
              </p>
              <ul className="mt-8 space-y-4">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5">
                      <X size={14} className="text-ink/35" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-2xl border border-ink/8 bg-paper-warm/80 px-5 py-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">Typical experience:</span>{" "}
                {comparison.scenarioTraditional}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80} variant="subtle">
            <div className="home-comparison-card home-comparison-card--pelago relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 text-white sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-accent-light/10 blur-3xl"
                aria-hidden
              />
              <p className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                <Sparkles size={14} className="text-accent-light" />
                With Pelago
              </p>
              <ul className="relative mt-8 space-y-4">
                {comparison.pelago.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check size={14} className="text-accent-light" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="relative mt-8 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm leading-relaxed text-white/90 backdrop-blur-sm">
                {comparison.scenarioPelago}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
