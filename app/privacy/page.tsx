import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Eagle AI Labs",
  description:
    "How Eagle AI Labs collects, uses, and protects personal information across our marketing site, predictive trading products, and institutional services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      lede="How Eagle AI Labs collects, uses, and safeguards your personal information."
      effectiveDate="2026-04-27"
    >
      <h2>1. Introduction</h2>
      <p>
        Eagle AI Labs (&ldquo;Eagle AI Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
        &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use,
        disclose, and protect information in connection with our website, our CLAW products, and any
        related services (together, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By accessing or using the Services you acknowledge that you have read and understood this
        Privacy Policy. If you do not agree, please do not use the Services.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect information in the following broad categories:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> Account details, email address, billing
          information, and any messages or enquiries you send us.
        </li>
        <li>
          <strong>Usage information.</strong> Pages visited, features used, signals viewed, device
          type, browser, operating system, and approximate location derived from IP address.
        </li>
        <li>
          <strong>Cookies and similar technologies.</strong> See our <a href="/cookies">Cookie Policy</a>{" "}
          for details.
        </li>
        <li>
          <strong>Third-party sources.</strong> Payment processors, analytics providers, and
          authentication providers may share limited information with us in order to deliver the
          Services.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, operate, maintain, and improve the Services.</li>
        <li>Deliver trading signals, model outputs, and related communications you have requested.</li>
        <li>Process payments and administer subscriptions.</li>
        <li>Respond to enquiries and provide customer support.</li>
        <li>Detect, prevent, and address fraud, abuse, or security issues.</li>
        <li>Comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2>4. How we share information</h2>
      <p>We do not sell your personal information. We may share it with:</p>
      <ul>
        <li>Service providers who process data on our behalf under written instructions.</li>
        <li>Professional advisers, auditors, and regulators where required.</li>
        <li>Acquirers or successors in the event of a corporate transaction.</li>
        <li>Any party to whom you have directed us to disclose the information.</li>
      </ul>

      <h2>5. International transfers</h2>
      <p>
        Personal information may be transferred to, and processed in, countries other than the one
        in which you are resident. We apply appropriate safeguards in line with applicable data
        protection laws whenever we do so.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain personal information for as long as necessary to provide the Services and for
        legitimate business or legal purposes. Retention periods vary depending on the nature of the
        information and the reason it was collected.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict
        the processing of your personal information, as well as rights to data portability and to
        object to processing. To exercise any of these rights, contact us at the address below.
      </p>

      <h2>8. Security</h2>
      <p>
        We apply administrative, technical, and physical safeguards designed to protect personal
        information. No system is perfectly secure, however, and we cannot guarantee the absolute
        security of any data transmitted to or stored by us.
      </p>

      <h2>9. Children</h2>
      <p>
        The Services are not directed to children under 18 and we do not knowingly collect personal
        information from anyone under that age.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will post the revised
        version on this page and update the &ldquo;effective&rdquo; date above. Material changes will be
        communicated through the Services or by email where appropriate.
      </p>

      <h2>11. Contact us</h2>
      <p>
        Questions about this Privacy Policy or our data practices can be directed to{" "}
        <a href="mailto:hello@eagleailabs.com?subject=Privacy%20Enquiry">hello@eagleailabs.com</a>.
      </p>
    </LegalShell>
  );
}
