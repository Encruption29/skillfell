/*
  /changelog — the release feed (Phase B). Dealt hero: centred, the landing hero's own family: the
  words, then the release window rising out of the lit frame (fluted-glass + cursor-spotlight, the
  deal's hero effect). The window is a single-column feed — three shipped changes, one line each.
  The two release sections carry the fuller lists; the dates are assumed until the beta says them.
*/

import type { Metadata } from "next";
import { pageMeta } from "../meta";
import type { CSSProperties } from "react";
import { MAILTO, arrow, SiteFooter, SiteNav } from "../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: changelog",
  description: "Every change to the Skillfell library, one line each: pins that never overwrite, drift checks on every push, search across repos. Open beta, v0.9.",
  path: "/changelog",
});

function Hero() {
  return (
    <section className="hero hero--centred" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text">
        <div className="hero__c">
          <a className="pill" href="#v0-9"><span data-assumed>Open beta · v0.9</span><span className="muted">What shipped</span></a>
          <h1 id="hero-h">The changelog</h1>
          <p className="hero__lead">Every change to the library, one line each — the pinned copy never changes under an agent, so a version note is all you need.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#v0-9">Read v0.9{arrow}</a>
            <a className="btn btn--secondary" href={MAILTO}>Suggest a change</a>
          </div>
        </div>
        <div
          className="hero__window"
          data-fx="fluted-glass"
          data-fx-seed="5"
          data-fx-palette='{"bg":"#e9efe0","surface":"#dbe5cd","ink":"#16240f","accent":"#57813f"}'
          role="img"
          aria-label="The release feed: the three changes shipped in v0.9, each one line"
          data-moment="cursor-spotlight"
          data-moment-opts={'{"rest": [0.74, 0.26], "radius": 460}'}
        >
          <div className="ly-piece d-win d-win--dark" aria-hidden="true">
            <div className="d-win__bar">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>skillfell</b> · releases</span>
              <span className="sp"></span>
              <span data-assumed>v0.9, today</span>
              <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
            </div>
            <div className="d-win__body">
              <div className="sf-rel">
                <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>Pins never overwrite</p><small>Edits make v4 — the pinned copy keeps serving until a person moves the pin</small></div><time data-assumed>today</time></div>
                <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>Drift checks on every push</p><small>A pin behind the library asks to move; nothing moves itself</small></div><time data-assumed>today</time></div>
                <div className="sf-rel__row"><span className="sf-rel__tag">Changed</span><div><p>Search across repos, Pro and Team</p><small>The pinned copy ranks first, drafts after</small></div><time data-assumed>4 Nov</time></div>
                <div className="sf-rel__row"><span className="sf-rel__tag">Fixed</span><div><p>The drift ask, once</p><small>Asks once, not on every serve</small></div><time data-assumed>28 Oct</time></div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

function V09() {
  return (
    <section className="section" id="v0-9" aria-labelledby="v09-h">
      <div className="wrap grid">
        <div className="span-5">
          <h2 id="v09-h">v0.9 — the open beta.</h2>
          <p className="t-lead" data-assumed>Shipped 12 November 2026.</p>
          <p className="muted">The beta is free while it runs — the write-to-us line in the footer reaches us.</p>
          <ul className="rows">
            <li><span className="rows__name">Pins never overwrite<small>Edits make v4; the pinned copy keeps serving until a person moves the pin</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">Drift checks on every push<small>A pin behind the library asks to move; nothing moves itself</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">Search across repos<small>Pro and Team; the pinned copy ranks first, drafts after</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">The serve log<small>Which agent took which version, when — kept 90 days</small></span><span className="rows__value">New</span></li>
          </ul>
        </div>
        <article className="card card--row span-6 start-7">
          <h3>The feed, as the library draws it.</h3>
          <p>One line per change — the same lines this page lists, in the window the release ships in.</p>
          <div className="panel panel--flush">
            <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "420px", "--ax": "32px", "--ay": "40px" } as CSSProperties}>
              <div className="d-win d-win--dark sf-mini" data-ui="" role="img" aria-label="The release feed: two changes shipped in v0.9, one line each">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · releases</span>
                  <span className="sp"></span>
                  <span data-assumed>v0.9, today</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="sf-rel">
                    <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>Pins never overwrite</p><small>Edits make v4; the pinned copy keeps serving</small></div></div>
                    <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>Drift checks on every push</p><small>Asks to move; nothing moves itself</small></div></div>
                  </div>
                </div>
              </div>
            </div></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function V08() {
  return (
    <section className="section" id="v0-8" aria-labelledby="v08-h">
      <div className="wrap grid">
        <div className="span-5">
          <h2 id="v08-h">v0.8 — pins and projects.</h2>
          <p className="t-lead" data-assumed>Shipped 28 October 2026.</p>
          <p className="muted">The release that made the library shareable: one shelf, many repos.</p>
          <ul className="rows">
            <li><span className="rows__name">Projects<small>Pin per repo; the library stays one shelf for every project</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">The serve log, first version<small>The receipt for every serve, one line each</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">The opencode adapter<small>The first agent Skillfell serves; more adapters come next</small></span><span className="rows__value">New</span></li>
            <li><span className="rows__name">Versions, read-only<small>Every edit makes a new version; the old ones stay readable</small></span><span className="rows__value">Changed</span></li>
          </ul>
        </div>
        <article className="card card--row span-6 start-7">
          <h3>What v0.8 shipped, one line each.</h3>
          <p>The window the release ran in: projects following one shelf, and the first receipts.</p>
          <div className="panel panel--flush">
            <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "420px", "--ax": "32px", "--ay": "40px" } as CSSProperties}>
              <div className="d-win d-win--dark sf-mini" data-ui="" role="img" aria-label="The release feed: projects and the serve log, the two changes v0.8 shipped">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · releases</span>
                  <span className="sp"></span>
                  <span data-assumed>v0.8, 28 Oct</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="sf-rel">
                    <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>Projects</p><small>Pin per repo; the library stays one shelf</small></div></div>
                    <div className="sf-rel__row"><span className="sf-rel__tag">New</span><div><p>The serve log</p><small>The receipt for every serve, one line each</small></div></div>
                  </div>
                </div>
              </div>
            </div></div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <V09 />
        <V08 />
      </main>
      <SiteFooter />
    </>
  );
}
