import type { Metadata } from "next";
import { Check, Package } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Startup Bundle",
  description: "Bundled incorporation, GST, and compliance package for new Indian startups.",
};

const included = [
  "Private Limited or LLP incorporation",
  "PAN, TAN & bank-ready document kit",
  "GST registration (if applicable)",
  "Startup India guidance",
  "First-year compliance calendar",
  "Dedicated WhatsApp advisor",
];

export default function StartupBundlePage() {
  return (
    <>
      <PageHero
        badge={
          <>
            <Package size={14} />
            Startup bundle
          </>
        }
        title="Everything to launch compliant — one package"
        subtitle="Built for first-time founders who want predictable pricing and a single point of contact from day zero."
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95"
            >
              Get bundle quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Compare services
            </Link>
          </>
        }
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-12 lg:px-8 lg:pt-16">
        <PageSection variant="rise">
          <div className="overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-ink/8 p-10 lg:border-b-0 lg:border-r lg:p-14">
                <h2 className="font-display text-2xl tracking-tight text-ink">
                  What&apos;s in the bundle
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  One engagement covers structure, registrations, and your first-year
                  compliance roadmap — so you&apos;re not piecing vendors together at launch.
                </p>
              </div>
              <div className="bg-paper-warm p-10 lg:p-14">
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink">
                      <Check className="shrink-0 text-accent" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-muted">
                  Final pricing depends on structure and state — we quote upfront.
                </p>
              </div>
            </div>
          </div>
        </PageSection>
      </section>
    </>
  );
}
