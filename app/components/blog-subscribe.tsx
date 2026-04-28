"use client";

import { useState } from "react";

/**
 * Newsletter subscribe form, drops an email into a mailto: intent so
 * there&apos;s no backend dependency. Real submission is wired up on the
 * main marketing site; this mirrors the UX so the CTA still feels live.
 */
export default function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(
      `Hi Eagle AI team,\n\nPlease add me to the monthly newsletter.\n\nEmail: ${email}\n`
    );
    window.location.href = `mailto:hello@eagleailabs.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="cs-newsletter-form cs-newsletter-sent">
        <div className="cs-newsletter-sent-dot" aria-hidden="true" />
        <div>
          <div className="cs-newsletter-sent-title">Thanks, you&apos;re on the list.</div>
          <div className="cs-newsletter-sent-sub">
            Your mail client opened with the request. We&apos;ll confirm shortly.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="cs-newsletter-form" onSubmit={handle}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@desk.com"
        className="cs-newsletter-input"
        aria-label="Email address"
      />
      <button type="submit" className="btn btn-primary cs-newsletter-submit">
        Subscribe
      </button>
    </form>
  );
}
