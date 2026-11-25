/*
  /blog/what-the-serve-protocol-sends — note two (Phase C). Dealt hero: statement (NoteHero) with
  reading facts. Section one is the ask drawn as the search fragment; section two is the answer and
  its receipt as the serve log, with the three things the answer never carries as checks.
*/

import type { Metadata } from "next";
import { pageMeta } from "../../meta";
import type { CSSProperties } from "react";
import { SiteFooter, SiteNav } from "../../site-chrome";
import { NoteHero } from "../note-hero";

export const metadata: Metadata = pageMeta({
  title: "Skillfell notes: what the serve protocol sends",
  description: "An agent asks, Skillfell answers: two requests, one pinned copy and one log line. No draft without a flag, and three things the answer never carries.",
  path: "/blog/what-the-serve-protocol-sends",
});

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          kicker="Note · Protocol"
          h1="What the serve protocol sends"
          lead={<>An agent asks for a skill; Skillfell answers with one pinned copy and one log line. Two requests, no drafts, and three things the answer never carries.</>}
          primary={{ href: "#serve-ask", label: "Follow the ask" }}
          secondary={{ href: "/docs/the-serve-protocol", label: "The protocol guide" }}
          facts={[
            ["Topic", "Protocol"],
            ["Reading", "3 min"],
            ["Reference", "The serve protocol"],
            ["Requests", "2 per serve"],
          ]}
        />

        <section className="section" id="serve-ask" aria-labelledby="ask-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="ask-h">The serve starts with an ask.</h2>
              <p className="t-lead">The first request is the ask: a skill name, and a version if the agent wants one. The library ranks the pinned copy ahead of every draft, so the default answer is the copy the team agreed on.</p>
              <ul className="rows">
                <li><span className="rows__name">The name<small>code-review, taste-skill, api-migrations — the library's own names</small></span><span className="rows__value">Ask</span></li>
                <li><span className="rows__name">The version<small>Any pinned version may be asked for by name; the latest pin is the default</small></span><span className="rows__value">v?</span></li>
                <li><span className="rows__name">The note<small>When the pin is behind the library, the answer says so</small></span><span className="rows__value">Note</span></li>
              </ul>
              <p className="muted">The ask carries no copy — it is a question, and the answer is the file.</p>
            </div>
            <div className="span-6 start-7">
              <div className="panel panel--inset" role="img" aria-label="The ask: a search for review the last commit, with code-review v3 pinned selected first">
                <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "32px" } as CSSProperties}>
                  <div className="ui ui-panel ui-search" data-ui="search">
                    <div className="ui-search__field">
                      <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
                      <span className="ui-search__q"><span data-search-q>review the last commit</span><i className="ui-search__caret"></i></span>
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

        <section className="section" id="answer" aria-labelledby="answer-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="answer-h">The serve is the copy and the receipt.</h2>
              <p className="t-lead">The second request is the serve: the copy goes to the session whole, version and all. The log line is the receipt — agent, skill, version, project, time — and it leaves after 90 days.</p>
              <ul className="rows">
                <li><span className="rows__name">The copy<small>Whole, with its version — never a snippet or a summary</small></span><span className="rows__value">Serve</span></li>
                <li><span className="rows__name">The receipt<small>One line: who asked, what was served, where, when</small></span><span className="rows__value">Log</span></li>
                <li><span className="rows__name">The lifetime<small>90 days, then gone; a project can ask for its own log back</small></span><span className="rows__value">90d</span></li>
                <li><span className="rows__name">The one flag<small>A draft serves only with a flag, on purpose, and the log says so</small></span><span className="rows__value">Flag</span></li>
              </ul>
              <a className="link" href="/docs/the-serve-protocol">The two requests, step by step</a>
            </div>
            <div className="span-6 start-7 stack-5">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The serve log: five serves today, four pinned copies and one draft served with a flag">
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
              <div className="sf-receipt" data-ui="" role="group" aria-label="What the answer never carries: the skill's words, the agent's prompt, an unflagged draft.">
                <div className="sf-receipt__line" aria-hidden="true">
                  <div className="d-win__bar">
                    <span className="d-win__dots"><i></i><i></i><i></i></span>
                    <span><b>skillfell</b> · receipt</span>
                    <span className="sp"></span>
                    <span>90 days</span>
                    <svg className="d-win__glyph" viewBox="0 0 14 14"><path d="M3 11l8-8M5 3h6v6" /></svg>
                  </div>
                  <div className="d-win__body">
                    <div className="d-rows">
                      <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">CR</span><div><b>code-review v3</b><small>opencode · acme-web · 09:12</small></div><span className="d-chip">Log</span></div>
                    </div>
                  </div>
                </div>
                <div className="sf-receipt__never">
                  <p className="t-label muted">What the answer never carries</p>
                  <ul className="checks">
                    <li>The skill's words in the log — the line names the version, never the text</li>
                    <li>The agent's prompt — the ask stays between the agent and the library</li>
                    <li>A draft without a flag — the pin is the default, and the flag is deliberate</li>
                  </ul>
                </div>
                <div className="sf-receipt__foot" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
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
