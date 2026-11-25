import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { HOME_DESCRIPTION, HOME_TITLE, SHARE_IMAGE, SITE_NAME, SITE_URL } from "./meta";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1f10",
  viewportFit: "cover",
};

const ROOT_TOKENS = `:root {
  --p-bg: #0f1f10; --p-surface: #162a17; --p-ink: #ffffff; --p-muted: #9aa39a;
  --p-accent: #c6f19d; --p-accent-ink: #0f1f10; --p-action: #c6f19d; --p-action-ink: #0f1f10;
  --p-inv-bg: #ffffff; --p-inv-surface: #ecedec; --p-inv-ink: #0f1f10; --p-inv-muted: #606c60;
  --p-inv-accent: #0f1f10; --p-inv-accent-ink: #ffffff; --p-inv-action: #0f1f10; --p-inv-action-ink: #ffffff;
  --font-display: "Schibsted Grotesk", system-ui, sans-serif;
  --font-text: "Schibsted Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.042em;
  --ly-scale: 0.98;
}`;

const M_ENTER_GUARD =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)";
const MO_GUARD =
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-type="software"
      data-radius="sharp"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="kit"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap"
        />
        <link rel="stylesheet" precedence="kit" href="/assets/system.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/cards.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/motion/motion.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/layout/layout.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/icons/icon.css" />
        <style precedence="kit" href="root-tokens" dangerouslySetInnerHTML={{ __html: ROOT_TOKENS }} />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/base.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/window/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/doc/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/notify/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/toggles/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/checklist/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/search/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/ui/terminal-run/fragment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/moments/cursor-spotlight/moment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/moments/iris-opens/moment.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/layout/demo.css" />
        <link rel="stylesheet" precedence="kit" href="/assets/page.css" />
        {/* guards before the first paint: the hero's entrance, the grounds' tokens, the moments' guard */}
        <script dangerouslySetInnerHTML={{ __html: M_ENTER_GUARD }} />
        <script src="/assets/backgrounds/backgrounds.js" />
        <script dangerouslySetInnerHTML={{ __html: MO_GUARD }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/cursor-spotlight/moment.js" />
        <link rel="modulepreload" href="/assets/moments/iris-opens/moment.js" />
      </head>
      <body>
        {children}
        {/* kit scripts are ES modules; afterInteractive injects them once React has hydrated, so their
            DOM changes never race hydration */}
        <Script src="/assets/system.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/layout/layout.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
