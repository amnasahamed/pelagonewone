import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/ui/Button";
import {
  culturePerks,
  hiringSteps,
} from "@/lib/careers-content";
import { getCareerRoles } from "@/lib/cms";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Pelago Consultants — compliance, sales, and content roles in Kozhikode and remote. Build systems founders actually use.",
};

const perkIcons = {
  users: Users,
  heart: Heart,
  map: MapPin,
  graduation: GraduationCap,
} as const;

export default async function CareersPage() {
  const careerRoles = await getCareerRoles();

  return (
    <>
      <PageHero
        asideWide
        badge={
          <>
            <Briefcase size={14} />
            Join us · Kozhikode & remote
          </>
        }
        title="Build systems founders actually use"
        subtitle="We're a small team obsessed with clarity, speed, and getting compliance off a founder's mental load. If that resonates, we'd like to hear from you."
        actions={
          <>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              View openings
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("General application — Pelago")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Mail size={16} />
              General application
            </a>
          </>
        }
        aside={
          <MediaVisual
            imageKey="careers"
            className="aspect-[4/3] w-full rounded-3xl ring-1 ring-white/10"
          />
        }
      />

      <section className="relative -mt-6 rounded-t-[2rem] border-t border-ink/6 bg-paper-warm pt-12 lg:pt-14">
        <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
          <PageSection variant="rise">
          <SectionHeader
            eyebrow="Culture"
            title="Why people join Pelago"
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePerks.map((p) => {
              const Icon = perkIcons[p.icon];
              return (
                <li
                  key={p.title}
                  className="rounded-2xl border border-ink/8 bg-white p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </li>
              );
            })}
          </ul>
          </PageSection>
        </div>
      </section>

      <section
        id="openings"
        className="scroll-mt-24 border-y border-ink/6 bg-white py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageSection variant="rise">
          <SectionHeader
            eyebrow="Open roles"
            title="Current openings"
            subtitle={`${careerRoles.length} roles · We review every application personally.`}
          />
          <ul className="mt-10 space-y-6">
            {careerRoles.map((role) => (
              <li
                key={role.id}
                className="overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm"
              >
                <div className="bg-gradient-to-r from-ink via-accent to-accent-light px-6 py-4 text-white sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold">{role.title}</h3>
                    <p className="mt-1 text-sm text-white/75">
                      {role.location} · {role.type}
                    </p>
                  </div>
                  <Button
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    variant="outline-light"
                    external
                    className="mt-4 shrink-0 sm:mt-0"
                  >
                    Apply via email
                  </Button>
                </div>
                <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
                  <div>
                    <p className="leading-relaxed text-muted">{role.summary}</p>
                    <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted">
                      You&apos;ll do
                    </p>
                    <ul className="mt-3 space-y-2">
                      {role.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-ink">
                          • {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-ink/8 bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      You might be a fit if
                    </p>
                    <ul className="mt-3 space-y-2">
                      {role.youAre.map((r) => (
                        <li key={r} className="text-sm text-muted">
                          • {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t see your role?{" "}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("General application — Pelago")}`}
              className="font-semibold text-accent hover:underline"
            >
              Send a general application
            </a>{" "}
            with your CV and what you&apos;d like to work on.
          </p>
          </PageSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <PageSection>
        <SectionHeader eyebrow="Hiring" title="How we hire" align="center" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hiringSteps.map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-ink/8 bg-white p-6"
            >
              <span className="font-mono text-sm font-bold text-accent">{s.step}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/about" variant="secondary">
            About Pelago
          </Button>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See what we teach founders
            <ArrowRight size={14} />
          </Link>
        </div>
        </PageSection>
      </section>

      <div className="pb-24">
        <PageSection>
        <CtaBand
          title="Questions before you apply?"
          subtitle={`WhatsApp us at ${site.phone} or email ${site.email} — we're happy to chat informally.`}
        />
        </PageSection>
      </div>
    </>
  );
}
