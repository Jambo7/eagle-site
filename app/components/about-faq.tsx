"use client";

import { useState } from "react";

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "What is Eagle AI Labs?",
    a: (
      <>
        Eagle AI Labs is a community-owned ecosystem focused on predictive AI
        infrastructure for digital asset markets. We combine real-time
        analytics, institutional-grade models and the CLAW product suite to
        give traders an edge across crypto markets and beyond.
      </>
    ),
  },
  {
    q: "What does community ownership mean?",
    a: (
      <>
        Contributors, token holders and ecosystem participants play an active
        role in stewarding the platform&apos;s direction. Major initiatives
        and ecosystem decisions are guided through open community
        participation, while predictive AI and CLAW remain the core product
        focus.
      </>
    ),
  },
  {
    q: "What makes Eagle AI different?",
    a: (
      <>
        Precision. Our models are purpose-built for real market conditions,
        trained on quantitative signals and behavioural patterns. CLAW
        delivers that intelligence through a professional terminal and mobile
        companion, backed by a global community of traders and builders.
      </>
    ),
  },
  {
    q: "How can I get involved?",
    a: (
      <>
        Join the community on Telegram, follow updates on X, explore CLAW,
        and contribute as a trader, builder or marketer. The ecosystem is
        designed for open participation at every level.
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
