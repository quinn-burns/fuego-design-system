import Link from "next/link";

import { navItems } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-dark-beige">
      {/* Oversized wordmark spanning the full width. */}
      <div className="px-5 pb-10 pt-16 md:px-10 md:pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/wordmark-dark.svg"
          alt="Fuego UX"
          className="w-full"
        />
      </div>

      {/* Standard link footer */}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 border-t border-dark-beige px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="type-label3 text-light-gray">
          Fuego UX — Design System
        </p>
        <ul className="flex flex-wrap gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="type-label3 text-dark-gray transition-colors duration-150 hover:text-orange"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="type-label4 text-light-gray">
          © {new Date().getFullYear()} Fuego
        </p>
      </div>
    </footer>
  );
}
