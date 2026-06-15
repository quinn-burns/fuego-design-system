import { SubpageHeader } from "@/components/SubpageHeader";
import { Em } from "@/components/Em";

// Swatches reference token-backed Tailwind classes — no hex is hard-coded here.
const swatches = [
  { name: "Beige", role: "Page background", bg: "bg-beige", border: true },
  { name: "White", role: "Cards / raised surfaces", bg: "bg-white", border: true },
  { name: "Dark Beige", role: "Hairlines & dividers", bg: "bg-dark-beige" },
  { name: "Dark Gray", role: "Text & dark bands", bg: "bg-dark-gray", invert: true },
  { name: "Light Gray", role: "Muted on dark", bg: "bg-light-gray", invert: true },
  { name: "Orange", role: "The single accent", bg: "bg-orange" },
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
        description="The palette is intentionally small: a warm cream page, dark ink, hairline dividers, and a single orange that earns attention. Placeholder swatch grid — real token metadata wires in later."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <ul className="hairline-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {swatches.map((s) => (
              <li key={s.name} className="hairline-cell p-6 md:p-8">
                <div
                  className={`mb-6 h-40 w-full ${s.bg} ${
                    s.border ? "border border-dark-beige" : ""
                  }`}
                  aria-hidden="true"
                />
                <p className="type-h5 text-dark-gray">{s.name}</p>
                <p className="type-body4 mt-1 text-light-gray">{s.role}</p>
                <p className="type-label4 mt-4 text-light-gray">
                  token · placeholder value
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
