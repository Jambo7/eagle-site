import type { Metadata } from "next";
import LegalShell from "../../components/legal-shell";
import { html } from "../_content/claw-pro";

export const metadata: Metadata = {
  title: "Terms and Conditions: Claw Pro | Eagle AI Labs",
  description:
    "Terms and conditions governing use of the Eagle AI Labs CLAW Pro platform, supplied by Eagle AI Labs Ltd (England and Wales).",
};

export default function ClawProTermsPage() {
  return (
    <LegalShell
      title="Terms and Conditions: Claw Pro"
      lede="Terms governing access to and use of the CLAW Pro platform, supplied by Eagle AI Labs Ltd (England and Wales). Includes Appendix A (Service Level Requirements) and Appendix B (Refund and Cancellation Policy)."
      effectiveDate="2026-05-22"
      draft={false}
    >
      <div className="legal-rich" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalShell>
  );
}
