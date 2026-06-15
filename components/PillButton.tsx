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
  // Orange pill, Dark Gray text — the primary CTA.
  solid: "bg-orange text-dark-gray hover:bg-dark-gray hover:text-orange",
  // Hairline outline that fills orange on hover.
  outline:
    "border border-dark-gray text-dark-gray hover:bg-orange hover:border-orange",
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
