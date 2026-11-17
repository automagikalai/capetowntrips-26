"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#tours", label: "Tours" },
  { href: "/#explore", label: "Explore" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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
            width={2084}
            height={755}
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
          {links.map(({ href, label }) => {
            const active = href === pathname;
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
            href="/#contact"
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
