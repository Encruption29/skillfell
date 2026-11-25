/*
  sitemap.xml (Phase E): the 17 public routes, one entry each. The date is the last content pass
  (Phase D); legal pages sit at the bottom, the shelf and the guides above the notes.
*/

import type { MetadataRoute } from "next";
import { SITE_URL } from "./meta";

export const dynamic = "force-static";

const ROUTES: Array<{ path: string; priority: number; changeFrequency: "monthly" | "yearly" }> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/skills", priority: 0.9, changeFrequency: "monthly" },
  { path: "/docs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/docs/pin-a-skill", priority: 0.7, changeFrequency: "yearly" },
  { path: "/docs/the-skill-file", priority: 0.7, changeFrequency: "yearly" },
  { path: "/docs/the-serve-protocol", priority: 0.7, changeFrequency: "yearly" },
  { path: "/docs/skills-across-projects", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog/pinning-a-skill-across-projects", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/what-the-serve-protocol-sends", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/reviewing-an-agents-diff", priority: 0.6, changeFrequency: "yearly" },
  { path: "/changelog", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-26");
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
