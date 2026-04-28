"use client";

import { useState } from "react";

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "Does Claw offer a free trial?",
    a: (
      <>
        Yes. A 3-day free trial ships with every new Essential or Pro
        account, full access to the predictive models, Ask Claw (Pro
        only) and copy trading, with no commitment.
      </>
    ),
  },
  {
    q: "When is CLAW Stealth launching?",
    a: (
      <>
        CLAW Stealth is in final pre-release. Join the waitlist on this
        page and you&apos;ll get first access when it opens on iOS and
        Android. A Pro subscription unlocks full Stealth features
        automatically at launch.
      </>
    ),
  },
  {
    q: "Can I cancel my plan at any time?",
    a: (
      <>
        Yes. All subscriptions are flexible, cancel any time from your
        dashboard and access remains active until the end of the current
        billing period.
      </>
    ),
  },
  {
    q: "What&apos;s the difference between Essential and Pro?",
    a: (
      <>
        Essential ($89 / mo) gives you the CLAW Pro terminal core,
        predictive models (M1), social sentiment, the whale tracker and
        100 CTC per month for copy trading. Pro ($149 / mo) adds the
        advanced M2+ model suite, Ask Claw, unlocked Stealth mobile,
        liquidation heatmaps, the breakout bot with auto-trading, and
        200 CTC per month.
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
    q: "Is copy trading available on every plan?",
    a: (
      <>
        Yes, copy trading is powered by Claw Trade Credits (CTC). Every
        paid plan includes a monthly CTC allocation that resets on your
        billing date: 100 on Essential, 200 on Pro, unlimited on
        Enterprise.
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
    q: "Can I switch plans later?",
    a: (
      <>
        Yes. Upgrade or downgrade at any time from your dashboard.
        Upgrades take effect immediately; downgrades apply at the start
        of the next billing cycle.
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
