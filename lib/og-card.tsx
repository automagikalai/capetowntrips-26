import type { CSSProperties } from "react";

export const ogSize = { width: 1200, height: 630 };

const base: CSSProperties = { display: "flex" };

/** The branded share card shown when a page is shared on WhatsApp, Facebook, LinkedIn and so on. */
export function OgCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return (
    <div style={{ ...base, width: "100%", height: "100%", background: "#2F4858", position: "relative", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "white" }}>
      <div style={{ ...base, position: "absolute", right: -120, top: -120, width: 460, height: 460, borderRadius: 460, background: "#F2B134", opacity: 0.9 }} />
      <div style={{ ...base, position: "absolute", left: 0, right: 0, bottom: 0, height: 26, background: "#0E7C86" }} />
      <div style={{ ...base, fontSize: 28, fontWeight: 800, letterSpacing: 4, color: "#BFE3DC", textTransform: "uppercase" }}>{eyebrow}</div>
      <div style={{ ...base, fontSize: 76, fontWeight: 800, lineHeight: 1.08, maxWidth: 900 }}>{title}</div>
      <div style={{ ...base, fontSize: 30, color: "#E6EEF0", marginBottom: 20 }}>{footer}</div>
    </div>
  );
}
