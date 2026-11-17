import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type PersonSectionProps = {
  id: string;
  role: string;
  name: string;
  portrait: ReactNode;
  children: ReactNode;
  /** Puts the photo on the right on wide screens */
  flip?: boolean;
  /** White band instead of shell */
  white?: boolean;
};

export function PersonSection({
  id,
  role,
  name,
  portrait,
  children,
  flip = false,
  white = false,
}: PersonSectionProps) {
  return (
    <section id={id} className={`py-[94px] max-sm:py-[68px] ${white ? "bg-white" : ""}`}>
      <div
        className={`container-page grid items-center gap-[clamp(36px,6vw,80px)] max-md:grid-cols-1 max-md:gap-11 ${
          flip ? "md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
        }`}
      >
        <div className={flip ? "md:order-2" : ""}>{portrait}</div>
        <div className="[&_p+p]:mt-4">
          <Eyebrow>{role}</Eyebrow>
          <h2 className="mb-[22px] mt-4 text-[clamp(2rem,4vw,3.35rem)]">{name}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
