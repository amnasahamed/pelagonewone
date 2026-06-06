import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get free help with company registration, GST, and compliance. WhatsApp, phone, or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get free help"
        subtitle="Tell us your stage — idea, incorporated, or scaling. We'll point you to the right filings. No sales pressure."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-12 lg:px-8 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <PageSection variant="slide-right">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">WhatsApp</p>
                  <p className="text-sm text-muted">Fastest — usually within 2 hours</p>
                  <Button
                    href={site.whatsapp}
                    variant="whatsapp"
                    external
                    className="mt-3 !py-2 !text-xs"
                  >
                    Open chat
                  </Button>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5 text-ink">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Phone</p>
                  <a href={site.phoneHref} className="text-accent hover:underline">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5 text-ink">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Email</p>
                  <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5 text-ink">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Office</p>
                  <p className="text-sm text-muted">
                    {site.address.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < site.address.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            </ul>
          </PageSection>

          <PageSection variant="slide-left" delay={80} className="flex flex-col gap-8">
            <MediaVisual imageKey="contact" className="aspect-[4/3] w-full rounded-3xl" />
            <Suspense
              fallback={
                <div className="h-96 animate-pulse rounded-2xl border border-ink/8 bg-white/60" />
              }
            >
              <ContactForm />
            </Suspense>
          </PageSection>
        </div>
      </section>
    </>
  );
}
