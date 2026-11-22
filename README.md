# Cape Town Trips website

Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Needs Node 20.9 or newer. The build downloads Plus Jakarta Sans and Nunito Sans from Google Fonts, so it needs internet access.

## Structure

```
app/
  globals.css            Colour, radius and shadow tokens (@theme). Change brand values here.
  layout.tsx             Fonts, site metadata, shared Header and Footer
  page.tsx               Homepage (placeholder, built next)
  about/page.tsx         About Us
  tours/page.tsx         All tours
  tours/[slug]/page.tsx  The tour page template (builds all 10 tours)
  api/enquiry/route.ts   Receives the enquiry form and emails it
  sitemap.ts, robots.ts  Generated sitemap.xml and robots.txt
  tours/[slug]/opengraph-image.tsx   Branded share image for each tour
components/              Header, Footer, Button, Eyebrow, PersonSection, PortraitCard, ContactCta
components/tour/         TourHero, BookingCard, EnquiryForm, Gallery, FaqList, TourCard, StickyBar...
lib/
  site.ts                Email, phone, WhatsApp, price wording, response promise
  tours.ts               ALL tour content: prices, itineraries, inclusions, FAQs
  tour-seo.ts            Per-tour search title, meta description, H1, facts and answer-first FAQs
  seo.ts                 Page tags and structured data (JSON-LD) helpers
  tour-images.ts         Finds photos in public/images/tours/<tour>/
public/images/           logo, Ryan's photo, and tours/<tour>/ folders for tour photos
```

## Tours

- Edit prices, itineraries, inclusions and FAQs in `lib/tours.ts`. To add a tour, add an entry there and a folder in `public/images/tours/`.
- Add photos by dropping files into `public/images/tours/<tour-name>/`. See `public/images/tours/README.md`.
- Set your phone and WhatsApp numbers in `lib/site.ts` and the call and WhatsApp buttons appear everywhere.

## Enquiry form email

Copy `.env.example` to `.env.local` and fill it in (uses Resend, resend.com, which has a free tier). In development, with nothing set, enquiries are printed in the terminal so you can test. In production without these settings the form shows a friendly "please email us" message instead of silently losing the enquiry.

## Confirm before launch

Everything marked `CONFIRM` in `lib/tours.ts`, `lib/tour-seo.ts` and `lib/site.ts` is a draft. In particular: whether prices are per person; what each tour includes (entry fees, lunch, tastings, Garden Route accommodation); durations; the "private tour" wording; the response-time promise; and the adventure-activity partners with their age, weight and health limits.

## Search (SEO, GEO and AEO)

Built from the keyword and metadata plan. Each tour page has:
- a keyword-based address (`/tours/cape-point-penguins-tour`), a unique title (about 60 characters or fewer) and meta description, and an H1 that matches
- an "In short" answer, a plain "Tour facts" box (price with approximate US$, £ and €, start time, pick-up, group size, language, fitness, ages, season, cancellation and weather), and answer-first FAQs
- structured data: TravelAgency (site-wide), TouristTrip with an Offer, and BreadcrumbList. FAQ markup is left out on purpose, because Google no longer shows it as a rich result for most sites
- `en-ZA` language and locale, canonical addresses, a generated sitemap.xml, robots.txt and a branded share image
- redirects from the old `/about-2`, `/contact-2` and `/services` addresses (`next.config.ts`)

**Staging:** set `NOINDEX=1` on any non-live host so search engines ignore it. Vercel preview deployments are hidden automatically. Leave it unset on the live site.

**Edit the search text** in `lib/tour-seo.ts`. **Update exchange rates** in `lib/site.ts` (`fx`) every few months. **Add your social and review profile links** to `facts.sameAs` in `lib/site.ts` once they exist.

## Other notes

- Tailwind colours: `ocean-teal`, `cape-slate`, `sunbird-gold`, `seafoam`, `shell`, `sun-wash`, `ink-soft`. Fonts: `font-heading`, `font-body`.
- Glen's photo on the About page: in `app/about/page.tsx`, add `src="/images/glen-manning.jpg"` to his `PortraitCard`.
- The Explore and Contact menu links point to `/#explore` and `/#contact`; they work once the homepage has those sections.
