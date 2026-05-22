import type { Metadata } from "next";
import LegalShell from "../../components/legal-shell";
import { html } from "../_content/claw-stealth";

export const metadata: Metadata = {
  title: "Terms and Conditions: Claw Stealth | Eagle AI Labs",
  description:
    "Terms and conditions governing use of the Eagle AI Labs CLAW Stealth platform, supplied by Eagle AI Labs FZCO (United Arab Emirates).",
};

export default function ClawStealthTermsPage() {
  return (
    <LegalShell
      title="Terms and Conditions: Claw Stealth"
      lede="Terms governing access to and use of the CLAW Stealth platform, supplied by Eagle AI Labs FZCO (United Arab Emirates). Includes Appendix A (Service Level Requirements) and Appendix B (Refund and Cancellation Policy)."
      effectiveDate="2026-05-09"
      draft={false}
    >
      <div className="legal-rich" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalShell>
  );
}
