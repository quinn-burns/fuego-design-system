import { SubpageHeader } from "@/components/SubpageHeader";
import { Em } from "@/components/Em";
import brandColors from "@/tokens/brand_colors.json";

// Swatches reference token-backed Tailwind classes for the surface, and pull
// their hex straight from the token JSON for the caption — nothing hard-coded.
const swatches = [
  { token: "Beige", role: "Page background", number: "200", bg: "bg-beige", border: true },
  { token: "White", role: "Cards / raised surfaces", number: "—", bg: "bg-white", border: true },
  { token: "Dark Beige", role: "Hairlines & dividers", number: "400", bg: "bg-dark-beige" },
  { token: "Dark Gray", role: "Text & dark bands", number: "800", bg: "bg-dark-gray" },
  { token: "Light Gray", role: "Muted on dark", number: "700", bg: "bg-light-gray" },
  { token: "Orange", role: "The fuego accent", number: "400", bg: "bg-orange" },
];

export default function ColorsPage() {
  return (
    <>
      <SubpageHeader
        index="01"
        label="Colors"
        title={
          <>
            Cream, ink, and one <Em>hot</Em> accent.
          </>
        }
        description="The palette is intentionally small: a warm cream page, dark ink, hairline dividers, and a single orange that earns attention."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <ul className="hairline-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {swatches.map((s) => {
              const hex = (
                brandColors as Record<string, { value: string }>
              )[s.token].value.toUpperCase();
              return (
                <li key={s.token} className="hairline-cell p-6 md:p-8">
                  <div
                    className={`mb-6 h-40 w-full ${s.bg} ${
                      s.border ? "border border-dark-beige" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <p className="type-h5 text-dark-gray">
                    {s.token} {s.number !== "—" && s.number}
                  </p>
                  <p className="type-body4 mt-1 text-light-gray">{s.role}</p>
                  <p className="type-label4 mt-4 text-light-gray">{hex}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
