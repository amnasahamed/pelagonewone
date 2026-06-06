import type { Client } from "@/lib/clients-content";
import { clients as staticClients } from "@/lib/clients-content";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { clientsQuery } from "@/sanity/lib/queries";

type SanityClient = { name: string; logo?: string; featured?: boolean };

export async function getClients(): Promise<Client[]> {
  const rows = await fetchListFromCms<SanityClient>("clients", clientsQuery);
  if (rows?.length) {
    return rows.map(({ name, logo }) => ({ name, ...(logo ? { logo } : {}) }));
  }
  return staticClients;
}

export async function getClientsWithLogos(): Promise<Client[]> {
  const clients = await getClients();
  return clients.filter((c) => c.logo);
}

export async function getClientStats() {
  const clients = await getClients();
  return { total: clients.length };
}

export async function getFeaturedClients(): Promise<Client[]> {
  const rows = await fetchListFromCms<SanityClient>("clients", clientsQuery);
  if (rows?.length) {
    const featured = rows.filter((c) => c.featured && c.logo);
    if (featured.length) {
      return featured.map(({ name, logo }) => ({ name, logo: logo! }));
    }
  }
  return staticClients.filter((c) => c.logo).slice(2, 14);
}
