/*
  Skillfell — deal (plan.md): hero centred + fluted-glass + cursor-spotlight · forest-pale-lime ·
  schibsted · sharp · arrow · mark initial (S) · nav-centre · footer-columns · close-word ·
  dark-band · silk-folds on features panels · iris-opens on cli · grounds: product bg-dots,
  features plain, cli ground-inverse band, pricing plain, faq bg-dusk.
  Stand-in: hello@skillfell.example. Assumed: beta pill, beta-free lines, all prices (data-assumed).
*/

import type { CSSProperties } from "react";
import { MAILTO, arrow, SiteFooter, SiteNav } from "./site-chrome";

function Hero() {
  return (
    <section className="hero hero--centred" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text">
        <div className="hero__c">
          <a className="pill" href="#pricing"><span data-assumed>Open beta · v0.9</span><span className="muted">See the plans</span></a>
          <h1 id="hero-h">Skill manager for AI coding agents</h1>
          <p className="hero__lead">One pinned library for every skill your agents load — versioned, one file per skill, never hand-edited.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={MAILTO}>Join early access{arrow}</a>
            <a className="btn btn--secondary" href="#pricing">See the plans</a>
          </div>
        </div>
        <div
          className="hero__window"
          data-fx="fluted-glass"
          data-fx-seed="7"
          data-fx-palette='{"bg":"#e9efe0","surface":"#dbe5cd","ink":"#16240f","accent":"#57813f"}'
          role="img"
          aria-label="The opencode agent asking Skillfell for the code-review skill and receiving its pinned copy"
          data-moment="cursor-spotlight"
          data-moment-opts={'{"rest": [0.74, 0.26], "radius": 460}'}
        >
          <div className="ly-piece d-win d-win--dark" aria-hidden="true">
            <div className="d-win__bar">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>opencode</b> · acme-web</span>
              <span className="sp"></span>
              <span>5 skills pinned</span>
            </div>
            <div className="d-win__body">
              <div className="inbox">
                <div className="q">Filter</div>
                <div className="t is-on"><i style={{ background: "#c6f19d" }}>CR</i><b>code-review</b><time>v3</time><span>Reviews commits against the pinned rules</span></div>
                <div className="t"><i style={{ background: "#9fd3b5" }}>TS</i><b>taste-skill</b><time>v2</time><span>Front-end taste checks before a build</span></div>
                <div className="t"><i style={{ background: "#8aa08f" }}>KG</i><b>karpathy-guidelines</b><time>v1</time><span>Code a reviewer can trust</span></div>
                <div className="t"><i style={{ background: "#c6f19d" }}>RP</i><b>report</b><time>v1</time><span>Bug reports with the logs attached</span></div>
                <div className="t"><i style={{ background: "#8aa08f" }}>OC</i><b>opencode</b><time>v1</time><span>Agent commands and session notes</span></div>
              </div>
              <div className="convo">
                <div className="d-chat" data-ly-steps="900">
                  <div className="d-msg d-msg--me">Review the last three commits on this branch<small>now</small></div>
                  <div className="d-tool" data-step>Skillfell serves code-review v3 (pinned)</div>
                  <div className="d-msg d-msg--bot" data-step>Two findings: an unescaped input in auth.ts and a missing test on the retry path. Patches suggested.<small>skill v3 · 2 files</small></div>
                  <div className="acts" data-step><span>Apply patch</span><span>Open skill</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

function Product() {
  return (
    <section className="section bg-dots" id="product" aria-labelledby="product-h">
      <div className="wrap">
        <div className="grid">
          <h2 id="product-h" className="span-5">One library every agent reads from.</h2>
          <p className="muted span-6 start-7">Each skill is one file with its version pinned. An agent asks, Skillfell serves the pinned copy and logs the use. <a className="link" href="#cli">Pin it from the terminal</a></p>
        </div>
        <div className="ui app fill" role="img" aria-label="The Skillfell library window: the skill list beside the open code-review skill file" data-ui-pause-host>
          <div className="app__pane app__pane--list">
            <div className="ui ui-panel ui-win" data-ui="window" data-open="Pinned" data-work="Draft" data-done="Archived">
              <div className="ui-win__bar">
                <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="ui-win__crumb">Skillfell <i>/</i> <b>Library</b></span>
                <span className="ui-spacer"></span>
                <span className="ui-win__search" aria-hidden="true"><svg className="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg><span className="ui-win__ph">Search</span><span className="ui-kbd">/</span></span>
              </div>
              <div className="ui-win__body">
                <nav className="ui-win__side" aria-hidden="true">
                  <span className="ui-win__nav is-on"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9h3l1 1.5h3l1-1.5h3" /><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z" /></svg>Skills<em>24</em></span>
                  <span className="ui-win__nav"><svg className="ui-icon" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5" /><path d="M8 5v3l2 1.5" /></svg>Pinned<em>19</em></span>
                  <span className="ui-win__nav"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg>Drafts<em>3</em></span>
                  <span className="ui-win__nav"><svg className="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg>Shared</span>
                  <span className="ui-win__label">Projects</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>acme-web</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>platform</span>
                </nav>
                <div className="ui-win__main">
                  <div className="ui-win__cols" aria-hidden="true"><span>Skill</span><span>What it does</span><span>State</span><span>Changed</span></div>
                  <ul className="ui-win__rows">
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="1">CR</span><span className="ui-win__who">code-review</span><span className="ui-win__sub">Reviews commits against the pinned rules</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">2m</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="2">TS</span><span className="ui-win__who">taste-skill</span><span className="ui-win__sub">Front-end taste checks before a build</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">9m</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="3">WG</span><span className="ui-win__who">web-ui-guidelines</span><span className="ui-win__sub">Interface rules the agent reads first</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">14m</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="4">KG</span><span className="ui-win__who">karpathy-guidelines</span><span className="ui-win__sub">Code a reviewer can trust</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">1h</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="5">AD</span><span className="ui-win__who">design-system-notes</span><span className="ui-win__sub">The tokens and parts a page may use</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">3h</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="1">RP</span><span className="ui-win__who">report</span><span className="ui-win__sub">Bug reports with the logs attached</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">1d</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="2">OC</span><span className="ui-win__who">opencode</span><span className="ui-win__sub">Agent commands and session notes</span><span className="ui-win__st" data-st>Pinned</span><span className="ui-win__age">2d</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="3">AM</span><span className="ui-win__who">api-migrations</span><span className="ui-win__sub">Safe schema change steps</span><span className="ui-win__st is-you" data-st>Draft</span><span className="ui-win__age">2d</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="4">RN</span><span className="ui-win__who">release-notes</span><span className="ui-win__sub">Notes drafted from merged work</span><span className="ui-win__st is-done" data-st>Archived</span><span className="ui-win__age">5d</span></li>
                    <li className="ui-win__row" data-row><span className="ui-avatar" data-tone="5">CS</span><span className="ui-win__who">commit-style</span><span className="ui-win__sub">The message format the repo follows</span><span className="ui-win__st is-done" data-st>Archived</span><span className="ui-win__age">6d</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="app__pane app__pane--open" data-ui-loop>
            <div className="ui ui-doc" data-ui="doc">
              <article className="ui-doc__page">
                <div className="ui-doc__label">SKILL.md, draft 2</div>
                <div className="ui-doc__title">code-review, v3</div>
                <div className="ui-doc__text">Review every commit on the branch <mark className="ui-doc__mark is-on">before you answer</mark>. Read the diff, then the files the diff touches.</div>
                <div className="ui-doc__text">Never propose a rewrite without a test that fails first. <mark className="ui-doc__mark" data-kind="Pin" data-msg="Pinned by acme-web and platform, v3." data-where="Team library, updated today">Name the rule you applied</mark> and the file you found it in.</div>
                <div className="ui-doc__text">One finding per commit is enough. Keep patches small: a review that proposes three changes ships none.</div>
                <div className="ui-doc__text">When the diff touches auth or billing, ask for a second reviewer before you answer.</div>
                <div className="ui-doc__text">Keep the examples runnable: a rule the agent cannot try is a rule it skips.</div>
                <div className="ui-doc__text">Close the review with the list of files you did not read, so nothing hides.</div>
              </article>
              <aside className="ui-doc__note ui-panel is-on" aria-live="polite">
                <div className="ui-doc__kind"><span className="ui-doc__dot"></span><span data-doc-kind>Pin</span></div>
                <div className="ui-doc__msg" data-doc-msg>Pinned by acme-web and platform, v3.</div>
                <div className="ui-doc__where" data-doc-where>Team library, updated today</div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section g2" id="features" aria-labelledby="features-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="features-h">Keeps every skill pinned, checked and current. <span className="muted">Pins, drift checks, reviews, search.</span></h2>
          </div>
          <div className="grid">
            <article className="card card--row span-6">
              <h3>Logs every agent's serve</h3>
              <p>The log shows which agent took which skill, and which version it got.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="21" data-fx-params='{"drift":0}'>
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ "--fit-max": "380px", "--ax": "32px", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)" } as CSSProperties} data-ui-loop>
                  <div className="ui ui-notify" data-ui="notify">
                    <ul className="ui-notify__list" data-notify-list>
                      <li className="ui-note"><span className="ui-agent ui-note__av" aria-hidden="true"></span><span className="ui-note__text"><span className="ui-note__title">opencode · code-review v3<time>now</time></span><span className="ui-note__body">acme-web, two commits reviewed</span></span><span className="ui-btn ui-btn--sm ui-note__btn">Open</span></li>
                      <li className="ui-note"><span className="ui-agent ui-note__av" aria-hidden="true"></span><span className="ui-note__text"><span className="ui-note__title">opencode · taste-skill v2<time>4m</time></span><span className="ui-note__body">Landing page, checked in the build</span></span></li>
                      <li className="ui-note"><span className="ui-note__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg></span><span className="ui-note__text"><span className="ui-note__title">9 serves today<time>12m</time></span><span className="ui-note__body">None fell back to a draft</span></span></li>
                    </ul>
                  </div>
                </div></div>
              </div>
            </article>
            <article className="card card--row span-6">
              <h3>Pins every skill version</h3>
              <p>The version a project pins is the version it gets, until someone moves the pin.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="34" data-fx-params='{"drift":0}'>
                <div className="stage stage--fade-b"><div className="at-right to-edge" style={{ "--ax": "32px", "--ay": "56px" } as CSSProperties}>
                  <div className="ui ui-panel ui-toggles" data-ui="toggles">
                    <div className="ui-head">
                      <svg className="ui-icon ui-toggles__ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" /><path d="m5.8 8 1.6 1.6 3-3.2" /></svg>
                      <div className="ui-title">What agents may fetch</div>
                      <span className="ui-spacer"></span>
                      <div className="ui-meta" data-tg-count>3 of 4 on</div>
                    </div>
                    <ul className="ui-toggles__list">
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Pinned versions only</span><span className="ui-tg__sub">No draft serves without a flag</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Pinned versions only"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Auto-update pins</span><span className="ui-tg__sub">A new version asks first</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Auto-update pins"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Share with the team</span><span className="ui-tg__sub">One library, every project</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Share with the team"><i></i></button></li>
                      <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Serve logs kept</span><span className="ui-tg__sub">90 days, then gone</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Serve logs kept"><i></i></button></li>
                    </ul>
                  </div>
                </div></div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid">
            <article className="card card--row span-6">
              <h3>Reviews a skill before a pin</h3>
              <p>A changed skill passes its steps before it serves; the diff is one page.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="55" data-fx-params='{"drift":0}'>
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ "--fit-max": "340px", "--ax": "32px", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)" } as CSSProperties}>
                  <div className="ui ui-panel ui-checks" data-ui="checklist">
                    <div className="ui-checks__head">
                      <div className="ui-title">Review checklist</div>
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
            <article className="card card--row span-6">
              <h3>Finds the right skill</h3>
              <p>Search by name, trade or tool; the pinned copy comes first.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="89" data-fx-params='{"drift":0}'>
                <div className="stage stage--fade-b"><div className="at-rise fit to-edge" style={{ "--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)" } as CSSProperties}>
                  <div className="ui ui-panel ui-search" data-ui="search">
                    <div className="ui-search__field">
                      <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
                      <span className="ui-search__q"><span data-search-q>code review</span><i className="ui-search__caret"></i></span>
                      <kbd className="ui-search__kbd">Ctrl K</kbd>
                    </div>
                    <div className="ui-search__group">Skills</div>
                    <ul className="ui-search__list" data-search-list>
                      <li className="ui-search__row is-sel"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t"><b>code-review</b> v3, pinned</span><span className="ui-search__m">v3</span></li>
                      <li className="ui-search__row"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t"><b>review</b>-checklist</span><span className="ui-search__m">v1</span></li>
                      <li className="ui-search__row"><span className="ui-search__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z" /><path d="M9 2.5v3h3" /></svg></span><span className="ui-search__t">commit-style, the <b>review</b> format</span><span className="ui-search__m">v2</span></li>
                    </ul>
                    <div className="ui-search__foot"><span><kbd>↑</kbd><kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to open</span></div>
                  </div>
                </div></div>
              </div>
            </article>
          </div>
      </div>
    </section>
  );
}

