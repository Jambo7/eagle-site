import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import BlogSubscribe from "../components/blog-subscribe";

/* ────────────────────────────────────────────────────────────────
   Articles. Each links to the live post on eagleailabs.com, the
   CMS lives there; this page is the redesigned editorial surface.
   ──────────────────────────────────────────────────────────────── */

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "News" | "Product" | "Research" | "Thought Leadership" | "Community";
  date: string;
  dateIso: string;
  href: string;
};

const FEATURED: Article = {
  slug: "copy-trade-1v1-showdown",
  title: "The Copy Trade 1v1 Showdown is now live",
  excerpt:
    "The Copy Trade 1v1 Showdown is officially live inside CLAW. Mr. Fanan and Cutlery Boy are racing from $100 to $1000 in a real-time speed run powered entirely through Copy Trade, community members can follow along, learn from live execution and participate directly while strengthening the $EAI ecosystem.",
  category: "News",
  date: "Feb 17, 2026",
  dateIso: "2026-02-17",
  href: "https://www.eagleailabs.com/blog/the-copy-trade-1v1-showdown-is-now-live",
};

const ARTICLES: Article[] = [
  {
    slug: "auto-breakout-bot-copy-launch",
    title: "Auto Breakout Bot & Copy Launch",
    excerpt:
      "The Auto Breakout Bot and Copy Launch extend CLAW's automation stack, programmable signals, verifiable performance, zero friction execution.",
    category: "Product",
    date: "Feb 3, 2026",
    dateIso: "2026-02-03",
    href: "https://www.eagleailabs.com/blog/auto-breakout-bot-copy-launch",
  },
  {
    slug: "eagle-ai-labs-2026-roadmap",
    title: "Eagle AI Labs: 2026 Roadmap",
    excerpt:
      "What we&apos;re shipping this year, from The Oracle consensus engine to enterprise APIs, Ask Claw v2 and expansion into macro markets.",
    category: "News",
    date: "Jan 15, 2026",
    dateIso: "2026-01-15",
    href: "https://www.eagleailabs.com/blog/eagle-ai-labs-2026-roadmap",
  },
  {
    slug: "claw-is-live",
    title: "CLAW is Live",
    excerpt:
      "After months of closed beta, CLAW is live for every tier. The institutional-grade predictive terminal is open to traders, teams and funds.",
    category: "News",
    date: "Dec 18, 2025",
    dateIso: "2025-12-18",
    href: "https://www.eagleailabs.com/blog/claw-is-live",
  },
  {
    slug: "strategic-alignment-future-ai-trading",
    title: "Strategic Alignment for the Future of AI Trading",
    excerpt:
      "How we&apos;re aligning model research, product velocity and community incentives into a single institutional stack.",
    category: "Thought Leadership",
    date: "Dec 2, 2025",
    dateIso: "2025-12-02",
    href: "https://www.eagleailabs.com/blog/strategic-alignment-for-the-future-of-ai-trading",
  },
  {
    slug: "introducing-claw-trade-credits",
    title: "Introducing CLAW Trade Credits",
    excerpt:
      "CTCs are the fuel of copy trading and premium models inside CLAW, how they work, why they exist and how to earn them.",
    category: "Product",
    date: "Nov 28, 2025",
    dateIso: "2025-11-28",
    href: "https://www.eagleailabs.com/claw-trade-credits",
  },
  {
    slug: "bridging-defi-tradfi-ai",
    title: "Bridging DeFi and TradFi through AI innovation",
    excerpt:
      "How Eagle AI is using predictive AI to close the analytical gap between decentralised markets and institutional workflows.",
    category: "Thought Leadership",
    date: "Nov 19, 2025",
    dateIso: "2025-11-19",
    href: "https://www.eagleailabs.com/blog/bridging-defi-and-tradfi-through-ai-innovation",
  },
  {
    slug: "building-on-the-trading-floor",
    title: "Building on the trading floor",
    excerpt:
      "Inside how we designed CLAW, with real traders, at real desks, during real market hours.",
    category: "Product",
    date: "Oct 30, 2025",
    dateIso: "2025-10-30",
    href: "https://www.eagleailabs.com/blog/building-on-the-trading-floor",
  },
  {
    slug: "connect-claw-trade-to-apex",
    title: "Connect Claw Trade to Apex",
    excerpt:
      "The Apex integration lets Pro traders execute directly from CLAW, same predictive edge, lower latency, simpler workflow.",
    category: "Product",
    date: "Oct 14, 2025",
    dateIso: "2025-10-14",
    href: "https://www.eagleailabs.com/blog/connect-claw-trade-to-apex",
  },
  {
    slug: "the-eagle-still-soars-eai-today",
    title: "The Eagle Still Soars, $EAI Today",
    excerpt:
      "A progress report on the $EAI ecosystem, token utility, and how it powers CLAW&apos;s community layer.",
    category: "Community",
    date: "Sep 30, 2025",
    dateIso: "2025-09-30",
    href: "https://www.eagleailabs.com/blog/the-eagle-still-soars-eai-today",
  },
  {
    slug: "beta-testing-telegram",
    title: "Opening the final stage of beta testing to our Telegram community",
    excerpt:
      "The last gate before general availability, how the community shaped CLAW&apos;s production release.",
    category: "Community",
    date: "Sep 17, 2025",
    dateIso: "2025-09-17",
    href: "https://www.eagleailabs.com/blog/were-opening-the-final-stage-of-beta-testing-to-our-telegram-community",
  },
  {
    slug: "chaos-to-clarity-onchain-prediction",
    title: "From chaos to clarity: the definitive guide to on-chain market prediction",
    excerpt:
      "A long-form field guide on reading on-chain data for predictive signals, whale flows, liquidity rotation and order-book imbalance.",
    category: "Research",
    date: "Aug 20, 2025",
    dateIso: "2025-08-20",
    href: "https://www.eagleailabs.com/blog/from-chaos-to-clarity-the-definitive-guide-to-on-chain-market-prediction",
  },
  {
    slug: "defi-3-data-signals-tradfi-miss",
    title: "Understanding DeFi: 3 data signals TradFi traders miss",
    excerpt:
      "The three on-chain signals every institutional desk should be monitoring, and the models that turn them into edge.",
    category: "Research",
    date: "Aug 5, 2025",
    dateIso: "2025-08-05",
    href: "https://www.eagleailabs.com/blog/understanding-defi-3-data-signals-tradfi-traders-miss",
  },
];

