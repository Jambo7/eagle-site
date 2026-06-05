import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";
import {
  COMMUNITY_TELEGRAM,
  COMMUNITY_X,
  DOCUMENTATION_HREF,
} from "../lib/community-links";

type CommunityChannel = {
  id: string;
  label: string;
  desc: string;
  href: string;
  external?: boolean;
  icon: "telegram" | "x" | "docs";
};

const CHANNELS: CommunityChannel[] = [
  {
    id: "telegram",
    label: "Telegram",
    desc: "The primary community hub. Product updates, ecosystem discussion, support and participation.",
    href: COMMUNITY_TELEGRAM,
    external: true,
    icon: "telegram",
  },
  {
    id: "x",
    label: "X",
    desc: "Announcements, market insights and ecosystem news from the Eagle AI Labs community.",
    href: COMMUNITY_X,
    external: true,
    icon: "x",
  },
  {
    id: "docs",
    label: "Documentation",
    desc: "Technical overview of predictive AI infrastructure, model architecture and the CLAW product stack.",
    href: DOCUMENTATION_HREF,
    icon: "docs",
  },
];

function ChannelIcon({ name }: { name: CommunityChannel["icon"] }) {
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
  if (name === "telegram") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    );
  }
  if (name === "x") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" />
    </svg>
  );
}

export default function CommunityUpdatesPage() {
  return (
    <main className="claw-suite-page">
      <canvas id="bg-canvas" />

      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Eagle AI Labs" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/products">Claw</a></li>
            <li><a href="/solutions">AI Solutions</a></li>
            <li><a href="/how-to-access">How to Access</a></li>
            <li><a href="/blog" aria-current="page">Community</a></li>
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

      <section className="cs-hero cs-hero-compact">
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
            <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
            <span className="cs-eyebrow-label">COMMUNITY UPDATES</span>
          </div>

          <h1 className="cs-hero-title">
            Stay connected to the<br />
            <span className="cs-hero-title-accent">ecosystem.</span>
          </h1>

          <p className="cs-hero-sub">
            Product updates, ecosystem news and community discussion live
            across our official channels. Join the conversation, follow
            development and participate in the Eagle AI Labs ecosystem.
          </p>
        </div>
      </section>

      <section className="cs-community-updates">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-community-channels">
            {CHANNELS.map((ch) => (
              <a
                key={ch.id}
                href={ch.href}
                className="cs-community-channel-card"
                {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="cs-community-channel-icon" aria-hidden="true">
                  <ChannelIcon name={ch.icon} />
                </span>
                <div className="cs-community-channel-body">
                  <h2 className="cs-community-channel-title">{ch.label}</h2>
                  <p className="cs-community-channel-desc">{ch.desc}</p>
                </div>
                <span className="cs-community-channel-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <div className="cs-community-cta-block">
            <p className="cs-community-cta-text">
              Ready to participate? The Telegram community is the fastest way
              to get involved, ask questions and connect with other traders
              and contributors.
            </p>
            <a
              href={COMMUNITY_TELEGRAM}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join The Community
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
