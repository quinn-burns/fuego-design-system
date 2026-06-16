/* eslint-disable @next/next/no-img-element */
import { SubpageHeader } from "@/components/SubpageHeader";
import { Em } from "@/components/Em";

type LogoSlot = {
  caption: string;
  src?: string; // real asset under /public/logos
  bg?: string; // surface the mark sits on
};

const logoSlots: LogoSlot[] = [
  // The dark wordmark is the primary logo.
  { caption: "Wordmark · primary (dark)", src: "/logos/wordmark-dark.svg", bg: "bg-white" },
  { caption: "Wordmark · orange", src: "/logos/wordmark-orange.svg", bg: "bg-beige" },
  { caption: "Wordmark · reversed (white)", src: "/logos/wordmark-white.svg", bg: "bg-dark-gray" },
  { caption: "Mark", src: "/logos/mark.png", bg: "bg-white" },
];

export default function LogosPage() {
  return (
    <>
      <SubpageHeader
        index="04"
        label="Logos"
        title={
          <>
            The wordmark, <Em>everywhere</Em> it needs to live.
          </>
        }
        description="The primary Fuego UX wordmark in its color treatments, plus the standalone mark."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <ul className="hairline-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {logoSlots.map((slot) => (
              <li key={slot.caption} className="hairline-cell p-6 md:p-8">
                {slot.src ? (
                  <div
                    className={`flex h-44 w-full items-center justify-center ${slot.bg ?? "bg-white"} p-8`}
                  >
                    <img
                      src={slot.src}
                      alt={slot.caption}
                      className="max-h-full w-auto max-w-[70%]"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-44 w-full items-center justify-center bg-light-gray"
                    role="img"
                    aria-label={`Placeholder: ${slot.caption}`}
                  >
                    <span className="type-label3 text-beige">logo</span>
                  </div>
                )}
                <p className="type-body4 mt-4 text-light-gray">{slot.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
