import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Cookie Policy | Eagle AI Labs",
  description:
    "How Eagle AI Labs uses cookies and similar technologies across our website and products, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      lede="How we use cookies and similar technologies, and how you can manage them."
      effectiveDate="2026-04-27"
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are widely
        used to make websites work, to improve how they work, and to provide analytics information
        to the operators of the site.
      </p>

      <h2>2. How we use cookies</h2>
      <p>
        Eagle AI Labs uses cookies and similar technologies (such as local storage) on this website
        and in our CLAW products to:
      </p>
      <ul>
        <li>Keep you signed in to your account.</li>
        <li>Remember your preferences (such as theme, layout, and signal filters).</li>
        <li>Measure how the Services are used so that we can improve them.</li>
        <li>Detect and prevent fraud, abuse, and security incidents.</li>
      </ul>

      <h2>3. Categories of cookies we use</h2>
      <h3>Strictly necessary</h3>
      <p>
        Required for the website and Services to function — for example, authentication, session
        management, and load balancing. These cannot be switched off.
      </p>
      <h3>Functional</h3>
      <p>
        Enable enhanced functionality and personalisation — for example, remembering your preferred
        timeframe on the signal dashboard. You can disable these in your browser; the Services will
        continue to work but some personalisation will be lost.
      </p>
      <h3>Analytics</h3>
      <p>
        Allow us to count visits and traffic sources so we can measure and improve the performance
        of our Services. These help us understand which pages are most and least popular and how
        visitors move around the site.
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        Some cookies are set by third parties whose services we use — for example, analytics
        providers and payment processors. These third parties are contractually required to process
        data in line with our instructions and applicable data protection laws.
      </p>

      <h2>5. Managing cookies</h2>
      <p>
        Most browsers allow you to refuse cookies, delete existing ones, or be notified when a
        cookie is being set. The exact steps vary by browser — consult your browser&apos;s help
        documentation. Blocking strictly necessary cookies may prevent parts of the Services from
        working.
      </p>

      <h2>6. Do Not Track</h2>
      <p>
        Some browsers offer a &ldquo;Do Not Track&rdquo; signal. Because there is no consistent
        industry standard for how to respond to these signals, our Services do not currently respond
        to them. We will continue to monitor industry developments.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The &ldquo;effective&rdquo; date above
        indicates when the latest changes were made.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this Cookie Policy can be directed to{" "}
        <a href="mailto:hello@eagleailabs.com?subject=Cookie%20Policy%20Enquiry">hello@eagleailabs.com</a>.
      </p>
      <p>
        See also our <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalShell>
  );
}
