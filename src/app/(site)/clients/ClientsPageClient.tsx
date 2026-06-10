"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ClientsLogoGrid } from "@/components/clients/ClientsLogoGrid";
import { PageSection } from "@/components/PageSection";
import { SectionHeader } from "@/components/SectionHeader";
import type { Client } from "@/lib/clients-content";
import { clientsPageCopy } from "@/lib/clients-content";

export function ClientsPageClient({ clients }: { clients: Client[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.name.toLowerCase().includes(q));
  }, [query, clients]);

  const logoCount = filtered.filter((client) => client.logo).length;

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
            {logoCount > 0 && logoCount < filtered.length
              ? ` · ${logoCount} with logos`
              : ""}
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
        <div className="mt-10">
          <ClientsLogoGrid clients={filtered} />
        </div>
      )}
    </div>
  );
}
