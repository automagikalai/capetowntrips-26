import type { Theme } from "@/lib/tours";

/**
 * Illustrated stand-in for a tour photo, drawn in the brand colours.
 * Used until a real photo is dropped into the tour's folder.
 */
const sun = (cx: number, cy: number, r: number) => <circle cx={cx} cy={cy} r={r} fill="#F2B134" />;

const waves = (
  <>
    <path d="M0 480 C200 440 400 520 600 480 S1000 440 1200 480 V800 H0Z" fill="#7CC6C7" />
    <path d="M0 550 C220 510 420 590 640 550 S1000 510 1200 555 V800 H0Z" fill="#0E7C86" />
    <path d="M0 630 C250 590 450 670 680 630 S1000 600 1200 635 V800 H0Z" fill="#2F4858" />
  </>
);

const scenes: Record<Theme, React.ReactNode> = {
  sea: (
    <>
      <rect width="1200" height="800" fill="url(#sky-light)" />
      {sun(820, 330, 150)}
      {waves}
      <path d="M0 745 C300 695 700 705 1200 735 V800 H0Z" fill="#F2B134" />
    </>
  ),
  mountain: (
    <>
      <rect width="1200" height="800" fill="url(#sky-warm)" />
      {sun(900, 300, 120)}
      <path d="M90 560 L250 410 L330 400 L880 400 L970 420 L1120 560 Z" fill="#2F4858" />
      <path d="M330 400 L880 400 L970 420 L1120 560 L760 560 Z" fill="#3b596b" />
      <ellipse cx="620" cy="392" rx="300" ry="26" fill="#FAF6F0" opacity="0.9" />
      <path d="M0 560 C220 530 420 590 640 560 S1000 530 1200 565 V800 H0Z" fill="#0E7C86" />
      <path d="M0 650 C250 620 450 690 680 650 S1000 625 1200 660 V800 H0Z" fill="#2F4858" />
    </>
  ),
  vine: (
    <>
      <rect width="1200" height="800" fill="url(#sky-warm)" />
      {sun(300, 300, 110)}
      <path d="M0 520 C200 440 400 500 600 450 S1000 420 1200 480 V800 H0Z" fill="#B8C98B" />
      <path d="M0 580 C250 520 500 570 750 530 S1050 510 1200 550 V800 H0Z" fill="#7FA36B" />
      <path d="M0 640 C300 590 600 620 1200 600 V800 H0Z" fill="#587B58" />
      {[-300, -150, 0, 150, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500].map((x) => (
        <path key={x} d={`M${x} 800 L600 630`} stroke="#2F4858" strokeWidth="5" opacity="0.35" />
      ))}
    </>
  ),
  safari: (
    <>
      <rect width="1200" height="800" fill="url(#sky-safari)" />
      {sun(600, 440, 190)}
      <path d="M0 560 C300 540 900 540 1200 560 V800 H0Z" fill="#A9803A" />
      <path d="M0 640 C300 620 900 620 1200 640 V800 H0Z" fill="#7A5B2A" />
      <path d="M850 640 C850 560 830 520 800 480" stroke="#2F4858" strokeWidth="14" fill="none" />
      <ellipse cx="790" cy="470" rx="160" ry="34" fill="#2F4858" />
      <ellipse cx="860" cy="445" rx="110" ry="26" fill="#2F4858" />
    </>
  ),
  road: (
    <>
      <rect width="1200" height="800" fill="url(#sky-light)" />
      {sun(600, 400, 120)}
      <path d="M0 520 C200 440 360 500 560 470 S900 430 1200 500 V800 H0Z" fill="#0E7C86" opacity="0.75" />
      <path d="M0 580 C300 520 600 560 1200 560 V800 H0Z" fill="#2F4858" opacity="0.9" />
      <path d="M500 800 L585 560 L615 560 L700 800 Z" fill="#FAF6F0" />
      <path d="M598 780 L600 740 M599 700 L601 670 M600 640 L601 620" stroke="#F2B134" strokeWidth="6" />
    </>
  ),
};

export function PlaceholderArt({ theme }: { theme: Theme }) {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="sky-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9F4F0" />
          <stop offset="1" stopColor="#BFE3DC" />
        </linearGradient>
        <linearGradient id="sky-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BFE3DC" />
          <stop offset="1" stopColor="#F8DFAA" />
        </linearGradient>
        <linearGradient id="sky-safari" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8DFAA" />
          <stop offset="1" stopColor="#F2B134" />
        </linearGradient>
      </defs>
      {scenes[theme]}
    </svg>
  );
}
