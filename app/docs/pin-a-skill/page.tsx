/*
  /docs/pin-a-skill — the first guide (Phase B). Dealt hero: collage (the shared DocHero): the
  library window on the lit ground, the result card stepping through its three lines. Section one
  is what a pin does (rows); section two carries the terminal-run fragment — the pin command, the
  same one the landing's cli section runs, explained line by line.
*/

import type { Metadata } from "next";
import { pageMeta } from "../../meta";
import type { CSSProperties } from "react";
import { DocHero } from "../../doc-hero";
import { SiteFooter, SiteNav } from "../../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: pin a skill",
  description: "Pinning puts a skill version on the library's pinned shelf: every project that follows serves that exact copy until someone moves the pin.",
  path: "/docs/pin-a-skill",
});

export default function Page() {
  return (
    <>
      <SiteNav current="docs" />
      <main id="top">
        <DocHero
          id="hero-h"
          h1="Pin a skill"
          lead={<>Pinning puts code-review v3 on the library's pinned shelf. Every project that follows the pin serves that exact copy until someone moves it.</>}
          primary={{ href: "#pin", label: "See the pin command" }}
          secondary={{ href: "/docs/the-skill-file", label: "Read the skill file" }}
          proof="One command moves every project to the new version."
          artLabel="The Skillfell library window with code-review pinned at v3 and the projects that follow it"
          bar={<><b>skillfell</b> · acme-web</>}
          barMeta="5 skills pinned"
          window={
            <>
              <nav className="d-side">
                <span><i></i>Library</span>
                <span className="is-on"><i></i>Pinned</span>
                <span><i></i>Serve log</span>
                <span className="d-side__label">Projects</span>
                <span><i></i>acme-web</span>
                <span><i></i>platform</span>
              </nav>
              <div className="d-main">
                <div className="d-main__head"><h4>Pinned</h4><span className="d-btn">Pin a skill</span></div>
                <div className="d-tabs"><span className="is-on">All 24</span><span>Pinned 19</span><span>Drafts 3</span></div>
                <div className="d-rows">
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">CR</span><div><b>code-review</b><small>Reviews commits against the pinned rules</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">TS</span><div><b>taste-skill</b><small>Front-end taste checks before a build</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Pinned</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">AM</span><div><b>api-migrations</b><small>Safe schema change steps</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--low">Draft</span></div>
                </div>
              </div>
            </>
          }
          note={
            <>
              <div className="d-card__row"><h5>Pin · code-review</h5><span className="d-chip" data-step data-step-at="4">Pinned</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>v3</b> pinned by acme-web</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>4 projects</b> follow the pin</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span>First serve logged <b>09:12</b></span></div>
            </>
          }
        />

        <section className="section" id="how" aria-labelledby="how-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="how-h">What a pin does.</h2>
              <p className="t-lead">A pin is a promise about a version: the copy an agent gets is the copy someone reviewed, until a person moves the pin.</p>
              <ul className="rows">
                <li><span className="rows__name">The pin holds the version<small>Edits become v4; v3 is never rewritten under an agent</small></span><span className="rows__value">v3</span></li>
                <li><span className="rows__name">Projects follow, not files<small>No copies to sync repo by repo — one shelf, many readers</small></span><span className="rows__value">4</span></li>
                <li><span className="rows__name">Every serve is logged<small>Which agent took which version, when, in which project</small></span><span className="rows__value">Log</span></li>
                <li><span className="rows__name">A pin behind the library asks<small>The drift check offers the move on the next push; nothing moves itself</small></span><span className="rows__value">Push</span></li>
              </ul>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The pinned shelf: code-review at v3 with the projects that follow it">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · pinned</span>
                  <span className="sp"></span>
                  <span>5 skills</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">CR</span><div><b>code-review</b><small>Reviews commits against the pinned rules</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">TS</span><div><b>taste-skill</b><small>Front-end taste checks before a build</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Pinned</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">AM</span><div><b>api-migrations</b><small>Safe schema change steps</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--low">Draft</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pin" aria-labelledby="pin-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="pin-h">Review, then pin.</h2>
              <p className="t-lead">One command, from any repo that follows the library: fetch the version, verify it against the file, move the pin.</p>
              <p className="muted sf-cap">4 projects follow this pin — the command moves them together, in one step, and logs the serve that follows.</p>
              <a className="link" href="/docs/the-skill-file">What the file holds</a>
            </div>
            <div className="frame frame--split span-6 start-7">
              <div className="stage stage--fade-br">
                <div className="at-rise fit" style={{ "--fit-max": "620px", "--ax": "32px", "--ay": "40px" } as CSSProperties}>
                  <div className="ui ui-panel ui-term" data-ui="terminal-run">
                    <div className="ui-term__head">
                      <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                      <span className="ui-term__title">acme-web</span>
                      <span className="ui-meta">zsh</span>
                      <span className="ui-spacer"></span>
                      <span className="ui-chip ui-chip--plain ui-term__branch"><svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="3.5" r="1.5" /><circle cx="5" cy="12.5" r="1.5" /><circle cx="11" cy="5.5" r="1.5" /><path d="M5 5v6M11 7c0 2.6-6 1.8-6 4" /></svg>main</span>
                    </div>
                    <div className="ui-term__screen" data-term-screen>
                      <div className="ui-term__track" data-term-track>
                        <div className="ui-term__ln ui-term__cmd"><span className="ui-term__cwd">~/<span className="ui-term__up">acme-web</span></span><span className="ui-term__sig">$</span><span className="ui-term__typed" data-term-cmd>skillfell pin code-review v3</span></div>
                        <div className="ui-term__ln ui-term__meter" data-term-out data-term-meter><span className="ui-term__bar" style={{ "--p": 1 } as CSSProperties}><i></i></span><span className="ui-term__count" data-term-count>3 of 3 steps</span></div>
                        <div className="ui-term__ln ui-term__log" data-term-out data-term-step><svg className="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg><span className="ui-term__path">skills/code-review</span><span className="ui-term__n">fetched</span><span className="ui-term__t">0.4s</span></div>
                        <div className="ui-term__ln ui-term__log" data-term-out data-term-step><svg className="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg><span className="ui-term__path">skills/code-review</span><span className="ui-term__n">verified</span><span className="ui-term__t">0.2s</span></div>
                        <div className="ui-term__ln ui-term__log" data-term-out data-term-step><svg className="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg><span className="ui-term__path">projects</span><span className="ui-term__n">4 updated</span><span className="ui-term__t">0.1s</span></div>
                        <div className="ui-term__ln ui-term__gap" data-term-out aria-hidden="true"></div>
                        <div className="ui-term__ln ui-term__sum" data-term-out><span className="ui-term__key">Version</span><span className="ui-term__val">v3 pinned</span><span className="ui-term__dim">(was v2)</span></div>
                        <div className="ui-term__ln ui-term__sum" data-term-out><span className="ui-term__key">Projects</span><span className="ui-term__val">4 updated</span><span className="ui-term__dim">(4)</span></div>
                        <div className="ui-term__ln ui-term__done" data-term-out data-term-done><span className="ui-term__ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5" /></svg></span><b>Done</b><span className="ui-term__dim">in 0.8s</span></div>
                        <div className="ui-term__ln ui-term__cmd" data-term-next><span className="ui-term__cwd">~/<span className="ui-term__up">acme-web</span></span><span className="ui-term__sig">$</span><span className="ui-term__typed"></span><i className="ui-term__caret" aria-hidden="true"></i></div>
                      </div>
                    </div>
                  </div>
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
