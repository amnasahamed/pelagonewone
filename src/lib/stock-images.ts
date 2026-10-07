import { imagePrompts, type ImagePromptKey } from "@/lib/image-prompts";

/** Site image paths — real Pelago team & office photos in /public/office, /public/team, /public/staff */
export const stockImages: Record<ImagePromptKey, string> = {
  hero: "/images/editorial/foundations-hero.jpg",
  aboutTeam: "/office/office-3.jpg",
  aboutOffice: "/office/office-4.jpg",
  servicesStart: "/images/editorial/foundations-service.jpg",
  servicesTax: imagePrompts.servicesTax.path,
  contact: "/office/office-5.jpg",
  careers: "/office/office-2.jpg",
  blogDefault: "/images/editorial/founders-journal.jpg",
};
