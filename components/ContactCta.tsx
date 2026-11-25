import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

type ContactCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function ContactCta({
  eyebrow = "Let’s plan your trip",
  title = "Ready to explore the Mother City with locals who love it?",
  text = "Let’s plan your Cape Town adventure.",
}: ContactCtaProps) {
  return (
    <section id="contact" className="bg-white py-[84px] text-center max-sm:py-[68px]">
      <div className="container-page">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mx-auto mb-3.5 mt-4 max-w-[760px] text-[clamp(2rem,4vw,3.35rem)] text-cape-slate!">
          {title}
        </h2>
        <p className="mx-auto max-w-[560px] text-[1.1rem] text-ink-soft!">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button
            variant="gold"
            href="mailto:hello@capetowntrips.com?subject=Enquiry%20-%20Cape%20Town%20Trips"
          >
            Book your experience
          </Button>
          <Button variant="secondary" href="/tours">
            See our tours
          </Button>
        </div>
      </div>
    </section>
  );
}
