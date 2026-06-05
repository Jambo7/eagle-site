import type { Metadata } from "next";
import MobileNavDrawer from "../components/mobile-nav-drawer";
import SiteFooter from "../components/site-footer";

/**
 * /security  ,  Eagle AI Labs scam-awareness & user-safety page.
 *
 * Surfaced from:
 *  - The FAQ "I need help from a human" card on /how-to-access
 *  - The Resources column in the site footer
 *  - The legal bar at the bottom of every page
 *
 * Telegram impersonation is the most common attack our user base
 * faces (fake mods DMing users mid-conversation, copy-paste profiles,
 * spoofed channel handles), so this page leads with the Telegram
 * angle and then broadens out into general phishing / sensitive-info
 * hygiene. All telegram and social URLs in this file are owned by
 * Eagle AI Labs.
 *
 * Style: reuses the CLAW Suite `cs-*` design language for section
 * heads, plus a `sec-*` namespace for security-specific layout
 * (rules grid, red-flag tiles, real-vs-fake compare block, response
 * checklist). On-brand visual punctuation is delivered via the same
 * blue radial-glow + drop-shadow lockup used elsewhere on the site
 * (hero shield SVG), plus inline SVG iconography per tile rather
 * than stock photography  ,  consistent with the rest of the site.
 */

export const metadata: Metadata = {
  title: "Beware of Scammers | Eagle AI Labs Security",
  description:
    "Stay safe with Eagle AI Labs. The team will never DM you first or ask for sensitive info. Spot Telegram impersonators, phishing sites, and fake giveaways using these tips.",
};

/** Single source of truth for every official Eagle channel. */
const OFFICIAL = {
  site: "https://www.eagleailabs.com",
  app: "https://app.eagleailabs.com",
  telegram: "https://t.me/EAGLEAI_OFFICIAL",
  telegramHandle: "@EAGLEAI_OFFICIAL",
  x: "https://x.com/EagleAILabs",
  xHandle: "@EagleAILabs",
  linkedin: "https://www.linkedin.com/company/eagleailabs",
  youtube: "https://youtube.com/@eagleailabs",
  instagram: "https://www.instagram.com/eagleailabs",
  tiktok: "https://www.tiktok.com/@eagle_ai_labs",
  medium: "https://medium.com/@EagleAI",
  email: "hello@eagleailabs.com",
} as const;

