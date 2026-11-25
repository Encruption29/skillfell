/*
  /about — the product's ground (Phase C). Dealt hero: statement over the bg-horizon ground, four
  facts docked at the foot. Section one is the problem — the copy that drifts — with four repo copies
  in the window; section two is the five rules the library is built on, as checks beside the same
  rules drawn in the product's own window. No team, no photographs, no invented history.
*/

import type { Metadata } from "next";
import { pageMeta } from "../meta";
import { SiteFooter, SiteNav } from "../site-chrome";
import { NoteHero } from "../blog/note-hero";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: a skill library",
  description: "One pinned library for the skills AI coding agents load. Why the copy is the problem, and the five rules the library is built on.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          h1="A library, not a copy."
          lead={<>Skillfell is one pinned library for the skills AI coding agents load. It exists because the same skill, copied into every repo, stops being the same skill.</>}
          primary={{ href: "/#product", label: "See the library" }}
          secondary={{ href: "/blog", label: "Read the notes" }}
          facts={[
            ["What it is", "One pinned library"],
            ["For", "AI coding agents"],
            ["Status", <span key="s" data-assumed>Open beta · v0.9</span>],
            ["Files", "Yours, in your repos"],
          ]}
          ground="bg-horizon"
        />

        <section className="section" id="why" aria-labelledby="why-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="why-h">Why the library exists.</h2>
              <p className="t-lead">A skill is a file of rules an agent reads first. The moment it is copied into a repo, it belongs to that repo — and the next edit makes it a different skill.</p>
              <ul className="rows">
                <li><span className="rows__name">Four repos<small>The same skill copied four times, four chances to drift</small></span><span className="rows__value">4</span></li>
                <li><span className="rows__name">One edit<small>A rule fixed in one copy; the other three keep the old behaviour</small></span><span className="rows__value">1</span></li>
                <li><span className="rows__name">No receipt<small>Nothing says which copy an agent read, or which rule it applied</small></span><span className="rows__value">—</span></li>
              </ul>
              <p className="muted">The fix is not a better copy. It is one copy, pinned.</p>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="Four repos holding four copies of one skill: edited, fixed, ahead and original — and no line saying which one answered">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · before</span>
                  <span className="sp"></span>
                  <span>4 copies</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">AW</span><div><b>acme-web</b><small>A local copy, edited last week</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Edited</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">PF</span><div><b>platform</b><small>The copy that got the fix</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">Fixed</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">DS</span><div><b>docs-site</b><small>A version ahead of the others</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip d-chip--low">Ahead</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">AP</span><div><b>api</b><small>Still the first copy</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--out">Original</span></div>
                  </div>
                  <p className="sf-plans__note">Four copies, four behaviours — and no line saying which one answered.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="principles" aria-labelledby="principles-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="principles-h">The library's five rules.</h2>
              <p className="t-lead">Five rules for the library itself. They are the product's shape, not a manifesto.</p>
              <ul className="checks">
                <li>One file per skill — a skill is a SKILL.md, not a folder of folklore</li>
                <li>Versions whole — every edit makes a new version; the old ones stay readable</li>
                <li>A pin per project — a project chooses a version; the library never moves it</li>
                <li>No silent changes — a pin behind the library says so; a draft serves only with a flag</li>
                <li>Your files stay yours — the skill text stays in your repos, never uploaded</li>
              </ul>
              <a className="link" href="/docs/the-skill-file">What a skill file holds</a>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The five rules as the library draws them: one file, whole versions, a pin per project, a flag for drafts, and files that stay in your repos">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · the rules</span>
                  <span className="sp"></span>
                  <span>v0.9</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">01</span><div><b>One file</b><small>A skill is SKILL.md</small></div><span className="sf-pinrow__v">1</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">02</span><div><b>Whole versions</b><small>Every edit is a new version</small></div><span className="sf-pinrow__v">v1–v3</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">03</span><div><b>A pin per project</b><small>The library never moves it</small></div><span className="sf-pinrow__v">Repo</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">04</span><div><b>No silent changes</b><small>Drafts serve with a flag</small></div><span className="sf-pinrow__v">Flag</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">05</span><div><b>Your files</b><small>The text stays in your repos</small></div><span className="sf-pinrow__v">Yours</span></div>
                  </div>
                  <p className="sf-plans__note">The five rules, as the library draws them — each one a line in the product, not a promise.</p>
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
