import type { Client } from "@/lib/clients-content";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const FEATURED_LOGO_CLASS =
  "h-[3.15rem] w-auto max-w-[12.6rem] object-contain object-center sm:max-h-[3.6rem] sm:max-w-[13.95rem]";

type Props = { clients: Client[] };

export function ClientsFeaturedStrip({ clients }: Props) {
  const featured = clients.filter((c) => c.logo).slice(0, 16);
  const logos = featured.map((client) => ({
    src: client.logo!,
    alt: client.name,
    width: 252,
    height: 86,
    className: FEATURED_LOGO_CLASS,
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
          gap={86}
          duration={80}
          durationOnHover={25}
        />
      </div>
    </div>
  );
}
