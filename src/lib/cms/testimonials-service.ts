import { testimonials as staticTestimonials } from "@/lib/home-content";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { testimonialsQuery } from "@/sanity/lib/queries";

export type Testimonial = (typeof staticTestimonials)[number];

export async function getTestimonials(): Promise<readonly Testimonial[]> {
  const rows = await fetchListFromCms<Testimonial>("testimonials", testimonialsQuery);
  if (rows?.length) return rows;
  return staticTestimonials;
}
