/*
  /contact — the one address (Phase C). Dealt hero: statement (NoteHero) with the reply fact marked
  assumed. Section one says what to write and opens the mail app; the draft beside it shows the three
  fields a useful message has. Section two is what happens next, with the FAQ, docs and privacy links.
  The address itself is never printed: the button fills it, so no stand-in address sits on the page.
*/

import type { Metadata } from "next";
import { MAILTO, arrow, SiteFooter, SiteNav } from "../site-chrome";
import { NoteHero } from "../blog/note-hero";

export const metadata: Metadata = {
  title: "Skillfell: contact",
  description:
    "Early access, a bug, a security report or a question — one address, one reply within a day. The button opens your mail app; there is no form.",
};

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <NoteHero
          id="hero-h"
          h1="Contact Skillfell."
          lead={<>Early access, a bug, a security report or a question — one address, and a person reads it. The reply comes within a day.</>}
          primary={{ href: MAILTO, label: "Write to Skillfell" }}
          secondary={{ href: "#message", label: "What to include" }}
          facts={[
            ["Reply", <span key="r" data-assumed>1 day</span>],
            ["Best for", "Access, bugs, security"],
            ["Form", "None — a mail app"],
            ["Address", "Filled by the button"],
          ]}
        />

        <section className="section" id="message" aria-labelledby="write-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="write-h">One address, three subjects.</h2>
              <p className="t-lead">The subject line is the sorting hat. Say which of these it is, and the reply comes with the right next step.</p>
              <ul className="rows">
                <li><span className="rows__name">Early access<small>What you build, the agent you use, and the skills you keep — a sentence each is enough</small></span><span className="rows__value">Access</span></li>
                <li><span className="rows__name">A bug<small>What you ran, what you expected, and the log line if a serve was involved</small></span><span className="rows__value">Bug</span></li>
                <li><span className="rows__name">Security<small>The smallest reproduction; we fix first and tell you after</small></span><span className="rows__value">Report</span></li>
              </ul>
              <a className="btn btn--primary" href={MAILTO}>Write to Skillfell{arrow}</a>
              <p className="muted">The button opens your mail app with the address filled in — nothing is posted from this page, and there is no form to fill.</p>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="A draft in a mail app, addressed to Skillfell: the subject early access for acme-web, three lines about the team's library, and a request for a seat">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · draft</span>
                  <span className="sp"></span>
                  <span>new message</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 3.5h10v9H2zM2 4l5 4 5-4" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="sf-mail">
                    <div className="sf-mail__field"><span className="sf-mail__k">To</span><span className="sf-mail__v">Skillfell</span></div>
                    <div className="sf-mail__field"><span className="sf-mail__k">Subject</span><span className="sf-mail__v">Early access — acme-web</span></div>
                    <div className="sf-mail__body">
                      <p>We keep five skills across four repos. The agent is opencode. The one we argue about is code-review.</p>
                      <p>Could we have a seat for the team?</p>
                      <p>— Acme web team</p>
                    </div>
                  </div>
                  <p className="sf-plans__note">A draft, not a form: the page hands the address to your mail app, and the reply comes to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="after" aria-labelledby="after-h">
          <div className="wrap grid">
            <div className="span-5 stack-4">
              <h2 id="after-h">Three steps, one reply.</h2>
              <p className="t-lead">No ticket number, no autoresponder. The reply carries what you asked for, and then the thread stays in your inbox.</p>
              <ul className="rows">
                <li><span className="rows__name">You write<small>One email from an address we can reply to</small></span><span className="rows__value">1</span></li>
                <li><span className="rows__name">We read it that day<small>Access, bugs and security reports, in the order they arrive</small></span><span className="rows__value">1 day</span></li>
                <li><span className="rows__name">The reply<small>The next step, the fix or the question we need answered — no form letter</small></span><span className="rows__value">Reply</span></li>
              </ul>
              <div className="btn-row">
                <a className="link" href="/#faq">The FAQ</a>
                <a className="link" href="/docs">The docs</a>
                <a className="link" href="/privacy">Privacy</a>
              </div>
            </div>
            <div className="span-6 start-7">
              <div className="d-win sf-mini" data-ui="" role="img" aria-label="The reply log: an early-access request answered, a bug reply asking for the log line, and a security report fixed first and told after">
                <div className="d-win__bar" aria-hidden="true">
                  <span className="d-win__dots"><i></i><i></i><i></i></span>
                  <span><b>skillfell</b> · replies</span>
                  <span className="sp"></span>
                  <span>within a day</span>
                  <svg className="d-win__glyph" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 9h3l2-5 2 7 2-3h3" /></svg>
                </div>
                <div className="d-win__body" aria-hidden="true">
                  <div className="d-rows">
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="1">EA</span><div><b>Early access</b><small>acme-web, opencode, five skills</small></div><span className="sf-pinrow__v">1 day</span><span className="d-chip">Answered</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="2">BG</span><div><b>A bug</b><small>The serve log line, attached</small></div><span className="sf-pinrow__v">1 day</span><span className="d-chip">Asked</span></div>
                    <div className="d-row sf-pinrow"><span className="sf-av" data-tone="4">SEC</span><div><b>Security</b><small>Fixed first, told after</small></div><span className="sf-pinrow__v">fixed</span><span className="d-chip">Closed</span></div>
                  </div>
                  <p className="sf-plans__note">One address, one thread per request — answered within a day.</p>
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
