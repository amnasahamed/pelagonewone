import { ArrowRight, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CtaBand({
  title = "Not sure what your business needs?",
  subtitle = "Tell us your stage — we'll recommend the right filings. No pressure, reply within 2 hours.",
}: Props) {
  return (
    <RevealOnScroll variant="rise">
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 sm:px-14 sm:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-96 rounded-full bg-accent-light/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/65">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={site.whatsapp} variant="whatsapp" external>
                <MessageCircle size={18} />
                WhatsApp us
              </Button>
              <Button href="/contact" variant="outline-light">
                Book free call
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
