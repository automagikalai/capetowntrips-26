import { Button } from "@/components/Button";
import { formatForeign, formatRand, site, telHref, whatsappHref } from "@/lib/site";
import type { Tour } from "@/lib/tours";
import { HostsStrip } from "./HostsStrip";
import { Check } from "./Icons";

export function BookingCard({ tour }: { tour: Tour }) {
  return (
    <div className="rounded-card border border-line bg-white p-6 shadow-lift">
      <p className="text-[0.85rem] font-bold uppercase tracking-[0.1em] text-ink-soft">From</p>
      <p className="font-heading text-[2.4rem] font-extrabold leading-none tracking-[-0.03em] text-cape-slate!">
        {formatRand(tour.price)}
      </p>
      <p className="mt-1 text-[0.92rem]">{site.priceBasis}</p>
      <p className="mb-5 text-[0.78rem] text-ink-soft">About {formatForeign(tour.price)} (rates change)</p>

      <ul className="mb-6 space-y-2.5 text-[0.95rem]">
        {[
          "No payment online. Enquire first, decide later.",
          `We’ll call you ${site.responseTime} to plan it with you.`,
          "Tailored to your dates, pace and interests.",
        ].map((line) => (
          <li key={line} className="flex gap-2.5 text-cape-slate">
            <Check className="mt-0.5 text-ocean-teal" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3">
        <Button href="#enquire" variant="primary" className="w-full">Request a call back</Button>
        {site.phone && <Button href={telHref()} variant="secondary" className="w-full">Call {site.phone}</Button>}
        {site.whatsapp && (
          <Button href={whatsappHref(`Hi, I’d like to know more about the ${tour.title}.`)} variant="secondary" className="w-full">
            WhatsApp us
          </Button>
        )}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <HostsStrip />
      </div>
    </div>
  );
}
