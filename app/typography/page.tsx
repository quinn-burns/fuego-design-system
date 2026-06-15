import { SubpageHeader } from "@/components/SubpageHeader";

// Placeholder specimen rows — each demonstrates a generated type class.
const pacaembuRows = [
  { cls: "type-h1", name: "H1", sample: "The quick brown fox" },
  { cls: "type-h2", name: "H2", sample: "The quick brown fox" },
  { cls: "type-h3", name: "H3", sample: "The quick brown fox jumps" },
  { cls: "type-h4", name: "H4", sample: "The quick brown fox jumps over" },
  { cls: "type-h5", name: "H5", sample: "The quick brown fox jumps over the dog" },
  { cls: "type-body1", name: "Body1", sample: "Body copy sets the editorial tone of the system." },
  { cls: "type-body3", name: "Body3", sample: "Secondary body copy for descriptions and captions." },
  { cls: "type-label2", name: "Label2", sample: "Uppercase letterspaced label" },
  { cls: "type-button1", name: "Button1", sample: "Button label" },
];

const redactionRows = [
  { cls: "type-r-h1", name: "Display H1", sample: "Fuego UX" },
  { cls: "type-r-h2", name: "Display H2", sample: "Fuego UX" },
  { cls: "type-r-label1", name: "Label1", sample: "Fuego UX" },
];

export default function TypographyPage() {
  return (
    <>
      <SubpageHeader
        index="02"
        label="Typography"
        title="Pacaembu & Redaction 10"
        description="Two faces across a four-breakpoint scale. Pacaembu is the workhorse; Redaction 10 italic swaps in for accent words. Placeholder specimens — real metrics and copy land later."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px] space-y-16">
          <div>
            <h2 className="type-label2 mb-8 text-orange">Pacaembu</h2>
            <ul className="hairline-grid grid grid-cols-1">
              {pacaembuRows.map((row) => (
                <li
                  key={row.name}
                  className="hairline-cell flex flex-col gap-2 p-6 md:flex-row md:items-baseline md:gap-8 md:p-8"
                >
                  <span className="type-label4 shrink-0 text-light-gray md:w-28">
                    {row.name}
                  </span>
                  <span className={`${row.cls} text-dark-gray`}>
                    {row.sample}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="type-label2 mb-8 text-orange">Redaction 10</h2>
            <ul className="hairline-grid grid grid-cols-1">
              {redactionRows.map((row) => (
                <li
                  key={row.name}
                  className="hairline-cell flex flex-col gap-2 p-6 md:flex-row md:items-baseline md:gap-8 md:p-8"
                >
                  <span className="type-label4 shrink-0 text-light-gray md:w-28">
                    {row.name}
                  </span>
                  <span className={`${row.cls} text-dark-gray`}>
                    {row.sample}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
