import type { CSSProperties } from "react";

export default function Home() {
  return (
    <>
      <canvas id="bg-canvas"></canvas>

      <nav id="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/hedge-fund">Live Hedge Fund Trading</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-ghost">Sign In</a>
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Try Now</a>
          </div>
          <button className="nav-burger" id="nav-burger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-nav" id="mobile-nav">
        <ul>
          <li><a href="#platform">Platform</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#how-it-works">Process</a></li>
          <li><a href="#cta">Pricing</a></li>
        </ul>
        <div className="mobile-nav-btns">
          <a href="#" className="btn btn-ghost">Sign In</a>
          <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Try Now</a>
        </div>
      </div>

      <section id="hero">
        <div className="hero-floaters" aria-hidden="true">
          <div className="hf hf1"></div>
          <div className="hf hf2"></div>
          <div className="hf hf3"></div>
          <div className="hf hf4"></div>
          <div className="hf hf5"></div>
          <div className="hf hf6"></div>
          <div className="hero-grid-overlay"></div>
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow reveal">AI Prediction Models for Markets</p>

          <h1 className="hero-title reveal">
            Predict Markets<br />
            <span className="hero-gradient-line">Before They Move</span>
          </h1>

          <p className="hero-sub reveal">
            Eagle AI Labs engineers institutional-grade neural architectures that forecast
            cryptocurrency price movements with measurable precision. Two years at the
            frontier of crypto market intelligence.
          </p>

          <div className="hero-btns reveal">
            <a href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
              Start Free Trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" className="btn btn-outline btn-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 5L19 12L8 19V5Z" fill="currentColor"/></svg>
              Watch Demo
            </a>
          </div>

          <div className="hero-metrics reveal">
            <div className="hm-item">
              <div className="hm-val"><span data-count="94.7" data-decimals="1">0</span><span className="hm-unit">%</span></div>
              <div className="hm-label">Prediction Accuracy</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val"><span data-count="200" data-decimals="0">0</span><span className="hm-unit">+</span></div>
              <div className="hm-label">Crypto Pairs</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val"><span data-count="50" data-decimals="0">0</span><span className="hm-unit">ms</span></div>
              <div className="hm-label">Signal Latency</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val"><span data-count="2" data-decimals="0">0</span><span className="hm-unit">+ yrs</span></div>
              <div className="hm-label">Market Pioneer</div>
            </div>
          </div>
        </div>

        <div className="hero-chart reveal">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-pair-info">
                <span className="chart-pair">BTC / USDT</span>
                <span className="chart-price">$67,420.00</span>
                <span className="chart-change pos">▲ 3.24%</span>
              </div>
              <div className="chart-signal-badge">
                <span className="sig-pulse"></span>
                AI Signal: LONG
              </div>
              <div className="chart-tfs">
                <span>1H</span><span className="tfa">4H</span><span>1D</span><span>1W</span>
              </div>
            </div>

            <div className="chart-body">
              <div className="scan-line"></div>
              <svg className="chart-svg" viewBox="0 0 800 240" preserveAspectRatio="none" overflow="visible">
                <defs>
                  <linearGradient id="lg-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1455e6" stopOpacity="0.35"/>
                    <stop offset="100%" stopColor="#1455e6" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="lg-pred-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14fdfd" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#14fdfd" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="lg-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1455e6"/>
                    <stop offset="100%" stopColor="#14c8e8"/>
                  </linearGradient>
                  <linearGradient id="lg-pred-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#14c8e8"/>
                    <stop offset="100%" stopColor="#14fdfd"/>
                  </linearGradient>
                  <filter id="glow-dot">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glow-line">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <clipPath id="chart-clip">
                    <rect x="0" y="0" width="800" height="240"/>
                  </clipPath>
                </defs>
                <g stroke="#1455e6" strokeWidth="0.5" opacity="0.12">
                  <line x1="0" y1="48" x2="800" y2="48"/>
                  <line x1="0" y1="96" x2="800" y2="96"/>
                  <line x1="0" y1="144" x2="800" y2="144"/>
                  <line x1="0" y1="192" x2="800" y2="192"/>
                  <line x1="133" y1="0" x2="133" y2="240"/>
                  <line x1="266" y1="0" x2="266" y2="240"/>
                  <line x1="400" y1="0" x2="400" y2="240"/>
                  <line x1="533" y1="0" x2="533" y2="240"/>
                  <line x1="666" y1="0" x2="666" y2="240"/>
                </g>
                <path d="M0,210 C40,200 80,215 110,192 C140,169 175,182 200,158 C225,134 255,148 285,122 C315,96 345,112 375,88 C405,64 435,78 465,54 C495,30 520,44 540,38 L540,240 L0,240 Z" fill="url(#lg-area)" clipPath="url(#chart-clip)"/>
                <path d="M0,210 C40,200 80,215 110,192 C140,169 175,182 200,158 C225,134 255,148 285,122 C315,96 345,112 375,88 C405,64 435,78 465,54 C495,30 520,44 540,38" fill="none" stroke="url(#lg-line)" strokeWidth="2.5" filter="url(#glow-line)" clipPath="url(#chart-clip)"/>
                <line x1="540" y1="0" x2="540" y2="240" stroke="#14fdfd" strokeWidth="1" strokeDasharray="5,4" opacity="0.35"/>
                <rect x="540" y="0" width="260" height="240" fill="rgba(20,253,253,0.025)" clipPath="url(#chart-clip)"/>
                <path d="M540,38 C570,28 610,15 650,8 C690,1 740,-3 800,-5 L800,28 C740,22 690,28 650,35 C610,42 570,45 540,38 Z" fill="url(#lg-pred-area)" clipPath="url(#chart-clip)"/>
                <path d="M540,38 C570,28 610,14 650,7 C690,-1 740,-4 800,-6" fill="none" stroke="#14fdfd" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" clipPath="url(#chart-clip)"/>
                <path d="M540,38 C570,45 610,42 650,35 C690,28 740,22 800,18" fill="none" stroke="#14fdfd" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" clipPath="url(#chart-clip)"/>
                <path d="M540,38 C570,30 615,18 660,10 C705,2 750,-2 800,0" fill="none" stroke="url(#lg-pred-line)" strokeWidth="2.5" filter="url(#glow-line)" clipPath="url(#chart-clip)"/>
                <circle cx="540" cy="38" r="12" fill="#14fdfd" opacity="0.1" className="pulse-ring"/>
                <circle cx="540" cy="38" r="5.5" fill="#14fdfd" filter="url(#glow-dot)"/>
                <text x="810" y="42" fill="#5a7090" fontSize="11" fontFamily="Inter">$67.4k</text>
                <text x="810" y="100" fill="#5a7090" fontSize="11" fontFamily="Inter">$64.2k</text>
                <text x="810" y="148" fill="#5a7090" fontSize="11" fontFamily="Inter">$61.0k</text>
                <text x="810" y="196" fill="#5a7090" fontSize="11" fontFamily="Inter">$57.8k</text>
                <text x="548" y="26" fill="#14fdfd" fontSize="10" fontFamily="Inter" opacity="0.8">AI Forecast ▲ +12.4%</text>
              </svg>
            </div>

            <div className="chart-footer">
              <div className="chart-inds">
                <span className="ci active">RSI 68.2</span>
                <span className="ci">MACD ▲</span>
                <span className="ci">Vol 2.3B</span>
              </div>
              <div className="chart-conf">
                <span className="cc-label">Confidence</span>
                <div className="cc-bar"><div className="cc-fill" style={{ '--w': '87%' } as CSSProperties}></div></div>
                <span className="cc-val">87%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-line-anim"></div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-inner">
          <div className="marquee-track">
            <span>Neural Architecture</span><span className="mdot">◆</span>
            <span>Transformer Models</span><span className="mdot">◆</span>
            <span>Real-Time Processing</span><span className="mdot">◆</span>
            <span>Quantitative Analysis</span><span className="mdot">◆</span>
            <span>Market Microstructure</span><span className="mdot">◆</span>
            <span>On-Chain Intelligence</span><span className="mdot">◆</span>
            <span>Sentiment Analysis</span><span className="mdot">◆</span>
            <span>Volatility Modeling</span><span className="mdot">◆</span>
            <span>Deep Learning</span><span className="mdot">◆</span>
            <span>Predictive Signals</span><span className="mdot">◆</span>
            <span>Neural Architecture</span><span className="mdot">◆</span>
            <span>Transformer Models</span><span className="mdot">◆</span>
            <span>Real-Time Processing</span><span className="mdot">◆</span>
            <span>Quantitative Analysis</span><span className="mdot">◆</span>
            <span>Market Microstructure</span><span className="mdot">◆</span>
            <span>On-Chain Intelligence</span><span className="mdot">◆</span>
            <span>Sentiment Analysis</span><span className="mdot">◆</span>
            <span>Volatility Modeling</span><span className="mdot">◆</span>
            <span>Deep Learning</span><span className="mdot">◆</span>
            <span>Predictive Signals</span><span className="mdot">◆</span>
          </div>
        </div>
      </div>

      <section id="trusted">
        <div className="trusted-energy" aria-hidden="true">
          <div className="te-orb te-orb1"></div>
          <div className="te-orb te-orb2"></div>
          <div className="te-orb te-orb3"></div>
        </div>
        <div className="trusted-wrap">
          <p className="trusted-headline">Trusted by the best brands around the world</p>
          <div className="logo-marquee-outer">
            <div className="logo-marquee-track">
              <div className="logo-slot"><img src="/logos/logo-1.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-2.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-3.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-4.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-5.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-6.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-1.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-2.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-3.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-4.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-5.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-6.png" alt="Partner" className="partner-logo" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="tech-energy" aria-hidden="true">
          <div className="tech-orb tech-orb1"></div>
          <div className="tech-orb tech-orb2"></div>
          <div className="tech-orb tech-orb3"></div>
        </div>
        <div className="section-wrap">
          <div className="tech-layout">
            <div className="tech-text">
              <div className="section-eyebrow reveal">Technology</div>
              <h2 className="section-title reveal">
                Built on a Foundation<br />
                <span className="gradient-text">of Proven Alpha</span>
              </h2>
              <p className="reveal">
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

              <a href="/technology" className="btn btn-primary reveal">
                Find Out More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </div>

            <div className="tech-visual reveal">
              <div className="neural-wrap">
                <svg className="neural-svg" viewBox="0 0 460 400">
                  <defs>
                    <linearGradient id="lg-nn-in" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#1455e6"/>
                      <stop offset="1" stopColor="#1470e0"/>
                    </linearGradient>
                    <linearGradient id="lg-nn-out" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#14c0e8"/>
                      <stop offset="1" stopColor="#14fdfd"/>
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

      <section id="features">
        <div className="section-wrap">
          <div className="section-eyebrow reveal">Core Capabilities</div>
          <h2 className="section-title reveal">
            The Intelligence Layer<br />
            <span className="gradient-text">Crypto Has Been Waiting For</span>
          </h2>
          <p className="section-sub reveal">
            Our multi-modal AI architecture fuses on-chain analytics, market microstructure,
            and sentiment data to generate high-probability directional forecasts.
          </p>

          <div className="features-grid">
            <div className="feat-card reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient>
                    <filter id="fi1-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <line x1="4" y1="27" x2="28" y2="27" stroke="#1455e6" strokeWidth="0.4" opacity="0.25"/>
                  <line x1="4" y1="19" x2="28" y2="19" stroke="#1455e6" strokeWidth="0.4" opacity="0.12"/>
                  <path d="M4,26 C7,24 10,21 13,18 C15,16 16,14 17,13" stroke="url(#lg-fi1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17" cy="13" r="2" fill="#14b8e8" filter="url(#fi1-glow)"/>
                  <path className="feat-forecast-dash" d="M17,13 C21,9 24,7 28,5" fill="none" stroke="#14fdfd" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle className="feat-tip-pulse" cx="28" cy="5" r="2.2" fill="#14fdfd" filter="url(#fi1-glow)"/>
                </svg>
              </div>
              <h3>Predictive Price Forecasting</h3>
              <p>Know not just where price might go — but how likely it is to get there. Every signal is backed by a calibrated confidence score, so you trade with conviction, not guesswork.</p>
              <span className="fc-tag">Core Engine</span>
            </div>

            <div className="feat-card reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient>
                  </defs>
                  <rect x="3" y="4"  width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="13" width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="22" width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect className="feat-infra-fill-1" x="3" y="4"  width="26" height="6" rx="1.5" fill="#1455e6"/>
                  <rect className="feat-infra-fill-2" x="3" y="13" width="26" height="6" rx="1.5" fill="#148ae8"/>
                  <rect className="feat-infra-fill-3" x="3" y="22" width="26" height="6" rx="1.5" fill="#14fdfd"/>
                </svg>
              </div>
              <h3>Institutional AI Infrastructure</h3>
              <p>Trained on NVIDIA DGX GPU clusters and cross-validated across two independent model seeds — the same calibre of infrastructure hedge funds build, delivered to you via a single API call.</p>
              <span className="fc-tag">Infrastructure</span>
            </div>

            <div className="feat-card reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient>
                    <filter id="fi3-glow"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <circle className="feat-ping feat-ping-1" cx="16" cy="16" r="5" stroke="url(#lg-fi3)" strokeWidth="1.5" fill="none"/>
                  <circle className="feat-ping feat-ping-2" cx="16" cy="16" r="5" stroke="url(#lg-fi3)" strokeWidth="1.5" fill="none"/>
                  <circle className="feat-ping feat-ping-3" cx="16" cy="16" r="5" stroke="url(#lg-fi3)" strokeWidth="1.5" fill="none"/>
                  <circle cx="16" cy="16" r="4" fill="#14b8e8" filter="url(#fi3-glow)"/>
                  <circle cx="16" cy="16" r="2" fill="#14fdfd"/>
                </svg>
              </div>
              <h3>Real-Time Signal Delivery</h3>
              <p>Each signal tells you the direction, the probability, and the strength — Strong, Moderate, or Uncertain. Full transparency into every call the model makes, so you decide with complete information, never in the dark.</p>
              <span className="fc-tag">Signals</span>
            </div>

            <div className="feat-card reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle className="feat-mkt-dot" cx="5"  cy="11" r="2.5" fill="#1455e6" style={{animationDelay:'0s'}}/>
                  <circle className="feat-mkt-dot" cx="11" cy="11" r="2.5" fill="#1468e8" style={{animationDelay:'0.4s'}}/>
                  <circle className="feat-mkt-dot" cx="17" cy="11" r="2.5" fill="#1490e8" style={{animationDelay:'1.1s'}}/>
                  <circle className="feat-mkt-dot" cx="23" cy="11" r="2.5" fill="#14c0ec" style={{animationDelay:'0.7s'}}/>
                  <circle className="feat-mkt-dot" cx="29" cy="11" r="2.5" fill="#14fdfd" style={{animationDelay:'1.8s'}}/>
                  <circle className="feat-mkt-dot" cx="5"  cy="21" r="2.5" fill="#14b0ea" style={{animationDelay:'1.3s'}}/>
                  <circle className="feat-mkt-dot" cx="11" cy="21" r="2.5" fill="#1478e6" style={{animationDelay:'0.2s'}}/>
                  <circle className="feat-mkt-dot" cx="17" cy="21" r="2.5" fill="#14e8f8" style={{animationDelay:'2.0s'}}/>
                  <circle className="feat-mkt-dot" cx="23" cy="21" r="2.5" fill="#1455e6" style={{animationDelay:'0.9s'}}/>
                  <circle className="feat-mkt-dot" cx="29" cy="21" r="2.5" fill="#14d0f2" style={{animationDelay:'1.6s'}}/>
                </svg>
              </div>
              <h3>Top 10 Liquidity Coverage</h3>
              <p>Dedicated models across BTC, ETH, SOL, XRP, BNB, DOGE, ADA, AVAX, LINK, and TON — on the 30m, 1H, 4H, and daily. Fewer markets, deeper insight. We go all-in on the pairs that actually move money.</p>
              <span className="fc-tag">Coverage</span>
            </div>

            <div className="feat-card reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi5" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#14fdfd"/><stop offset="1" stopColor="#1455e6"/></linearGradient>
                  </defs>
                  <line x1="3" y1="28" x2="29" y2="28" stroke="#1455e6" strokeWidth="0.5" opacity="0.3"/>
                  <rect className="feat-flow-bar" x="4"  y="14" width="3" height="14" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0s'}}/>
                  <rect className="feat-flow-bar" x="10" y="8"  width="3" height="20" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.3s'}}/>
                  <rect className="feat-flow-bar" x="16" y="18" width="3" height="10" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.6s'}}/>
                  <rect className="feat-flow-bar" x="22" y="6"  width="3" height="22" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.15s'}}/>
                  <rect className="feat-flow-bar" x="28" y="12" width="3" height="16" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.45s'}}/>
                </svg>
              </div>
              <h3>Order Flow Intelligence</h3>
              <p>Most models only see candles. Ours reads the tape. By analysing trade-level flow data, we detect institutional activity and momentum shifts happening inside each candle — before they show up in price.</p>
              <span className="fc-tag">Order Flow</span>
            </div>

            <div className="feat-card feat-card-glow reveal">
              <div className="fc-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi6" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="11" stroke="#1455e6" strokeWidth="1.5" fill="none" opacity="0.18"/>
                  <g className="feat-retrain-g">
                    <circle cx="16" cy="16" r="11" stroke="url(#lg-fi6)" strokeWidth="2" fill="none" strokeDasharray="50 19" strokeLinecap="round"/>
                  </g>
                  <circle cx="16" cy="16" r="3.5" fill="#1455e6" opacity="0.4"/>
                  <circle cx="16" cy="16" r="1.8" fill="#14fdfd"/>
                </svg>
              </div>
              <h3>Weekly Adaptive Retraining</h3>
              <p>Markets change. Our models keep up. Every week, a new model is trained on two years of fresh data — and only replaces the current one if it performs better. You always get the sharpest version, automatically.</p>
              <span className="fc-tag">AI Core</span>
            </div>
          </div>
        </div>
      </section>

      <section id="platform">
        <div className="section-wrap">
          <div className="section-eyebrow reveal">The Platform</div>
          <h2 className="section-title reveal">
            Introducing <span className="gradient-text">CLAW</span><br />
            The Institutional Terminal.
          </h2>
          <p className="section-sub reveal">
            CLAW is Eagle AI Labs&apos; pro-grade trading terminal — the same infrastructure
            used in institutional environments, now built for serious retail traders who
            demand a real edge.
          </p>

          <div className="platform-showcase reveal">
            <div className="platform-ui">
              <div className="pui-sidebar">
                <div className="pui-logo">
                  <img src="/claw-logo.png" alt="CLAW" className="pui-logo-img" />
                </div>
                <nav className="pui-nav">
                  <a className="pui-link active">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
                    Dashboard
                  </a>
                  <a className="pui-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                    Signals
                  </a>
                  <a className="pui-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.5"/><path d="M7 16L11 10L15 13L20 6" stroke="currentColor" strokeWidth="1.5"/></svg>
                    Portfolio
                  </a>
                  <a className="pui-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/><path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5"/></svg>
                    Models
                  </a>
                </nav>
                <div className="pui-status">
                  <span className="pui-dot"></span>
                  All Systems Live
                </div>
              </div>
              <div className="pui-main">
                <div className="pui-topbar">
                  <span className="pui-title">Signal Dashboard</span>
                  <span className="pui-live"><span className="live-blink"></span> Live</span>
                </div>
                <div className="pui-signals">
                  <div className="ps-row ps-long">
                    <span className="ps-pair">BTC/USDT</span>
                    <span className="ps-dir ps-long-tag">LONG</span>
                    <span className="ps-conf">94.2%</span>
                    <span className="ps-tp">TP $71,200</span>
                    <span className="ps-time">2m ago</span>
                  </div>
                  <div className="ps-row ps-long">
                    <span className="ps-pair">ETH/USDT</span>
                    <span className="ps-dir ps-long-tag">LONG</span>
                    <span className="ps-conf">88.7%</span>
                    <span className="ps-tp">TP $3,840</span>
                    <span className="ps-time">5m ago</span>
                  </div>
                  <div className="ps-row ps-short">
                    <span className="ps-pair">SOL/USDT</span>
                    <span className="ps-dir ps-short-tag">SHORT</span>
                    <span className="ps-conf">82.1%</span>
                    <span className="ps-tp">TP $158.00</span>
                    <span className="ps-time">12m ago</span>
                  </div>
                  <div className="ps-row ps-long">
                    <span className="ps-pair">LINK/USDT</span>
                    <span className="ps-dir ps-long-tag">LONG</span>
                    <span className="ps-conf">79.3%</span>
                    <span className="ps-tp">TP $18.50</span>
                    <span className="ps-time">18m ago</span>
                  </div>
                  <div className="ps-row ps-neutral">
                    <span className="ps-pair">AVAX/USDT</span>
                    <span className="ps-dir ps-neutral-tag">HOLD</span>
                    <span className="ps-conf">71.0%</span>
                    <span className="ps-tp">Watch $38.20</span>
                    <span className="ps-time">25m ago</span>
                  </div>
                </div>
                <div className="pui-model-stats">
                  <div className="pms-item">
                    <span className="pms-label">24h Accuracy</span>
                    <span className="pms-val">91.3%</span>
                  </div>
                  <div className="pms-item">
                    <span className="pms-label">Signals</span>
                    <span className="pms-val">1,247</span>
                  </div>
                  <div className="pms-item">
                    <span className="pms-label">Win Rate</span>
                    <span className="pms-val">87.4%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="annotation ann-tl">
              <span className="ann-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="lg-ann1" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#lg-ann1)" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
              <div>
                <div className="ann-head">50ms Latency</div>
                <div className="ann-sub">Sub-millisecond delivery</div>
              </div>
            </div>
            <div className="annotation ann-br">
              <span className="ann-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="lg-ann2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <circle cx="12" cy="12" r="9" stroke="url(#lg-ann2)" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="4.5" stroke="url(#lg-ann2)" strokeWidth="1.4"/>
                  <circle cx="12" cy="12" r="1.5" fill="url(#lg-ann2)"/>
                  <line x1="12" y1="2" x2="12" y2="6" stroke="url(#lg-ann2)" strokeWidth="1.4"/>
                  <line x1="12" y1="18" x2="12" y2="22" stroke="url(#lg-ann2)" strokeWidth="1.4"/>
                  <line x1="2" y1="12" x2="6" y2="12" stroke="url(#lg-ann2)" strokeWidth="1.4"/>
                  <line x1="18" y1="12" x2="22" y2="12" stroke="url(#lg-ann2)" strokeWidth="1.4"/>
                </svg>
              </span>
              <div>
                <div className="ann-head">94.7% Accuracy</div>
                <div className="ann-sub">30-day rolling average</div>
              </div>
            </div>
          </div>

          <div className="platform-cta reveal">
            <a
              href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
              className="btn-try-claw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try
              <img src="/claw-logo.png" alt="CLAW" className="btn-claw-logo" />
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="section-wrap">
          <div className="section-eyebrow reveal">Process</div>
          <h2 className="section-title reveal">
            How Eagle AI<br />
            <span className="gradient-text">Generates Alpha</span>
          </h2>

          <div className="steps-wrap">
            <div className="step reveal">
              <div className="step-num-wrap">
                <div className="step-num">01</div>
                <div className="step-connector"></div>
              </div>
              <div className="step-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="lg-s1" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M4 6H20M4 10H20M4 14H14M4 18H10" stroke="url(#lg-s1)" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="step-body">
                <h3>Multi-Source Data Ingestion</h3>
                <p>200+ real-time data streams — order books, trade flows, on-chain metrics, sentiment signals, and macro indicators — normalised and timestamped at microsecond precision.</p>
              </div>
            </div>

            <div className="step reveal">
              <div className="step-num-wrap">
                <div className="step-num">02</div>
                <div className="step-connector"></div>
              </div>
              <div className="step-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="lg-s2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#lg-s2)" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="url(#lg-s2)" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-body">
                <h3>Neural Model Processing</h3>
                <p>Proprietary transformer-based architectures and ensemble model stacks detect non-linear price patterns, regime shifts, and leading indicators with institutional precision.</p>
              </div>
            </div>

            <div className="step reveal">
              <div className="step-num-wrap">
                <div className="step-num">03</div>
              </div>
              <div className="step-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs><linearGradient id="lg-s3" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#lg-s3)" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-body">
                <h3>Signal Delivery &amp; Execution</h3>
                <p>Calibrated probability forecasts and directional signals arrive at your platform in under 50ms via REST, WebSocket, or our native dashboard — ready for manual or automated execution.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="cta">
        <div className="cta-wrap">
          <div className="cta-glow" aria-hidden="true"></div>
          <div className="section-eyebrow reveal">Get Started</div>
          <h2 className="cta-title reveal">
            Join the New Era of<br />
            <span className="gradient-text">Intelligent Trading</span>
          </h2>
          <p className="cta-sub reveal">
            Access Eagle AI Labs&apos; full predictive intelligence suite.
            Institutional infrastructure, built for every type of trader.
          </p>
          <div className="cta-btns reveal">
            <a href="#" className="btn btn-primary btn-lg">
              Start Free — No Card Required
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="#" className="btn btn-outline btn-lg">Schedule a Demo</a>
          </div>
          <p className="cta-fine reveal">14-day free trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime</p>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="/logo.png" alt="Eagle AI Labs" className="logo-img logo-img-footer" />
              </a>
              <p>Pioneering predictive intelligence for crypto markets since 2022. Institutional-grade AI infrastructure for every trader.</p>
              <div className="footer-socials">
                <a href="#" aria-label="X / Twitter">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Discord">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.116 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                </a>
                <a href="#" aria-label="Telegram">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <div className="fl-col">
                <div className="fl-head">Platform</div>
                <a href="#">Dashboard</a><a href="#">Signals</a>
                <a href="#">Portfolio</a><a href="#">API Access</a><a href="#">Mobile App</a>
              </div>
              <div className="fl-col">
                <div className="fl-head">Company</div>
                <a href="#">About Us</a><a href="#">Research</a>
                <a href="#">Blog</a><a href="#">Careers</a><a href="#">Contact</a>
              </div>
              <div className="fl-col">
                <div className="fl-head">Resources</div>
                <a href="#">Documentation</a><a href="#">API Docs</a>
                <a href="#">Status</a><a href="#">Changelog</a><a href="#">Community</a>
              </div>
              <div className="fl-col">
                <div className="fl-head">Legal</div>
                <a href="#">Privacy Policy</a><a href="#">Terms of Service</a>
                <a href="#">Risk Disclosure</a><a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Eagle AI Labs. All rights reserved.</p>
            <p className="footer-disclaimer">AI-generated signals are not financial advice. Cryptocurrency trading involves substantial risk of loss.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
