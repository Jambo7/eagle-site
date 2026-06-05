import type { Metadata } from "next";
import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";

/**
 * /how-to-access  ,  step-by-step guide for linking a supported
 * exchange UID and unlocking CLAW Pro v2 for free.
 *
 * Linked from the floating "How to Access" button that sits over the
 * Claw Pro v2 dual-monitor lockup in the homepage hero.
 *
 * Partner / referral URLs are owned by Eagle AI Labs and supplied by
 * James. Do not change without him. ApeX uses an in-app referral-code
 * entry path (code `7007`) which is also valid for users with a
 * pre-existing ApeX account; MEXC and Binance use signup-time referral
 * links and don't support retroactive reassignment without going
 * through the exchange's support flow.
 */

export const metadata: Metadata = {
  title: "How to Access CLAW Pro v2 Free | Eagle AI Labs",
  description:
    "Step-by-step guide to unlocking the full CLAW Pro v2 trading terminal for free by signing up to a supported exchange (MEXC, ApeX, Binance) under the Eagle affiliate and linking your UID. Blofin coming soon.",
};

/**
 * Source of truth for every Eagle partner link + ApeX in-app code.
 * Used by the chooser strip and each per-exchange walkthrough so a
 * URL change here propagates everywhere on the page.
 */
const PARTNER = {
  apex: {
    url: "https://join.omni.apex.exchange/AFF-7007",
    code: "7007",
  },
  binance: {
    url: "https://www.binance.com/register?ref=1215009841",
    refId: "1215009841",
  },
  mexc: {
    url: "https://www.mexc.com/en-GB/acquisition/custom-sign-up?shareCode=mexc-3yGzh",
    shareCode: "mexc-3yGzh",
  },
} as const;

const SUPPORTED_EXCHANGES: ReadonlyArray<{
  slug: string;
  name: string;
  status: "live" | "coming-soon";
  tier: string;
  /** One-liner shown in the exchange chooser strip */
  blurb: string;
  /** Path to a brand logo under /public/exchanges (omit for coming-soon) */
  logo?: string;
}> = [
  {
    slug: "apex",
    name: "ApeX",
    status: "live",
    tier: "Tier 01",
    blurb: "Decentralised perps. Existing accounts can self-bind with code 7007.",
    logo: "/exchanges/apex.png",
  },
  {
    slug: "mexc",
    name: "MEXC",
    status: "live",
    tier: "Tier 02",
    blurb: "Largest centralised partner. Spot + futures UIDs supported.",
    logo: "/exchanges/mexc.png",
  },
  {
    slug: "binance",
    name: "Binance",
    status: "live",
    tier: "Tier 03",
    blurb: "Spot + futures UIDs supported via Binance Affiliate.",
    logo: "/exchanges/binance.png",
  },
  {
    slug: "blofin",
    name: "Blofin",
    status: "coming-soon",
    tier: "Tier 04",
    blurb: "Integration in final review; opens once partner pipeline ships.",
  },
];

