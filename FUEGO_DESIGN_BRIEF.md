# Fuego UX design system site — build brief

## Phase 1 scope: skeleton with real brand, placeholder content

Build the skeleton of the Fuego UX design system documentation site. Use the real brand tokens, fonts, and visual language from day one, but fill pages with placeholder/dummy content — real swatch data, type specimens, and components get wired in a later phase.

**Stack:** Next.js (App Router) + Tailwind CSS. Initialize a git repo with a sensible .gitignore. Will deploy to Vercel.

## Source files in this repo

- `tokens/brand_colors.json` — color tokens exported from Figma (name → hex)
- `tokens/typography.json` — font sizes in px, structured as breakpoint → family → style name → size
- `assets/` — logo SVGs (wordmark; use a gray placeholder box anywhere a logo asset is missing)

Wire tokens into the theme by reading these JSON files (a small build script or direct import is fine), generating CSS variables consumed by Tailwind. Nothing in components should hard-code a hex value or px font size — everything references the theme.

## Brand direction (match the fuegoux.com rebrand)

The site is warm, editorial, and confident: a cream page with dark ink, punctuated by full-bleed dark bands and a single hot orange accent. Flat surfaces, thin hairline borders, generous whitespace, oversized type.

### Palette (from brand_colors.json — use these exact values via tokens)

| Token | Hex | Role |
|---|---|---|
| Beige | #f3eee8 | Page background |
| White | #ffffff | Cards / raised surfaces |
| Dark Beige | #e1dcd6 | Hairline borders, dividers |
| Dark Gray | #272727 | Primary text; background of dark band sections |
| Light Gray | #3d3d3d | Secondary surfaces and muted elements on dark sections (note: despite the name, this is a dark value — keep the token name to match Figma) |
| Orange | #ff8f1f | The only accent: CTAs, numbered eyebrows, hover states, active nav |

Text on dark bands is White/Beige; orange works on both light and dark backgrounds.

### Typography (Adobe Fonts)

Load in the root layout: `<link rel="stylesheet" href="https://use.typekit.net/cca5aya.css">`

- **Pacaembu** (`pacaembu, sans-serif`; weights 300/400/600/700) — the workhorse: headings, body, labels, buttons, nav.
- **Redaction 10** (`redaction-10, sans-serif`; 400, 400 italic, 700) — the display/accent face. Its signature use: *select words inside a Pacaembu headline swap to Redaction 10 italic* (e.g. "Building software is *easy.* Understanding people is *hard.*"). Build a small `<Em>` component for this treatment so it's consistent everywhere.

### Type scale from typography.json

The JSON defines sizes (px) at four breakpoints: `mobile`, `desktop`, `large`, `extra_large`. Map to custom Tailwind breakpoints, e.g. base = mobile, `md` (≥768px) = desktop, `xl` (≥1440px) = large, `2xl` (≥1920px) = extra_large. Generate utilities/classes per named style (H1–H7, Body1–4, Label1–4, Button1, Link1 for Pacaembu; H1, H2, Label1–3 for Redaction 10) that switch size responsively.

Notes:
- The JSON contains **sizes only**. Define weights and line-heights in the theme file as editable values (sensible defaults: headings 600–700, body 400, line-height ~1.1–1.2 for display sizes, ~1.5–1.6 for body). Keep them in one place for easy tuning.
- Some styles share sizes at some breakpoints (e.g. desktop Body1 = Body2 = 24, H5 = H6 = 20). Keep them as distinct tokens anyway — they may diverge in weight/line-height later.

### Visual motifs (from the rebrand)

- Hairline-bordered grid cards (1px Dark Beige) on the cream background; cards sit edge-to-edge in a grid with shared borders rather than floating with gaps.
- Numbered orange eyebrows ("01", "02", …) above card/section titles where content is genuinely a sequence or an indexed list of sections.
- Uppercase, letterspaced small labels (Pacaembu, Label sizes) for nav links and eyebrows.
- Orange pill buttons (fully rounded, Dark Gray text, Button1 size).
- Full-bleed Dark Gray band sections with large White statements to break up the cream page.
- Oversized footer: giant "fuego ux" wordmark spanning the full width, above a standard link footer.
- No gradients, no drop shadows. Flat color, hairlines, and type do all the work.

## Site structure

**Top nav (no sidebar on home):** wordmark left; uppercase links right (Colors, Typography, Buttons, Logos); hamburger on mobile. Nav driven by a single config array so adding a future component page = one file + one config entry.

**Home page:**
1. Hero — large mixed-face headline (Pacaembu + Redaction italic accent words) introducing the design system, short Body intro, one orange pill CTA ("Explore foundations").
2. Section index — hairline-bordered grid of tiles (Colors, Typography, Buttons, Logos), each with numbered orange eyebrow, title, one-line description, arrow link.
3. One Dark Gray band with a large statement about the system (placeholder copy in brand voice).
4. Footer with giant wordmark.

**Subpages (shared template):** consistent header — orange numbered eyebrow + section label, large Pacaembu title (Redaction italic accent optional), Body description — then a content area. Dummy content per page: Colors = placeholder swatch grid; Typography = placeholder specimen rows; Buttons = placeholder variant grid; Logos = gray placeholder boxes with caption slots.

## Quality floor

Responsive down to mobile using the four-breakpoint scale; visible keyboard focus states (orange outline); `prefers-reduced-motion` respected if any animation is added; semantic HTML; no hard-coded colors or font sizes outside the theme.
