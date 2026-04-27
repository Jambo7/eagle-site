import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service | Eagle AI Labs",
  description:
    "The terms governing use of Eagle AI Labs' website, CLAW products, predictive AI signals, and related services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalShell
      title="Terms of Service"
      lede="The terms that govern your use of the Eagle AI Labs website, CLAW products, and related services."
      effectiveDate="2026-04-27"
    >
      <h2>1. Agreement</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) form a legal agreement between you and Eagle AI
        Labs (&ldquo;Eagle AI Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
        and govern your access to and use of our website, our CLAW products, our AI signal outputs,
        and any related services (together, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By accessing or using the Services you agree to be bound by these Terms. If you do not
        agree, you must not use the Services.
      </p>

      <h2>2. Eligibility and account</h2>
      <p>
        You must be at least 18 years old and legally able to form a binding contract in your
        jurisdiction to use the Services. You are responsible for all activity on your account and
        for keeping your credentials secure.
      </p>

      <h2>3. Description of service</h2>
      <p>
        The Services provide AI-generated predictive signals, analytics, and related tooling for
        financial markets. Signals are probabilistic model outputs — not instructions, advice, or
        guarantees. See our <a href="/risk-disclosure">Risk Disclosure</a> for more detail.
      </p>

      <h2>4. No financial advice</h2>
      <p>
        Nothing produced by the Services constitutes financial, investment, legal, tax, or
        accounting advice. You are solely responsible for any trading or investment decisions you
        make. You should consult appropriately qualified professionals before acting on any
        information received from the Services.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or attempt to derive the source code of the Services.</li>
        <li>Scrape, harvest, or systematically extract signal outputs for redistribution.</li>
        <li>Resell, sublicense, or provide the Services to any third party without our written consent.</li>
        <li>Use the Services to engage in unlawful, manipulative, or abusive market activity.</li>
        <li>Attempt to gain unauthorised access to any part of the Services.</li>
        <li>Use the Services to build or train competing AI models or datasets.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        All right, title, and interest in the Services, including the underlying models,
        infrastructure, signals, and branding, belong to Eagle AI Labs or our licensors. Nothing in
        these Terms transfers any such rights to you.
      </p>

      <h2>7. Subscriptions, trials, and fees</h2>
      <p>
        Certain parts of the Services are offered on a paid or trial basis. Pricing, billing
        frequency, and cancellation terms are disclosed at the point of subscription. Trials may be
        cancelled at any time before the trial end date.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time if we reasonably believe
        you have breached these Terms or if continued provision would expose us to legal,
        regulatory, or security risk. You may stop using the Services at any time.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranty of any kind, express or implied, including warranties of merchantability, fitness
        for a particular purpose, and non-infringement. We do not warrant that signals will be
        accurate, profitable, uninterrupted, or error-free.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Eagle AI Labs will not be liable for any indirect,
        incidental, consequential, special, or punitive damages, or for any loss of profits,
        revenue, data, or trading losses, arising out of or related to your use of the Services.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Eagle AI Labs and its affiliates from any claims,
        damages, liabilities, and expenses (including reasonable legal fees) arising out of your use
        of the Services or breach of these Terms.
      </p>

      <h2>12. Changes to the Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated through
        the Services or by email where appropriate. Continued use of the Services after a change
        means you accept the revised Terms.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of England and Wales without regard to conflict-of-law
        principles. Any dispute will be subject to the exclusive jurisdiction of the courts of
        England and Wales, except where local law requires otherwise.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms can be directed to{" "}
        <a href="mailto:hello@eagleailabs.com?subject=Terms%20of%20Service%20Enquiry">hello@eagleailabs.com</a>.
      </p>
    </LegalShell>
  );
}
