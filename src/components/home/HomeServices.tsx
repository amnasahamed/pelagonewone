import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileCheck,
  LineChart,
  Scale,
  Shield,
} from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ServiceSection } from "@/lib/cms/services-service";
import {
  serviceSectionTheme,
  type ServiceSectionId,
} from "@/lib/services-theme";
import { cn } from "@/lib/utils";

const sectionIcons = {
  start: Building2,
  tax: LineChart,
  protect: Shield,
  compliance: FileCheck,
  grow: Scale,
} as const;

type Props = {
  sections: ServiceSection[];
  highlights: Record<string, { fromPrice: string; timeline: string }>;
};

export function HomeServices({ sections, highlights }: Props) {
  return (
    <section className="home-section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <SectionHeader
            eyebrow="Services"
            title="Start, protect, and scale — one team"
            subtitle="From incorporation to ROC filings and GST — structured support at every stage."
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {sections.map((s, index) => {
            const id = s.id as ServiceSectionId;
            const Icon = sectionIcons[id];
            const theme = serviceSectionTheme[id];
            const highlight = highlights[id];
            const featured = id === "start";

            return (
              <RevealOnScroll
                key={s.id}
                delay={index * 70}
                variant="subtle"
                className={cn(featured && "sm:col-span-2 lg:col-span-2")}
              >
                <Link
                  href={`/services#${s.id}`}
                  className={cn(
                    "home-service-card group flex h-full flex-col overflow-hidden p-6 sm:p-7",
                    featured && "home-service-card--featured lg:flex-row lg:gap-8 lg:p-0",
                    `home-service-card--${id}`,
                  )}
                >
                  {featured ? (
                    <div className="relative hidden min-h-[220px] w-full shrink-0 overflow-hidden lg:block lg:min-h-0 lg:w-[42%]">
                      <MediaVisual
                        imageKey="servicesStart"
                        className="absolute inset-0 h-full w-full rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
                        overlay="light"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent lg:bg-gradient-to-r",
                        )}
                        aria-hidden
                      />
                    </div>
                  ) : null}

                  <div className={cn("flex flex-1 flex-col", featured && "lg:p-8")}>
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
                        featured
                          ? "bg-accent text-white shadow-lg shadow-accent/30"
                          : cn(theme.chip, "group-hover:bg-accent group-hover:text-white"),
                      )}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3
                      className={cn(
                        "mt-5 font-display font-bold text-ink",
                        featured ? "text-2xl lg:text-[1.65rem]" : "text-xl",
                      )}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {s.subtitle}
                    </p>
                    {highlight ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span
                          className={cn(
                            "rounded-lg px-2.5 py-1.5 text-xs font-bold",
                            featured ? "bg-accent text-white" : theme.chip,
                          )}
                        >
                          {highlight.fromPrice}
                        </span>
                        <span className="rounded-lg bg-ink/5 px-2.5 py-1.5 text-xs font-semibold text-muted">
                          {highlight.timeline}
                        </span>
                      </div>
                    ) : null}
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Explore
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}

          <RevealOnScroll
            delay={sections.length * 70}
            variant="subtle"
            className="sm:col-span-2 lg:col-span-3"
          >
            <Link
              href="/services"
              className="group flex h-full flex-col items-center justify-center rounded-[1.25rem] border-2 border-dashed border-accent/30 bg-gradient-to-br from-accent/[0.04] to-transparent p-7 text-center transition-all duration-300 hover:border-accent/50 hover:bg-white focus-visible:border-accent/50"
            >
              <p className="font-display text-xl font-bold text-accent">All 30+ services</p>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Clear timelines and upfront quotes for every filing
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                View full list{" "}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
