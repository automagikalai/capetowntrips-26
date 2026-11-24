import { ContactCta } from "@/components/ContactCta";
import { Eyebrow } from "@/components/Eyebrow";
import { PersonSection } from "@/components/PersonSection";
import { PortraitCard } from "@/components/PortraitCard";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us: Local Cape Town Tour Guides | Cape Town Trips",
  description:
    "Meet Glen and Ryan Manning, the father-and-son team behind Cape Town Trips, and find out why we show visitors the Cape we know.",
  path: "/about",
});

const reasons = [
  {
    title: "True insider knowledge",
    text: "Beyond the famous landmarks, we love sharing the hidden corners, local stories, and obscure gems that you won’t find on a standard booking site.",
  },
  {
    title: "Personal connection",
    text: "As a father-and-son team, we thrive on genuine conversation, good humour, and warm South African hospitality.",
  },
  {
    title: "Tailored adventures",
    text: "Whether you’re here for the scenery, the culture, the music, or the food, we shape every trip around what excites you most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_15%,rgb(191_227_220/0.7),transparent_35%)] pb-[clamp(64px,8vw,96px)] pt-[clamp(64px,9vw,112px)] after:absolute after:-bottom-[230px] after:-right-[170px] after:size-[420px] after:rounded-full after:bg-sunbird-gold after:opacity-[0.13] after:content-['']">
        <div className="container-page relative z-10">
          <Eyebrow>About us</Eyebrow>
          <h1 className="mb-[22px] mt-5 max-w-[820px] text-[clamp(2.6rem,6vw,5rem)]">
            Welcome to <span className="text-ocean-teal">CapeTownTrips</span>
          </h1>
          <p className="max-w-[610px] text-[1.15rem]">
            A father-and-son team sharing the Cape the way locals know it.
          </p>
        </div>
      </section>

      <PersonSection
        id="glen"
        role="Founder & Guide"
        name="Meet Glen Manning"
        portrait={
          <PortraitCard
            src="/images/glen-manning.webp"
            alt="Glen Manning, founder and guide at Cape Town Trips"
          />
        }
      >
        <p>
          As a retired lawyer, I can honestly say I’ve lived an exciting life—not just in the
          courtroom, but out in the world. Over the years, I’ve officiated at numerous weddings,
          birthdays, and funerals, so engaging with people from all walks of life comes naturally
          to me. When I’m not exploring the Cape, you’ll find me immersed in my other great
          passions: listening to great jazz, writing as an author and Facebook blogger, or cheering
          on the beautiful game (having been lucky enough to attend four FIFA World Cups in
          person!).
        </p>
        <p className="my-[26px] border-l-4 border-sunbird-gold pl-[18px] font-heading text-[1.3rem] font-bold leading-[1.3] tracking-[-0.02em] text-cape-slate!">
          In an age where tours can just as easily be booked online, why start a travel business,
          you might ask?
        </p>
        <p>
          Heck, I’ve even booked overseas trips that way myself. I tell you what, though—having
          someone with an intimate knowledge of even the most obscure attractions is worth its
          weight in gold. With hindsight, I guarantee that if I’d used a local tour guide in
          Singapore or São Paulo, my experiences would’ve been so much richer.
        </p>
        <p>
          And so, I started CapeTownTrips to impart all my experience and knowledge of the Cape,
          ensuring you have a truly rewarding adventure—and helping spread the word that Cape Town
          is indeed the most beautiful city in the world!
        </p>
      </PersonSection>

      <PersonSection
        id="ryan"
        role="Co-Pilot & Local Insider"
        name="Meet Ryan Manning"
        flip
        white
        portrait={
          <PortraitCard
            flip
            src="/images/ryan-manning.jpg"
            alt="Ryan Manning, co-pilot and local insider at Cape Town Trips"
          />
        }
      >
        <p>
          Joining Glen on the road is his son, Ryan Manning. A talented musician and member of the
          Durban rock band Nemesis, Ryan brings a creative spark, easygoing energy, and a deep
          appreciation for South African culture and music to the team.
        </p>
        <p>
          Having traded the stage lights of Durban for the coastal beauty of the Cape, Ryan pairs
          his natural people skills with local know-how—helping craft laid-back, memorable journeys
          where guests feel less like tourists and more like friends along for the ride.
        </p>
      </PersonSection>

      <section className="py-[94px] max-sm:py-[68px]">
        <div className="container-page">
          <div className="mb-[42px] max-w-[700px]">
            <Eyebrow>What you can expect</Eyebrow>
            <h2 className="mt-[17px] text-[clamp(2rem,4vw,3.35rem)]">Why travel with us?</h2>
          </div>
          <div className="grid gap-[22px] md:grid-cols-3">
            {reasons.map(({ title, text }) => (
              <article
                key={title}
                className="rounded-card border border-t-[5px] border-line border-t-sunbird-gold bg-white px-[26px] py-7 transition hover:-translate-y-[5px] hover:shadow-lift"
              >
                <h3 className="mb-2.5 text-[1.35rem]">{title}</h3>
                <p className="text-[0.98rem]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
