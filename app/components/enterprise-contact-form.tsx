"use client";

import { useState } from "react";

type Role =
  | ""
  | "Hedge fund / Family office"
  | "Proprietary trading desk"
  | "Quantitative research"
  | "Market maker / Liquidity provider"
  | "Exchange / Brokerage"
  | "Enterprise software / Fintech"
  | "Other";

type UseCase =
  | ""
  | "API access, signals integration"
  | "The Oracle, multi-model consensus"
  | "Custom model development"
  | "White-label deployment"
  | "Data licensing / Historical signals"
  | "Strategic partnership"
  | "Other";

/**
 * Enterprise contact form for the CLAW Enterprise section.
 *
 * Implementation note: this MVP builds a structured mailto: link that opens
 * the visitor's mail client with subject and body prefilled. No backend is
 * required to ship. When an API endpoint is ready, swap `handleSubmit`'s
 * body for a `fetch(...)` call to `/api/enterprise-contact` and drop the
 * mailto fallback.
 */
export default function EnterpriseContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<Role>("");
  const [useCase, setUseCase] = useState<UseCase>("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "opening" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("opening");

    const subject = `CLAW Enterprise enquiry, ${company || name || "New"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role / Organisation type: ${role}`,
      `Primary use case: ${useCase}`,
      "",
      "Message:",
      message,
      "",
      "---",
      "Sent from the CLAW Enterprise contact form on eagleailabs.com",
    ];
    const body = bodyLines.join("\n");

    const href = `mailto:hello@eagleailabs.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;

    window.setTimeout(() => setStatus("sent"), 400);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setUseCase("");
    setMessage("");
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="ef-success">
        <div className="ef-success-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5L10 17.5L19 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>Request on its way.</h3>
        <p>
          We&apos;ve prepared a message in your mail client with the details
          below. A member of the Eagle AI Labs partnerships team will respond
          within <strong>24 business hours</strong>.
        </p>
        <button type="button" className="btn btn-ghost ef-reset" onClick={reset}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enterprise-form" onSubmit={handleSubmit} noValidate>
      <div className="ef-meta-row">
        <span className="ef-meta-dot" aria-hidden="true" />
        <span className="ef-meta-label">Enterprise partnerships</span>
        <span className="ef-meta-sep" aria-hidden="true">·</span>
        <span className="ef-meta-label ef-meta-muted">
          Response in 24 business hours
        </span>
      </div>

      <div className="ef-grid">
        <label className="ef-field">
          <span className="ef-field-label">Full name</span>
          <input
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
          />
        </label>

        <label className="ef-field">
          <span className="ef-field-label">Work email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@fund.com"
          />
        </label>

        <label className="ef-field">
          <span className="ef-field-label">Company / Fund</span>
          <input
            type="text"
            required
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Infinite Point Capital"
          />
        </label>

        <label className="ef-field">
          <span className="ef-field-label">Organisation type</span>
          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Hedge fund / Family office</option>
            <option>Proprietary trading desk</option>
            <option>Quantitative research</option>
            <option>Market maker / Liquidity provider</option>
            <option>Exchange / Brokerage</option>
            <option>Enterprise software / Fintech</option>
            <option>Other</option>
          </select>
        </label>

        <label className="ef-field ef-field-full">
          <span className="ef-field-label">Primary interest</span>
          <select
            required
            value={useCase}
            onChange={(e) => setUseCase(e.target.value as UseCase)}
          >
            <option value="" disabled>
              Select…
            </option>
            <option>API access, signals integration</option>
            <option>The Oracle, multi-model consensus</option>
            <option>Custom model development</option>
            <option>White-label deployment</option>
            <option>Data licensing / Historical signals</option>
            <option>Strategic partnership</option>
            <option>Other</option>
          </select>
        </label>

        <label className="ef-field ef-field-full">
          <span className="ef-field-label">
            Tell us about your desk
            <span className="ef-field-hint">
              Strategy, AUM tier, integration constraints, anything useful.
            </span>
          </span>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="We run a systematic crypto book and are evaluating AI model consensus for our BTC/ETH strategies…"
          />
        </label>
      </div>

      <div className="ef-actions">
        <button
          type="submit"
          className="btn btn-primary ef-submit"
          disabled={status === "opening"}
        >
          {status === "opening" ? "Opening your mail client…" : "Request enterprise access"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M13 6L19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="ef-fineprint">
          By submitting, you agree to be contacted by Eagle AI Labs regarding
          your enquiry. We do not share your details.
        </p>
      </div>
    </form>
  );
}
