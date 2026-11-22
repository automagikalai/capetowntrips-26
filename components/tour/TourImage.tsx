import Image from "next/image";
import { showPlaceholders } from "@/lib/site";
import type { Theme } from "@/lib/tours";
import { PlaceholderArt } from "./PlaceholderArt";

type TourImageProps = {
  src?: string;
  alt: string;
  theme: Theme;
  slug: string;
  sizes: string;
  className?: string;
  /** Use for the hero photo only: loads it first */
  preload?: boolean;
};

/** Shows the photo if one exists, otherwise an illustrated brand placeholder. */
export function TourImage({ src, alt, theme, slug, sizes, className = "", preload }: TourImageProps) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={`object-cover ${className}`} />;
  }
  const dev = process.env.NODE_ENV !== "production";
  return (
    <div aria-hidden="true" className={`absolute inset-0 ${className}`}>
      <PlaceholderArt theme={theme} />
      {showPlaceholders && (
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold text-cape-slate max-sm:bottom-2 max-sm:right-2">
          {dev ? `Add hero.jpg to public/images/tours/${slug}/` : "Photo coming soon"}
        </span>
      )}
    </div>
  );
}
