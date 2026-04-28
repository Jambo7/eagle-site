import DataFlowDiagram from "./components/data-flow-diagram";
import HeroIphoneMockup from "./components/hero-iphone-mockup";
import MobileNavDrawer from "./components/mobile-nav-drawer";
import SiteFooter from "./components/site-footer";

export default function Home() {
  const signupHref =
    "https://app.eagleailabs.com/claw/pretrade?utm_source=owned-eagle&utm_medium=website&utm_campaign=Claw&business_line=Claw-All&start=start-evergreen&end=end-evergreen&objective=registration&tactic=none+selected";

  return (
    <>
      <canvas id="bg-canvas"></canvas>

      <nav id="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/products">Claw</a></li>
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
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <MobileNavDrawer active="home" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section id="hero">
        {/* Institutional backdrop: subtle grid, soft radial depth, and a
            faint stage glow behind the device. Sharp, restrained, fintech. */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-grid" />
          <div className="hero-bg-glow" />
        </div>

        <div className="hero-content">
          {/* Market status strip: institutional "systems live" cue,
              sits above the eyebrow as a constant ambient signal. */}
          <div className="hero-status-bar reveal" aria-hidden="true">
            <span className="hs-dot" />
            <span className="hs-label cs-mono">SYSTEM ONLINE</span>
            <span className="hs-sep">/</span>
            <span className="cs-mono">ORACLE v2.4</span>
            <span className="hs-sep">/</span>
            <span className="cs-mono">LATENCY 47ms</span>
            <span className="hs-sep">/</span>
            <span className="cs-mono">BTC · ETH · SOL · XRP</span>
          </div>

          <p className="hero-eyebrow reveal">AI-native predictive intelligence</p>

          <h1 className="hero-title reveal">
            Predict Markets<br />
            <span className="hero-gradient-line">Before They Move</span>
          </h1>

          <p className="hero-sub reveal">
            Eagle AI Labs is an AI-architecture house. We build predictive
            systems for institutional trading desks, hedge funds and
            market-data partners, and ship the same core engines inside
            CLAW, our intelligence suite for retail traders. The same
            infrastructure is being extended into sports, macro and any
            domain where probabilistic decisions are valued.
          </p>

          <div className="hero-btns reveal">
            <a
              href={signupHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Start free trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#claw-suite" className="btn btn-outline btn-lg">
              Explore the CLAW Suite
            </a>
          </div>

          <div className="hero-metrics reveal">
            <div className="hm-item">
              <div className="hm-val"><span data-count="6" data-decimals="0">0</span></div>
              <div className="hm-label cs-mono">PREDICTIVE NEURAL NETWORK MODELS</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val"><span data-count="4" data-decimals="0">0</span></div>
              <div className="hm-label cs-mono">ALGORITHMIC MODELS</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val hm-val-status">
                <span className="hm-dot" aria-hidden="true"></span>
                <span className="hm-status-txt">LIVE</span>
              </div>
              <div className="hm-label cs-mono">AI REGIME ANALYSIS</div>
            </div>
            <div className="hm-sep"></div>
            <div className="hm-item">
              <div className="hm-val hm-val-status">
                <span className="hm-dot" aria-hidden="true"></span>
                <span className="hm-status-txt">ACTIVE</span>
              </div>
              <div className="hm-label cs-mono">ORACLE OPTIMISATION</div>
            </div>
          </div>
        </div>

        <div className="hero-chart reveal">
          {/* Editorial overline above the device. Hairline rule + big oblique
              display lockup + tiny mono caption gives the iPhone a confident,
              "chapter title" frame instead of letting it hover unattached. */}
          <div className="hero-device-overline">
            <span className="hdo-rule" aria-hidden="true" />
            <h2 className="hdo-text">
              AI at the <span className="hdo-text-accent">core</span>
            </h2>
            <span className="hdo-tag cs-mono" aria-hidden="true">
              The prediction engine, in your pocket
            </span>
          </div>
          <HeroIphoneMockup />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════════════════════ */}
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
            <span>Regime Detection</span><span className="mdot">◆</span>
            <span>Deep Learning</span><span className="mdot">◆</span>
            <span>Predictive Signals</span><span className="mdot">◆</span>
            <span>Neural Architecture</span><span className="mdot">◆</span>
            <span>Transformer Models</span><span className="mdot">◆</span>
            <span>Real-Time Processing</span><span className="mdot">◆</span>
            <span>Quantitative Analysis</span><span className="mdot">◆</span>
            <span>Market Microstructure</span><span className="mdot">◆</span>
            <span>On-Chain Intelligence</span><span className="mdot">◆</span>
            <span>Sentiment Analysis</span><span className="mdot">◆</span>
            <span>Regime Detection</span><span className="mdot">◆</span>
            <span>Deep Learning</span><span className="mdot">◆</span>
            <span>Predictive Signals</span><span className="mdot">◆</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          TRUSTED
      ══════════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════════
          WHO WE ARE
          A three-card spec-sheet explaining the two-sided business:
          bespoke AI architectures for institutional partners and
          pre-built predictive engines embedded inside CLAW for retail
          traders. Same infrastructure, different surface area.
      ══════════════════════════════════════════════════════════════════ */}
      <section id="who-we-are" className="home-who">
        <div className="section-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">WHO WE ARE</div>
            <h2 className="cs-section-title">
              Built by industry professionals.<br />
              <span className="cs-section-title-accent">Deployed at every scale.</span>
            </h2>
            <p className="cs-section-lead">
              Eagle AI Labs is a predictive intelligence house. We build
              custom AI architectures to specification for institutional
              partners: hedge funds, trading desks, market makers and
              data providers. The same production engines are embedded
              inside CLAW, our suite for retail traders, so every user
              gets the same research calibre of infrastructure regardless
              of account size.
            </p>
          </div>

          <div className="home-who-grid">
            <article className="home-who-card">
              <div className="home-who-num cs-mono">01</div>
              <h3 className="home-who-title">Bespoke AI architectures</h3>
              <p className="home-who-desc">
                Custom predictive models built to specification with
                institutional partners. Models are tuned to your desk,
                your book, your strategy. Delivered with direct
                engineering support and institutional SLAs.
              </p>
              <ul className="home-who-list">
                <li>Hedge funds and prop desks</li>
                <li>Market makers and liquidity venues</li>
                <li>Data and infrastructure partners</li>
              </ul>
              <a href="/products#claw-enterprise" className="home-who-cta">
                Partner with us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </article>

            <article className="home-who-card home-who-card-featured">
              <div className="home-who-num cs-mono">02</div>
              <h3 className="home-who-title">Production-grade infrastructure</h3>
              <p className="home-who-desc">
                The same engine powers every tier. Trained on NVIDIA DGX
                clusters, cross-validated across independent model seeds,
                continuously retrained against live production data.
                Research calibre, productised.
              </p>
              <ul className="home-who-list">
                <li>6 predictive neural network models</li>
                <li>4 algorithmic models with AI regime analysis</li>
                <li>The Oracle: multi-model consensus engine</li>
              </ul>
              <a href="/technology" className="home-who-cta">
                Explore the technology
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </article>

            <article className="home-who-card">
              <div className="home-who-num cs-mono">03</div>
              <h3 className="home-who-title">Retail predictive engines</h3>
              <p className="home-who-desc">
                CLAW puts the same predictive engines at the fingertips
                of every trader: pre-built models, Ask Claw AI agent,
                copy trading and a full pro indicator stack across
                desktop and mobile.
              </p>
              <ul className="home-who-list">
                <li>CLAW Pro desktop terminal</li>
                <li>CLAW Stealth mobile companion</li>
                <li>Ask Claw conversational agent</li>
              </ul>
              <a href="#claw-suite" className="home-who-cta">
                See the CLAW Suite
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TECHNOLOGY  /  Built on a Foundation of Proven Alpha
          Updated with the Infinite Point Capital example: live-capital
          refinement over multiple years, not a sandbox.
      ══════════════════════════════════════════════════════════════════ */}
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
                For over two years, Eagle AI Labs has operated at the
                frontier of predictive market intelligence. Our models
                have been battle-tested across bull runs, bear markets
                and high-volatility regimes, continuously adapting and
                compounding edge.
              </p>
              <p className="reveal">
                A live example: Infinite Point Capital, a hedge fund
                running our predictive infrastructure, has continuously
                refined its trading strategies against our production
                signals. Our models did not learn in a sandbox. They
                learned on live capital.
              </p>

              <div className="tech-stats-grid">
                <div className="tsg-item reveal">
                  <div className="tsg-val gradient-text">2+ Years</div>
                  <div className="tsg-label">Live Production Track Record</div>
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

      {/* ══════════════════════════════════════════════════════════════════
          THE CLAW SUITE
          Replaces the old Platform section. Absorbs the old Process
          section as a 3-step "engine pipeline" strip inside this block.
          Heavy on specific capabilities and conversion CTAs.
      ══════════════════════════════════════════════════════════════════ */}
      <section id="claw-suite" className="home-claw-suite">
        <div className="platform-bg" aria-hidden="true">
          <div className="home-cs-bg-grid" />
          <div className="platform-bg-scrim" />
        </div>

        <div className="section-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">THE CLAW SUITE</div>
            <h2 className="cs-section-title">
              Everything a serious trader needs.<br />
              <span className="cs-section-title-accent">One suite. Zero compromises.</span>
            </h2>
            <p className="cs-section-lead">
              CLAW combines our full predictive model stack with
              blockchain-verified copy trading, an AI agent that builds
              trade set-ups, the highest-quality market data delivery,
              full DEX and CEX execution coverage and every pro indicator
              serious operators expect. All under one roof, on desktop
              and mobile.
            </p>
          </div>

          {/* ───── 6-card capability grid ───── */}
          <div className="home-cs-caps">
            <article className="home-cs-cap">
              <div className="home-cs-cap-num cs-mono">01</div>
              <h3 className="home-cs-cap-title">Predictive AI Models</h3>
              <p className="home-cs-cap-desc">
                Six predictive neural network models and four algorithmic
                models running on live data. Each signal ships with a
                calibrated confidence score, entry, target and stop.
              </p>
              <a href={signupHref} target="_blank" rel="noopener" className="home-cs-cap-link">
                Open the terminal
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>

            <article className="home-cs-cap">
              <div className="home-cs-cap-num cs-mono">02</div>
              <h3 className="home-cs-cap-title">Blockchain-verified copy trading</h3>
              <p className="home-cs-cap-desc">
                Follow the best operators on-chain, not on claims. Every
                copyable desk is settled and verified via on-chain
                analysis, so performance is auditable at the block level.
              </p>
              <a href="/products" className="home-cs-cap-link">
                See operator profiles
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>

            <article className="home-cs-cap home-cs-cap-featured">
              <div className="home-cs-cap-num cs-mono">03</div>
              <h3 className="home-cs-cap-title">Ask Claw, AI agent</h3>
              <p className="home-cs-cap-desc">
                A conversational AI agent that builds trade set-ups on
                request. Ask for bias, triggers, invalidations and
                sizing, in natural language. Actionable output in
                seconds, not hours.
              </p>
              <a href={signupHref} target="_blank" rel="noopener" className="home-cs-cap-link">
                Talk to Claw
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>

            <article className="home-cs-cap">
              <div className="home-cs-cap-num cs-mono">04</div>
              <h3 className="home-cs-cap-title">Pro indicators &amp; data</h3>
              <p className="home-cs-cap-desc">
                Order-flow, liquidation heatmaps, funding, sentiment, on-chain,
                macro. The complete professional-grade data stack, streamed
                to your dashboard and your API at institutional quality.
              </p>
              <a href="/technology" className="home-cs-cap-link">
                See the data stack
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>

            <article className="home-cs-cap">
              <div className="home-cs-cap-num cs-mono">05</div>
              <h3 className="home-cs-cap-title">DEX &amp; CEX integration</h3>
              <p className="home-cs-cap-desc">
                Connect every major centralised and decentralised venue
                from a single interface. Unified order routing, one
                portfolio view, no context-switching between dashboards.
              </p>
              <a href="/products" className="home-cs-cap-link">
                View supported venues
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>

            <article className="home-cs-cap">
              <div className="home-cs-cap-num cs-mono">06</div>
              <h3 className="home-cs-cap-title">Customisable alert engine</h3>
              <p className="home-cs-cap-desc">
                Programmable alerts on signals, levels, whales, funding,
                liquidations, on-chain flows, macro prints. Piped to
                Telegram, push, webhook, or directly into the breakout
                bot for automated execution.
              </p>
              <a href={signupHref} target="_blank" rel="noopener" className="home-cs-cap-link">
                Wire up alerts
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </article>
          </div>

          {/* ───── Real CLAW imagery: desktop terminal + mobile companions
              Sharp, institutional framing. Browser chrome + phone chrome
              anchors the product; annotations surface headline numbers. */}
          <div className="home-cs-shots reveal">
            {/* Desktop: real CLAW Pro dashboard screenshot */}
            <figure className="home-cs-shot-desktop cs-pro-figure">
              <div className="cs-pro-figure-bar">
                <span className="cs-pf-dot" />
                <span className="cs-pf-dot" />
                <span className="cs-pf-dot" />
                <span className="cs-pf-url">app.eagleailabs.com / claw / pro</span>
              </div>
              <img
                src="/products-claw-pro-dashboard.png"
                alt="CLAW Pro trading terminal with live charts, whale activity, prediction card and breakout bot"
                className="cs-pro-img"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="home-cs-shot-caption">
                <span className="cs-mono">CLAW Pro v2.1</span>
                <span className="cs-caption-sep" aria-hidden="true">·</span>
                <span>Live BTC/USD · 4H model consensus</span>
              </figcaption>

              <div className="annotation ann-tl home-cs-ann">
                <span className="ann-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </span>
                <div>
                  <div className="ann-head">50ms Latency</div>
                  <div className="ann-sub">Sub-second signal delivery</div>
                </div>
              </div>
              <div className="annotation ann-br home-cs-ann">
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
            </figure>

            {/* Mobile: two Ask Claw stealth shots, tight institutional frame */}
            <div className="home-cs-shot-mobile">
              <div className="home-cs-mob-header">
                <span className="cs-mono home-cs-mob-tag">ASK CLAW · STEALTH</span>
                <span className="home-cs-mob-sub">Same engine, pocket-sized.</span>
              </div>
              <div className="home-cs-mob-stack">
                <div className="home-cs-phone home-cs-phone-front">
                  <img
                    src="/hero-phone/5.png"
                    alt="Ask Claw quick prompts for best set-up, direction and altcoin plays"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="home-cs-phone home-cs-phone-back">
                  <img
                    src="/hero-phone/6.png"
                    alt="Ask Claw generated ETH long trade plan with entry, stop and targets"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ───── 3-step engine pipeline (merged from old /how-it-works) ───── */}
          <div className="home-cs-pipeline">
            <div className="home-cs-pipeline-head">
              <span className="cs-mono home-cs-pipeline-label">ENGINE PIPELINE</span>
              <h3 className="home-cs-pipeline-title">How CLAW generates alpha, end to end.</h3>
            </div>
            <ol className="home-cs-pipeline-steps">
              <li className="home-cs-step">
                <span className="home-cs-step-num cs-mono">01</span>
                <div>
                  <h4>Multi-source data ingestion</h4>
                  <p>200+ real-time streams: order books, trade flow, on-chain metrics, sentiment signals and macro prints, normalised at microsecond precision.</p>
                </div>
              </li>
              <li className="home-cs-step">
                <span className="home-cs-step-num cs-mono">02</span>
                <div>
                  <h4>Neural model processing</h4>
                  <p>Proprietary transformer architectures and ensemble stacks detect non-linear patterns, regime shifts and leading indicators with institutional precision.</p>
                </div>
              </li>
              <li className="home-cs-step">
                <span className="home-cs-step-num cs-mono">03</span>
                <div>
                  <h4>Signal delivery &amp; execution</h4>
                  <p>Calibrated forecasts reach your terminal, mobile, API or webhook in under 50ms, ready for manual or automated execution.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* ───── Conversion row: three strong CTAs ───── */}
          <div className="home-cs-cta-row reveal">
            <a
              href={signupHref}
              className="home-cs-cta-card home-cs-cta-primary"
              target="_blank"
              rel="noopener"
            >
              <div className="home-cs-cta-label cs-mono">LAUNCH</div>
              <div className="home-cs-cta-title">Open CLAW Pro</div>
              <div className="home-cs-cta-sub">Start a 3-day free trial. No card required.</div>
              <span className="home-cs-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
            </a>
            <a href="/products" className="home-cs-cta-card">
              <div className="home-cs-cta-label cs-mono">EXPLORE</div>
              <div className="home-cs-cta-title">The full CLAW Suite</div>
              <div className="home-cs-cta-sub">Pro, Stealth and Enterprise in depth.</div>
              <span className="home-cs-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
            </a>
            <a href="/products#claw-enterprise" className="home-cs-cta-card">
              <div className="home-cs-cta-label cs-mono">PARTNER</div>
              <div className="home-cs-cta-title">Enterprise access</div>
              <div className="home-cs-cta-sub">Bespoke models, APIs and institutional SLA.</div>
              <span className="home-cs-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
            </a>
          </div>

          <div className="platform-cta reveal">
            <a
              href={signupHref}
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

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
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
              href={signupHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start free, no card required
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="#claw-suite" className="btn btn-outline btn-lg">Explore the CLAW Suite</a>
            {/* TODO: swap mailto for calendar booking URL once provisioned */}
            <a href="mailto:hello@eagleailabs.com?subject=Book%20a%20Demo%20Eagle%20AI%20Labs" className="btn btn-ghost btn-lg">Book a demo</a>
          </div>
          <p className="cta-fine reveal">3-day free trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
