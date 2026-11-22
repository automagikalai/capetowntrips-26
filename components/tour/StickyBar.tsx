"use client";

import { useEffect, useState } from "react";

/** Mobile-only bar that keeps the main call to action in reach. Hides itself near the form and footer. */
export function StickyBar({ price, basis }: { price: string; basis: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("#enquire, footer");
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setHidden(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgb(47_72_88/0.1)] backdrop-blur transition-transform lg:hidden ${
        hidden ? "translate-y-full" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[640px] items-center justify-between gap-4">
        <p className="text-[0.82rem] leading-tight">
          From
          <strong className="block font-heading text-[1.2rem] text-cape-slate">{price}</strong>
          <span className="text-[0.75rem]">{basis}</span>
        </p>
        <a
          href="#enquire"
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-sunbird-gold px-5 font-black text-cape-slate"
        >
          Request a call back
        </a>
      </div>
    </div>
  );
}
