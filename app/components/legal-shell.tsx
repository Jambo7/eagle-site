import { ReactNode } from "react";
import MobileNavDrawer from "./mobile-nav-drawer";
import SiteFooter from "./site-footer";

type Props = {
  /** Page title, e.g. "Privacy Policy". */
  title: string;
  /** Short one-line summary shown under the title. */
  lede: string;
  /** ISO date ("2026-04-27") of the last material update. */
  effectiveDate: string;
  children: ReactNode;
};

/**
 * Shared chrome for legal / policy pages.
 * Renders the standard nav + mobile drawer + site footer around a
 * centered prose column. Pages should use the LegalSection / LegalList
 * primitives below (or plain <p>, <h2>, <ul>) inside `children`.
 *
 * NOTE (draft): content inside legal pages is placeholder copy awaiting
 * review by legal counsel before publication.
 */
export default function LegalShell({ title, lede, effectiveDate, children }: Props) {
  const formattedDate = new Date(effectiveDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="legal-page">
      <canvas id="bg-canvas" />

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

      <MobileNavDrawer active="legal" />

      <div className="legal-wrap">
        <a href="/" className="tp-back-btn legal-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Eagle AI Labs
        </a>

        <span className="legal-draft">Draft · Pending legal review</span>

        <h1 className="legal-title">{title}</h1>
        <p className="legal-lede">{lede}</p>

        <div className="legal-meta">
          <span>Effective: {formattedDate}</span>
          <span>·</span>
          <span>Eagle AI Labs</span>
        </div>

        <article className="legal-prose">{children}</article>
      </div>

      <SiteFooter />
    </main>
  );
}
