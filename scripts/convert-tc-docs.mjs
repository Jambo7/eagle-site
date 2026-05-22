/**
 * Converts the two product T&C .docx files in James's Downloads folder
 * into cleaned-up HTML and writes them as TypeScript modules at
 * `app/terms/_content/{slug}.ts` so the corresponding pages can embed
 * them via `dangerouslySetInnerHTML`.
 *
 * Cleaning rules applied:
 *   1. Drop the title-page paragraphs (EAGLE AI LABS / CLAW or STEALTH /
 *      TERMS & CONDITIONS) so we don't double up on the page title.
 *   2. Drop the "Contents" heading and every Word-generated TOC entry
 *      (any <p> containing only an <a href="#_Toc...">). LegalShell has
 *      its own visual structure and the TOC numbering is misleading
 *      because it references Word page numbers, not our page anchors.
 *   3. Strip the empty bookmark anchors (<a id="_Toc..."></a>) that
 *      live inside each section heading - they pointed to the now-gone
 *      TOC and would otherwise count as dead anchors.
 *   4. Demote every <h1> to <h2>. LegalShell already renders the page
 *      <h1> ("Terms and Conditions: Claw Pro"), so the document's
 *      section headings should slot in beneath it.
 *   5. Fix the obvious URL typo in the Privacy Policy reference
 *      (`/legal/privacy-policy.com` -> `/legal/privacy-policy`) and
 *      convert it to a relative internal link.
 *   6. Collapse runs of whitespace inside text nodes.
 *
 * Run: node scripts/convert-tc-docs.mjs
 */
import mammoth from "mammoth";
import fs from "node:fs/promises";
import path from "node:path";

const sources = [
  {
    slug: "claw-pro",
    label: "CLAW (UK)",
    path: "C:/Users/James/Downloads/CLAW - TERMS AND CONDITIONS - UK.docx",
  },
  {
    slug: "claw-stealth",
    label: "STEALTH (UAE)",
    path: "C:/Users/James/Downloads/STEALTH - TERMS AND CONDITIONS - UAE May 9th 2026.docx",
  },
];

const debugDir = path.resolve("scripts/_tc-output");
const targetDir = path.resolve("app/terms/_content");
await fs.mkdir(debugDir, { recursive: true });
await fs.mkdir(targetDir, { recursive: true });

function cleanHtml(rawHtml) {
  let html = rawHtml;

  // 1 + 2 + 3: drop title page + TOC + empty Toc anchors.
  // First, strip the empty anchor markers anywhere they appear (they
  // are inside headings: <h1><a id="_Toc..."></a>...</h1>).
  html = html.replace(/<a id="_Toc\d+"><\/a>/g, "");

  // Drop every paragraph that is purely a TOC entry: a <p> whose only
  // content is one <a href="#_Toc..."> link (with optional formatting).
  html = html.replace(/<p>\s*<a href="#_Toc\d+">[^<]*<\/a>\s*<\/p>/g, "");

  // Drop the bare "Contents" header (its own <p> after stripping above).
  html = html.replace(/<p>\s*Contents\s*<\/p>/g, "");

  // Drop the title-page paragraphs. They are the first few <p><strong>
  // blocks containing only "EAGLE AI LABS", the product name, and
  // "TERMS & CONDITIONS". Be precise to avoid clobbering real content.
  html = html.replace(
    /<p><strong>EAGLE AI LABS\s*<\/strong><\/p>\s*<p><strong>(?:CLAW|STEALTH)<\/strong><\/p>\s*<p><strong>TERMS &amp; CONDITIONS<\/strong><\/p>/,
    "",
  );

  // 4: every section uses <h1>; demote to <h2> so it lives under the
  // LegalShell's page <h1>.
  html = html.replace(/<h1>/g, "<h2>").replace(/<\/h1>/g, "</h2>");

  // 5: privacy policy link typo -> point at our actual route.
  html = html.replace(
    /<a href="http:\/\/www\.eagleailabs\.com\/legal\/privacy-policy\.com">[^<]*<\/a>/g,
    '<a href="/legal/privacy-policy">our Privacy Policy</a>',
  );

  // 6: collapse any 2+ consecutive newlines/spaces left over.
  html = html.replace(/\s{2,}/g, " ").trim();

  return html;
}

for (const { slug, label, path: src } of sources) {
  const buf = await fs.readFile(src);
  const { value: rawHtml, messages } = await mammoth.convertToHtml({ buffer: buf });
  const cleaned = cleanHtml(rawHtml);

  // Write debug artefacts (raw + cleaned) for inspection.
  await fs.writeFile(path.join(debugDir, `${slug}.raw.html`), rawHtml, "utf8");
  await fs.writeFile(path.join(debugDir, `${slug}.cleaned.html`), cleaned, "utf8");

  // Emit a TypeScript module the pages can import.
  // We escape backticks and ${ sequences so the HTML survives as a
  // template literal.
  const safe = cleaned.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  const tsBody = `// Auto-generated from ${path.basename(src)} via scripts/convert-tc-docs.mjs.
// Do not edit by hand - regenerate by running:
//   node scripts/convert-tc-docs.mjs
export const html = \`${safe}\`;
`;
  const tsPath = path.join(targetDir, `${slug}.ts`);
  await fs.writeFile(tsPath, tsBody, "utf8");

  console.log(`\n=== ${slug} (${label}) ===`);
  console.log(`Raw HTML:     ${rawHtml.length} chars`);
  console.log(`Cleaned HTML: ${cleaned.length} chars`);
  console.log(`TS module:    ${path.relative(process.cwd(), tsPath)}`);
  if (messages.length) {
    const nonInfo = messages.filter((m) => m.type !== "info");
    if (nonInfo.length) {
      console.log("Conversion notes:");
      for (const m of nonInfo) console.log(`  [${m.type}] ${m.message}`);
    }
  }
}

console.log(`\nDebug artefacts: ${path.relative(process.cwd(), debugDir)}`);
console.log(`Source modules: ${path.relative(process.cwd(), targetDir)}`);
