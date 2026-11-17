import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ocean-teal text-white hover:bg-cape-slate",
  secondary:
    "border-[1.5px] border-cape-slate text-cape-slate hover:border-seafoam hover:bg-seafoam",
  gold: "bg-sunbird-gold text-cape-slate hover:bg-[#f7c25d]",
  ghost: "border-[1.5px] border-white/60 text-white hover:bg-white/10",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-[50px] items-center justify-center rounded-full px-6 py-[13px] font-black transition hover:-translate-y-0.5 max-sm:w-full ${variants[variant]} ${className}`;
  const internal = href.startsWith("/") || href.startsWith("#");

  return internal ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
