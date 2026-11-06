import type { Metadata, Viewport } from "next";
import { Bangers, Comic_Neue, Dela_Gothic_One } from "next/font/google";
import "./pocket.css";

// Las tres letras del manga, servidas desde el mismo sitio (next/font).
const bangers = Bangers({ subsets: ["latin"], weight: "400", variable: "--font-bangers", display: "swap" });
const comic = Comic_Neue({ subsets: ["latin"], weight: "700", variable: "--font-comic", display: "swap" });
const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-dela", display: "swap", preload: false });

const title = "Elias González · The Pocket";
const description =
  "Un manga que se lee con el scroll: cómo una idea dibujada en una servilleta se vuelve una app que la gente abre de verdad. Por Elias González.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eliasgonzalez.io"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Elias González", locale: "es_ES", title, description },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${bangers.variable} ${comic.variable} ${dela.variable}`}>
      <body>{children}</body>
    </html>
  );
}
