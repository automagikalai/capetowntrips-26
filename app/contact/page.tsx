"use client";

import { useRef, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { site, telHref, whatsappHref } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-cape-slate placeholder:text-ink-soft/70 focus:border-ocean-teal focus:outline-none focus:ring-2 focus:ring-ocean-teal/25";
const label = "mb-1.5 block text-[0.9rem] font-bold text-cape-slate";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const sentRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_15%,rgb(191_227_220/0.7),transparent_35%)] pb-[clamp(40px,5vw,64px)] pt-[clamp(56px,8vw,96px)]">
        <div className="container-page max-w-[760px]">
          <Eyebrow>We'd love to hear from you</Eyebrow>
          <h1 className="mb-5 mt-5 text-[clamp(2.4rem,5.5vw,4.4rem)]">
            Get in <span className="text-ocean-teal">touch</span>
          </h1>
          <p className="text-[1.12rem] leading-relaxed text-ink-soft">
            Whether you have a question about a tour, want to plan something
            bespoke, or just want to know more about Cape Town — Glen and Ryan
            are always happy to chat. Reach us however suits you best.
          </p>
        </div>
      </section>

      <section className="pb-[clamp(64px,8vw,104px)] pt-10">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

          {/* Contact details panel */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[22px] bg-cape-slate p-7 text-white">
              <p className="mb-5 text-[0.78rem] font-black uppercase tracking-[0.13em] text-seafoam">
                Contact Glen &amp; Ryan
              </p>

              {/* Email */}
              <a
                href={`mailto:${site.email}`}
                className="group mb-5 flex items-start gap-4"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-seafoam">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[0.8rem] font-semibold text-white/60">Email</span>
                  <span className="font-bold text-white group-hover:text-seafoam transition-colors">{site.email}</span>
                </span>
              </a>

              {/* Phone */}
              {site.phone && (
                <a
                  href={telHref()}
                  className="group mb-5 flex items-start gap-4"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-seafoam">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold text-white/60">Phone</span>
                    <span className="font-bold text-white group-hover:text-seafoam transition-colors">{site.phone}</span>
                  </span>
                </a>
              )}

              {/* WhatsApp */}
              {site.whatsapp && (
                <a
                  href={whatsappHref("Hi, I'd like to find out more about Cape Town Trips.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-seafoam">
                    {/* WhatsApp icon */}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-semibold text-white/60">WhatsApp</span>
                    <span className="font-bold text-white group-hover:text-seafoam transition-colors">{site.phone}</span>
                  </span>
                </a>
              )}
            </div>

            <div className="rounded-[22px] border border-line bg-seafoam/30 p-6">
              <p className="text-[0.9rem] font-bold text-cape-slate">Response time</p>
              <p className="mt-1 text-ink-soft">
                We reply to all messages within one working day — usually much sooner.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {status === "sent" ? (
              <div
                ref={sentRef}
                tabIndex={-1}
                role="status"
                className="rounded-card border border-line bg-white p-10 text-center shadow-lift outline-none"
              >
                <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-seafoam text-3xl text-ocean-teal">
                  ✓
                </div>
                <h2 className="mb-3 text-[1.9rem]">Message received</h2>
                <p className="mx-auto max-w-[44ch]">
                  Thanks for getting in touch. Glen or Ryan will be back to you within one working day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-card border border-line bg-white p-6 shadow-lift sm:p-8"
              >
                <h2 className="mb-1 text-[1.5rem]">Send us a message</h2>
                <p className="mb-6 text-[0.95rem]">
                  Have a question? Not sure which tour to pick? Drop us a note and we'll come back to you.
                </p>

                {/* Spam trap */}
                <div aria-hidden="true" className="absolute -left-[9999px]">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="firstName">First name</label>
                    <input
                      className={field}
                      id="firstName"
                      name="firstName"
                      required
                      maxLength={80}
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="surname">Surname</label>
                    <input
                      className={field}
                      id="surname"
                      name="surname"
                      required
                      maxLength={80}
                      autoComplete="family-name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="email">Email</label>
                    <input
                      className={field}
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={160}
                      autoComplete="email"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="message">Your message</label>
                    <textarea
                      className={`${field} min-h-[140px]`}
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      placeholder="Ask us anything — tours, dates, what to expect…"
                    />
                  </div>
                </div>

                {/* POPIA consent */}
                <div className="mt-5 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-0.5 size-4 shrink-0 cursor-pointer accent-ocean-teal"
                  />
                  <label htmlFor="consent" className="cursor-pointer text-[0.88rem] leading-snug text-ink-soft">
                    I consent to Cape Town Trips using my details to contact me in relation to this message, in accordance with South Africa's Protection of Personal Information Act (POPIA).
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-ocean-teal px-6 font-black text-white transition hover:bg-cape-slate disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl bg-[#fdecea] px-4 py-3 text-[0.92rem] text-[#8a2c22]!"
                  >
                    Sorry, that didn't send. Please email us directly at{" "}
                    <a className="font-bold underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