const CATEGORIES: Array<Article["category"] | "All"> = [
  "All",
  "News",
  "Product",
  "Research",
  "Thought Leadership",
  "Community",
];

/**
 * /blog, editorial surface for Eagle AI Labs.
 *
 * Redesigned around the CLAW Suite system. Posts still live on the
 * primary eagleailabs.com CMS; this page is the curated, branded
 * entry point.
 */
export default function BlogPage() {
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
            <li><a href="/blog" aria-current="page">Blog</a></li>
            <li><a href="/about">About</a></li>
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

      <MobileNavDrawer active="blog" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-hero cs-hero-compact">
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">NEWSROOM</span>
          </div>

          <h1 className="cs-hero-title">
            News, research &amp; product<br />
            <span className="cs-hero-title-accent">from the desk.</span>
          </h1>

          <p className="cs-hero-sub">
            Product launches, market research and thought leadership from the
            team building the Bloomberg Terminal for digital assets. No
            recycled takes, only what we&apos;re seeing from inside the engine.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FEATURED ARTICLE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-blog-featured">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head cs-section-head-minor">
            <div className="cs-section-eyebrow">FEATURED</div>
          </div>

          <a href={FEATURED.href} target="_blank" rel="noopener" className="cs-blog-featured-card">
            <div className="cs-blog-featured-meta">
              <span className="cs-blog-cat">{FEATURED.category}</span>
              <span className="cs-blog-dot" aria-hidden="true">•</span>
              <time className="cs-mono" dateTime={FEATURED.dateIso}>{FEATURED.date}</time>
            </div>
            <h2 className="cs-blog-featured-title">{FEATURED.title}</h2>
            <p className="cs-blog-featured-excerpt">{FEATURED.excerpt}</p>
            <span className="cs-blog-featured-cta">
              Read article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ARTICLE GRID
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-blog-grid-section">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head cs-section-head-inline">
            <div>
              <div className="cs-section-eyebrow">LATEST ARTICLES</div>
              <h2 className="cs-section-title">Every post, in reverse chronological order.</h2>
            </div>

            <div className="cs-blog-cats" role="list">
              {CATEGORIES.map((c, i) => (
                <span
                  key={c}
                  role="listitem"
                  className={`cs-blog-cat-chip${i === 0 ? " is-active" : ""}`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="cs-blog-grid">
            {ARTICLES.map((a) => (
              <a key={a.slug} href={a.href} target="_blank" rel="noopener" className="cs-blog-card">
                <div className="cs-blog-card-meta">
                  <span className="cs-blog-cat">{a.category}</span>
                  <span className="cs-blog-dot" aria-hidden="true">•</span>
                  <time className="cs-mono" dateTime={a.dateIso}>{a.date}</time>
                </div>
                <h3 className="cs-blog-card-title">{a.title}</h3>
                <p className="cs-blog-card-excerpt">{a.excerpt}</p>
                <span className="cs-blog-card-cta">
                  Read article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════════════════ */}
      <section className="cs-blog-newsletter">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-newsletter-card">
            <div className="cs-newsletter-copy">
              <div className="cs-section-eyebrow">NEWSLETTER</div>
              <h2 className="cs-newsletter-title">
                Monthly intel, directly to your inbox.
              </h2>
              <p className="cs-newsletter-sub">
                The latest on crypto, Eagle AI Labs and the predictive models
                powering CLAW, once a month, straight to the point.
              </p>
            </div>

            <BlogSubscribe />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
