/*
  /terms — the beta's terms, plain (Phase B). Dealt hero: statement over the bg-deep ground, the
  four facts at the foot. Three sections: what the service is, what stays yours, and how the terms
  change — each with the page's own table of contents in the aside. What shipped is the changelog's
  job, so the sections link there instead of repeating it.
*/

import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { MAILTO, arrow, SiteFooter, SiteNav } from "../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: terms",
  description: "The beta terms, plain: what the service is, what stays yours, and how the terms change. Nothing is billed while the beta runs.",
  path: "/terms",
});

const ASIDE = (
  <>
    <p className="t-label">On this page</p>
    <a href="#service">The service</a>
    <a href="#content">What stays yours</a>
    <a href="#changes">How the terms change</a>
  </>
);

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <section className="hero hero--statement bg-deep" data-enter aria-labelledby="hero-h">
          <div className="wrap"><div className="hero-text hero__in">
            <div>
              <h1 id="hero-h">Terms of use</h1>
              <p className="hero__lead">The beta's terms, plain: what the service is, what stays yours and how the terms change. What shipped is the changelog's job.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#service">Start with the service</a>
                <a className="btn btn--secondary" href="/changelog">Read the changelog</a>
              </div>
            </div>
            <dl className="hero__facts">
              <div><dt>The service</dt><dd>A pinned skill library</dd></div>
              <div><dt>The beta</dt><dd>Open, v0.9</dd></div>
              <div><dt>Billing</dt><dd>Nothing until the beta ends</dd></div>
              <div><dt>Your files</dt><dd>Yours, in your repos</dd></div>
            </dl>
          </div></div>
        </section>

        <section className="section" id="service" aria-labelledby="service-h">
          <div className="wrap grid">
            <div className="span-7">
              <h2 id="service-h">The service, in terms.</h2>
              <p>Skillfell is a pinned library for the skill files your coding agents load: one file per skill, one version per pin, and a serve that answers an agent with the pinned copy. The library is the product; your repos are not part of it.</p>
              <p>The beta is open and free — every plan, no card. <span data-assumed>When the beta ends, the plans bill at their posted prices and the free plan stays free.</span> A pin made during the beta moves with you; nothing is re-pinned.</p>
              <p>The serve log is the service's receipt: which agent took which version, when, in which project. It is kept for 90 days and then deleted — the terms of that are the privacy page's, and it is part of these terms.</p>
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The service's four parts: the library shelf, the pin that holds a version, the serve that answers an agent, and the log the serve writes">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · the service</span>
                  <span className="sp"></span>
                  <span>4 parts</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">LI</span><div><b>The library</b><small>One pinned shelf for the skill files agents load</small></div><span className="sf-pinrow__v">1</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">PN</span><div><b>The pin</b><small>One version per pin; edits make a new version</small></div><span className="sf-pinrow__v">v3</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">SV</span><div><b>The serve</b><small>The pinned copy, whole, and one line in the log</small></div><span className="sf-pinrow__v">2 req</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">LG</span><div><b>The log</b><small>Which agent took which version, when, in which project</small></div><span className="sf-pinrow__v">90d</span></div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="sf-aside span-5 start-8">{ASIDE}</aside>
          </div>
        </section>

        <section className="section" id="content" aria-labelledby="content-h">
          <div className="wrap grid">
            <div className="span-7">
              <h2 id="content-h">What stays yours at Skillfell.</h2>
              <p>The skill files you write stay yours — Skillfell stores what you pin and serves what you pinned, and claims nothing over the words. Your repos, your agents' outputs and your logs stay yours too; the library reads the pin, not the project.</p>
              <p>Skills shared into the team library stay their authors'. A skill another developer pinned into the community shelf carries its author's name, and the rules for serving it are the same as yours: pinned versions, logged serves, no silent changes.</p>
              <p>The library's own code is the one thing on these terms alone. You may read what the serve returns, export every pin as files, and leave with your shelf — the door out is the same file format the door in.</p>
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="What stays yours: the skill files, the agents' outputs in the repos, the serve log as a receipt that leaves after 90 days, and the door out that exports every pin">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · yours</span>
                  <span className="sp"></span>
                  <span>the door out</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">SF</span><div><b>Your skill files</b><small>Yours, in your repos — the library reads the pin, not the project</small></div><span className="sf-pinrow__v">yours</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">AO</span><div><b>Your agents' outputs</b><small>Their findings and patches stay in your repos, not here</small></div><span className="sf-pinrow__v">yours</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">LG</span><div><b>Your logs</b><small>The serve log is the receipt; it leaves after 90 days</small></div><span className="sf-pinrow__v">90d</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">EX</span><div><b>The door out</b><small>Export every pin as files — the format the door in</small></div><span className="sf-pinrow__v">exit</span></div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="sf-aside span-5 start-8">{ASIDE}</aside>
          </div>
        </section>

        <section className="section" id="changes" aria-labelledby="changes-h">
          <div className="wrap grid">
            <div className="span-7">
              <h2 id="changes-h">How the terms change.</h2>
              <p>The changelog is the record: every change to the service ships with a line there, and every change to these terms posts on this page the day it takes. Nothing in the pinned copy changes under an agent, and nothing in these terms changes behind your back.</p>
              <p><span data-assumed>When the beta ends we give 30 days' notice on this page before any price applies</span> — the beta itself is not billed, so the notice is the whole change. Questions go to the same address as everything else.</p>
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The record: a line in the changelog for every change to the service, 30 days' notice here before any price applies, and the pinned copy never changing under an agent">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · the record</span>
                  <span className="sp"></span>
                  <span>30 days</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">CL</span><div><b>The changelog</b><small>Every change to the service ships with a line there</small></div><span className="sf-pinrow__v">feed</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">TR</span><div><b>These terms</b><small>Every change posts here the day it takes</small></div><span className="sf-pinrow__v">30d</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">PN</span><div><b>The pinned copy</b><small>Nothing in it changes under an agent — versions change, pins move</small></div><span className="sf-pinrow__v">v3</span></div>
                  </div>
                </div>
              </div>
              <div className="btn-row">
                <a className="btn btn--secondary" href="/changelog">What shipped{arrow}</a>
                <a className="link" href={MAILTO}>Write to us</a>
              </div>
            </div>
            <aside className="sf-aside span-5 start-8">{ASIDE}</aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
