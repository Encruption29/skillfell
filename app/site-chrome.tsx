/*
  Site chrome — the nav and the footer every Skillfell page shares (Phase A of the multi-page
  plan). Pages pass home on the landing only: there the anchor links stay in-page (the sections
  live on that page); everywhere else they point at the landing's sections across pages (/#product),
  so no link promises a section the current page does not hold. Phase B: the nav's Pricing item
  and the footer's Plans column point at the real /pricing page, the footer gains a Resources
  column (docs, changelog, privacy, terms), and pages can mark their nav item aria-current.
   Phase C: Docs joins the nav, the footer's Resources column carries Docs, Blog, Changelog and
   About, Contact points at /contact, and the legal pages move to the legal row beside the copyright.
*/

export const MAILTO = "mailto:hello@skillfell.example";

type ChromeProps = { home?: boolean; current?: "pricing" | "docs" };

export const arrow = (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const navChevron = (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SiteNav({ home = false, current }: ChromeProps) {
  const a = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href={home ? "#top" : "/"}><span className="mark mark--initial" aria-hidden="true">S</span>Skillfell</a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a className="nav__link" href={a("product")}>Product {navChevron}</a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Library</p>
                  <a href={a("product")}>Skills<span>One window, every skill</span></a>
                  <a href={a("product")}>Versions<span>Pinned, never overwritten</span></a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Terminal</p>
                  <a href={a("cli")}>Pin<span>One command, every project</span></a>
                  <a href={a("cli")}>Serve<span>The pinned copy, on ask</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item"><a className="nav__link" href={a("features")}>Features</a></div>
          <div className="nav__item"><a className="nav__link" href="/docs" aria-current={current === "docs" ? "page" : undefined}>Docs</a></div>
          <div className="nav__item"><a className="nav__link" href="/pricing" aria-current={current === "pricing" ? "page" : undefined}>Pricing</a></div>
          <div className="nav__item"><a className="nav__link" href={a("faq")}>FAQ</a></div>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={MAILTO}>Join early access</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}

export function SiteFooter({ home = false }: ChromeProps) {
  const a = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <footer className="footer closing g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Join early access</h2>
              <p className="t-lead" data-assumed>Free while the beta runs. We reply within a day.</p>
            </div>
            <a className="btn btn--primary" href={MAILTO}>Join early access{arrow}</a>
          </div>
          <p className="close__word" aria-hidden="true">Skillfell</p>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-3 stack-4">
              <a className="nav__logo" href={home ? "#top" : "/"}>Skillfell</a>
              <p className="footer__lede">One library for the skills your coding agents share.</p>
            </div>
            <div className="span-3 footer__col">
              <h3>Product</h3>
              <ul><li><a href={a("product")}>Library</a></li><li><a href={a("features")}>Features</a></li><li><a href={a("cli")}>Terminal</a></li></ul>
            </div>
            <div className="span-3 footer__col">
              <h3>Plans</h3>
              <ul><li><a href="/pricing">Pricing</a></li><li><a href={a("faq")}>Questions</a></li><li><a href="/contact">Contact</a></li></ul>
            </div>
            <div className="span-3 footer__col">
              <h3>Resources</h3>
              <ul><li><a href="/docs">Docs</a></li><li><a href="/blog">Blog</a></li><li><a href="/changelog">Changelog</a></li><li><a href="/about">About</a></li></ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 Skillfell</span>
            <span className="footer__legal-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
