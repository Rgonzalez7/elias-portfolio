import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.eliasgonzalez.io"),
  title: "Elias Gonzalez — Full Stack Engineer",
  description: "Building AI-powered SaaS products with clean UX and real-world workflows.",
  openGraph: {
    title: "Elias Gonzalez — Full Stack Engineer",
    description: "Building AI-powered SaaS products with clean UX and real-world workflows.",
    url: "https://www.eliasgonzalez.io",
    siteName: "Elias Gonzalez",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Gonzalez — Full Stack Engineer",
    description: "Building AI-powered SaaS products with clean UX and real-world workflows.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var t = localStorage.getItem("theme");
                if (t !== "dark" && t !== "light") t = "light"; // default SIEMPRE light
                document.documentElement.classList.toggle("dark", t === "dark");
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}