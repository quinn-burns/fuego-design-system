import { Em } from "@/components/Em";
import { SectionTile } from "@/components/SectionTile";
import { navItems, eyebrowNumber } from "@/lib/nav";

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="border-b border-dark-beige px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="type-h1 max-w-[16ch] text-dark-gray">
            Fuego UX Design System
          </h1>
          <p className="type-body1 mt-10 max-w-[52ch] text-light-gray">
            A warm, editorial foundation of color, type, and components — the
            shared language behind every Fuego product. Placeholder copy for now;
            real specimens land in a later phase.
          </p>
        </div>
      </section>

      {/* 2 — Section index: hairline-bordered grid of tiles */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="type-h4 mb-10 text-dark-gray">Foundations</h2>
          <ul className="hairline-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {navItems.map((item, i) => (
              <li key={item.href} className="hairline-cell">
                <SectionTile item={item} index={eyebrowNumber(i)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Full-bleed Dark Gray band */}
      <section className="bg-dark-gray px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="type-label2 mb-8 text-orange">Why a system</p>
          <p className="type-h2 max-w-[22ch] text-white">
            One palette, one voice, <Em>infinite</Em> products built without
            guessing.
          </p>
          <p className="type-body2 mt-10 max-w-[50ch] text-beige">
            Tokens keep color and type honest across the whole surface. Change a
            value once and every page follows — no drift, no one-off hex codes.
          </p>
        </div>
      </section>
    </>
  );
}
