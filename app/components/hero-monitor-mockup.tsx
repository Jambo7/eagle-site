type Props = {
  /** Screen image source. */
  src?: string;
  alt?: string;
  /** Optional monospace caption shown below the device. */
  caption?: string;
};

/**
 * External monitor mockup, used as the CLAW Pro hero device on /products
 * and reusable elsewhere. Apple Studio Display-style profile: thin bezel,
 * dark glass screen, thin metallic neck, wide oval foot.
 *
 * Anatomy (top → bottom):
 *   .monitor-mockup
 *     .monitor-frame         ← chassis around the display
 *       .monitor-bezel       ← black bezel inset (16:10 aspect)
 *         .monitor-screen    ← dark glass cavity holding the screenshot
 *           img.monitor-img
 *           .monitor-glass   ← directional specular reflection
 *     .monitor-neck          ← thin vertical post under center of display
 *     .monitor-foot          ← wide oval base sitting on the desk
 *
 * Design intent:
 *   - Static, head-on product shot (no 3D rotation), same lighting language
 *     as the iPhone mockup (3/4 key from upper-right).
 *   - Reads as "trader desk monitor" rather than "marketing render".
 *   - Reusable: drop in anywhere with a `src` and you get a sharp display.
 */
export default function HeroMonitorMockup({
  src = "/products-claw-pro-dashboard.png",
  alt = "CLAW Pro trading terminal",
  caption,
}: Props) {
  return (
    <div className="monitor-mockup">
      <div className="monitor-frame">
        <div className="monitor-bezel">
          <div className="monitor-screen">
            <img
              src={src}
              alt={alt}
              className="monitor-img"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className="monitor-glass" aria-hidden="true" />
          </div>
        </div>
        {/* Brand wordmark slot — kept blank for restraint, the bezel space
            below the screen reads as the "chin" of the monitor. */}
        <div className="monitor-chin" aria-hidden="true" />
      </div>

      {caption && (
        <div className="monitor-caption">
          <span className="cs-mono">{caption}</span>
        </div>
      )}
    </div>
  );
}
