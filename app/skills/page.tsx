/*
  /skills — the shelf (Phase D). Catalog only: 24 skills, six trades, no detail pages (a skill is a
  SKILL.md, and the file is the detail). The hero is the quiet statement the notes and the about
  page open on; the shelf is the library's own window, its 24 names ruled inside the frame, so the
  catalog and the product's picture are one thing. The second section says what a name on the shelf
  is: one file, whole versions, a pin per project.
*/

import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { SiteFooter, SiteNav } from "../site-chrome";
import { NoteHero } from "../blog/note-hero";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: the skills shelf",
  description: "All 24 skills in the pinned library: six trades, one SKILL.md each, versions whole and a pin per project. Read the shelf straight through.",
  path: "/skills",
});

type Cat = "review" | "frontend" | "docs" | "testing" | "backend" | "ops";

type Skill = {
  name: string;
  v: string;
  cat: Cat;
  text: string;
  pins: number;
  draft?: boolean;
};

const TRADES: Record<Cat, string> = {
  review: "Review",
  frontend: "Frontend",
  docs: "Docs",
  testing: "Testing",
  backend: "Backend",
  ops: "Ops",
};

const SKILLS: Skill[] = [
  { name: "code-review", v: "v3", cat: "review", pins: 12, text: "Reads a diff against the pinned rule, one finding at a time." },
  { name: "diff-review", v: "v2", cat: "review", pins: 9, text: "Reads a patch as a reviewer: the context first, then the change." },
  { name: "commit-style", v: "v2", cat: "review", pins: 15, text: "Keeps commit messages in the format the review expects." },
  { name: "pr-notes", v: "v1", cat: "review", pins: 6, text: "Turns a finished review into a short note for the author." },

  { name: "taste-skill", v: "v2", cat: "frontend", pins: 11, text: "Checks a page's type, spacing and edges before it ships." },
  { name: "ui-audit", v: "v1", cat: "frontend", pins: 7, text: "Walks a screen for states, tap targets and stuck hover." },
  { name: "responsive-check", v: "v4", cat: "frontend", pins: 10, text: "Reads a layout at five widths and reports the first break." },
  { name: "a11y-pass", v: "v2", cat: "frontend", pins: 8, text: "Checks names, focus order and contrast before a build." },

  { name: "doc-writer", v: "v3", cat: "docs", pins: 9, text: "Writes a guide in the product's voice, examples first." },
  { name: "readme-audit", v: "v1", cat: "docs", pins: 5, text: "Reads a README as a newcomer and lists what is missing." },
  { name: "api-reference", v: "v2", cat: "docs", pins: 6, text: "Keeps an endpoint reference on the container's lines." },
  { name: "changelog-style", v: "v2", cat: "docs", pins: 12, text: "Writes release notes as changes, not announcements." },

  { name: "test-first", v: "v3", cat: "testing", pins: 14, text: "Turns a bug report into a failing test before a fix." },
  { name: "flake-hunt", v: "v2", cat: "testing", pins: 4, text: "Finds the timing assumption behind a test that passes twice." },
  { name: "coverage-gap", v: "v1", cat: "testing", pins: 7, text: "Names the branches a suite never reaches, in order of risk." },
  { name: "fixture-design", v: "v2", cat: "testing", pins: 5, text: "Builds the smallest fixture a test can still read." },

  { name: "api-migrations", v: "v1", cat: "backend", pins: 3, draft: true, text: "Drafts a schema move and the rollback beside it." },
  { name: "schema-guard", v: "v3", cat: "backend", pins: 9, text: "Reads a migration against the tables it touches." },
  { name: "error-shape", v: "v2", cat: "backend", pins: 8, text: "Keeps error bodies one shape across a service." },
  { name: "idempotency", v: "v1", cat: "backend", pins: 4, text: "Checks a retried write against the key that makes it safe." },

  { name: "deploy-check", v: "v2", cat: "ops", pins: 6, text: "Reads the release diff against the deploy's own rules." },
  { name: "incident-log", v: "v3", cat: "ops", pins: 7, text: "Writes the timeline first, the cause second." },
  { name: "cron-safety", v: "v1", cat: "ops", pins: 3, text: "Checks a scheduled job for overlap and drift." },
  { name: "release-notes", v: "v2", cat: "ops", pins: 5, text: "Turns merged work into notes a customer can read." },
];

