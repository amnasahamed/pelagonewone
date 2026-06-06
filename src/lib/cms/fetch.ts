import { client, isSanityConfigured } from "@/sanity/lib/client";

export async function fetchFromCms<T>(
  tag: string,
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    const result = await client.fetch<T>(query, params, {
      next: { tags: [tag] },
    });
    return result ?? null;
  } catch {
    return null;
  }
}

export async function fetchListFromCms<T>(
  tag: string,
  query: string,
  params: Record<string, unknown> = {},
): Promise<T[] | null> {
  const result = await fetchFromCms<T[]>(tag, query, params);
  if (!result?.length) return null;
  return result;
}