export default function HowToAccessPage() {
  return (
    <main className="hta-page">
      <canvas id="bg-canvas" />

      {/* ── Navbar ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/products">Claw</a></li>
            <li><a href="/solutions">AI Solutions</a></li>
            <li><a href="/how-to-access" aria-current="page">How to Access</a></li>
            <li><a href="/blog">Community</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-ghost">Sign In</a>
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Get Started</a>
          </div>
          <button className="nav-burger" id="nav-burger" aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <MobileNavDrawer active="how-to-access" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-hero">
        <div className="hta-hero-inner">
          <div className="hta-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">HOW TO ACCESS</span>
          </div>

          <h1 className="hta-hero-title">
            How to unlock the full<br />
            <span className="hta-hero-title-accent">CLAW Pro v2 terminal for free.</span>
          </h1>

          <p className="hta-hero-sub">
            CLAW Pro v2 is free when you sign up to a supported exchange
            under Eagle&apos;s affiliate and link your UID. Pick your
            exchange below, follow the three-step walkthrough, and
            we&apos;ll verify and approve your access automatically.
          </p>

          <div className="hta-hero-cta-row">
            <a
              href="https://app.eagleailabs.com/auth/login"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Open CLAW account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#exchange-walkthroughs" className="btn btn-outline btn-lg">
              Skip to walkthroughs
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          AT-A-GLANCE  ·  three steps everyone follows
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-overview">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">AT A GLANCE</div>
            <h2 className="cs-section-title">
              Three steps. Roughly five minutes.
            </h2>
            <p className="cs-section-lead">
              Whichever exchange you choose, the shape of the process is
              the same. Detailed per-exchange walkthroughs are below.
            </p>
          </div>

          <ol className="hta-steps">
            <li className="hta-step">
              <span className="hta-step-num cs-mono">01</span>
              <div>
                <h3>Open the exchange via the Eagle partner link</h3>
                <p>
                  Click your exchange&apos;s partner link below, then
                  create a new account. The link tags your new UID
                  against the Eagle affiliate &mdash; that&apos;s what
                  unlocks the free terminal.
                </p>
                <p className="hta-step-note">
                  <strong>Already on ApeX?</strong> You don&apos;t need a
                  new account. Open ApeX and add referral code{" "}
                  <span className="cs-mono hta-inline-code">7007</span>{" "}
                  in the in-app Referral section to bind your existing
                  UID to Eagle.
                </p>
              </div>
            </li>
            <li className="hta-step">
              <span className="hta-step-num cs-mono">02</span>
              <div>
                <h3>Find your UID on the exchange</h3>
                <p>
                  Once your account is live, copy your <strong>UID</strong>{" "}
                  from the exchange. The exact menu path is different
                  per exchange &mdash; jump to your exchange&apos;s
                  walkthrough below for the precise steps.
                </p>
              </div>
            </li>
            <li className="hta-step">
              <span className="hta-step-num cs-mono">03</span>
              <div>
                <h3>Enter your UID into CLAW</h3>
                <p>
                  Paste your UID into CLAW at account creation, or any
                  time afterwards from{" "}
                  <span className="cs-mono">Account &rarr; Linked Exchanges</span>{" "}
                  in the terminal. Our team verifies the UID against the
                  affiliate, and access is approved automatically.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          EXCHANGE CHOOSER STRIP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-chooser" id="exchange-walkthroughs">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">PICK YOUR EXCHANGE</div>
            <h2 className="cs-section-title">
              Detailed walkthroughs by exchange.
            </h2>
            <p className="cs-section-lead">
              Tap an exchange to jump straight to its UID-linking guide.
            </p>
          </div>

          <div className="hta-chooser-grid">
            {SUPPORTED_EXCHANGES.map((ex) => (
              <a
                key={ex.slug}
                href={`#exchange-${ex.slug}`}
                className={`hta-chooser-card hta-chooser-card-${ex.status}`}
              >
                <div className="hta-chooser-top">
                  <span className="hta-chooser-tier cs-mono">{ex.tier}</span>
                  <span
                    className={`hta-chooser-status hta-chooser-status-${ex.status}`}
                  >
                    {ex.status === "live" ? "Live" : "Coming soon"}
                  </span>
                </div>
                {ex.logo ? (
                  <div className={`hta-logo-chip hta-logo-chip-${ex.slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ex.logo} alt={`${ex.name} logo`} />
                  </div>
                ) : (
                  <div className="hta-logo-chip hta-logo-chip-placeholder" aria-hidden="true">
                    <span className="cs-mono">{ex.name}</span>
                  </div>
                )}
                <div className="hta-chooser-name">{ex.name}</div>
                <p className="hta-chooser-blurb">{ex.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PER-EXCHANGE WALKTHROUGHS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-walkthroughs">
        <div className="section-wrap cs-tight-wrap">
          {/* ── ApeX ────────────────────────────────────────────────── */}
          <article className="hta-exchange" id="exchange-apex">
            <header className="hta-exchange-head hta-exchange-head-grid">
              <div className="hta-logo-chip hta-logo-chip-apex hta-logo-chip-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/exchanges/apex.png" alt="ApeX logo" />
              </div>
              <div className="hta-exchange-head-body">
                <span className="hta-exchange-tier cs-mono">TIER 01 &middot; LIVE</span>
                <h2 className="hta-exchange-name">ApeX</h2>
                <p className="hta-exchange-lead">
                  ApeX is Eagle&apos;s headline partner. Decentralised
                  perps, in-app self-binding for existing accounts via
                  referral code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.apex.code}</span>,
                  and the AutoTrade leaderboard inside CLAW Pro v2 is
                  powered directly by ApeX UIDs.
                </p>
                <div className="hta-exchange-partner">
                  <span className="hta-exchange-partner-label cs-mono">PARTNER LINK</span>
                  <a
                    href={PARTNER.apex.url}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary hta-exchange-partner-btn"
                  >
                    Sign up to ApeX via Eagle
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </header>

            <ol className="hta-exchange-steps">
              <li>
                <h4>Open ApeX through the Eagle link</h4>
                <p>
                  Click the partner link above and connect your wallet.
                  ApeX Omni walks you through the rest of account
                  setup &mdash; no email, no KYC. Your new ApeX UID is
                  tagged with referral code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.apex.code}</span>{" "}
                  automatically.
                </p>
                <p className="hta-step-note">
                  <strong>Already on ApeX?</strong> Open the ApeX app
                  and head to{" "}
                  <span className="cs-mono">
                    Profile &rarr; Referral
                  </span>{" "}
                  (or search &quot;Referral&quot; from the menu). Enter
                  code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.apex.code}</span>{" "}
                  and confirm. Your existing UID is now bound to Eagle.
                </p>
              </li>
              <li>
                <h4>Find your ApeX UID</h4>
                <p>
                  In the ApeX Omni app open{" "}
                  <span className="cs-mono">
                    Profile &rarr; Account Info
                  </span>{" "}
                  and copy the <span className="cs-mono">UID</span>{" "}
                  value (also labelled <span className="cs-mono">Account ID</span>{" "}
                  in some places).
                </p>
              </li>
              <li>
                <h4>Enter the UID in CLAW</h4>
                <p>
                  Paste your ApeX UID into the field shown when you
                  create your CLAW account, or any time afterwards via{" "}
                  <span className="cs-mono">
                    Account &rarr; Linked Exchanges &rarr; ApeX
                  </span>
                  . Once our team confirms code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.apex.code}</span>{" "}
                  is bound to your UID, access is approved.
                </p>
              </li>
            </ol>
          </article>

          {/* ── MEXC ────────────────────────────────────────────────── */}
          <article className="hta-exchange" id="exchange-mexc">
            <header className="hta-exchange-head hta-exchange-head-grid">
              <div className="hta-logo-chip hta-logo-chip-mexc hta-logo-chip-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/exchanges/mexc.png" alt="MEXC logo" />
              </div>
              <div className="hta-exchange-head-body">
                <span className="hta-exchange-tier cs-mono">TIER 02 &middot; LIVE</span>
                <h2 className="hta-exchange-name">MEXC</h2>
                <p className="hta-exchange-lead">
                  MEXC is Eagle&apos;s largest centralised partner.
                  Spot, futures and margin UIDs are all supported. New
                  MEXC accounts created through the Eagle partner link
                  are auto-tagged with share code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.mexc.shareCode}</span>{" "}
                  &mdash; that&apos;s the tag we verify against.
                </p>
                <div className="hta-exchange-partner">
                  <span className="hta-exchange-partner-label cs-mono">PARTNER LINK</span>
                  <a
                    href={PARTNER.mexc.url}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary hta-exchange-partner-btn"
                  >
                    Sign up to MEXC via Eagle
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </header>

            <ol className="hta-exchange-steps">
              <li>
                <h4>Sign up to MEXC via the Eagle link</h4>
                <p>
                  Open the partner link above and complete MEXC&apos;s
                  email + KYC flow as normal. On the final signup screen
                  you&apos;ll see the share code{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.mexc.shareCode}</span>{" "}
                  pre-filled &mdash; leave it as-is.
                </p>
              </li>
              <li>
                <h4>Find your MEXC UID</h4>
                <p>
                  Log into MEXC and hover your profile icon in the
                  top-right corner. Your{" "}
                  <span className="cs-mono">UID</span> appears directly
                  under your nickname / email &mdash; it&apos;s a 9-10
                  digit numeric string. Click to copy.
                </p>
                <p>
                  Alternative path:{" "}
                  <span className="cs-mono">
                    Profile &rarr; Personal Information &rarr; UID
                  </span>
                  .
                </p>
              </li>
              <li>
                <h4>Enter the UID in CLAW</h4>
                <p>
                  Paste the UID into the field shown when you create
                  your CLAW account. Already signed up? Open{" "}
                  <span className="cs-mono">
                    Account &rarr; Linked Exchanges &rarr; MEXC
                  </span>{" "}
                  in the terminal, paste your UID, and hit Verify.
                  Access is approved automatically once we confirm the
                  affiliate tag.
                </p>
              </li>
            </ol>

            <aside className="hta-exchange-aside">
              <h4>Already have a MEXC account?</h4>
              <ul>
                <li>
                  MEXC doesn&apos;t allow self-service affiliate
                  reassignment. Email MEXC support with the line
                  &quot;Affiliate reassignment to share code{" "}
                  <span className="cs-mono">{PARTNER.mexc.shareCode}</span>
                  &quot; and your UID; they typically action it within
                  a few business days.
                </li>
                <li>
                  Easiest alternative: create a fresh MEXC account via
                  the Eagle link above and use that UID instead.
                </li>
              </ul>
            </aside>
          </article>

          {/* ── Binance ─────────────────────────────────────────────── */}
          <article className="hta-exchange" id="exchange-binance">
            <header className="hta-exchange-head hta-exchange-head-grid">
              <div className="hta-logo-chip hta-logo-chip-binance hta-logo-chip-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/exchanges/binance.png" alt="Binance logo" />
              </div>
              <div className="hta-exchange-head-body">
                <span className="hta-exchange-tier cs-mono">TIER 03 &middot; LIVE</span>
                <h2 className="hta-exchange-name">Binance</h2>
                <p className="hta-exchange-lead">
                  Binance spot and futures UIDs are both supported via
                  the Binance Affiliate programme. The walkthrough is
                  the same for either &mdash; just copy the UID that
                  matches the account flavour you trade with. Binance
                  referral ID for Eagle is{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.binance.refId}</span>.
                </p>
                <div className="hta-exchange-partner">
                  <span className="hta-exchange-partner-label cs-mono">PARTNER LINK</span>
                  <a
                    href={PARTNER.binance.url}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary hta-exchange-partner-btn"
                  >
                    Sign up to Binance via Eagle
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </header>

            <ol className="hta-exchange-steps">
              <li>
                <h4>Sign up to Binance via the Eagle link</h4>
                <p>
                  Open the partner link above and complete Binance&apos;s
                  standard email + identity verification flow. On the
                  signup screen you&apos;ll see referral ID{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.binance.refId}</span>{" "}
                  pre-filled &mdash; leave it as-is.
                </p>
              </li>
              <li>
                <h4>Find your Binance UID</h4>
                <p>
                  On any Binance page, hover your profile icon in the
                  top-right. Your <span className="cs-mono">UID</span>{" "}
                  appears immediately under your email &mdash; it&apos;s
                  a 9-digit numeric. Click to copy.
                </p>
                <p>
                  Alternative path:{" "}
                  <span className="cs-mono">
                    User Center &rarr; Account &rarr; Identification
                  </span>
                  .
                </p>
              </li>
              <li>
                <h4>Enter the UID in CLAW</h4>
                <p>
                  Paste your Binance UID into the field shown when you
                  create your CLAW account, or any time afterwards via{" "}
                  <span className="cs-mono">
                    Account &rarr; Linked Exchanges &rarr; Binance
                  </span>
                  . Once we verify referral ID{" "}
                  <span className="cs-mono hta-inline-code">{PARTNER.binance.refId}</span>{" "}
                  is bound to your UID, access is approved.
                </p>
              </li>
            </ol>

            <aside className="hta-exchange-aside">
              <h4>Already have a Binance account?</h4>
              <p>
                Binance only tags affiliate IDs at the moment of account
                creation and doesn&apos;t support retroactive
                reassignment. The cleanest path is to create a fresh{" "}
                <strong>sub-account</strong> under your existing Binance
                login using the partner link above, then link that
                sub-account&apos;s UID. Alternatively, sign up to MEXC
                or ApeX instead &mdash; any one supported UID unlocks
                CLAW Pro v2.
              </p>
            </aside>
          </article>

          {/* ── Blofin (coming soon) ────────────────────────────────── */}
          <article className="hta-exchange hta-exchange-coming" id="exchange-blofin">
            <header className="hta-exchange-head">
              <span className="hta-exchange-tier cs-mono">TIER 04 &middot; COMING SOON</span>
              <h2 className="hta-exchange-name">Blofin</h2>
              <p className="hta-exchange-lead">
                Blofin is in the final stage of partner integration. As
                soon as the UID-linking endpoint ships, this section
                will switch from &quot;coming soon&quot; to a full
                walkthrough identical to the live exchanges above.
              </p>
            </header>

            <div className="hta-exchange-waitlist">
              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-outline"
                target="_blank"
                rel="noopener"
              >
                Notify me when Blofin opens
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TROUBLESHOOTING / FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-faq">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">TROUBLESHOOTING</div>
            <h2 className="cs-section-title">
              Common questions on UID linking.
            </h2>
          </div>

          <div className="hta-faq-grid">
            <div className="hta-faq-card">
              <h4>My UID won&apos;t verify</h4>
              <p>
                99% of the time this is a mismatched affiliate tag
                &mdash; the account exists but isn&apos;t flagged
                against the Eagle affiliate. See the per-exchange
                &quot;already have an account?&quot; notes above for
                the fix for your exchange.
              </p>
            </div>
            <div className="hta-faq-card">
              <h4>I trade on multiple exchanges</h4>
              <p>
                You only need <strong>one</strong> supported UID to
                unlock CLAW Pro v2. Link as many as you like &mdash;
                one UID per exchange in{" "}
                <span className="cs-mono">Linked Exchanges</span>{" "}
                &mdash; or just one. CLAW stays free as long as at
                least one supported UID is bound to the Eagle affiliate.
              </p>
            </div>
            <div className="hta-faq-card">
              <h4>I already have an ApeX account &mdash; do I need a new one?</h4>
              <p>
                No. ApeX is the only supported exchange where existing
                accounts can self-bind via the in-app{" "}
                <span className="cs-mono">Referral</span> section.
                Enter code{" "}
                <span className="cs-mono hta-inline-code">{PARTNER.apex.code}</span>{" "}
                and your existing UID is good to go.
              </p>
            </div>
            <div className="hta-faq-card">
              <h4>What if I unlink my exchange later?</h4>
              <p>
                If you unlink your last supported UID, Pro v2 stops
                being free for that account &mdash; we&apos;ll prompt
                you to re-link or, if you&apos;d prefer, migrate to an
                Enterprise agreement. Your watchlists, alerts and
                history stay intact either way.
              </p>
            </div>
            <div className="hta-faq-card">
              <h4>How long does verification take?</h4>
              <p>
                Usually seconds. Eagle queries the exchange&apos;s
                affiliate API live when you submit your UID, and access
                flips to &quot;approved&quot; automatically as soon as
                the tag is confirmed. If we have to fall back to a
                manual check (rare), allow up to one business day.
              </p>
            </div>
            <div className="hta-faq-card hta-faq-card-support">
              <h4>I need help from a human</h4>
              <p>
                Ask for support in our official Telegram channel
                &mdash; but be aware of scammers impersonating team
                members. The Eagle team will{" "}
                <strong>never DM you first</strong> and will{" "}
                <strong>never ask for sensitive info</strong>.
              </p>
              <div className="hta-faq-card-cta-row">
                <a
                  href="https://t.me/EAGLEAI_OFFICIAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Join Telegram
                </a>
                <a href="/security" className="btn btn-alert btn-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  Beware of Scammers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hta-cta">
        <div className="hta-cta-wrap">
          <h2 className="hta-cta-title">
            Five minutes to free.<br />
            <span className="gradient-text">Open your CLAW account now.</span>
          </h2>
          <div className="hta-cta-btns">
            <a
              href="https://app.eagleailabs.com/auth/login"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/products" className="btn btn-outline btn-lg">
              Explore the CLAW Suite
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
