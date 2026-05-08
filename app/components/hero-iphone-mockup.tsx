import Image from "next/image";

type Slide = { src: string; alt: string };

const PHONE_SLIDES: Slide[] = [
  { src: "/hero-phone/1.png", alt: "CLAW Stealth Live Read snapshot, with Trend Health, Risk Pressure and Sentiment gauges and current BTC, ETH, SOL and XRP prices" },
  { src: "/hero-phone/2.png", alt: "CLAW Stealth Charts, top crypto assets with ETH/USDT expanded on a 7-day timeframe" },
  { src: "/hero-phone/3.png", alt: "Ask Claw prompt hub, with Hot, Analysis, Macro and Whales filter tabs and suggested setup questions" },
  { src: "/hero-phone/4.png", alt: "CLAW Stealth Social Sentiment feed, with Impact, Signals, Topic, News and X filters and chronological headline ordering" },
  { src: "/hero-phone/5.png", alt: "CLAW Stealth Whale flow, real-time big-investor buy and sell pressure with most active tokens and biggest move" },
  { src: "/hero-phone/6.png", alt: "Ask Claw generated ETH long candidate setup, with entry, stop, take-profit ladder, position sizing, reward-to-risk and reward-risk sanity check" },
  { src: "/hero-phone/7.png", alt: "Ask Claw analysing market data in response to a 'what's the best trade today' prompt" },
  { src: "/hero-phone/8.png", alt: "CLAW Stealth Create Alert dialog, with token, direction, entry, take-profit and stop-loss fields ready to set an ETH long alert" },
  { src: "/hero-phone/9.png", alt: "CLAW Stealth Liquidation Heatmap for BTC/USDT, with high and low price resistance walls and historical liquidation cluster grid" },
];

type Props = {
  /** CTA above chart card (default: Stealth product anchor) */
  ctaHref?: string;
  ctaLabel?: string;
};

/**
 * Hero / marketing iPhone mock, crossfades through a sequence of CLAW Stealth
 * app screenshots inside the device frame. The animation is pure CSS (no JS),
 * so this stays a server component. Used on the homepage hero and on the
 * products page Stealth section.
 *
 * Timing (see `.iphone-slide` in globals.css):
 *   • 45s full cycle, 9 slides × 5s each
 *   • 0.6s crossfade + 4.4s hold per slide (institutional cadence:
 *     decisive transition, longer dwell on each frame)
 *   • Outgoing and incoming slides cross-fade through the same 0.6s
 *     window so there is no dark gap between slides.
 *   • First slide is offset by -1s via animation-delay so it's already
 *     in its hold phase on page load (fully visible, no fade-in).
 */
export default function HeroIphoneMockup({
  ctaHref = "/products#claw-stealth",
  ctaLabel = "Explore CLAW Stealth",
}: Props) {
  return (
    <div className="iphone-frame">
      <span className="iphone-btn ib-silent" />
      <span className="iphone-btn ib-vol-up" />
      <span className="iphone-btn ib-vol-dn" />
      <span className="iphone-btn ib-power" />
      <div className="iphone-screen">
        <div className="chart-card">
          <a href={ctaHref} className="chart-hover-cta">
            <span className="chc-text">
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <div className="iphone-slides" aria-label="CLAW Stealth app tour">
            {PHONE_SLIDES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                /* Native iPhone 14/15 retina resolution at DPR 3, matches the
                   source PNGs in /public/hero-phone/. Explicit dimensions let
                   the browser plan the compositor layer at the right pixel
                   density before the parent's 3D rotation rasterises it. */
                width={1179}
                height={2556}
                className="iphone-slide"
                style={{ animationDelay: `${-1 + i * 5}s` }}
                priority={i === 0}
                loading="eager"
                decoding="async"
                draggable={false}
                sizes="(max-width: 1100px) 300px, 380px"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
