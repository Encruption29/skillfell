/*
  /privacy — what the server keeps (Phase B). Dealt hero: statement over the bg-horizon ground, the
  four facts docked at the foot. The sections read like the rest of the site: what we keep (rows +
  the serve-log settings panel), what we never keep (checks), and how to write to us. The aside on
  the last two sections is the page's own table of contents.
*/

import type { Metadata } from "next";
import { pageMeta } from "../meta";
import type { CSSProperties } from "react";
import { MAILTO, arrow, SiteFooter, SiteNav } from "../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: privacy",
  description: "Your skill files stay in your repos. What reaches the server is the pin, the serve and the log — and the log leaves after 90 days.",
  path: "/privacy",
});

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <section className="hero hero--statement bg-horizon" data-enter aria-labelledby="hero-h">
          <div className="wrap"><div className="hero-text hero__in">
            <div>
              <h1 id="hero-h">Privacy at Skillfell</h1>
              <p className="hero__lead">Your skill files stay in your repos. What reaches the server is the pin, the serve and the log — and the log leaves after 90 days.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#kept">See what we keep</a>
                <a className="btn btn--secondary" href={MAILTO}>Write to us</a>
              </div>
            </div>
            <dl className="hero__facts">
              <div><dt>Skill files</dt><dd>In your repos, never uploaded</dd></div>
              <div><dt>Serve logs</dt><dd>90 days, then gone</dd></div>
              <div><dt>The team library</dt><dd>You and your team, no one else</dd></div>
              <div><dt>Contact</dt><dd>One email, answered within a day</dd></div>
            </dl>
          </div></div>
        </section>

        <section className="section" id="kept" aria-labelledby="kept-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="kept-h">What Skillfell keeps.</h2>
              <p className="t-lead">Three small things: the pin, the serve and the log line. None of them is your skill's text.</p>
              <ul className="rows">
                <li><span className="rows__name">Serve logs<small>Agent, skill, version, project, time — deleted after 90 days</small></span><span className="rows__value">90d</span></li>
                <li><span className="rows__name">Pins<small>Which version each project follows — version numbers, not contents</small></span><span className="rows__value">Pin</span></li>
                <li><span className="rows__name">The account<small>One email, for the bill and the replies</small></span><span className="rows__value">1</span></li>
              </ul>
            </div>
            <article className="card card--row span-6 start-7">
              <h3>The serve-log settings</h3>
              <p>What the server may keep, as the library draws it: the log on, everything else off.</p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b"><div className="at-right to-edge" style={{ "--ax": "32px", "--ay": "56px" } as CSSProperties}>
                  <div className="ui ui-panel ui-toggles" data-ui="toggles">
                    <div className="ui-head">
                      <svg className="ui-icon ui-toggles__ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" /><path d="m5.8 8 1.6 1.6 3-3.2" /></svg>
                      <div className="ui-title">What the server may keep</div>
                      <span className="ui-spacer"></span>
                      <div className="ui-meta" data-tg-count>1 of 4 on</div>
                    </div>
                    <ul className="ui-toggles__list">
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Serve logs</span><span className="ui-tg__sub">90 days, then gone</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Serve logs"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Agent prompts</span><span className="ui-tg__sub">The ask stays between the agent and the library</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Agent prompts"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Skill contents</span><span className="ui-tg__sub">The file stays in your repo, whole</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Skill contents"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Usage stats</span><span className="ui-tg__sub">No counters on your work</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Usage stats"><i></i></button></li>
                    </ul>
                  </div>
                </div></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="never" aria-labelledby="never-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="never-h">What Skillfell never keeps.</h2>
              <ul className="checks">
                <li>Your skill files — they stay in your repos, read whole or not at all</li>
                <li>Agent prompts — the ask is between the agent and the library</li>
                <li>Skill text in the log — the log names the version, never the words</li>
                <li>Hand-edited copies — there is nothing to hand-edit, so nothing leaks</li>
                <li>Log exports — a project's serve log goes back to the project when it asks</li>
              </ul>
              <p className="muted sf-cap">The line a serve leaves: the agent, the skill and its version, the project — the words stay in the repo.</p>
            </div>
            <div className="span-6 start-7">
              <div className="d-win" data-ui="" role="img" aria-label="The serve-log line, whole: the three rows a serve leaves — the agent, the skill and its version, the project — and the three the line never carries: the skill's words, the agent's ask, the file's contents">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · log line</span>
                  <span className="sp"></span>
                  <span>one serve</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">OC</span><div><b>opencode</b><small>The agent that asked</small></div><span className="sf-pinrow__v">09:12</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">CR</span><div><b>code-review v3</b><small>The skill and its version, never its words</small></div><span className="sf-pinrow__v">pin</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">AW</span><div><b>acme-web</b><small>The project the serve answered</small></div><span className="sf-pinrow__v">repo</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">–</span><div><b>The skill's words</b><small>Never in the line — the log names the version</small></div><span className="sf-pinrow__v">none</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">–</span><div><b>The agent's ask</b><small>Stays between the agent and the library</small></div><span className="sf-pinrow__v">none</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">–</span><div><b>The file's contents</b><small>Untouched in the repo, read whole or not at all</small></div><span className="sf-pinrow__v">none</span></div>
                  </div>
                  <p className="sf-plans__note">Three rows a serve leaves — and three the line never carries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="write" aria-labelledby="write-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="write-h">Write to Skillfell.</h2>
              <p className="t-lead">A copy of what we hold, its deletion, or a question — one email, and the reply comes within a day.</p>
              <ul className="rows">
                <li><span className="rows__name">Data requests<small>A copy of what we hold, or its deletion, from the same email</small></span><span className="rows__value">Mail</span></li>
                <li><span className="rows__name">Security<small>Report a hole; we fix it first and tell you after</small></span><span className="rows__value">Mail</span></li>
                <li><span className="rows__name">Billing<small>The account's one email again — for the bill and nothing else</small></span><span className="rows__value">Mail</span></li>
              </ul>
              <a className="btn btn--primary" href={MAILTO}>Write to Skillfell{arrow}</a>
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The replies log: a data request answered within the day, a security report fixed first and told after, a billing note answered the same day">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · replies</span>
                  <span className="sp"></span>
                  <span>within a day</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">DR</span><div><b>Data request</b><small>A copy of what we hold, or its deletion</small></div><span className="sf-pinrow__v">1 day</span><span className="d-chip">Answered</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">SEC</span><div><b>Security</b><small>A hole reported, fixed first and told after</small></div><span className="sf-pinrow__v">fixed</span><span className="d-chip">Closed</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">BL</span><div><b>Billing</b><small>The account's one email, for the bill and the replies</small></div><span className="sf-pinrow__v">1 day</span><span className="d-chip">Answered</span></div>
                  </div>
                  <p className="sf-plans__note">One address for everything — the reply carries what was asked for, and then the request is gone.</p>
                </div>
              </div>
            </div>
            <aside className="sf-aside span-6 start-7">
              <p className="t-label">On this page</p>
              <a href="#kept">What we keep</a>
              <a href="#never">What we never keep</a>
              <a href="#write">Write to us</a>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
