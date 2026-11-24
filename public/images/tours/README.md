# Tour photos

Each tour has its own folder, named after its web address. Drop photos in and rebuild. No code changes needed.

| File name | What it is | Needed? |
|---|---|---|
| `hero-<what-it-shows>.webp` | The one big photo at the top of the tour page, also used on the tour card. The name must start with `hero`. | Yes, one per tour |

Each tour uses a single hero photo. Any other files in the folder are ignored.

**Save photos as WebP** (quality about 80): small files that load fast. `.jpg`, `.png` and `.avif` also work.

## Name photos for search (this matters)
Use descriptive, lowercase, hyphenated file names. They help Google Images and they become the default alt text for screen readers automatically.

- `hero-boulders-beach-penguins-simons-town.webp` gives alt text "Boulders beach penguins simons town"
- `chapmans-peak-drive-hout-bay.webp`
- Avoid `IMG_4521.webp`, `hero.webp` or `photo1.webp`. These still work, but the alt text then falls back to a generic description written in `lib/tour-seo.ts` (`imageAlt`), so check that it matches the photo you upload.

## Photo guidance
- **Landscape, not portrait.** Hero: 1920 x 1080 px (16:9), ideally under 300 KB.
- **Real photos from your own tours** beat stock photos for trust. Show people enjoying the experience, with the landmark behind them.
- Keep the main subject in the middle: the hero is cropped differently on phones and desktops.
- Large originals are fine. The site resizes and compresses them automatically.

## Folders
cape-point-penguins-tour, cape-town-city-tour, cape-winelands-wine-tour, robben-island-township-tour,
shark-cage-diving-gansbaai, hermanus-whale-watching-tour, west-coast-day-tour, 3-day-garden-route-tour,
day-safari-from-cape-town, kenilworth-race-day-experience

## Glen's photo
Save it as `public/images/glen-manning.jpg` (square or 4:5 works best). The small "hosted by" strip on every tour page picks it up automatically.
