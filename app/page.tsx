import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactCta } from "@/components/ContactCta";
import { Eyebrow } from "@/components/Eyebrow";
import { Check, Shield } from "@/components/tour/Icons";
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
      <section className="relative isolate flex min-h-[480px] items-start overflow-hidden bg-[#0b1a24] pt-2 pb-24 md:min-h-[640px] md:pb-0">
        {/* Responsive Background image: mobile portrait at <=767px, landscape on desktop */}
        <picture className="absolute inset-0 -z-20 h-full w-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/cape-town-hero-mobile.webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cape-town-hero.webp"
            alt="Aerial view of Table Mountain, Lion's Head and the Cape Town city bowl"
            className="h-full w-full object-cover object-top"
            style={{ objectPosition: 'center top' }}
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

        <div className="container-page relative z-10 pt-1 pb-12 md:pt-2 md:pb-20">
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

      {/* Trust & Safety Banner directly below hero */}
      <aside aria-label="Accreditation and safety" className="border-y border-line bg-white py-4 shadow-sm">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-center text-xs font-bold text-cape-slate sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <Shield className="size-4 text-ocean-teal" />
            Be safe with trained &amp; accredited guides
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="size-4 text-sunbird-gold" />
            CATHSSETA registered tour guides
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="size-4 text-ocean-teal" />
            Certified first-aid trained
          </span>
        </div>
      </aside>

      {/* About / Intro Section */}
      <section className="py-[clamp(64px,8vw,104px)]">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Visual highlight */}
            <div className="rounded-[28px] bg-cape-slate p-8 shadow-card md:p-12">
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-seafoam">
                  Local Family Team
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                  Glen &amp; Ryan Manning
                </h3>
                <p className="text-white/75">
                  Father and son guides who have spent decades exploring every
                  scenic pass, coastal village, and hidden vineyard of the Cape.
                </p>
                {/* On small screen sizes: stack vertically; on larger screens: side-by-side */}
                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5">
                    <strong className="block font-heading text-lg font-black text-sunbird-gold sm:text-xl">
                      100%
                    </strong>
                    <span className="text-xs font-semibold text-white/70">
                      Private &amp; Tailored
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5">
                    <strong className="block font-heading text-lg font-black text-sunbird-gold sm:text-xl">
                      Door-to-door
                    </strong>
                    <span className="text-xs font-semibold text-white/70">
                      Hotel Pick-up &amp; Drop-off
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5">
                    <strong className="block font-heading text-lg font-black text-sunbird-gold sm:text-xl">
                      Safe &amp; Secure
                    </strong>
                    <span className="text-xs font-semibold text-white/70">
                      CATHSSETA &amp; First-Aid
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
                Be safe and secure with trained, accredited guides. Both Glen and Ryan are officially registered with CATHSSETA and trained in first aid, giving you complete confidence and care from hotel pick-up to drop-off.
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">
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
