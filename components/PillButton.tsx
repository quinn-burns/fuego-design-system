import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
};

const base =
  "type-button1 inline-flex items-center justify-center rounded-full px-7 py-3 transition-colors duration-150";

const variants: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  // Orange pill, Dark Gray text — the primary CTA. Hover lightens to Orange 300,
  // pressed to Orange 200 (matches the button spec).
  solid: "bg-orange text-dark-gray hover:bg-orange-300 active:bg-orange-200",
  // Secondary: orange hairline outline, fills Orange 50 on hover, 200 pressed.
  outline:
    "border border-orange text-dark-gray hover:bg-orange-50 active:bg-orange-200",
};

export function PillButton({
  children,
  href,
  variant = "solid",
}: PillButtonProps) {
  const className = `${base} ${variants[variant]}`;
  if (href) {
    // External links (e.g. the marketing site) open in a new tab.
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
