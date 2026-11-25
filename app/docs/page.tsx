/*
  /docs — the guides index (Phase B). Dealt hero: triptych (the headline on span-3, a collage of
  three sets on span-6 start-4, one large button on the right line). The collage pieces are drawn
  here (page.css .pc-*) because the kit's fragments are too wide for the small pieces; the sets
  crossfade by the kit's layout.js. The guides themselves are whole-card links to the four articles,
  and "Read the file" shows the doc fragment in an inset panel.
*/

import type { Metadata } from "next";
import { pageMeta } from "../meta";
import type { CSSProperties } from "react";
import { arrow, SiteFooter, SiteNav } from "../site-chrome";

export const metadata: Metadata = pageMeta({
  title: "Skillfell: docs",
  description: "Four guides for the pinned skill library: pin a skill, the skill file, the serve protocol and skills across projects. Each is one screen of reading.",
  path: "/docs",
});

function Hero() {
  return (
    <section className="hero hero--triptych" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="span-3">
          <h1 id="hero-h">Docs for running your agents</h1>
          <p className="hero__lead">4 guides — pin a skill, the skill file, the serve protocol and skills across projects. Each is one screen of reading.</p>
        </div>
        <div className="ly-collage span-6 start-4" role="img" aria-label="Three views of the library: the skill list beside its SKILL.md file, a pin running in the terminal with four projects following, and the serve log beside an agent's question">
          <div className="ly-collage__set is-on" aria-hidden="true">
            <div className="ly-piece pc-lib" style={{ left: "4%", top: "6%", width: "92%", height: "90%" }}>
              <div className="pc-lib__head"><div className="pc-lib__t"><svg className="pc-ico" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg><b>Library</b></div><span>24 skills</span></div>
              <div className="pc-lib__row is-on"><i data-tone="1">CR</i><span><b>code-review</b><small>Reviews commits against the pinned rules</small></span><em>v3</em></div>
              <div className="pc-lib__row"><i data-tone="2">TS</i><span><b>taste-skill</b><small>Front-end taste checks before a build</small></span><em>v2</em></div>
              <div className="pc-lib__row"><i data-tone="3">KG</i><span><b>karpathy-guidelines</b><small>Code a reviewer can trust</small></span><em>v1</em></div>
              <div className="pc-lib__row"><i data-tone="4">RP</i><span><b>report</b><small>Bug reports with the logs attached</small></span><em>v1</em></div>
            </div>
            <div className="ly-piece pc-doc" style={{ left: "58%", top: "10%", width: "38%" }}>
              <div className="pc-doc__t">SKILL.md</div>
              <p><mark>Review every commit</mark> on the branch before you answer.</p>
              <p>Name the rule you applied and the file you found it in.</p>
            </div>
          </div>
          <div className="ly-collage__set" aria-hidden="true">
            <div className="ly-piece pc-term" style={{ left: "4%", top: "6%", width: "92%", height: "90%" }}>
              <div className="pc-term__bar"><i></i><i></i><i></i><svg className="pc-ico" viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 3l4 4-4 4" /></svg><span>acme-web — zsh</span></div>
              <p className="pc-term__ln"><span className="c">~/acme-web $</span> skillfell pin code-review v3</p>
              <p className="pc-term__ln ok">✓ skills/code-review fetched</p>
              <p className="pc-term__ln ok">✓ projects — 4 updated</p>
              <p className="pc-term__ln dim">Version v3 pinned (was v2) · Done in 0.8s</p>
            </div>
            <div className="ly-piece pc-proj" style={{ left: "58%", top: "12%", width: "38%" }}>
              <div className="pc-proj__t">Following the pin</div>
              <div className="pc-proj__row"><span>acme-web</span><em>v3</em></div>
              <div className="pc-proj__row"><span>platform</span><em>v3</em></div>
              <div className="pc-proj__row"><span>api</span><em>v3</em></div>
            </div>
          </div>
          <div className="ly-collage__set" aria-hidden="true">
            <div className="ly-piece pc-serve" style={{ left: "4%", top: "6%", width: "92%", height: "90%" }}>
              <div className="pc-serve__head"><div className="pc-lib__t"><svg className="pc-ico" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11l8-8M5 3h6v6" /></svg><b>Serve log</b></div><span>Today, 9 serves</span></div>
              <div className="pc-serve__row"><i data-tone="1">OC</i><span><b>opencode · code-review v3</b><small>acme-web, two commits reviewed</small></span><em>09:12</em></div>
              <div className="pc-serve__row"><i data-tone="2">OC</i><span><b>opencode · taste-skill v2</b><small>Landing page, checked in the build</small></span><em>09:04</em></div>
              <div className="pc-serve__row"><i data-tone="3">OC</i><span><b>opencode · api-migrations v1</b><small>acme-web, served with a flag</small></span><em>08:57</em></div>
            </div>
            <div className="ly-piece pc-ask" style={{ left: "52%", top: "40%", width: "44%" }}>
              <div className="pc-ask__q">review the last commit<span className="crt" aria-hidden="true"></span></div>
              <div className="pc-ask__row"><span><b>code-review</b> v3, pinned</span><em>v3</em></div>
            </div>
          </div>
        </div>
        <div className="span-3 start-10 hero__cta"><a className="btn btn--primary" href="/docs/pin-a-skill">Start with pin a skill{arrow}</a></div>
      </div></div>
    </section>
  );
}

