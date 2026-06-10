import Link from "next/link";
import type { Client } from "@/lib/clients-content";
import { PageSection } from "@/components/PageSection";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

type Props = { clients: Client[] };

export function HomeLogoStrip({ clients }: Props) {
  const featuredLogos = clients.filter((c) => c.logo).slice(0, 12);
  const logos = featuredLogos.map((client) => ({
    src: client.logo!,
    alt: client.name,
    width: 216,
    height: 72,
  }));

  return (
    <section className="home-logo-strip" aria-label="Our clients">
      <PageSection variant="subtle" className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-8">
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Trusted across India
            </p>
            <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
              Startup India certified
            </p>
            <p className="mt-1 text-sm font-medium text-white/60">
              Kozhikode HQ · advisors across India
            </p>
          </div>
          <Link
            href="/clients"
            className="interactive-link shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            See all clients →
          </Link>
        </div>

        <LogoCloud
          className="mt-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          logos={logos}
          gap={86}
          duration={80}
          durationOnHover={25}
          imageClassName="h-[3.15rem] max-w-[12.6rem] object-contain object-center opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-[3.6rem] md:max-w-[14.4rem]"
        />
      </PageSection>
    </section>
  );
}
