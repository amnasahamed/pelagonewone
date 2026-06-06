import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  dark,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "badge-pill mb-4 inline-block",
            dark && "border-white/15 bg-white/10 text-accent-light",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.65rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
