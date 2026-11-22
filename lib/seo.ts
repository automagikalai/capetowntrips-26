import type { Metadata } from "next";
import { facts, site } from "./site";
import type { Tour } from "./tours";
import type { TourSeo } from "./tour-seo";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Staging and preview sites are hidden from search. Set NOINDEX=1 on any non-live host. */
export const noindex =
  process.env.NOINDEX === "1" ||
  (!!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");

/** Title (brand included), description and social tags for one page. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, locale: "en_ZA", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Safe to place inside a <script type="application/ld+json"> tag */
export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

const orgId = () => `${absoluteUrl("/")}#organization`;

export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": orgId(),
  name: site.name,
  url: absoluteUrl("/"),
  description:
    "Private and small-group Cape Town tours led by local guides Glen and Ryan Manning, a father-and-son team.",
  logo: absoluteUrl("/images/logo.png"),
  email: site.email,
  telephone: site.phone || undefined,
  areaServed: { "@type": "AdministrativeArea", name: facts.serviceArea },
  founder: { "@type": "Person", name: "Glen Manning" },
  employee: { "@type": "Person", name: "Ryan Manning" },
  sameAs: facts.sameAs.length ? facts.sameAs : undefined,
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export function tourSchema(tour: Tour, seo: TourSeo, image?: string) {
  const url = absoluteUrl(`/tours/${tour.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: seo.h1,
    description: tour.summary[0],
    url,
    image: image ? [absoluteUrl(image)] : undefined,
    provider: { "@id": orgId() },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        description: s.text,
      })),
    },
    offers: { "@type": "Offer", price: tour.price, priceCurrency: "ZAR", url },
  };
}

export const toursListSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: absoluteUrl(it.path),
  })),
});
