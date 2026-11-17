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
  globals.css      Colour, radius and shadow tokens (@theme). Change brand values here.
  layout.tsx       Fonts, site metadata, shared Header and Footer
  page.tsx         Homepage (placeholder, built next)
  about/page.tsx   About Us
  icon.png         Browser tab icon (apple-icon.png for iPhones)
components/        Header, Footer, Button, Eyebrow, PersonSection, PortraitCard, ContactCta
public/images/     logo.png, ryan-manning.jpg
```

## Notes

- Tailwind colour names: `ocean-teal`, `cape-slate`, `sunbird-gold`, `seafoam`, `shell`, `sun-wash`, `ink-soft`.
- Fonts: `font-heading` (Plus Jakarta Sans) and `font-body` (Nunito Sans).
- Glen's photo: in `app/about/page.tsx`, add `src="/images/glen-manning.jpg"` to his `PortraitCard` (and drop the file in `public/images/`). The placeholder disappears.
- The Tours, Explore and Contact menu links point to `/#tours`, `/#explore` and `/#contact`, so they start working once the homepage has those sections.
