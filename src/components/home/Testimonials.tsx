import { MapPin, MessageCircle, Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Testimonial } from "@/lib/cms/testimonials-service";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials({ items }: { items: readonly Testimonial[] }) {
  const [featured, ...rest] = items;
  const cards = [
    { testimonial: rest[0], featured: false },
    { testimonial: featured, featured: true },
    { testimonial: rest[1], featured: false },
  ] as const;

  const ratingStat = site.stats.find((s) => s.label.includes("rating"));

  return (
    <section className="home-testimonials home-section-pad relative overflow-hidden border-y border-ink/6 bg-paper-warm">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,103,216,0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <SectionHeader
            eyebrow="Founder feedback"
            title="Clear process. Honest quotes."
            subtitle="Real outcomes from incorporation, GST, and compliance engagements — not generic praise."
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={50} variant="subtle">
          <div className="home-testimonials-trust mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-ink/8 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-amber-400"
                  />
                ))}
              </div>
              <span className="font-display text-lg font-bold text-ink">
                {ratingStat?.value ?? "4.9/5"}
              </span>
            </div>
            <span className="hidden h-8 w-px bg-ink/10 sm:block" aria-hidden />
            <p className="text-center text-sm font-medium text-muted sm:text-left">
              <span className="font-semibold text-ink">6,000+</span> founders served
            </p>
            <span className="hidden h-8 w-px bg-ink/10 md:block" aria-hidden />
            <p className="text-center text-xs font-bold uppercase tracking-wider text-accent md:text-left">
              Startup India certified
            </p>
          </div>
        </RevealOnScroll>

        <div className="home-testimonials-scroll mt-12 lg:mt-14 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:overflow-visible">
          {cards.map(({ testimonial, featured: isFeatured }, i) => (
            <RevealOnScroll
              key={testimonial.name}
              delay={80 + i * 90}
              variant="subtle"
              className={cn(
                "home-testimonials-scroll__item h-full shrink-0",
                isFeatured && "lg:z-[1]",
              )}
            >
              <TestimonialCard testimonial={testimonial} featured={isFeatured} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={280} variant="rise">
          <p className="mx-auto mt-8 max-w-lg text-center text-xs text-muted">
            Names shortened for privacy. Ask on WhatsApp for references in your industry.
          </p>
          <div className="mt-5 flex justify-center">
            <Button href={site.whatsapp} variant="whatsapp" external>
              <MessageCircle size={18} />
              Ask for references on WhatsApp
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial: t,
  featured,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={cn(
        "flex h-full min-h-[300px] flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 lg:min-h-[320px]",
        featured
          ? "home-testimonial-featured border-transparent text-white shadow-xl shadow-ink/20 lg:scale-[1.02] lg:hover:scale-[1.03]"
          : "border-ink/8 bg-white shadow-sm hover:-translate-y-1 hover:border-accent/20 hover:shadow-md",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className={cn(
            "inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
            featured
              ? "bg-white/15 text-white/90"
              : "bg-accent/10 text-accent",
          )}
        >
          {t.service}
        </span>
        <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill="currentColor"
              strokeWidth={0}
              className={featured ? "text-amber-300" : "text-accent"}
            />
          ))}
        </div>
      </div>

      <Quote
        size={featured ? 36 : 28}
        className={cn(
          "mt-4 shrink-0",
          featured ? "text-white/25" : "text-accent/15",
        )}
        aria-hidden
      />

      <blockquote
        className={cn(
          "mt-3 flex-1 font-display leading-snug tracking-tight",
          featured
            ? "text-lg text-white sm:text-xl"
            : "text-base text-ink",
        )}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption
        className={cn(
          "mt-6 flex items-center gap-3.5 border-t pt-5",
          featured ? "border-white/15" : "border-ink/6",
        )}
      >
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
            featured
              ? "bg-white/20 text-white ring-2 ring-white/25"
              : "bg-gradient-to-br from-accent/15 to-accent/5 text-accent",
          )}
          aria-hidden
        >
          {initials(t.name)}
        </span>
        <div className="min-w-0">
          <p className={cn("font-semibold", featured ? "text-white" : "text-ink")}>
            {t.name}
          </p>
          <p className={cn("text-sm", featured ? "text-white/70" : "text-muted")}>
            {t.role}
          </p>
          <p
            className={cn(
              "mt-1.5 inline-flex items-center gap-1 text-xs font-medium",
              featured ? "text-white/55" : "text-muted",
            )}
          >
            <MapPin size={11} className={featured ? "text-amber-300/80" : "text-accent"} aria-hidden />
            {t.location}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
