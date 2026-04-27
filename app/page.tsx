import DataFlowDiagram from "./components/data-flow-diagram";
import HeroIphoneMockup from "./components/hero-iphone-mockup";
import MobileNavDrawer from "./components/mobile-nav-drawer";
import SiteFooter from "./components/site-footer";

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

      <MobileNavDrawer active="home" />

      <section id="hero">
        <div className="hero-bg" aria-hidden="true">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://assets.mixkit.co/videos/47016/47016-thumb-720-2.jpg"
          >
            <source src="https://assets.mixkit.co/videos/47016/47016-720.mp4" type="video/mp4" />
          </video>
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
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 5L19 12L8 19V5Z" fill="currentColor"/></svg>
              See How It Works
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
          <HeroIphoneMockup />
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
        <div className="trusted-wrap">
          <p className="trusted-headline">Trusted by the best brands around the world</p>
          <div className="logo-marquee-outer">
            <div className="logo-marquee-track">
              <div className="logo-slot"><img src="/logos/logo-1.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-2.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-3.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-5.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-6.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-1.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-2.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-3.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-5.png" alt="Partner" className="partner-logo" /></div>
              <div className="logo-slot"><img src="/logos/logo-6.png" alt="Partner" className="partner-logo" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SAMPLE SIGNAL — concrete example of what a signal looks like.
          Builds trust earlier in the journey; landing target for
          "View Example Signals" CTAs elsewhere on the site.
      ══════════════════════════════════════════ */}
      <section id="sample-signal">
        <div className="section-wrap">
          <div className="ss-header">
            <div className="section-eyebrow reveal">What You Actually Get</div>
            <h2 className="section-title reveal">
              Every Signal,<br />
              <span className="gradient-text">Decoded</span>
            </h2>
            <p className="section-sub reveal">
              No black box. No hype. Each Eagle AI signal arrives with four things you can act on the moment it fires.
            </p>
          </div>

          <div className="ss-split reveal">
            <div className="ss-card">
              <div className="ss-card-head">
                <span className="ss-card-badge"><span className="live-blink" /> Sample Signal · 4H</span>
                <span className="ss-card-time">BTC / USDT</span>
              </div>

              <div className="ss-card-dir">
                <span className="ss-field-label">Direction</span>
                <span className="ss-dir-val ss-dir-long">LONG</span>
              </div>

              <div className="ss-card-conf">
                <div className="ss-conf-head">
                  <span className="ss-field-label">Confidence</span>
                  <span className="ss-conf-val">89%</span>
                </div>
                <div className="ss-conf-bar">
                  <div className="ss-conf-fill" style={{ width: '89%' }} />
                </div>
                <div className="ss-conf-tier">Strong</div>
              </div>

              <div className="ss-card-levels">
                <div className="ss-level">
                  <span className="ss-field-label">Entry</span>
                  <span className="ss-level-val">$67,240</span>
                </div>
                <div className="ss-level">
                  <span className="ss-field-label">Target</span>
                  <span className="ss-level-val ss-level-target">$71,800</span>
                </div>
                <div className="ss-level">
                  <span className="ss-field-label">Stop</span>
                  <span className="ss-level-val ss-level-stop">$65,100</span>
                </div>
              </div>

              <div className="ss-card-why">
                <span className="ss-field-label ss-why-heading">Why this call fired</span>
                <div className="ss-why-chips">
                  <span className="ss-why-chip">Order flow divergence</span>
                  <span className="ss-why-chip">4H MACD bullish cross</span>
                  <span className="ss-why-chip">Funding rate trend</span>
                  <span className="ss-why-chip">On-chain accumulation</span>
                </div>
              </div>

              <p className="ss-card-footnote">Illustrative only. Live signals update every 30 minutes inside CLAW.</p>
            </div>

            <div className="ss-anatomy">
              <ol className="ss-anatomy-list">
                <li className="ss-anatomy-item">
                  <span className="ss-anatomy-num">01</span>
                  <div>
                    <h4>Direction</h4>
                    <p>Long, short, or hold. A probabilistic call on the next meaningful move — not a price prediction.</p>
                  </div>
                </li>
                <li className="ss-anatomy-item">
                  <span className="ss-anatomy-num">02</span>
                  <div>
                    <h4>Calibrated Confidence</h4>
                    <p>A 0–100% probability plus a quality tier — Strong, Moderate, or Uncertain. When the model is unsure, it says so.</p>
                  </div>
                </li>
                <li className="ss-anatomy-item">
                  <span className="ss-anatomy-num">03</span>
                  <div>
                    <h4>Entry, Target, Stop</h4>
                    <p>Actionable levels sized against the model&apos;s historical hit rate at this confidence tier.</p>
                  </div>
                </li>
                <li className="ss-anatomy-item">
                  <span className="ss-anatomy-num">04</span>
                  <div>
                    <h4>The Reasoning</h4>
                    <p>Every signal shows the features that triggered it — order flow, momentum, funding, on-chain activity. Never a black box.</p>
                  </div>
                </li>
              </ol>

              <div className="ss-anatomy-cta">
                <a
                  href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Live Signals
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
                <a href="#how-it-works" className="btn btn-ghost">How the models work →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology">
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
              <DataFlowDiagram />
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="section-wrap">
          <div className="feat-header">
            <div className="section-eyebrow reveal">Core Capabilities</div>
            <h2 className="feat-main-title reveal">
              Six edges.<br />
              <span className="gradient-text">One platform.</span>
            </h2>
          </div>

          <div className="feat-list">

            <div className="feat-row reveal">
              <span className="feat-num">01</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="lg-fi1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient>
                    <filter id="fi1-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <path d="M4,26 C7,24 10,21 13,18 C15,16 16,14 17,13" stroke="url(#lg-fi1)" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="17" cy="13" r="2" fill="#14b8e8" filter="url(#fi1-glow)"/>
                  <path className="feat-forecast-dash" d="M17,13 C21,9 24,7 28,5" fill="none" stroke="#14fdfd" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle className="feat-tip-pulse" cx="28" cy="5" r="2.2" fill="#14fdfd" filter="url(#fi1-glow)"/>
                </svg>
              </div>
              <div className="feat-row-content">
                <h3 className="feat-row-title">Predictive Price Forecasting</h3>
                <p className="feat-row-desc">Know not just where price might go — but how likely it is to get there. Every signal is backed by a calibrated confidence score, so you trade with conviction, not guesswork.</p>
              </div>
              <span className="fc-tag">Core Engine</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80&fit=crop" alt="Multi-screen trading terminal showing live price charts" loading="lazy"/>
              </div>
            </div>

            <div className="feat-row reveal">
              <span className="feat-num">02</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <defs><linearGradient id="lg-fi2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <rect x="3" y="4"  width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="13" width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect x="3" y="22" width="26" height="6" rx="1.5" stroke="url(#lg-fi2)" strokeWidth="1" opacity="0.5"/>
                  <rect className="feat-infra-fill-1" x="3" y="4"  width="26" height="6" rx="1.5" fill="#1455e6"/>
                  <rect className="feat-infra-fill-2" x="3" y="13" width="26" height="6" rx="1.5" fill="#148ae8"/>
                  <rect className="feat-infra-fill-3" x="3" y="22" width="26" height="6" rx="1.5" fill="#14fdfd"/>
                </svg>
              </div>
              <div className="feat-row-content">
                <h3 className="feat-row-title">Institutional AI Infrastructure</h3>
                <p className="feat-row-desc">Trained on NVIDIA DGX GPU clusters and cross-validated across two independent model seeds — the same calibre of infrastructure hedge funds build, delivered via a single API call.</p>
              </div>
              <span className="fc-tag">Infrastructure</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&fit=crop" alt="NVIDIA GPU server racks in a high-performance data centre" loading="lazy"/>
              </div>
            </div>

            <div className="feat-row reveal">
              <span className="feat-num">03</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
              <div className="feat-row-content">
                <h3 className="feat-row-title">Real-Time Signal Delivery</h3>
                <p className="feat-row-desc">Each signal delivers direction, probability, and strength rating — Strong, Moderate, or Uncertain. Full transparency into every model call. You decide with complete information, never in the dark.</p>
              </div>
              <span className="fc-tag">Signals</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&fit=crop" alt="Real-time trading data feed on professional monitor" loading="lazy"/>
              </div>
            </div>

            <div className="feat-row reveal">
              <span className="feat-num">04</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
              <div className="feat-row-content">
                <h3 className="feat-row-title">Top 10 Liquidity Coverage</h3>
                <p className="feat-row-desc">Dedicated models for BTC, ETH, SOL, XRP, BNB, DOGE, ADA, AVAX, LINK, and TON across 30m, 1H, 4H, and daily timeframes. Fewer markets, deeper insight. We go all-in on the pairs that move money.</p>
              </div>
              <span className="fc-tag">Coverage</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&q=80&fit=crop" alt="Cryptocurrency market depth and order book data" loading="lazy"/>
              </div>
            </div>

            <div className="feat-row reveal">
              <span className="feat-num">05</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <defs><linearGradient id="lg-fi5" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#14fdfd"/><stop offset="1" stopColor="#1455e6"/></linearGradient></defs>
                  <line x1="3" y1="28" x2="29" y2="28" stroke="#1455e6" strokeWidth="0.5" opacity="0.3"/>
                  <rect className="feat-flow-bar" x="4"  y="14" width="3" height="14" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0s'}}/>
                  <rect className="feat-flow-bar" x="10" y="8"  width="3" height="20" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.3s'}}/>
                  <rect className="feat-flow-bar" x="16" y="18" width="3" height="10" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.6s'}}/>
                  <rect className="feat-flow-bar" x="22" y="6"  width="3" height="22" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.15s'}}/>
                  <rect className="feat-flow-bar" x="28" y="12" width="3" height="16" rx="1" fill="url(#lg-fi5)" style={{animationDelay:'0.45s'}}/>
                </svg>
              </div>
              <div className="feat-row-content">
                <h3 className="feat-row-title">Order Flow Intelligence</h3>
                <p className="feat-row-desc">Most models only see candles. Ours reads the tape. By analysing trade-level flow data, we detect institutional activity and momentum shifts happening inside each candle — before they show up in price.</p>
              </div>
              <span className="fc-tag">Order Flow</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=80&fit=crop" alt="Institutional trading floor with Bloomberg terminal and order flow data" loading="lazy"/>
              </div>
            </div>

            <div className="feat-row reveal">
              <span className="feat-num">06</span>
              <div className="feat-row-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <defs><linearGradient id="lg-fi6" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                  <circle cx="16" cy="16" r="11" stroke="#1455e6" strokeWidth="1.5" fill="none" opacity="0.18"/>
                  <g className="feat-retrain-g">
                    <circle cx="16" cy="16" r="11" stroke="url(#lg-fi6)" strokeWidth="2" fill="none" strokeDasharray="50 19" strokeLinecap="round"/>
                  </g>
                  <circle cx="16" cy="16" r="3.5" fill="#1455e6" opacity="0.4"/>
                  <circle cx="16" cy="16" r="1.8" fill="#14fdfd"/>
                </svg>
              </div>
              <div className="feat-row-content">
                <h3 className="feat-row-title">Weekly Adaptive Retraining</h3>
                <p className="feat-row-desc">Markets change. Our models keep up. Every week, a new model trains on two years of fresh data — and only goes live if it outperforms the current one. You always get the sharpest version, automatically.</p>
              </div>
              <span className="fc-tag">AI Core</span>
              <div className="feat-row-photo">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" alt="Macro circuit board with intricate high-tech chip architecture" loading="lazy"/>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="platform" className="platform-section">
        <div className="platform-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80&fit=crop"
            alt=""
            className="platform-bg-img"
            decoding="async"
            loading="lazy"
          />
          <div className="platform-bg-scrim" />
        </div>
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
              <span className="ann-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <div>
                <div className="ann-head">50ms Latency</div>
                <div className="ann-sub">Sub-millisecond delivery</div>
              </div>
            </div>
            <div className="annotation ann-br">
              <span className="ann-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.3 12.3l2.2 2.2 5.2-5.2" />
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
              <span className="btn-claw-logo-wrap">
                <img src="/claw-logo.png" alt="CLAW" className="btn-claw-logo" />
              </span>
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
            <a
              href="https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free — No Card Required
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="#sample-signal" className="btn btn-outline btn-lg">View Example Signals</a>
            {/* TODO: swap mailto for calendar booking URL (Calendly / cal.com) once provisioned */}
            <a href="mailto:hello@eagleailabs.com?subject=Book%20a%20Demo%20%E2%80%94%20Eagle%20AI%20Labs" className="btn btn-ghost btn-lg">Book a Demo</a>
          </div>
          <p className="cta-fine reveal">14-day free trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
