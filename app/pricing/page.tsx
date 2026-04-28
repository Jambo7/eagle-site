import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import PricingBillingToggle from "../components/pricing-billing-toggle";
import PricingFaq from "../components/pricing-faq";

/**
 * /pricing, CLAW Suite pricing.
 *
 * Four tiers, mapped to the CLAW Suite:
 *   • Stealth    , lightweight mobile, coming soon, no charge yet
 *   • Essential  , $89 / mo, access to CLAW Pro core + predictive models
 *   • Pro        , $149 / mo, full flagship terminal + Ask Claw + Stealth
 *   • Enterprise , Custom, funds / desks / HFT with SLA + API
 *
 * The monthly / annual toggle swaps Pro and Essential prices. Annual
 * saves ~16%. Design language is the CLAW Suite `cs-*` system.
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
            <li><a href="/pricing" aria-current="page">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
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
            Choose the plan<br />
            <span className="cs-hero-title-accent">that scales with you.</span>
          </h1>

          <p className="cs-hero-sub">
            CLAW is built for traders at every level, from independent
            operators testing predictive AI for the first time to funds
            running serious capital. Every plan ships with the same engine.
            Only the surface area changes.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PLAN CARDS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-pricing-plans">
        <div className="section-wrap cs-tight-wrap">
          <PricingBillingToggle />

          <div className="cs-plans-grid cs-plans-grid-4">
            {/* ── STEALTH (COMING SOON) ── */}
            <article className="cs-plan cs-plan-coming" data-plan="stealth">
              <div className="cs-plan-ribbon cs-plan-ribbon-coming">COMING SOON</div>
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 01</span>
                  <span className="cs-sc-status cs-sc-status-contact">Pre-launch</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Stealth</span>
                </h3>
                <div className="cs-plan-price">
                  <span className="cs-plan-price-val cs-plan-price-val-soft">–</span>
                  <span className="cs-plan-price-unit">launching shortly</span>
                  <span className="cs-plan-price-note">
                    Lightweight mobile edition of CLAW
                  </span>
                </div>
                <p className="cs-plan-tagline">
                  A mobile-first companion for operators on the move. Quick
                  insight, Ask Claw GPT agent, and live alerts on iOS + Android.
                </p>
              </header>

              <div className="cs-plan-includes-label">What&apos;s included at launch</div>
              <ul className="cs-plan-features">
                <li>CLAW Stealth iOS + Android app</li>
                <li>Ask Claw, conversational AI</li>
                <li>Real-time price &amp; news feed</li>
                <li>Push alerts for signals &amp; whales</li>
                <li>Portfolio sync with CLAW Pro</li>
              </ul>

              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-outline cs-plan-cta"
              >
                Join the waitlist
              </a>
            </article>

            {/* ── ESSENTIAL ── */}
            <article className="cs-plan" data-plan="essential">
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 02</span>
                  <span className="cs-sc-status cs-sc-status-live">Live</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Essential</span>
                </h3>
                <div className="cs-plan-price">
                  <span
                    className="cs-plan-price-val"
                    data-price-monthly="$89"
                    data-price-annual="$75"
                  >
                    $89
                  </span>
                  <span className="cs-plan-price-unit">/ month</span>
                  <span
                    className="cs-plan-price-note"
                    data-note-monthly="Billed monthly, cancel anytime"
                    data-note-annual="$899 billed annually, save 16%"
                  >
                    Billed monthly, cancel anytime
                  </span>
                </div>
                <p className="cs-plan-tagline">
                  For independent traders who want an edge. Core AI signals,
                  custom watchlists and real-time market insight. No fluff,
                  just the firepower.
                </p>
              </header>

              <div className="cs-plan-includes-label">What&apos;s included</div>
              <ul className="cs-plan-features">
                <li>CLAW Pro desktop terminal (core)</li>
                <li>Predictive AI models (M1)</li>
                <li>100 CTC / month for copy trading</li>
                <li>Social sentiment analytics</li>
                <li>Whale tracker &amp; alerts</li>
                <li>Coin screener &amp; economic calendar</li>
              </ul>

              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-outline cs-plan-cta"
              >
                Start 3-day free trial
              </a>
            </article>

            {/* ── PRO (FEATURED) ── */}
            <article className="cs-plan cs-plan-featured" data-plan="pro">
              <div className="cs-plan-ribbon">MOST POPULAR</div>
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 03</span>
                  <span className="cs-sc-status cs-sc-status-live">Full suite</span>
                </div>
                <h3 className="cs-plan-name">
                  CLAW <span className="cs-plan-name-sub">Pro</span>
                </h3>
                <div className="cs-plan-price">
                  <span
                    className="cs-plan-price-val"
                    data-price-monthly="$149"
                    data-price-annual="$125"
                  >
                    $149
                  </span>
                  <span className="cs-plan-price-unit">/ month</span>
                  <span
                    className="cs-plan-price-note"
                    data-note-monthly="Billed monthly, cancel anytime"
                    data-note-annual="$1,499 billed annually, save 16%"
                  >
                    Billed monthly, cancel anytime
                  </span>
                </div>
                <p className="cs-plan-tagline">
                  The full institutional trading terminal. Every predictive
                  model, Ask Claw agent, advanced analytics and the Stealth
                  mobile edition, one subscription, full suite.
                </p>
              </header>

              <div className="cs-plan-includes-label">Everything in Essential, plus</div>
              <ul className="cs-plan-features">
                <li>Advanced predictive models (M2 + new)</li>
                <li>Ask Claw, conversational AI agent</li>
                <li>Unlocked CLAW Stealth mobile</li>
                <li>Liquidation heatmaps &amp; order-flow</li>
                <li>Programmable alert engine</li>
                <li>Breakout bot with auto-trading</li>
                <li>Model performance leaderboard</li>
                <li>200 CTC / month for copy trading</li>
              </ul>

              <a
                href="https://app.eagleailabs.com/auth/login"
                className="btn btn-primary cs-plan-cta"
              >
                Start 3-day free trial
              </a>
            </article>

            {/* ── ENTERPRISE ── */}
            <article className="cs-plan" data-plan="enterprise">
              <header className="cs-plan-head">
                <div className="cs-sc-top">
                  <span className="cs-sc-tier">Tier 04</span>
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

              <div className="cs-plan-includes-label">Everything in Pro, plus</div>
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
            <table className="cs-compare-table cs-compare-table-4">
              <thead>
                <tr>
                  <th className="cs-ct-group" scope="col">
                    <span className="cs-ct-group-label">Features</span>
                  </th>
                  <th scope="col">
                    <div className="cs-ct-col-name">Stealth</div>
                    <div className="cs-ct-col-price cs-ct-col-price-soft">Coming soon</div>
                  </th>
                  <th scope="col">
                    <div className="cs-ct-col-name">Essential</div>
                    <div className="cs-ct-col-price">$89<span className="cs-ct-col-unit">/mo</span></div>
                  </th>
                  <th scope="col" className="cs-ct-col-featured">
                    <div className="cs-ct-col-name">Pro</div>
                    <div className="cs-ct-col-price">$149<span className="cs-ct-col-unit">/mo</span></div>
                  </th>
                  <th scope="col">
                    <div className="cs-ct-col-name">Enterprise</div>
                    <div className="cs-ct-col-price">Custom</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* PRE-TRADE */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">PRE-TRADE</span></td></tr>
                <CompareRow label="TradingView charts"                         stealth ess pro ent />
                <CompareRow label="Predictive models (M1)"                       ess pro ent />
                <CompareRow label="Predictive models (M2 + new)"                   pro ent />
                <CompareRow label="Token comparison & dominance"              stealth ess pro ent />
                <CompareRow label="Mobile, chart only"                       stealth ess pro ent />
                <CompareRow label="Mobile, full CLAW Stealth"                stealth     pro ent />
                <CompareRow label="Global markets & news"                     stealth ess pro ent />
                <CompareRow label="Social sentiment"                                  ess pro ent />
                <CompareRow label="Coin screener"                                     ess pro ent />
                <CompareRow label="Whale alerts"                                      ess pro ent />
                <CompareRow label="Economic calendar"                         stealth ess pro ent />

                {/* TRADE */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">TRADE</span></td></tr>
                <CompareRow label="Paper trading"                             stealth ess pro ent />
                <CompareRow label="Live trading"                                      ess pro ent />
                <CompareRow label="Order book"                                stealth ess pro ent />
                <CompareRow label="Model confidence"                                  ess pro ent />
                <CompareRow label="Risk / reward panel"                                   pro ent />
                <CompareRow label="Ask Claw, AI agent"                       stealth     pro ent />

                {/* COPY TRADING */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">COPY TRADING</span></td></tr>
                <CompareRow
                  label="Claw Trade Credits (CTC)"
                  stealthVal="–"
                  essVal="100 / mo"
                  proVal="200 / mo"
                  entVal="Unlimited"
                />
                <CompareRow label="Copy trading"                              stealth ess pro ent />
                <CompareRow label="Breakout bot"                                      ess pro ent />
                <CompareRow label="Breakout bot alerts"                               ess pro ent />
                <CompareRow label="Breakout bot, auto-trade"                             pro ent />

                {/* ADVANCED */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">ADVANCED TRADING</span></td></tr>
                <CompareRow label="Liquidation heatmap"                                   pro ent />
                <CompareRow label="Model performance leaderboard"                         pro ent />
                <CompareRow label="The Oracle, consensus engine"                             ent />
                <CompareRow label="REST + WebSocket API"                                      ent />
                <CompareRow label="Custom model development"                                  ent />
                <CompareRow label="White-label deployment"                                    ent />

                {/* LEARN */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">LEARN</span></td></tr>
                <CompareRow label="Lessons & platform walkthroughs"           stealth ess pro ent />
                <CompareRow label="XP progress & unlockables"                 stealth ess pro ent />

                {/* ACCOUNT */}
                <tr className="cs-ct-section"><td colSpan={5}><span className="cs-mono">ACCOUNT</span></td></tr>
                <CompareRow label="XP / level / rank system"                  stealth ess pro ent />
                <CompareRow label="Trading stats"                             stealth ess pro ent />
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
              Everything you need to know before you subscribe.
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
   Compare-row, four columns now (Stealth, Essential, Pro, Enterprise).
   Pass boolean shorthands for "included"; override cell text with
   `*Val` strings when we need custom copy (e.g. "100 / mo", "Unlimited").
   ──────────────────────────────────────────────────────────────── */
type CompareRowProps = {
  label: string;
  stealth?: boolean;
  ess?: boolean;
  pro?: boolean;
  ent?: boolean;
  stealthVal?: string;
  essVal?: string;
  proVal?: string;
  entVal?: string;
};

function CompareRow({
  label,
  stealth,
  ess,
  pro,
  ent,
  stealthVal,
  essVal,
  proVal,
  entVal,
}: CompareRowProps) {
  return (
    <tr>
      <th scope="row">{label}</th>
      <td>{stealthVal ?? (stealth ? <Check /> : <Dash />)}</td>
      <td>{essVal ?? (ess ? <Check /> : <Dash />)}</td>
      <td className="cs-ct-col-featured">{proVal ?? (pro ? <Check /> : <Dash />)}</td>
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
  return <span className="cs-ct-dash" aria-label="Not included">–</span>;
}
