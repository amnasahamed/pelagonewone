import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  imageClassName?: string;
  itemClassName?: string;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
};

export function LogoCloud({
  className,
  logos,
  imageClassName,
  itemClassName,
  gap = 42,
  duration = 80,
  durationOnHover = 25,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className,
      )}
    >
      <InfiniteSlider
        gap={gap}
        reverse
        duration={duration}
        durationOnHover={durationOnHover}
      >
        {logos.map((logo) => (
          <span
            key={`logo-${logo.alt}`}
            className={cn("flex shrink-0 items-center justify-center", itemClassName)}
          >
            <img
              alt={logo.alt}
              className={cn(
                "pointer-events-none h-4 select-none object-contain md:h-5 dark:brightness-0 dark:invert",
                logo.className,
                imageClassName,
              )}
              height={logo.height ?? undefined}
              loading="lazy"
              src={logo.src}
              width={logo.width ?? undefined}
            />
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
