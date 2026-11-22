import type { Theme } from "@/lib/tours";
import { PlaceholderArt } from "./PlaceholderArt";

const order: Theme[] = ["sea", "mountain", "vine", "safari", "road"];

/** Shows how the photo grid will look. Only rendered while placeholders are on. */
export function PlaceholderGallery({ theme }: { theme: Theme }) {
  const start = order.indexOf(theme);
  const themes = [0, 2, 3].map((n) => order[(start + n) % order.length]);
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {themes.map((t, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-[18px] ${
            i === 0 ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto" : "aspect-[4/3]"
          }`}
        >
          <PlaceholderArt theme={t} />
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold text-cape-slate">
            Gallery photo {i + 1} coming soon
          </span>
        </div>
      ))}
    </div>
  );
}
