import { imagePrompts, type ImagePromptKey } from "@/lib/image-prompts";

/** Brand images in /public/images — see IMAGE_PROMPTS.md */
export const stockImages: Record<ImagePromptKey, string> = {
  hero: imagePrompts.hero.path,
  aboutTeam: imagePrompts.aboutTeam.path,
  aboutOffice: imagePrompts.aboutOffice.path,
  servicesStart: imagePrompts.servicesStart.path,
  servicesTax: imagePrompts.servicesTax.path,
  contact: imagePrompts.contact.path,
  careers: imagePrompts.careers.path,
  blogDefault: imagePrompts.blogDefault.path,
};
