import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import AboutFaq from "../components/about-faq";

/* ────────────────────────────────────────────────────────────────
   Data, values, team, and long-view narrative.
   ──────────────────────────────────────────────────────────────── */

const VALUES = [
  {
    n: "01",
    title: "Innovation",
    desc: "We build what hasn't been built before. We challenge assumptions, test bold ideas, and use AI to push the boundary of what's possible in digital trading.",
  },
  {
    n: "02",
    title: "Ownership",
    desc: "We take responsibility for our work, our results and our impact. Every team member is trusted to lead, make decisions and treat the company's mission as their own.",
  },
  {
    n: "03",
    title: "Commitment",
    desc: "We show up for our users, our builders and our community. We listen closely, respond quickly, and shape the future of Eagle AI alongside the traders who live in it.",
  },
  {
    n: "04",
    title: "Openness",
    desc: "Transparency earns trust. From model performance to internal feedback, we share openly, listen deeply and improve together, in public.",
  },
  {
    n: "05",
    title: "Teamwork",
    desc: "We move faster together. Eagle AI is built by a collective of ambitious minds who collaborate, challenge and support each other every step of the way.",
  },
  {
    n: "06",
    title: "Growth",
    desc: "Whether scaling the platform, learning new skills or evolving the vision, we grow through every challenge we take on, as individuals and as a company.",
  },
];

const TEAM = [
  { name: "Jack Rockell",            role: "Global Product Development",  bio: "Leads a skilled team shipping the CLAW suite." },
  { name: "Darren Bishop",           role: "Global Operations Manager",    bio: "Expertise across the full operational stack of modern finance." },
  { name: "DK",                      role: "Product Development",          bio: "Builds and ships across the CLAW product surface, from spec to release." },
  { name: "Lee Steer",               role: "Global Managing Director",     bio: "Sales and business leadership across crypto, TradFi and fintech." },
  { name: "James Ratsma",            role: "Head of Marketing & Community",bio: "Retail and crypto market mastermind, connecting CLAW to traders." },
  { name: "Adam Johnson",            role: "Sales",                        bio: "Drives commercial growth and partner relationships across CLAW." },
  { name: "Martin Costa",            role: "Advisor",                       bio: "Years of deep financial-market experience." },
];

/**
 * /about, who we are, why we build, how we think.
 *
 * Design language inherits the CLAW Suite cs-* system: typographic hero,
 * numbered sections, sharp grid dividers, monospace metadata.
 */
export default function AboutPage() {
  return (
    <main className="claw-suite-page">
      <canvas id="bg-canvas" />

      {/* ── Navbar ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/products">Claw</a></li>
            <li><a href="/solutions">AI Solutions</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about" aria-current="page">About</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-ghost">Sign In</a>
            <a href="https://app.eagleailabs.com/auth/login" className="btn btn-primary">Get Started</a>
          </div>
          <button className="nav-burger" id="nav-burger" aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <MobileNavDrawer active="about" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-hero cs-hero-compact">
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">ABOUT</span>
          </div>

          <h1 className="cs-hero-title">
            Empowering the next generation<br />
            <span className="cs-hero-title-accent">of digital-asset decisions.</span>
          </h1>

          <p className="cs-hero-sub">
            Eagle AI Labs is a technology company building advanced tools for
            digital-asset traders. We combine predictive AI, real-time analytics
            and institutional-grade UX to close the gap between how crypto
            markets actually move and what most platforms can see.
          </p>

          {/* Credentials rail, institutional at-a-glance context. */}
          <div className="cs-stat-rail cs-stat-rail-about">
            <div className="cs-sr-item">
              <div className="cs-sr-num">2022</div>
              <div className="cs-sr-label cs-mono">FOUNDED</div>
            </div>
            <div className="cs-sr-divider" aria-hidden="true" />
            <div className="cs-sr-item">
              <div className="cs-sr-num">24 / 7</div>
              <div className="cs-sr-label cs-mono">GLOBAL OPS</div>
            </div>
            <div className="cs-sr-divider" aria-hidden="true" />
            <div className="cs-sr-item">
              <div className="cs-sr-num">NVIDIA</div>
              <div className="cs-sr-label cs-mono">DGX INFRA</div>
            </div>
            <div className="cs-sr-divider" aria-hidden="true" />
            <div className="cs-sr-item">
              <div className="cs-sr-num">B-Corp</div>
              <div className="cs-sr-label cs-mono">IN APPLICATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          JOURNEY, framed as the product of relentless refinement
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-about-manifesto">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">OUR JOURNEY</div>
            <h2 className="cs-section-title">
              Redefining the landscape of digital-asset intelligence.
            </h2>
          </div>
          <div className="cs-about-manifesto-grid">
            <div className="cs-about-manifesto-label">
              <span className="cs-mono">WHY WE BUILT THIS</span>
            </div>
            <div className="cs-about-manifesto-body">
              <p>
                At Eagle AI, we have redefined the landscape of digital-asset
                data through relentless innovation and technical depth. Our
                commitment to pushing boundaries has empowered countless
                operators to navigate complex markets with conviction.
              </p>
              <p>
                Most trading platforms were either too simple to be useful at
                a professional level, or too slow to keep up with a market
                that prices itself in seconds. We saw a gap between the
                complexity of crypto markets and the quality of the tools
                available, and we built Eagle AI Labs to close it with real
                intelligence, not hype.
              </p>
              <p>
                Our edge is precision. Our models are purpose-built for real
                market conditions, trained on quantitative signals and
                behavioural patterns. Our platform is designed for operators
                who take their own decisions, augmented, not replaced, by AI.
              </p>
              <p>
                Long term, we&apos;re building the Bloomberg Terminal for digital
                assets: an AI-first platform where professional traders, funds
                and communities analyse, execute and grow. Starting with
                crypto. Expanding into sports, macro and other high-stakes
                decision domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VALUES, spec-sheet grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-about-values">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">OUR VALUES</div>
            <h2 className="cs-section-title">
              Six principles that shape how we build, ship and operate.
            </h2>
          </div>

          <div className="cs-values-grid">
            {VALUES.map((v) => (
              <div key={v.n} className="cs-value-card">
                <div className="cs-value-num cs-mono">{v.n}</div>
                <h3 className="cs-value-title">{v.title}</h3>
                <p className="cs-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TEAM, institutional roster
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-about-team">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">OUR TEAM</div>
            <h2 className="cs-section-title">
              The operators behind Eagle AI Labs.
            </h2>
          </div>

          <div className="cs-team-grid">
            {TEAM.map((p) => (
              <article key={p.name} className="cs-team-card">
                <div className="cs-team-avatar" aria-hidden="true">
                  <span className="cs-team-initials">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div className="cs-team-meta">
                  <div className="cs-team-name">{p.name}</div>
                  <div className="cs-team-role cs-mono">{p.role}</div>
                  <p className="cs-team-bio">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-faq-section">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">FREQUENTLY ASKED</div>
            <h2 className="cs-section-title">
              The short version of who we are.
            </h2>
          </div>

          <AboutFaq />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
