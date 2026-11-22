import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const alt = "Cape Town Trips: private and small-group Cape Town tours";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <OgCard eyebrow="Cape Town Trips" title="Private & small-group Cape Town tours" footer="Local guides Glen and Ryan Manning · capetowntrips.com" />,
    size,
  );
}
