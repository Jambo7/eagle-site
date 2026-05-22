import DataFlowDiagram from "./components/data-flow-diagram";
import HeroIphoneMockup from "./components/hero-iphone-mockup";
import HeroMonitorMockup from "./components/hero-monitor-mockup";
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
          HERO  ·  Claw Pro v2 free relaunch
          Replaces the old "AI-architecture house" hero. New focal product
          is the now-free Claw Pro v2 desktop terminal; the visual is a
          dual-monitor stack (live dashboard in front, AutoTrade copytrade
          leaderboard floating behind). The iPhone mock has moved further
          down the page into its own Claw Stealth section.
      ══════════════════════════════════════════════════════════════════ */}
      <section id="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-grid" />
          <div className="hero-bg-glow" />
        </div>

        <div className="hero-content">
          <div className="hero-launch-pill reveal">
            <span className="hlp-dot" aria-hidden="true" />
            <span className="hlp-strong">NOW LIVE</span>
            <span className="hlp-sep" aria-hidden="true">·</span>
            <span>Claw Pro v2 is free for every trader</span>
          </div>

          <h1 className="hero-title reveal">
            The pro trading terminal.<br />
            <span className="hero-gradient-line">Now free.</span>
          </h1>

          <p className="hero-sub reveal">
            Claw Pro v2 puts predictive AI models, the full pro indicator
            stack, blockchain-verified copy trading, a social network
            with pro set-ups and trade analysis on every trader&apos;s
            desk. Free when you link a supported exchange UID.
          </p>

          <div className="hero-btns reveal">
            <a
              href={signupHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Get started free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#claw-suite" className="btn btn-outline btn-lg">
              See what&apos;s inside
            </a>
          </div>

          <p className="hero-fine reveal">
            Free with a linked exchange UID
            <span className="hero-fine-sep" aria-hidden="true">·</span>
            No card
            <span className="hero-fine-sep" aria-hidden="true">·</span>
            No trial limits
            <span className="hero-fine-sep" aria-hidden="true">·</span>
            Cancel anytime
          </p>

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
          <div className="hero-device-overline">
            <span className="hdo-rule" aria-hidden="true" />
            <h2 className="hdo-text">
              Claw Pro v2, <span className="hdo-text-accent">live</span>
            </h2>
            <span className="hdo-tag cs-mono" aria-hidden="true">
              Dashboard + AutoTrade leaderboard
            </span>
          </div>

          {/* Dual-monitor lockup. Back monitor (AutoTrade leaderboard)
              floats up and slightly right, rotated and dimmed so it reads
              as a secondary surface. Front monitor (live dashboard) sits
              flush, full size, anchoring the visual. */}
          <div className="hero-dual-screens">
            <figure className="hds-back" aria-label="Claw Pro v2 AutoTrade leaderboard screenshot">
              <HeroMonitorMockup
                src="/hero-claw-pro-v2-autotrade.png"
                alt="Claw Pro v2 AutoTrade leaderboard with 40 copy-trading strategies, scores, profit columns and ApeX UID linking"
              />
            </figure>
            <figure className="hds-front" aria-label="Claw Pro v2 trading dashboard screenshot">
              <HeroMonitorMockup
                src="/hero-claw-pro-v2-dashboard.png"
                alt="Claw Pro v2 trading dashboard with TradingView chart, whale alerts, market intel and liquidation heatmap"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          LINKED EXCHANGES  ·  trust strip directly under the hero
      ══════════════════════════════════════════════════════════════════ */}
      <section id="linked-exchanges" aria-label="Supported exchanges for UID linking">
        <div className="lx-wrap">
          <span className="lx-label cs-mono">LINKED EXCHANGES</span>
          <div className="lx-pills">
            <span className="lx-pill lx-live">
              <span className="lx-pill-dot" aria-hidden="true" />
              <span className="lx-pill-name">MEXC</span>
              <span className="lx-pill-status">LIVE</span>
            </span>
            <span className="lx-pill lx-live">
              <span className="lx-pill-dot" aria-hidden="true" />
              <span className="lx-pill-name">ApeX</span>
              <span className="lx-pill-status">LIVE</span>
            </span>
            <span className="lx-pill lx-live">
              <span className="lx-pill-dot" aria-hidden="true" />
              <span className="lx-pill-name">Binance</span>
              <span className="lx-pill-status">LIVE</span>
            </span>
            <span className="lx-pill lx-coming">
              <span className="lx-pill-dot" aria-hidden="true" />
              <span className="lx-pill-name">Blofin</span>
              <span className="lx-pill-status">COMING SOON</span>
            </span>
          </div>
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
                <li>CLAW Pro v2 desktop terminal &mdash; now free</li>
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
                learn on live capital.
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
            {/* Desktop: floating monitor mockup with real CLAW Pro
                terminal screenshot. Same component used in /products
                so the visual treatment is consistent across the site. */}
            <figure className="home-cs-shot-desktop">
              <HeroMonitorMockup
                src="/products-claw-pro-monitor.png"
                alt="CLAW Pro v2 trading terminal with live charts, whale activity, prediction card and breakout bot"
              />
              <figcaption className="home-cs-shot-caption">
                <span className="cs-mono">CLAW Pro v2</span>
                <span className="cs-caption-sep" aria-hidden="true">·</span>
                <span>Now free with a linked exchange UID</span>
              </figcaption>
            </figure>

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
              <div className="home-cs-cta-label cs-mono">LAUNCH · NOW FREE</div>
              <div className="home-cs-cta-title">Open CLAW Pro v2</div>
              <div className="home-cs-cta-sub">Free with a linked exchange UID. No card. No limits.</div>
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
          CLAW STEALTH MOBILE  ·  preserves the iPhone mockup the hero used
          to host, now framed as the companion to the desktop Pro v2
          terminal. iOS + Android, Ask Claw agent, live alerts on the move.
      ══════════════════════════════════════════════════════════════════ */}
      <section id="claw-stealth-home" className="home-stealth">
        <div className="section-wrap">
          <div className="home-stealth-grid">
            <div className="home-stealth-copy">
              <div className="cs-section-eyebrow">MOBILE &middot; CLAW STEALTH</div>
              <h2 className="cs-section-title">
                When you&apos;re away from the desk,<br />
                <span className="cs-section-title-accent">Claw Stealth keeps the watch.</span>
              </h2>
              <p className="home-stealth-lead">
                The mobile companion to Claw Pro v2. Predictive signals, the
                Ask Claw conversational agent, whale flow, liquidation
                heatmaps and live alerts &mdash; sized for the operator who
                moves. iOS and Android, fully synced with your desktop
                terminal.
              </p>

              <ul className="home-stealth-list">
                <li>
                  <span className="home-stealth-list-num cs-mono">01</span>
                  <div>
                    <h4>Ask Claw on the go</h4>
                    <p>
                      Generate trade set-ups in natural language &mdash;
                      entry, stop, targets and sizing &mdash; in seconds.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="home-stealth-list-num cs-mono">02</span>
                  <div>
                    <h4>Live alerts &amp; whale flow</h4>
                    <p>
                      Push alerts on signals, levels, whales, funding and
                      liquidations; never wait until you&apos;re back at the
                      desk.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="home-stealth-list-num cs-mono">03</span>
                  <div>
                    <h4>Synced with Pro v2</h4>
                    <p>
                      Watchlists, alerts, model feed and portfolio mirror
                      your desktop. Pick up exactly where you left off.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="home-stealth-ctas">
                <a
                  href="https://app.eagleailabs.com/auth/login"
                  className="btn btn-outline btn-lg"
                  target="_blank"
                  rel="noopener"
                >
                  Join the Stealth waitlist
                </a>
                <a href="/products#claw-stealth" className="btn btn-ghost btn-lg">
                  Read the full spec
                </a>
              </div>
            </div>

            <div className="home-stealth-visual reveal">
              <HeroIphoneMockup />
            </div>
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
            CLAW Pro v2 is free.<br />
            <span className="gradient-text">Link a UID and start trading smarter.</span>
          </h2>
          <p className="cta-sub reveal">
            Predictive AI models, the full pro indicator stack,
            blockchain-verified copy trading, a social network with pro
            set-ups and trade analysis &mdash; free with a linked
            supported-exchange UID.
          </p>
          <div className="cta-btns reveal">
            <a
              href={signupHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="#claw-suite" className="btn btn-outline btn-lg">Explore the CLAW Suite</a>
            {/* TODO: swap mailto for calendar booking URL once provisioned */}
            <a href="mailto:hello@eagleailabs.com?subject=Book%20a%20Demo%20Eagle%20AI%20Labs" className="btn btn-ghost btn-lg">Book a demo</a>
          </div>
          <p className="cta-fine reveal">Free with a linked exchange UID &nbsp;·&nbsp; MEXC, ApeX, Binance live &nbsp;·&nbsp; Blofin coming soon</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
