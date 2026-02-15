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
    default: "Elias Gonzalez",
    template: "%s — Elias Gonzalez",
  },
  description:
    "Full-stack engineer building AI-powered SaaS products with clean UX and real-world workflows.",
  alternates: {
    canonical: "/",
  },
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
    title: "Elias Gonzalez",
    description:
      "Full-stack engineer building AI-powered SaaS products with clean UX and real-world workflows.",
    siteName: "Elias Gonzalez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Gonzalez",
    description:
      "Full-stack engineer building AI-powered SaaS products with clean UX and real-world workflows.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elias Gonzalez",
    url: siteUrl,
    email: "mailto:rmngzps@gmail.com",
    sameAs: [
      "https://github.com/rgonzalez7",
      "https://www.linkedin.com/in/elias-gonzalez-45a3513b1",
    ],
    jobTitle: "Full-Stack Engineer",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300`}
      >
        <Script
          id="jsonld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}