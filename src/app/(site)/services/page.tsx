import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/lib/data";
import { countServices, getFaqs, getServiceSections } from "@/lib/cms";
import {
  serviceSectionTheme,
  type ServiceSectionId,
} from "@/lib/services-theme";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Company registration, GST, trademark, compliance, HR, and growth services for Indian startups — fixed timelines and transparent quotes.",
};

export default async function ServicesPage() {
  const [serviceSections, faqs] = await Promise.all([
    getServiceSections(),
    getFaqs(),
  ]);

  const sectionNav = serviceSections.map((s) => ({
    id: s.id,
    label: s.title,
  }));

  const totalServices = countServices(serviceSections);

  return (
    <>
      <PageHero
        badge={
          <>
            <Layers size={14} />
            End-to-end for Indian startups
          </>
        }
        title="Everything you need to run your business"
        subtitle="From starting up to scaling up — fixed timelines, transparent quotes, and a dedicated advisor on every engagement."
        actions={
          <>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              Browse services
            </a>
            <Link
              href="/startup-bundle"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Sparkles size={16} />
              Startup bundle
            </Link>
          </>
        }
        footer={
          <nav className="flex flex-wrap gap-2">
            {sectionNav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/20"
              >
                {n.label}
              </a>
            ))}
          </nav>
        }
        aside={
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:p-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">
                {totalServices}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Services
              </p>
            </div>
            <div className="border-x border-white/10 text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">
                {serviceSections.length}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Categories
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">
                10–15
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Day incorporation
              </p>
            </div>
          </div>
        }
      />

      <section
        id="services"
        className="relative -mt-6 rounded-t-[2rem] border-t border-ink/6 bg-paper-warm"
      >
        {serviceSections.map((section, i) => {
          const theme = serviceSectionTheme[section.id as ServiceSectionId];
          const Icon = theme.icon;
          const hasStickyVisual =
            section.id === "start" || section.id === "tax";

          return (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 py-16 lg:py-24 ${i % 2 === 1 ? "bg-white" : ""}`}
            >
              <PageSection
                variant="subtle"
                delay={i * 50}
                className="mx-auto max-w-7xl px-5 lg:px-8"
              >
                <div
                  className={`grid gap-12 lg:items-start ${
                    hasStickyVisual ? "lg:grid-cols-[1fr_260px]" : ""
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.gradient} px-4 py-2 text-sm font-semibold text-white`}
                    >
                      <Icon size={16} />
                      {section.title}
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                      {section.subtitle}
                    </h2>
                    <ul className="mt-8 space-y-4">
                      {section.items.map((item) => {
                        const blogSlug = item.blogSlug;
                        return (
                          <li
                            key={item.name}
                            className="overflow-hidden rounded-2xl border border-ink/8 bg-white transition-shadow hover:shadow-md"
                          >
                            <div
                              className={`h-1 bg-gradient-to-r ${theme.gradient}`}
                              aria-hidden
                            />
                            <div className="p-6 sm:flex sm:items-start sm:justify-between sm:gap-6">
                              <div className="min-w-0 flex-1">
                                {item.valueLabel && (
                                  <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                                    {item.valueLabel}
                                  </p>
                                )}
                                <h3 className="mt-1 font-display text-lg font-bold text-ink">
                                  {item.name}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                  {item.desc}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                                  {blogSlug && (
                                    <Link
                                      href={`/blog/${blogSlug}`}
                                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                                    >
                                      <BookOpen size={15} aria-hidden />
                                      Founder guide
                                    </Link>
                                  )}
                                  {item.toolId && (
                                    <Link
                                      href={`/tools/?tool=${item.toolId}`}
                                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                                    >
                                      <Calculator size={15} aria-hidden />
                                      Free tool
                                    </Link>
                                  )}
                                  {item.learnSlug && (
                                    <Link
                                      href={`/learn/${item.learnSlug}`}
                                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                                    >
                                      <GraduationCap size={15} aria-hidden />
                                      Learn lesson
                                    </Link>
                                  )}
                                </div>
                              </div>
                              <div className="mt-4 shrink-0 sm:mt-0 sm:text-right">
                                <span
                                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${theme.chip}`}
                                >
                                  {item.timeline}
                                </span>
                                <div className="mt-3">
                                  <Button
                                    href="/contact"
                                    variant="ghost"
                                    className="!px-0"
                                  >
                                    Get quote
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {hasStickyVisual && (
                    <MediaVisual
                      imageKey={
                        section.id === "start" ? "servicesStart" : "servicesTax"
                      }
                      className="hidden aspect-[3/4] w-full rounded-3xl lg:block lg:sticky lg:top-28"
                    />
                  )}
                </div>
              </PageSection>
            </section>
          );
        })}
      </section>

      <section className="border-t border-ink/6 bg-white py-16 lg:py-24">
        <PageSection variant="rise" className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Process" title="How it works" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <li
                key={p.step}
                className="rounded-2xl border border-ink/8 bg-paper-warm p-6"
              >
                <span className="font-mono text-sm font-bold text-accent">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={site.whatsapp} variant="whatsapp" external>
              WhatsApp for advice
            </Button>
            <Button href="/contact" variant="secondary">
              Book a call
            </Button>
            <Button href="/tools" variant="ghost">
              Try free calculators →
            </Button>
          </div>
        </PageSection>
      </section>

      <section className="border-t border-ink/6 bg-paper-warm py-16 lg:py-24">
        <PageSection
          variant="rise"
          delay={60}
          className="mx-auto max-w-7xl px-5 lg:px-8"
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Quick answers — your advisor will personalise on a call."
          />
          <ul className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <li
                key={f.q}
                className="rounded-2xl border border-ink/8 bg-white p-6"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </li>
            ))}
          </ul>
        </PageSection>
      </section>

      <div className="pb-24">
        <CtaBand
          title="Not sure which services you need?"
          subtitle="Share your stage on WhatsApp — we'll recommend a lean package, not everything on the menu."
        />
      </div>
    </>
  );
}
