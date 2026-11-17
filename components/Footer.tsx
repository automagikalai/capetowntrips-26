import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/#tours", label: "Tours" },
  { href: "/#explore", label: "Explore" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-footer py-[42px] text-white">
      <div className="container-page">
        <div className="flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-start">
          <div className="font-heading font-extrabold tracking-[-0.03em]">
            CAPE TOWN <span className="text-sunbird-gold">TRIPS</span>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-[0.9rem] text-white/80 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-[18px] text-[0.82rem] !text-white/55">
          © {new Date().getFullYear()} Cape Town Trips. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
