import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { BookingCard } from "@/components/tour/BookingCard";
import { EnquiryForm } from "@/components/tour/EnquiryForm";
import { FaqList } from "@/components/tour/FaqList";
import { Gallery } from "@/components/tour/Gallery";
import { HostsStrip } from "@/components/tour/HostsStrip";
import { Check, Cross, Shield } from "@/components/tour/Icons";
import { PlaceholderGallery } from "@/components/tour/PlaceholderGallery";
import { StickyBar } from "@/components/tour/StickyBar";
import { TourCard } from "@/components/tour/TourCard";
import { TourFacts, quickAnswer } from "@/components/tour/TourFacts";
import { TourHero } from "@/components/tour/TourHero";
import { formatRand, showPlaceholders, site, telHref, whatsappHref } from "@/lib/site";
import { breadcrumbSchema, jsonLd, pageMeta, tourSchema } from "@/lib/seo";
import { getTourImages } from "@/lib/tour-images";
import { getTourSeo } from "@/lib/tour-seo";
import { commonFaqs, getRelated, getTour, tours } from "@/lib/tours";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = getTourSeo(slug);
  if (!getTour(slug) || !seo) return {};
  return pageMeta({ title: seo.seoTitle, description: seo.metaDescription, path: `/tours/${slug}` });
}