function Guides() {
  const guides: Array<[string, string, string]> = [
    ["Pin a skill", "Put a version on the pinned shelf and every project that follows serves that exact copy.", "/docs/pin-a-skill"],
    ["The skill file", "One file, SKILL.md: a name, a version and the rules the agent reads first.", "/docs/the-skill-file"],
    ["The serve protocol", "An agent asks, Skillfell answers: 2 requests, one pinned copy and one line in the log.", "/docs/the-serve-protocol"],
    ["Skills across projects", "Pin once and 4 projects serve the same copy; move the pin once and every project follows.", "/docs/skills-across-projects"],
  ];
  return (
    <section className="section" id="guides" aria-labelledby="guides-h">
      <div className="wrap grid">
        <div className="span-5">
          <h2 id="guides-h">The guides. <span className="muted">Four in the docs, one screen of reading each.</span></h2>
          <ul className="rows rows--a">
            {guides.map(([name, text, href]) => (
              <li key={name}>
                <span className="rows__name">{name}<small>{text}</small></span>
                <span className="rows__value">Read<i>{arrow}</i></span>
                <a className="rows__cover" href={href} aria-label={name}></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="span-6 start-7">
          <div className="ly-collage ly-collage--mini" role="img" aria-label="The library window: 24 skills on the shelf, code-review pinned at v3">
            <div className="ly-collage__set is-on" aria-hidden="true">
              <div className="ly-piece pc-lib" style={{ left: "4%", top: "0%", width: "92%", height: "92%" }}>
                <div className="pc-lib__head"><div className="pc-lib__t"><svg className="pc-ico" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10M2 7h10M2 10.5h6" /></svg><b>Library</b></div><span>24 skills</span></div>
                <div className="pc-lib__row is-on"><i data-tone="1">CR</i><span><b>code-review</b><small>Reviews commits against the pinned rules</small></span><em>v3</em></div>
                <div className="pc-lib__row"><i data-tone="2">TS</i><span><b>taste-skill</b><small>Front-end taste checks before a build</small></span><em>v2</em></div>
                <div className="pc-lib__row"><i data-tone="3">KG</i><span><b>karpathy-guidelines</b><small>Code a reviewer can trust</small></span><em>v1</em></div>
                <div className="pc-lib__row"><i data-tone="4">RP</i><span><b>report</b><small>Bug reports with the logs attached</small></span><em>v1</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheFile() {
  return (
    <section className="section" id="file" aria-labelledby="file-h">
      <div className="wrap grid">
        <div className="span-5">
          <h2 id="file-h">Read the file. <span className="muted">The one file a skill is, marked as the docs read it.</span></h2>
          <a className="link" href="/docs/the-skill-file">Read the skill file</a>
        </div>
        <div className="span-6 start-7">
          <div className="panel panel--inset" role="img" aria-label="SKILL.md, the code-review skill's file, with the rule the agent reads first marked">
            <div className="stage"><div className="at-rise fit" style={{ "--fit-max": "620px", "--ax": "32px", "--ay": "24px" } as CSSProperties}>
              <div className="ui ui-doc" data-ui="doc">
                <article className="ui-doc__page">
                  <div className="ui-doc__label">SKILL.md, v3, pinned</div>
                  <div className="ui-doc__title">code-review</div>
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
  );
}

export default function Page() {
  return (
    <>
      <SiteNav current="docs" />
      <main id="top" className="page-docs">
        <Hero />
        <Guides />
        <TheFile />
      </main>
      <SiteFooter />
    </>
  );
}
