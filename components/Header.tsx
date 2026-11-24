"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { tours } from "@/lib/tours";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/#explore", label: "Explore" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [desktopToursOpen, setDesktopToursOpen] = useState(false);
  const toursDropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileToursOpen(false);
        setDesktopToursOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        toursDropdownRef.current &&
        !toursDropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopToursOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset mobile tours accordion when menu closes
  useEffect(() => {
    if (!open) {
      setMobileToursOpen(false);
    }
  }, [open]);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMobileToursOpen(false);
    setDesktopToursOpen(false);
  }, [pathname]);

  const toursActive = pathname === "/tours" || pathname.startsWith("/tours/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-shell shadow-sm">
      <div className="container-page flex min-h-[88px] items-center justify-between gap-7 max-nav:min-h-[78px] max-sm:min-h-[70px] max-sm:gap-3">
        {/* Logo */}
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
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

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className="hidden nav:flex nav:items-center nav:gap-[clamp(16px,2.2vw,30px)] nav:ml-auto"
        >
          {/* Tours dropdown (hover & click enabled, scrollable on smaller screens) */}
          <div
            ref={toursDropdownRef}
            className="group relative py-3"
            onMouseEnter={() => setDesktopToursOpen(true)}
            onMouseLeave={() => setDesktopToursOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/tours"
                className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[0.94rem] font-extrabold transition-colors hover:text-ocean-teal ${
                  toursActive
                    ? "text-ocean-teal shadow-[0_3px_0_var(--color-sunbird-gold)]"
                    : "text-cape-slate"
                }`}
              >
                Tours
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setDesktopToursOpen((prev) => !prev);
                }}
                aria-expanded={desktopToursOpen}
                aria-label="Toggle tours dropdown menu"
                className="cursor-pointer p-1 text-cape-slate transition-colors hover:text-ocean-teal"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    desktopToursOpen ? "rotate-180 text-ocean-teal" : "group-hover:rotate-180"
                  }`}
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Dropdown panel */}
            <div
              className={`absolute left-0 top-full pt-1.5 transition-all duration-150 z-50 ${
                desktopToursOpen
                  ? "opacity-100 visible pointer-events-auto"
                  : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
              }`}
            >
              <div className="w-[340px] max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-white p-2 shadow-lift [scrollbar-width:thin]">
                <div className="sticky top-0 z-10 bg-white/95 pb-1 backdrop-blur-sm">
                  <Link
                    href="/tours"
                    onClick={() => setDesktopToursOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[0.84rem] font-bold text-ocean-teal transition-colors hover:bg-seafoam"
                  >
                    <span>View all {tours.length} tours</span>
                    <span>→</span>
                  </Link>
                  <div className="mx-2 my-1 border-t border-line" />
                </div>
                <div className="flex flex-col gap-0.5">
                  {tours.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tours/${t.slug}`}
                      onClick={() => setDesktopToursOpen(false)}
                      className={`flex items-start gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-seafoam ${
                        pathname === `/tours/${t.slug}` ? "bg-seafoam/40 font-bold text-ocean-teal" : ""
                      }`}
                    >
                      <span className="flex-1">
                        <span className="block text-[0.88rem] font-bold text-cape-slate leading-snug">{t.title}</span>
                        <span className="block text-[0.78rem] text-ink-soft">{t.duration}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Links (About, Contact, Explore) */}
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-[0.94rem] font-extrabold transition-colors hover:text-ocean-teal ${
                  active
                    ? "text-ocean-teal shadow-[0_3px_0_var(--color-sunbird-gold)]"
                    : "text-cape-slate"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Book Button */}
          <Link
            href="/tours"
            className="whitespace-nowrap rounded-full bg-ocean-teal px-[22px] py-[11px] text-[0.94rem] font-extrabold text-white transition-colors hover:bg-cape-slate shrink-0"
          >
            Book
          </Link>

          {/* Contact Details (Desktop) */}
          <div className="flex flex-col text-[0.82rem] leading-snug border-l border-line/80 pl-4">
            <a
              href="tel:+27774742397"
              className="inline-flex items-center gap-1.5 font-bold text-cape-slate hover:text-ocean-teal transition-colors py-0.5 whitespace-nowrap"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-teal shrink-0" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +27 77 474 2397
            </a>
            <a
              href="mailto:gmanningza@gmail.com"
              className="inline-flex items-center gap-1.5 font-semibold text-ink-soft hover:text-ocean-teal transition-colors py-0.5 whitespace-nowrap"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-teal shrink-0" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              gmanningza@gmail.com
            </a>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE NAVIGATION MENU (DROPDOWN) ================= */}
      {open && (
        <div
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="nav:hidden border-t border-line/70 bg-shell px-6 pt-3 pb-8 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto flex flex-col"
        >
          <div className="flex flex-col">
            {/* Collapsible Tours Accordion */}
            <div className="border-b border-line/60 pb-1">
              <button
                type="button"
                onClick={() => setMobileToursOpen((prev) => !prev)}
                className={`flex w-full cursor-pointer items-center justify-between text-left text-[1.05rem] font-extrabold transition-colors hover:text-ocean-teal px-2 py-3.5 ${
                  toursActive ? "text-ocean-teal" : "text-cape-slate"
                }`}
                aria-expanded={mobileToursOpen}
              >
                <span>Tours</span>
                <span className="flex items-center gap-2 text-[0.8rem] font-bold text-ink-soft">
                  <span className="rounded-full bg-seafoam px-2.5 py-0.5 text-[0.75rem] text-ocean-teal font-extrabold">
                    {mobileToursOpen ? "Hide" : "See Tours"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${mobileToursOpen ? "rotate-180 text-ocean-teal" : "text-cape-slate/70"}`}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {/* Collapsed list: ONLY rendered when mobileToursOpen is true */}
              {mobileToursOpen && (
                <div className="flex flex-col gap-1 border-l-2 border-ocean-teal/40 my-1 ml-3 pl-3 pb-3">
                  <Link
                    href="/tours"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2.5 py-2 text-[0.88rem] font-extrabold text-ocean-teal hover:bg-seafoam/60"
                  >
                    View all tours →
                  </Link>
                  {tours.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tours/${t.slug}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-2.5 py-2 text-[0.92rem] font-semibold transition-colors hover:bg-seafoam/60 hover:text-ocean-teal ${
                        pathname === `/tours/${t.slug}` ? "bg-seafoam/40 font-bold text-ocean-teal" : "text-cape-slate/85"
                      }`}
                    >
                      <span className="block leading-snug">{t.title}</span>
                      <span className="block text-[0.76rem] text-ink-soft mt-0.5">{t.duration}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Nav Links (About, Contact, Explore) */}
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line/40 text-[1.05rem] font-extrabold transition-colors hover:text-ocean-teal px-2 py-3.5 ${
                    active ? "text-ocean-teal" : "text-cape-slate"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Book button & Direct Contact Cards at the bottom */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/tours"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-ocean-teal py-3.5 text-center text-[1rem] font-extrabold text-white shadow-md transition-colors hover:bg-cape-slate"
            >
              Book a Tour
            </Link>

            <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 border border-line shadow-sm">
              <span className="text-[0.75rem] font-bold tracking-wider text-ink-soft uppercase">Contact Glen &amp; Ryan</span>
              <a
                href="tel:+27774742397"
                className="flex items-center gap-3 font-bold text-cape-slate hover:text-ocean-teal transition-colors py-1"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-seafoam text-ocean-teal">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[0.95rem]">+27 77 474 2397</span>
              </a>
              <a
                href="mailto:gmanningza@gmail.com"
                className="flex items-center gap-3 font-semibold text-cape-slate hover:text-ocean-teal transition-colors py-1"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-seafoam text-ocean-teal">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="text-[0.88rem] truncate">gmanningza@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
