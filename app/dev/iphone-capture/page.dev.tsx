import CaptureFrame from "./capture-frame";

/**
 * Dev-only isolated render of the hero iPhone mockup, used by
 * `scripts/capture-iphone-video.mjs` to export a transparent-background
 * marketing video (ProRes 4444 .mov).
 *
 * Not linked from anywhere on the site. Hit it directly:
 *   /dev/iphone-capture?pose=tilt
 *   /dev/iphone-capture?pose=flat
 *
 * The page intentionally has a transparent body so the Puppeteer
 * `omitBackground: true` screenshot captures alpha cleanly, including
 * the device's drop shadow and the blue pedestal glow.
 *
 * NOTE on the `.dev.tsx` extension:
 *   `next.config.ts` only registers `*.dev.tsx` as a page extension when
 *   building for dev (i.e. when NEXT_PUBLIC_BASE_PATH is unset). The
 *   GitHub Pages production export skips this file entirely, which is
 *   what we want — it uses `searchParams`, which is incompatible with
 *   Next's static export, and it has no business being on the public
 *   site anyway.
 */
export default async function IphoneCapturePage({
  searchParams,
}: {
  searchParams: Promise<{ pose?: string }>;
}) {
  const { pose: poseParam } = await searchParams;
  const pose: "tilt" | "flat" = poseParam === "flat" ? "flat" : "tilt";

  return <CaptureFrame pose={pose} />;
}
