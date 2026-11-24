import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactCta } from "@/components/ContactCta";
import { Eyebrow } from "@/components/Eyebrow";
import { TourCard } from "@/components/tour/TourCard";
import { pageMeta } from "@/lib/seo";
import { tours } from "@/lib/tours";

export const metadata = pageMeta({
  title: "Private & Small-Group Cape Town Tours | Cape Town Trips",
  description:
    "Authentic Cape Town tours led by local guides Glen and Ryan Manning. Cape Point, winelands, Robben Island, safari and more. Plan your trip.",
  path: "/",
});

export default function HomePage() {
  // Highlight 3 popular signature tours on the homepage
  const featuredSlugs = [
    "cape-point-penguins-tour",
    "cape-winelands-wine-tour",
    "hermanus-whale-watching-tour",
  ];
  const featuredTours = featuredSlugs
    .map((slug) => tours.find((t) => t.slug === slug))
    .filter((t): t is (typeof tours)[number] => Boolean(t));

  return (
    <>
      {/* Hero Section with responsive photographic background */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0b1a24] py-24 md:min-h-[780px] md:py-0">
        {/* Responsive Background image: mobile portrait at <=767px, landscape on desktop */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/cape-town-hero-mobile.webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cape-town-hero.webp"
            alt="Aerial view of Table Mountain, Lion's Head and the Cape Town city bowl"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_30%] md:object-[60%_40%]"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Desktop: left-to-right dark gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/80 via-black/55 to-black/15 md:block"
        />
        {/* Mobile: bottom-to-top gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/20 md:hidden"
        />

        <div className="container-page relative z-10 py-12 md:py-20">
          <Eyebrow onDark>Your Cape Town adventure starts here</Eyebrow>
          <h1 className="mb-5 mt-4 max-w-[780px] text-[clamp(2.5rem,6vw,5.2rem)] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-md">
            See more. Feel more.{" "}
            <span className="text-seafoam [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
              Discover Cape Town.
            </span>
          </h1>
          <p className="max-w-[620px] text-lg text-white/90 md:text-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Explore extraordinary places, meet memorable people, and experience
            the Mother City your way — with private and small-group tours crafted
            around you by local guides Glen and Ryan Manning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/tours" variant="primary">
              Explore our tours
            </Button>
            <Button href="/about" variant="ghost">
              Get to know us
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2.5 text-sm font-bold text-white/90">
            <span
              className="size-2.5 rounded-full bg-sunbird-gold shadow-[0_0_0_5px_rgba(242,177,52,0.3)]"
              aria-hidden="true"
            />
            Unforgettable places. Local experiences. Great stories.
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-[clamp(64px,8vw,104px)]">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Visual highlight */}
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-seafoam via-shell to-[#f8dfaa] p-8 shadow-card md:p-12">
              <span
                className="absolute -right-8 -top-8 size-36 rounded-full bg-sunbird-gold/30"
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-4">
                <span className="inline-block rounded-full bg-white/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-ocean-teal">
                  Local Family Team
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-cape-slate md:text-3xl">
                  Glen &amp; Ryan Manning
                </h3>
                <p className="text-ink-soft">
                  Father and son guides who have spent decades exploring every
                  scenic pass, coastal village, and hidden vineyard of the Cape.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl border border-line bg-white/90 p-4">
                    <strong className="block font-heading text-2xl font-black text-ocean-teal">
                      100%
                    </strong>
                    <span className="text-xs text-ink-soft">
                      Private &amp; Tailored Options
                    </span>
                  </div>
                  <div className="rounded-2xl border border-line bg-white/90 p-4">
                    <strong className="block font-heading text-2xl font-black text-ocean-teal">
                      Door-to-door
                    </strong>
                    <span className="text-xs text-ink-soft">
                      Hotel Pickup &amp; Drop-off
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Copy */}
            <div>
              <Eyebrow>A little about us</Eyebrow>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight text-cape-slate">
                More than a trip. It’s a Cape Town experience.
              </h2>
              <p className="mt-5 text-[1.1rem] leading-relaxed text-ink-soft">
                We believe the best journeys combine iconic sights with the
                unexpected moments that make a place special. When you tour with
                us, you get true insider knowledge, warm South African
                hospitality, and zero tourist-trap rush.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                From the summit of Table Mountain to the African penguins of
                Boulders Beach and the quiet cellar doors of Franschhoek, our aim
                is to make discovering Cape Town easy, welcoming, and
                unforgettable.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 border-b-2 border-sunbird-gold pb-1 font-heading text-[1.05rem] font-bold text-ocean-teal transition hover:text-cape-slate"
                >
                  Meet your hosts Glen &amp; Ryan{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="bg-white py-[clamp(64px,8vw,104px)]">
        <div className="container-page">
          <div className="mb-12 max-w-[700px]">
            <Eyebrow>Find your kind of adventure</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.35rem)] font-extrabold text-cape-slate">
              Explore our tours
            </h2>
            <p className="mt-3 text-[1.12rem] text-ink-soft">
              Choose an experience, take in the scenery, and let Cape Town
              surprise you. Every tour can be tailored to your group’s pace and
              interests.
            </p>
          </div>

          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/tours" variant="secondary">
              View all {tours.length} Cape Town tours →
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Band / Local Lowdown */}
      <section className="bg-cape-slate py-16 text-white md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-[640px]">
            <Eyebrow onDark>The local lowdown</Eyebrow>
            <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-tight text-white">
              Get inspired to explore a little further.
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              From secret tidal pools along False Bay to the best sunset spots on
              Chapman’s Peak, let locals show you what makes this corner of
              Africa truly unforgettable.
            </p>
          </div>
          <Button href="/tours" variant="gold" className="shrink-0">
            Explore Cape Town
          </Button>
        </div>
      </section>

      {/* Contact & Booking CTA */}
      <ContactCta
        eyebrow="Let’s plan something memorable"
        title="Ready to discover Cape Town?"
        text="Tell us what you would love to see and do, and let’s start planning your trip together."
      />
    </>
  );
}
