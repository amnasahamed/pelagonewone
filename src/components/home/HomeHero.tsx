import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { HomeHeroStats } from "@/components/home/HomeHeroStats";
import { Button } from "@/components/ui/Button";
import type { HomePageContent } from "@/lib/home-types";

type Props = Pick<HomePageContent, "hero">;

export function HomeHero({ hero }: Props) {
  return (
    <section className="home-hero home-hero--reference relative overflow-hidden">
      <div className="home-hero__bg pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          className="object-cover object-[72%_42%] sm:object-[68%_40%] lg:object-[58%_38%] xl:object-[52%_36%]"
          sizes="100vw"
        />
        <div className="home-hero__scrim absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          <div className="max-w-xl lg:max-w-[34rem]">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/[0.08] bg-white/85 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
              <Award size={12} className="text-accent" aria-hidden />
              {hero.badge}
            </span>

            <h1 className="mt-7 font-display text-[2.35rem] font-bold leading-[1.07] tracking-tight sm:text-[2.85rem] lg:text-[3.15rem] xl:text-[3.35rem]">
              <span className="block text-ink">{hero.headlineLine1}</span>
              <span className="mt-1 block text-accent">{hero.headlineLine2}</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-[1.05rem] lg:max-w-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(58,103,216,0.55)] transition-all hover:bg-accent-hover active:scale-[0.98]"
              >
                Start your business
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
              <Button href="/startup-bundle" variant="secondary" className="!rounded-xl !px-5">
                View packages
              </Button>
            </div>

            <ul
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6"
              aria-label="Trust indicators"
            >
              {hero.trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-ink/[0.06]"
                    aria-hidden
                  >
                    {item.icon === "users" && <Users size={15} className="text-accent" />}
                    {item.icon === "star" && (
                      <Star size={15} className="fill-amber-400 text-amber-400" />
                    )}
                    {item.icon === "shield" && (
                      <ShieldCheck size={15} className="text-emerald-500" />
                    )}
                  </span>
                  <span className="text-ink/90">
                    <span className="font-semibold text-ink">{item.value}</span>{" "}
                    <span className="text-muted">{item.label}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-center gap-2 text-sm">
              <MessageCircle size={16} className="shrink-0 text-[#25D366]" aria-hidden />
              <span>
                <span className="font-semibold text-[#128C7E]">WhatsApp updates</span>
                <span className="text-muted"> · Real-time updates at every step</span>
              </span>
            </p>
          </div>

          <div className="hidden min-h-[280px] lg:block" aria-hidden />
        </div>

        <HomeHeroStats />
      </div>
    </section>
  );
}
