import {
  COMMUNITY_TAGLINE,
  COMMUNITY_TELEGRAM,
  COMMUNITY_X,
  DOCUMENTATION_HREF,
} from "../lib/community-links";

/**
 * Shared site footer. Community-owned ecosystem positioning with
 * product-first link columns and Telegram as the primary contact path.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/logo.png" alt="Eagle AI Labs" className="logo-img logo-img-footer" />
            </a>
            <p>{COMMUNITY_TAGLINE}</p>
            <div className="footer-socials">
              <a href={COMMUNITY_X} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={COMMUNITY_TELEGRAM} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="fl-col">
              <div className="fl-head">Products</div>
              <a href="/">Home</a>
              <a href="/products">CLAW</a>
              <a href="/solutions">AI Solutions</a>
              <a href="/how-to-access">How to Access</a>
            </div>
            <div className="fl-col">
              <div className="fl-head">Community</div>
              <a href={COMMUNITY_TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram</a>
              <a href={COMMUNITY_X} target="_blank" rel="noopener noreferrer">X</a>
              <a href={DOCUMENTATION_HREF}>Documentation</a>
              <a href="/blog">Community Updates</a>
              <a href="/about">About</a>
            </div>
            <div className="fl-col">
              <div className="fl-head">Get Involved</div>
              <a href={COMMUNITY_TELEGRAM} target="_blank" rel="noopener noreferrer">Join The Community</a>
              <a href="/technology">Technology</a>
              <a href="/security" className="fl-link-alert">Beware of Scammers</a>
              <a href="/legal/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
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
            <a href="/terms/claw-pro">Claw Pro Terms and Conditions</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/terms/claw-stealth">Claw Stealth Terms and Conditions</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/risk-disclosure">Risk Disclaimer</a>
            <span className="fln-sep" aria-hidden="true">|</span>
            <a href="/security" className="fln-alert">Beware of Scammers</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
