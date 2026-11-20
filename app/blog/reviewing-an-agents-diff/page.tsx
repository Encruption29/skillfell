/*
  /blog/reviewing-an-agents-diff — note three (Phase C). Dealt hero: statement (NoteHero) with
  reading facts. Section one carries the pinned skill file, marked at the rule the review starts
  from; section two is the review's five steps as the checklist fragment, with the size rules as rows.
*/

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter, SiteNav } from "../../site-chrome";
import { NoteHero } from "../note-hero";

export const metadata: Metadata = {
  title: "Skillfell notes: reviewing an agent's diff",
  description:
    "The rule first, then the diff: one finding, a small patch, and a second reader when the change touches auth or billing.",
};

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          kicker="Note · Review"
          h1="Review the rule, then the diff"
          lead={<>An agent's diff is only as good as the rule it read. The review starts with the pinned skill, then the change — one finding, a small patch, and a second reader when the diff touches auth or billing.</>}
          primary={{ href: "#rule", label: "Start with the rule" }}
          secondary={{ href: "/docs/the-skill-file", label: "The skill file" }}
          facts={[
            ["Topic", "Review"],
            ["Reading", "4 min"],
            ["Reference", "The skill file"],
            ["Skill", "code-review v3"],
          ]}
        />

        <section className="section" id="rule" aria-labelledby="rule-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="rule-h">The diff comes next.</h2>
              <p className="t-lead">The diff is the second thing you read. The first is the pinned skill the agent served: code-review v3, whole, with the line it applied marked.</p>
              <ul className="checks">
                <li>Open the pinned version the agent served, not the latest draft</li>
                <li>Find the rule the agent says it applied; the review names it</li>
                <li>Read the diff against that rule, not against your taste</li>
                <li>One finding per commit is enough</li>
                <li>Ask for a second reviewer when the diff touches auth or billing</li>
              </ul>
              <a className="link" href="/docs/the-skill-file">The skill file, whole</a>
              <p className="muted sf-rule__note">The pin is what makes a review repeatable: the same file, the same rule, the same reading, every time the agent serves it.</p>
            </div>
            <div className="span-6 start-7">
              <div className="panel panel--inset" role="img" aria-label="SKILL.md, the code-review skill's pinned file at v3, with the rule the review starts from marked">
                <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "620px", "--ax": "32px", "--ay": "24px" } as CSSProperties}>
                  <div className="ui ui-doc" data-ui="doc">
                    <article className="ui-doc__page">
                      <div className="ui-doc__label">SKILL.md, v3, pinned</div>
                      <div className="ui-doc__title">code-review</div>
                      <div className="ui-doc__text"><mark className="ui-doc__mark is-on">Review every commit on the branch before you answer.</mark> Read the diff, then the files the diff touches.</div>
                      <div className="ui-doc__text"><mark className="ui-doc__mark" data-kind="Pin" data-msg="Pinned by acme-web and platform, v3." data-where="Team library, updated today">Name the rule you applied</mark> and the file you found it in.</div>
                      <div className="ui-doc__text">One finding per commit is enough. Keep patches small: a review that proposes three changes ships none.</div>
                      <div className="ui-doc__text">When the diff touches auth or billing, ask for a second reviewer before you answer.</div>
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

        <section className="section" id="finding" aria-labelledby="finding-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="finding-h">One finding, one small diff.</h2>
              <p className="t-lead">A review that proposes three changes ships none. Name the rule, point at the line, and propose the smallest patch that passes it.</p>
              <ul className="rows">
                <li><span className="rows__name">The rule<small>The line in the pinned skill the finding comes from</small></span><span className="rows__value">v3</span></li>
                <li><span className="rows__name">The line<small>One file, one hunk, the smallest change that passes</small></span><span className="rows__value">1</span></li>
                <li><span className="rows__name">The patch<small>A suggestion the agent can apply, not a rewrite</small></span><span className="rows__value">Diff</span></li>
                <li><span className="rows__name">The second reader<small>Auth or billing: ask before the merge, not after</small></span><span className="rows__value">2</span></li>
              </ul>
              <p className="muted">The review is a serve too: the agent gets the rule, you get the diff, and the log keeps the receipt.</p>
            </div>
            <div className="span-6 start-7">
              <article className="card card--row">
                <h3>The review, in five steps</h3>
                <p>Three steps read the pinned copy; two wait for the change to earn its merge.</p>
                <div className="panel panel--flush">
                  <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "340px", "--ax": "32px", "--ay": "20px", "--ay-sm": "20px" } as CSSProperties}>
                    <div className="ui ui-panel ui-checks" data-ui="checklist">
                      <div className="ui-checks__head">
                        <div className="ui-title">Before it merges</div>
                        <span className="ui-spacer"></span>
                        <div className="ui-meta" data-checks-count>3 of 5</div>
                      </div>
                      <div className="ui-checks__bar"><i data-checks-bar style={{ "--k": 0.6 } as CSSProperties}></i></div>
                      <ul className="ui-checks__list">
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Read the pinned rule</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Read the diff against it</span></li>
                        <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Name the rule and the line</span></li>
                        <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Propose one patch</span></li>
                        <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Ask a second reader on auth</span></li>
                      </ul>
                    </div>
                  </div></div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