const initials = (name: string) =>
  name.split("-").slice(0, 2).map((part) => part[0]).join("").toUpperCase();

function Shelf() {
  return (
    <section className="section" id="shelf" aria-labelledby="shelf-h" style={{ "--h": 2 } as CSSProperties}>
      <div className="wrap">
        <div className="section-head sk-head">
          <h2 id="shelf-h">24 skills, one shelf. <span className="muted">Six trades, one file each.</span></h2>
          <p>Every name below is the file an agent loads. Read it straight through; the shelf is the whole catalog.</p>
          <a className="link" href="/docs/the-skill-file">The skill file</a>
        </div>

        <div className="d-win sk-win" data-ui="">
          <div className="d-win__bar" aria-hidden="true">
            <span className="d-win__dots"><i></i><i></i><i></i></span>
            <span><b>skillfell</b> · shelf</span>
            <span className="sp"></span>
            <span>24 files · six trades</span>
            <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
          </div>
          <div className="d-win__body">
            <ul className="sk-grid">
              {SKILLS.map((s, i) => (
                <li key={s.name} className="sk">
                  <div className="sk__head">
                    <span className="sf-av" data-tone={(i % 5) + 1} aria-hidden="true">{initials(s.name)}</span>
                    <p className="sk__name">{s.name}</p>
                    <span className="sk__v">{s.v}</span>
                  </div>
                  <p className="sk__text">{s.text}</p>
                  <div className="sk__foot"><span>{TRADES[s.cat]}</span><span>{s.draft ? "Draft" : `${s.pins} pins`}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pins() {
  return (
    <section className="section" id="pins" aria-labelledby="pins-h" data-moment="word-highlight">
      <div className="wrap grid">
        <div className="span-5 stack-4">
          <h2 id="pins-h">A skill is a file, not a page.</h2>
          <p className="t-lead">Nothing on the shelf opens a detail page. A skill is one SKILL.md in the library, and the file is the detail.</p>
          <ul className="rows">
            <li><span className="rows__name">One file<small>Rules an agent reads first — no folder of folklore</small></span><span className="rows__value">24</span></li>
            <li><span className="rows__name">Whole versions<small>Every edit is a new version; the old ones stay readable</small></span><span className="rows__value">v1–v4</span></li>
            <li><span className="rows__name">A pin per project<small>The project pins; the library never moves it</small></span><span className="rows__value">4 repos</span></li>
            <li><span className="rows__name">Read offline<small>The rule needs no network</small></span><span className="rows__value">0 calls</span></li>
            <li><span className="rows__name">One trade each<small>Six trades, four files apiece</small></span><span className="rows__value">6 × 4</span></li>
          </ul>
        </div>
        <div className="span-6 start-7">
          <div className="d-win sf-mini" data-ui="" role="img" aria-label="The shelf as the library window: code-review v3 and taste-skill v2 pinned, api-migrations v1 a draft, deploy-check v2 new">
            <div className="d-win__bar" aria-hidden="true">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>skillfell</b> · shelf</span>
              <span className="sp"></span>
              <span>24 files</span>
              <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
            </div>
            <div className="d-win__body" aria-hidden="true">
              <div className="d-rows">
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">CR</span><div><b>code-review</b><small>Reviews a diff against the pinned rule</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">TS</span><div><b>taste-skill</b><small>Checks a page before it ships</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Pinned</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">AM</span><div><b>api-migrations</b><small>Drafts only; served with a flag</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Draft</span></div>
                <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">DC</span><div><b>deploy-check</b><small>The release diff, read before it ships</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">New</span></div>
              </div>
              <p className="sf-plans__note">The shelf is one list; the pin lives in the project.</p>
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
      <SiteNav current="skills" />
      <main id="top">
        <NoteHero
          id="hero-h"
          kicker="Library · 24 skills"
          h1="The whole shelf."
          lead={<>Twenty-four skills in six trades, each a SKILL.md with whole versions and a pin per project. No detail pages: the file is the detail.</>}
          primary={{ href: "#shelf", label: "Browse the shelf" }}
          facts={[
            ["Skills", "24, six trades"],
            ["Versions", "v1–v4, whole"],
            ["Pins", "Per project"],
            ["Status", <span key="s" data-assumed>Open beta · v0.9</span>],
          ]}
        />
        <Shelf />
        <Pins />
      </main>
      <SiteFooter />
    </>
  );
}
