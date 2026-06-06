import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { HomePageContent } from "@/lib/home-types";
import { cn } from "@/lib/utils";

type Props = Pick<HomePageContent, "whySection">;

export function HomeWhyUs({ whySection }: Props) {
  return (
    <section className="home-section-pad home-surface-white border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge-pill mb-4 inline-block">{whySection.eyebrow}</span>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              {whySection.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{whySection.subtitle}</p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {whySection.blocks.map((block, index) => {
            const reversed = index % 2 === 1;
            return (
              <RevealOnScroll
                key={block.title}
                delay={index * 60}
                variant="subtle"
              >
                <div
                  className={cn(
                    "home-why-block grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reversed && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="relative">
                    <div
                      className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 to-transparent blur-2xl"
                      aria-hidden
                    />
                    <div className="home-media-zoom rounded-[1.5rem]">
                      <MediaVisual
                        imageKey={block.imageKey}
                        className="relative aspect-[5/4] w-full rounded-[1.5rem] shadow-xl shadow-ink/12 ring-1 ring-ink/8"
                        overlay="light"
                      />
                    </div>
                    <span className="home-why-block__tag absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent shadow-sm backdrop-blur-sm">
                      {block.eyebrow}
                    </span>
                  </div>

                  <div className={cn("lg:py-2", reversed && "lg:pl-2")}>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
                      {block.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                      {block.body}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {block.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Check size={14} strokeWidth={2.5} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={block.href}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      {block.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
