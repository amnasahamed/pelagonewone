import Image from "next/image";
import type { Client } from "@/lib/clients-content";
import { cn } from "@/lib/utils";

function LogoCell({ client }: { client: Client }) {
  const logo = client.logo!;

  return (
    <article
      className={cn(
        "flex h-40 flex-col items-center justify-center gap-3 rounded-xl border border-ink/8 p-4 sm:h-48 sm:p-5",
        client.logoBackground === "dark" ? "bg-ink" : "bg-white",
      )}
    >
      <div className="relative h-20 w-full sm:h-24">
        <Image
          src={logo}
          alt={client.brandName ?? client.name}
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 170px"
          className="object-contain"
        />
      </div>
      <p
        className={cn(
          "line-clamp-2 text-center text-[10px] font-medium leading-tight sm:text-[11px]",
          client.logoBackground === "dark" ? "text-white/75" : "text-muted",
        )}
      >
        {client.brandName ?? client.name}
      </p>
    </article>
  );
}

function NameRoster({ clients }: { clients: Client[] }) {
  if (clients.length === 0) return null;

  return (
    <section className="mt-10 lg:mt-12" aria-label="Additional clients">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-3">
        <h3 className="font-display text-lg font-bold text-ink">
          Also on our roster
        </h3>
        <p className="text-xs font-medium text-muted">
          {clients.length} companies
        </p>
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {withLogos.map((client) => (
            <LogoCell key={client.name} client={client} />
          ))}
        </div>
      )}

      <NameRoster clients={withoutLogos} />
    </>
  );
}
