import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import AboutFaq from "../components/about-faq";

/* ────────────────────────────────────────────────────────────────
   Data, values, community ownership, and ecosystem narrative.
   ──────────────────────────────────────────────────────────────── */

type ValueIcon =
  | "innovation"
  | "ownership"
  | "commitment"
  | "openness"
  | "teamwork"
  | "growth";

type Value = {
  n: string;
  title: string;
  desc: string;
  icon: ValueIcon;
};

const VALUES: Value[] = [
  {
    n: "01",
    title: "Innovation",
    desc: "Build what hasn't been built. Challenge assumptions, test bold ideas, push the boundary.",
    icon: "innovation",
  },
  {
    n: "02",
    title: "Ownership",
    desc: "Take responsibility for the work, the results, the impact. Treat the mission as your own.",
    icon: "ownership",
  },
  {
    n: "03",
    title: "Commitment",
    desc: "Show up for users, builders and community. Listen closely. Respond quickly. Ship constantly.",
    icon: "commitment",
  },
  {
    n: "04",
    title: "Openness",
    desc: "Transparency earns trust. Share model performance, feedback and progress, in public.",
    icon: "openness",
  },
  {
    n: "05",
    title: "Teamwork",
    desc: "Move faster together. A collective of ambitious minds who collaborate, challenge and support.",
    icon: "teamwork",
  },
  {
    n: "06",
    title: "Growth",
    desc: "Scale the platform. Learn new skills. Evolve the vision. Grow through every challenge.",
    icon: "growth",
  },
];

/**
 * Values icon set, sized 32×32, strokeWidth 1.5 line glyphs to match the
 * rest of the cs-* design language (mono, institutional, no fills). Each
 * is paired with one of the six values above by the `icon` field.
 */
function ValueIconSvg({ name }: { name: ValueIcon }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "innovation":
      // Lightning spark: bold, single-stroke
      return (
        <svg {...common}>
          <path d="M13 2L4 13h7v9l9-13h-7V2z" />
        </svg>
      );
    case "ownership":
      // Pennant flag on a pole, 'plant your mark'
      return (
        <svg {...common}>
          <path d="M5 3v18" />
          <path d="M5 4h12l-3 4 3 4H5" />
        </svg>
      );
    case "commitment":
      // Concentric target rings, follow-through, accuracy
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "openness":
      // Open eye / lens, transparency
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "teamwork":
      // Three nodes connected in a triangle
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <line x1="12" y1="7" x2="6" y2="16.5" />
          <line x1="12" y1="7" x2="18" y2="16.5" />
          <line x1="7" y1="18" x2="17" y2="18" />
        </svg>
      );
    case "growth":
      // Stepped uptrend with arrow tip — performance, scale
      return (
        <svg {...common}>
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="14 7 21 7 21 14" />
        </svg>
      );
  }
}

