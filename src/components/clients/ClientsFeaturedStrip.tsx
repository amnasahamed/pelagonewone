import type { Client } from "@/lib/clients-content";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const FEATURED_LOGO_CLASS =
  "h-[4rem] w-[9rem] object-contain object-center md:h-[4rem]";

type Props = { clients: Client[] };

export function ClientsFeaturedStrip({ clients }: Props) {
  const withLogos = clients.filter((client) => client.logo);
  const featured = [
    ...withLogos.filter((client) => client.featured),
    ...withLogos.filter((client) => !client.featured),
  ].slice(0, 16);
  const logos = featured.map((client) => ({
    src: client.logo!,
    alt: client.brandName ?? client.name,
    width: 252,
    height: 86,
    className: FEATURED_LOGO_CLASS,
    itemClassName:
      client.logoBackground === "dark" ? "bg-ink" : "bg-paper-warm",
  }));

  return (
    <div className="clients-featured-strip border-y border-ink/6 bg-white py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          A sample of companies we work with
        </p>
        <LogoCloud
          className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          logos={logos}
          itemClassName="h-24 w-48 rounded-xl p-4"
          gap={24}
          duration={80}
          durationOnHover={25}
        />
      </div>
    </div>
  );
}
