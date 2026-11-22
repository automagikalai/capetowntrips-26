import { ContactCta } from "@/components/ContactCta";
import { Eyebrow } from "@/components/Eyebrow";
import { TourCard } from "@/components/tour/TourCard";
import { breadcrumbSchema, jsonLd, pageMeta, toursListSchema } from "@/lib/seo";
import { tours } from "@/lib/tours";

export const metadata = pageMeta({
  title: "Cape Town Tours & Day Trips | Cape Town Trips",
  description:
    "Compare our full-day and multi-day tours from Cape Town, with local guides, hotel pickup and flexible private options. Enquire to book.",
  path: "/tours",
});

export default function ToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(toursListSchema(tours.map((t) => ({ name: t.title, path: `/tours/${t.slug}` })))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Tours", path: "/tours" }])),
        }}
      />
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_15%,rgb(191_227_220/0.7),transparent_35%)] pb-[clamp(48px,6vw,72px)] pt-[clamp(64px,9vw,104px)]">
        <div className="container-page">
          <Eyebrow>Shaped around you</Eyebrow>
          <h1 className="mb-[18px] mt-5 max-w-[780px] text-[clamp(2.6rem,6vw,4.8rem)]">
            Cape Town tours and <span className="text-ocean-teal">day trips</span>
          </h1>
          <p className="max-w-[620px] text-[1.15rem]">
            Choose a tour to see the day in detail, then send a quick enquiry. There’s no online payment. We’ll call you to plan it together.
          </p>
        </div>
      </section>

      <section className="pb-[94px] max-sm:pb-[68px]">
        <div className="container-page">
          {/* Staggered masonry-style layout: cards offset every other column */}
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, i) => (
              <div
                key={tour.slug}
                className={
                  // On large screens: offset middle column down, offset last column less
                  i % 3 === 1
                    ? "lg:mt-10"
                    : i % 3 === 2
                    ? "lg:mt-5"
                    : ""
                }
              >
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Not sure which tour?"
        title="Tell us what you love and we’ll suggest the day."
        text="Send an enquiry from any tour page, or email us, and we’ll take it from there."
      />
    </>
  );
}
