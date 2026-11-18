/*
  /pricing — the plans page (Phase B). Dealt hero: split (text left, the plans window right, the
  beta fact as the float card). The three plans themselves are the landing's own pricing section,
  restated here as the canonical page; the billing questions carry the assumed prices.
  Chrome is the page's own (no home), current nav item: pricing.
*/

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MAILTO, arrow, SiteFooter, SiteNav } from "../site-chrome";

export const metadata: Metadata = {
  title: "Skillfell: pricing",
  description:
    "The plans for the pinned skill library. Free while the beta runs; Pro €12 and Team €29 a month after, or €10 and €24 billed yearly.",
};

function Hero() {
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          <p className="hero__kicker"><span data-assumed>Open beta · every plan free now</span></p>
          <h1 id="hero-h">Pricing for agent libraries</h1>
          <p className="hero__lead" data-assumed>Free while the beta runs. Pro is €12 and Team €29 a month after, or €10 and €24 billed yearly — no card to start.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={MAILTO}>Start free{arrow}</a>
            <a className="btn btn--secondary" href="#plans">Compare the plans</a>
          </div>
        </div>
        <div className="hero__media span-6 start-7" role="img" aria-label="The three Skillfell plans — Free, Pro and Team — with their prices, listed the way the library lists skills">
          <div className="ly-piece d-win" aria-hidden="true">
            <div className="d-win__bar" aria-hidden="true">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span><b>skillfell</b> · plans</span>
              <span className="sp"></span>
              <span data-assumed>Free in the beta</span>
            </div>
            <div className="d-win__body" aria-hidden="true">
              <nav className="d-side">
                <span><i></i>Library</span>
                <span><i></i>Pinned</span>
                <span className="is-on"><i></i>Plans</span>
                <span className="d-side__label">Projects</span>
                <span><i></i>acme-web</span>
              </nav>
              <div className="d-main">
                <div className="d-main__head"><h4>Plans</h4><span className="d-btn">3 of 3 free</span></div>
                <div className="d-rows">
                  <div className="d-row sf-plan"><span className="sf-av" data-tone="1">F</span><div><b>Free</b><small>One developer, every skill they write</small></div><span className="sf-plan__price">€0<small>a month</small></span><span className="d-chip">Now</span></div>
                  <div className="d-row sf-plan"><span className="sf-av" data-tone="2">P</span><div><b>Pro</b><small>Daily agent work, 90-day history</small></div><span className="sf-plan__price">€12<small>a month</small></span><span className="d-chip">Popular</span></div>
                  <div className="d-row sf-plan"><span className="sf-av" data-tone="3">T</span><div><b>Team</b><small>One library for the whole team</small></div><span className="sf-plan__price">€29<small>a month</small></span><span className="d-chip">Beta</span></div>
                </div>
                <p className="sf-plans__note">Yearly billing: €10 and €24 a month. Every plan serves the pinned copies.</p>
              </div>
            </div>
          </div>
          <div className="ly-float" aria-hidden="true">
            <div className="ly-float__row"><span className="ly-live" data-assumed>Open beta</span><span>v0.9</span></div>
            <div className="ly-float__title" data-assumed>Every plan free until the beta ends</div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

function Plans() {
  return (
    <section className="section" id="plans" aria-labelledby="plans-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="plans-h">The plans. <span className="muted" data-assumed>Free while the beta runs.</span></h2>
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

function Billing() {
  const items: Array<[string, ReactNode]> = [
    ["Plans after the beta ends?", <><span data-assumed>Pro and Team bill at the prices above; Free stays €0.</span> Your pins move with you.</>],
    ["Can I switch plans later?", "Any time — the new plan applies from the next serve, and the library never moves."],
    ["Do the plans bill yearly?", <><span data-assumed>Yes: €10 and €24 a month, billed once a year.</span> The yearly price sits on every plan card.</>],
    ["What counts as one project on a plan?", "One repo that pins skills. A pin serves every agent in that repo, and each serve is logged."],
    ["Does the beta plan ask for a card?", <><span data-assumed>No — nothing is charged before the beta ends.</span> Pricing starts when the beta does.</>],
  ];
  return (
    <section className="section bg-dusk" id="billing" aria-labelledby="billing-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5">
            <h2 id="billing-h">Billing the plans. <span className="muted">The beta's end.</span></h2>
            <a className="link" href={MAILTO}>Write to us</a>
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
      <SiteNav current="pricing" />
      <main id="top">
        <Hero />
        <Plans />
        <Billing />
      </main>
      <SiteFooter />
    </>
  );
}
