import type { Metadata } from "next";
import LegalShell from "../../components/legal-shell";

// Canonical URL for the Privacy Policy is `/legal/privacy-policy/`. This
// matches the URL submitted to Apple for the iOS app review and the path
// used by the existing eagleailabs.com site, so external links keep
// resolving once DNS is transferred to this Amplify deployment.
export const metadata: Metadata = {
  title: "Privacy Policy | Eagle AI Labs",
  description:
    "How Eagle AI Labs Ltd collects, uses, discloses, and protects personal data across our website, Claw, and related Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      lede="How Eagle AI Labs Ltd collects, uses, discloses, and safeguards your personal data."
      effectiveDate="2026-05-05"
      draft={false}
    >
      <p>
        Eagle AI Labs Ltd, a company incorporated in England and Wales with company number
        15789201 (&ldquo;Eagle AI Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;).
      </p>
      <p>
        This Privacy Policy (the &ldquo;Privacy Policy&rdquo;) explains what personal data Eagle
        AI Labs collects and how it uses, discloses, or otherwise processes personal data of
        individuals who visit our website or interact with us in connection with our digital
        platforms, services, research tools, or products offered under Claw or other company
        initiatives (the &ldquo;Services&rdquo;).
      </p>
      <p>
        The individuals contacting/interacting with us or visiting our website are referred to as
        &ldquo;data subjects&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;.
      </p>
      <p>
        Reference to personal data in this Privacy Policy shall include reference to sensitive
        personal data (where applicable).
      </p>
      <p>
        <strong>
          BY CREATING AN ACCOUNT, ACCESSING, OR USING ANY OF THE SERVICES OF EAGLE AI LABS LTD,
          INCLUDING CLAW, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THIS
          PRIVACY POLICY. THIS PRIVACY POLICY BECOMES EFFECTIVE UPON YOUR FIRST USE OF THE
          SERVICES OR CREATION OF YOUR ACCOUNT, WHICHEVER OCCURS FIRST, AND REMAINS APPLICABLE
          EACH TIME YOU ACCESS OR USE OUR SERVICES THEREAFTER.
        </strong>
      </p>
      <p>
        <strong>
          PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING THE WEBSITE AND SERVICES OF EAGLE
          AI LABS.
        </strong>
      </p>

      <h2>Purpose of this Privacy Policy</h2>
      <ul>
        <li>Who we are and what we do</li>
        <li>How to contact us</li>
        <li>What personal data we collect</li>
        <li>Purpose and legal bases for using your personal data</li>
        <li>Cookies</li>
        <li>Sharing your personal data</li>
        <li>Where we transfer your personal data to</li>
        <li>Retention of personal data</li>
        <li>Confidentiality and security of your personal data</li>
        <li>How to access your information and your other rights</li>
        <li>Amendments to this Privacy Policy</li>
      </ul>

      <h2>1. Purpose of this Privacy Policy</h2>
      <p>
        This Privacy Policy explains our approach to any personal data that we collect from you or
        which we have obtained about you from a third party and the purposes for which we process
        your personal data. It also sets out your rights in respect of our processing of your
        personal data.
      </p>
      <p>
        This Policy aims to help you make informed decisions when using our Services or accessing
        our website. It applies only to personal data collected by us and not to data collected by
        any third parties.
      </p>

      <h2>2. Who we are, what we do, and our Data Protection Officer</h2>
      <p>
        Eagle AI Labs is a private technology company engaged in research and development in
        artificial intelligence, digital infrastructure, and smart data processing. We design and
        provide intelligent systems and services, including Claw, that enable our clients and
        users to leverage data and automation technologies effectively.
      </p>
      <p>
        We are a data controller and process your personal data accordingly under applicable
        privacy and data protection laws, including but not limited to the General Data Protection
        Regulation (GDPR) and UK Data Protection Law.
      </p>

      <h2>3. How to contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or wish to exercise your rights, you
        may contact us by:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@eagleailabs.com">support@eagleailabs.com</a>
        </li>
        <li>
          Address: EAGLE AI LABS LTD, Unit 14, The Maltings Industrial Estate, Hall Road, CM0 7EQ,
          Southminster, United Kingdom
        </li>
        <li>Representative in the EU and UK: Jack Rockell</li>
      </ul>
      <p>
        <strong>Data Protection Officer (DPO):</strong>
      </p>
      <p>
        You may contact our designated DPO regarding privacy-related matters at:{" "}
        <a href="mailto:dpo@eagleailabs.com">dpo@eagleailabs.com</a>.
      </p>

      <h2>4. What personal data do we collect</h2>
      <p>
        We may collect your personal data in the course of our operations, including when you:
      </p>
      <ul>
        <li>Contact us</li>
        <li>Submit a query</li>
        <li>Register on our platform or access our tools</li>
        <li>Provide information through online forms or via email.</li>
      </ul>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Personal identifiers:</strong> Name, email address, contact number, address, job
          title, organization details;
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type, operating system, browsing
          behavior (via cookies);
        </li>
        <li>
          <strong>Project-related data:</strong> any content you upload or submit in connection
          with the Services.
        </li>
      </ul>
      <p>
        You must ensure any data you submit is accurate and does not infringe on third-party
        rights.
      </p>

      <h2>5. Purpose and legal bases for our use of your personal data</h2>
      <p>
        We only process personal data where we have a valid reason to do so. Depending on the
        context, this may be: (i) to perform a contract with you or take steps at your request
        before entering into a contract; (ii) to comply with legal obligations; (iii) for our
        legitimate interests, provided these are not overridden by your rights and interests; or
        (iv) with your consent (for example, for certain marketing).
      </p>

      <h3>a. Service provision</h3>
      <p>
        To enable us to provide and support our Services, respond to your requests, evaluate your
        use cases, and perform due diligence if needed.
      </p>
      <p>
        <strong>Legal basis:</strong> Performance of contract and our legitimate interests (to
        deliver, support, and operate the Services effectively).
      </p>

      <h3>b. Communication, marketing, and updates</h3>
      <p>
        To send you updates about our work, newsletters, and invitations to Eagle AI Labs&rsquo;
        events or webinars.
      </p>
      <p>
        <strong>Legal basis:</strong> Our legitimate interests (to keep you informed about
        relevant developments) or your consent where required.
      </p>
      <p>
        <strong>Your choice:</strong> You may withdraw consent or opt out of marketing at any time
        by contacting us or using the unsubscribe options provided, without affecting processing
        carried out before withdrawal.
      </p>

      <h3>c. Compliance</h3>
      <p>
        To comply with our legal and regulatory obligations, including data retention, responding
        to legal requests, or cooperating with authorities.
      </p>
      <p>
        <strong>Legal basis:</strong> Legal obligations and our legitimate interests (to protect
        our rights and the security of our Services).
      </p>

      <h3>d. Internal business purposes</h3>
      <p>
        To improve our Services, develop our platform, monitor usage, maintain security, and
        prevent misuse or abuse of our systems.
      </p>
      <p>
        <strong>Legal basis:</strong> Our legitimate interests (to operate, secure, and improve
        the Services in a proportionate way that respects your rights).
      </p>

      <p>
        <strong>Legitimate interests (how we balance them):</strong>
      </p>
      <p>
        When we rely on legitimate interests, we assess and balance our interests against your
        rights and expectations to ensure fair and proportionate processing.
      </p>

      <p>
        <strong>Further purposes:</strong>
      </p>
      <p>
        If we later need to use your personal data for a purpose different from (but compatible
        with) the context in which it was originally collected, we will inform you. Where
        required, we will seek your consent before any new processing.
      </p>

      <h2>5A. Mobile applications and AI-driven features</h2>
      <p>
        In addition to the information described above, where you access or use our mobile
        applications, including CLAW Stealth, or interact with AI-driven features such as
        &ldquo;Ask Claw&rdquo;, we may collect and process additional categories of data.
      </p>

      <h3>Mobile application data</h3>
      <p>
        When using our mobile applications, we may automatically collect certain technical and
        usage information, including:
      </p>
      <ul>
        <li>Device information (such as device model, operating system, and app version);</li>
        <li>
          Usage data (including interactions within the application, features accessed, and
          session activity);
        </li>
        <li>Log data (such as timestamps, error reports, and performance diagnostics);</li>
        <li>Approximate location data derived from IP address (where applicable).</li>
      </ul>
      <p>
        This data is used to operate, maintain, and improve the performance, stability, and
        usability of our mobile applications.
      </p>

      <h3>AI-driven features and user inputs</h3>
      <p>
        Where you interact with AI-powered features, including &ldquo;Ask Claw&rdquo;, we may
        process:
      </p>
      <ul>
        <li>Inputs you provide (such as queries, prompts, or commands);</li>
        <li>Generated outputs and responses;</li>
        <li>Associated contextual data required to deliver relevant insights.</li>
      </ul>
      <p>
        These interactions may be processed using internal systems and trusted third-party AI
        service providers. We take steps to ensure such processing is conducted securely and in
        accordance with applicable data protection laws.
      </p>

      <h3>Analytics and performance monitoring</h3>
      <p>
        We may use analytics and monitoring tools to better understand how users interact with our
        mobile applications and Services. This may include tracking feature usage, engagement
        patterns, and technical performance.
      </p>
      <p>
        This information is used to improve functionality, optimise user experience, and support
        ongoing development of our Services.
      </p>

      <h3>Third-party services in mobile applications</h3>
      <p>
        Our mobile applications may rely on third-party service providers for hosting, analytics,
        infrastructure, and AI processing. These providers are contractually required to process
        personal data only on our behalf and in accordance with applicable data protection laws.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your experience and
        analyze website traffic. You can manage your cookie preferences via your browser settings.
        Please see our <a href="/cookies">Cookie Policy</a> for more details.
      </p>

      <h2>7. Sharing your personal data</h2>
      <p>We may share your personal data with:</p>
      <ul>
        <li>Technical service providers (e.g., hosting, analytics, cloud providers);</li>
        <li>Legal, regulatory, or governmental authorities when required;</li>
        <li>Sub-contractors and consultants bound by data processing agreements;</li>
        <li>
          Entities within the Eagle AI Labs group or affiliated projects, including Claw, where
          applicable;
        </li>
        <li>Professional advisors such as lawyers or auditors.</li>
      </ul>
      <p>
        All recipients are bound by contractual obligations to ensure appropriate data protection
        safeguards.
      </p>

      <h2>8. Where we transfer your personal data to</h2>
      <p>
        Your data may be stored or transferred outside of your country or the European Economic
        Area (EEA). When we do so, we ensure appropriate safeguards are in place, such as standard
        contractual clauses or equivalent mechanisms under data protection laws.
      </p>

      <h2>9. Retention of personal data</h2>
      <p>
        We may retain your personal data for as long as necessary for the purposes outlined in
        this Privacy Policy, or longer if required by applicable law or for compliance and legal
        defense purposes.
      </p>
      <p>
        Where possible, we apply criteria to periodically review and delete data that is no longer
        required.
      </p>

      <h2>10. Confidentiality and security of your personal data</h2>
      <p>
        We implement appropriate organizational and technical safeguards to ensure your personal
        data is secure, including:
      </p>
      <ul>
        <li>Encryption;</li>
        <li>Access controls;</li>
        <li>Secure cloud storage;</li>
        <li>Internal policies and staff training.</li>
      </ul>
      <p>
        However, please note that no method of transmission over the internet is 100% secure.
      </p>

      <h2>11. Your rights</h2>
      <p>You may have the following rights under applicable data protection laws and GDPR:</p>
      <ul>
        <li>
          <strong>Access</strong> &ndash; to know if we process your data and obtain a copy;
        </li>
        <li>
          <strong>Rectification</strong> &ndash; to correct inaccurate or incomplete data;
        </li>
        <li>
          <strong>Erasure</strong> &ndash; to request deletion of your data;
        </li>
        <li>
          <strong>Restriction</strong> &ndash; to limit the processing under certain conditions;
        </li>
        <li>
          <strong>Portability</strong> &ndash; to receive your data in a structured format (where
          applicable);
        </li>
        <li>
          <strong>Object</strong> &ndash; to processing, especially for direct marketing;
        </li>
        <li>
          <strong>Withdraw consent</strong> &ndash; if we process based on your consent;
        </li>
        <li>
          <strong>Lodge a complaint</strong> &ndash; with your local data protection authority.
          For EU residents, this may be your local data protection authority.
        </li>
      </ul>
      <p>Please note that certain rights may be limited under applicable law.</p>

      <h2>12. Amendments to this Privacy Policy</h2>
      <p>
        We may revise this Privacy Policy from time to time to reflect amendments in our Services
        or legal requirements. Material amendments will be communicated via our website or by
        direct notice where appropriate and at our sole discretion.
      </p>

      <h2>13. Governing law and jurisdiction</h2>
      <p>
        This Privacy Policy shall be governed by and construed in accordance with the laws of
        England and Wales. Any disputes arising out of or in connection with this Privacy Policy
        shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>
      <p>
        Eagle AI Labs also reserves the right to initiate legal or any proceedings in the courts
        of your country of residence, if deemed necessary.
      </p>
      <p>
        If you are located in the United Kingdom, you have the right to lodge a complaint with the
        Information Commissioner&rsquo;s Office (ICO), the UK supervisory authority for data
        protection issues (
        <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">
          www.ico.org.uk
        </a>
        ).
      </p>
      <p>
        If you are located in the European Union or the European Economic Area (EEA), please note
        that this choice of law and jurisdiction does not affect your rights under applicable data
        protection laws, including the right to lodge a complaint with your local data protection
        authority under the General Data Protection Regulation (GDPR).
      </p>
      <p>
        In the event of any contradiction or inconsistency between this Privacy Policy and the
        Terms and Conditions of Eagle AI Labs, the provisions of the Terms and Conditions shall
        supersede and prevail.
      </p>
      <p>
        If any legal context, provision, or matter is not expressly addressed in this Privacy
        Policy, the relevant provisions of the{" "}
        <a href="/terms">Terms and Conditions</a> shall apply by reference and form part of this
        Privacy Policy.
      </p>

      <h2>14. Entire agreement</h2>
      <p>
        This Privacy Policy, together with any other policies, documents, notices, or addendums
        made available by Eagle AI Labs, constitutes the entire agreement between you and Eagle AI
        Labs in relation to the subject matter herein and supersedes all prior agreements,
        understandings, or communications.
      </p>
    </LegalShell>
  );
}
