import Image from "next/image";
import type { officeGallery } from "@/lib/about-content";

type OfficePhoto = (typeof officeGallery)[number];

export function AboutOfficeGallery({ photos }: { photos: readonly OfficePhoto[] }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className={
            index === 0
              ? "relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/8"
              : "relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-ink/8"
          }
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              index === 0
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            }
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </figure>
      ))}
    </div>
  );
}
