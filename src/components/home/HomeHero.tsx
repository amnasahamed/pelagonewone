import Link from "next/link";
import { Award, MessageCircle, Phone } from "lucide-react";
import { HomeHeroStats } from "@/components/home/HomeHeroStats";
import { HeroVisualPanel } from "@/components/home/HeroVisualPanel";
import { Button } from "@/components/ui/Button";
import { GradientBars } from "@/components/ui/gradient-bars-background";
import type { HomePageContent } from "@/lib/home-types";
import { site } from "@/lib/site";

type Props = Pick<HomePageContent, "hero">;

export function HomeHero({ hero }: Props) {
  return (
    <section className="home-hero home-hero--wix relative overflow-hidden">
      <GradientBars
        numBars={7}
        gradientFrom="rgba(58, 103, 216, 0.28)"
        gradientTo="transparent"
        animationDuration={2.4}
        className="opacity-90"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#fbfcfe]/40 via-transparent to-[var(--paper-warm)]/80"
        aria-hidden
      />
      <div
        className="home-hero-grid pointer-events-none absolute inset-0 z-[2] opacity-40"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-16 lg:px-8 lg:pb-10 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              <Award size={13} className="text-accent" />
              {hero.badge}
            </span>

            <h1 className="animate-fade-up mt-8 font-display text-[2.5rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
              Incorporate in{" "}
              <span className="home-hero-gradient">{hero.headlineHighlight}</span>
              <span className="mt-2 block text-[0.88em] font-semibold text-ink/90 sm:text-[0.92em]">
                {hero.headlineSub}
              </span>
            </h1>

            <p className="animate-fade-up-delay mt-6 max-w-lg text-lg leading-relaxed text-muted lg:text-xl lg:leading-relaxed">
              {hero.description}
            </p>

            <ul
              className="animate-fade-up-delay mt-6 flex flex-wrap gap-2"
              aria-label="Key outcomes"
            >
              {hero.pills.map((pill) => (
                <li key={pill}>
                  <span className="home-chip home-chip--hover text-[11px] font-semibold text-ink/80">
                    {pill}
                  </span>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact">Start your business</Button>
              <Button href="/startup-bundle" variant="secondary">
                View packages
              </Button>
              <Button href={site.whatsapp} variant="whatsapp" external>
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>

            <p className="animate-fade-up-delay-2 mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <a
                href={site.phoneHref}
                className="interactive-link inline-flex items-center gap-2 font-semibold text-ink"
              >
                <Phone size={15} className="text-accent" />
                {site.phone}
              </a>
              <span className="hidden text-ink/20 sm:inline" aria-hidden>
                |
              </span>
              <Link href="/services" className="interactive-link font-semibold text-accent">
                Browse services →
              </Link>
            </p>
          </div>

          <div className="animate-fade-up-delay-2 lg:justify-self-end lg:w-full lg:max-w-md xl:max-w-[440px]">
            <HeroVisualPanel journeySteps={hero.journeySteps} journeyFooter={hero.journeyFooter} />
          </div>
        </div>

        <HomeHeroStats />
      </div>
    </section>
  );
}
