import type { MetadataRoute } from "next";

const siteUrl = "https://renvpn.com";

const staticRoutes = [
  "",
  "/privacy",
  "/demo",
  "/blog/chto-takoe-vpn",
  "/blog/chto-takoe-dns",
  "/blog/razdelnoe-tunnelfrovanie",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
