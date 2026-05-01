#!/usr/bin/env node
/**
 * Post-build path rewriter for GitHub Pages deployment.
 *
 * Background:
 *   The site uses plain `<a href="/products">` and `<img src="/logo.png">`
 *   tags throughout (no `next/link`, no `next/image`). When deployed to
 *   GitHub Pages under https://jambo7.github.io/eagle-site/, those root
 *   absolute paths point at the user-page root (https://jambo7.github.io/),
 *   not the project subpath, and they 404.
 *
 * What this does:
 *   Walks every .html file in the Next static export `out/` directory and
 *   prepends the configured base path to root-absolute URLs in `href=`,
 *   `src=`, `srcset=`, `action=`, `data-src=`, `poster=` attributes.
 *
 * What it intentionally skips:
 *   - URLs that already start with the base path (idempotent).
 *   - External URLs (http://, https://, //, data:, mailto:, tel:, blob:).
 *   - In-page anchors (#section).
 *   - URLs Next.js already prefixed via `assetPrefix` (e.g. /eagle-site/_next).
 *
 * Driven by env var NEXT_PUBLIC_BASE_PATH (e.g. "/eagle-site"). If unset
 * or empty, the script is a no-op so local builds aren't affected.
 */

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "out");

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

if (BASE_PATH && (!BASE_PATH.startsWith("/") || BASE_PATH.endsWith("/"))) {
  console.error(
    `[postbuild-base-path] Invalid NEXT_PUBLIC_BASE_PATH "${BASE_PATH}". Must start with "/" and not end with "/".`
  );
  process.exit(1);
}

// Attributes whose values are URLs we may need to rewrite.
const SINGLE_URL_ATTRS = ["href", "src", "action", "data-src", "poster"];

// Build one regex per attribute. We capture the attribute prefix and the
// quote character so we can safely re-emit them.
//
//   group 1: ` href=` (with leading whitespace and equals)
//   group 2: quote character (' or ")
//   group 3: rest of URL after the leading slash
const singleAttrRegexes = BASE_PATH
  ? SINGLE_URL_ATTRS.map(
      (attr) =>
        new RegExp(
          `(\\s${attr}=)(["'])\\/(?!\\/)(?!${escapeForRegex(BASE_PATH.slice(1))}(?:\\/|["']))([^"'#?]*)`,
          "gi"
        )
    )
  : [];

// `srcset` values are comma-separated lists of "URL descriptor" pairs, e.g.
//   srcset="/a.png 1x, /a@2x.png 2x"
// We rewrite each URL in the list independently.
const srcsetRegex = /(\ssrcset=)(["'])([^"']+)\2/gi;

function escapeForRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function rewriteSrcset(value) {
  return value
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return part;
      // First token is the URL, rest is the descriptor (e.g. "1x", "320w").
      const spaceIdx = trimmed.search(/\s/);
      const url = spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx);
      const tail = spaceIdx === -1 ? "" : trimmed.slice(spaceIdx);
      const rewritten = rewriteSingleUrl(url);
      return `${rewritten}${tail}`;
    })
    .join(", ");
}

function rewriteSingleUrl(url) {
  if (!url) return url;
  if (!url.startsWith("/")) return url;
  if (url.startsWith("//")) return url;
  if (url.startsWith(`${BASE_PATH}/`) || url === BASE_PATH) return url;
  return `${BASE_PATH}${url}`;
}

function rewriteHtml(content) {
  if (!BASE_PATH) return content;
  let next = content;

  for (const re of singleAttrRegexes) {
    next = next.replace(re, (_match, attrEq, quote, rest) => {
      // `rest` is everything after the leading slash, up to (but not
      // including) the closing quote / # / ? — we rebuild the URL.
      return `${attrEq}${quote}${BASE_PATH}/${rest}`;
    });
  }

  next = next.replace(srcsetRegex, (_match, attrEq, quote, value) => {
    return `${attrEq}${quote}${rewriteSrcset(value)}${quote}`;
  });

  return next;
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function main() {
  try {
    await stat(OUT_DIR);
  } catch {
    console.error(
      `[postbuild-base-path] No "out/" directory found at ${OUT_DIR}. Did "next build" run first?`
    );
    process.exit(1);
  }

  // GitHub Pages runs Jekyll by default, which (a) renders README.md as
  // the home page when no index.html exists at the served path and
  // (b) hides directories starting with "_" — meaning Next's `_next/`
  // chunks would 404. A `.nojekyll` marker disables Jekyll entirely.
  await writeFile(join(OUT_DIR, ".nojekyll"), "", "utf8");

  if (!BASE_PATH) {
    console.log(
      "[postbuild-base-path] Wrote .nojekyll. NEXT_PUBLIC_BASE_PATH not set — skipping URL rewrite."
    );
    return;
  }

  let touchedFiles = 0;
  let touchedReplacements = 0;

  for await (const file of walk(OUT_DIR)) {
    if (extname(file).toLowerCase() !== ".html") continue;
    const original = await readFile(file, "utf8");
    const rewritten = rewriteHtml(original);
    if (rewritten !== original) {
      await writeFile(file, rewritten, "utf8");
      touchedFiles += 1;
      // Rough count: how many places we changed in this file.
      touchedReplacements += countDifferences(original, rewritten);
    }
  }

  console.log(
    `[postbuild-base-path] Prefixed ${touchedReplacements} URL(s) across ${touchedFiles} HTML file(s) with "${BASE_PATH}".`
  );
}

function countDifferences(a, b) {
  // Cheap approximation: how many times BASE_PATH appears in b but not a.
  const before = (a.match(new RegExp(escapeForRegex(BASE_PATH), "g")) ?? []).length;
  const after = (b.match(new RegExp(escapeForRegex(BASE_PATH), "g")) ?? []).length;
  return Math.max(0, after - before);
}

main().catch((err) => {
  console.error("[postbuild-base-path] Failed:", err);
  process.exit(1);
});
