"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { tours } from "@/lib/tours";

const topLinks = [
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/#explore", label: "Explore" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const toursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setToursOpen(false); }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) {
        setToursOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const toursActive = pathname === "/tours" || pathname.startsWith("/tours/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-shell/95 backdrop-blur-md">
      <div className="container-page flex min-h-[88px] items-center justify-between gap-7 max-nav:min-h-[78px] max-sm:min-h-[70px] max-sm:gap-3">
        <Link
          href="/"
          aria-label="Cape Town Trips home"
          className="inline-flex min-w-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Cape Town Trips logo"
            width={1024}
            height={512}
            priority
            sizes="(max-width: 640px) 66vw, 330px"
            className="h-auto w-[clamp(230px,28vw,330px)] max-nav:w-[clamp(210px,34vw,290px)] max-sm:w-[min(66vw,250px)]"
          />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex size-[46px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line bg-white text-cape-slate nav:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${
            open ? "flex" : "hidden nav:flex"
          } absolute inset-x-0 top-full flex-col items-stretch border-b border-line bg-shell px-6 pb-6 pt-[18px] shadow-[0_18px_24px_rgb(47_72_88/0.08)] nav:static nav:ml-auto nav:flex-row nav:items-center nav:gap-[clamp(16px,2.2vw,30px)] nav:border-0 nav:bg-transparent nav:p-0 nav:shadow-none`}
        >
          {/* Tours dropdown — desktop (pure CSS hover bridge) / mobile (flat list) */}
          <div ref={toursRef} className="group relative py-3 max-nav:contents">
            {/* Desktop trigger */}
            <Link
              href="/tours"
              className={`hidden nav:inline-flex items-center gap-1.5 whitespace-nowrap text-[0.94rem] font-extrabold transition-colors hover:text-ocean-teal ${
                toursActive
                  ? "text-ocean-teal nav:shadow-[0_3px_0_var(--color-sunbird-gold)]"
                  : "text-cape-slate"
              }`}
            >
              Tours
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Dropdown panel — pure CSS hover with seamless bridge */}
            <div className="absolute left-0 top-full pt-1.5 hidden nav:block opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-150 z-50">
              <div className="w-[320px] rounded-2xl border border-line bg-white p-2 shadow-lift">
                <Link
                  href="/tours"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[0.84rem] font-bold text-ocean-teal hover:bg-seafoam transition-colors"
                >
                  View all tours →
                </Link>
                <div className="mx-4 my-1.5 border-t border-line" />
                {tours.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tours/${t.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-3 rounded-xl px-4 py-2.5 hover:bg-seafoam transition-colors"
                  >
                    <span className="flex-1">
                      <span className="block text-[0.88rem] font-bold text-cape-slate leading-snug">{t.title}</span>
                      <span className="block text-[0.78rem] text-ink-soft">{t.duration}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tours links — mobile (flat list) */}
            <div className="nav:hidden">
              <Link
                href="/tours"
                onClick={() => setOpen(false)}
                className={`block whitespace-nowrap text-[0.94rem] font-extrabold transition-colors hover:text-ocean-teal px-2 py-[13px] ${
                  pathname === "/tours" ? "text-ocean-teal" : "text-cape-slate"
                }`}
              >
                All Tours
              </Link>
              {tours.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tours/${t.slug}`}
                  onClick={() => setOpen(false)}
                  className={`block pl-5 text-[0.88rem] font-semibold transition-colors hover:text-ocean-teal px-2 py-[10px] ${
                    pathname === `/tours/${t.slug}` ? "text-ocean-teal" : "text-cape-slate/80"
                  }`}
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>

          {topLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`whitespace-nowrap text-[0.94rem] font-extrabold transition-colors hover:text-ocean-teal max-nav:px-2 max-nav:py-[13px] ${
                  active
                    ? "text-ocean-teal nav:shadow-[0_3px_0_var(--color-sunbird-gold)]"
                    : "text-cape-slate"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/tours"
            onClick={() => setOpen(false)}
            className="whitespace-nowrap rounded-full bg-ocean-teal px-[22px] py-[11px] text-[0.94rem] font-extrabold text-white transition-colors hover:bg-cape-slate max-nav:mt-2 max-nav:text-center"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
