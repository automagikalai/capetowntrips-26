import Image from "next/image";

type PortraitCardProps = {
  alt: string;
  /** Leave out to show the "photo coming soon" placeholder */
  src?: string;
  /** Moves the coloured backdrop to the other side */
  flip?: boolean;
  priority?: boolean;
  placeholderLabel?: string;
};

export function PortraitCard({
  alt,
  src,
  flip = false,
  priority = false,
  placeholderLabel = "Photo coming soon",
}: PortraitCardProps) {
  return (
    <div className="relative w-full max-w-[440px] justify-self-center max-sm:mr-[22px] max-sm:max-w-[360px]">
      <div
        aria-hidden="true"
        className={`absolute rounded-photo ${
          flip
            ? "inset-[22px_22px_-22px_-22px] bg-sun-wash"
            : "inset-[22px_-22px_-22px_22px] bg-seafoam"
        }`}
      />
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1250}
          priority={priority}
          sizes="(max-width: 760px) 80vw, 440px"
          className="relative aspect-[4/5] w-full rounded-photo object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative grid aspect-[4/5] w-full place-items-end overflow-hidden rounded-photo bg-gradient-to-br from-[#e5f0e9] to-seafoam"
        >
          <span className="absolute left-1/2 top-[24%] aspect-square w-[34%] -translate-x-1/2 rounded-full bg-cape-slate/85" />
          <span className="absolute bottom-0 left-1/2 h-[38%] w-[74%] -translate-x-1/2 rounded-t-[50%_90%] bg-cape-slate/85" />
          <span className="relative z-10 mb-4 rounded-full bg-white px-3.5 py-[7px] text-[0.85rem] font-extrabold text-cape-slate">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}
