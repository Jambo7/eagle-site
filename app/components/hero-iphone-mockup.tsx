import { useId } from "react";

type Props = {
  /** CTA above chart card (default: Stealth product anchor) */
  ctaHref?: string;
  ctaLabel?: string;
};

/**
 * Hero / marketing iPhone + live chart mock — same animation & layout as homepage hero.
 * SVG gradient ids are uniqued so multiple instances never clash.
 */
export default function HeroIphoneMockup({
  ctaHref = "/products#claw-stealth",
  ctaLabel = "Explore CLAW Stealth",
}: Props) {
  const uid = useId().replace(/:/g, "");

  const areaId = `pui-area-${uid}`;
  const lineId = `pui-line-${uid}`;
  const dotGlowId = `pui-dot-glow-${uid}`;

  return (
    <div className="iphone-frame">
      <span className="iphone-btn ib-silent" />
      <span className="iphone-btn ib-vol-up" />
      <span className="iphone-btn ib-vol-dn" />
      <span className="iphone-btn ib-power" />
      <div className="iphone-screen">
        <div className="iphone-island" />
        <div className="chart-card">
          <a href={ctaHref} className="chart-hover-cta">
            <span className="chc-glow" />
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

          <div className="pui-signal">
            <div className="pui-signal-pair-row">
              <span className="pui-pair">BTC / USDT</span>
              <div className="pui-price-row">
                <span className="pui-price">$67,420</span>
                <span className="pui-change pos">▲ 3.24%</span>
              </div>
            </div>
            <div className="pui-signal-header">
              <span className="pui-signal-label">AI SIGNAL</span>
              <span className="pui-signal-tf">4H</span>
            </div>
            <div className="pui-signal-dir long">LONG</div>
            <div className="pui-signal-meta">
              <div className="pui-sm-item">
                <span className="pui-sm-label">Confidence</span>
                <span className="pui-sm-val">87%</span>
              </div>
              <div className="pui-sm-divider" />
              <div className="pui-sm-item">
                <span className="pui-sm-label">Entry</span>
                <span className="pui-sm-val">$67.2k</span>
              </div>
              <div className="pui-sm-divider" />
              <div className="pui-sm-item">
                <span className="pui-sm-label">Target</span>
                <span className="pui-sm-val green">$71.8k</span>
              </div>
            </div>
            <div className="pui-conf-bar">
              <div className="pui-conf-fill" style={{ width: "87%" }} />
            </div>
          </div>

          <div className="pui-cta-row">
            <button type="button" className="pui-trade-btn">
              Trade Now
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="pui-chart">
            <svg viewBox="0 0 800 300" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              <defs>
                <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e58e0" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1e58e0" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1a50d8" />
                  <stop offset="75%" stopColor="#18b8ec" />
                  <stop offset="100%" stopColor="#32dcf4" />
                </linearGradient>
                <radialGradient id={dotGlowId} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#40e4fc" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#28d0f0" stopOpacity="0" />
                </radialGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
                <line x1="0" y1="75" x2="800" y2="75" />
                <line x1="0" y1="150" x2="800" y2="150" />
                <line x1="0" y1="225" x2="800" y2="225" />
              </g>
              <path
                d="M0,260 C60,248 120,265 170,238 C220,210 270,228 320,198 C370,168 420,188 470,158 C520,128 570,148 620,118 C670,88 720,105 800,78 L800,300 L0,300 Z"
                fill={`url(#${areaId})`}
              />
              <path
                d="M0,260 C60,248 120,265 170,238 C220,210 270,228 320,198 C370,168 420,188 470,158 C520,128 570,148 620,118 C670,88 720,105 800,78"
                fill="none"
                stroke={`url(#${lineId})`}
                strokeWidth="1.5"
              />
              <circle cx="800" cy="78" r="16" fill={`url(#${dotGlowId})`} className="pui-now-halo" />
              <circle cx="800" cy="78" r="3.5" fill="#36e0f8" className="pui-now-dot" />
            </svg>
          </div>

          <div className="pui-metrics">
            <div className="pui-met-item">
              <span className="pui-met-label">RSI</span>
              <span className="pui-met-val">68.2</span>
            </div>
            <div className="pui-met-sep" />
            <div className="pui-met-item">
              <span className="pui-met-label">Volume</span>
              <span className="pui-met-val">$2.3B</span>
            </div>
            <div className="pui-met-sep" />
            <div className="pui-met-item">
              <span className="pui-met-label">MACD</span>
              <span className="pui-met-val bullish">Bullish</span>
            </div>
          </div>
        </div>
        <div className="iphone-home-bar" />
      </div>
    </div>
  );
}