const h2 = "mb-5 text-[clamp(1.7rem,3vw,2.3rem)]";

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  const seo = getTourSeo(slug);
  if (!tour || !seo) notFound();

  const { hero, heroAlt, gallery } = getTourImages(slug);
  const related = getRelated(tour);
  const faqs = [...tour.faqs, ...seo.extraFaqs, ...commonFaqs];

  const strip = [
    ["Duration", tour.duration],
    ["Style", tour.format],
    ["Pick-up", tour.pickup],
    ["Best time", tour.bestTime],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(tourSchema(tour, seo, hero)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tours", path: "/tours" },
              { name: tour.title, path: `/tours/${tour.slug}` },
            ]),
          ),
        }}
      />

      <TourHero tour={tour} hero={hero} h1={seo.h1} alt={heroAlt ?? seo.imageAlt} />

      {/* Key facts */}
      <section aria-label="Tour facts" className="border-b border-line bg-white">
        <dl className="container-page grid gap-x-8 gap-y-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {strip.map(([term, value]) => (
            <div key={term}>
              <dt className="mb-1 text-[0.78rem] font-black uppercase tracking-[0.12em] text-ocean-teal">{term}</dt>
              <dd className="text-[0.95rem] leading-snug text-cape-slate">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="pb-24 lg:pb-0">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-16 max-sm:py-12">
          <div className="min-w-0 space-y-16">
            {/* Overview */}
            <section aria-labelledby="overview">
              <Eyebrow>About this tour</Eyebrow>
              <h2 id="overview" className={`${h2} mt-4`}>What to expect</h2>
              <p className="mb-6 rounded-card border-l-4 border-sunbird-gold bg-white p-5 text-[1.05rem] leading-relaxed text-cape-slate">
                <strong className="font-heading">In short: </strong>
                {quickAnswer(tour)}
              </p>
              <div className="space-y-4 text-[1.05rem]">
                {tour.summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-3 rounded-2xl border border-line bg-white p-4 text-[0.95rem] text-cape-slate">
                    <Check className="mt-0.5 text-ocean-teal" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Facts at a glance */}
            <section aria-labelledby="facts">
              <Eyebrow>At a glance</Eyebrow>
              <h2 id="facts" className={`${h2} mt-4`}>Tour facts</h2>
              <TourFacts tour={tour} seo={seo} />
            </section>

            {/* Photos: real ones when added, placeholders while previewing */}
            {gallery.length > 0 ? (
              <section aria-label="Photos">
                <Gallery images={gallery} title={tour.title} />
              </section>
            ) : (
              showPlaceholders && (
                <section aria-label="Photo placeholders">
                  <PlaceholderGallery theme={tour.theme} />
                </section>
              )
            )}

            {/* Itinerary */}
            <section id="itinerary" aria-labelledby="day">
              <Eyebrow>The day</Eyebrow>
              <h2 id="day" className={`${h2} mt-4`}>How it unfolds</h2>
              <ol className="relative space-y-7 border-l-2 border-seafoam pl-7">
                {tour.itinerary.map((step) => (
                  <li key={step.title} className="relative">
                    <span aria-hidden="true" className="absolute -left-[38px] top-1.5 size-4 rounded-full border-4 border-shell bg-sunbird-gold" />
                    <p className="mb-1 text-[0.8rem] font-black uppercase tracking-[0.12em] text-ocean-teal">{step.when}</p>
                    <h3 className="mb-1.5 text-[1.2rem]">{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[0.92rem]">This is our usual plan. We adapt it to the weather and to you.</p>

              {/* Mid-page call to action */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-card bg-cape-slate p-7 text-white sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-[1.3rem] text-white">Want to change something?</h3>
                  <p className="mt-1 text-white/80!">Add a stop, slow the pace or swap the lunch. Just tell us.</p>
                </div>
                <Button href="#enquire" variant="gold" className="shrink-0">Tell us what you’d like</Button>
              </div>
            </section>

            {/* Included */}
            <section aria-labelledby="included">
              <Eyebrow>What’s covered</Eyebrow>
              <h2 id="included" className={`${h2} mt-4`}>Included and not included</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-card border border-line bg-white p-6">
                  <h3 className="mb-4 text-[1.1rem]">Included</h3>
                  <ul className="space-y-3">
                    {tour.included.map((i) => (
                      <li key={i} className="flex gap-3 text-cape-slate"><Check className="mt-0.5 text-ocean-teal" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-card border border-line bg-white p-6">
                  <h3 className="mb-4 text-[1.1rem]">Not included</h3>
                  <ul className="space-y-3">
                    {tour.notIncluded.map((i) => (
                      <li key={i} className="flex gap-3"><Cross className="mt-0.5 text-ink-soft" />{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Good to know + safety */}
            <section aria-labelledby="know">
              <Eyebrow>Before you go</Eyebrow>
              <h2 id="know" className={`${h2} mt-4`}>Good to know</h2>
              <ul className="space-y-3">
                {tour.goodToKnow.map((g) => (
                  <li key={g} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-sunbird-gold" />{g}</li>
                ))}
              </ul>
              {tour.safety && (
                <div className="mt-6 flex gap-4 rounded-card border border-seafoam bg-seafoam/35 p-6">
                  <Shield className="mt-0.5 text-ocean-teal" />
                  <div>
                    <h3 className="mb-1 text-[1.1rem]">Safety first</h3>
                    <p className="text-cape-slate">{tour.safety}</p>
                  </div>
                </div>
              )}
            </section>

            {/* FAQs */}
            <section aria-labelledby="faq">
              <Eyebrow>Questions</Eyebrow>
              <h2 id="faq" className={`${h2} mt-4`}>Frequently asked</h2>
              <FaqList faqs={faqs} />
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Booking">
            <BookingCard tour={tour} />
          </aside>
        </div>

        {/* Enquiry */}
        <section id="enquire" aria-labelledby="enquire-title" className="bg-white py-[84px] max-sm:py-[60px]">
          <div className="container-page grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <Eyebrow>Let’s plan it together</Eyebrow>
              <h2 id="enquire-title" className="mb-4 mt-4 text-[clamp(2rem,4vw,3.1rem)]">
                Enquire about the {tour.title}
              </h2>
              <p className="mb-8 max-w-[52ch] text-[1.05rem]">
                Booking with us is a conversation, not a checkout. Here’s how it works.
              </p>
              <ol className="mb-9 space-y-5">
                {[
                  ["Send your enquiry", "Fill in the short form. It takes about a minute, and costs nothing."],
                  ["We call you", `We’ll phone you ${site.responseTime} to talk through dates, ideas and any questions.`],
                  ["Confirm when you’re happy", "Once the plan feels right, we confirm the details and arrange payment directly with you."],
                ].map(([title, text], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ocean-teal font-heading font-extrabold text-white">{i + 1}</span>
                    <div>
                      <h3 className="text-[1.1rem]">{title}</h3>
                      <p className="mt-0.5">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="space-y-3 rounded-card border border-line bg-shell p-6">
                <HostsStrip />
                <p className="text-[0.92rem]">
                  Prefer to talk now? Email{" "}
                  <a className="font-bold text-ocean-teal underline decoration-sunbird-gold decoration-2 underline-offset-4" href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${tour.title}`)}`}>{site.email}</a>
                  {site.phone && (<>, call <a className="font-bold text-ocean-teal" href={telHref()}>{site.phone}</a></>)}
                  {site.whatsapp && (<>, or <a className="font-bold text-ocean-teal" href={whatsappHref(`Hi, I’d like to know more about the ${tour.title}.`)}>message us on WhatsApp</a></>)}.
                </p>
              </div>
            </div>
            <EnquiryForm tourSlug={tour.slug} tourTitle={tour.title} />
          </div>
        </section>

        {/* Related tours */}
        <section id="related-tours" aria-labelledby="related" className="py-[84px] max-sm:py-[60px]">
          <div className="container-page">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Keep exploring</Eyebrow>
                <h2 id="related" className="mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">You might also like</h2>
              </div>
              <Link href="/tours" className="font-black text-ocean-teal underline decoration-sunbird-gold decoration-2 underline-offset-4">See all tours</Link>
            </div>
            <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <StickyBar price={formatRand(tour.price)} basis={site.priceBasis} />
    </>
  );
}
