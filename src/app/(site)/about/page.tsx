import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { AboutOfficeGallery } from "@/components/about/AboutOfficeGallery";
import { AboutStaffGrid } from "@/components/about/AboutStaffGrid";
import { AboutTeamGrid } from "@/components/about/AboutTeamGrid";
import { MediaVisual } from "@/components/MediaVisual";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/ui/Button";
import {
  aboutBeliefs,
  aboutCertifications,
  aboutProof,
  aboutStats,
  extendedTeam,
  leadershipTeam,
  officeGallery,
} from "@/lib/about-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Pelago Consultants — founders, operators, and compliance experts based at HiLITE Business Park, Kozhikode.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={
          <>
            <Award size={14} />
            About Us
          </>
        }
        title={
          <>
            We&apos;re founders helping
            <span className="mt-2 block text-accent-light">other founders succeed</span>
          </>
        }
        subtitle="Pelago started with a simple frustration: starting a business in India is way harder than it should be. So we decided to fix that."
        actions={
          <>
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb855]"
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Book a free call
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
            <MediaVisual imageKey="aboutTeam" className="aspect-[4/3] w-full rounded-3xl" priority />
            <div>
              <SectionHeader eyebrow="Our Story" title="There had to be a better way" />
              <p className="mt-6 leading-relaxed text-muted">
                Back in 2019, we were a group of founders who had just started our own businesses.
                We quickly realized that the hardest part wasn&apos;t building the product or finding
                customers — it was the paperwork.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Government portals that crash. Forms that make no sense. Consultants who speak in
                riddles and charge hidden fees. We thought:{" "}
                <em className="font-medium text-ink">there has to be a better way.</em>
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                So we built it. Pelago was born from the simple idea that compliance should be easy,
                transparent, and maybe even pleasant. Today, we&apos;ve helped over 6,000 founders
                start and grow their businesses — and we&apos;re just getting started.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/8 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    Our Mission
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    To make business compliance so simple that founders can focus on what they do
                    best — building great companies.
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/8 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    Our Vision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    A world where starting a business is as easy as downloading an app. Where every
                    entrepreneur has access to expert help.
                  </p>
                </div>
              </div>
            </div>
          </PageSection>
        </div>
      </section>

      <section className="border-y border-ink/6 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection variant="rise">
            <SectionHeader
              eyebrow="What We Believe"
              title="The principles that guide us"
              align="center"
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {aboutBeliefs.map((belief) => (
                <li
                  key={belief.title}
                  className="rounded-2xl border border-ink/8 bg-paper-warm p-7 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Sparkles size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{belief.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{belief.desc}</p>
                </li>
              ))}
            </ul>
          </PageSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <PageSection>
          <SectionHeader
            eyebrow="Meet The Team"
            title="The people behind Pelago"
            subtitle="A mix of operators, accountants, lawyers, and dreamers who believe in your success."
            align="center"
          />
          <AboutTeamGrid members={leadershipTeam} />
        </PageSection>
      </section>

      <section className="border-y border-ink/6 bg-paper-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection>
            <SectionHeader
              eyebrow="Our Extended Family"
              title="The amazing people who make it all happen"
              align="center"
            />
            <AboutStaffGrid members={extendedTeam} />
          </PageSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <PageSection>
          <SectionHeader
            eyebrow="Trusted & Certified"
            title="Government recognized & verified"
            align="center"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutCertifications.map((cert) => (
              <li
                key={cert.title}
                className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <ShieldCheck size={22} />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink">{cert.title}</p>
                  <p className="mt-1 text-sm text-muted">{cert.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-accent/15 bg-accent/5 px-5 py-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </PageSection>
      </section>

      <section className="border-y border-ink/6 bg-paper-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection>
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Our Home"
                title="Where we work (and occasionally play)"
                subtitle="Our office at HiLite Business Park, Calicut — come visit us!"
              />
              <p className="mt-4 flex items-start gap-2 text-muted leading-relaxed">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {site.address.join(", ")}
              </p>
              <Button href={site.whatsapp} variant="whatsapp" external className="mt-8">
                Message on WhatsApp
              </Button>
            </div>
            <AboutOfficeGallery photos={officeGallery} />
          </PageSection>
        </div>
      </section>

      <div className="pb-24">
        <PageSection>
          <CtaBand
            title="Ready to meet us?"
            subtitle="We'd love to hear about your business and how we can help."
          />
        </PageSection>
      </div>
    </>
  );
}
