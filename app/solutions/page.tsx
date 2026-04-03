export default function SolutionsPage() {
  return (
    <main className="sol-page">
      <canvas id="bg-canvas" />

      {/* ── Navbar ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/solutions" style={{ color: 'var(--mid)' }}>Solutions</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/hedge-fund">Live Hedge Fund Trading</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-ghost">Sign In</a>
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Try Now</a>
          </div>
          <button className="nav-burger" id="nav-burger" aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="sol-hero">
        <div className="sol-hero-energy" aria-hidden="true">
          <div className="sol-orb sol-orb1" />
          <div className="sol-orb sol-orb2" />
          <div className="sol-orb sol-orb3" />
        </div>
        <div className="section-wrap sol-hero-inner">
          <a href="/" className="tp-back-btn sol-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Eagle AI Labs
          </a>
          <div className="section-eyebrow reveal">AI Solutions</div>
          <h1 className="sol-hero-title reveal">
            AI That Predicts.<br />
            <span className="gradient-text">For Any Market.</span>
          </h1>
          <p className="sol-hero-sub reveal">
            Eagle AI Labs is not a product company. We are an AI solutions architecture firm.
            Our predictive infrastructure is domain-agnostic — built to model complex systems,
            identify probabilistic outcomes, and deliver conviction signals wherever edge is valued.
          </p>
          <div className="sol-pillars reveal">
            <div className="sol-pillar">
              <div className="sol-pillar-n">2+</div>
              <div className="sol-pillar-l">Years in Production</div>
            </div>
            <div className="sol-pillar-sep" />
            <div className="sol-pillar">
              <div className="sol-pillar-n">NVIDIA</div>
              <div className="sol-pillar-l">DGX Infrastructure</div>
            </div>
            <div className="sol-pillar-sep" />
            <div className="sol-pillar">
              <div className="sol-pillar-n">5+</div>
              <div className="sol-pillar-l">Verticals Modelled</div>
            </div>
            <div className="sol-pillar-sep" />
            <div className="sol-pillar">
              <div className="sol-pillar-n">Live</div>
              <div className="sol-pillar-l">Institutional Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core infrastructure strip ── */}
      <div className="sol-infra-strip">
        <div className="section-wrap">
          <div className="sol-infra-grid">
            <div className="sol-infra-card">
              <div className="sol-infra-icon">
                <svg viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="3" width="9" height="9" rx="2" stroke="url(#ii1)" strokeWidth="1.4"/>
                  <rect x="16" y="3" width="9" height="9" rx="2" stroke="url(#ii1)" strokeWidth="1.4" opacity="0.6"/>
                  <rect x="3" y="16" width="9" height="9" rx="2" stroke="url(#ii1)" strokeWidth="1.4" opacity="0.6"/>
                  <rect x="16" y="16" width="9" height="9" rx="2" stroke="url(#ii1)" strokeWidth="1.4" opacity="0.3"/>
                  <defs><linearGradient id="ii1" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div>
                <div className="sol-infra-title">Modular Architecture</div>
                <div className="sol-infra-desc">Every model we build shares the same underlying infrastructure. New verticals are not new codebases — they are new domains applied to a proven stack.</div>
              </div>
            </div>
            <div className="sol-infra-card">
              <div className="sol-infra-icon">
                <svg viewBox="0 0 28 28" fill="none">
                  <path d="M4 20L10 12L16 16L22 6" stroke="url(#ii2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="12" r="2.5" fill="url(#ii2)"/>
                  <circle cx="22" cy="6" r="2.5" fill="url(#ii2)"/>
                  <defs><linearGradient id="ii2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div>
                <div className="sol-infra-title">Probabilistic Outputs</div>
                <div className="sol-infra-desc">We do not return binary predictions. Every signal carries a directional probability, confidence score, and quality rating — built for decision-making under uncertainty.</div>
              </div>
            </div>
            <div className="sol-infra-card">
              <div className="sol-infra-icon">
                <svg viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="11" stroke="url(#ii3)" strokeWidth="1.3" strokeDasharray="3 2"/>
                  <circle cx="14" cy="14" r="6" stroke="url(#ii3)" strokeWidth="1.5"/>
                  <circle cx="14" cy="14" r="2.5" fill="url(#ii3)"/>
                  <defs><linearGradient id="ii3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div>
                <div className="sol-infra-title">Continuous Retraining</div>
                <div className="sol-infra-desc">Models do not go stale. Automated retraining pipelines keep every vertical current, with validation gates that prevent performance regression before any new checkpoint goes live.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SOLUTION 1 — CRYPTO & DIGITAL ASSETS (flagship)
      ══════════════════════════════════════════ */}
      <section className="sol-section sol-flagship" id="crypto">
        <div className="section-wrap">
          <div className="sol-flagship-inner">
            <div className="sol-section-left reveal">
              <div className="sol-vert-badge sol-badge-active">
                <span className="live-blink" />
                Active &amp; Live
              </div>
              <h2 className="sol-section-title">
                Crypto &amp; Digital Assets
              </h2>
              <p className="sol-section-lead">
                Our flagship vertical. Over two years of live deployment, institutional adoption,
                and continuous model improvement in one of the most complex, fast-moving markets on earth.
              </p>
              <p className="sol-section-body">
                Crypto markets present a unique modelling challenge: 24/7 operation, extreme volatility
                regimes, microstructure-driven price action, and overlapping macro catalysts. Eagle AI Labs
                has built a predictive infrastructure that handles all of it — delivering directional
                probability signals across 10 of the most liquid futures pairs, on four timeframes.
              </p>
              <p className="sol-section-body">
                Our architecture — CNN + Bidirectional LSTM + Self-Attention — is specifically designed
                for sequential, non-stationary time-series data. The result is a model that does not just
                track price; it understands market structure and anticipates it.
              </p>
              <ul className="sol-feat-list">
                <li>Directional probability signals with calibrated confidence scores</li>
                <li>10 liquid futures pairs across 30M, 1H, 4H and Daily timeframes</li>
                <li>Order flow intelligence — 16 microstructure features per candle</li>
                <li>Weekly adaptive retraining on rolling 24-month windows</li>
                <li>Live deployment in a US-regulated CME hedge fund</li>
              </ul>
              <div className="sol-cta-row">
                <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Access Now →</a>
                <a href="mailto:hello@eagleailabs.com?subject=Crypto AI Solutions Enquiry" className="btn btn-ghost">Enquire →</a>
              </div>
            </div>
            <div className="sol-flagship-visual reveal">
              <div className="sol-flagship-stats-card">
                <div className="sfsc-row">
                  <div className="sfsc-stat">
                    <div className="sfsc-val gradient-text">10</div>
                    <div className="sfsc-label">Liquid Pairs</div>
                  </div>
                  <div className="sfsc-stat">
                    <div className="sfsc-val gradient-text">4</div>
                    <div className="sfsc-label">Timeframes</div>
                  </div>
                  <div className="sfsc-stat">
                    <div className="sfsc-val gradient-text">24M</div>
                    <div className="sfsc-label">Training Window</div>
                  </div>
                </div>
                <div className="sfsc-divider" />
                <div className="sfsc-signal-row">
                  {[
                    { pair: 'BTC', dir: 'LONG',  conf: 89, color: '#14fdfd' },
                    { pair: 'ETH', dir: 'LONG',  conf: 81, color: '#14fdfd' },
                    { pair: 'SOL', dir: 'SHORT', conf: 74, color: '#ff4d7a' },
                    { pair: 'XRP', dir: 'LONG',  conf: 85, color: '#14fdfd' },
                    { pair: 'BNB', dir: 'LONG',  conf: 77, color: '#14fdfd' },
                  ].map(s => (
                    <div key={s.pair} className="sfsc-signal">
                      <span className="sfsc-pair">{s.pair}</span>
                      <span className="sfsc-dir" style={{ color: s.color }}>{s.dir}</span>
                      <div className="sfsc-bar-wrap">
                        <div className="sfsc-bar" style={{ width: `${s.conf}%`, background: s.color === '#14fdfd' ? 'linear-gradient(90deg,#1455e6,#14fdfd)' : 'linear-gradient(90deg,#c01,#ff4d7a)' }} />
                      </div>
                      <span className="sfsc-conf">{s.conf}%</span>
                    </div>
                  ))}
                </div>
                <div className="sfsc-footer">
                  <span className="sfsc-live-dot" />
                  Live signal feed — updated every 30 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOLUTIONS GRID — other verticals
      ══════════════════════════════════════════ */}
      <section className="sol-grid-section">
        <div className="section-wrap">
          <div className="sol-grid-header reveal">
            <div className="section-eyebrow">Expanding Verticals</div>
            <h2 className="sol-grid-title">
              The Same Infrastructure.<br />
              <span className="gradient-text">New Domains.</span>
            </h2>
            <p className="sol-grid-sub">
              Eagle AI Labs' architecture is not limited to crypto. Any market with sufficient
              historical data and measurable outcomes is a candidate for our predictive stack.
              Below are the verticals we are actively developing — each available for partnership
              and early-access engagement.
            </p>
          </div>

          <div className="sol-grid">

            {/* Sports */}
            <div className="sol-card reveal">
              <div className="sol-card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="url(#sg1)" strokeWidth="1.4"/>
                  <path d="M20 4C20 4 14 12 14 20s6 16 6 16M20 4c0 0 6 8 6 16s-6 16-6 16M4 20h32" stroke="url(#sg1)" strokeWidth="1.2" strokeOpacity="0.6"/>
                  <path d="M7 11a25 25 0 0 1 26 0M7 29a25 25 0 0 0 26 0" stroke="url(#sg1)" strokeWidth="1.2" strokeOpacity="0.6"/>
                  <defs><linearGradient id="sg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div className="sol-card-badge sol-badge-dev">In Development</div>
              <h3 className="sol-card-title">Sports Outcome Prediction</h3>
              <p className="sol-card-body">
                Sports markets share the same structural challenge as financial markets: bounded
                information, probabilistic outcomes, and behavioural inefficiencies that create
                persistent edge. Eagle AI Labs is building predictive models for match outcomes,
                player performance metrics, and in-play probability shifts — across football, basketball,
                tennis, and American sports.
              </p>
              <p className="sol-card-body">
                Our models process historical performance data, lineup variables, venue factors,
                and contextual market signals to produce calibrated outcome probabilities — designed
                for both trading applications and strategic decision-making.
              </p>
              <ul className="sol-card-list">
                <li>Match outcome and margin prediction models</li>
                <li>Player-level performance probability scoring</li>
                <li>In-play signal generation for live markets</li>
                <li>Edge identification vs. public pricing</li>
              </ul>
              <a href="mailto:hello@eagleailabs.com?subject=Sports AI Solutions Enquiry" className="btn btn-ghost sol-card-cta">Enquire About This Solution →</a>
            </div>

            {/* Gold, Oil, Commodities */}
            <div className="sol-card reveal">
              <div className="sol-card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="6" y="26" width="6" height="10" rx="1.5" fill="url(#cg1)" opacity="0.45"/>
                  <rect x="14" y="18" width="6" height="18" rx="1.5" fill="url(#cg1)" opacity="0.65"/>
                  <rect x="22" y="10" width="6" height="26" rx="1.5" fill="url(#cg1)" opacity="0.85"/>
                  <rect x="30" y="4" width="6" height="32" rx="1.5" fill="url(#cg1)"/>
                  <path d="M6 24L14 16L22 20L30 8" stroke="url(#cg1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs><linearGradient id="cg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div className="sol-card-badge sol-badge-dev">In Development</div>
              <h3 className="sol-card-title">Gold, Oil &amp; Commodities</h3>
              <p className="sol-card-body">
                Commodity markets are macro-driven, sentiment-sensitive, and structurally deep —
                making them ideal for AI-powered directional forecasting. Eagle AI Labs is extending
                its predictive architecture into Gold (XAU/USD), Crude Oil (WTI &amp; Brent),
                Natural Gas, and broader commodity futures.
              </p>
              <p className="sol-card-body">
                Our models incorporate multi-source inputs: technical price series, macroeconomic
                indicators, geopolitical sentiment signals, and supply-demand proxy data — to
                generate forward-looking directional probability outputs across multiple timeframes.
              </p>
              <ul className="sol-card-list">
                <li>Gold, Oil, Natural Gas directional probability signals</li>
                <li>Macro-aware feature engineering and model inputs</li>
                <li>Multi-timeframe signal delivery (intraday to weekly)</li>
                <li>Portfolio-level commodity signal aggregation</li>
              </ul>
              <a href="mailto:hello@eagleailabs.com?subject=Commodities AI Solutions Enquiry" className="btn btn-ghost sol-card-cta">Enquire About This Solution →</a>
            </div>

            {/* FX */}
            <div className="sol-card reveal">
              <div className="sol-card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="14" cy="20" r="10" stroke="url(#fg1)" strokeWidth="1.4"/>
                  <circle cx="26" cy="20" r="10" stroke="url(#fg1)" strokeWidth="1.4" opacity="0.6"/>
                  <path d="M17 13.5a10 10 0 0 1 0 13M23 13.5a10 10 0 0 0 0 13" stroke="url(#fg1)" strokeWidth="1.2" strokeOpacity="0.5"/>
                  <defs><linearGradient id="fg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div className="sol-card-badge sol-badge-dev">In Development</div>
              <h3 className="sol-card-title">FX Markets</h3>
              <p className="sol-card-body">
                Foreign exchange is the largest and most liquid market in the world, yet it
                remains dominated by reactive decision-making. Eagle AI Labs is building
                directional prediction models for major currency pairs — EUR/USD, GBP/USD,
                USD/JPY, and beyond — using the same battle-tested architecture that powers
                our crypto signal engine.
              </p>
              <p className="sol-card-body">
                FX models incorporate central bank rate differentials, macro data releases,
                cross-market liquidity flows, and technical microstructure to produce calibrated
                probability outputs — giving traders a statistical edge over discretionary
                and momentum-based approaches.
              </p>
              <ul className="sol-card-list">
                <li>Major and minor pair directional probability models</li>
                <li>Macro event-aware signal generation</li>
                <li>Cross-pair flow divergence signals</li>
                <li>Session-segmented prediction (London, NY, Asian)</li>
              </ul>
              <a href="mailto:hello@eagleailabs.com?subject=FX AI Solutions Enquiry" className="btn btn-ghost sol-card-cta">Enquire About This Solution →</a>
            </div>

            {/* Prediction Markets */}
            <div className="sol-card reveal">
              <div className="sol-card-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M8 32L20 8L32 32" stroke="url(#pm1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 24h16" stroke="url(#pm1)" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
                  <circle cx="20" cy="8" r="3" fill="url(#pm1)"/>
                  <defs><linearGradient id="pm1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <div className="sol-card-badge sol-badge-dev">In Development</div>
              <h3 className="sol-card-title">Prediction Markets</h3>
              <p className="sol-card-body">
                Prediction markets — covering political elections, economic data releases,
                regulatory decisions, and macro events — represent an emerging frontier for
                AI-driven forecasting. Eagle AI Labs is developing models that aggregate
                structured data, sentiment signals, and base rate analysis to generate
                calibrated probability estimates for binary and multi-outcome events.
              </p>
              <p className="sol-card-body">
                As platforms like Polymarket, Kalshi, and institutional event derivatives
                grow, the demand for rigorous, data-driven probability assessment grows with
                them. Eagle AI Labs provides the infrastructure to compete intelligently.
              </p>
              <ul className="sol-card-list">
                <li>Political and electoral outcome probability models</li>
                <li>Economic data release directional forecasts</li>
                <li>Regulatory and policy decision probability scoring</li>
                <li>Real-time calibration against market-implied probabilities</li>
              </ul>
              <a href="mailto:hello@eagleailabs.com?subject=Prediction Markets AI Enquiry" className="btn btn-ghost sol-card-cta">Enquire About This Solution →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNERSHIP CTA
      ══════════════════════════════════════════ */}
      <section className="sol-cta-section">
        <div className="sol-cta-energy" aria-hidden="true">
          <div className="sol-cta-orb sol-cta-orb1" />
          <div className="sol-cta-orb sol-cta-orb2" />
        </div>
        <div className="section-wrap sol-cta-inner reveal">
          <div className="section-eyebrow">Work With Us</div>
          <h2 className="sol-cta-title">
            Have a market in mind?<br />
            <span className="gradient-text">Let's build the model.</span>
          </h2>
          <p className="sol-cta-body">
            Eagle AI Labs takes on a limited number of new vertical partnerships each year.
            If you have a domain where predictive accuracy creates commercial value,
            we want to hear from you. Bring the market. We'll bring the infrastructure.
          </p>
          <div className="sol-cta-actions">
            <a href="mailto:hello@eagleailabs.com?subject=Solutions Partnership Enquiry" className="btn btn-primary sol-cta-btn">
              Get In Touch →
            </a>
            <a href="/technology" className="btn btn-ghost sol-cta-btn">
              View Our Technology
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
