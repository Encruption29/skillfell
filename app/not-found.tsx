/*
  404 — the not-found page. One hero screen in the kit's hero-centred box (the exact first screen,
  padded under the nav): the words first, then the serve window fills what is left — the same
  fluted-glass window the landing leads with — and carries the three landing pins as real links,
  so the way back is part of the fiction instead of a list under it. The chrome is the page's own
  (the layout stays bare) with the cross-page links (/#product) the checker sees on the landing.
*/

import type { Metadata } from "next";
import { MAILTO, arrow, SiteFooter, SiteNav } from "./site-chrome";

export const metadata: Metadata = {
  title: "Skillfell: page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <section className="hero hero--centred" id="nf" data-enter aria-labelledby="nf-h">
          <div className="wrap"><div className="hero-text">
            <div className="hero__c">
              <p className="t-label">Error 404</p>
              <h1 id="nf-h">Page not found</h1>
              <p className="hero__lead">The address you asked for is not pinned in this library. The page may have moved, or it was never here.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="/">Return to the library{arrow}</a>
                <a className="link" href={MAILTO}>Write to hello@skillfell.example</a>
              </div>
            </div>
            <div
              className="hero__window"
              data-fx="fluted-glass"
              data-fx-seed="3"
              data-fx-palette='{"bg":"#e9efe0","surface":"#dbe5cd","ink":"#16240f","accent":"#57813f"}'
              data-moment="cursor-spotlight"
              data-moment-opts={'{"rest": [0.74, 0.26], "radius": 460}'}
            >
              <div className="ly-piece d-win d-win--dark">
                <div className="d-win__bar">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · serve</span>
                  <span className="sp"></span>
                  <span>3 pins</span>
                </div>
                <div className="d-win__body">
                  <div className="convo">
                    <div className="d-chat">
                      <div className="d-msg d-msg--me">Serve /this-page<small>now</small></div>
                      <div className="d-tool">No pin for /this-page in the library</div>
                      <div className="d-msg d-msg--bot">Not pinned. The nearest pages it does serve:<small>on the landing</small></div>
                      <ul className="nf__pins">
                        <li><a href="/#product"><span>The library</span><span className="nf__pins__go">{arrow}<small className="mono">/#product</small></span></a></li>
                        <li><a href="/#pricing"><span>The plans</span><span className="nf__pins__go">{arrow}<small className="mono">/#pricing</small></span></a></li>
                        <li><a href="/#faq"><span>The answers</span><span className="nf__pins__go">{arrow}<small className="mono">/#faq</small></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
