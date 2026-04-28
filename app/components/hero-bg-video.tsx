"use client";

import { useEffect, useRef } from "react";

/**
 * Atmospheric hero background video.
 *
 * Client component only because `<video playbackRate>` is not a supported
 * HTML attribute, it has to be set on the element in JS. Setting it on
 * `loadedmetadata` rather than `onCanPlay` means the speed is locked in
 * before the first frame renders, avoiding the split-second of normal-speed
 * playback you get if you wait for playback to start.
 *
 * All styling (opacity, blur, positioning, etc.) lives in CSS under
 * `.hero-bg-video` so the design can be tuned without touching JS.
 */
export default function HeroBgVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const setSpeed = () => {
      try {
        v.playbackRate = 4;
      } catch {
        /* Some browsers throttle playbackRate; failing silently is fine. */
      }
    };

    setSpeed();
    v.addEventListener("loadedmetadata", setSpeed);
    v.addEventListener("ratechange", () => {
      if (v.playbackRate !== 4) setSpeed();
    });

    return () => {
      v.removeEventListener("loadedmetadata", setSpeed);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-bg-video"
      src="/hero-bg.mp4"
      /* Terminal screenshot is shown while the video is buffering, and is
         the static fallback if the browser can't / won't play the video. */
      poster="/hero-bg-terminal.png"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
