import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Free Health Check",
  description: "Quick compliance health check for your Indian startup.",
};

const checks = [
  "Incorporation documents complete",
  "GST registration status",
  "ROC annual filing calendar",
  "Trademark & IP gaps",
  "Payroll statutory registrations",
];

export default function HealthCheckPage() {
  return (
    <>
      <PageHero
        badge={
          <>
            <ClipboardCheck size={14} />
            Free resource
          </>
        }
        title="Business compliance health check"
        subtitle="Answer a few questions and get a personalized checklist — no login required in this demo."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-12 lg:px-8 lg:pt-16">
        <PageSection variant="rise">
          <div className="grid gap-10 lg:grid-cols-2">
            <ul className="space-y-3">
              {checks.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CheckCircle2 className="shrink-0 text-accent" size={20} />
                  <span className="text-ink">{c}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-ink/8 bg-accent p-8 text-paper shadow-lg">
              <h3 className="font-display text-2xl">Get your roadmap</h3>
              <p className="mt-4 text-paper/75">
                The interactive quiz from your live site can plug in here. For now,
                book a call and we&apos;ll run the checklist with you live.
              </p>
              <Button href="/contact" variant="secondary" className="mt-8 !bg-paper !text-ink">
                Start health check call
              </Button>
            </div>
          </div>
        </PageSection>
      </section>
    </>
  );
}
