import Link from "next/link";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { formatRand, site } from "@/lib/site";
import type { Tour } from "@/lib/tours";
import { TourImage } from "./TourImage";

export function TourHero({ tour, hero, h1, alt }: { tour: Tour; hero?: string; h1: string; alt: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-cape-slate text-white">
      <div className="absolute inset-0 -z-10">
        <TourImage
          src={hero}
          slug={tour.slug}
          theme={tour.theme}
          alt={alt}
          sizes="100vw"
          preload
        />
        {/* Dark gradient keeps the white text readable on any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-cape-slate/95 via-cape-slate/55 to-cape-slate/10" />
      </div>

      <div className="container-page flex min-h-[clamp(440px,64vh,640px)] flex-col justify-end pb-12 pt-28 max-sm:pb-9">
        <nav aria-label="Breadcrumb" className="mb-5 text-[0.85rem] text-white/80">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/tours" className="hover:text-white">Tours</Link>
        </nav>
        <Eyebrow onDark>{tour.category}</Eyebrow>
        <h1 className="mb-3.5 mt-4 max-w-[860px] text-[clamp(2.3rem,5.5vw,4.4rem)] text-white">{h1}</h1>
        <p className="max-w-[640px] text-[1.15rem] text-white/90!">{tour.tagline}</p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <p className="font-heading text-[1.05rem] font-bold text-white!">
            From <span className="text-[1.7rem] font-extrabold">{formatRand(tour.price)}</span>{" "}
            <span className="text-[0.9rem] font-semibold text-white/80">{site.priceBasis}</span>
          </p>
          <div className="flex flex-wrap gap-3 max-sm:w-full">
            <Button href="#enquire" variant="gold">Request a call back</Button>
            <Button href="#itinerary" variant="ghost">See the day</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
