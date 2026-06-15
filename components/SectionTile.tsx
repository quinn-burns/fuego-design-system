import Link from "next/link";

import type { NavItem } from "@/lib/nav";

// One tile in the home-page section index: numbered orange eyebrow, title,
// one-line description, arrow link. Designed to sit in a shared-border grid,
// so it carries no border of its own.
export function SectionTile({
  item,
  index,
}: {
  item: NavItem;
  index: string;
}) {
  return (
    <Link
      href={item.href}
      className="group flex min-h-[260px] flex-col justify-between bg-beige p-6 transition-colors duration-150 hover:bg-white md:min-h-[320px] md:p-8"
    >
      <span className="type-label2 text-orange">{index}</span>
      <span className="mt-auto">
        <span className="type-h3 block text-dark-gray">{item.label}</span>
        <span className="type-body3 mt-3 block max-w-[34ch] text-light-gray">
          {item.description}
        </span>
        <span className="type-link1 mt-6 inline-flex items-center gap-2 text-dark-gray transition-colors duration-150 group-hover:text-orange">
          Explore
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </span>
    </Link>
  );
}
