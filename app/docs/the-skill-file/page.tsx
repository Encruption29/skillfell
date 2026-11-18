/*
  /docs/the-skill-file — the second guide (Phase B). Dealt hero: collage (the shared DocHero): the
  SKILL.md window on the lit ground, the result card stepping through its three lines. Section one
  carries the doc fragment — the file, marked as the agent reads it; section two is the version
  history as rows.
*/

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { DocHero } from "../../doc-hero";
import { SiteFooter, SiteNav } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Skillfell: the skill file",
  description:
    "A skill is one file, SKILL.md: a name, a version and the rules the agent reads first. Skillfell keeps every version whole, from v1 to the pinned copy.",
};

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <DocHero
          id="hero-h"
          h1="The skill file"
          lead={<>A skill is one file, SKILL.md: a name, a version and the rules the agent reads first. Skillfell keeps every version whole, v1 to v3.</>}
          primary={{ href: "#file", label: "Read it marked" }}
          secondary={{ href: "/docs/pin-a-skill", label: "How pinning works" }}
          proof="Plain files in your repo — read them, diff them, commit them."
          artLabel="SKILL.md, the code-review skill's file, open beside the library window"
          bar={<><b>skillfell</b> · SKILL.md</>}
          barMeta="code-review v3"
          window={
            <>
              <nav className="d-side">
                <span><i></i>Library</span>
                <span className="is-on"><i></i>Files</span>
                <span><i></i>History</span>
                <span className="d-side__label">Projects</span>
                <span><i></i>acme-web</span>
              </nav>
              <div className="d-main">
                <div className="d-main__head"><h4>skills/code-review</h4><span className="d-btn">v3 · pinned</span></div>
                <div className="sf-file" aria-hidden="true">
                  <p><span>name:</span> code-review</p>
                  <p><span>version:</span> v3, pinned by acme-web</p>
                  <p><span>rules:</span></p>
                  <p className="sf-file__rule">Review every commit on the branch before you answer. Read the diff, then the files it touches.</p>
                  <p className="sf-file__rule">Name the rule you applied and the file you found it in.</p>
                  <p className="sf-file__rule">One finding per commit is enough.</p>
                </div>
              </div>
            </>
          }
          note={
            <>
              <div className="d-card__row"><h5>File · SKILL.md</h5><span className="d-chip" data-step data-step-at="4">v3</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>1 file</b>, read whole</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span><b>v1 → v2</b> asks before it serves</span></div>
              <div className="sf-note__line" data-step><i>✓</i><span>Diff to v2: <b>6 lines</b></span></div>
            </>
          }
        />

        <section className="section" id="file" aria-labelledby="file-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="file-h">One file, marked as the agent reads it.</h2>
              <p className="t-lead">The rules are prose a model can follow — every line says what to do, and the good ones say how to check it.</p>
              <p className="muted">Keep the examples runnable: a rule the agent cannot try is a rule it skips.</p>
            </div>
            <div className="span-6 start-7">
              <div className="panel panel--inset" role="img" aria-label="SKILL.md marked where the agent reads: the first rule, the naming rule">
                <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "620px", "--ax": "32px", "--ay": "24px" } as CSSProperties}>
                  <div className="ui ui-doc" data-ui="doc">
                    <article className="ui-doc__page">
                      <div className="ui-doc__label">SKILL.md, draft 2</div>
                      <div className="ui-doc__title">code-review, v3</div>
                      <div className="ui-doc__text"><mark className="ui-doc__mark is-on">Review every commit on the branch before you answer.</mark> Read the diff, then the files the diff touches.</div>
                      <div className="ui-doc__text"><mark className="ui-doc__mark" data-kind="Pin" data-msg="Pinned by acme-web and platform, v3." data-where="Team library, updated today">Name the rule you applied</mark> and the file you found it in.</div>
                      <div className="ui-doc__text">One finding per commit is enough. Keep patches small: a review that proposes three changes ships none.</div>
                      <div className="ui-doc__text">When the diff touches auth or billing, ask for a second reviewer before you answer.</div>
                      <div className="ui-doc__text">Keep the examples runnable: a rule the agent cannot try is a rule it skips.</div>
                      <div className="ui-doc__text">If a rule cannot be checked, it is not a rule — say what to run instead.</div>
                    </article>
                    <aside className="ui-doc__note ui-panel is-on" aria-live="polite">
                      <div className="ui-doc__kind"><span className="ui-doc__dot"></span><span data-doc-kind>Pin</span></div>
                      <div className="ui-doc__msg" data-doc-msg>Pinned by acme-web and platform, v3.</div>
                      <div className="ui-doc__where" data-doc-where>Team library, updated today</div>
                    </aside>
                  </div>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="versions" aria-labelledby="versions-h">
          <div className="wrap grid">
            <div className="span-5">
              <h2 id="versions-h">Every version of the file, whole.</h2>
              <p className="t-lead">An edit makes a new version; the old one stays readable and diffable. The pin decides which one serves.</p>
              <ul className="rows">
                <li><span className="rows__name">The pinned copy<small>Asks for a second reviewer when the diff touches auth or billing</small></span><span className="rows__value">v3</span></li>
                <li><span className="rows__name">The examples rule<small>Added in v2: a rule the agent cannot try is a rule it skips</small></span><span className="rows__value">v2</span></li>
                <li><span className="rows__name">The first draft<small>Six rules, written in one afternoon, still in the history</small></span><span className="rows__value">v1</span></li>
                <li><span className="rows__name">The diff to v2<small>One rule added, two lines edited — readable whole, line by line</small></span><span className="rows__value">6</span></li>
              </ul>
              <p className="muted sf-cap">The pin moves in one command; the version it leaves stays in the history, readable and diffable either way.</p>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The version history: the pinned v3, the v2 that added the examples rule, and the first draft">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · history</span>
                  <span className="sp"></span>
                  <span>code-review</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">v3</span><div><b>The pinned copy</b><small>Asks for a second reviewer on auth or billing</small></div><span className="sf-pinrow__v">now</span><span className="d-chip">Pinned</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">v2</span><div><b>The examples rule</b><small>A rule the agent cannot try is a rule it skips</small></div><span className="sf-pinrow__v">v2</span><span className="d-chip">History</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="5">v1</span><div><b>The first draft</b><small>Six rules, written in one afternoon</small></div><span className="sf-pinrow__v">v1</span><span className="d-chip d-chip--low">History</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="3">DF</span><div><b>Diff to v2</b><small>One rule added, two lines edited</small></div><span className="sf-pinrow__v">6 ln</span><span className="d-chip">Diff</span></div>
                  </div>
                  <p className="sf-plans__note">Every version keeps its whole file — the pin says which one serves.</p>
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
