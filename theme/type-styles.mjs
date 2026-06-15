// ─────────────────────────────────────────────────────────────────────────────
// Editable typography config — the SINGLE place to tune non-size properties.
//
// Font SIZES come from tokens/typography.json (exported from Figma, px, per
// breakpoint). Everything else — weight, line-height, letter-spacing, casing,
// italic — is defined here and is safe to hand-tune. The generator
// (scripts/generate-theme.mjs) joins these with the JSON sizes to emit the
// per-style responsive CSS classes (.type-h1, .type-r-h1, …).
//
// Keys MUST match the style names in tokens/typography.json exactly.
// ─────────────────────────────────────────────────────────────────────────────

// Family → CSS font stack (also emitted as --font-* custom properties).
export const families = {
  Pacaembu: "pacaembu, sans-serif",
  Redaction10: "redaction-10, sans-serif",
};

// Class-name prefix per family. Pacaembu is the workhorse so it gets the bare
// `type-` namespace; Redaction is the accent face under `type-r-`.
export const classPrefix = {
  Pacaembu: "type",
  Redaction10: "type-r",
};

// Per-style, non-size properties. `letterSpacing` in em, `transform` maps to
// text-transform, `italic` toggles font-style. Omitted fields fall back to
// sensible normals.
export const styles = {
  Pacaembu: {
    H1: { weight: 700, lineHeight: 1.05 },
    H2: { weight: 700, lineHeight: 1.08 },
    H3: { weight: 600, lineHeight: 1.12 },
    H4: { weight: 600, lineHeight: 1.2 },
    H5: { weight: 600, lineHeight: 1.25 },
    H6: { weight: 600, lineHeight: 1.25 },
    H7: { weight: 600, lineHeight: 1.3 },
    Body1: { weight: 400, lineHeight: 1.5 },
    Body2: { weight: 400, lineHeight: 1.55 },
    Body3: { weight: 400, lineHeight: 1.55 },
    Body4: { weight: 400, lineHeight: 1.6 },
    Label1: { weight: 600, lineHeight: 1.2, letterSpacing: 0.04, transform: "uppercase" },
    Label2: { weight: 600, lineHeight: 1.2, letterSpacing: 0.08, transform: "uppercase" },
    Label3: { weight: 600, lineHeight: 1.2, letterSpacing: 0.1, transform: "uppercase" },
    Label4: { weight: 600, lineHeight: 1.2, letterSpacing: 0.12, transform: "uppercase" },
    Button1: { weight: 600, lineHeight: 1, letterSpacing: 0.04, transform: "uppercase" },
    Link1: { weight: 600, lineHeight: 1.2, letterSpacing: 0.02 },
  },
  Redaction10: {
    H1: { weight: 400, lineHeight: 1.02, italic: true },
    H2: { weight: 400, lineHeight: 1.05, italic: true },
    Label1: { weight: 400, lineHeight: 1.1, italic: true },
    Label2: { weight: 400, lineHeight: 1.1, italic: true },
    Label3: { weight: 400, lineHeight: 1.15, italic: true },
  },
};

// Map JSON breakpoint keys → min-width (px). `mobile` is the base (no media
// query). Order matters: ascending. Mirrors screens in tailwind.config.mjs.
export const breakpoints = [
  { key: "mobile", minWidth: 0 },
  { key: "desktop", minWidth: 768 },
  { key: "large", minWidth: 1440 },
  { key: "extra_large", minWidth: 1920 },
];
