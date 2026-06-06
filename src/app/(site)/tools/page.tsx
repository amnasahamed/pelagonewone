import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ToolsPageClient } from "@/components/tools/ToolsPageClient";
import { getTools } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Free Business Tools",
  description:
    "Free calculators for Indian founders—GST, burn rate, runway, TDS, CTC, incorporation cost, equity dilution, and more.",
};

function ToolsGridFallback() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-5 py-16 lg:px-8">
      <div className="h-96 rounded-3xl bg-ink/5" />
    </div>
  );
}

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <>
      <PageHero
        badge={
          <>
            <Calculator size={14} />
            Free · Built for India
          </>
        }
        title="Founder's toolkit"
        subtitle="Model GST invoices, burn, runway, hiring cost, and dilution before you sign offers or term sheets—then talk to Pelago when you need filings done right."
        actions={
          <>
            <a
              href="#calculators"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              Open calculators
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View services
              <ArrowRight size={16} />
            </Link>
          </>
        }
        aside={
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:gap-4 sm:p-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">{tools.length}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Tools
              </p>
            </div>
            <div className="border-x border-white/10 text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">₹</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                INR native
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">0</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Login required
              </p>
            </div>
          </div>
        }
      />

      <section
        id="calculators"
        className="relative -mt-6 rounded-t-[2rem] border-t border-ink/6 bg-paper-warm pt-12 lg:pt-14"
      >
        <Suspense fallback={<ToolsGridFallback />}>
          <ToolsPageClient tools={tools} />
        </Suspense>
      </section>

      <div className="pb-24">
        <PageSection>
        <CtaBand
          title="Numbers look tight?"
          subtitle="We'll review your burn, compliance calendar, and structure on a free call—no obligation."
        />
        </PageSection>
      </div>
    </>
  );
}
