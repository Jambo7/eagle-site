import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Risk Disclosure | Eagle AI Labs",
  description:
    "Important risk information regarding AI-generated trading signals, cryptocurrency markets, and the use of Eagle AI Labs products.",
};

export default function RiskDisclosurePage() {
  return (
    <LegalShell
      title="Risk Disclosure"
      lede="Important information about AI-generated signals, cryptocurrency markets, and the risks of acting on predictive model outputs."
      effectiveDate="2026-04-27"
    >
      <h2>1. Read this carefully</h2>
      <p>
        Trading cryptocurrencies, derivatives, and other financial instruments carries a substantial
        risk of loss. Before using Eagle AI Labs&apos; signals, analytics, or products (the
        &ldquo;Services&rdquo;) you should understand the risks described on this page and seek
        independent advice from appropriately qualified professionals.
      </p>

      <h2>2. Not financial advice</h2>
      <p>
        Eagle AI Labs is a technology company. We are not a broker, dealer, investment adviser,
        portfolio manager, or fiduciary. Nothing produced by the Services constitutes financial,
        investment, legal, tax, or accounting advice, a recommendation, or an offer or solicitation
        to buy or sell any asset.
      </p>

      <h2>3. Nature of AI-generated signals</h2>
      <ul>
        <li>
          Signals are probabilistic outputs of statistical models. They reflect patterns learned
          from historical data and may not generalise to current or future market conditions.
        </li>
        <li>
          A confidence score is a model-derived estimate. It does not guarantee any particular
          outcome or hit rate.
        </li>
        <li>
          Signals may be delayed, interrupted, or incorrect due to data issues, infrastructure
          outages, exchange disruptions, or modelling error.
        </li>
      </ul>

      <h2>4. Past performance is not indicative of future results</h2>
      <p>
        Any historical performance figures, backtests, accuracy statistics, or case studies shown on
        this website or in the Services illustrate past behaviour only. They are not a reliable
        indicator of future performance and should not be relied on as such.
      </p>

      <h2>5. Cryptocurrency market risk</h2>
      <p>Cryptocurrency and crypto-derivatives markets are characterised by:</p>
      <ul>
        <li>Extreme volatility and large, rapid price swings.</li>
        <li>24/7 operation, meaning positions cannot always be monitored or exited.</li>
        <li>Fragmented liquidity across venues and potential flash-crash events.</li>
        <li>Regulatory uncertainty and evolving legal frameworks.</li>
        <li>Counterparty risk from exchanges, custodians, and other intermediaries.</li>
        <li>Technical risks including smart-contract bugs, protocol exploits, and key loss.</li>
      </ul>

      <h2>6. Leverage and derivatives</h2>
      <p>
        Trading with leverage magnifies both gains and losses and may result in loss of your entire
        deposit and, in some cases, additional liabilities. Derivatives, perpetual swaps, and
        futures are complex instruments that are not suitable for all investors.
      </p>

      <h2>7. Your responsibility</h2>
      <p>
        You are solely responsible for any trading or investment decisions you make, including how,
        when, and whether to act on any signal or output from the Services. Only trade with capital
        that you can afford to lose entirely.
      </p>

      <h2>8. Tax</h2>
      <p>
        Trading activity may have tax consequences in your jurisdiction. You are responsible for
        understanding and complying with your own tax obligations. Eagle AI Labs does not provide
        tax advice.
      </p>

      <h2>9. No guarantee of availability</h2>
      <p>
        The Services may be unavailable from time to time due to maintenance, upgrades, outages, or
        events beyond our reasonable control. We are not liable for any loss resulting from such
        unavailability.
      </p>

      <h2>10. Updates</h2>
      <p>
        This Risk Disclosure may be updated from time to time. You should check this page
        periodically for changes.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this Risk Disclosure can be directed to{" "}
        <a href="mailto:hello@eagleailabs.com?subject=Risk%20Disclosure%20Enquiry">hello@eagleailabs.com</a>.
      </p>
    </LegalShell>
  );
}
