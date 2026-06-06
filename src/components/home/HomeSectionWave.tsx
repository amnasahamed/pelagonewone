import { cn } from "@/lib/utils";

type Props = {
  /** Fill color for the wave — matches the section below */
  fill?: "white" | "warm";
  className?: string;
};

export function HomeSectionWave({ fill = "white", className }: Props) {
  const fillClass = fill === "white" ? "text-white" : "text-paper-warm";

  return (
    <div
      className={cn("home-wave pointer-events-none -mt-px leading-[0]", className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className={cn("block h-8 w-full sm:h-10 lg:h-12", fillClass)}
        fill="currentColor"
      >
        <path d="M0,32 C360,64 720,0 1080,24 C1260,36 1380,40 1440,32 L1440,48 L0,48 Z" />
      </svg>
    </div>
  );
}
