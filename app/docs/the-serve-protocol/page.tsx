/*
  /docs/the-serve-protocol — the third guide (Phase B). Dealt hero: collage (the shared DocHero):
  the serve log in the window, the result card stepping through its lines. Section one carries the
  search fragment — the ask, one query with the pinned copy first; section two is the protocol's
  steps and its log as rows.
*/

import type { Metadata } from "next";
import { pageMeta } from "../../meta";
import type { CSSProperties } from "react";
import { DocHero } from "../../doc-hero";
import { SiteFooter, SiteNav } from "../../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: the serve protocol",
  description: "An agent asks, Skillfell answers: 2 requests, one pinned copy and one line in the log. No draft is ever served without a flag.",
  path: "/docs/the-serve-protocol",
});

export default function Page() {
  return (
    <>
      <SiteNav current="docs" />
      <main id="top">
        <DocHero
          id="hero-h"
          h1="The serve protocol"
          lead={<>An agent asks, Skillfell answers: 2 requests, one pinned copy and one line in the log.</>}
          primary={{ href: "#ask", label: "See the ask" }}
          secondary={{ href: "/docs/skills-across-projects", label: "Skills across projects" }}
          proof="No draft is ever served without a flag."
          artLabel="The serve log showing opencode taking code-review v3 for acme-web"
          bar={<><b>skillfell</b> · serve log</>}
          barMeta="today"
          window={
            <>
              <nav className="d-side">
                <span><i></i>Library</span>
                <span><i></i>Pinned</span>
                <span className="is-on"><i></i>Serve log</span>
                <span className="d-side__label">Projects</span>
                <span><i></i>acme-web</span>
              </nav>
              <div className="d-main">
                <div className="d-main__head"><h4>Serve log</h4><span className="d-btn">9 today</span></div>
                <div className="d-rows">
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">OC</span><div><b>code-review v3</b><small>opencode · acme-web</small></div><span className="sf-pinrow__v">09:12</span><span className="d-chip">Served</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">OC</span><div><b>taste-skill v2</b><small>opencode · landing</small></div><span className="sf-pinrow__v">09:04</span><span className="d-chip">Served</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">OC</span><div><b>api-migrations v1</b><small>opencode · acme-web</small></div><span className="sf-pinrow__v">08:57</span><span className="d-chip d-chip--out">Flagged</span></div>
                </div>
                <p className="sf-plans__note">The flagged line is a draft served with a flag — the pin was off on purpose.</p>
              </div>
            </>
          }
          note={
            <>
              <div className="d-card__row"><h5>Serve · code-review v3</h5><span className="d-chip" data-step data-step-at="4">Served</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>2 requests</b>: ask, then serve</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>No draft</b> without a flag</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span>Logged, kept <b>90 days</b></span></div>
            </>
          }
        />

        <section className="section" id="ask" aria-labelledby="ask-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="ask-h">The ask — the protocol's first request.</h2>
              <p className="t-lead">The agent names a skill; Skillfell ranks the pinned copy ahead of every draft and serves it whole, version and all.</p>
              <p className="muted">If the pinned copy is behind the library, the answer carries the note — the agent never meets a silent change.</p>
              <ul className="rows">
                <li><span className="rows__name">The skill's name<small>The library ranks the pinned copies ahead of every draft</small></span><span className="rows__value">Rank</span></li>
                <li><span className="rows__name">A version, if the agent asks<small>Any pinned version may be asked for by name</small></span><span className="rows__value">v?</span></li>
                <li><span className="rows__name">The note, when the pin is behind<small>The answer carries it; nothing serves silently out of date</small></span><span className="rows__value">Note</span></li>
              </ul>
            </div>
            <div className="span-6 start-7">
              <div className="panel panel--inset" role="img" aria-label="The ask: a search for code review with code-review v3 pinned selected first">
                <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "32px" } as CSSProperties}>
                  <div className="ui ui-panel ui-search" data-ui="search">
                    <div className="ui-search__field">
                      <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
                      <span className="ui-search__q"><span data-search-q>code review</span><i className="ui-search__caret"></i></span>
                      <kbd className="ui-search__kbd">Ctrl K</kbd>
                    </div>
                    <div className="ui-search__group">Skills</div>
                    <ul className="ui-search__list" data-search-list>
                      <li className="ui-search__row is-sel"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t"><b>code-review</b> v3, pinned</span><span className="ui-search__m">v3</span></li>
                      <li className="ui-search__row"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t"><b>review</b>-checklist</span><span className="ui-search__m">v1</span></li>
                      <li className="ui-search__row"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t">commit-style, the <b>review</b> format</span><span className="ui-search__m">v2</span></li>
                    </ul>
                    <div className="ui-search__foot"><span><kbd>↑</kbd><kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to serve</span></div>
                  </div>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="log" aria-labelledby="log-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="log-h">The whole protocol, on one page.</h2>
              <p className="t-lead">Two requests and a receipt: nothing about a serve is hidden from the person who owns the pin.</p>
              <ul className="rows">
                <li><span className="rows__name">Request one — the ask<small>The agent names the skill; the pinned copy ranks first</small></span><span className="rows__value">Ask</span></li>
                <li><span className="rows__name">Request two — the serve<small>The copy goes to the agent's session, whole, with its version</small></span><span className="rows__value">Serve</span></li>
                <li><span className="rows__name">The receipt — the log line<small>Agent, skill, version, project, time — kept 90 days, then gone</small></span><span className="rows__value">Log</span></li>
                <li><span className="rows__name">The one flag<small>A draft serves only with a flag, on purpose, and the log says so</small></span><span className="rows__value">Flag</span></li>
                <li><span className="rows__name">The project's view<small>The serve log is readable in the project that owns the pin, whole</small></span><span className="rows__value">View</span></li>
              </ul>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The serve log: three serves today, two pinned copies and one draft served with a flag">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · serve log</span>
                  <span className="sp"></span>
                  <span>9 today</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">OC</span><div><b>code-review v3</b><small>opencode · acme-web</small></div><span className="sf-pinrow__v">09:12</span><span className="d-chip">Served</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">OC</span><div><b>taste-skill v2</b><small>opencode · landing</small></div><span className="sf-pinrow__v">09:04</span><span className="d-chip">Served</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">OC</span><div><b>api-migrations v1</b><small>opencode · acme-web</small></div><span className="sf-pinrow__v">08:57</span><span className="d-chip d-chip--out">Flagged</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">DS</span><div><b>docs-site v2</b><small>opencode · docs-site</small></div><span className="sf-pinrow__v">08:41</span><span className="d-chip">Served</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">CS</span><div><b>commit-style v2</b><small>opencode · acme-web</small></div><span className="sf-pinrow__v">08:16</span><span className="d-chip">Served</span></div>
                  </div>
                  <p className="sf-plans__note">The flagged line is a draft served with a flag — the pin was off on purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
