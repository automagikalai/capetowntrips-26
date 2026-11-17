import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  /** Use on dark (slate) backgrounds */
  onDark?: boolean;
};

export function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-[9px] text-[0.78rem] font-black uppercase tracking-[0.13em] before:h-[3px] before:w-[25px] before:rounded-[3px] before:bg-sunbird-gold before:content-[''] ${
        onDark ? "text-seafoam" : "text-ocean-teal"
      }`}
    >
      {children}
    </span>
  );
}
