/**
 * Shared site footer. Used on every public page.
 *
 * Structure mirrors the existing eagleailabs.com footer (Products /
 * Resources / Other columns + full legal bar: Privacy · Cookies · Terms ·
 * Risk Disclaimer · Conflict of Interest · Changelog).
 *
 * Link policy:
 * - Internal routes for every top-level page we have rebuilt (/products,
 *   /solutions, /pricing, /blog, /about, /legal/privacy-policy, /terms,
 *   /risk-disclosure, /cookies, /technology, /hedge-fund). The Privacy
 *   Policy lives at /legal/privacy-policy/ to match the URL submitted to
 *   Apple for iOS app review and to mirror the existing eagleailabs.com
 *   path (so external links keep working after DNS transfers to this
 *   Amplify deployment).
 * - Existing live eagleailabs.com URLs for deep pages we have not yet
 *   rebuilt (Affiliates, Partner Portal, Promotion Proposal, Conflict of
 *   Interest, Changelog, CLAW Trade Credits). These open in a new tab.
 * - `mailto:hello@eagleailabs.com` with a subject line for items without
 *   a dedicated page (Docs, Contact).
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  const mailto = (subject: string) =>
    `mailto:hello@eagleailabs.com?subject=${encodeURIComponent(subject)}`;
  const ext = "https://www.eagleailabs.com";

  return (
    <footer id="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/logo.png" alt="Eagle AI Labs" className="logo-img logo-img-footer" />
            </a>
            <p>
              Pioneering predictive intelligence for crypto markets since 2022.
              Institutional-grade AI infrastructure for every trader.
            </p>
            {/* Social rail. Order is the order shown left-to-right; URLs are
                the official Eagle AI Labs handles supplied by James. We
                deliberately omit Discord (none today) and the Vanguard
                Telegram (community channel, surfaced elsewhere if needed). */}
            <div className="footer-socials">
              <a href="https://x.com/EagleAILabs" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://t.me/EAGLEAI_OFFICIAL" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/eagleailabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://youtube.com/@eagleailabs" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.378.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.12 2.136c1.874.505 9.378.505 9.378.505s7.505 0 9.378-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/eagleailabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@eagle_ai_labs" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://medium.com/@EagleAI" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="fl-col">
              <div className="fl-head">Products</div>
              <a href="/">Home</a>
              <a href="/products">Claw</a>
              <a href="/solutions">AI Solutions</a>
              <a href="/pricing">Pricing</a>
              <a href={`${ext}/claw-trade-credits`} target="_blank" rel="noopener">CLAW Trade Credits</a>
            </div>
            <div className="fl-col">
              <div className="fl-head">Resources</div>
              <a href="/blog">Blog</a>
              <a href={mailto("Documentation Access")}>Docs</a>
              <a href="/about">About</a>
              <a href={mailto("General Enquiry")}>Contact</a>
              <a href="/technology">Technology</a>
              <a href="/legal/privacy-policy">Privacy Policy</a>
            </div>
            <div className="fl-col">
              <div className="fl-head">Other</div>
              <a href={`${ext}/affiliates`} target="_blank" rel="noopener">Affiliates</a>
              <a href={`${ext}/partner-portal`} target="_blank" rel="noopener">Partner Portal</a>
              <a href={mailto("Promotion Proposal Submission")}>Submit a Promotion Proposal</a>
              <a href="/hedge-fund">Hedge Fund Partnership</a>
              <a href="/#sample-signal">Example Signals</a>
            </div>
          </div>
        </div>
        {/* Legal bar, mirrors the existing eagleailabs.com site's bottom
            line: © + Privacy · Cookies · Terms · Risk Disclaimer ·
            Conflict of Interest · Changelog. Internal routes used where
            we already have a rebuilt page; external otherwise. */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            <p>© {year} Eagle AI Labs. All rights reserved.</p>
            <p className="footer-disclaimer">AI-generated signals are not financial advice. Cryptocurrency trading involves substantial risk of loss.</p>
          </div>
          <nav className="footer-legal-nav" aria-label="Legal">
            <a href="/legal/privacy-policy">Privacy Policy</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/cookies">Cookies</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/terms">Terms and Conditions</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/risk-disclosure">Risk Disclaimer</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href={`${ext}/conflict-of-interest`} target="_blank" rel="noopener">Conflict of Interest</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href={`${ext}/changelog`} target="_blank" rel="noopener">Changelog</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
