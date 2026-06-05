import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import PricingFaq from "../components/pricing-faq";

/**
 * /pricing, CLAW Suite pricing.
 *
 * Three tiers, mapped to the CLAW Suite after the Pro v2 free relaunch:
 *   • Tier 01 · CLAW Pro v2    , now FREE with a linked supported-exchange UID
 *                                (replaces the old Essential + Pro tiers,
 *                                consolidates the full Pro feature surface).
 *   • Tier 02 · CLAW Stealth   , lightweight mobile, coming soon, waitlist.
 *   • Tier 03 · CLAW Enterprise, custom, funds / desks / HFT with SLA + API.
 *
 * The monthly / annual billing toggle is gone because the only paid tier
 * (Enterprise) is custom; Pro v2 is free and Stealth has no charge yet.
 * Design language stays in the CLAW Suite `cs-*` system.
 */
export default function PricingPage() {
  return (
    <main className="claw-suite-page">
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
            <li><a href="/how-to-access">How to Access</a></li>
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

      <MobileNavDrawer active="pricing" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-hero cs-hero-compact">
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">PRICING</span>
          </div>

          <h1 className="cs-hero-title">
            CLAW Pro v2 is now<br />
            <span className="cs-hero-title-accent">completely free.</span>
          </h1>

          <p className="cs-hero-sub">
            We&apos;ve rebuilt the model around how value actually flows.
            The full Pro v2 terminal &mdash; six predictive AI models,
            Ask Claw, blockchain-verified copy trading and the pro
            indicator stack &mdash; is free when you link a supported
            exchange UID. Eagle is paid by the exchange; you keep the
            edge. Stealth ships next on mobile, Enterprise is bespoke.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PLAN CARDS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-pricing-plans">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-plans-grid cs-plans-grid-3">
            {/* ── PRO v2 (FEATURED, NOW FREE) ── */}
            <article className="cs-plan cs-plan-featured" data-plan="pro-v2">
              <div className="cs-plan-ribbon">NOW FREE</div>
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 01</span>
                  <span className="cs-sc-status cs-sc-status-live">Live &middot; Free</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Pro v2</span>
                </h3>
                <div className="cs-plan-price">
                  <span className="cs-plan-price-val">Free</span>
                  <span className="cs-plan-price-unit">now</span>
                  <span className="cs-plan-price-note">
                    With a linked supported-exchange UID
                  </span>
                </div>
                <p className="cs-plan-tagline">
                  The full institutional trading terminal. Every predictive
                  model, Ask Claw agent, blockchain-verified copy trading
                  and the complete pro indicator stack. No card. No trial
                  limits. Eagle is paid by the exchange &mdash; not by you.
                </p>
              </header>

              <div className="cs-plan-includes-label">Linked exchanges</div>
              <div className="cs-plan-exchanges">
                <span className="cs-plan-exch cs-plan-exch-live">MEXC</span>
                <span className="cs-plan-exch cs-plan-exch-live">ApeX</span>
                <span className="cs-plan-exch cs-plan-exch-live">Binance</span>
                <span className="cs-plan-exch cs-plan-exch-coming">Blofin &middot; Soon</span>
              </div>

              <div className="cs-plan-includes-label">What&apos;s included</div>
              <ul className="cs-plan-features">
                <li>Full CLAW Pro v2 desktop terminal</li>
                <li>Six predictive neural-network models (M1 + M2)</li>
                <li>Four algorithmic models with regime analysis</li>
                <li>Ask Claw, conversational AI agent</li>
                <li>Blockchain-verified copy trading</li>
                <li>Liquidation heatmaps &amp; order-flow</li>
                <li>Programmable alert engine, breakout bot</li>
                <li>Whale tracker, social sentiment, coin screener</li>
                <li>CLAW Stealth mobile (when it launches)</li>
              </ul>

              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-primary cs-plan-cta"
              >
                Get started free
              </a>
            </article>

            {/* ── STEALTH (COMING SOON) ── */}
            <article className="cs-plan cs-plan-coming" data-plan="stealth">
              <div className="cs-plan-ribbon cs-plan-ribbon-coming">COMING SOON</div>
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 02</span>
                  <span className="cs-sc-status cs-sc-status-contact">Pre-launch</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Stealth</span>
                </h3>
                <div className="cs-plan-price">
                  <span className="cs-plan-price-val cs-plan-price-val-soft">&ndash;</span>
                  <span className="cs-plan-price-unit">launching shortly</span>
                  <span className="cs-plan-price-note">
                    Lightweight mobile edition of CLAW
                  </span>
                </div>
                <p className="cs-plan-tagline">
                  A mobile-first companion for operators on the move. Quick
                  insight, Ask Claw GPT agent, and live alerts on iOS + Android.
                  Fully synced with your Pro v2 desktop.
                </p>
              </header>

              <div className="cs-plan-includes-label">What&apos;s included at launch</div>
              <ul className="cs-plan-features">
                <li>CLAW Stealth iOS + Android app</li>
                <li>Ask Claw, conversational AI</li>
                <li>Real-time price &amp; news feed</li>
                <li>Push alerts for signals &amp; whales</li>
                <li>Portfolio sync with CLAW Pro v2</li>
              </ul>

              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-outline cs-plan-cta"
              >
                Join the waitlist
              </a>
            </article>

            {/* ── ENTERPRISE ── */}
            <article className="cs-plan" data-plan="enterprise">
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 03</span>
                  <span className="cs-sc-status cs-sc-status-contact">By invitation</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Enterprise</span>
                </h3>
                <div className="cs-plan-price">
                  <span className="cs-plan-price-val">Custom</span>
                  <span className="cs-plan-price-unit">bespoke SLA</span>
                  <span className="cs-plan-price-note">Tailored to your desk</span>
                </div>
                <p className="cs-plan-tagline">
                  For funds, desks and HFT teams. Full-stack access, custom
                  algorithm deployment, dedicated infrastructure and direct
                  API integration under an institutional agreement.
                </p>
              </header>

              <div className="cs-plan-includes-label">Everything in Pro v2, plus</div>
              <ul className="cs-plan-features">
                <li>The Oracle, multi-model consensus</li>
                <li>REST + WebSocket API access</li>
                <li>Unlimited CTC for copy trading</li>
                <li>Custom model development</li>
                <li>White-label deployment</li>
                <li>Dedicated infrastructure</li>
                <li>Data licensing &amp; historical archives</li>
                <li>Named partnership &amp; engineering support</li>
              </ul>

              <a href="/products#claw-enterprise" className="btn btn-outline cs-plan-cta">
                Talk to partnerships
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMPARISON
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-compare">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">COMPARE PLANS</div>
            <h2 className="cs-section-title">
              Feature-by-feature, so you pick the right tier.
            </h2>
          </div>

          <div className="cs-compare-scroll">
            <table className="cs-compare-table cs-compare-table-3">
              <thead>
                <tr>
                  <th className="cs-ct-group" scope="col">
                    <span className="cs-ct-group-label">Features</span>
                  </th>
                  <th scope="col" className="cs-ct-col-featured">
                    <div className="cs-ct-col-name">CLAW Pro v2</div>
                    <div className="cs-ct-col-price">Free<span className="cs-ct-col-unit">now</span></div>
                  </th>
                  <th scope="col">
                    <div className="cs-ct-col-name">Stealth</div>
                    <div className="cs-ct-col-price cs-ct-col-price-soft">Coming soon</div>
                  </th>
                  <th scope="col">
                    <div className="cs-ct-col-name">Enterprise</div>
                    <div className="cs-ct-col-price">Custom</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* PRE-TRADE */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">PRE-TRADE</span></td></tr>
                <CompareRow label="TradingView charts"                          pro stealth ent />
                <CompareRow label="Predictive models (M1 + M2)"                 pro         ent />
                <CompareRow label="Token comparison & dominance"                pro stealth ent />
                <CompareRow label="Mobile, chart only"                          pro stealth ent />
                <CompareRow label="Mobile, full CLAW Stealth"                   pro stealth ent />
                <CompareRow label="Global markets & news"                       pro stealth ent />
                <CompareRow label="Social sentiment"                            pro         ent />
                <CompareRow label="Coin screener"                               pro         ent />
                <CompareRow label="Whale alerts"                                pro         ent />
                <CompareRow label="Economic calendar"                           pro stealth ent />

                {/* TRADE */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">TRADE</span></td></tr>
                <CompareRow label="Paper trading"                               pro stealth ent />
                <CompareRow label="Live trading"                                pro         ent />
                <CompareRow label="Order book"                                  pro stealth ent />
                <CompareRow label="Model confidence"                            pro         ent />
                <CompareRow label="Risk / reward panel"                         pro         ent />
                <CompareRow label="Ask Claw, AI agent"                          pro stealth ent />

                {/* COPY TRADING */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">COPY TRADING</span></td></tr>
                <CompareRow
                  label="Claw Trade Credits (CTC)"
                  proVal="200 / mo"
                  stealthVal="–"
                  entVal="Unlimited"
                />
                <CompareRow label="Copy trading"                                pro stealth ent />
                <CompareRow label="Breakout bot"                                pro         ent />
                <CompareRow label="Breakout bot alerts"                         pro         ent />
                <CompareRow label="Breakout bot, auto-trade"                    pro         ent />

                {/* ADVANCED */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">ADVANCED TRADING</span></td></tr>
                <CompareRow label="Liquidation heatmap"                         pro         ent />
                <CompareRow label="Model performance leaderboard"               pro         ent />
                <CompareRow label="The Oracle, consensus engine"                            ent />
                <CompareRow label="REST + WebSocket API"                                    ent />
                <CompareRow label="Custom model development"                                ent />
                <CompareRow label="White-label deployment"                                  ent />

                {/* LEARN */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">LEARN</span></td></tr>
                <CompareRow label="Lessons & platform walkthroughs"             pro stealth ent />
                <CompareRow label="XP progress & unlockables"                   pro stealth ent />

                {/* ACCOUNT */}
                <tr className="cs-ct-section"><td colSpan={4}><span className="cs-mono">ACCOUNT</span></td></tr>
                <CompareRow label="XP / level / rank system"                    pro stealth ent />
                <CompareRow label="Trading stats"                               pro stealth ent />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-faq-section">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">FREQUENTLY ASKED</div>
            <h2 className="cs-section-title">
              Everything you need to know before you sign up.
            </h2>
          </div>

          <PricingFaq />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* ────────────────────────────────────────────────────────────────
   Compare-row, three columns now (Pro v2, Stealth, Enterprise).
   Pass boolean shorthands for "included"; override cell text with
   `*Val` strings when we need custom copy (e.g. "200 / mo", "Unlimited").
   ──────────────────────────────────────────────────────────────── */
type CompareRowProps = {
  label: string;
  pro?: boolean;
  stealth?: boolean;
  ent?: boolean;
  proVal?: string;
  stealthVal?: string;
  entVal?: string;
};

function CompareRow({
  label,
  pro,
  stealth,
  ent,
  proVal,
  stealthVal,
  entVal,
}: CompareRowProps) {
  return (
    <tr>
      <th scope="row">{label}</th>
      <td className="cs-ct-col-featured">{proVal ?? (pro ? <Check /> : <Dash />)}</td>
      <td>{stealthVal ?? (stealth ? <Check /> : <Dash />)}</td>
      <td>{entVal ?? (ent ? <Check /> : <Dash />)}</td>
    </tr>
  );
}

function Check() {
  return (
    <svg
      className="cs-ct-check"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Included"
    >
      <path
        d="M5 12.5L10 17.5L19 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dash() {
  return <span className="cs-ct-dash" aria-label="Not included">&ndash;</span>;
}
