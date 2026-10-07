import Image from "next/image";
import { imagePrompts, type ImagePromptKey } from "@/lib/image-prompts";
import { stockImages } from "@/lib/stock-images";
import { cn } from "@/lib/utils";

type Props = {
  imageKey: ImagePromptKey;
  className?: string;
  priority?: boolean;
  overlay?: "dark" | "light" | "none";
};

export function MediaVisual({
  imageKey,
  className,
  priority = false,
  overlay = "none",
}: Props) {
  const { path, prompt } = imagePrompts[imageKey];
  const src = stockImages[imageKey] ?? path;
  const descriptions: Partial<Record<ImagePromptKey, string>> = {
    hero: "A travertine staircase with blue stone accents, representing strong business foundations",
    aboutTeam: "Pelago leadership team in Kozhikode",
    aboutOffice: "Inside Pelago’s office in Kozhikode",
    contact: "Pelago advisors reviewing business paperwork together",
    careers: "Pelago team collaborating at their Kozhikode office",
    servicesStart:
      "Blue stone and ivory travertine blocks forming a stable foundation",
    blogDefault: "An open notebook and blue book on a stone tabletop",
  };
  const alt =
    descriptions[imageKey] ??
    prompt.split(",")[0]?.trim() ??
    "Pelago Consultants";

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden bg-ink/5 ring-1 ring-ink/8",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload={priority}
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
      />
      {overlay === "dark" && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent"
          aria-hidden
        />
      )}
      {overlay === "light" && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"
          aria-hidden
        />
      )}
    </figure>
  );
}
