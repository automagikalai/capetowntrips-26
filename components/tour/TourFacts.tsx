import { facts, formatForeign, formatRand, site } from "@/lib/site";
import type { TourSeo } from "@/lib/tour-seo";
import type { Tour } from "@/lib/tours";

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

/** A direct, quotable answer (about 50 words) built from the tour's own facts. */
export function quickAnswer(tour: Tour) {
  return [
    `${tour.title}: ${lower(tour.duration)} from Cape Town.`,
    stop(tour.pickup),
    `It costs from ${formatRand(tour.price)} ${site.priceBasis} (about ${formatForeign(tour.price)}).`,
    stop(tour.bestTime),
    "Send an enquiry and we’ll call you to plan it. Nothing is paid online.",
  ].join(" ");
}

export function InShort({ tour, seo }: { tour: Tour; seo: TourSeo }) {
  return (
    <p className="mb-6 rounded-card border-l-4 border-sunbird-gold bg-white p-5 text-[1.05rem] leading-relaxed text-cape-slate">
      <strong className="font-heading">In short: </strong>
      {seo.inShort ?? quickAnswer(tour)}
    </p>
  );
}

/** Plain-language facts, laid out so people (and search and AI tools) can quote them. */
export function TourFacts({ tour, seo }: { tour: Tour; seo: TourSeo }) {
  const rows: [string, string][] = [
    ["Price", `From ${formatRand(tour.price)} ${site.priceBasis} (about ${formatForeign(tour.price)})`],
    ["Duration", tour.duration],
    ["Start time", seo.startTime],
    ["Pick-up", `${tour.pickup}. Areas: ${facts.pickupAreas}`],
    ["Group size and style", tour.format],
    ["Language", facts.languages],
    ["Fitness level", seo.fitness],
    ["Suitable for", seo.ages],
    ["Season and best time", tour.bestTime],
    ["Cancellation and weather", facts.cancellation],
  ];
  return (
    <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
      {rows.map(([term, value]) => (
        <div key={term} className="bg-white p-5">
          <dt className="mb-1 text-[0.78rem] font-black uppercase tracking-[0.12em] text-ocean-teal">{term}</dt>
          <dd className="text-[0.95rem] leading-snug text-cape-slate">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
