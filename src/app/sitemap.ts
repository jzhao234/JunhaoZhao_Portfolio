import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://junhaozhao.com";
  const now = new Date();

  const routes = [
    "",
    "/projects",
    "/experiences",
    // "/contact",
    // "/education",
    // "/about",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}