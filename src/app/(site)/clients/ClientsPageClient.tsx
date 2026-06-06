"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Building2, Search } from "lucide-react";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Client } from "@/lib/clients-content";
import { clientsPageCopy } from "@/lib/clients-content";
import {
  getClientCardLogoClass,
  inferLogoSurface,
} from "@/lib/client-logo";
import { cn } from "@/lib/utils";

function ClientCard({ client, index }: { client: Client; index: number }) {
  const hasLogo = Boolean(client.logo);

  return (
    <RevealOnScroll delay={(index % 10) * 35} variant="subtle">
      <article
        className={cn(
          "client-card group flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-5 shadow-sm transition-all duration-300",
          "hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md",
          !hasLogo && "bg-paper-warm/80",
        )}
      >
        <div
          className={cn(
            "relative flex min-h-[5.5rem] w-full items-center justify-center rounded-xl",
            hasLogo ? "bg-[#f6f8fc] ring-1 ring-ink/[0.06]" : "bg-white ring-1 ring-ink/8",
          )}
        >
          {hasLogo && client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={180}
              height={72}
              className={getClientCardLogoClass(inferLogoSurface(client.logo))}
            />
          ) : (
            <Building2
              className="text-accent/35"
              size={32}
              strokeWidth={1.5}
              aria-hidden
            />
          )}
        </div>
        <p className="mt-4 line-clamp-3 text-center text-xs font-semibold leading-snug text-ink">
          {client.name}
        </p>
      </article>
    </RevealOnScroll>
  );
}

export function ClientsPageClient({ clients }: { clients: Client[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.name.toLowerCase().includes(q));
  }, [query, clients]);

  return (
    <div className="clients-directory">
      <PageSection variant="rise">
        <SectionHeader
          eyebrow="Directory"
          title={clientsPageCopy.rosterTitle}
          subtitle={clientsPageCopy.rosterSubtitle}
        />
      </PageSection>

      <PageSection delay={60} className="mt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={clientsPageCopy.searchPlaceholder}
              className="w-full rounded-xl border border-ink/10 bg-white py-3 pl-11 pr-4 text-sm text-ink shadow-sm outline-none transition-shadow placeholder:text-muted/80 focus:border-accent/40 focus:shadow-md focus:ring-2 focus:ring-accent/15"
              aria-label="Search clients"
            />
          </div>
          <p className="text-sm text-muted">
            {filtered.length} of {clients.length} clients
          </p>
        </div>
      </PageSection>

      {filtered.length === 0 ? (
        <PageSection delay={80} className="mt-12">
          <p className="rounded-2xl border border-dashed border-ink/15 bg-paper-warm px-6 py-12 text-center text-muted">
            No clients match your search. Try a different name or clear the search.
          </p>
        </PageSection>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
