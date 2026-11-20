/*
  /blog/pinning-a-skill-across-projects — note one (Phase C). Dealt hero: statement (NoteHero) with
  reading facts. Section one shows the drift with four repo copies in a window; section two carries
  the pin command, the same terminal-run the pin guide runs, and the rules of the shelf.
*/

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter, SiteNav } from "../../site-chrome";
import { NoteHero } from "../note-hero";

export const metadata: Metadata = {
  title: "Skillfell notes: pinning a skill across projects",
  description:
    "One copy on the shelf, four projects following it. What a pin is, why four copies drift, and what moves when the pin moves.",
};

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          kicker="Note · Pins"
          h1="Pinning a skill across projects"
          lead={<>A skill copied into four repos is four skills before long. A pin is one copy on the shelf and four projects that follow it — here is what that changes.</>}
          primary={{ href: "#drift", label: "Start with the drift" }}
          secondary={{ href: "/docs/pin-a-skill", label: "The pin guide" }}
          facts={[
            ["Topic", "Pins"],
            ["Reading", "4 min"],
            ["Reference", "Pin a skill"],
            ["Following", "4 projects"],
          ]}
        />

        <section className="section" id="drift" aria-labelledby="drift-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="drift-h">One skill, four copies.</h2>
              <p className="t-lead">A skill copied into each repo starts identical and stops being so. One project fixes a rule, another keeps the old one, and the agent follows whichever copy sits in the repo it opened.</p>
              <ul className="rows">
                <li><span className="rows__name">A copy per repo<small>Four repos, four files, four behaviours before the first release</small></span><span className="rows__value">4</span></li>
                <li><span className="rows__name">The drift<small>One rule edited in one repo; the other three never hear about it</small></span><span className="rows__value">v?</span></li>
                <li><span className="rows__name">No receipt<small>Nothing says which copy an agent read, or which rule it applied</small></span><span className="rows__value">—</span></li>
              </ul>
              <p className="muted">The answer is not a better copy. It is no copy at all.</p>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="Four repos holding four copies of code-review: v1 edited last week, v2 with the fix, v3 ahead of the others, and v1 still the first copy">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · before</span>
                  <span className="sp"></span>
                  <span>4 copies</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">AW</span><div><b>acme-web</b><small>code-review · a local copy, edited last week</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Edited</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">PF</span><div><b>platform</b><small>code-review · the copy that got the fix</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Fixed</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">DS</span><div><b>docs-site</b><small>code-review · a version ahead of the others</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip d-chip--low">Ahead</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">AP</span><div><b>api</b><small>code-review · still the first copy</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Original</span></div>
                  </div>
                  <p className="sf-plans__note">Four copies of one skill — four answers to the same review.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="follow" aria-labelledby="pin-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="pin-h">The pin replaces the copy.</h2>
              <p className="t-lead">The skill lives on the library's shelf. A project holds a pin — a version number, not a file — and the agent is served that copy whole.</p>
              <ul className="rows">
                <li><span className="rows__name">The shelf<small>One file per skill, every version kept whole</small></span><span className="rows__value">1</span></li>
                <li><span className="rows__name">The pin<small>A version number per project; no copy in the repo</small></span><span className="rows__value">4</span></li>
                <li><span className="rows__name">The move<small>Move the pin once and every follower serves the new copy</small></span><span className="rows__value">1×</span></li>
                <li><span className="rows__name">The hold-back<small>A project may stay a version behind on purpose; the drift check says so</small></span><span className="rows__value">v2</span></li>
              </ul>
              <a className="link" href="/docs/pin-a-skill">The pin command, line by line</a>
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
