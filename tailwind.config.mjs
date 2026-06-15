/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Four-breakpoint scale from the brief. Base (no prefix) = mobile.
    // md = desktop, xl = large, 2xl = extra_large. These mirror the
    // breakpoints the theme generator uses for responsive type sizes.
    screens: {
      md: "768px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      // Colors are wired to CSS variables emitted by scripts/generate-theme.mjs
      // from tokens/brand_colors.json. Token names are preserved to match Figma.
      colors: {
        beige: "var(--color-beige)",
        white: "var(--color-white)",
        "dark-beige": "var(--color-dark-beige)",
        "dark-gray": "var(--color-dark-gray)",
        "light-gray": "var(--color-light-gray)",
        orange: "var(--color-orange)",
      },
      fontFamily: {
        pacaembu: "var(--font-pacaembu)",
        redaction: "var(--font-redaction10)",
      },
      borderColor: {
        DEFAULT: "var(--color-dark-beige)",
      },
    },
  },
  plugins: [],
};

export default config;