export default function SecurityPage() {
  return (
    <main className="sec-page">
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

      <MobileNavDrawer active="security" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-hero">
        <div className="sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-hero-eyebrow">
              <span className="cs-eyebrow-ticker">EAGLE AI LABS</span>
              <span className="cs-eyebrow-sep" aria-hidden="true">/</span>
              <span className="cs-eyebrow-label">SECURITY &middot; STAY SAFE</span>
            </div>

            <h1 className="sec-hero-title">
              Beware of<br />
              <span className="sec-hero-title-accent">scammers.</span>
            </h1>

            <p className="sec-hero-sub">
              Crypto attracts predators. The most common pattern we see
              is impersonators on Telegram who slide into your DMs the
              moment you mention an issue in the public channel. They
              are <strong>never</strong> us. This page tells you how
              to tell them apart, and how to keep your account, your
              funds, and your sanity intact.
            </p>

            <div className="sec-hero-cta-row">
              <a
                href={OFFICIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join the real Telegram
              </a>
              <a href="#golden-rules" className="btn btn-outline btn-lg">
                Read the rules
              </a>
            </div>
          </div>

          {/* Shield visual ,  inline SVG so it inherits the brand
              radial glow used by .sec-hero-shield::before, no asset
              dependency. */}
          <div className="sec-hero-shield" aria-hidden="true">
            <svg viewBox="0 0 240 240" width="100%" height="100%">
              <defs>
                <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ac6d6" />
                  <stop offset="60%" stopColor="#1455e6" />
                  <stop offset="100%" stopColor="#0a2d8a" />
                </linearGradient>
                <linearGradient id="shieldStroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9be3ee" />
                  <stop offset="100%" stopColor="#3aa1cf" />
                </linearGradient>
              </defs>
              <path
                d="M120 18 L210 50 L210 116 C210 168 174 206 120 224 C66 206 30 168 30 116 L30 50 Z"
                fill="url(#shieldGrad)"
                stroke="url(#shieldStroke)"
                strokeWidth="3"
                opacity="0.95"
              />
              <path
                d="M88 122 L112 146 L156 100"
                fill="none"
                stroke="#ffffff"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE GOLDEN RULES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-rules" id="golden-rules">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">THE GOLDEN RULES</div>
            <h2 className="cs-section-title">
              Three rules that stop 95% of attacks.
            </h2>
            <p className="cs-section-lead">
              If anyone breaks any of these three rules, they are not
              Eagle. Doesn&apos;t matter how convincing the avatar, the
              tone, or the &quot;proof&quot; looks.
            </p>
          </div>

          <ol className="sec-rules-grid">
            <li className="sec-rule">
              <div className="sec-rule-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="13" x2="13" y2="13"/></svg>
              </div>
              <span className="sec-rule-num cs-mono">RULE 01</span>
              <h3>We will never DM you first.</h3>
              <p>
                Real team and real mods <strong>never</strong> open a
                DM with you. We will only respond inside the public
                Telegram channel, in a thread you started, or in a
                ticket inside the app. If a DM arrives unprompted
                claiming to be Eagle &mdash; it isn&apos;t.
              </p>
            </li>

            <li className="sec-rule">
              <div className="sec-rule-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <span className="sec-rule-num cs-mono">RULE 02</span>
              <h3>We will never ask for sensitive info.</h3>
              <p>
                Not your password. Not your seed phrase. Not your
                exchange API keys with withdraw permissions. Not your
                2FA codes. Not screen-share access. Not a &quot;wallet
                connect to verify&quot;. We don&apos;t need any of
                that to support you &mdash; ever.
              </p>
            </li>

            <li className="sec-rule">
              <div className="sec-rule-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span className="sec-rule-num cs-mono">RULE 03</span>
              <h3>There is only ONE official Telegram.</h3>
              <p>
                {" "}
                <a href={OFFICIAL.telegram} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                  {OFFICIAL.telegramHandle}
                </a>
                . That&apos;s it. Anything else &mdash; even with our
                logo, even with thousands of members &mdash; is a
                copy. Bookmark the real one. Verify the handle
                character by character.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          RED FLAGS GRID
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-flags">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">RED FLAGS</div>
            <h2 className="cs-section-title">
              Six patterns you&apos;ll see again and again.
            </h2>
            <p className="cs-section-lead">
              These are the playbooks scammers reuse across every
              project on Telegram, X, and Discord. Eagle is just the
              latest brand they&apos;re trying to wear. Spot the
              shape, stop the conversation.
            </p>
          </div>

          <div className="sec-flag-grid">
            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>The instant &quot;mod&quot; DM</h4>
              <p>
                You ask a question in the public channel. Within
                seconds, a profile with our logo DMs you offering to
                &quot;help in private&quot;. Real mods stay in the
                public thread &mdash; always.
              </p>
            </article>

            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <h4>The fake &quot;Eagle Support&quot; team</h4>
              <p>
                Accounts named{" "}
                <span className="cs-mono">Eagle_Support</span>,{" "}
                <span className="cs-mono">EagleAI_Helpdesk</span>,{" "}
                <span className="cs-mono">CLAW_Admin</span>, etc.
                We have no &quot;support&quot; accounts on Telegram.
                Only the team handles in the public channel are real.
              </p>
            </article>

            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h4>The giveaway / airdrop / 100x</h4>
              <p>
                &quot;Eagle is airdropping a token&quot;,
                &quot;send 0.1 ETH to get 0.2 back&quot;,
                &quot;exclusive presale just for our community&quot;.
                We are not airdropping anything. There is no token.
                There is no presale.
              </p>
            </article>

            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h4>The lookalike URL</h4>
              <p>
                <span className="cs-mono">eagleaiIabs.com</span>{" "}
                (capital <span className="cs-mono">I</span> not lower
                <span className="cs-mono">l</span>),{" "}
                <span className="cs-mono">eagle-ai-labs.app</span>,
                shortened <span className="cs-mono">bit.ly/...</span>{" "}
                links. Type our URL by hand or use a bookmark. Don&apos;t
                trust a link you didn&apos;t verify.
              </p>
            </article>

            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h4>The forked Telegram / X channel</h4>
              <p>
                A near-perfect clone of our channel, same banner, same
                pinned message &mdash; just one character off in the
                handle. Always cross-check the handle against this
                page or our website footer before joining anything.
              </p>
            </article>

            <article className="sec-flag">
              <div className="sec-flag-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>The &quot;managed account&quot; pitch</h4>
              <p>
                &quot;Give me your funds and I&apos;ll trade them with
                Eagle&apos;s edge.&quot; We don&apos;t manage anyone&apos;s
                money. We don&apos;t take custody. Anyone pitching this
                with our brand is taking your funds, not trading them.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VERIFIED CHANNELS  ·  real vs fake compare block
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-channels">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">VERIFIED CHANNELS</div>
            <h2 className="cs-section-title">
              The full list. If it&apos;s not here, it isn&apos;t us.
            </h2>
            <p className="cs-section-lead">
              These are the only places Eagle AI Labs communicates from.
              Bookmark them. Anything else, regardless of how official
              it looks, is impersonation.
            </p>
          </div>

          <div className="sec-channel-table" role="table">
            <div className="sec-channel-row sec-channel-row-head" role="row">
              <div role="columnheader">Channel</div>
              <div role="columnheader">Official handle / URL</div>
              <div role="columnheader">Common fakes</div>
            </div>

            <div className="sec-channel-row" role="row">
              <div role="cell" className="sec-channel-label">
                <span className="sec-channel-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </span>
                Telegram
              </div>
              <div role="cell">
                <a href={OFFICIAL.telegram} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                  {OFFICIAL.telegramHandle}
                </a>
              </div>
              <div role="cell" className="sec-channel-fakes">
                Eagle_Support, EagleAILabs_Help, Claw_Official_Mod
              </div>
            </div>

            <div className="sec-channel-row" role="row">
              <div role="cell" className="sec-channel-label">
                <span className="sec-channel-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
                X / Twitter
              </div>
              <div role="cell">
                <a href={OFFICIAL.x} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                  {OFFICIAL.xHandle}
                </a>
              </div>
              <div role="cell" className="sec-channel-fakes">
                @EagleAILabs_, @EagleAI_Official, @Eagle_AILabs
              </div>
            </div>

            <div className="sec-channel-row" role="row">
              <div role="cell" className="sec-channel-label">
                <span className="sec-channel-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                Website
              </div>
              <div role="cell">
                <a href={OFFICIAL.site} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                  eagleailabs.com
                </a>
              </div>
              <div role="cell" className="sec-channel-fakes">
                eagleaiIabs.com (capital I), eagle-ai-labs.app, eagleai.io
              </div>
            </div>

            <div className="sec-channel-row" role="row">
              <div role="cell" className="sec-channel-label">
                <span className="sec-channel-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
                </span>
                App
              </div>
              <div role="cell">
                <a href={OFFICIAL.app} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                  app.eagleailabs.com
                </a>
              </div>
              <div role="cell" className="sec-channel-fakes">
                Anything else. There is no mobile-app download outside
                of links from the real website / Telegram.
              </div>
            </div>

            <div className="sec-channel-row" role="row">
              <div role="cell" className="sec-channel-label">
                <span className="sec-channel-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                Email
              </div>
              <div role="cell">
                <span className="sec-mono-link">{OFFICIAL.email}</span>
              </div>
              <div role="cell" className="sec-channel-fakes">
                Any sender domain that isn&apos;t exactly{" "}
                <span className="cs-mono">@eagleailabs.com</span>.
                Check the full address, not just the display name.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WHAT TO DO IF APPROACHED  ·  4-step checklist
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-respond">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">IF YOU&apos;RE APPROACHED</div>
            <h2 className="cs-section-title">
              Four-step response. Memorise it.
            </h2>
            <p className="cs-section-lead">
              The moment a DM, link or pitch feels off, stop typing
              and run this playbook. It works for Eagle and for every
              other crypto brand you&apos;ll ever interact with.
            </p>
          </div>

          <ol className="sec-respond-list">
            <li>
              <span className="sec-respond-num cs-mono">01</span>
              <div>
                <h3>Don&apos;t engage.</h3>
                <p>
                  The longer you reply, the better their script gets.
                  Stop typing. You don&apos;t owe a scammer politeness.
                </p>
              </div>
            </li>
            <li>
              <span className="sec-respond-num cs-mono">02</span>
              <div>
                <h3>Screenshot the DM, profile, and any links.</h3>
                <p>
                  Capture the full username and the URL bar of any link
                  they sent. Don&apos;t click anything. The screenshot
                  is what helps real mods nuke the impersonator.
                </p>
              </div>
            </li>
            <li>
              <span className="sec-respond-num cs-mono">03</span>
              <div>
                <h3>Report it in the public Telegram.</h3>
                <p>
                  Post the screenshot in{" "}
                  <a href={OFFICIAL.telegram} target="_blank" rel="noopener noreferrer" className="sec-mono-link">
                    {OFFICIAL.telegramHandle}
                  </a>
                  {" "}and tag the team in the public thread. We&apos;ll
                  ban the impersonator and warn the rest of the
                  community.
                </p>
              </div>
            </li>
            <li>
              <span className="sec-respond-num cs-mono">04</span>
              <div>
                <h3>Block the account.</h3>
                <p>
                  After reporting, block. Scammers run scripts &mdash;
                  if they get no signal back, they move on.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ACCOUNT HYGIENE  ·  general phishing tips
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-hygiene">
        <div className="section-wrap cs-tight-wrap">
          <div className="cs-section-head">
            <div className="cs-section-eyebrow">ACCOUNT HYGIENE</div>
            <h2 className="cs-section-title">
              The basics, in one place.
            </h2>
            <p className="cs-section-lead">
              None of this is Eagle-specific. It&apos;s the bar every
              serious crypto user clears. Take an hour, do all of it
              once, and you&apos;ll never need to do it again.
            </p>
          </div>

          <div className="sec-hygiene-grid">
            <div className="sec-hygiene-card">
              <h4>Bookmark the real URLs.</h4>
              <p>
                Type{" "}
                <span className="cs-mono">eagleailabs.com</span> and{" "}
                <span className="cs-mono">app.eagleailabs.com</span>{" "}
                into your browser once, bookmark them, and use the
                bookmarks every time. Never search-engine your way in
                &mdash; ads at the top of search results are the
                single most reliable phishing route.
              </p>
            </div>
            <div className="sec-hygiene-card">
              <h4>Use a long, unique password.</h4>
              <p>
                Use a password manager (1Password, Bitwarden, Apple
                Keychain). Your Eagle password should not also be
                anywhere else. If a different site gets breached, your
                Eagle account stays untouched.
              </p>
            </div>
            <div className="sec-hygiene-card">
              <h4>Turn on 2FA everywhere.</h4>
              <p>
                Eagle, your exchanges, your email. App-based 2FA
                (Authy, Google Authenticator) is fine; SMS 2FA is
                better than nothing but is vulnerable to SIM-swap
                attacks. A hardware key is best for the exchange
                where your funds live.
              </p>
            </div>
            <div className="sec-hygiene-card">
              <h4>Treat API keys like passwords.</h4>
              <p>
                When you link an exchange to CLAW with an API key,
                give it the minimum permissions needed. Never enable
                withdraw permissions on a key shared with any third
                party &mdash; including us. Rotate keys periodically.
              </p>
            </div>
            <div className="sec-hygiene-card">
              <h4>Check the URL bar before you type.</h4>
              <p>
                Every. Single. Time. Phishing sites are
                pixel-perfect clones of the real login page. The only
                tell is the URL. Bookmark, verify, then type.
              </p>
            </div>
            <div className="sec-hygiene-card">
              <h4>Slow down when urgency shows up.</h4>
              <p>
                Real Eagle comms never demand action &quot;within the
                next 5 minutes or your account is suspended&quot;.
                Pressure-to-act is a tell. Pause, check this page,
                and ask in the public Telegram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section className="sec-cta">
        <div className="sec-cta-wrap">
          <h2 className="sec-cta-title">
            One real Telegram.<br />
            <span className="gradient-text">Verify before you join.</span>
          </h2>
          <p className="sec-cta-sub">
            Bookmark the link below. If you ever land on a different
            Eagle Telegram, come back to this page and cross-check the
            handle character-for-character.
          </p>
          <div className="sec-cta-btns">
            <a
              href={OFFICIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Join {OFFICIAL.telegramHandle}
            </a>
            <a href="/how-to-access" className="btn btn-outline btn-lg">
              Back to How to Access
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
