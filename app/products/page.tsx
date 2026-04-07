import HeroIphoneMockup from "../components/hero-iphone-mockup";
import MobileNavDrawer from "../components/mobile-nav-drawer";

export default function ProductsPage() {
  return (
    <main className="products-page">
      <canvas id="bg-canvas" />

      {/* ── Navbar ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/products" style={{ color: 'var(--mid)' }}>Products</a></li>
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

      <MobileNavDrawer active="products" />

      {/* ── Hero Banner — split layout ── */}
      <section className="prod-banner">
        {/* Left — copy */}
        <div className="prod-banner-left">
          <div className="prod-b-energy" aria-hidden="true">
            <div className="prod-b-orb prod-b-orb1" />
            <div className="prod-b-orb prod-b-orb2" />
          </div>
          <div className="prod-banner-content">
            <a href="/" className="tp-back-btn prod-back-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Eagle AI Labs
            </a>
            <div className="prod-top-badges">
              <span className="prod-badge-pill">Eagle AI Labs</span>
              <span className="prod-badge-pill prod-badge-live">
                <span className="live-blink" />
                AI-Powered Products
              </span>
            </div>
            <h1 className="prod-banner-title">
              Precision Tools.<br />
              <span className="gradient-text">For Every Trader.</span>
            </h1>
            <p className="prod-banner-sub">
              Three products. One predictive engine. Whether you want the full institutional
              terminal, AI-guided simplicity, or complete model intelligence — Eagle AI Labs
              has your edge, whatever your level.
            </p>
            <div className="prod-banner-stats">
              <div className="prod-bstat">
                <span className="prod-bstat-val">10+</span>
                <span className="prod-bstat-label">AI Models Live</span>
              </div>
              <div className="prod-bstat-sep" />
              <div className="prod-bstat">
                <span className="prod-bstat-val">200+</span>
                <span className="prod-bstat-label">Pairs Active</span>
              </div>
              <div className="prod-bstat-sep" />
              <div className="prod-bstat">
                <span className="prod-bstat-val">24/7</span>
                <span className="prod-bstat-label">Signal Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — 3D chart photo */}
        <div className="prod-banner-right">
          <div className="prod-chart-3d-wrap">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1000&q=85&fit=crop"
              alt="Live trading charts"
              className="prod-chart-img"
            />
          </div>
          <div className="prod-chart-overlay" />
          {/* Floating signal chips */}
          <div className="prod-sig-chip prod-sig-chip-1">
            <span className="prod-sig-dir prod-sig-long">▲ LONG</span>
            <span className="prod-sig-pair">BTC/USD</span>
            <span className="prod-sig-conf">87%</span>
          </div>
          <div className="prod-sig-chip prod-sig-chip-2">
            <span className="prod-sig-dir prod-sig-long">▲ LONG</span>
            <span className="prod-sig-pair">ETH/USD</span>
            <span className="prod-sig-conf">81%</span>
          </div>
          <div className="prod-sig-chip prod-sig-chip-3">
            <span className="prod-sig-dir prod-sig-short">▼ SHORT</span>
            <span className="prod-sig-pair">SOL/USD</span>
            <span className="prod-sig-conf">73%</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT 1 — CLAW PRO
      ══════════════════════════════════════════ */}
      <section className="prod-section" id="claw">
        <div className="section-wrap prod-section-inner">
          {/* Left — copy */}
          <div className="prod-copy reveal">
            <div className="prod-badge">FLAGSHIP TERMINAL</div>
            <h2 className="prod-title prod-title--claw-pro">
              <span className="gradient-text">CLAW</span>
              <span className="prod-title-pro">Pro</span>
            </h2>
            <p className="prod-subtitle">The Institutional Terminal</p>
            <p className="prod-desc">
              CLAW is the full-spectrum trading terminal built for serious edge. Every layer of
              Eagle AI Labs' predictive infrastructure is surfaced here — raw signals, model
              confidence, order flow analytics, and live heatmaps — all in one professional interface.
            </p>
            <ul className="prod-features">
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="url(#cg1)" strokeWidth="1.4"/>
                    <path d="M5 10.5L8.5 14L15 7" stroke="url(#cg1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs><linearGradient id="cg1" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                AI directional signals across 10 major pairs, 4 timeframes
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="12" width="3" height="6" rx="1" fill="url(#cg2)"/>
                    <rect x="7" y="8" width="3" height="10" rx="1" fill="url(#cg2)" opacity="0.7"/>
                    <rect x="12" y="4" width="3" height="14" rx="1" fill="url(#cg2)" opacity="0.5"/>
                    <path d="M3.5 11L8.5 6.5L13.5 9L18 4" stroke="url(#cg2)" strokeWidth="1.4" strokeLinecap="round"/>
                    <defs><linearGradient id="cg2" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Multi-timeframe charts with integrated signal overlays
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="7" height="7" rx="1.5" fill="url(#cg3)" opacity="0.9"/>
                    <rect x="11" y="2" width="7" height="7" rx="1.5" fill="url(#cg3)" opacity="0.5"/>
                    <rect x="2" y="11" width="7" height="7" rx="1.5" fill="url(#cg3)" opacity="0.5"/>
                    <rect x="11" y="11" width="7" height="7" rx="1.5" fill="url(#cg3)" opacity="0.3"/>
                    <defs><linearGradient id="cg3" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Market heatmaps — visualise momentum and correlation at a glance
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="url(#cg4)" strokeWidth="1.3" strokeDasharray="3 2"/>
                    <circle cx="10" cy="10" r="3" fill="url(#cg4)"/>
                    <defs><linearGradient id="cg4" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Order flow analytics — see what's moving inside each candle
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="url(#cg5)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="10" cy="10" r="4" stroke="url(#cg5)" strokeWidth="1.3"/>
                    <defs><linearGradient id="cg5" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Liquidity scanners — automated detection of high-probability setups
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3 7h14M3 10h10M3 13h6" stroke="url(#cg6)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="16" cy="13" r="3" stroke="url(#cg6)" strokeWidth="1.3"/>
                    <defs><linearGradient id="cg6" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Custom alert builder — set thresholds on any AI signal
              </li>
            </ul>
            <a
              href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
              className="btn btn-primary prod-cta"
            >
              Try CLAW Pro →
            </a>
          </div>

          {/* Right — CLAW Pro product screenshot */}
          <div className="prod-visual prod-visual--claw-pro reveal">
            <figure className="prod-claw-pro-figure">
              <img
                src="/products-claw-pro-dashboard.png"
                alt="CLAW Pro trading terminal with charts, whale activity, prediction, and breakout bot"
                className="prod-claw-pro-img"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT 2 — CLAW STEALTH
      ══════════════════════════════════════════ */}
      <section className="prod-section prod-section-alt" id="claw-stealth">
        <div className="section-wrap prod-section-inner prod-section-inner-rev">
          {/* Left — same iPhone + chart mock as homepage hero */}
          <div className="prod-visual prod-visual--stealth-iphone reveal">
            <HeroIphoneMockup />
          </div>

          {/* Right — copy */}
          <div className="prod-copy reveal">
            <div className="prod-badge prod-badge-stealth">STREAMLINED EDITION</div>
            <h2 className="prod-title">
              CLAW <span className="gradient-text">Stealth</span>
            </h2>
            <p className="prod-subtitle">AI-Powered. Action-Ready.</p>
            <p className="prod-desc">
              All the intelligence of Eagle AI Labs — stripped down, surfaced through AI agents,
              and designed for traders who want serious edge without the complexity. Stealth watches
              the markets for you. You act when it matters.
            </p>
            <ul className="prod-features">
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.68 2 4 4.68 4 8c0 5 6 10 6 10s6-5 6-10c0-3.32-2.68-6-6-6z" fill="url(#stg1)" opacity="0.9"/>
                    <circle cx="10" cy="8" r="2" fill="#0a1628"/>
                    <defs><linearGradient id="stg1" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                AI agents monitor every market 24/7 — you get pinged, not flooded
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M10 5l5 5-5 5" stroke="url(#stg2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs><linearGradient id="stg2" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Clean signal feed — only the highest-confidence, model-verified calls
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 4h12v8H4z" stroke="url(#stg3)" strokeWidth="1.3" rx="1"/>
                    <path d="M8 12v4M12 12v4M6 16h8" stroke="url(#stg3)" strokeWidth="1.3" strokeLinecap="round"/>
                    <defs><linearGradient id="stg3" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Custom alerts — set your conditions from our best-performing models
              </li>
              <li>
                <span className="prod-feat-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="12" rx="2" stroke="url(#stg4)" strokeWidth="1.3"/>
                    <path d="M7 9h6M7 12h4" stroke="url(#stg4)" strokeWidth="1.3" strokeLinecap="round"/>
                    <defs><linearGradient id="stg4" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  </svg>
                </span>
                Beginner-friendly UX — actionable from day one, no learning curve
              </li>
            </ul>
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary prod-cta">
              Try CLAW Stealth →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT 3 — THE ORACLE
      ══════════════════════════════════════════ */}
      <section className="prod-oracle-section" id="oracle">
        {/* Rotating brain canvas */}
        <canvas id="oracle-brain-canvas" className="oracle-brain-canvas" />

        {/* Ambient glow rings */}
        <div className="oracle-glow-ring oracle-ring1" aria-hidden="true" />
        <div className="oracle-glow-ring oracle-ring2" aria-hidden="true" />
        <div className="oracle-glow-ring oracle-ring3" aria-hidden="true" />

        <div className="section-wrap oracle-inner">
          <div className="oracle-top-badge reveal">APEX PRODUCT</div>
          <h2 className="oracle-title reveal">
            The <span className="gradient-text oracle-title-glow">Oracle</span>
          </h2>
          <p className="oracle-tagline reveal">Eagle AI Labs' most powerful intelligence — unified.</p>
          <p className="oracle-desc reveal">
            The Oracle runs every Eagle AI model simultaneously, in real time. It scores each model's
            live performance, tracks market state, and surfaces the highest-conviction signal at any
            given moment. You don't choose a model. The Oracle does.
          </p>

          <div className="oracle-pillars reveal">
            <div className="oracle-pillar">
              <div className="oracle-pillar-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="url(#og1)" strokeWidth="1.2" strokeDasharray="4 2"/>
                  <circle cx="16" cy="16" r="8" stroke="url(#og1)" strokeWidth="1.5"/>
                  <circle cx="16" cy="16" r="3" fill="url(#og1)"/>
                  <defs><linearGradient id="og1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <h4>All Models. Live.</h4>
              <p>Every Eagle AI model runs in parallel, scored against real-time market data at all times.</p>
            </div>
            <div className="oracle-pillar">
              <div className="oracle-pillar-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M4 28L12 16L18 22L24 10L30 4" stroke="url(#og2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="16" r="2.5" fill="url(#og2)"/>
                  <circle cx="24" cy="10" r="2.5" fill="url(#og2)"/>
                  <defs><linearGradient id="og2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <h4>Dynamic Model Selection</h4>
              <p>The Oracle weighs confidence, recent accuracy, and market conditions to identify which model deserves trust — right now.</p>
            </div>
            <div className="oracle-pillar">
              <div className="oracle-pillar-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="20" width="5" height="8" rx="1.5" fill="url(#og3)" opacity="0.5"/>
                  <rect x="12" y="12" width="5" height="16" rx="1.5" fill="url(#og3)" opacity="0.7"/>
                  <rect x="20" y="4" width="5" height="24" rx="1.5" fill="url(#og3)"/>
                  <defs><linearGradient id="og3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <h4>Real-Time Scoring</h4>
              <p>A live performance leaderboard shows which models are winning, how much edge they carry, and when to rotate.</p>
            </div>
            <div className="oracle-pillar">
              <div className="oracle-pillar-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="url(#og4)" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M16 4V28M4 10L28 22M28 10L4 22" stroke="url(#og4)" strokeWidth="0.8" strokeOpacity="0.4"/>
                  <defs><linearGradient id="og4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
              </div>
              <h4>Market State Intelligence</h4>
              <p>The Oracle classifies live market regimes — trending, ranging, volatile — and adjusts which signals it surfaces accordingly.</p>
            </div>
          </div>

          <div className="oracle-consensus-box reveal">
            <div className="oracle-consensus-header">
              <span className="oracle-live-dot" />
              Live Consensus — BTC/USD
            </div>
            <div className="oracle-model-rows">
              {[
                { name: 'CNN-BiLSTM 1H',   dir: 'LONG', conf: 92, best: true  },
                { name: 'Attention 4H',     dir: 'LONG', conf: 87, best: false },
                { name: 'Ensemble 1D',      dir: 'LONG', conf: 83, best: false },
                { name: 'Microstructure 30M', dir: 'LONG', conf: 79, best: false },
              ].map(m => (
                <div key={m.name} className={`oracle-model-row${m.best ? ' oracle-model-best' : ''}`}>
                  <span className="omr-name">{m.name}</span>
                  <span className="omr-dir" style={{ color: '#14fdfd' }}>{m.dir}</span>
                  <div className="omr-bar-wrap">
                    <div className="omr-bar" style={{ width: `${m.conf}%` }} />
                  </div>
                  <span className="omr-conf">{m.conf}%</span>
                  {m.best && <span className="omr-best-badge">BEST</span>}
                </div>
              ))}
            </div>
            <div className="oracle-verdict">
              <span className="oracle-verdict-label">Oracle Verdict</span>
              <span className="oracle-verdict-val gradient-text">STRONG LONG · 4-Model Consensus</span>
            </div>
          </div>

          <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary oracle-cta reveal">
            Access The Oracle →
          </a>
        </div>
      </section>
    </main>
  );
}