const COMMUNITY_CARDS = [
  {
    n: "01",
    title: "Ownership",
    desc: "The community plays an active role in shaping the direction of the ecosystem.",
  },
  {
    n: "02",
    title: "Governance",
    desc: "Major initiatives and ecosystem decisions are guided through community participation.",
  },
  {
    n: "03",
    title: "Contribution",
    desc: "Builders, marketers, developers and traders can contribute to ecosystem growth.",
  },
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
            <li><a href="/how-to-access">How to Access</a></li>
            <li><a href="/blog">Community</a></li>
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
            Predictive AI infrastructure<br />
            <span className="cs-hero-title-accent">for digital asset markets.</span>
          </h1>

          <p className="cs-hero-sub">
            Eagle AI Labs is a community-owned ecosystem focused on predictive
            AI infrastructure for digital asset markets. We combine real-time
            analytics, institutional-grade models and the CLAW product suite
            to close the gap between how crypto markets move and what most
            platforms can see.
          </p>

          {/* Credentials rail */}
          <div className="cs-stat-rail cs-stat-rail-about">
            <div className="cs-sr-item">
              <div className="cs-sr-num">2022</div>
              <div className="cs-sr-label cs-mono">ORIGINS</div>
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
              <div className="cs-sr-num">OPEN</div>
              <div className="cs-sr-label cs-mono">PARTICIPATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          JOURNEY, distilled to a pull quote and a 3-step arc
          (saw the gap → built the engine → expanding the domain)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-about-manifesto">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">OUR ECOSYSTEM</div>
            <h2 className="cs-section-title">
              Built through research, development and community participation.
            </h2>
          </div>

          <blockquote className="cs-about-quote">
            <span className="cs-about-quote-mark" aria-hidden="true">&ldquo;</span>
            <p>
              The Eagle AI Labs ecosystem was built through years of research,
              development and community participation. Today, contributors and
              token holders play an active role in helping steward the future
              of the ecosystem.
            </p>
            <footer className="cs-about-quote-attr cs-mono">
              EAGLE AI LABS &nbsp;/&nbsp; ECOSYSTEM THESIS
            </footer>
          </blockquote>

          <ol className="cs-about-pillars">
            <li className="cs-about-pillar">
              <div className="cs-about-pillar-num cs-mono">01 &middot; PREDICTIVE AI</div>
              <h3 className="cs-about-pillar-title">
                Models purpose-built for real market conditions.
              </h3>
              <p className="cs-about-pillar-desc">
                Quantitative signals and behavioural patterns, trained on
                live production data. Operator-grade intelligence designed
                to augment human decisions.
              </p>
            </li>
            <li className="cs-about-pillar cs-about-pillar-arrow" aria-hidden="true" />
            <li className="cs-about-pillar">
              <div className="cs-about-pillar-num cs-mono">02 &middot; DIGITAL ASSET TOOLS</div>
              <h3 className="cs-about-pillar-title">
                CLAW delivers intelligence at every scale.
              </h3>
              <p className="cs-about-pillar-desc">
                A professional terminal, mobile companion and enterprise
                deployment. The same predictive engine, accessible to every
                trader and institution.
              </p>
            </li>
            <li className="cs-about-pillar cs-about-pillar-arrow" aria-hidden="true" />
            <li className="cs-about-pillar">
              <div className="cs-about-pillar-num cs-mono">03 &middot; OPEN PARTICIPATION</div>
              <h3 className="cs-about-pillar-title">
                Community stewardship at the core.
              </h3>
              <p className="cs-about-pillar-desc">
                Traders, builders and contributors from around the world help
                support growth, governance and adoption across the ecosystem.
              </p>
            </li>
          </ol>
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
              Principles that guide how the ecosystem builds and ships.
            </h2>
          </div>

          <div className="cs-values-grid">
            {VALUES.map((v) => (
              <div key={v.n} className="cs-value-card">
                <div className="cs-value-card-head">
                  <span className="cs-value-icon" aria-hidden="true">
                    <ValueIconSvg name={v.icon} />
                  </span>
                  <div className="cs-value-num cs-mono">{v.n}</div>
                </div>
                <h3 className="cs-value-title">{v.title}</h3>
                <p className="cs-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMMUNITY OWNERSHIP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-about-community">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">COMMUNITY OWNERSHIP</div>
            <h2 className="cs-section-title">
              Community-Owned. Community-Guided.
            </h2>
            <p className="cs-section-lead">
              The Eagle AI Labs ecosystem is stewarded by a global community of
              traders, contributors, developers and token holders who help
              shape its future.
            </p>
          </div>

          <div className="cs-community-cards">
            {COMMUNITY_CARDS.map((c) => (
              <article key={c.n} className="cs-community-card">
                <div className="cs-community-card-num cs-mono">{c.n}</div>
                <h3 className="cs-community-card-title">{c.title}</h3>
                <p className="cs-community-card-desc">{c.desc}</p>
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
