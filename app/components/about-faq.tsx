"use client";

import { useState } from "react";

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "What is Eagle AI Labs?",
    a: (
      <>
        Eagle AI Labs is a technology company building advanced tools for
        digital-asset traders. We combine predictive AI, real-time analytics
        and institutional-grade UX to give traders an edge across crypto
        markets, and, in the future, beyond.
      </>
    ),
  },
  {
    q: "Why did you start Eagle AI?",
    a: (
      <>
        We saw a gap between the complexity of crypto markets and the quality
        of the tools available. Most platforms were either too simple or too
        slow. We built Eagle AI to close that gap with real intelligence,
        not hype.
      </>
    ),
  },
  {
    q: "What makes Eagle AI different?",
    a: (
      <>
        Precision. Our models are purpose-built for real market conditions,
        trained on both quantitative signals and behavioural patterns. We
        also reward our community directly for engaging, trading, and
        helping improve the system.
      </>
    ),
  },
  {
    q: "What&apos;s your long-term vision?",
    a: (
      <>
        We&apos;re building the Bloomberg Terminal for digital assets, an
        AI-first platform where professional traders, funds and communities
        can analyse, execute and grow. Beyond crypto, we&apos;re exploring how
        our models can power decision-making in sports, macro and other
        high-stakes domains.
      </>
    ),
  },
];

export default function AboutFaq() {
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
