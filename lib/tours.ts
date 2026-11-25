import { sharkTour } from "./shark-cage-diving-gansbaai";

/**
 * All tour content lives here. To change a price, itinerary or FAQ, edit this file.
 * Anything marked CONFIRM is a sensible draft that Glen should check before launch.
 */
export type Theme = "sea" | "mountain" | "vine" | "safari" | "road";

export type Tour = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string[];
  price: number;
  duration: string;
  format: string;
  pickup: string;
  bestTime: string;
  highlights: string[];
  itinerary: { when: string; title: string; text: string }[];
  included: string[];
  notIncluded: string[];
  goodToKnow: string[];
  safety?: string;
  faqs: { q: string; a: string }[];
  theme: Theme;
  /** Describe the hero photo for screen readers once you have it */
  imageAlt?: string;
  /** Slugs to suggest at the bottom; defaults to the next tours in the list */
  related?: string[];
};

const PRIVATE = "Private tour, tailored to you"; // CONFIRM
const PICKUP = "Hotel or guesthouse pick-up in Cape Town"; // CONFIRM

export const tours: Tour[] = [
  {
    slug: "cape-point-penguins-tour",
    title: "Cape Point and Penguin Watching",
    category: "Scenic day tour",
    tagline: "The Cape Peninsula at your own pace, from Cape Point to the penguins of Boulders Beach.",
    summary: [
      "Follow the coast road south to the dramatic tip of the Cape Peninsula. We take our time over the views, stop where it’s worth stopping, and share the stories behind the places most visitors drive straight past.",
      "You’ll walk among the African penguins at Boulders Beach and stand at the edge of Cape Point, with the rest of the day left flexible for whatever catches your eye.",
    ],
    price: 4500,
    duration: "About 9 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Year-round. We adjust the route for wind and weather.",
    highlights: [
      "Cape Point and the Cape of Good Hope nature reserve",
      "African penguins at Boulders Beach",
      "The coastal drive through Hout Bay and Simon’s Town",
      "Time to linger where you like, not where a timetable says",
    ],
    itinerary: [
      { when: "Morning", title: "Along the Atlantic coast", text: "We leave the city and drive the scenic coast road through Camps Bay and Hout Bay, with photo stops along the way." },
      { when: "Late morning", title: "Cape Point", text: "Time at the reserve to walk to the viewpoints and take in the meeting of land and ocean at the tip of the peninsula." },
      { when: "Midday", title: "Lunch by the sea", text: "A relaxed lunch stop on the False Bay side, chosen to suit your tastes." },
      { when: "Afternoon", title: "Boulders Beach penguins", text: "Walk the boardwalks and watch the penguin colony up close before heading back to the city." },
    ],
    included: ["A private guide and vehicle", "Hotel pick-up and drop-off", "Bottled water on board", "A flexible route shaped around you"],
    notIncluded: ["Reserve and penguin-colony entry fees", "Lunch and drinks", "Gratuities"],
    goodToKnow: ["Wear layers; it can be windy at the Point.", "Comfortable shoes are best for the viewpoint walks.", "Penguins can be seen all year round."],
    faqs: [
      { q: "Is the route fixed?", a: "No. This is our usual route, but we shape the day around what you want to see and how much time you want at each stop." },
      { q: "Do we need to be fit?", a: "Only for short walks. There are easy options at every stop if you’d rather take it slowly." },
    ],
    theme: "sea",
    related: ["cape-town-city-tour", "hermanus-whale-watching-tour", "cape-winelands-wine-tour"],
  },
  {
    slug: "hermanus-whale-watching-tour",
    title: "Hermanus Whale Watching Tour",
    category: "Wildlife",
    tagline: "A day on the whale coast, with southern right whales close to shore in season.",
    summary: [
      "Drive the spectacular coast road to Hermanus, one of the best whale-watching spots in the world, where southern right whales come close to the shoreline each year.",
      "We build the day around the sea: cliff-top viewing, a trip out on the water when conditions allow, and a long lunch in a seaside town.",
    ],
    price: 4500,
    duration: "About 8 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Whale season runs roughly June to November, with the best sightings usually from August to October.",
    highlights: [
      "Southern right whales from the Hermanus cliff path",
      "A whale-watching trip on the water, weather permitting",
      "The scenic Clarence Drive coastline",
      "A relaxed seafood lunch in Hermanus",
    ],
    itinerary: [
      { when: "Morning", title: "Clarence Drive", text: "We leave Cape Town and take the winding coastal road along False Bay towards the Overberg." },
      { when: "Late morning", title: "Hermanus cliff path", text: "Walk the cliff path and watch the whales from shore, often only metres from the rocks in season." },
      { when: "Midday", title: "On the water", text: "Join a whale-watching trip from the harbour, subject to sea conditions on the day." },
      { when: "Afternoon", title: "Lunch and the drive home", text: "Lunch overlooking the bay, then a relaxed drive back to the city." },
    ],
    included: ["A private guide and vehicle", "Hotel pick-up and drop-off", "Whale-watching boat trip, subject to conditions", "Bottled water on board"],
    notIncluded: ["Lunch and drinks", "Gratuities"],
    goodToKnow: ["Boat trips can be cancelled in rough weather; we’ll talk you through alternatives.", "Bring a warm, windproof layer and sun protection.", "Outside whale season we’ll shape the day around the coast and the Overberg instead."],
    safety: "Boat trips run only when the sea is safe. If conditions don’t allow, we’ll agree an alternative with you on the day.",
    faqs: [
      { q: "Are whale sightings guaranteed?", a: "Wildlife is wildlife, so we can’t promise a sighting, but in season the odds are excellent. Tell us when you’re visiting and we’ll advise honestly." },
      { q: "Can we do this outside the season?", a: "Yes. We’ll swap the whales for the coastline, wine country or local gems, whichever you’d prefer." },
    ],
    theme: "sea",
    related: ["cape-point-penguins-tour", "day-safari-from-cape-town", "3-day-garden-route-tour"],
  },
  {
    slug: "cape-winelands-wine-tour",
    title: "Wine Tour with Lunch",
    category: "Food and wine",
    tagline: "The Cape Winelands at a gentle pace, with tastings, scenery and a long, lovely lunch.",
    summary: [
      "Spend a day among the vineyards and mountains of the Cape Winelands. We choose estates to suit your taste, whether you love bold reds, crisp whites or simply a beautiful view.",
      "Because we’re your hosts, not a bus tour, there’s no rushing: just good wine, good food and someone else doing the driving.",
    ],
    price: 4600,
    duration: "About 8 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Year-round. Autumn colours (March to May) and green winter vineyards are especially pretty.",
    highlights: [
      "Hand-picked estates in Stellenbosch, Franschhoek or Paarl",
      "Wine tastings matched to what you enjoy",
      "A leisurely lunch at a winelands restaurant",
      "A designated driver, so everyone can relax",
    ],
    itinerary: [
      { when: "Morning", title: "Into the winelands", text: "We collect you and head out past the mountains, with a first estate chosen to ease you in." },
      { when: "Late morning", title: "Tasting at the estates", text: "Visit two or three estates, with time to taste, ask questions and enjoy the grounds." },
      { when: "Midday", title: "Lunch", text: "A long lunch at a restaurant on one of the estates, with views to match." },
      { when: "Afternoon", title: "One more stop", text: "A final tasting or a stroll through a historic town, then back to Cape Town." },
    ],
    included: ["A private guide and driver", "Hotel pick-up and drop-off", "Lunch", "Wine tastings at the estates we choose together"],
    notIncluded: ["Wine purchases and drinks beyond the tastings", "Gratuities"],
    goodToKnow: ["Tell us your wine preferences and we’ll plan the estates around them.", "Not a wine drinker? Plenty of estates have excellent food, gardens and olive oil.", "Wine purchases can be shipped home; we’ll point you the right way."],
    faqs: [
      { q: "Can you cater for dietary needs?", a: "Yes. Tell us when you enquire and we’ll choose restaurants that suit." },
      { q: "Is the lunch included?", a: "Yes, lunch is part of this tour. Extra drinks and wine purchases are separate." },
    ],
    theme: "vine",
    related: ["west-coast-day-tour", "cape-town-city-tour", "3-day-garden-route-tour"],
  },
  {
    slug: "west-coast-day-tour",
    title: "West Coast Tour",
    category: "Scenic day tour",
    tagline: "Wide skies, white beaches and fishing villages on Cape Town’s quieter side.",
    summary: [
      "Head north along the Atlantic to a part of the Cape most visitors miss: turquoise lagoons, wild flowers in spring, sleepy fishing villages and some of the freshest seafood in the country.",
      "It’s a day for people who like open landscapes and local character over crowds.",
    ],
    price: 4500,
    duration: "About 9 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Year-round. The wild flower display is usually at its best from August to September.",
    highlights: [
      "Langebaan Lagoon and the West Coast National Park",
      "The fishing village of Paternoster",
      "Seasonal spring wild flowers",
      "A seafood lunch by the sea",
    ],
    itinerary: [
      { when: "Morning", title: "North along the coast", text: "Leave the city behind and drive through the farmland and coastal fynbos of the West Coast." },
      { when: "Late morning", title: "West Coast National Park", text: "Explore the park and the lagoon, with spring flowers carpeting the veld in season." },
      { when: "Midday", title: "Seafood lunch", text: "Lunch at a local restaurant, with the catch of the day as the star." },
      { when: "Afternoon", title: "Paternoster", text: "Wander the whitewashed fishing village, browse the galleries and then take the scenic route home." },
    ],
    included: ["A private guide and vehicle", "Hotel pick-up and drop-off", "Bottled water on board", "National park entry"],
    notIncluded: ["Lunch and drinks", "Gratuities"],
    goodToKnow: ["Bring sunglasses and a hat; the light is bright on the coast.", "Flower sightings depend on rainfall and weather in the season.", "Comfortable shoes for park and beach walks."],
    faqs: [
      { q: "When is the best time for flowers?", a: "Usually August and September, but it varies year to year. We’ll tell you honestly what to expect for your dates." },
      { q: "Is it a long drive?", a: "A fair bit of the day is on the road, but it’s a scenic drive and we break it up with plenty of stops." },
    ],
    theme: "sea",
    related: ["cape-winelands-wine-tour", "cape-point-penguins-tour", "day-safari-from-cape-town"],
  },
  {
    slug: "robben-island-township-tour",
    title: "Township and Robben Island Tour",
    category: "Culture and history",
    tagline: "Two chapters of South African history, told respectfully, in one thoughtful day.",
    summary: [
      "Begin at the V&A Waterfront with the ferry to Robben Island, where Nelson Mandela and many others were imprisoned, and where tours are led by guides from the island itself.",
      "Back on the mainland we visit a Cape Town township with a local guide, meeting people and hearing stories that put the island’s history in context.",
    ],
    price: 4300,
    duration: "About 8 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Year-round. Ferries can be cancelled in rough weather, so a flexible day is wise.",
    highlights: [
      "The Robben Island ferry and guided island tour",
      "A visit to a Cape Town township with a local guide",
      "A thoughtful, personal introduction to the city’s history",
      "A pace that leaves time for questions",
    ],
    itinerary: [
      { when: "Morning", title: "V&A Waterfront", text: "We meet you and head to the Waterfront to board the Robben Island ferry." },
      { when: "Late morning", title: "Robben Island", text: "A guided tour of the island, including the prison where Nelson Mandela was held." },
      { when: "Afternoon", title: "Into the townships", text: "A visit to a township with a local guide, meeting residents and hearing their stories." },
      { when: "Late afternoon", title: "Back to your hotel", text: "We drop you back with time to reflect on the day." },
    ],
    included: ["A private guide and vehicle", "Hotel pick-up and drop-off", "Robben Island ferry and tour tickets", "A local township guide"],
    notIncluded: ["Lunch and drinks", "Gratuities and any purchases from local crafters"],
    goodToKnow: ["Robben Island ferries depart at set times and are weather-dependent.", "We ask guests to be respectful when photographing residents; we’ll guide you.", "Dress comfortably and bring a light jacket for the ferry."],
    safety: "Township visits are always made with a local guide, and we choose the route and timing with care.",
    faqs: [
      { q: "What if the ferry is cancelled?", a: "Weather occasionally stops the ferry. We’ll let you know as soon as we hear and help you rebook or reshape the day." },
      { q: "Is the township visit appropriate for families?", a: "Yes, for most families. Let us know the ages and we’ll adjust the day." },
    ],
    theme: "road",
    related: ["cape-town-city-tour", "cape-point-penguins-tour", "kenilworth-race-day-experience"],
  },
  {
    slug: "kenilworth-race-day-experience",
    title: "Kenilworth Race Day",
    category: "Experience",
    tagline: "A proper day at the races at Kenilworth, with a host who’ll make you feel at home.",
    summary: [
      "Horse racing at Kenilworth is a Cape Town institution. Dress up, find your seat and enjoy an afternoon of racing, with a host explaining how it all works.",
      "It’s a lively, sociable day out, and a very local one.",
    ],
    price: 4000,
    duration: "About 6 hours",
    format: "Hosted by Glen or Ryan", // CONFIRM
    pickup: PICKUP,
    bestTime: "Race days are scheduled in advance. Tell us your travel dates and we’ll match them to the racing calendar.",
    highlights: [
      "An afternoon at Kenilworth Racecourse",
      "A host to guide you through the racing",
      "A relaxed, sociable local experience",
      "Hotel pick-up and drop-off",
    ],
    itinerary: [
      { when: "Late morning", title: "Pick-up", text: "We collect you and head to the racecourse, with a quick brief on the day." },
      { when: "Midday", title: "Lunch and settling in", text: "Find your spot, enjoy lunch and get a feel for the atmosphere." },
      { when: "Afternoon", title: "The racing", text: "Watch the races with a host explaining the card, the form and the traditions." },
      { when: "Late afternoon", title: "Back to your hotel", text: "We drop you back once the last race is run." },
    ],
    included: ["Hotel pick-up and drop-off", "Racecourse entry", "A host with you throughout"],
    notIncluded: ["Lunch and drinks", "Any bets you choose to place (18+ only)", "Gratuities"],
    goodToKnow: ["Race days are fixed dates, so enquire early.", "Smart-casual dress is the norm.", "Betting is entirely optional and for adults only."],
    faqs: [
      { q: "I know nothing about racing. Is that fine?", a: "Perfectly. Your host will explain how it works and the day is just as enjoyable without a bet." },
      { q: "How do I know which dates are available?", a: "Tell us when you’ll be in Cape Town and we’ll check the racing calendar for you." },
    ],
    theme: "road",
    related: ["cape-winelands-wine-tour", "robben-island-township-tour", "cape-town-city-tour"],
  },
  {
    slug: "day-safari-from-cape-town",
    title: "Big Five Safari Day Tour",
    category: "Wildlife",
    tagline: "A full day on safari in a private reserve, within reach of Cape Town.",
    summary: [
      "You don’t have to leave the Western Cape to go on safari. A private game reserve a short drive from the city lets you see the Big 5 in a single, memorable day.",
      "We travel with you, and the reserve’s own rangers take you out on game drives to spot the animals.",
    ],
    price: 6500,
    duration: "About 11 hours",
    format: "Hosted by Glen or Ryan; game drives led by the reserve’s rangers", // CONFIRM
    pickup: PICKUP,
    bestTime: "Year-round. Early morning and late afternoon drives are usually the most rewarding.",
    highlights: [
      "Game drives in a private reserve, with the Big 5 in sight",
      "Experienced reserve rangers",
      "A malaria-free area close to Cape Town",
      "Lunch in the bush",
    ],
    itinerary: [
      { when: "Early morning", title: "Drive to the reserve", text: "An early start, travelling out of the city towards the reserve." },
      { when: "Morning", title: "First game drive", text: "Head out in an open safari vehicle with a ranger, looking for lion, elephant, rhino, buffalo and more." },
      { when: "Midday", title: "Lunch", text: "A relaxed lunch at the lodge, with views over the reserve." },
      { when: "Afternoon", title: "Second drive and home", text: "One more drive before the journey back to Cape Town." },
    ],
    included: ["Hotel pick-up and drop-off", "Game drives with the reserve’s rangers", "Lunch", "A host with you throughout"],
    notIncluded: ["Drinks", "Gratuities for rangers and staff"],
    goodToKnow: ["It’s an early start and a long day, with plenty of seat time.", "Neutral colours work best, and bring layers for cool mornings.", "Sightings can never be guaranteed, but the reserve is set up to make them likely."],
    safety: "Game drives are led by the reserve’s trained rangers, who set the rules for staying safe around the animals.",
    faqs: [
      { q: "Do I need malaria tablets?", a: "No. The Western Cape reserves we use are malaria-free." },
      { q: "Is it suitable for children?", a: "Many reserves have age limits for game drives. Tell us who’s coming and we’ll check." },
    ],
    theme: "safari",
    related: ["west-coast-day-tour", "hermanus-whale-watching-tour", "3-day-garden-route-tour"],
  },
  {
    slug: "cape-town-city-tour",
    title: "Table Mountain and Cape Town Full Day Tour",
    category: "Scenic day tour",
    tagline: "The city’s great icons in one easy day, with a host who knows its stories.",
    summary: [
      "Cape Town packs a lot into one city: a mountain, a harbour, brightly painted streets and some of the best views on the planet. This day brings the best of it together.",
      "We choose the order to suit the weather, because Table Mountain has its own moods, and leave room for your own favourites.",
    ],
    price: 5500,
    duration: "About 8 hours",
    format: PRIVATE,
    pickup: PICKUP,
    bestTime: "Year-round. We time the cable car for the clearest conditions.",
    highlights: [
      "Table Mountain by cable car, weather permitting",
      "Bo-Kaap’s brightly coloured houses and history",
      "The V&A Waterfront and Company’s Garden",
      "Sunset spots only locals tend to know",
    ],
    itinerary: [
      { when: "Morning", title: "Table Mountain", text: "We head up first, when the mountain is usually at its clearest, for the view over the city and bay." },
      { when: "Late morning", title: "Bo-Kaap and the city centre", text: "Wander through Bo-Kaap and the historic city streets with a guide’s stories." },
      { when: "Midday", title: "Lunch", text: "A local favourite for lunch, chosen to suit you." },
      { when: "Afternoon", title: "Waterfront and coast", text: "Time at the V&A Waterfront, then a drive along the Atlantic seaboard." },
    ],
    included: ["A private guide and vehicle", "Hotel pick-up and drop-off", "Table Mountain cable car tickets", "Bottled water on board"],
    notIncluded: ["Lunch and drinks", "Gratuities"],
    goodToKnow: ["The cable car closes in strong wind; we’ll reorder the day if that happens.", "Layers are wise: it can be cool and windy on top.", "Comfortable shoes for the city streets."],
    faqs: [
      { q: "What if the cable car is closed?", a: "We’ll move the other stops around and try for a later slot, or suggest another way to enjoy the mountain." },
      { q: "Can we add Kirstenbosch or Camps Bay?", a: "Of course. Tell us your priorities and we’ll shape the day around them." },
    ],
    theme: "mountain",
    related: ["cape-point-penguins-tour", "robben-island-township-tour", "cape-winelands-wine-tour"],
  },
  {
    slug: "3-day-garden-route-tour",
    title: "Three Day Garden Route Tour",
    category: "Multi-day journey",
    tagline: "Three unhurried days along South Africa’s most famous road, planned around you.",
    summary: [
      "The Garden Route is one of the world’s great drives: lagoons, forests, cliffs and beaches, strung along the Indian Ocean. We plan the route and travel with you, so you can look out of the window instead of at the map.",
      "This is a starting point rather than a fixed package. Tell us what you love, such as wildlife, food, walking or quiet, and we’ll tailor the three days to suit.",
    ],
    price: 25000,
    duration: "3 days",
    format: "Private journey, tailored to you", // CONFIRM
    pickup: "Collected in Cape Town",
    bestTime: "Year-round. Spring and autumn are particularly pleasant.",
    highlights: [
      "Oudtshoorn with the Cango Caves and an Ostrich Farm",
      "Mossel Bay, Knysna and Plettenberg Bay",
      "Lagoons, indigenous forests and coastline on one route",
      "A route you can reshape with us before you go",
    ],
    itinerary: [
      { when: "Day 1", title: "Cape Town to Oudtshoorn via Route 62", text: "Head through the Klein Karoo to Oudtshoorn to explore the limestone chambers of the Cango Caves and visit an ostrich farm." },
      { when: "Day 2", title: "Across the Outeniqua Pass to Knysna & Plettenberg Bay", text: "Descend to the coast to explore the lagoon and heads at Knysna, ancient indigenous forests, and the pristine beaches of Plettenberg Bay." },
      { when: "Day 3", title: "Wilderness and the scenic route home", text: "Take in the Wilderness lakes, coastal views through Mossel Bay, and the Overberg on the relaxed journey back to Cape Town." },
    ],
    included: ["A private guide and vehicle for all three days", "Pick-up and drop-off in Cape Town", "A route planned with you", "Accommodation and meals are confirmed on our call"], // CONFIRM what the R25 000 covers
    notIncluded: ["Items we agree are extra when we plan your trip", "Gratuities"],
    goodToKnow: ["It’s a lot of road, so we plan generous stops.", "We can add activities such as forest walks, boat trips or wildlife visits.", "Tell us your dates early; accommodation can fill quickly in season."],
    faqs: [
      { q: "What does the price include?", a: "We confirm exactly what’s covered, including accommodation, on our call, so you know before you commit." },
      { q: "Can we change the route?", a: "Yes. It’s a bespoke trip, so we’ll adjust the stops, pace and activities to suit you." },
    ],
    theme: "road",
    related: ["hermanus-whale-watching-tour", "day-safari-from-cape-town", "cape-winelands-wine-tour"],
  },
  sharkTour,
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export function getRelated(tour: Tour) {
  const picks = (tour.related ?? [])
    .filter((s) => s !== tour.slug)
    .map((s) => tours.find((t) => t.slug === s))
    .filter((t): t is Tour => Boolean(t && t.slug !== tour.slug));
  if (picks.length >= 3) return picks.slice(0, 3);
  const others = tours.filter((t) => t.slug !== tour.slug && !picks.some((p) => p.slug === t.slug));
  return [...picks, ...others].slice(0, 3);
}

/** FAQs every tour shares. These explain the enquiry-and-call booking process. */
export const commonFaqs = [
  { q: "How do I book?", a: "Send us the short enquiry form on this page. There is no online payment. We’ll call you to talk through the details, answer your questions and tailor the tour to you. Nothing is confirmed until we’ve spoken and you’re happy." },
  { q: "When do I pay?", a: "Payment is arranged directly with us once you’ve decided to go ahead. You don’t pay anything by sending an enquiry." },
  { q: "Can you tailor the tour?", a: "Yes, that’s what we do. Tell us what you’d like to see and how you like to travel and we’ll shape it around you." },
  { q: "What if I need to change or cancel?", a: "Life happens. We’ll agree the terms with you when we confirm your booking, and put them in writing." },
];
