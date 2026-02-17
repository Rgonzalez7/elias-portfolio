import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.eliasgonzalez.io";
  const now = new Date();

  const routes = [
    "",
    "/ui-kit",
    "/projects/ai-feedback",
    "/projects/auth-starter",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}