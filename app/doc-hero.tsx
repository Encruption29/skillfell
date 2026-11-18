/*
  The docs articles' shared hero (Phase B): the dealt "collage" hero — text on the left five
  columns, the article's own window on the lit pale-lime ground on the right six, cut by the
  frame's right edge, with the result card over its lower-left corner stepping through its three
  lines (data-ly-steps). The lit ground and the palette are the landing's own fluted-glass colours,
  so the docs read as one site. Each article passes its window's rows and its note card.
*/

import type { ReactNode } from "react";

export type DocHeroProps = {
  id: string;
  h1: string;
  lead: ReactNode;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  proof: string;
  artLabel: string;
  bar: ReactNode;
  barMeta: string;
  window: ReactNode;
  note: ReactNode;
};

export function DocHero({ id, h1, lead, primary, secondary, proof, artLabel, bar, barMeta, window: win, note }: DocHeroProps) {
  return (
    <section className="hero hero--collage" data-enter aria-labelledby={id}>
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          <h1 id={id}>{h1}</h1>
          <p className="hero__lead">{lead}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={primary.href}>{primary.label}</a>
            <a className="btn btn--secondary" href={secondary.href}>{secondary.label}</a>
          </div>
          <p className="hero__proof">{proof}</p>
        </div>
        <div className="hero__art span-6 start-7" data-diagram="collage" role="img" aria-label={artLabel}>
          <div className="ly-piece ly-piece--main d-win" aria-hidden="true">
            <div className="d-win__bar">
              <span className="d-win__dots"><i></i><i></i><i></i></span>
              <span>{bar}</span>
              <span className="sp"></span>
              <span>{barMeta}</span>
              <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
            </div>
            <div className="d-win__body">{win}</div>
          </div>
          <div className="ly-piece ly-piece--note d-card" aria-hidden="true" data-ly-steps="700">{note}</div>
        </div>
      </div></div>
    </section>
  );
}
