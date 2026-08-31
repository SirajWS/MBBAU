import type { MetadataRoute } from "next";
import { siteWebsiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteWebsiteUrl}/sitemap.xml`,
  };
}
