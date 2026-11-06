import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://eliasgonzalez.io/", lastModified: new Date("2026-11-06"), changeFrequency: "monthly", priority: 1 },
    { url: "https://eliasgonzalez.io/corta", lastModified: new Date("2026-11-06"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
