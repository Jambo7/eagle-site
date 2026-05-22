"use client";

import { useState } from "react";

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "Is CLAW Pro v2 really free?",
    a: (
      <>
        Yes. The full CLAW Pro v2 terminal is completely free when you
        link a supported exchange UID (MEXC, ApeX or Binance today;
        Blofin coming soon). Eagle is paid by the exchange through the
        partner programme, so you keep the edge without a subscription.
      </>
    ),
  },
  {
    q: "What does \"linked exchange UID\" actually mean?",
    a: (
      <>
        When you sign up at app.eagleailabs.com you&apos;ll be asked to
        link the unique ID of your trading account on one of our
        supported exchanges. That link tells the exchange to credit
        Eagle for your activity. Your funds, keys and trade execution
        stay on the exchange &mdash; we never custody anything.
      </>
    ),
  },
  {
    q: "Do I have to deposit or trade a minimum amount?",
    a: (
      <>
        No minimum deposit and no minimum trade volume. Link the UID,
        open the terminal, and use as much or as little as you like.
        There&apos;s no card on file, no trial timer and nothing to
        cancel.
      </>
    ),
  },
  {
    q: "When is CLAW Stealth launching?",
    a: (
      <>
        CLAW Stealth is in final pre-release. Join the waitlist on this
        page and you&apos;ll get first access when it opens on iOS and
        Android. Pro v2 users will be unlocked into Stealth
        automatically at launch &mdash; same account, same UID, no
        extra step.
      </>
    ),
  },
  {
    q: "What markets can I trade on with CLAW?",
    a: (
      <>
        Major crypto assets including BTC, ETH, SOL, XRP and the top 200+
        pairs. New tokens are added continuously based on trader demand
        and liquidity conditions.
      </>
    ),
  },
  {
    q: "Is copy trading included?",
    a: (
      <>
        Yes. Blockchain-verified copy trading is built into Pro v2 and
        powered by Claw Trade Credits (CTC). Pro v2 ships with 200 CTC
        per month at no cost; Enterprise unlocks unlimited CTC under
        the bespoke agreement.
      </>
    ),
  },
  {
    q: "How accurate are the predictive models?",
    a: (
      <>
        Our models are continuously retrained on real-time and historical
        data. Performance varies by regime, but both live and backtested
        results have shown consistent outperformance of baseline
        strategies across BTC, ETH and major pairs.
      </>
    ),
  },
  {
    q: "What happens if I unlink my exchange?",
    a: (
      <>
        If you unlink your supported-exchange UID, Pro v2 stops being
        free for that account &mdash; we&apos;ll prompt you to re-link
        or, if you prefer, migrate to an Enterprise agreement. Your
        watchlists, alerts and history stay intact either way.
      </>
    ),
  },
  {
    q: "Do you offer custom plans for teams or funds?",
    a: (
      <>
        Yes. CLAW Enterprise is built for professional desks and funds,
        custom algorithm deployment, dedicated infrastructure and
        integration engineering are all in scope. Start the conversation
        via the CLAW Enterprise contact form.
      </>
    ),
  },
];

export default function PricingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="cs-faq">
      {FAQS.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={item.q} className={`cs-faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="cs-faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className="cs-faq-q-label">{item.q}</span>
              <span className="cs-faq-q-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className="cs-faq-a" aria-hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
