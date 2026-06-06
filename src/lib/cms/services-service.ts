import { serviceSections as staticSections } from "@/lib/data";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { serviceSectionsQuery } from "@/sanity/lib/queries";

export type ServiceItem = {
  name: string;
  timeline: string;
  desc: string;
  valueLabel?: string;
  toolId?: string;
  learnSlug?: string;
  blogSlug?: string;
};

export type ServiceSection = {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export async function getServiceSections(): Promise<ServiceSection[]> {
  const rows = await fetchListFromCms<ServiceSection>("services", serviceSectionsQuery);
  if (rows?.length) return rows;
  return staticSections.map((s) => ({
    id: s.id,
    title: s.title,
    subtitle: s.subtitle,
    items: s.items.map((item) => ({ ...item })),
  }));
}

export function countServices(sections: readonly { items: readonly unknown[] }[]): number {
  return sections.reduce((n, s) => n + s.items.length, 0);
}

export async function getBlogSlugForService(
  serviceName: string,
  sections?: ServiceSection[],
): Promise<string | undefined> {
  const data = sections ?? (await getServiceSections());
  for (const section of data) {
    const item = section.items.find((i) => i.name === serviceName);
    if (item?.blogSlug) return item.blogSlug;
  }
  const { getBlogSlugForService: staticLookup } = await import("@/lib/blog-services");
  return staticLookup(serviceName);
}

export async function getServiceExtra(
  serviceName: string,
  sections?: ServiceSection[],
): Promise<{ valueLabel: string; toolId?: string; learnSlug?: string } | undefined> {
  const data = sections ?? (await getServiceSections());
  for (const section of data) {
    const item = section.items.find((i) => i.name === serviceName);
    if (item?.valueLabel) {
      return {
        valueLabel: item.valueLabel,
        toolId: item.toolId,
        learnSlug: item.learnSlug,
      };
    }
  }
  const { serviceExtras } = await import("@/lib/service-extras");
  return serviceExtras[serviceName];
}
