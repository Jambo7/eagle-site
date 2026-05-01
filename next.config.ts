import type { NextConfig } from "next";
import path from "node:path";

// Static-export config for GitHub Pages deployment at
// https://jambo7.github.io/eagle-site/
//
// The Actions workflow sets NEXT_PUBLIC_BASE_PATH=/eagle-site so all
// Next-managed routes and `_next/*` assets resolve under that subpath.
// Plain `<a href="/...">` and `<img src="/...">` tags inside our JSX
// are NOT touched by Next at build time — those are rewritten by
// `scripts/postbuild-base-path.mjs` after `next build`.
//
// Local dev (`npm run dev`) leaves NEXT_PUBLIC_BASE_PATH unset, so the
// site behaves as if served from "/" with no rewriting needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isProductionExport = !!basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },

  // The repo sits inside a parent folder that contains a sibling Vite
  // project (`../package-lock.json`). Pin Turbopack's workspace root to
  // this app so it doesn't pick the parent and emit a warning every build.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Dev-only utility pages live alongside production pages but use the
  // `.dev.tsx` extension. They're recognized as routes only when running
  // `next dev`; the GitHub Pages production export omits them entirely
  // (e.g. /dev/iphone-capture, which uses `searchParams` and therefore
  // can't be statically rendered).
  pageExtensions: isProductionExport
    ? ["tsx", "ts", "jsx", "js"]
    : ["tsx", "ts", "jsx", "js", "dev.tsx", "dev.ts"],
};

export default nextConfig;
