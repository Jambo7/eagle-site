export default function HedgeFundPage() {
  return (
    <main className="hf-page">
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
            <li><a href="/technology">Technology</a></li>
            <li><a href="/hedge-fund" style={{ color: 'var(--mid)' }}>Live Hedge Fund Trading</a></li>
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

      {/* ── Hero Banner — split layout ── */}
      <section className="hf-banner">
        <div className="hf-banner-left">
          <div className="hf-energy">
            <div className="hf-orb hf-orb-1" />
            <div className="hf-orb hf-orb-2" />
          </div>
          <div className="hf-banner-content">
            <div className="hf-top-badges">
              <span className="hf-badge-live">
                <span className="live-blink" />
                Live — CME Bitcoin Futures
              </span>
              <span className="hf-badge">Eagle AI Powered</span>
            </div>
            <img src="/ipc-logo.svg" alt="Infinite Point Capital" className="hf-ipc-logo" />
            <h1 className="hf-hero-title">
              Eagle AI,<br />
              <span className="gradient-text">At Institutional Scale</span>
            </h1>
            <p className="hf-hero-sub">
              Infinite Point Capital — a US-regulated, CFTC-overseen hedge fund —
              chose Eagle AI Labs as its exclusive AI infrastructure partner.
              Deployed on live CME Bitcoin futures. This is what institutional
              confidence in our models looks like.
            </p>
            <div className="hf-banner-stats">
              <div className="hf-bstat">
                <span className="hf-bstat-val">CME</span>
                <span className="hf-bstat-label">Exchange</span>
              </div>
              <div className="hf-bstat-sep" />
              <div className="hf-bstat">
                <span className="hf-bstat-val">CFTC</span>
                <span className="hf-bstat-label">Regulated</span>
              </div>
              <div className="hf-bstat-sep" />
              <div className="hf-bstat">
                <span className="hf-bstat-val">Live</span>
                <span className="hf-bstat-label">Deployed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hf-banner-right">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&fit=crop"
            alt="Institutional building"
            className="hf-building-img"
          />
          <div className="hf-banner-overlay" />
        </div>
      </section>

      {/* ── Independent Validation ── */}
      <section className="hf-section hf-manager-section">
        <div className="section-wrap">
          <div className="hf-manager-wrap reveal">
            <div className="hf-manager-photo-col">
              <div className="hf-photo-frame">
                <div className="hf-photo-glow" />
                <img src="/brad-mcgill.png" alt="Brad McGill" className="hf-photo" />
                <div className="hf-photo-overlay" />
              </div>
            </div>
            <div className="hf-manager-text">
              <div className="section-eyebrow">Independent Validation</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                Brad McGill
              </h2>
              <p className="hf-manager-role">Founder, Infinite Point Capital &mdash; IPC</p>
              <p className="hf-manager-bio">
                Brad McGill is a career institutional markets professional. With decades
                operating across capital markets and quantitative strategy, he understands
                what separates a genuine statistical edge from noise.
              </p>
              <p className="hf-manager-bio">
                After independently discovering Eagle AI Labs&apos; models, Brad ran structured
                performance validation across multiple market regimes. The accuracy,
                confidence calibration, and drawdown profile all passed the institutional
                bar — and led to a significant decision: build a regulated fund around them.
                That is not a marketing claim. That is an institutional operator putting
                capital and regulatory commitment behind what our models produce.
              </p>
              <div className="hf-manager-badges">
                <span className="hf-badge">Independently Validated</span>
                <span className="hf-badge">CFTC-Regulated Vehicle</span>
                <span className="hf-badge">Live Capital Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What the Models Demonstrated ── */}
      <section className="hf-section">
        <div className="section-wrap">
          <div className="section-eyebrow reveal">Model Performance</div>
          <h2 className="section-title reveal">
            What Our Models<br />
            <span className="gradient-text">Demonstrated</span>
          </h2>
          <div className="hf-steps reveal">
            <div className="hf-step">
              <div className="hf-step-num">01</div>
              <h3>Repeatable Edge</h3>
              <p>Directional accuracy held across bull, bear, and ranging markets — not curve-fitted to a single regime. A non-random edge is the hardest thing to find in quantitative finance. Our models have it.</p>
            </div>
            <div className="hf-step">
              <div className="hf-step-num">02</div>
              <h3>Calibrated Confidence</h3>
              <p>When the model signals high confidence, accuracy is materially higher. When it signals uncertainty, it says so. That calibration — rare in AI systems — is what makes the output usable at institutional scale.</p>
            </div>
            <div className="hf-step">
              <div className="hf-step-num">03</div>
              <h3>Institutional Deployment</h3>
              <p>The validation didn&apos;t end in a spreadsheet. A regulated US hedge fund was launched specifically to trade live capital on the back of Eagle AI&apos;s signal output. Results, not projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Eagle AI Delivers ── */}
      <section className="hf-section hf-tech-section">
        <div className="hf-energy">
          <div className="hf-orb hf-orb-1" />
          <div className="hf-orb hf-orb-2" />
        </div>
        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow reveal">The Infrastructure</div>
          <h2 className="section-title reveal">
            What Eagle AI<br />
            <span className="gradient-text">Delivers at Scale</span>
          </h2>
          <div className="hf-tech-grid reveal">
            <div className="hf-tech-card">
              <div className="hf-tech-icon">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <defs><linearGradient id="hf-g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M4 24 C7 22 10 19 13 16 C15 14 16 13 17 12" stroke="url(#hf-g1)" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M17 12 C20 9 23 7 26 5" stroke="#14fdfd" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4,2.5" opacity="0.8"/>
                  <circle cx="17" cy="12" r="2.2" fill="#14b8e8"/>
                </svg>
              </div>
              <h3>Probabilistic Forecasting</h3>
              <p>Not a price target — a directional probability. Across 30m, 1H, 4H, and daily timeframes, every output is a calibrated number a quant or portfolio manager can act on without interpretation.</p>
              <span className="fc-tag">Core Output</span>
            </div>
            <div className="hf-tech-card">
              <div className="hf-tech-icon">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <defs><linearGradient id="hf-g2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <rect x="3" y="4" width="22" height="5" rx="1.5" stroke="url(#hf-g2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="12" width="22" height="5" rx="1.5" stroke="url(#hf-g2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="20" width="22" height="5" rx="1.5" stroke="url(#hf-g2)" strokeWidth="1" opacity="0.5"/>
                  <rect className="feat-infra-fill-1" x="3" y="4" width="22" height="5" rx="1.5" fill="#1455e6"/>
                  <rect className="feat-infra-fill-2" x="3" y="12" width="22" height="5" rx="1.5" fill="#148ae8"/>
                  <rect className="feat-infra-fill-3" x="3" y="20" width="22" height="5" rx="1.5" fill="#14fdfd"/>
                </svg>
              </div>
              <h3>Signal Quality Tiers</h3>
              <p>Every signal carries a three-tier quality rating. Strong signals historically outperform. Uncertain ones say so explicitly. That transparency enables disciplined position sizing — a non-negotiable in institutional risk management.</p>
              <span className="fc-tag">Risk Framework</span>
            </div>
            <div className="hf-tech-card">
              <div className="hf-tech-icon">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <defs><linearGradient id="hf-g3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <circle cx="14" cy="14" r="9" stroke="#1455e6" strokeWidth="1.2" fill="none" opacity="0.2"/>
                  <g className="feat-retrain-g">
                    <circle cx="14" cy="14" r="9" stroke="url(#hf-g3)" strokeWidth="1.8" fill="none" strokeDasharray="40 17" strokeLinecap="round"/>
                  </g>
                  <circle cx="14" cy="14" r="2.5" fill="#1455e6" opacity="0.4"/>
                  <circle cx="14" cy="14" r="1.2" fill="#14fdfd"/>
                </svg>
              </div>
              <h3>Continuous Improvement</h3>
              <p>Models retrain weekly on a rolling 24-month dataset. A new checkpoint only replaces the live model if it outperforms — meaning the system structurally improves over time without manual intervention or degradation risk.</p>
              <span className="fc-tag">Adaptive System</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CME Context ── */}
      <section className="hf-section">
        <div className="section-wrap">
          <div className="hf-cme-wrap reveal">
            <div className="hf-cme-text">
              <div className="section-eyebrow">Proof of Institutional Fit</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Cleared on the<br />
                <span className="gradient-text">Chicago Mercantile Exchange</span>
              </h2>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.8', marginBottom: '28px', fontSize: '0.92rem' }}>
                The fact that our models are running inside a fund that operates on the CME
                says something about their quality. The CME doesn&apos;t care about compelling
                narratives — it clears trades. The CFTC doesn&apos;t care about marketing —
                it regulates conduct. Our models passed both filters.
              </p>
              <ul className="hf-cme-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><linearGradient id="hf-ck1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs><path d="M3 8L6.5 11.5L13 5" stroke="url(#hf-ck1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  CFTC oversight — the highest US derivatives regulatory standard
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><linearGradient id="hf-ck2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs><path d="M3 8L6.5 11.5L13 5" stroke="url(#hf-ck2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Centrally cleared — every position audited and reported
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><linearGradient id="hf-ck3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs><path d="M3 8L6.5 11.5L13 5" stroke="url(#hf-ck3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Same venue used by BlackRock, Goldman, and sovereign wealth funds
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><linearGradient id="hf-ck4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs><path d="M3 8L6.5 11.5L13 5" stroke="url(#hf-ck4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Institutional liquidity depth — no slippage, no counterparty risk
                </li>
              </ul>
            </div>
            <div className="hf-cme-visual">
              <div className="hf-cme-card">
                <div className="hf-cme-card-logo">
                  <img src="/ipc-logo.svg" alt="IPC" className="hf-cme-ipc-logo" />
                </div>
                <div className="hf-cme-row">
                  <span className="hf-cme-label">Status</span>
                  <span className="hf-cme-val hf-cme-live"><span className="live-blink" />Live &amp; Active</span>
                </div>
                <div className="hf-cme-row">
                  <span className="hf-cme-label">Exchange</span>
                  <span className="hf-cme-val">CME Group</span>
                </div>
                <div className="hf-cme-row">
                  <span className="hf-cme-label">Instrument</span>
                  <span className="hf-cme-val">BTC Futures</span>
                </div>
                <div className="hf-cme-row">
                  <span className="hf-cme-label">Regulator</span>
                  <span className="hf-cme-val">US CFTC</span>
                </div>
                <div className="hf-cme-row">
                  <span className="hf-cme-label">AI Signal Provider</span>
                  <span className="hf-cme-val gradient-text">Eagle AI Labs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hf-cta-section">
        <div className="section-wrap">
          <div className="hf-cta-inner reveal">
            <div className="section-eyebrow" style={{ textAlign: 'center' }}>Access the Infrastructure</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Institutional Models.<br />
              <span className="gradient-text">No Institution Required.</span>
            </h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 0' }}>
              The same signal infrastructure that a regulated US hedge fund built its
              strategy around is available to individual traders via Eagle AI Labs.
              Same models, same outputs, same weekly retraining cycle.
            </p>
            <div className="hf-cta-actions">
              <a
                href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Eagle AI Free
              </a>
              <a href="/" className="btn btn-ghost">Back to Eagle AI Labs</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
