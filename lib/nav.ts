// Single source of truth for site sections. Adding a future component page =
// one new page file + one entry here. Drives the top nav AND the home-page
// section index (numbered eyebrows come from array order).
export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export const navItems: NavItem[] = [
  {
    label: "Colors",
    href: "/colors",
    description: "The cream-and-ink palette with a single hot orange accent.",
  },
  {
    label: "Typography",
    href: "/typography",
    description: "Pacaembu and Redaction 10 across a four-breakpoint scale.",
  },
  {
    label: "Buttons",
    href: "/buttons",
    description: "Orange pills and their states, sizes, and variants.",
  },
  {
    label: "Logos",
    href: "/logos",
    description: "Wordmark assets, spacing, and usage on light and dark.",
  },
];

// Zero-padded index string for orange numbered eyebrows: 0 -> "01".
export const eyebrowNumber = (index: number): string =>
  String(index + 1).padStart(2, "0");
