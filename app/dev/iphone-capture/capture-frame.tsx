"use client";

import { useEffect } from "react";
import HeroIphoneMockup from "@/app/components/hero-iphone-mockup";

/**
 * Frame stage for the capture route. Strips the page chrome to a
 * transparent canvas, places the iPhone mockup centred at a fixed
 * physical size, and exposes a deterministic seek API on `window`
 * so the Puppeteer capture script can step the CSS slide animation
 * frame-by-frame instead of relying on wall-clock timing.
 *
 * Two poses:
 *   - "tilt": keeps the live site's `perspective(1400px) rotateY(-8°) rotateX(2°)` look
 *   - "flat": removes the 3D transform for cleaner overlay compositing
 *
 * The pedestal glow under the device is preserved in both poses (per
 * marketing brief: "keep the blue glow + drop shadow").
 *
 * Capture viewport (set by puppeteer): 1080×1920 CSS px, deviceScaleFactor 2.
 * Phone is fixed at 720px wide (~1561px tall) and centred.
 */

declare global {
  interface Window {
    __setFrameTime?: (globalMs: number) => void;
    __captureReady?: boolean;
    __frameCycleMs?: number;
  }
}

const CYCLE_MS = 30_000;
const SLIDE_DELAY_MS = (i: number) => (-1 + i * 5) * 1000;

// Mirrors the @keyframes phoneSlideCycle declaration in globals.css
// (0%/2%/16.67%/18.67%/100% over a 30s cycle), in absolute milliseconds.
const FADE_IN_MS = 600; //  2% of 30000
const HOLD_END_MS = 5000; //  16.67% of 30000
const FADE_OUT_END_MS = 5600; //  18.67% of 30000

// Approximation of CSS `ease-in-out` (cubic-bezier(0.42, 0, 0.58, 1)).
// The keyframes use opacity transitions where this curve is essentially
// indistinguishable by eye from the bezier; a pure fixed-point bezier
// solver was unnecessary overhead for a 0.6s opacity ramp.
function easeInOut(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function opacityForLocalTime(localMs: number): number {
  const wrapped = ((localMs % CYCLE_MS) + CYCLE_MS) % CYCLE_MS;
  if (wrapped < FADE_IN_MS) return easeInOut(wrapped / FADE_IN_MS);
  if (wrapped < HOLD_END_MS) return 1;
  if (wrapped < FADE_OUT_END_MS) {
    return 1 - easeInOut((wrapped - HOLD_END_MS) / (FADE_OUT_END_MS - HOLD_END_MS));
  }
  return 0;
}

export default function CaptureFrame({ pose }: { pose: "tilt" | "flat" }) {
  useEffect(() => {
    const slides = Array.from(
      document.querySelectorAll<HTMLImageElement>(".iphone-slide")
    );

    // Strip the CSS @keyframes animation entirely so we can drive opacity
    // deterministically from JS. Trying to seek the live CSS animation via
    // `Animation.currentTime` produced inconsistent results for slides with
    // a positive `animation-delay` under headless Chromium — likely a
    // Web Animations spec corner case around paused animations whose start
    // time is in the future. Replacing the animation removes all ambiguity.
    slides.forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = "0";
    });

    window.__frameCycleMs = CYCLE_MS;

    window.__setFrameTime = (globalMs: number) => {
      slides.forEach((el, i) => {
        const local = globalMs - SLIDE_DELAY_MS(i);
        el.style.opacity = String(opacityForLocalTime(local));
      });
    };

    let cancelled = false;
    const waitImagesAndFonts = async () => {
      await Promise.all(
        slides.map((img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                const done = () => resolve();
                img.addEventListener("load", done, { once: true });
                img.addEventListener("error", done, { once: true });
              })
        )
      );
      if (typeof document !== "undefined" && (document as Document).fonts) {
        try {
          await (document as Document).fonts.ready;
        } catch {}
      }
      if (cancelled) return;
      window.__setFrameTime?.(0);
      window.__captureReady = true;
    };
    void waitImagesAndFonts();

    return () => {
      cancelled = true;
      window.__captureReady = false;
      delete window.__setFrameTime;
    };
  }, []);

  return (
    <>
      <style>{captureCss(pose)}</style>
      <div className="capture-stage">
        <div className={`capture-phone-wrap pose-${pose}`}>
          <HeroIphoneMockup ctaLabel="" ctaHref="#" />
        </div>
      </div>
    </>
  );
}

/**
 * Page-scoped CSS overrides:
 *  - transparent html/body so `omitBackground: true` yields true alpha
 *  - centred 1080×1920 stage matching the puppeteer viewport
 *  - phone scaled up to 720px wide for higher source pixel density
 *  - flat pose strips the 3D transform on the iphone-frame
 *  - never show the hover CTA (it's invisible by default but we hard-kill it
 *    in case any pseudo-state sneaks in during headless capture)
 */
function captureCss(pose: "tilt" | "flat"): string {
  const flatOverride =
    pose === "flat"
      ? `
      .capture-phone-wrap.pose-flat .iphone-frame {
        transform: none !important;
      }
      `
      : "";

  return `
    html, body {
      background: transparent !important;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    /* The site's globals.css applies background: var(--bg) to html/body.
       Win specificity above by targeting body directly too. */
    body { background-color: transparent !important; }

    .capture-stage {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    .capture-phone-wrap {
      width: 720px;
      /* Lock height so flexbox can't squash the phone vertically */
      height: 1561px; /* 720 / (393 / 852) */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* The hero iphone-frame uses max-width: 340px; lift that ceiling
       inside the capture stage so it actually fills 720px. */
    .capture-phone-wrap .iphone-frame {
      max-width: 720px !important;
    }

    /* Belt-and-braces: ensure the hover CTA stays invisible in headless
       Chromium (no real cursor, but the :hover state can occasionally
       latch via DevTools emulation). */
    .capture-phone-wrap .chart-hover-cta,
    .capture-phone-wrap .chc-text {
      opacity: 0 !important;
      pointer-events: none !important;
    }

    ${flatOverride}
  `;
}
