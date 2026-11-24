/**
 * SHARK CAGE DIVING TOUR: all of the content for this tour, in one file.
 *
 * Where it goes:  lib/shark-cage-diving-gansbaai.ts  (this file)
 * It is used by:  lib/tours.ts      (the tour: price, itinerary, inclusions, FAQs)
 *                 lib/tour-seo.ts   (search title, description, facts, headings)
 *
 * To change anything about this tour, edit this file only.
 * Lines marked CONFIRM are details to check against how the tour really runs.
 */
import type { TourSeo } from "./tour-seo";
import type { Tour } from "./tours";

export const sharkTour: Tour = {
  slug: "shark-cage-diving-gansbaai",
  title: "Shark Cage Diving Tour",
  category: "Adventure",
  tagline: "Join us in one of the most exhilarating experiences of your life.",
  summary: [
    "A two-hour drive from your hotel will take you face-to-face with a great white shark! Gansbaai is famous for these encounters, and you’ll head out by boat to see the animals from a purpose-built cage.",
    "Our shark cage diving tour collects you from your hotel in Cape Town. When you arrive in Gansbaai there’s a light breakfast and a briefing from the crew before you go out on the water, with all equipment, including wetsuits, provided and a light lunch afterwards. In total, allow about 7 hours from hotel pick-up to drop-off, including the two-hour drive each way.",
  ],
  price: 5500,
  // CONFIRM: total from hotel pick-up to drop-off (2h drive there + 3h at Gansbaai + 2h drive back)
  duration: "About 7 hours",
  format: "Small groups of up to 12 guests, hosted by us; the dive is run by a specialist operator", // CONFIRM
  pickup: "Hotel or guesthouse pick-up in Cape Town",
  bestTime: "Year-round, weather permitting. Trips can be cancelled in poor weather, and we’ll help you move to another date.",
  highlights: [
    "A face-to-face great white shark encounter from a cage",
    "A boat trip out from Gansbaai",
    "All equipment, including wetsuits, provided",
    "Light breakfast on arrival and a light lunch",
    "No diving experience required",
    "Hotel pick-up and drop-off in Cape Town",
  ],
  itinerary: [
    { when: "Early start", title: "Pick-up and the two-hour drive to Gansbaai", text: "We collect you from your hotel and take the scenic coast road to Gansbaai, about two hours away." },
    { when: "On arrival", title: "Breakfast and safety briefing", text: "A light breakfast, then a briefing from the crew on how the dive works and what to expect." },
    { when: "Out on the water", title: "Boat trip and cage dive", text: "Head out by boat to the shark grounds. Guests take turns in the cage, with the sharks swimming right alongside." },
    { when: "After the dive", title: "Lunch, then the two-hour drive back", text: "A light lunch and a chance to warm up, then the drive back to Cape Town and drop-off at your hotel, about 7 hours after pick-up." },
  ],
  included: [
    "Hotel pick-up and drop-off in Cape Town",
    "Light breakfast on arrival and a light lunch",
    "All cage-diving equipment, including wetsuits",
    "On-board refreshments and bottled water",
  ], // CONFIRM against the operator's current inclusions
  notIncluded: ["Photos and video of your dive (available to buy)", "Extra drinks", "Gratuities"],
  goodToKnow: [
    "Guests must be aged 18 to 70, with a moderate level of fitness.", // CONFIRM
    "Not recommended in pregnancy, or for anyone with heart problems or other serious medical conditions.",
    "Bring a change of clothes, a towel, a warm layer and sun protection. The sea can be rough, so take seasickness tablets beforehand if you’re prone to it.",
    "Breakfast is served when you arrive in Gansbaai, so a small snack before pick-up is a good idea.",
    "The venue and boat are not wheelchair accessible.", // CONFIRM
  ],
  safety:
    "Age and health requirements apply and we confirm them with you before you book. The crew gives a full safety briefing before anyone enters the water, and trips only go ahead in suitable weather.",
  faqs: [
    { q: "Will we definitely see great white sharks?", a: "Sightings are very common but can’t be guaranteed. Conditions and the sharks’ movements change from day to day, and other shark species are sometimes seen too. The operator explains their policy before you commit." },
    { q: "Is there an age or fitness requirement?", a: "Yes. Guests need to be aged 18 to 70 and have a moderate level of fitness. It isn’t recommended in pregnancy or for anyone with heart problems or other serious medical conditions. We confirm this for your party on our call." }, // CONFIRM
  ],
  theme: "sea",
  related: ["hermanus-whale-watching-tour", "day-safari-from-cape-town", "cape-point-penguins-tour"],
};

export const sharkSeo: TourSeo = {
  h1: "Shark Cage Diving from Cape Town (Gansbaai)",
  seoTitle: "Shark Cage Diving from Cape Town | Cape Town Trips",
  metaDescription:
    "Shark cage diving in Gansbaai: come face to face with a great white, a two-hour drive from your hotel. No diving experience needed. Enquire to book.",
  inShort:
    "A shark cage diving tour to Gansbaai, about two hours from your hotel in Cape Town. Hotel pick-up and drop-off are included, and the day takes about 7 hours in total. You head out by boat to meet great white sharks from the safety of a cage, and no diving experience is needed.",
  travelTime: "About 2 hours each way, from your hotel in Cape Town to Gansbaai",
  timeOnSite: "About 3 hours at Gansbaai: breakfast, briefing, boat trip, cage dive and lunch", // CONFIRM
  startTime: "Early-morning pick-up, often around 7:00 and confirmed the day before", // CONFIRM
  fitness: "Moderate. Surface cage, no diving experience needed",
  ages: "Guests aged 18 to 70", // CONFIRM
  imageAlt: "Great white shark swimming beside a dive cage off Gansbaai",
  headings: {
    overview: "What happens on a shark cage diving tour from Cape Town?",
    facts: "Shark cage diving tour facts",
    day: "What does the day look like, from pick-up to drop-off?",
    included: "What’s included in the shark cage diving tour?",
    know: "What should I know before I go?",
    faq: "Shark cage diving questions, answered",
  },
  commonFaqCount: 2,
  extraFaqs: [
    { q: "How long is the shark cage diving tour?", a: "About 7 hours in total, from hotel pick-up to drop-off. That is roughly two hours’ drive each way, plus about 3 hours at Gansbaai for breakfast, the briefing, the boat trip, the cage dive and lunch." }, // CONFIRM
    { q: "How long is the drive to Gansbaai?", a: "About two hours each way from your hotel in Cape Town, so it is an early start. We take the scenic coast road to Gansbaai and bring you back to your hotel." }, // CONFIRM
    { q: "Do I need diving experience or a certificate?", a: "No. The cage option needs no diving certification, and the crew briefs everyone before anyone enters the water. All equipment, including wetsuits, is provided." }, // CONFIRM
    { q: "Is shark cage diving safe?", a: "Specialist operators use purpose-built cages and give a full safety briefing before anyone enters the water. Age and health limits apply, and we confirm them with you before you book." },
  ],
};
