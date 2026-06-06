import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bell,
  Check,
  MapPin,
  MessageCircle,
  Receipt,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/ui/Button";
import { aboutProof, aboutValues, milestones } from "@/lib/about-content";
import { comparison } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pelago Consultants — Startup India certified compliance partner based in Kozhikode, Kerala. 6,000+ founders served.",
};

const valueIcons = {
  message: MessageCircle,
  bell: Bell,
  zap: Zap,
  receipt: Receipt,
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={
          <>
            <Award size={14} />
            Startup India certified · Kozhikode
          </>
        }
        title="Compliance partners for founders who'd rather build than file"
        subtitle={
          <>
            Based at HiLITE Business Park, we&apos;ve helped {site.stats[0].value}{" "}
            entrepreneurs register companies, stay GST-ready, and protect their brands —
            without opaque pricing or slow email loops.
          </>
        }
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              Book a free call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              See services
              <ArrowRight size={16} />
            </Link>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:p-6">
            {aboutProof.map((p) => (
              <div key={p.label} className="text-center">
                <p className="font-display text-2xl font-bold sm:text-3xl">{p.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        }
      />

      <section className="relative -mt-6 rounded-t-[2rem] border-t border-ink/6 bg-paper-warm pt-12 lg:pt-14">
        <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
          <PageSection className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <MediaVisual imageKey="aboutTeam" className="aspect-[4/3] w-full rounded-3xl" />
            <div>
              <SectionHeader
                eyebrow="Who we are"
                title="Small team, high accountability"
                subtitle="Every client gets a named advisor — not a ticket queue."
              />
              <p className="mt-6 leading-relaxed text-muted">
                Pelago started with a simple observation: first-time founders in India
                spend too much energy decoding MCA portals and GST notices instead of
                talking to customers. We built playbooks around the filings that matter
                at each stage — incorporation, first GST return, trademark before launch,
                ROC before investor diligence.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We&apos;re Startup India certified and rated {site.stats[2].value} by
                founders who&apos;ve worked with us on solo OPCs, bootstrapped LLPs, and
                funded Pvt Ltds.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/learn" variant="secondary">
                  Free Learn course
                </Button>
                <Button href="/blog" variant="ghost" className="!px-0">
                  Read founder guides →
                </Button>
              </div>
            </div>
          </PageSection>
        </div>
      </section>

      <section className="border-y border-ink/6 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection variant="rise">
          <SectionHeader
            eyebrow="Why founders switch"
            title="Pelago vs traditional consultants"
            subtitle="Same filings — different experience."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-ink/8 bg-paper-warm p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                Traditional
              </p>
              <ul className="mt-6 space-y-3">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <X size={18} className="shrink-0 text-ink/30" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 ring-1 ring-accent/10">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles size={14} />
                Pelago
              </p>
              <ul className="mt-6 space-y-3">
                {comparison.pelago.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <Check size={18} className="shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </PageSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <PageSection>
        <SectionHeader eyebrow="Principles" title="How we work" align="center" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v) => {
            const Icon = valueIcons[v.icon];
            return (
              <li
                key={v.title}
                className="rounded-2xl border border-ink/8 bg-white p-7 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </li>
            );
          })}
        </ul>
        </PageSection>
      </section>

      <section className="border-y border-ink/6 bg-paper-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection>
          <SectionHeader eyebrow="Our story" title="Milestones" align="center" />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="relative rounded-2xl border border-ink/8 bg-white p-6"
              >
                <span className="font-mono text-sm font-bold text-accent">{m.year}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              </li>
            ))}
          </ol>
          </PageSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <PageSection className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Our workspace</h2>
            <p className="mt-4 flex items-start gap-2 text-muted leading-relaxed">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              {site.address.join(", ")}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Walk-ins welcome by appointment. Most work happens online — documents via
              WhatsApp, calls when you need a human.
            </p>
            <Button href={site.whatsapp} variant="whatsapp" external className="mt-8">
              Message on WhatsApp
            </Button>
          </div>
          <MediaVisual imageKey="aboutOffice" className="aspect-[3/2] w-full rounded-3xl" />
        </PageSection>
      </section>

      <div className="pb-24">
        <PageSection>
        <CtaBand
          title="Meet the team on a free call"
          subtitle="Tell us your stage — we'll map the right filings. No obligation, reply within 2 hours."
        />
        </PageSection>
      </div>
    </>
  );
}
