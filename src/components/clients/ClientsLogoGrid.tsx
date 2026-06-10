import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Client } from "@/lib/clients-content";
import { getClientGridLogoClass } from "@/lib/client-logo";

function LogoCell({ client, index }: { client: Client; index: number }) {
  const logo = client.logo!;

  return (
    <RevealOnScroll delay={(index % 12) * 25} variant="subtle" className="contents">
      <article className="flex aspect-[5/3] flex-col items-center justify-center gap-2 bg-white p-3 sm:p-4">
        <Image
          src={logo}
          alt={client.name}
          width={160}
          height={64}
          className={getClientGridLogoClass()}
        />
        <p className="line-clamp-2 text-center text-[10px] font-medium leading-tight text-muted sm:text-[11px]">
          {client.name}
        </p>
      </article>
    </RevealOnScroll>
  );
}

function NameRoster({ clients }: { clients: Client[] }) {
  if (clients.length === 0) return null;

  return (
    <section className="mt-10 lg:mt-12" aria-label="Additional clients">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-3">
        <h3 className="font-display text-lg font-bold text-ink">Also on our roster</h3>
        <p className="text-xs font-medium text-muted">{clients.length} companies</p>
      </div>
      <ul className="mt-4 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
        {clients.map((client) => (
          <li
            key={client.name}
            className="mb-2.5 break-inside-avoid text-sm leading-snug text-ink/85 [text-wrap:pretty]"
          >
            {client.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

type Props = {
  clients: Client[];
};

export function ClientsLogoGrid({ clients }: Props) {
  const withLogos = clients.filter((client) => client.logo);
  const withoutLogos = clients.filter((client) => !client.logo);

  return (
    <>
      {withLogos.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-ink/8 bg-ink/[0.06] shadow-sm">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {withLogos.map((client, index) => (
              <LogoCell key={client.name} client={client} index={index} />
            ))}
          </div>
        </div>
      )}

      <NameRoster clients={withoutLogos} />
    </>
  );
}
