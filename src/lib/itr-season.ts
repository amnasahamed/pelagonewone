const ITR_WHATSAPP_MESSAGE =
  "Hi, I need help with my Income Tax Return (ITR) filing. Can Pelago assist?";

/** ITR filing season promo — set `enabled: false` after the campaign ends. */
export const itrSeason = {
  enabled: true,
  whatsappHref: `https://wa.me/917994659991?text=${encodeURIComponent(ITR_WHATSAPP_MESSAGE)}`,
  dismissStorageKey: "pelago-itr-season-banner-dismissed",
  /** Hide again for this many days after dismiss */
  dismissDays: 7,
  marqueeItems: [
    "ITR season — file on time with Pelago",
    "Salary, business & capital gains returns",
    "GST-linked ITR · revised returns · notices",
    "Free checklist on WhatsApp — reply in hours",
    "Startup India certified advisors · Kozhikode & remote",
  ],
  ctaLabel: "Chat on WhatsApp",
} as const;

export function isItrSeasonActive(): boolean {
  if (!itrSeason.enabled) return false;
  return true;
}

export function getItrDismissExpiry(): number {
  return itrSeason.dismissDays * 24 * 60 * 60 * 1000;
}
