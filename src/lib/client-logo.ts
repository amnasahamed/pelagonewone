/**
 * Client logo rendering on light backgrounds.
 *
 * - JPEG / opaque raster: baked light (usually white) matte → multiply knocks out the plate.
 * - PNG / WebP / AVIF with alpha: transparent artwork → show as-is with soft opacity.
 * - Dark plate (any format): baked black or dark matte with light marks → screen knocks out the plate.
 */

export type LogoSurface = "opaque-light" | "transparent" | "dark-plate";

const OPAQUE_LIGHT_EXT = new Set(["jpg", "jpeg"]);
const TRANSPARENT_EXT = new Set(["png", "webp", "avif"]);

/** Paths where extension-based guess is wrong (e.g. JPEG with a black matte). */
const LOGO_SURFACE_OVERRIDES: Record<string, LogoSurface> = {
  "/clients/ADAM DESIGN STUDIO.png": "dark-plate",
  "/clients/AL TAMIMI TOURS AND TRAVELS.jpg": "dark-plate",
  "/clients/BISGET INTERNATIONAL CONTRACTING.png": "dark-plate",
  "/clients/custom3d.jpeg": "dark-plate",
  "/clients/DAD GLOBAL VENTURES.jpg": "dark-plate",
  "/clients/dimois.jpeg": "dark-plate",
  "/clients/DOJOX KOZHIKODE VENTURES.png": "dark-plate",
  "/clients/HAMMOCK STUDIO.jpg": "dark-plate",
  "/clients/HAPS INITIATIVE.jpg": "dark-plate",
  "/clients/PIXELEARN ED HUB.webp": "dark-plate",
  "/clients/PRIMEVIA INTERNATIONAL.png": "dark-plate",
  "/clients/profirst.jpeg": "dark-plate",
  "/clients/ROAMZONE INTERNATIONAL.png": "dark-plate",
  "/clients/WEBEC INTERNATIONAL.jpeg": "dark-plate",
};

function extensionOf(logoPath: string): string {
  return logoPath.split(".").pop()?.toLowerCase() ?? "";
}

export function inferLogoSurface(logoPath: string): LogoSurface {
  const override = LOGO_SURFACE_OVERRIDES[logoPath];
  if (override) return override;

  const ext = extensionOf(logoPath);
  if (OPAQUE_LIGHT_EXT.has(ext)) return "opaque-light";
  if (TRANSPARENT_EXT.has(ext)) return "transparent";
  return "opaque-light";
}

const LOGO_STRIP_IMAGE_BASE =
  "h-7 w-auto max-w-[7rem] object-contain object-center transition-all duration-300 sm:max-h-8 sm:max-w-[7.75rem]";

export function getLogoStripImageClass(surface: LogoSurface): string {
  switch (surface) {
    case "opaque-light":
      return `${LOGO_STRIP_IMAGE_BASE} opacity-[0.55] mix-blend-multiply hover:opacity-[0.9]`;
    case "dark-plate":
      return `${LOGO_STRIP_IMAGE_BASE} opacity-[0.72] mix-blend-screen hover:opacity-95`;
    case "transparent":
      return `${LOGO_STRIP_IMAGE_BASE} opacity-[0.52] saturate-[0.9] hover:opacity-[0.88] hover:saturate-100`;
  }
}

const LOGO_CARD_IMAGE_BASE =
  "max-h-[4.5rem] w-auto max-w-full object-contain object-center transition-all duration-300 group-hover:scale-[1.03]";

export function getClientCardLogoClass(surface: LogoSurface): string {
  switch (surface) {
    case "opaque-light":
      return `${LOGO_CARD_IMAGE_BASE} mix-blend-multiply`;
    case "dark-plate":
      return `${LOGO_CARD_IMAGE_BASE} mix-blend-screen`;
    case "transparent":
      return `${LOGO_CARD_IMAGE_BASE} opacity-90 saturate-[0.95] group-hover:opacity-100 group-hover:saturate-100`;
  }
}
