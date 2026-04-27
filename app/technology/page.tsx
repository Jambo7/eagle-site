import DataFlowDiagram from "../components/data-flow-diagram";
import MobileNavDrawer from "../components/mobile-nav-drawer";

export default function TechnologyPage() {
  return (
    <main className="tech-page">
      <canvas id="bg-canvas" />

      {/* ── Navbar ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/technology" style={{ color: 'var(--mid)' }}>Technology</a></li>
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

      <MobileNavDrawer active="technology" />

      {/* ── Back button ── */}
      <div className="tp-back-bar">
        <div className="tp-back-inner">
          <a href="/" className="tp-back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Eagle AI Labs
          </a>
        </div>
      </div>

      {/* ── Hero — same content as homepage technology section ── */}
      <section id="technology" className="tp-hero">
        <div className="tech-energy" aria-hidden="true">
          <div className="tech-orb tech-orb1" />
          <div className="tech-orb tech-orb2" />
          <div className="tech-orb tech-orb3" />
        </div>
        <div className="section-wrap tp-section-wrap">
          <div className="tech-layout">
            <div className="tech-text">
              <div className="section-eyebrow reveal">Technology</div>
              <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}>
                Eagle AI Labs<br />
                <span className="gradient-text">Technology</span>
              </h1>
              <p className="reveal" style={{ color: 'var(--text-2)', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
                For over two years, Eagle AI Labs has operated at the frontier of predictive
                market intelligence. Our models have been battle-tested across bull runs, bear
                markets, and high-volatility regimes — continuously adapting and compounding edge.
              </p>

              <div className="tech-stats-grid">
                <div className="tsg-item reveal">
                  <div className="tsg-val gradient-text">2+ Years</div>
                  <div className="tsg-label">Operational Track Record</div>
                </div>
                <div className="tsg-item reveal">
                  <div className="tsg-val gradient-text">500M+</div>
                  <div className="tsg-label">Data Points Daily</div>
                </div>
                <div className="tsg-item reveal">
                  <div className="tsg-val gradient-text">15+</div>
                  <div className="tsg-label">Model Architectures</div>
                </div>
                <div className="tsg-item reveal">
                  <div className="tsg-val gradient-text">24 / 7</div>
                  <div className="tsg-label">Continuous Operation</div>
                </div>
              </div>
            </div>

            <div className="tech-visual reveal">
              <DataFlowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ── Forward Curves ── */}
      <section className="tp-fc-section">
        <div className="tech-energy" aria-hidden="true">
          <div className="tech-orb tech-orb1" />
          <div className="tech-orb tech-orb2" />
          <div className="tech-orb tech-orb3" />
        </div>

        {/* Intro — full width */}
        <div className="section-wrap tp-section-wrap">
          <div className="tp-fc-intro reveal">
            <div className="section-eyebrow">Forward Curves</div>
            <h2 className="section-title">
              AI Forward Curve<br />
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="tp-fc-lead">Institutional strategy. Rebuilt for digital assets.</p>
            <p className="tp-fc-body">
              Forward curves sit at the core of global derivatives markets — driving trillions
              in positioning, pricing, and risk management. Yet in crypto, this layer of
              intelligence has remained fragmented, reactive, and largely inaccessible.
            </p>
            <p className="tp-fc-body tp-fc-callout">Eagle AI Labs changes that.</p>
            <p className="tp-fc-body">
              We bring institutional-grade forward curve infrastructure to digital assets,
              powered by a predictive AI stack designed to model, track, and anticipate
              price evolution across time.
            </p>
          </div>
        </div>

        {/* Terminal preview + "What Makes Our Forward Curves Different" — split */}
        <div className="section-wrap tp-section-wrap">
          <div className="tp-fc-split reveal">
            <div className="tp-fc-visual">
              <figure className="fc-wrap fc-wrap--screenshot" style={{ margin: 0 }}>
                <img
                  src="/technology-btc-forward-curve.png"
                  alt="BTC forward curve chart with candles, prediction lines, and spread matrix in the Eagle AI Labs terminal"
                  className="fc-screenshot-img"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>

            <div className="tp-fc-details">
              <h3 className="tp-fc-h3">What Makes Our Forward Curves Different</h3>
              <p className="tp-fc-sub">Traditional forward curves are static. Ours are alive.</p>
              <p className="tp-fc-body">
                Built on proprietary AI models, Eagle AI Labs forward curves are generated
                and continuously refined using real-time market data, enabling:
              </p>
              <ul className="tp-fc-list">
                <li><span className="tp-fc-bullet" />Short-term forward projections <em>(1H–24H tenors)</em> grounded in live predictive signals</li>
                <li><span className="tp-fc-bullet" />Dynamic spread matrices that highlight divergence and relative value across time horizons</li>
                <li><span className="tp-fc-bullet" />Curve vs reality tracking — measure accuracy and model drift in real time</li>
                <li><span className="tp-fc-bullet" />Stabilised projection logic, reducing noise and increasing signal reliability</li>
              </ul>
              <p className="tp-fc-closing">
                This is not just a visualisation layer.<br />
                It is a predictive framework for understanding market structure before it unfolds.
              </p>
            </div>
          </div>
        </div>

        {/* Powered by AI + Relative Value — two columns */}
        <div className="section-wrap tp-section-wrap">
          <div className="tp-fc-two-col reveal">
            <div className="tp-fc-col-card">
              <div className="section-eyebrow" style={{ marginBottom: '16px' }}>Powered by Predictive AI Infrastructure</div>
              <p className="tp-fc-body">
                At the core of our forward curve system is a continuously evolving AI pipeline.
                Our models analyse multi-dimensional market data to:
              </p>
              <ul className="tp-fc-list">
                <li><span className="tp-fc-bullet" />Forecast price trajectories across multiple time horizons</li>
                <li><span className="tp-fc-bullet" />Detect structural shifts in volatility and liquidity</li>
                <li><span className="tp-fc-bullet" />Identify where pricing inefficiencies emerge across the curve</li>
              </ul>
              <p className="tp-fc-closing">
                This allows us to move beyond reactive analytics and into forward-looking intelligence
                — where curves are not derived from markets alone, but predicted ahead of them.
              </p>
            </div>
            <div className="tp-fc-col-card">
              <div className="section-eyebrow" style={{ marginBottom: '16px' }}>From Directional Trading to Relative Value</div>
              <p className="tp-fc-body">
                Forward curves unlock a different way to trade. Instead of guessing direction, users can:
              </p>
              <ul className="tp-fc-list">
                <li><span className="tp-fc-bullet" />Identify curve steepening and flattening</li>
                <li><span className="tp-fc-bullet" />Monitor spread differentials across tenors</li>
                <li><span className="tp-fc-bullet" />Trade relative value opportunities, not just price</li>
              </ul>
              <p className="tp-fc-closing">
                This is how institutional desks operate.<br />
                Now it&apos;s available in digital assets.
              </p>
            </div>
          </div>
        </div>

        {/* Built for Traders + Risk Managers */}
        <div className="section-wrap tp-section-wrap">
          <div className="tp-fc-user-grid reveal">
            <div className="tp-fc-user-card">
              <div className="tp-fc-user-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="tp-u1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M3 3V21H21" stroke="url(#tp-u1)" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M7 16L11 10L15 13L20 6" stroke="url(#tp-u1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>For Traders</h4>
              <ul className="tp-fc-user-list">
                <li>Anticipate future price movement with structured context</li>
                <li>Spot inefficiencies across time, not just price</li>
                <li>Trade smarter using curve-driven insights</li>
              </ul>
            </div>
            <div className="tp-fc-user-card">
              <div className="tp-fc-user-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="tp-u2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#tp-u2)" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="url(#tp-u2)" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>For Risk Managers</h4>
              <ul className="tp-fc-user-list">
                <li>Prepare for forward price shifts before they materialise</li>
                <li>Understand stress points across the curve</li>
                <li>Improve margin, hedging, and capital allocation decisions</li>
              </ul>
            </div>
            <div className="tp-fc-user-card tp-fc-user-card-wide">
              <div className="tp-fc-user-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="tp-u3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <circle cx="12" cy="12" r="9" stroke="url(#tp-u3)" strokeWidth="1.6"/>
                  <path d="M12 8V12L15 15" stroke="url(#tp-u3)" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Curve Intelligence, Not Just Data</h4>
              <p>
                Most platforms distribute data. We distribute intelligence. Eagle AI Labs forward
                curves transform raw market inputs into structured, predictive insight — giving
                you a clearer view of what&apos;s coming next and how to position for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="tp-more">
        <div className="section-wrap tp-section-wrap">
          <div className="tp-coming reveal">
            <div className="section-eyebrow">Access the Infrastructure</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>
              Intelligence You Can<br /><span className="gradient-text">Act On</span>
            </h2>
            <p>The same forward curve and predictive signal infrastructure used by institutional partners — available to every serious trader via Eagle AI Labs.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
                className="btn btn-primary"
                target="_blank" rel="noopener noreferrer"
              >
                Try Eagle AI Free
              </a>
              <a href="/#sample-signal" className="btn btn-outline">View Example Signals</a>
              {/* TODO: swap mailto for calendar booking URL (Calendly / cal.com) once provisioned */}
              <a href="mailto:hello@eagleailabs.com?subject=Book%20a%20Demo%20%E2%80%94%20Eagle%20AI%20Labs" className="btn btn-ghost">Book a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
