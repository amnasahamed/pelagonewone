import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ClientsFeaturedStrip } from "@/components/clients/ClientsFeaturedStrip";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ClientsPageClient } from "@/app/(site)/clients/ClientsPageClient";
import { getClients, getClientStats } from "@/lib/cms";
import { clientsPageCopy } from "@/lib/clients-content";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Companies that trust Pelago Consultants for incorporation, GST, trademark, and ongoing compliance across India.",
};

export default async function ClientsPage() {
  const [clients, stats] = await Promise.all([getClients(), getClientStats()]);

  return (
    <>
      <PageHero
        badge={
          <>
            <Handshake size={14} />
            {clientsPageCopy.eyebrow}
          </>
        }
        title={clientsPageCopy.title}
        subtitle={clientsPageCopy.subtitle}
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              Work with Pelago
            </Link>
            <a
              href="#directory"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Browse directory
              <ArrowRight size={16} />
            </a>
          </>
        }
        aside={
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <p className="font-display text-4xl font-bold text-white">{stats.total}</p>
            <p className="mt-1 text-sm font-medium text-white/70">Companies we serve</p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              D2C, SaaS, travel, design, manufacturing, and professional services —
              across India since 2018.
            </p>
          </div>
        }
      />

      <PageSection variant="subtle">
        <ClientsFeaturedStrip clients={clients} />
      </PageSection>

      <section
        id="directory"
        className="scroll-mt-24 bg-paper-warm pb-16 pt-14 lg:pb-20 lg:pt-16"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ClientsPageClient clients={clients} />
        </div>
      </section>

      <div className="pb-20">
        <PageSection>
          <CtaBand
            title="Join our client roster"
            subtitle="Work with Pelago Consultants and let us handle compliance and incorporation while you focus on growth."
          />
        </PageSection>
      </div>
    </>
  );
}
