/*
  /blog — the notes index (Phase C). Dealt hero: statement (the shared NoteHero) with reading
  facts, never dates or a byline. Section one is the three notes as whole-row links beside the
  index drawn as the library's own window; section two names the four skills the notes quote, so
  the examples have a shelf behind them before /skills arrives.
*/

import type { Metadata } from "next";
import { arrow, SiteFooter, SiteNav } from "../site-chrome";
import { NoteHero } from "./note-hero";

export const metadata: Metadata = {
  title: "Skillfell: notes",
  description:
    "Three notes from the pinned library: pinning a skill across four projects, what the serve protocol sends, and reviewing an agent's diff. One idea each, no dates.",
};

const NOTES: Array<[string, string, string, string]> = [
  [
    "Pinning a skill across four projects",
    "Pins · 4 min. One copy on the shelf, four projects following it — and what moves when the pin moves.",
    "/blog/pinning-a-skill-across-projects",
    "4 min",
  ],
  [
    "What the serve protocol sends",
    "Protocol · 3 min. Two requests, one pinned copy and one log line — and the three things the answer never carries.",
    "/blog/what-the-serve-protocol-sends",
    "3 min",
  ],
  [
    "Reviewing an agent's diff",
    "Review · 4 min. The rule first, then the diff: one finding, a small patch, and when to ask a second reader.",
    "/blog/reviewing-an-agents-diff",
    "4 min",
  ],
];

function Notes() {
  return (
    <section className="section" id="notes" aria-labelledby="notes-h">
      <div className="wrap grid">
        <div className="span-5 stack-4">
          <h2 id="notes-h">The notes. <span className="muted">Three, one idea each.</span></h2>
          <ul className="rows rows--a">
            {NOTES.map(([name, text, href, read]) => (
              <li key={name}>
                <span className="rows__name">{name}<small>{text}</small></span>
                <span className="rows__value">{read}<i>{arrow}</i></span>
                <a className="rows__cover" href={href} aria-label={name}></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="span-6 start-7">
          <div className="d-win sf-mini" data-ui="" role="img" aria-label="The notes index drawn as the library window: three notes on pins, the serve protocol and review, one idea each">
            <div className="d-win__bar" aria-hidden="true">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>skillfell</b> · notes</span>
              <span className="sp"></span>
              <span>3 notes</span>
              <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
            </div>
            <div className="d-win__body" aria-hidden="true">
              <div className="d-rows">
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">PN</span><div><b>Pinning a skill</b><small>Pins · one copy, four projects</small></div><span className="sf-pinrow__v">01</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">SP</span><div><b>The serve protocol</b><small>Protocol · two requests, one receipt</small></div><span className="sf-pinrow__v">02</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">RD</span><div><b>Reviewing a diff</b><small>Review · the rule, then the change</small></div><span className="sf-pinrow__v">03</span></div>
              </div>
              <p className="sf-plans__note">No dates, no byline — a note is current or it is rewritten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-h">
      <div className="wrap grid">
        <div className="span-5 stack-4">
          <h2 id="skills-h">The notes lean on four skills.</h2>
          <p className="t-lead">The examples are the library's own shelf. The notes quote them; the docs explain them.</p>
          <ul className="rows">
            <li><span className="rows__name">code-review<small>The pinned rule the review note reads first</small></span><span className="rows__value">v3</span></li>
            <li><span className="rows__name">taste-skill<small>The check that runs before a page ships</small></span><span className="rows__value">v2</span></li>
            <li><span className="rows__name">api-migrations<small>The draft the protocol serves with a flag</small></span><span className="rows__value">v1</span></li>
            <li><span className="rows__name">commit-style<small>The format the review asks the agent to keep</small></span><span className="rows__value">v2</span></li>
          </ul>
          <a className="link" href="/docs">Read the four guides</a>
        </div>
        <div className="span-6 start-7">
          <div className="d-win sf-mini" data-ui="" role="img" aria-label="The library window: code-review v3 pinned, taste-skill v2, api-migrations v1 and commit-style v2 on the shelf">
            <div className="d-win__bar" aria-hidden="true">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>skillfell</b> · library</span>
              <span className="sp"></span>
              <span>24 skills</span>
              <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
            </div>
            <div className="d-win__body" aria-hidden="true">
              <div className="d-rows">
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">CR</span><div><b>code-review</b><small>Reviews commits against the pinned rules</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">TS</span><div><b>taste-skill</b><small>Front-end taste checks before a build</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Pinned</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">AM</span><div><b>api-migrations</b><small>Drafts only; served with a flag</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Draft</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">CS</span><div><b>commit-style</b><small>The message format the review keeps</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Pinned</span></div>
              </div>
              <p className="sf-plans__note">Four of the 24 on the shelf — the notes quote the examples, never the whole library.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          kicker="Notes · 3"
          h1="Notes from the library"
          lead={<>Three short notes on how a pinned library works: the pin, the protocol and the review an agent gets. No feed — a note changes when the product does.</>}
          primary={{ href: "#notes", label: "Read the notes" }}
          secondary={{ href: "/docs", label: "The docs" }}
          facts={[
            ["Notes", "3, one idea each"],
            ["Reading", "3–4 min"],
            ["Subjects", "Pins, protocol, review"],
            ["Reference", "SKILL.md, v3"],
          ]}
        />
        <Notes />
        <Skills />
      </main>
      <SiteFooter />
    </>
  );
}
