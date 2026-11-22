/**
 * Site-wide settings. Edit here and every page updates.
 * Leave phone / whatsapp empty to hide the call and WhatsApp buttons.
 */
export const site = {
  name: "Cape Town Trips",
  url: "https://capetowntrips.com",
  email: "hello@capetowntrips.com",
  /** Shown as written, e.g. "+27 82 000 0000" */
  phone: "",
  /** Digits only with country code, e.g. "27820000000" */
  whatsapp: "",
  hosts: "Glen & Ryan Manning",
  /** CONFIRM: is every price per person, or per group/vehicle? */
  priceBasis: "per person",
  /** CONFIRM: only keep this promise if you can always meet it. */
  responseTime: "within one working day",
};

export const telHref = () => `tel:${site.phone.replace(/[^+\d]/g, "")}`;
export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** 4500 -> "R4 500" */
export const formatRand = (n: number) =>
  `R${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")}`;

/**
 * Placeholder pictures and labels show while tours have no photos.
 * Always on in development. On a live build set SHOW_PLACEHOLDERS=1 to see them
 * (for example on a private preview site); leave it unset once real photos are in.
 */
export const showPlaceholders =
  process.env.NODE_ENV !== "production" || process.env.SHOW_PLACEHOLDERS === "1";

/* ---- Facts used in the tour "at a glance" box, search tags and structured data ---- */
export const facts = {
  /** CONFIRM */
  languages: "English",
  /** CONFIRM which areas you collect from */
  pickupAreas: "Cape Town City Bowl, V&A Waterfront, Atlantic Seaboard and nearby suburbs",
  /** CONFIRM your real terms, then edit this */
  cancellation:
    "We agree cancellation terms with you in writing when we confirm your booking. Weather-dependent activities are rescheduled or reshaped where possible.",
  serviceArea: "Cape Town and the Western Cape, South Africa",
  /** Add your Google Business Profile, TripAdvisor, Facebook, Instagram and LinkedIn URLs once they exist */
  sameAs: [] as string[],
};

/**
 * Rough rand-to-foreign-currency rates, for the "about US$270" note under prices.
 * Rates drift: refresh these every few months (last set late October 2026).
 */
export const fx = { USD: 0.06, GBP: 0.045, EUR: 0.054 };

export function formatForeign(rand: number) {
  const r = (n: number) => Math.round(n / 10) * 10;
  return `US$${r(rand * fx.USD)}, £${r(rand * fx.GBP)}, €${r(rand * fx.EUR)}`;
}
