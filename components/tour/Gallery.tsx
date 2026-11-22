import Image from "next/image";

/** Lays out 1 to 6 photos neatly. One photo is fine: it simply runs full width. */
export function Gallery({ images, title }: { images: { src: string; alt?: string }[]; title: string }) {
  const shown = images.slice(0, 6);
  if (shown.length === 0) return null;
  const many = shown.length >= 3;
  return (
    <div
      className={`grid gap-3 ${
        shown.length === 1 ? "grid-cols-1" : many ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {shown.map(({ src, alt }, i) => (
        <div
          key={src}
          className={`relative overflow-hidden rounded-[18px] ${
            shown.length === 1 ? "aspect-[16/9]" : many && i === 0 ? "aspect-[4/3] col-span-2 lg:row-span-2 lg:aspect-auto" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={src}
            alt={alt ?? `${title}, photo ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
