type Slide = { src: string; alt: string };

const PHONE_SLIDES: Slide[] = [
  { src: "/hero-phone/1.png", alt: "CLAW Stealth Overview, live read gauges for trend health, risk pressure and sentiment with current BTC, ETH, SOL and XRP prices" },
  { src: "/hero-phone/2.png", alt: "CLAW Stealth Charts, top crypto assets with expanded ETH/USDT chart and timeframe picker" },
  { src: "/hero-phone/3.png", alt: "CLAW Stealth Liquidation Heatmap for BTC/USDT with long wall, short wall and historical liquidation cluster grid" },
  { src: "/hero-phone/4.png", alt: "CLAW Stealth Alerts, active BTC long alert with entry, take-profit and stop-loss levels" },
  { src: "/hero-phone/5.png", alt: "Ask Claw, prompt hub with Hot, Analysis, Macro and Whales filters and suggested setup questions" },
  { src: "/hero-phone/6.png", alt: "Ask Claw, generated BTC long candidate setup with trigger, entry, stop, two take-profits, R:R and conviction" },
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
 *   • 30s full cycle, 6 slides × 5s each
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
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="iphone-slide"
                style={{ animationDelay: `${-1 + i * 5}s` }}
                loading="eager"
                decoding="async"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
