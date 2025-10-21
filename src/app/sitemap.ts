import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.scrapworld.example";
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/stock`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  return urls;
}



