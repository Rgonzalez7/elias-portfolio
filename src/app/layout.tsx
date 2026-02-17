import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://www.eliasgonzalez.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elias Gonzalez — Full-Stack Engineer",
    template: "%s — Elias Gonzalez",
  },
  description:
    "Full-stack engineer building AI-powered SaaS products with clean UX and real-world workflows.",
  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Elias Gonzalez",
    title: "Elias Gonzalez — Full-Stack Engineer",
    description:
      "AI-powered SaaS, clean UX, and production-ready product foundations.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Elias Gonzalez — Full-Stack Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elias Gonzalez — Full-Stack Engineer",
    description:
      "AI-powered SaaS, clean UX, and production-ready product foundations.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Un solo JSON-LD, y más pro: WebSite + Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Elias Gonzalez",
        url: siteUrl,
      },
      {
        "@type": "Person",
        name: "Elias Gonzalez",
        url: siteUrl,
        email: "mailto:rmngzps@gmail.com",
        sameAs: [
          "https://github.com/rgonzalez7",
          "https://www.linkedin.com/in/elias-gonzalez-45a3513b1",
        ],
        jobTitle: "Full-Stack Engineer",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300`}
      >
       <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}