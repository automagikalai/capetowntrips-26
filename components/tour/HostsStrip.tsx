import Image from "next/image";
import Link from "next/link";
import { publicFileExists } from "@/lib/tour-images";
import { site } from "@/lib/site";

/** Two small host portraits. Glen's appears automatically once public/images/glen-manning.jpg exists. */
export function HostsStrip() {
  const hasGlen = publicFileExists("images/glen-manning.jpg");
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {hasGlen ? (
          <Image src="/images/glen-manning.jpg" alt="Glen Manning" width={96} height={96} className="size-12 rounded-full border-2 border-white object-cover" />
        ) : (
          <span aria-hidden="true" className="grid size-12 place-items-center rounded-full border-2 border-white bg-seafoam font-heading font-extrabold text-cape-slate">G</span>
        )}
        <Image src="/images/ryan-manning.jpg" alt="Ryan Manning" width={96} height={96} className="size-12 rounded-full border-2 border-white object-cover" />
      </div>
      <p className="text-[0.9rem] leading-snug">
        Hosted by <strong className="text-cape-slate">{site.hosts}</strong>, a father-and-son team.{" "}
        <Link href="/about" className="font-bold text-ocean-teal underline decoration-sunbird-gold decoration-2 underline-offset-4">
          Meet us
        </Link>
      </p>
    </div>
  );
}
