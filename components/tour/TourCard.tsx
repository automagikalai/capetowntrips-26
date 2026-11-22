import Link from "next/link";
import { getTourImages } from "@/lib/tour-images";
import { getTourSeo } from "@/lib/tour-seo";
import { formatRand, site } from "@/lib/site";
import type { Tour } from "@/lib/tours";
import { TourImage } from "./TourImage";

export function TourCard({ tour }: { tour: Tour }) {
  const { hero, heroAlt } = getTourImages(tour.slug);
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-[5px] hover:shadow-lift"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-seafoam">
        <TourImage
          src={hero}
          slug={tour.slug}
          theme={tour.theme}
          alt={heroAlt ?? getTourSeo(tour.slug)?.imageAlt ?? tour.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <span className="self-start rounded-full bg-seafoam px-3 py-1 text-[0.78rem] font-bold text-cape-slate">{tour.category}</span>
        <h3 className="text-[1.3rem]">{tour.title}</h3>
        <p className="text-[0.95rem]">{tour.tagline}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3 text-[0.85rem]">
          <span>{tour.duration}</span>
          <span className="text-right">
            from <strong className="block font-heading text-[1.3rem] text-cape-slate">{formatRand(tour.price)}</strong>
            <span className="text-[0.75rem]">{site.priceBasis}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
