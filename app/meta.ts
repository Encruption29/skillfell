/*
  Shared metadata (Phase E): one place for the site's origin, the share image and the per-route
  head. Every page owns its title, description and canonical path; openGraph and twitter are
  shallow-merged by Next, so a page that defines openGraph replaces the layout's whole object —
  hence this helper writes all of it.
*/

import type { Metadata } from "next";

export const SITE_URL = "https://skillfell.vercel.app";
export const SITE_NAME = "Skillfell";

export const HOME_TITLE = "Skillfell: skill manager for AI coding agents";
export const HOME_DESCRIPTION =
  "Skillfell keeps every skill your coding agents load in one pinned library — one file per skill, versioned, shared across projects. Free while the beta runs.";

export const SHARE_IMAGE = {
  url: "/share.jpg",
  width: 1200,
  height: 630,
  alt: "The Skillfell landing: skill manager for AI coding agents, with the pinned library window.",
};

export function pageMeta({ title, description, path }: {
  title: string;
  description: string;
  /** The canonical path; a 404 has none (it is not a page search engines should keep). */
  path?: string;
}): Metadata {
  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title,
      description,
      ...(path ? { url: path } : {}),
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
