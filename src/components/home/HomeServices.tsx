import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  MessageSquare,
  Rocket,
  Shield,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { ServicesHubDiagram } from "@/components/home/ServicesHubDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ServiceSection } from "@/lib/cms/services-service";

type Props = {
  sections: ServiceSection[];
  highlights: Record<string, { fromPrice: string; timeline: string }>;
};

const features = [
  {
    icon: MessageSquare,
    iconClass: "text-accent bg-accent/10",
    title: "Dedicated advisor",
    subtitle: "One expert. Every step.",
  },
  {
    icon: MessageCircle,
    iconClass: "text-[#128C7E] bg-[#25D366]/10",
    title: "WhatsApp updates",
    subtitle: "Real-time updates, always.",
  },
  {
    icon: Shield,
    iconClass: "text-violet-600 bg-violet-500/10",
    title: "Transparent pricing",
    subtitle: "No hidden fees. Ever.",
  },
] as const;

const trustItems = [
  { icon: "users" as const, value: "6,000+", label: "Founders served" },
  { icon: "star" as const, value: "4.9/5", label: "Client rating" },
  { icon: "shield" as const, value: "Startup India", label: "Certified" },
];

export function HomeServices({ sections: _sections, highlights: _highlights }: Props) {
  return (
    <section className="home-section-pad home-services-hub">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <RevealOnScroll variant="rise">
            <div className="max-w-xl lg:max-w-lg">
              <span className="inline-flex items-center rounded-full border border-accent/15 bg-accent/[0.06] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                Services
              </span>

              <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.5rem]">
                Start, protect, and scale —{" "}
                <span className="text-accent">one team.</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
                From incorporation to ROC filings and GST — structured support at every stage.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
                      aria-hidden
                    >
                      <item.icon size={18} />
                    </span>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-sm text-muted">{item.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <ul
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink/6 pt-8"
                aria-label="Trust indicators"
              >
                {trustItems.map((item) => (
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
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="subtle" delay={120} className="w-full overflow-visible lg:justify-self-end">
            <ServicesHubDiagram />
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="subtle" delay={200} className="mt-10 lg:mt-12">
          <Link
            href="/services"
            className="group flex flex-col gap-4 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/[0.04] via-white to-white px-5 py-5 shadow-[0_10px_36px_-18px_rgba(58,103,216,0.2)] transition-all hover:border-accent/35 hover:shadow-[0_16px_44px_-18px_rgba(58,103,216,0.28)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-accent/30 bg-accent/[0.06] text-accent sm:mr-2">
              <Rocket size={24} aria-hidden />
            </span>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="font-display text-xl font-bold text-accent sm:text-[1.35rem]">
                All 30+ services
              </p>
              <p className="mt-1 text-sm text-muted">
                Clear timelines and upfront quotes for every filing
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover">
              View full list
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
