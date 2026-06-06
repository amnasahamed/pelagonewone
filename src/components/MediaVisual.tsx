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
  const alt = prompt.split(",")[0]?.trim() ?? "Pelago Consultants";

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
        priority={priority}
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
