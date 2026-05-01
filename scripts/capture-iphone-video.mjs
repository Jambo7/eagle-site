#!/usr/bin/env node
/**
 * Export the hero iPhone mockup as a transparent-background ProRes 4444
 * video, suitable for overlay/compositing in Premiere, Final Cut, DaVinci,
 * After Effects, or CapCut Pro.
 *
 * Pipeline:
 *   1. Spin headless Chromium against a running `next dev` server.
 *   2. Open /dev/iphone-capture?pose=<pose> at 1080×1920 CSS px, DPR 2
 *      (raw frames at 2160×3840) with a transparent default background.
 *   3. Pause every CSS animation, then deterministically seek the slide
 *      cycle frame-by-frame via `window.__setFrameTime(ms)`. This avoids
 *      wall-clock drift that the naive "screenshot every 33ms" approach
 *      suffers from once a single screenshot exceeds one frame budget.
 *   4. Save 900 PNGs (30s × 30fps) per pose with `omitBackground: true`
 *      so the device's drop shadow and pedestal glow land in the alpha
 *      channel as semi-transparent pixels.
 *   5. Hand the PNG sequence to a bundled ffmpeg binary that downscales
 *      with Lanczos to a clean 1080×1920 and writes ProRes 4444 .mov.
 *
 * Usage:
 *   # in one terminal
 *   npm run dev
 *
 *   # in another terminal
 *   npm run capture:iphone            # both poses
 *   npm run capture:iphone -- tilt    # just the 3D-tilted pose
 *   npm run capture:iphone -- flat    # just the flat-front pose
 *
 * Outputs land in eagle-site/out/:
 *   iphone-mockup-tilt.mov
 *   iphone-mockup-flat.mov
 *
 * Intermediate PNG sequences live in eagle-site/out/iphone-frames-<pose>/
 * and can be deleted once the .mov files are confirmed good.
 */

import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "out");

const BASE_URL = process.env.CAPTURE_BASE_URL ?? "http://localhost:3000";
const POSES = /** @type {const} */ (["tilt", "flat"]);
const FPS = 30;
const DURATION_MS = 30_000;
const FRAME_COUNT = (FPS * DURATION_MS) / 1000;
const FRAME_INTERVAL_MS = 1000 / FPS;
const VIEWPORT = { width: 1080, height: 1920, deviceScaleFactor: 2 };
const OUT_W = 1080;
const OUT_H = 1920;

/** Verify the dev server is up before launching Chromium. */
async function ensureDevServer() {
  try {
    const res = await fetch(BASE_URL, { method: "HEAD" });
    if (!res.ok && res.status !== 404) {
      throw new Error(`HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(
      `\n  Could not reach ${BASE_URL}.\n` +
        `  Start the dev server in another terminal first:\n\n` +
        `    npm run dev\n\n` +
        `  Then re-run this script.\n` +
        `  (underlying error: ${err instanceof Error ? err.message : err})`
    );
    process.exit(1);
  }
}

/**
 * Run ffmpeg with the given args, inheriting stdio so progress is visible.
 * @param {string[]} args
 */
function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegInstaller.path, args, { stdio: "inherit" });
    proc.on("error", reject);
    proc.on("close", (code) => {
      if (code === 0) resolve(undefined);
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

/**
 * @param {"tilt" | "flat"} pose
 */
async function capturePose(pose) {
  const framesDir = path.join(OUT_DIR, `iphone-frames-${pose}`);
  const movFile = path.join(OUT_DIR, `iphone-mockup-${pose}.mov`);

  console.log(`\n──── pose: ${pose} ────`);
  console.log(`  frames → ${path.relative(ROOT, framesDir)}`);
  console.log(`  video  → ${path.relative(ROOT, movFile)}`);

  if (existsSync(framesDir)) {
    await rm(framesDir, { recursive: true, force: true });
  }
  await mkdir(framesDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      // Forces the default page background to transparent so omitBackground:true
      // actually yields alpha instead of opaque white.
      "--default-background-color=00000000",
      "--hide-scrollbars",
      "--force-color-profile=srgb",
      "--font-render-hinting=none",
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    const url = `${BASE_URL}/dev/iphone-capture?pose=${pose}`;
    console.log(`  loading ${url}`);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });

    console.log("  waiting for slides + fonts to be ready…");
    await page.waitForFunction(() => window.__captureReady === true, {
      timeout: 30_000,
    });

    // Settle a beat so any final layout/animation init flushes.
    await new Promise((r) => setTimeout(r, 250));

    console.log(`  capturing ${FRAME_COUNT} frames @ ${FPS}fps`);
    const startedAt = Date.now();
    for (let i = 0; i < FRAME_COUNT; i++) {
      const t = i * FRAME_INTERVAL_MS;
      await page.evaluate((ms) => window.__setFrameTime?.(ms), t);

      const filename = path.join(
        framesDir,
        `frame-${String(i).padStart(5, "0")}.png`
      );
      await page.screenshot({
        path: filename,
        omitBackground: true,
        type: "png",
        captureBeyondViewport: false,
      });

      if (i % 30 === 0 || i === FRAME_COUNT - 1) {
        const pct = (((i + 1) / FRAME_COUNT) * 100).toFixed(1);
        process.stdout.write(`\r    ${i + 1}/${FRAME_COUNT}  (${pct}%)   `);
      }
    }
    const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
    console.log(`\n  captured in ${elapsed}s`);
  } finally {
    await browser.close();
  }

  console.log("  encoding ProRes 4444 (.mov) with bundled ffmpeg…");
  await runFfmpeg([
    "-y",
    "-framerate",
    String(FPS),
    "-i",
    path.join(framesDir, "frame-%05d.png"),
    "-vf",
    `scale=${OUT_W}:${OUT_H}:flags=lanczos`,
    "-c:v",
    "prores_ks",
    "-profile:v",
    "4",
    "-pix_fmt",
    "yuva444p10le",
    "-vendor",
    "apl0",
    "-qscale:v",
    "11",
    "-r",
    String(FPS),
    movFile,
  ]);

  console.log(`  ✓ ${path.relative(ROOT, movFile)}`);
}

async function main() {
  const requested = process.argv.slice(2).filter((arg) =>
    /** @type {readonly string[]} */ (POSES).includes(arg)
  );
  /** @type {readonly ("tilt" | "flat")[]} */
  const toRun = requested.length > 0 ? /** @type {any} */ (requested) : POSES;

  console.log(`Capturing pose(s): ${toRun.join(", ")}`);
  console.log(`Base URL:          ${BASE_URL}`);
  console.log(`Output dir:        ${path.relative(ROOT, OUT_DIR)}`);
  console.log(`ffmpeg binary:     ${ffmpegInstaller.path}`);

  await ensureDevServer();
  await mkdir(OUT_DIR, { recursive: true });

  for (const pose of toRun) {
    await capturePose(pose);
  }

  console.log("\nDone. Drop the .mov files into your editor as overlay clips.");
  console.log(
    "Tip: the intermediate PNG sequences in out/iphone-frames-* are safe to delete."
  );
}

main().catch((err) => {
  console.error("\nCapture failed:");
  console.error(err);
  process.exit(1);
});
