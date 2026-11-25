import Link from "next/link";
import { site, telHref } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/book", label: "Book a Tour" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-footer py-[42px] text-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2.5">
            <div className="font-heading font-extrabold tracking-[-0.03em] text-[1.1rem]">
              CAPE TOWN <span className="text-sunbird-gold">TRIPS</span>
            </div>
            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.88rem] text-white/85">
              <a
                href={telHref()}
                className="inline-flex items-center gap-1.5 hover:text-sunbird-gold transition-colors font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-sunbird-gold shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 hover:text-sunbird-gold transition-colors font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-sunbird-gold shrink-0" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {site.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 sm:self-start">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-[0.9rem] text-white/80 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-[22px] border-t border-white/10 pt-4 text-[0.82rem] text-white/55">
          © {new Date().getFullYear()} Cape Town Trips. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
