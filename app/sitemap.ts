import type { MetadataRoute } from "next";
import { serviceDetails } from "@/content/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kelcis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/experience",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = serviceDetails.map(({ slug }) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
