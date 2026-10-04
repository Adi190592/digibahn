import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CAPABILITIES, INSIGHTS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/capabilities",
    "/ai-lab",
    "/work",
    "/industries",
    "/insights",
    "/about",
    "/contact",
    "/legal/privacy",
  ].map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const capabilityRoutes = CAPABILITIES.map((c) => ({
    url: `${SITE.domain}/capabilities/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = INSIGHTS.map((i) => ({
    url: `${SITE.domain}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...capabilityRoutes, ...insightRoutes];
}
