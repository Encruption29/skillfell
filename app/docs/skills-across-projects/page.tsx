/*
  /docs/skills-across-projects — the fourth guide (Phase B). Dealt hero: collage (the shared
  DocHero): the projects window on the lit ground, the result card stepping through its lines.
  Section one carries the checklist fragment — the review a skill passes before it serves in a new
  project; section two is the sharing rules as rows.
*/

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { DocHero } from "../../doc-hero";
import { SiteFooter, SiteNav } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Skillfell: skills across projects",
  description:
    "Pin once and 4 projects serve the same copy; move the pin once and every project follows. One library, no copies to sync.",
};

export default function Page() {
  return (
    <>
      <SiteNav current="docs" />
      <main id="top">
        <DocHero
          id="hero-h"
          h1="Skills across projects"
          lead={<>Pin once and 4 projects serve the same copy — move the pin once and every project moves with it.</>}
          primary={{ href: "#share", label: "Share a skill" }}
          secondary={{ href: "/docs/the-serve-protocol", label: "The serve protocol" }}
          proof="One library, every project that follows it."
          artLabel="The projects view: four repos following one pinned code-review skill"
          bar={<><b>skillfell</b> · projects</>}
          barMeta="4 follow"
          window={
            <>
              <nav className="d-side">
                <span><i></i>Library</span>
                <span><i></i>Pinned</span>
                <span className="is-on"><i></i>Projects</span>
                <span className="d-side__label">Following</span>
                <span><i></i>acme-web</span>
                <span><i></i>platform</span>
                <span><i></i>docs-site</span>
              </nav>
              <div className="d-main">
                <div className="d-main__head"><h4>code-review · followed by</h4><span className="d-btn">4 projects</span></div>
                <div className="d-rows">
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">AW</span><div><b>acme-web</b><small>5 skills, led by code-review</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">PF</span><div><b>platform</b><small>9 skills, code-review and taste-skill</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">DS</span><div><b>docs-site</b><small>2 skills, a version behind on purpose</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip d-chip--low">v2 held</span></div>
                  <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">AP</span><div><b>api</b><small>3 skills, moved last push</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                </div>
              </div>
            </>
          }
          note={
            <>
              <div className="d-card__row"><h5>Pin · code-review</h5><span className="d-chip" data-step data-step-at="4">Shared</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>4 projects</b> follow</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>One pin</b>, no copies</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span>Moved once, all at <b>v3</b></span></div>
            </>
          }
        />

        <section className="section" id="share" aria-labelledby="share-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="share-h">One skill, four projects.</h2>
              <p className="t-lead">The skill file lives in the library, not in the repos. A project pins it; no repo ever holds a copy to drift.</p>
              <p className="muted">A project may hold its pin back a version on purpose — docs-site holds v2 while its writers catch up.</p>
            </div>
            <div className="span-6 start-7">
              <article className="card card--row">
                <h3>The review a skill passes first</h3>
                <p>A changed skill serves in a new project only after its steps pass; the diff is one page.</p>
                <div className="panel panel--flush">
                  <div className="stage stage--fade-b"><div className="at-rise fit" style={{ "--fit-max": "340px", "--ax": "32px", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)" } as CSSProperties}>
                    <div className="ui ui-panel ui-checks" data-ui="checklist">
                      <div className="ui-checks__head">
                        <div className="ui-title">Before it serves</div>
                        <span className="ui-spacer"></span>
                        <div className="ui-meta" data-checks-count>3 of 5</div>
                      </div>
                      <div className="ui-checks__bar"><i data-checks-bar style={{ "--k": 0.6 } as CSSProperties}></i></div>
                      <ul className="ui-checks__list">
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Read the changed file</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Run the examples</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Serve the pinned copy</span></li>
                        <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Write the version note</span></li>
                        <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Ask a second reviewer</span></li>
                      </ul>
                    </div>
                  </div></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="rules" aria-labelledby="rules-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="rules-h">What the projects may fetch.</h2>
              <p className="t-lead">The rules are the library's, set once; the pins are the projects', set per repo.</p>
              <ul className="rows">
                <li><span className="rows__name">One library<small>Every project reads from the same shelf, whatever repo it is</small></span><span className="rows__value">1</span></li>
                <li><span className="rows__name">A pin per project<small>A project may hold an older version on purpose; the drift check says so</small></span><span className="rows__value">4</span></li>
                <li><span className="rows__name">The drift check<small>A pin behind the library asks to move on every push, never moves itself</small></span><span className="rows__value">Push</span></li>
                <li><span className="rows__name">Shared packs<small>A pack pins several skills at once, for a whole team's repos</small></span><span className="rows__value">Pro</span></li>
                <li><span className="rows__name">The serve log<small>Every project's serves land in its own log, kept 90 days</small></span><span className="rows__value">90d</span></li>
              </ul>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The projects view: four repos following the pinned code-review skill, one holding v2 on purpose">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · projects</span>
                  <span className="sp"></span>
                  <span>4 follow</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">AW</span><div><b>acme-web</b><small>5 skills, led by code-review</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">PF</span><div><b>platform</b><small>9 skills, code-review and taste-skill</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">DS</span><div><b>docs-site</b><small>2 skills, a version behind on purpose</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip d-chip--low">v2 held</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">AP</span><div><b>api</b><small>3 skills, moved last push</small></div><span className="sf-pinrow__v">v3</span><span className="d-chip">Pinned</span></div>
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
