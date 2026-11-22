import { Button } from "@/components/Button";
import { ContactCta } from "@/components/ContactCta";
import { Eyebrow } from "@/components/Eyebrow";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private & Small-Group Cape Town Tours | Cape Town Trips",
  description:
    "Authentic Cape Town tours led by local guides Glen and Ryan Manning. Cape Point, winelands, Robben Island, safari and more. Plan your trip.",
  path: "/",
});

// Placeholder homepage. We'll build the real one next, page by page.
export default function HomePage() {
  return (
    <>
      <section className="py-[clamp(76px,10vw,132px)]">
        <div className="container-page">
          <Eyebrow>Your Cape Town adventure starts here</Eyebrow>
          <h1 className="mb-[22px] mt-5 max-w-[760px] text-[clamp(2.8rem,6vw,5.6rem)]">
            See more. Feel more. <span className="text-ocean-teal">Discover Cape Town.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/about">Get to know us</Button>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
