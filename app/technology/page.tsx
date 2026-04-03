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
              <div className="neural-wrap">
                <svg className="neural-svg" viewBox="0 0 460 400">
                  <defs>
                    <linearGradient id="lg-nn-in" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#1455e6"/><stop offset="1" stopColor="#1470e0"/>
                    </linearGradient>
                    <linearGradient id="lg-nn-out" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#14c0e8"/><stop offset="1" stopColor="#14fdfd"/>
                    </linearGradient>
                    <filter id="nn-glow">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="nn-glow-strong">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <g className="nn-conn-1" stroke="#1455e6" strokeWidth="0.6">
                    <line x1="65" y1="80" x2="165" y2="100"/><line x1="65" y1="80" x2="165" y2="175"/>
                    <line x1="65" y1="80" x2="165" y2="250"/><line x1="65" y1="145" x2="165" y2="100"/>
                    <line x1="65" y1="145" x2="165" y2="175"/><line x1="65" y1="145" x2="165" y2="250"/>
                    <line x1="65" y1="210" x2="165" y2="100"/><line x1="65" y1="210" x2="165" y2="175"/>
                    <line x1="65" y1="210" x2="165" y2="250"/><line x1="65" y1="210" x2="165" y2="325"/>
                    <line x1="65" y1="275" x2="165" y2="175"/><line x1="65" y1="275" x2="165" y2="250"/>
                    <line x1="65" y1="275" x2="165" y2="325"/><line x1="65" y1="340" x2="165" y2="250"/>
                    <line x1="65" y1="340" x2="165" y2="325"/>
                  </g>
                  <g className="nn-conn-2" stroke="#147ae0" strokeWidth="0.8">
                    <line x1="165" y1="100" x2="265" y2="118"/><line x1="165" y1="100" x2="265" y2="205"/>
                    <line x1="165" y1="175" x2="265" y2="118"/><line x1="165" y1="175" x2="265" y2="205"/>
                    <line x1="165" y1="175" x2="265" y2="293"/><line x1="165" y1="250" x2="265" y2="205"/>
                    <line x1="165" y1="250" x2="265" y2="293"/><line x1="165" y1="325" x2="265" y2="205"/>
                    <line x1="165" y1="325" x2="265" y2="293"/>
                  </g>
                  <g className="nn-conn-3" stroke="#14b8e8" strokeWidth="1">
                    <line x1="265" y1="118" x2="355" y2="160"/><line x1="265" y1="118" x2="355" y2="245"/>
                    <line x1="265" y1="205" x2="355" y2="160"/><line x1="265" y1="205" x2="355" y2="245"/>
                    <line x1="265" y1="293" x2="355" y2="160"/><line x1="265" y1="293" x2="355" y2="245"/>
                  </g>
                  <g className="nn-nodes-in" fill="none" stroke="url(#lg-nn-in)" strokeWidth="1.5">
                    <circle cx="65" cy="80" r="14"/><circle cx="65" cy="145" r="14"/>
                    <circle cx="65" cy="210" r="14"/><circle cx="65" cy="275" r="14"/>
                    <circle cx="65" cy="340" r="14"/>
                  </g>
                  <g fill="#5a7090" fontSize="10" fontFamily="Inter" textAnchor="middle">
                    <text x="65" y="83.5">OHLC</text><text x="65" y="148.5">Vol</text>
                    <text x="65" y="213.5">Flow</text><text x="65" y="278.5">Chain</text>
                    <text x="65" y="343.5">News</text>
                  </g>
                  <g className="nn-nodes-h1" fill="rgba(20,85,230,0.15)" stroke="#1455e6" strokeWidth="1.5">
                    <circle cx="165" cy="100" r="14"/><circle cx="165" cy="175" r="14"/>
                    <circle cx="165" cy="250" r="14"/><circle cx="165" cy="325" r="14"/>
                  </g>
                  <g className="nn-nodes-h2" fill="rgba(20,140,230,0.2)" stroke="#14a0e8" strokeWidth="1.5">
                    <circle cx="265" cy="118" r="14"/><circle cx="265" cy="205" r="14"/>
                    <circle cx="265" cy="293" r="14"/>
                  </g>
                  <circle className="nn-out-node" cx="355" cy="160" r="18" fill="rgba(20,220,245,0.12)" stroke="url(#lg-nn-out)" strokeWidth="2" filter="url(#nn-glow)"/>
                  <circle className="nn-out-node" cx="355" cy="245" r="18" fill="rgba(20,220,245,0.12)" stroke="url(#lg-nn-out)" strokeWidth="2" filter="url(#nn-glow)"/>
                  <text x="383" y="163.5" fill="#14fdfd" fontSize="12" fontFamily="Inter" fontWeight="600">LONG</text>
                  <text x="383" y="248.5" fill="#14fdfd" fontSize="12" fontFamily="Inter" fontWeight="600">SHORT</text>
                  <text x="65" y="372" fill="#2a3a50" fontSize="10" fontFamily="Inter" textAnchor="middle">Input</text>
                  <text x="165" y="372" fill="#2a3a50" fontSize="10" fontFamily="Inter" textAnchor="middle">Hidden</text>
                  <text x="265" y="372" fill="#2a3a50" fontSize="10" fontFamily="Inter" textAnchor="middle">Hidden</text>
                  <text x="355" y="372" fill="#2a3a50" fontSize="10" fontFamily="Inter" textAnchor="middle">Output</text>
                </svg>
              </div>
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

        {/* Animation + "What Makes Our Forward Curves Different" — split */}
        <div className="section-wrap tp-section-wrap">
          <div className="tp-fc-split reveal">
            <div className="tp-fc-visual">
              <div className="fc-wrap" style={{ margin: 0 }}>
                <svg className="fc-svg" viewBox="0 0 460 315">
                  <defs>
                    <linearGradient id="lg-fc-hist" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#1455e6"/><stop offset="1" stopColor="#14b8e8"/>
                    </linearGradient>
                    <linearGradient id="lg-fc-fore" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#14b8e8"/><stop offset="1" stopColor="#14fdfd"/>
                    </linearGradient>
                    <linearGradient id="lg-fc-band" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#14fdfd" stopOpacity="0.18"/>
                      <stop offset="1" stopColor="#14fdfd" stopOpacity="0.03"/>
                    </linearGradient>
                    <filter id="fc-glow">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <text x="20" y="16" fill="#5a7090" fontSize="9" fontFamily="Inter" fontWeight="600" letterSpacing="2">PRICE FORWARD CURVE</text>
                  <g stroke="#1455e6" strokeWidth="0.5" opacity="0.07">
                    <line x1="20" y1="38" x2="440" y2="38"/><line x1="20" y1="78" x2="440" y2="78"/>
                    <line x1="20" y1="118" x2="440" y2="118"/><line x1="20" y1="158" x2="440" y2="158"/>
                    <line x1="195" y1="18" x2="195" y2="175"/>
                  </g>
                  <path className="fc-band" d="M195,122 C208,114 226,105 242,99 C258,93 274,85 292,78 C310,71 326,63 343,56 C360,49 378,39 398,35 L398,68 C378,72 360,82 343,89 C326,96 310,104 292,110 C274,116 258,122 242,126 C226,130 208,130 195,122 Z" fill="url(#lg-fc-band)"/>
                  <path className="fc-band-edge" d="M195,122 C208,114 226,105 242,99 C258,93 274,85 292,78 C310,71 326,63 343,56 C360,49 378,39 398,35" fill="none" stroke="#14fdfd" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.25"/>
                  <path className="fc-band-edge" d="M195,122 C208,130 226,130 242,126 C258,122 274,116 292,110 C310,104 326,96 343,89 C360,82 378,72 398,68" fill="none" stroke="#14fdfd" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.18"/>
                  <line className="fc-now-line" x1="195" y1="20" x2="195" y2="172" stroke="#14fdfd" strokeWidth="1" strokeDasharray="3,3"/>
                  <text x="199" y="28" fill="#14fdfd" fontSize="7.5" fontFamily="Inter" fontWeight="700" opacity="0.7">NOW</text>
                  <path d="M28,162 C40,159 58,156 72,153 C86,150 104,147 116,144 C128,141 145,138 158,134 C171,130 184,126 195,122" fill="none" stroke="url(#lg-fc-hist)" strokeWidth="2.2" opacity="0.9"/>
                  <path className="fc-forecast" d="M195,122 C207,118 224,111 242,105 C260,99 276,91 292,84 C310,77 326,68 343,61 C360,54 378,44 398,40" fill="none" stroke="url(#lg-fc-fore)" strokeWidth="2.2" strokeDasharray="6,3"/>
                  <g filter="url(#fc-glow)">
                    <circle className="fc-anch fc-a1" cx="28"  cy="162" r="3.5" fill="#1455e6"/>
                    <circle className="fc-anch fc-a2" cx="72"  cy="153" r="3.5" fill="#1468e6"/>
                    <circle className="fc-anch fc-a3" cx="116" cy="144" r="3.5" fill="#147ee8"/>
                    <circle className="fc-anch fc-a4" cx="158" cy="134" r="3.5" fill="#1498e8"/>
                    <circle className="fc-anch fc-a5" cx="195" cy="122" r="5.5" fill="#14b8e8"/>
                  </g>
                  <g className="fc-fore-anchors">
                    <circle cx="242" cy="105" r="3.5" fill="none" stroke="#14c8ec" strokeWidth="1.3" strokeDasharray="2,2"/>
                    <circle cx="292" cy="84"  r="3.5" fill="none" stroke="#14dcf4" strokeWidth="1.3" strokeDasharray="2,2"/>
                    <circle cx="343" cy="61"  r="3.5" fill="none" stroke="#14f0fb" strokeWidth="1.3" strokeDasharray="2,2"/>
                    <circle cx="398" cy="40"  r="3.5" fill="none" stroke="#14fdfd" strokeWidth="1.3" strokeDasharray="2,2"/>
                  </g>
                  <text x="248" y="92" fill="#14fdfd" fontSize="8" fontFamily="Inter" fontWeight="600" opacity="0.75">AI FORECAST  ▲ +14.2%</text>
                  <g fill="#2a3a50" fontSize="8" fontFamily="Inter" textAnchor="middle">
                    <text x="28"  y="183">-60D</text><text x="116" y="183">-30D</text>
                    <text x="195" y="183">NOW</text><text x="292" y="183">+14D</text>
                    <text x="398" y="183">+60D</text>
                  </g>
                  <line x1="20" y1="196" x2="440" y2="196" stroke="#1455e6" strokeWidth="0.5" opacity="0.2"/>
                  <text x="20" y="213" fill="#5a7090" fontSize="9" fontFamily="Inter" fontWeight="600" letterSpacing="2">CROSS-ASSET SPREAD MATRIX</text>
                  <g fill="#2a3a50" fontSize="8" fontFamily="Inter" textAnchor="middle">
                    <text x="73" y="228">BTC</text><text x="133" y="228">ETH</text><text x="193" y="228">SOL</text>
                    <text x="253" y="228">BNB</text><text x="313" y="228">XRP</text><text x="373" y="228">LINK</text>
                  </g>
                  <g fill="#2a3a50" fontSize="8" fontFamily="Inter" textAnchor="end">
                    <text x="42" y="250">1D</text><text x="42" y="276">1W</text><text x="42" y="302">1M</text>
                  </g>
                  <rect className="sm-cell sm-mid"  x="47"  y="233" width="52" height="22" rx="3" fill="#1455e6" style={{animationDelay:'0s'}}/>
                  <rect className="sm-cell sm-high" x="107" y="233" width="52" height="22" rx="3" fill="#1478e6" style={{animationDelay:'0.4s'}}/>
                  <rect className="sm-cell sm-low"  x="167" y="233" width="52" height="22" rx="3" fill="#14a0e8" style={{animationDelay:'1.1s'}}/>
                  <rect className="sm-cell sm-high" x="227" y="233" width="52" height="22" rx="3" fill="#14c0ec" style={{animationDelay:'1.7s'}}/>
                  <rect className="sm-cell sm-mid"  x="287" y="233" width="52" height="22" rx="3" fill="#14ddf5" style={{animationDelay:'0.7s'}}/>
                  <rect className="sm-cell sm-low"  x="347" y="233" width="52" height="22" rx="3" fill="#14fdfd" style={{animationDelay:'2.2s'}}/>
                  <rect className="sm-cell sm-high" x="47"  y="259" width="52" height="22" rx="3" fill="#14c0ec" style={{animationDelay:'2.0s'}}/>
                  <rect className="sm-cell sm-low"  x="107" y="259" width="52" height="22" rx="3" fill="#1455e6" style={{animationDelay:'0.9s'}}/>
                  <rect className="sm-cell sm-high" x="167" y="259" width="52" height="22" rx="3" fill="#14b0ea" style={{animationDelay:'1.5s'}}/>
                  <rect className="sm-cell sm-mid"  x="227" y="259" width="52" height="22" rx="3" fill="#1478e6" style={{animationDelay:'0.3s'}}/>
                  <rect className="sm-cell sm-high" x="287" y="259" width="52" height="22" rx="3" fill="#14fdfd" style={{animationDelay:'2.6s'}}/>
                  <rect className="sm-cell sm-low"  x="347" y="259" width="52" height="22" rx="3" fill="#14a0e8" style={{animationDelay:'1.2s'}}/>
                  <rect className="sm-cell sm-low"  x="47"  y="285" width="52" height="22" rx="3" fill="#14ddf5" style={{animationDelay:'1.9s'}}/>
                  <rect className="sm-cell sm-high" x="107" y="285" width="52" height="22" rx="3" fill="#14fdfd" style={{animationDelay:'0.6s'}}/>
                  <rect className="sm-cell sm-mid"  x="167" y="285" width="52" height="22" rx="3" fill="#1455e6" style={{animationDelay:'2.4s'}}/>
                  <rect className="sm-cell sm-high" x="227" y="285" width="52" height="22" rx="3" fill="#14c0ec" style={{animationDelay:'1.4s'}}/>
                  <rect className="sm-cell sm-low"  x="287" y="285" width="52" height="22" rx="3" fill="#14a0e8" style={{animationDelay:'0.2s'}}/>
                  <rect className="sm-cell sm-mid"  x="347" y="285" width="52" height="22" rx="3" fill="#1478e6" style={{animationDelay:'2.8s'}}/>
                </svg>
              </div>
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
              <a href="/" className="btn btn-ghost">Back to Eagle AI Labs</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
