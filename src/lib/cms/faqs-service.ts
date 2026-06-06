import { faqs as staticFaqs } from "@/lib/data";
import { homeExtraFaqs } from "@/lib/home-content";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { faqsQuery } from "@/sanity/lib/queries";

export type FaqItem = { q: string; a: string };

const staticAllFaqs: FaqItem[] = [...staticFaqs, ...homeExtraFaqs];

export async function getFaqs(): Promise<FaqItem[]> {
  const rows = await fetchListFromCms<FaqItem>("faqs", faqsQuery);
  if (rows?.length) return rows;
  return staticAllFaqs;
}

export async function getHomeFaqs(limit = 6): Promise<FaqItem[]> {
  const faqs = await getFaqs();
  return faqs.slice(0, limit);
}
