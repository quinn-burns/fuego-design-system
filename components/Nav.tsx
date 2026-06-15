"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/lib/nav";
import { PillButton } from "./PillButton";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `type-label2 transition-colors duration-150 hover:text-orange ${
      isActive(href) ? "text-orange" : "text-dark-gray"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-dark-beige bg-beige/95 backdrop-blur supports-[backdrop-filter]:bg-beige/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10"
      >
        <Link href="/" aria-label="Fuego UX home" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Desktop: inline links + primary pill, always visible */}
        <div className="hidden items-center gap-6 md:flex xl:gap-10">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <PillButton href="https://fuegoux.com">fuegoux.com</PillButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-dark-gray transition-transform duration-150 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-dark-gray transition-opacity duration-150 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-dark-gray transition-transform duration-150 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu: overlays page content (does not shift layout).
          Anchored to the sticky header via top-full; backdrop closes it. */}
      {open && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-dark-gray/20 md:hidden"
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 border-t border-dark-beige bg-beige md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-dark-beige">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block px-5 py-4 ${linkClass(item.href)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-5 py-5">
              <PillButton href="https://fuegoux.com">fuegoux.com</PillButton>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
