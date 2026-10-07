import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { site, teamContacts } from "@/lib/site";

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
                  <p className="text-sm text-muted">
                    Fastest — usually within 2 hours
                  </p>
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
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-accent hover:underline"
                  >
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
                  <a
                    href={site.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link mt-3"
                  >
                    Get directions <ArrowIcon diagonal />
                  </a>
                </div>
              </li>
            </ul>
            <section
              id="team-contacts"
              aria-labelledby="team-contacts-title"
              className="mt-12 scroll-mt-32"
            >
              <p className="eyebrow">Your team, one call away</p>
              <h2 id="team-contacts-title" className="mt-3 text-3xl text-ink">
                Talk to the right person.
              </h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {teamContacts.map((contact) => (
                  <li key={contact.role}>
                    <a
                      href={contact.href}
                      aria-label={`Call ${contact.role} on ${contact.phone}`}
                      className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <span>
                        <span className="block text-sm font-semibold">
                          {contact.role}
                        </span>
                        <span className="mt-1 block text-sm tabular-nums text-muted">
                          {contact.phone}
                        </span>
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                        <Phone size={16} aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </PageSection>

          <PageSection
            variant="slide-left"
            delay={80}
            className="flex flex-col gap-8"
          >
            <MediaVisual
              imageKey="contact"
              className="aspect-[4/3] w-full rounded-3xl"
            />
            <ContactForm />
          </PageSection>
        </div>
      </section>
    </>
  );
}
