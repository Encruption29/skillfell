/*
  The notes' shared hero (Phase C): the quiet statement the posts and the blog hub open on. The
  facts are reading facts (topic, length, reference), never dates or a byline — the notes are a
  small library, not a feed.
*/

import type { ReactNode } from "react";

export type NoteFact = [ReactNode, ReactNode];

export function NoteHero({ id, kicker, h1, lead, primary, secondary, facts, ground }: {
  id: string;
  kicker?: string;
  h1: string;
  lead: ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  facts: NoteFact[];
  ground?: string;
}) {
  return (
    <section className={`hero hero--statement${ground ? ` ${ground}` : ""}`} data-enter aria-labelledby={id}>
      <div className="wrap"><div className="hero-text hero__in">
        <div>
          {kicker ? <p className="hero__kicker">{kicker}</p> : null}
          <h1 id={id}>{h1}</h1>
          <p className="hero__lead">{lead}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={primary.href}>{primary.label}</a>
            {secondary ? <a className="btn btn--secondary" href={secondary.href}>{secondary.label}</a> : null}
          </div>
        </div>
        <dl className="hero__facts">
          {facts.map(([dt, dd], i) => <div key={i}><dt>{dt}</dt><dd>{dd}</dd></div>)}
        </dl>
      </div></div>
    </section>
  );
}
