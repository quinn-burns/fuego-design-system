import { SubpageHeader } from "@/components/SubpageHeader";
import { PillButton } from "@/components/PillButton";
import { Em } from "@/components/Em";

const variants = [
  { name: "Solid", node: <PillButton variant="solid">Explore foundations</PillButton> },
  { name: "Outline", node: <PillButton variant="outline">Learn more</PillButton> },
  { name: "Solid · link", node: <PillButton href="/colors">View colors</PillButton> },
];

export default function ButtonsPage() {
  return (
    <>
      <SubpageHeader
        index="03"
        label="Buttons"
        title={
          <>
            Fully rounded, orange, and <Em>impossible</Em> to miss.
          </>
        }
        description="Orange pill buttons with Dark Gray text are the system's primary action. Placeholder variant grid — additional sizes and states wire in later."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <ul className="hairline-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {variants.map((v) => (
              <li
                key={v.name}
                className="hairline-cell flex min-h-[200px] flex-col items-start justify-between p-6 md:p-8"
              >
                <span className="type-label4 text-light-gray">{v.name}</span>
                <span className="my-auto">{v.node}</span>
              </li>
            ))}
          </ul>

          {/* States on a dark band — orange works on both grounds. */}
          <div className="hairline-grid mt-px grid grid-cols-1 bg-dark-gray">
            <div className="hairline-cell flex flex-wrap items-center gap-6 p-8">
              <span className="type-label4 text-beige">On dark</span>
              <PillButton variant="solid">Primary</PillButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
