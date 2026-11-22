import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { tours } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/tours", ...tours.map((t) => `/tours/${t.slug}`)];
  return pages.map((p) => ({ url: absoluteUrl(p) }));
}