function Cli() {
  return (
    <section className="section ground-inverse" id="cli" aria-labelledby="cli-h" data-moment="iris-opens" data-moment-opts={'{"from": "base"}'}>
      <div className="wrap">
        <div className="grid">
          <div className="span-5 cli-text">
            <h2 id="cli-h">Pin a skill from the terminal.</h2>
            <p className="t-lead">An agent asks, Skillfell serves the pinned copy. One command moves every project to the new version.</p>
            <div className="cli-facts">
              <p>skillfell pin code-review v3</p>
              <p>skillfell serve --agent opencode</p>
              <p>One pin, every project that follows it</p>
            </div>
            <a className="link" href="#product">See the whole library</a>
          </div>
          <div className="frame frame--split span-6 start-7">
            <div className="stage stage--fade-br">
              <div className="at-rise fit" style={{ "--fit-max": "560px", "--ax": "32px", "--ay": "40px" } as CSSProperties}>
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
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="pricing-h">Pricing. <span className="muted" data-assumed>Free while the beta runs.</span></h2>
        </div>
        <div className="grid">
          <article className="card plan span-4">
            <div className="plan__name">Free</div>
            <div className="plan__price" data-monthly="€0" data-yearly="€0" data-assumed>€0<small>per month</small></div>
            <p className="plan__for">For one developer.</p>
            <p className="plan__bill">No card.</p>
            <a className="plan__btn" href={MAILTO}>Start free</a>
            <ul className="plan__list"><li>Every skill you write</li><li>Unlimited skills</li><li>Manual drift checks</li><li>Community skills</li><li>opencode support</li></ul>
          </article>
          <article className="card plan is-featured span-4">
            <div className="plan__name">Pro <span className="plan__badge">Most popular</span></div>
            <div className="plan__price" data-monthly="€12" data-yearly="€10" data-assumed>€12<small>per month</small></div>
            <p className="plan__for">For daily agent work.</p>
            <p className="plan__bill">€10 a month billed yearly.</p>
            <a className="plan__btn plan__btn--primary" href={MAILTO + "?subject=Pro%20plan"}>Start Pro</a>
            <ul className="plan__list"><li>Everything in Free</li><li>90-day version history</li><li>Drift checks every push</li><li>Shared skill packs</li><li>Search across repos</li></ul>
          </article>
          <article className="card plan span-4">
            <div className="plan__name">Team</div>
            <div className="plan__price" data-monthly="€29" data-yearly="€24" data-assumed>€29<small>per month</small></div>
            <p className="plan__for">For teams on one library.</p>
            <p className="plan__bill">€24 a month billed yearly.</p>
            <a className="plan__btn" href={MAILTO + "?subject=Team%20plan"}>Start Team</a>
            <ul className="plan__list"><li>Everything in Pro</li><li>Unlimited history</li><li>Shared pins</li><li>Review roles</li><li>Priority support</li></ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items: Array<[string, string]> = [
    ["Which agents does it work with?", "opencode today. More adapters come next, and every one serves the same pinned copy."],
    ["Does it replace AGENTS.md?", "No. Your agent's own instructions stay put; Skillfell only decides which skill copy a serve gets."],
    ["Where the skill files live", "Plain files in your repo, nothing hidden: read them, diff them, commit them like any other source."],
    ["Can a team share one library?", "Yes. Team pins from one shared library, so every member serves the same version."],
    ["What a Skillfell plan costs", "Free in the beta; Pro €12 and Team €29 a month after, or €10 and €24 billed yearly."],
  ];
  return (
    <section className="section bg-dusk" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5">
            <h2 id="faq-h">Questions</h2>
            <a className="link" href={MAILTO}>Write to hello@skillfell.example</a>
          </div>
          <div className="faq span-6 start-7">
            {items.map(([q, a]) => (
              <div className="faq__item" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <SiteNav home />
      <main id="top">
        <Hero />
        <Product />
        <Features />
        <Cli />
        <Pricing />
        <Faq />
      </main>
      <SiteFooter home />
    </>
  );
}
