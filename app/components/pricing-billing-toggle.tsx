"use client";

import { useState } from "react";

/**
 * Billing toggle for the /pricing page.
 *
 * Swaps the Pro card's price and billing-note in-place by reading
 * `data-price-monthly` / `data-price-annual` (and `data-note-*`)
 * attributes off any element with `data-price-monthly` set. Keeps the
 * price rendering in static JSX (server component friendly) while
 * the only stateful piece lives here.
 */
export default function PricingBillingToggle() {
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");

  const handle = (next: "monthly" | "annual") => {
    setCycle(next);
    if (typeof document === "undefined") return;

    document.querySelectorAll<HTMLElement>("[data-price-monthly]").forEach((el) => {
      el.textContent =
        next === "monthly"
          ? el.dataset.priceMonthly ?? el.textContent
          : el.dataset.priceAnnual ?? el.textContent;
    });
    document.querySelectorAll<HTMLElement>("[data-note-monthly]").forEach((el) => {
      el.textContent =
        next === "monthly"
          ? el.dataset.noteMonthly ?? el.textContent
          : el.dataset.noteAnnual ?? el.textContent;
    });
  };

  return (
    <div className="cs-billing-toggle" role="radiogroup" aria-label="Billing cycle">
      <button
        type="button"
        role="radio"
        aria-checked={cycle === "monthly"}
        className={`cs-bt-opt${cycle === "monthly" ? " is-active" : ""}`}
        onClick={() => handle("monthly")}
      >
        Monthly
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={cycle === "annual"}
        className={`cs-bt-opt${cycle === "annual" ? " is-active" : ""}`}
        onClick={() => handle("annual")}
      >
        Annual
        <span className="cs-bt-save">Save 16%</span>
      </button>
    </div>
  );
}
