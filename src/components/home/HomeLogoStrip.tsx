import Image from "next/image";
import Link from "next/link";
import type { Client } from "@/lib/clients-content";
import { PageSection } from "@/components/PageSection";
import { cn } from "@/lib/utils";

type Props = { clients: Client[] };

export function HomeLogoStrip({ clients }: Props) {
  const featuredLogos = clients.filter((c) => c.logo).slice(0, 12);
  const marqueeLogos = [...featuredLogos, ...featuredLogos];

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

        <div className="home-logo-marquee mt-7">
          <ul className="home-logo-marquee__track">
            {marqueeLogos.map((client, index) => {
              const logo = client.logo!;
              return (
                <li
                  key={`${client.name}-${index}`}
                  className="home-logo-marquee__item"
                  aria-hidden={index >= featuredLogos.length}
                >
                  <span className="home-logo-marquee__pill">
                    <Image
                      src={logo}
                      alt={index < featuredLogos.length ? client.name : ""}
                      width={120}
                      height={40}
                      className={cn(
                        "h-7 w-auto max-w-[6.5rem] object-contain object-center sm:h-8 sm:max-w-[7rem]",
                      )}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </PageSection>
    </section>
  );
}
