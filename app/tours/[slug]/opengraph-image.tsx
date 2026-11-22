import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";
import { formatRand, site } from "@/lib/site";
import { getTourSeo } from "@/lib/tour-seo";
import { getTour, tours } from "@/lib/tours";

export const alt = "Cape Town Trips tour share image";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  const seo = getTourSeo(slug);
  return new ImageResponse(
    (
      <OgCard
        eyebrow={tour?.category ?? "Cape Town Trips"}
        title={seo?.h1 ?? "Cape Town tours"}
        footer={tour ? `From ${formatRand(tour.price)} ${site.priceBasis} · Cape Town Trips` : "Cape Town Trips"}
      />
    ),
    size,
  );
}
