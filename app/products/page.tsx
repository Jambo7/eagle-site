import EnterpriseContactForm from "../components/enterprise-contact-form";
import HeroIphoneMockup from "../components/hero-iphone-mockup";
import HeroMonitorMockup from "../components/hero-monitor-mockup";
import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";

/**
 * /products, The CLAW Suite.
 *
 * Redesigned as a sophisticated fintech product page rather than a consumer
 * marketing landing page. Three products, one predictive engine:
 *
 *   01 · CLAW Pro        , Desktop trading terminal + mobile companion
 *   02 · CLAW Stealth    , Lightweight iOS / Android app + Ask Claw GPT agent
 *   03 · CLAW Enterprise , The Oracle, full model arsenal, API, SLA
 *
 * Design language: typographic, sharp geometry, restrained gradients, monospace
 * for technical metadata, specification-sheet style section headers. Closer to
 * a Bloomberg/institutional product page than to a SaaS landing.
 */
export default function ProductsPage() {
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
            <li><a href="/products" aria-current="page">Claw</a></li>
            <li><a href="/solutions">AI Solutions</a></li>
            <li><a href="/pricing">Pricing</a></li>
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

      <MobileNavDrawer active="products" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO, typographic, institutional, suite-first
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">THE CLAW SUITE</span>
          </div>

          <h1 className="cs-hero-title">
            Crypto intelligence,<br />
            <span className="cs-hero-title-accent">engineered in three forms.</span>
          </h1>

          <p className="cs-hero-sub">
            One predictive engine. Three distinct surfaces. A professional desktop
            terminal for active traders, a mobile edition with a conversational AI
            agent, and an enterprise deployment built around our multi-model Oracle
            and proprietary research stack.
          </p>

          <nav className="cs-hero-quicknav" aria-label="Products">
            <a href="#claw-pro" className="cs-qn-item">
              <span className="cs-qn-num">01</span>
              <span className="cs-qn-name">CLAW Pro</span>
              <span className="cs-qn-cat">Desktop terminal</span>
            </a>
            <a href="#claw-stealth" className="cs-qn-item">
              <span className="cs-qn-num">02</span>
              <span className="cs-qn-name">CLAW Stealth</span>
              <span className="cs-qn-cat">Mobile + Ask Claw</span>
            </a>
            <a href="#claw-enterprise" className="cs-qn-item">
              <span className="cs-qn-num">03</span>
              <span className="cs-qn-name">CLAW Enterprise</span>
              <span className="cs-qn-cat">Oracle · API · SLA</span>
            </a>
          </nav>

          <div className="cs-hero-rail">
            <div className="cs-rail-item">
              <span className="cs-rail-val">10+</span>
              <span className="cs-rail-label">Production models</span>
            </div>
            <div className="cs-rail-sep" aria-hidden="true" />
            <div className="cs-rail-item">
              <span className="cs-rail-val">200+</span>
              <span className="cs-rail-label">Pairs covered</span>
            </div>
            <div className="cs-rail-sep" aria-hidden="true" />
            <div className="cs-rail-item">
              <span className="cs-rail-val">50<span className="cs-rail-unit">ms</span></span>
              <span className="cs-rail-label">Signal latency</span>
            </div>
            <div className="cs-rail-sep" aria-hidden="true" />
            <div className="cs-rail-item">
              <span className="cs-rail-val">24<span className="cs-rail-unit">/7</span></span>
              <span className="cs-rail-label">Model coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE SUITE, at-a-glance overview grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-suite-overview">
        <div className="section-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">THE SUITE</div>
            <h2 className="cs-section-title">
              Three products, shaped around how you actually work.
            </h2>
          </div>

          <div className="cs-suite-grid">
            {/* Pro */}
            <a href="#claw-pro" className="cs-suite-card">
              <div className="cs-sc-top">
                <span className="cs-sc-tier">Tier 01</span>
                <span className="cs-sc-status cs-sc-status-live">Live</span>
              </div>
              <div className="cs-sc-name">
                CLAW <span className="cs-sc-name-sub">Pro</span>
              </div>
              <p className="cs-sc-tagline">
                The institutional trading terminal for active crypto traders.
              </p>
              <div className="cs-sc-platforms">
                <span className="cs-platform-chip">Desktop</span>
                <span className="cs-platform-chip">iOS companion</span>
                <span className="cs-platform-chip">Android companion</span>
              </div>
              <ul className="cs-sc-bullets">
                <li>Full model surface area, every signal, every timeframe</li>
                <li>Live heatmaps, order flow, liquidity scanners</li>
                <li>Programmable alert engine across all model outputs</li>
              </ul>
              <div className="cs-sc-link">
                Explore CLAW Pro
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>

            {/* Stealth */}
            <a href="#claw-stealth" className="cs-suite-card cs-suite-card--stealth">
              <div className="cs-sc-top">
                <span className="cs-sc-tier">Tier 02</span>
                <span className="cs-sc-status cs-sc-status-live">Live</span>
              </div>
              <div className="cs-sc-name">
                CLAW <span className="cs-sc-name-sub cs-sc-name-sub-stealth">Stealth</span>
              </div>
              <p className="cs-sc-tagline">
                Crypto intelligence in your pocket, with a GPT you can talk to.
              </p>
              <div className="cs-sc-platforms">
                <span className="cs-platform-chip">iOS</span>
                <span className="cs-platform-chip">Android</span>
              </div>
              <ul className="cs-sc-bullets">
                <li>High-conviction signals, surfaced the moment they fire</li>
                <li>Ask Claw, conversational AI for prices, whales, context</li>
                <li>Liquidation heatmaps + live market read in a thumb-tap</li>
              </ul>
              <div className="cs-sc-link">
                Explore CLAW Stealth
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>

            {/* Enterprise */}
            <a href="#claw-enterprise" className="cs-suite-card cs-suite-card--enterprise">
              <div className="cs-sc-top">
                <span className="cs-sc-tier">Tier 03</span>
                <span className="cs-sc-status cs-sc-status-contact">By invitation</span>
              </div>
              <div className="cs-sc-name">
                CLAW <span className="cs-sc-name-sub">Enterprise</span>
              </div>
              <p className="cs-sc-tagline">
                The Oracle, the full model arsenal, shaped to your risk stack.
              </p>
              <div className="cs-sc-platforms">
                <span className="cs-platform-chip">API</span>
                <span className="cs-platform-chip">White-label</span>
                <span className="cs-platform-chip">Bespoke SLA</span>
              </div>
              <ul className="cs-sc-bullets">
                <li>The Oracle, live multi-model consensus engine</li>
                <li>Full arsenal of predictive neural networks + research</li>
                <li>Direct API, data licensing, custom model development</li>
              </ul>
              <div className="cs-sc-link">
                Talk to partnerships
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          01 · CLAW PRO, Desktop terminal + mobile companion
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-product" id="claw-pro">
        <div className="section-wrap">
          <header className="cs-product-header">
            <div className="cs-ph-index">01</div>
            <div className="cs-ph-meta">
              <div className="cs-ph-label">CLAW Pro · Flagship Terminal</div>
              <div className="cs-ph-divider" aria-hidden="true" />
              <div className="cs-ph-platforms">
                <span>Desktop web</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>iOS companion</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>Android companion</span>
              </div>
            </div>
            <div className="cs-ph-badge cs-ph-badge-live">
              <span className="live-blink" /> LIVE
            </div>
          </header>

          <div className="cs-product-body">
            <div className="cs-product-copy reveal">
              <h2 className="cs-product-title">
                <span className="cs-product-title-brand">CLAW</span>
                <span className="cs-product-title-variant">Pro</span>
              </h2>
              <p className="cs-product-lead">
                The full Eagle AI workstation for active crypto traders. Every signal,
                every model output, every timeframe, surfaced in a single professional
                interface with live order flow, heatmaps and a programmable alert engine.
              </p>

              <ul className="cs-feat-list cs-feat-list--r3">
                <li>
                  <span className="cs-feat-num">01</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Full model surface area</div>
                    <div className="cs-feat-desc">Directional signals across every pair and timeframe, with confidence scoring on each call.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">02</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Charts with live overlays</div>
                    <div className="cs-feat-desc">Entries, targets and invalidation levels plotted on TradingView-grade candles.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">03</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Heatmaps &amp; order flow</div>
                    <div className="cs-feat-desc">Momentum, correlation and liquidation heatmaps alongside live order flow.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">04</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Programmable alerts</div>
                    <div className="cs-feat-desc">Set thresholds on any model output, delivered to desktop, mobile and webhook.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">05</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Mobile companion app</div>
                    <div className="cs-feat-desc">Paired iOS/Android companion, watchlists, alerts and model feed, fully synced.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">06</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Whale &amp; on-chain intel</div>
                    <div className="cs-feat-desc">Live wallet flows, exchange reserves and large-position monitoring in one surface.</div>
                  </div>
                </li>
              </ul>

              <div className="cs-product-ctas">
                <a
                  href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
                  className="btn btn-primary cs-cta"
                >
                  Launch CLAW Pro
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#claw-enterprise" className="btn btn-outline cs-cta-secondary">
                  API access for desks
                </a>
              </div>
            </div>

            <div className="cs-product-visual cs-product-visual--pro reveal">
              {/* Floating monitor mockup with the real CLAW Pro terminal
                  at the correct 16:10 aspect ratio (1024×640 source). */}
              <HeroMonitorMockup
                src="/products-claw-pro-monitor.png"
                alt="CLAW Pro trading terminal with charts, whale activity, prediction card and breakout bot"
              />
              <div className="cs-pro-figure-caption">
                <span className="cs-mono">CLAW Pro v2.1</span>
                <span className="cs-caption-sep" aria-hidden="true">·</span>
                <span>Live BTC/USD · 4H model consensus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          02 · CLAW STEALTH, Mobile + Ask Claw GPT agent
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-product cs-product-alt" id="claw-stealth">
        <div className="section-wrap">
          <header className="cs-product-header">
            <div className="cs-ph-index">02</div>
            <div className="cs-ph-meta">
              <div className="cs-ph-label">CLAW Stealth · Mobile Edition</div>
              <div className="cs-ph-divider" aria-hidden="true" />
              <div className="cs-ph-platforms">
                <span>iOS</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>Android</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>Ask Claw GPT agent</span>
              </div>
            </div>
            <div className="cs-ph-badge cs-ph-badge-live">
              <span className="live-blink" /> LIVE
            </div>
          </header>

          <div className="cs-product-body cs-product-body-rev">
            <div className="cs-product-visual cs-product-visual--stealth reveal">
              <HeroIphoneMockup
                ctaHref="https://app.eagleailabs.com/auth/login"
                ctaLabel="Launch CLAW Stealth"
              />
            </div>

            <div className="cs-product-copy reveal">
              <h2 className="cs-product-title">
                <span className="cs-product-title-brand">CLAW</span>
                <span className="cs-product-title-variant cs-product-title-variant-stealth">Stealth</span>
              </h2>
              <p className="cs-product-lead">
                The lightweight mobile edition. Stealth watches every market 24/7 and
                only pings you when a high-conviction signal fires. Paired with Ask Claw
               , a conversational AI agent you can actually talk to about crypto.
              </p>

              {/* Ask Claw, explicit callout, the differentiator */}
              <div className="cs-ask-claw">
                <div className="cs-ac-head">
                  <div className="cs-ac-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2L3 7V13C3 17.5 6.5 21.5 12 22C17.5 21.5 21 17.5 21 13V7L12 2Z" stroke="url(#ac-g)" strokeWidth="1.6" strokeLinejoin="round"/>
                      <path d="M9 11H15M9 14H13" stroke="url(#ac-g)" strokeWidth="1.4" strokeLinecap="round"/>
                      <defs><linearGradient id="ac-g" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                    </svg>
                    Ask Claw · GPT agent
                  </div>
                </div>
                <p className="cs-ac-desc">
                  A domain-trained conversational AI for crypto. Prices, setups, whale
                  activity, liquidation clusters, model read, ask in plain English, get
                  context-aware answers grounded in live Eagle AI data.
                </p>
                <div className="cs-ac-prompts">
                  <span className="cs-ac-prompt">&ldquo;Where&apos;s BTC going this week?&rdquo;</span>
                  <span className="cs-ac-prompt">&ldquo;What&apos;s the whale activity on ETH?&rdquo;</span>
                  <span className="cs-ac-prompt">&ldquo;Give me an entry plan for SOL long&rdquo;</span>
                </div>
              </div>

              <ul className="cs-feat-list cs-feat-list--r2">
                <li>
                  <span className="cs-feat-num">01</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">24/7 agent monitoring</div>
                    <div className="cs-feat-desc">You get pinged, not flooded, only the highest-conviction calls reach the surface.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">02</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Live market read</div>
                    <div className="cs-feat-desc">Trend, risk and sentiment on a single glanceable overview screen.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">03</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Heatmaps &amp; intel feed</div>
                    <div className="cs-feat-desc">BTC, ETH, SOL, XRP liquidation heatmaps plus ranked EAGLEAI Intel.</div>
                  </div>
                </li>
                <li>
                  <span className="cs-feat-num">04</span>
                  <div className="cs-feat-body">
                    <div className="cs-feat-title">Zero learning curve</div>
                    <div className="cs-feat-desc">Actionable from first launch. For traders who don&apos;t watch charts.</div>
                  </div>
                </li>
              </ul>

              <div className="cs-product-ctas">
                <a
                  href="https://app.eagleailabs.com/auth/login"
                  className="btn btn-primary cs-cta"
                >
                  Get CLAW Stealth
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <div className="cs-store-row">
                  <a
                    href="https://www.eagleailabs.com/download/ios"
                    target="_blank"
                    rel="noopener"
                    className="cs-store-chip"
                  >
                    <span className="cs-store-label">Download on</span>
                    <span className="cs-store-name">App Store</span>
                  </a>
                  <a
                    href="https://www.eagleailabs.com/download/android"
                    target="_blank"
                    rel="noopener"
                    className="cs-store-chip"
                  >
                    <span className="cs-store-label">Get it on</span>
                    <span className="cs-store-name">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          03 · CLAW ENTERPRISE, Oracle, arsenal, API, contact form
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-enterprise" id="claw-enterprise">
        {/* Ambient brain canvas + glow rings, the "intelligence" visual */}
        <canvas id="oracle-brain-canvas" className="oracle-brain-canvas" />
        <div className="oracle-glow-ring oracle-ring1" aria-hidden="true" />
        <div className="oracle-glow-ring oracle-ring2" aria-hidden="true" />
        <div className="oracle-glow-ring oracle-ring3" aria-hidden="true" />

        <div className="section-wrap cs-ent-wrap">
          <header className="cs-product-header cs-ent-header">
            <div className="cs-ph-index">03</div>
            <div className="cs-ph-meta">
              <div className="cs-ph-label">CLAW Enterprise · Institutional Deployment</div>
              <div className="cs-ph-divider" aria-hidden="true" />
              <div className="cs-ph-platforms">
                <span>The Oracle</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>REST + WebSocket API</span>
                <span className="cs-ph-platform-sep" aria-hidden="true">·</span>
                <span>Bespoke SLA</span>
              </div>
            </div>
            <div className="cs-ph-badge cs-ph-badge-ent">BY INVITATION</div>
          </header>

          <div className="cs-ent-lede reveal">
            <h2 className="cs-ent-title">
              The full arsenal.
              <br />
              <span className="cs-hero-title-accent">Shaped to your risk stack.</span>
            </h2>
            <p className="cs-ent-sub">
              CLAW Enterprise is how hedge funds, proprietary desks and fintech
              operators integrate Eagle AI. Direct access to the Oracle, every
              production model, our research pipeline, and custom model development,
              delivered under partnership with an institutional SLA.
            </p>
          </div>

          {/* Arsenal, the capabilities grid */}
          <div className="cs-arsenal reveal">
            <div className="cs-arsenal-head">
              <span className="cs-arsenal-eyebrow">THE ARSENAL</span>
              <span className="cs-arsenal-divider" aria-hidden="true" />
              <span className="cs-arsenal-hint">What Enterprise unlocks</span>
            </div>
            <div className="cs-arsenal-grid">
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">01</div>
                <h3 className="cs-ars-title">The Oracle</h3>
                <p className="cs-ars-desc">
                  Our multi-model consensus engine runs every production model against
                  live market data, scores them in real time, and surfaces the single
                  highest-confidence call at any moment.
                </p>
              </div>
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">02</div>
                <h3 className="cs-ars-title">Predictive model library</h3>
                <p className="cs-ars-desc">
                  CNN-BiLSTM, attention networks, microstructure models, ensemble
                  voters, every Eagle AI architecture, queryable by pair, timeframe,
                  regime.
                </p>
              </div>
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">03</div>
                <h3 className="cs-ars-title">REST + WebSocket API</h3>
                <p className="cs-ars-desc">
                  Sub-50ms signal latency. Historical endpoints for backtesting, live
                  streams for execution. Client SDKs for Python, Node and Rust on
                  request.
                </p>
              </div>
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">04</div>
                <h3 className="cs-ars-title">Custom model development</h3>
                <p className="cs-ars-desc">
                  Our research team builds, trains and ships bespoke models against
                  your instruments, objectives and data pipelines, not off-the-shelf.
                </p>
              </div>
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">05</div>
                <h3 className="cs-ars-title">Data licensing</h3>
                <p className="cs-ars-desc">
                  Historical signal archives, confidence distributions and enriched
                  market state classifications, licensed for research and deployment.
                </p>
              </div>
              <div className="cs-arsenal-card">
                <div className="cs-ars-num">06</div>
                <h3 className="cs-ars-title">White-label &amp; partnership</h3>
                <p className="cs-ars-desc">
                  Run CLAW Pro under your brand, or embed Eagle AI intelligence into
                  your own product surface. Includes engineering co-development.
                </p>
              </div>
            </div>
          </div>

          {/* The Oracle, live consensus preview */}
          <div className="cs-oracle-preview reveal">
            <div className="cs-oracle-preview-head">
              <div className="cs-oracle-live">
                <span className="oracle-live-dot" />
                <span className="cs-mono">LIVE</span>
                <span className="cs-oracle-pair">BTC / USD</span>
              </div>
              <div className="cs-oracle-preview-meta">
                <span className="cs-mono">4 models · consensus scored</span>
              </div>
            </div>
            <div className="cs-oracle-rows">
              {[
                { name: 'CNN-BiLSTM',       tf: '1H',  dir: 'LONG', conf: 92, best: true  },
                { name: 'Attention',        tf: '4H',  dir: 'LONG', conf: 87, best: false },
                { name: 'Ensemble',         tf: '1D',  dir: 'LONG', conf: 83, best: false },
                { name: 'Microstructure',   tf: '30M', dir: 'LONG', conf: 79, best: false },
              ].map(m => (
                <div key={m.name} className={`cs-oracle-row${m.best ? ' cs-oracle-row-best' : ''}`}>
                  <span className="cs-or-name">{m.name}</span>
                  <span className="cs-or-tf cs-mono">{m.tf}</span>
                  <span className="cs-or-dir">{m.dir}</span>
                  <div className="cs-or-bar-wrap">
                    <div className="cs-or-bar" style={{ width: `${m.conf}%` }} />
                  </div>
                  <span className="cs-or-conf cs-mono">{m.conf}%</span>
                  {m.best && <span className="cs-or-best">BEST</span>}
                </div>
              ))}
            </div>
            <div className="cs-oracle-verdict">
              <span className="cs-ov-label">ORACLE VERDICT</span>
              <span className="cs-ov-sep" aria-hidden="true" />
              <span className="cs-ov-val">STRONG LONG · 4-Model Consensus</span>
            </div>
          </div>

          {/* Contact form */}
          <div className="cs-contact reveal">
            <div className="cs-contact-head">
              <div className="cs-contact-eyebrow">GET IN TOUCH</div>
              <h3 className="cs-contact-title">
                Partner with Eagle AI Labs.
              </h3>
              <p className="cs-contact-sub">
                Enterprise access is by invitation and scoped to fit your desk. Tell
                us how you want to use CLAW and our partnerships team will be in
                touch within 24 business hours.
              </p>
              <ul className="cs-contact-assurances">
                <li><span className="cs-ca-dot" aria-hidden="true" />Response within 24 business hours</li>
                <li><span className="cs-ca-dot" aria-hidden="true" />NDA available on request</li>
                <li><span className="cs-ca-dot" aria-hidden="true" />Pilot deployments supported</li>
              </ul>
            </div>

            <EnterpriseContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
