import fs from "node:fs";
import path from "node:path";

const IMAGE_FILE = /\.(jpe?g|png|webp|avif)$/i;

/** "hero-boulders-beach-penguins.jpg" -> "Boulders beach penguins" (used as alt text) */
function altFromFile(file: string) {
  const words = file
    .replace(/\.[^.]+$/, "")
    .replace(/^(hero|gallery)[-_ ]?\d*[-_ ]*/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : undefined;
}

/**
 * Reads public/images/tours/<slug>/ at build time.
 *  - a file whose name starts with "hero" (hero.jpg, hero-boulders-beach-penguins.jpg) is the hero image
 *  - every other image in the folder becomes the gallery, in filename order
 * Descriptive file names are good for search, and they also become the default alt text.
 * No code changes are needed to add photos: drop files in the folder.
 */
export function getTourImages(slug: string) {
  const dir = path.join(process.cwd(), "public", "images", "tours", slug);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_FILE.test(f)).sort();
  } catch {
    /* folder missing: placeholders are shown */
  }
  const heroFile = files.find((f) => /^hero([-_.\s]|$)/i.test(f)) ?? files[0];
  const url = (f: string) => `/images/tours/${slug}/${encodeURIComponent(f)}`;
  return {
    hero: heroFile ? url(heroFile) : undefined,
    heroAlt: heroFile ? altFromFile(heroFile) : undefined,
    gallery: files
      .filter((f) => f !== heroFile)
      .map((f) => ({ src: url(f), alt: altFromFile(f) })),
  };
}

/** True if a file exists in /public (used for the optional photo of Glen). */
export function publicFileExists(relativePath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", relativePath));
}
