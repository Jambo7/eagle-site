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
            <h2 className="prod-title">
              <span className="gradient-text">CLAW Pro</span>
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

          {/* Right — CLAW Pro terminal animation */}
          <div className="prod-visual reveal">
            <div className="pcpt">

              {/* ── Top nav bar ── */}
              <div className="pcpt-topbar">
                <div className="pcpt-topbar-left">
                  <span className="pcpt-logo-clip">
                    <img src="/claw-logo.png" alt="CLAW Pro" className="pcpt-logo" />
                  </span>
                  <div className="pcpt-nav-tabs">
                    {['Pre-Trade','Trade','Post-Trade','Social','AutoTrade'].map((t,i) => (
                      <span key={t} className={`pcpt-nav-tab${i===0?' pcpt-tab-on':''}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pcpt-topbar-right">
                  <span className="pcpt-live-badge"><span className="pcpt-live-dot"/>LIVE</span>
                </div>
              </div>

              {/* ── Pair info bar ── */}
              <div className="pcpt-pairbar">
                <span className="pcpt-pair">BTC<span className="pcpt-slash">/</span>USDT</span>
                <span className="pcpt-price pcpt-price-pulse">69,696.00</span>
                <span className="pcpt-chg-pos">+0.04%</span>
                <span className="pcpt-bar-sep"/>
                <span className="pcpt-field">O <span className="pcpt-fv">69,668</span></span>
                <span className="pcpt-field">H <span className="pcpt-fv">70,424</span></span>
                <span className="pcpt-field">L <span className="pcpt-fv">69,081</span></span>
                <span className="pcpt-field">VOL <span className="pcpt-fv">222,009</span></span>
              </div>

              {/* ── Body ── */}
              <div className="pcpt-body">

                {/* Chart column */}
                <div className="pcpt-chart-col">
                  <div className="pcpt-chart-toolbar">
                    {['5','15','1H','4H','1D'].map((tf,i) => (
                      <span key={tf} className={`pcpt-tf${i===0?' pcpt-tf-on':''}`}>{tf}</span>
                    ))}
                    <span className="pcpt-tdiv"/>
                    <span className="pcpt-tchip">BB 8</span>
                    <span className="pcpt-tchip pcpt-tchip-ind">Indicators 88</span>
                  </div>

                  <div className="pcpt-chart-wrap">
                    <div className="pcpt-scanline"/>
                    <svg viewBox="0 0 252 108" className="pcpt-chart-svg" preserveAspectRatio="none">
                      <defs>
                        <filter id="cg-glow">
                          <feGaussianBlur stdDeviation="1.5" result="blur"/>
                          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                      </defs>
                      {/* Grid */}
                      {[18,36,54,72,90].map(y=>(
                        <line key={y} x1="0" y1={y} x2="252" y2={y} stroke="#1a2535" strokeWidth="0.5"/>
                      ))}
                      {/* Support levels */}
                      <line x1="0" y1="51" x2="252" y2="51" stroke="#00e676" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.75" className="pcpt-lvl"/>
                      <line x1="0" y1="78" x2="252" y2="78" stroke="#00e676" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.45"/>
                      <text x="196" y="48" fill="#00e676" fontSize="5.5" fontFamily="monospace" opacity="0.9">69,762</text>
                      <text x="196" y="75" fill="#00e676" fontSize="5.5" fontFamily="monospace" opacity="0.6">69,163</text>

                      {/* Candles: [open_y, close_y, high_y, low_y, isGreen] */}
                      {([
                        [85,72,67,90,true ],[72,65,60,76,true ],[65,70,60,76,false],
                        [70,55,48,73,true ],[55,49,44,58,true ],[49,54,45,58,false],
                        [54,47,43,58,true ],[47,55,43,60,false],[55,49,46,62,true ],
                        [49,57,46,62,false],[57,63,54,68,false],[63,56,52,68,true ],
                        [56,63,52,68,false],[63,58,55,70,true ],[58,65,55,70,false],
                        [65,72,62,78,false],[72,66,62,80,true ],
                      ] as [number,number,number,number,boolean][]).map(([o,c,h,l,g],i) => {
                        const x = i*14+3, cx = x+5;
                        const col = g ? '#26a69a' : '#ef5350';
                        return (
                          <g key={i}>
                            <line x1={cx} y1={h} x2={cx} y2={l} stroke={col} strokeWidth="1"/>
                            <rect x={x} y={g?c:o} width={10} height={Math.max(Math.abs(o-c),1.5)} fill={col} opacity="0.92"/>
                          </g>
                        );
                      })}

                      {/* Forming candle — animated */}
                      <g>
                        <line x1="244" y1="61" x2="244" y2="79" stroke="#ef5350" strokeWidth="1"/>
                        <rect x="239" y="67" width="10" height="6" fill="#ef5350" opacity="0.9" className="pcpt-forming"/>
                      </g>

                      {/* Current price dash */}
                      <line x1="0" y1="69" x2="239" y2="69" stroke="#14fdfd" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.4"/>
                    </svg>

                    <div className="pcpt-price-axis">
                      <span className="pcpt-price-tag">69,696</span>
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="pcpt-vol-wrap">
                    <svg viewBox="0 0 252 22" className="pcpt-vol-svg" preserveAspectRatio="none">
                      {[12,8,15,20,10,13,9,18,14,11,16,12,10,14,11,9,13,7].map((h,i)=>(
                        <rect key={i} x={i*14+3} y={22-h} width={10} height={h}
                          fill={[true,true,false,false,true,false,true,false,true,false,false,true,false,false,true,true,false,false][i]?'#26a69a':'#ef5350'}
                          opacity="0.5"/>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Right panels */}
                <div className="pcpt-right">

                  {/* Whale walls */}
                  <div className="pcpt-panel-block pcpt-walls-block">
                    <div className="pcpt-wall pcpt-wall-long">
                      <div className="pcpt-wall-lbl">LONG WALL <span className="pcpt-wall-pct">60%</span></div>
                      <div className="pcpt-wall-val">76,475</div>
                      <div className="pcpt-wall-bar"><div className="pcpt-wall-fill pcpt-wf-long" style={{width:'60%'}}/></div>
                    </div>
                    <div className="pcpt-wall pcpt-wall-short">
                      <div className="pcpt-wall-lbl">SHORT WALL <span className="pcpt-wall-pct">40%</span></div>
                      <div className="pcpt-wall-val">68,436</div>
                      <div className="pcpt-wall-bar"><div className="pcpt-wall-fill pcpt-wf-short" style={{width:'40%'}}/></div>
                    </div>
                  </div>

                  {/* Signal block */}
                  <div className="pcpt-panel-block pcpt-sig-block">
                    <div className="pcpt-sig-head">
                      <span className="pcpt-sig-badge">SHORT</span>
                      <span className="pcpt-sig-frac">L 0.67 · S 0.5</span>
                    </div>
                    <div className="pcpt-sig-sub">40% L $14.6M &nbsp;·&nbsp; 60% S $22.0M</div>
                    {[['BTC','55%','#26a69a'],['ETH','70%','#ef5350'],['SOL','48%','#26a69a']].map(([lbl,w,col])=>(
                      <div key={lbl} className="pcpt-sig-row">
                        <span className="pcpt-sig-lbl">{lbl}</span>
                        <div className="pcpt-sig-bar"><div className="pcpt-sig-fill" style={{width:w, background:col}}/></div>
                        <span className="pcpt-sig-pct">{w}</span>
                      </div>
                    ))}
                  </div>

                  {/* Liquidation heatmap */}
                  <div className="pcpt-panel-block pcpt-heat-block">
                    <div className="pcpt-panel-lbl">Liq. Heatmap <span className="pcpt-panel-lbl-sub">12h</span></div>
                    <svg viewBox="0 0 90 52" className="pcpt-heat-svg">
                      {Array.from({length:6}).map((_,row)=>
                        Array.from({length:10}).map((_,col)=>{
                          const v = (Math.sin(row*1.6+col*0.7+1)*0.5+0.5);
                          const hue = Math.round(185 - v*170);
                          return (
                            <rect key={`${row}-${col}`} x={col*9} y={row*9} width={8} height={8}
                              fill={`hsl(${hue},85%,52%)`} opacity={0.35+v*0.55}
                              className={`pcpt-hc pcpt-hc${(row+col)%4}`}/>
                          );
                        })
                      )}
                    </svg>
                  </div>

                </div>
              </div>

              {/* ── Bot strip ── */}
              <div className="pcpt-bot-strip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="pcpt-bot-icon">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#bg1)" strokeLinejoin="round"/>
                  <defs><linearGradient id="bg1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
                <span className="pcpt-bot-name">Breakout Bot</span>
                <span className="pcpt-bot-status"><span className="pcpt-bot-dot"/>Actively testing different setups...</span>
                <span className="pcpt-bot-exp">EXPERIMENTAL</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT 2 — CLAW STEALTH
      ══════════════════════════════════════════ */}
      <section className="prod-section prod-section-alt" id="claw-stealth">
        <div className="section-wrap prod-section-inner prod-section-inner-rev">
          {/* Left — visual */}
          <div className="prod-visual reveal">
            <div className="prod-stealth-mock">
              <div className="psm-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#sg1)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="url(#sg1)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="url(#sg1)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <defs><linearGradient id="sg1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#1455e6"/><stop offset="1" stopColor="#14fdfd"/></linearGradient></defs>
                </svg>
                <span>CLAW Stealth</span>
              </div>
              <div className="psm-agent-feed">
                <div className="psm-agent-msg psm-agent-active">
                  <span className="psm-agent-label">AI Agent</span>
                  <p>BTC entering high-conviction long zone. Model confidence: 88%</p>
                  <span className="psm-agent-time">2 min ago</span>
                </div>
                <div className="psm-agent-msg">
                  <span className="psm-agent-label">Alert Triggered</span>
                  <p>ETH 4H signal flipped LONG. Your alert has fired.</p>
                  <span className="psm-agent-time">14 min ago</span>
                </div>
                <div className="psm-agent-msg">
                  <span className="psm-agent-label">AI Agent</span>
                  <p>SOL short setup weakening — model uncertainty rising. Stand aside.</p>
                  <span className="psm-agent-time">31 min ago</span>
                </div>
              </div>
              <div className="psm-alerts">
                <span className="psm-alert-label">Your Alerts</span>
                <div className="psm-alert-chip psm-chip-on">BTC 1H LONG · Active</div>
                <div className="psm-alert-chip">ETH Confidence &gt; 80% · Waiting</div>
                <div className="psm-alert-chip">SOL 4H flip · Waiting</div>
              </div>
            </div>
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
