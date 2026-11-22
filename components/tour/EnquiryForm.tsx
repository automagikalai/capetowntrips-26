"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";

type Props = { tourSlug: string; tourTitle: string };
type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-cape-slate placeholder:text-ink-soft/70 focus:border-ocean-teal focus:outline-none focus:ring-2 focus:ring-ocean-teal/25";
const label = "mb-1.5 block text-[0.9rem] font-bold text-cape-slate";

export function EnquiryForm({ tourSlug, tourTitle }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const sentRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tourSlug, tourTitle }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
      setTimeout(() => sentRef.current?.focus(), 50);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div ref={sentRef} tabIndex={-1} role="status" className="rounded-card border border-line bg-white p-8 text-center outline-none">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-seafoam text-2xl text-ocean-teal">✓</div>
        <h3 className="mb-3 text-[1.6rem]">Thank you, we’ve got your enquiry</h3>
        <p className="mx-auto max-w-[44ch]">
          We’ll call you {site.responseTime} to talk through the {tourTitle} and answer any questions. Nothing has been booked or charged.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-white p-6 shadow-lift sm:p-8" aria-describedby="form-note">
      <h3 className="mb-1 text-[1.5rem]">Request a call back</h3>
      <p id="form-note" className="mb-6 text-[0.95rem]">
        Tell us a little about your trip. No payment needed. We’ll call to plan it together.
      </p>

      {/* Spam trap: real people never see or fill this */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Your name</label>
          <input className={field} id="name" name="name" required maxLength={120} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input className={field} id="email" name="email" type="email" required maxLength={160} autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone or WhatsApp</label>
          <input className={field} id="phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" placeholder="Include your country code" />
        </div>
        <div>
          <label className={label} htmlFor="country">Where are you travelling from?</label>
          <input className={field} id="country" name="country" maxLength={80} placeholder="Helps us call at a good time" />
        </div>
        <div>
          <label className={label} htmlFor="date">Preferred date</label>
          <input className={field} id="date" name="date" type="date" />
        </div>
        <div>
          <label className={label} htmlFor="guests">Number of guests</label>
          <input className={field} id="guests" name="guests" type="number" min={1} max={50} defaultValue={2} required />
        </div>
        <div>
          <label className={label} htmlFor="occasion">What’s the occasion?</label>
          <select className={field} id="occasion" name="occasion" defaultValue="Holiday">
            <option>Holiday</option>
            <option>Birthday or celebration</option>
            <option>Corporate or team day</option>
            <option>Family or group trip</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="contactMethod">How would you like us to reach you?</label>
          <select className={field} id="contactMethod" name="contactMethod" defaultValue="Phone call">
            <option>Phone call</option>
            <option>WhatsApp</option>
            <option>Email</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="callTime">Best time to call (South African time)</label>
          <select className={field} id="callTime" name="callTime" defaultValue="Anytime">
            <option>Anytime</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">Anything we should know? (optional)</label>
        <textarea className={`${field} min-h-[120px]`} id="message" name="message" maxLength={1500} placeholder="Ages of children, special interests, mobility needs, dates that are flexible…" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-ocean-teal px-6 font-black text-white transition hover:bg-cape-slate disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my call back"}
      </button>

      <p className="mt-4 text-center text-[0.82rem]">
        We use your details only to reply to this enquiry. We’ll never share them.
      </p>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-[#fdecea] px-4 py-3 text-[0.92rem] text-[#8a2c22]!">
          Sorry, that didn’t send. Please email us at{" "}
          <a className="font-bold underline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${tourTitle}`)}`}>{site.email}</a>
          {site.phone ? <> or call {site.phone}</> : null} and we’ll sort it out.
        </p>
      )}
    </form>
  );
}
