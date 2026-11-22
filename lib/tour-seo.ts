/**
 * Search and AI-answer content for each tour, kept in one place so it is easy to review.
 *  - seoTitle: the <title> tag (primary keyword first, brand last, about 60 characters)
 *  - metaDescription: the search-result blurb (about 120-155 characters)
 *  - h1: the visible page heading, close to (not identical to) the title
 *  - extraFaqs: real questions people ask, answered directly in the first sentence
 * Anything marked CONFIRM is a draft that Glen should check against how the tour really runs.
 */
export type TourSeo = {
  h1: string;
  seoTitle: string;
  metaDescription: string;
  startTime: string;
  fitness: string;
  ages: string;
  /** Describe what the real hero photo shows. Check it matches the photo you upload. */
  imageAlt: string;
  extraFaqs: { q: string; a: string }[];
};

export const tourSeo: Record<string, TourSeo> = {
  "cape-point-penguins-tour": {
    h1: "Cape Point and Penguin Watching Tour from Cape Town",
    seoTitle: "Cape Point & Penguins Tour from Cape Town | Cape Town Trips",
    metaDescription:
      "Full-day Cape Point, Cape of Good Hope and Boulders Beach penguins tour with a local guide. Private or small group, hotel pickup. Enquire today.",
    startTime: "Morning pick-up, time agreed with you", // CONFIRM
    fitness: "Easy. Short walks with easy options at every stop",
    ages: "All ages", // CONFIRM
    imageAlt: "African penguins on Boulders Beach near Simon’s Town, Cape Peninsula",
    extraFaqs: [
      { q: "How long is the Cape Point tour from Cape Town?", a: "About 9 hours door to door, including time at Cape Point, Boulders Beach and lunch. We collect you from your hotel in Cape Town and bring you back." },
      { q: "Can I see penguins at Boulders Beach all year round?", a: "Yes. The African penguin colony at Boulders Beach in Simon’s Town can be visited all year, and we time your visit to avoid the busiest periods where we can." },
      { q: "Do you drive Chapman’s Peak?", a: "Usually, yes. Chapman’s Peak Drive is a toll road that is sometimes closed for rockfalls or weather, so we check on the day and use another scenic route if it is shut." },
    ],
  },
  "cape-town-city-tour": {
    h1: "Cape Town City Tour and Table Mountain, Full Day",
    seoTitle: "Cape Town City Tour & Table Mountain | Cape Town Trips",
    metaDescription:
      "See Table Mountain, Bo-Kaap and the city’s history through a local guide’s eyes. Full-day, private or small group. Enquire to book.",
    startTime: "Morning pick-up, so we reach the mountain while it is usually clearest",
    fitness: "Easy to moderate. Some city walking and a short walk at the top",
    ages: "All ages", // CONFIRM
    imageAlt: "Table Mountain rising above Cape Town and Table Bay",
    extraFaqs: [
      { q: "What is included in a Cape Town city tour?", a: "Table Mountain, Bo-Kaap, the city centre, the V&A Waterfront and the Atlantic seaboard, with a local guide. We shape the order and the time at each stop around you and the weather." },
      { q: "Is the Table Mountain cable car open every day?", a: "No. The cable car closes in strong wind or poor weather, and for scheduled maintenance. We check on the day and reorder your itinerary if it is closed." },
    ],
  },
  "cape-winelands-wine-tour": {
    h1: "Cape Winelands Wine Tour with Lunch from Cape Town",
    seoTitle: "Cape Winelands Wine Tour from Cape Town | Cape Town Trips",
    metaDescription:
      "A guided day in the Cape Winelands with tastings, a long lunch and hotel pickup. Private groups and celebrations welcome. Enquire to book.",
    startTime: "Morning pick-up, time agreed with you", // CONFIRM
    fitness: "Easy. No strenuous activity",
    ages: "Adults for tastings; children can join, so tell us when you enquire", // CONFIRM
    imageAlt: "Vineyards and mountains in the Cape Winelands near Stellenbosch",
    extraFaqs: [
      { q: "Which wine regions do you visit?", a: "Usually Stellenbosch, Franschhoek or Paarl, with Constantia as a closer option. We choose the estates with you, based on the wines and views you like." }, // CONFIRM
      { q: "Is it safe to drink on the tour?", a: "Yes. Your guide drives all day, so everyone can taste in comfort and enjoy lunch without worrying about getting back." },
      { q: "Can you arrange a birthday or group celebration?", a: "Yes. Private groups, birthdays and celebrations are welcome. Tell us the group size and occasion in your enquiry and we will plan the day around it." },
    ],
  },
  "robben-island-township-tour": {
    h1: "Robben Island and Township Tour in Cape Town",
    seoTitle: "Robben Island & Township Tour, Cape Town | Cape Town Trips",
    metaDescription:
      "Visit Robben Island and a Cape Town township with a local guide. Understand the history, meet the community and hear the stories first-hand.",
    startTime: "Morning pick-up, timed to the Robben Island ferry departure", // CONFIRM
    fitness: "Easy. Some walking on the island and in the township",
    ages: "Most ages. Tell us the children’s ages and we will advise", // CONFIRM
    imageAlt: "Robben Island seen from the water off the Cape Town coast",
    extraFaqs: [
      { q: "How long is the Robben Island tour?", a: "The ferry and island tour take about three to four hours in total. With a township visit, the whole day is about 8 hours." },
      { q: "How do Robben Island tickets work?", a: "Ferry tickets are limited, usually non-refundable and need photo ID. We will explain how tickets work for your party, including for South African residents, when we call. Book early in busy months." }, // CONFIRM
      { q: "Which township do you visit?", a: "We visit a Cape Town township with a local guide, such as Langa or Gugulethu, chosen to suit your day. We confirm which one before you travel." }, // CONFIRM
    ],
  },
  "hermanus-whale-watching-tour": {
    h1: "Hermanus Whale Watching Tour from Cape Town",
    seoTitle: "Hermanus Whale Watching from Cape Town | Cape Town Trips",
    metaDescription:
      "Watch southern right whales off Hermanus on a guided day trip from Cape Town. Season runs roughly June to November. Enquire to book.",
    startTime: "Morning pick-up, time agreed with you", // CONFIRM
    fitness: "Easy. A short cliff-path walk and an optional boat trip",
    ages: "All ages. Boat operators may set age rules", // CONFIRM
    imageAlt: "Southern right whale close to the Hermanus shoreline",
    extraFaqs: [
      { q: "When is whale season in Hermanus?", a: "The main season is roughly June to November, with the best sightings usually from August to October, when southern right whales come close to shore." },
      { q: "Can you see whales from land in Hermanus?", a: "Yes. The Hermanus cliff path is one of the best land-based whale-watching spots in the world, and whales are often close to the rocks in season." },
    ],
  },
  "west-coast-day-tour": {
    h1: "West Coast Day Tour from Cape Town",
    seoTitle: "West Coast Day Tour from Cape Town | Cape Town Trips",
    metaDescription:
      "Escape the city on a guided West Coast day trip: lagoon, fishing villages, seafood lunch and spring flowers. Private or small group.",
    startTime: "Morning pick-up, time agreed with you", // CONFIRM
    fitness: "Easy. Park and beach walks, all optional",
    ages: "All ages", // CONFIRM
    imageAlt: "Langebaan Lagoon and white beaches on the West Coast near Cape Town",
    extraFaqs: [
      { q: "What is there to see on the West Coast?", a: "West Coast National Park and Langebaan Lagoon, the fishing village of Paternoster, and a seafood lunch by the sea. In spring the veld is covered in wild flowers." }, // CONFIRM stops
      { q: "How far is the West Coast from Cape Town?", a: "Langebaan and Paternoster are roughly 1.5 to 2 hours’ drive from the city, so the day mixes a scenic drive with time at each stop." },
    ],
  },
  "3-day-garden-route-tour": {
    h1: "3-Day Garden Route Tour from Cape Town",
    seoTitle: "3-Day Garden Route Tour from Cape Town | Cape Town Trips",
    metaDescription:
      "Three days along the Garden Route with a local guide, from Cape Town through Knysna and Plettenberg Bay. Private and small group.",
    startTime: "Morning departure from Cape Town on day one", // CONFIRM
    fitness: "Easy to moderate. Long days with plenty of stops",
    ages: "All ages. Tell us who is travelling", // CONFIRM
    imageAlt: "Coastline and lagoon at Knysna on the Garden Route",
    extraFaqs: [
      { q: "How far is the Garden Route from Cape Town?", a: "The Garden Route starts around Mossel Bay, roughly 4.5 to 5 hours’ drive from Cape Town, and runs on to the Tsitsikamma coast. We plan generous stops so the drive is part of the trip." },
      { q: "Is three days enough for the Garden Route?", a: "Three days is enough for the highlights at an unhurried pace. If you have longer, we can add nights and activities." },
      { q: "Which towns does the tour visit?", a: "Hermanus, Mossel Bay, Knysna, Plettenberg Bay and the Wilderness lakes by default, but we shape the route around what you want to see." }, // CONFIRM route
    ],
  },
  "day-safari-from-cape-town": {
    h1: "Big Five Day Safari from Cape Town",
    seoTitle: "Big Five Day Safari from Cape Town | Cape Town Trips",
    metaDescription:
      "Go on a guided game drive in a private reserve on a day trip from Cape Town. Hotel pickup, lunch and a local guide. Enquire to book.",
    startTime: "Early-morning pick-up, time confirmed when you book", // CONFIRM
    fitness: "Easy. Mostly seated game drives",
    ages: "The reserve’s age limits for game drives apply", // CONFIRM
    imageAlt: "Elephants on a game drive in a private reserve in the Western Cape",
    extraFaqs: [
      { q: "How far is the safari from Cape Town?", a: "The reserve is roughly two hours’ drive from Cape Town, so we leave early and return in the evening. We confirm the reserve and timing when you book." }, // CONFIRM reserve name
      { q: "Can you see the Big Five near Cape Town?", a: "Yes. A private reserve in the Western Cape can offer lion, elephant, rhino, buffalo and leopard, though sightings are never guaranteed and leopards in particular are elusive." },
    ],
  },
  "kenilworth-race-day-experience": {
    h1: "Kenilworth Race Day Experience in Cape Town",
    seoTitle: "Kenilworth Race Day Experience, Cape Town | Cape Town Trips",
    metaDescription:
      "Spend a day at Kenilworth Racecourse with a host and hotel transfers. Ideal for groups, birthdays and corporate days out. Enquire to book.",
    startTime: "Late-morning pick-up on race days", // CONFIRM
    fitness: "Easy. Mostly seated, with some walking at the course",
    ages: "Adults (betting is 18+). Children are subject to the venue’s rules", // CONFIRM
    imageAlt: "Horses racing at Kenilworth Racecourse in Cape Town",
    extraFaqs: [
      { q: "When is the Cape Town Met?", a: "The Met is Cape Town’s biggest race day and is traditionally held in the summer, around January. Dates change each year, so check the official racing calendar and tell us your travel dates." },
      { q: "Can you arrange a corporate or group race day?", a: "Yes. Groups, birthdays and corporate days out are welcome. Tell us the group size and occasion in your enquiry and we will plan it." },
    ],
  },
};

export const getTourSeo = (slug: string) => tourSeo[slug];
