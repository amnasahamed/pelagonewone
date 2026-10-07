import type { Client } from "@/lib/clients-content";
import { clients as staticClients } from "@/lib/clients-content";
import { suppliedClientLogos } from "@/lib/supplied-client-logos";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { clientsQuery } from "@/sanity/lib/queries";

type SanityClient = { name: string; logo?: string; featured?: boolean };

function clientKey(name: string) {
  return name
    .toLowerCase()
    .replace(/\b(llp|private|limited|pvt|ltd)\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function identityKeys(client: Client) {
  return [client.name, ...(client.brandName ? [client.brandName] : [])].map(
    clientKey,
  );
}

export async function getClients(): Promise<Client[]> {
  const rows = await fetchListFromCms<SanityClient>("clients", clientsQuery);
  if (rows?.length) {
    const supplied = new Map(
      suppliedClientLogos.flatMap((client) =>
        identityKeys(client).map((key) => [key, client] as const),
      ),
    );
    const merged = rows.map((client) => ({
      ...client,
      ...supplied.get(clientKey(client.name)),
      name: client.name,
    }));
    const existing = new Set(merged.flatMap(identityKeys));
    return [
      ...merged,
      ...staticClients.filter(
        (client) => !identityKeys(client).some((key) => existing.has(key)),
      ),
    ];
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
  const clients = await getClients();
  const featured = clients.filter((client) => client.featured && client.logo);
  return featured.length
    ? featured
    : clients.filter((client) => client.logo).slice(0, 12);
}
