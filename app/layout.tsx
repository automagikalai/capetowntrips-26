import type { Metadata } from "next";
import { Nunito_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { jsonLd, noindex, orgSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Private & Small-Group Cape Town Tours | Cape Town Trips",
    template: "%s | Cape Town Trips",
  },
  description:
    "Authentic Cape Town tours led by local guides Glen and Ryan Manning. Cape Point, winelands, Robben Island, safari and more. Plan your trip.",
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "en_ZA", type: "website" },
  twitter: { card: "summary_large_image" },
  // Staging and preview sites stay out of search (see NOINDEX in .env.example)
  robots: noindex ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${jakarta.variable} ${nunito.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema()) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
