/*
  robots.txt (Phase E): the whole site is public; the sitemap carries the 17 routes. No crawl
  delay, no disallowed path — the only private things are the .example address and the beta.
*/

import type { MetadataRoute } from "next";
import { SITE_URL } from "./meta";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
