import { SubpageHeader } from "@/components/SubpageHeader";
import { Em } from "@/components/Em";

const STATES = ["Default", "Hover", "Pressed", "Disabled"] as const;
const VARIANTS = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "text", label: "Text" },
  { key: "icon", label: "Icon" },
] as const;

type VariantKey = (typeof VARIANTS)[number]["key"];
type State = (typeof STATES)[number];

// Static demonstration of each state (the hover / pressed looks are baked in so
// every state is visible at once). All colors come from theme tokens.
const APPEARANCE: Record<
  "light" | "dark",
  Record<VariantKey, Record<State, string>>
> = {
  light: {
    primary: {
      Default: "bg-orange text-dark-gray",
      Hover: "bg-orange-300 text-dark-gray",
      Pressed: "bg-orange-200 text-dark-gray",
      Disabled: "bg-ink-12 text-ink-26",
    },
    secondary: {
      Default: "border border-orange text-dark-gray",
      Hover: "border border-orange bg-orange-50 text-dark-gray",
      Pressed: "border border-orange bg-orange-200 text-dark-gray",
      Disabled: "border border-ink-12 text-ink-26",
    },
    text: {
      Default: "text-dark-gray",
      Hover: "text-orange underline",
      Pressed: "text-orange-300",
      Disabled: "text-ink-26",
    },
    icon: {
      Default: "bg-orange text-white",
      Hover: "bg-orange-300 text-white",
      Pressed: "bg-orange-200 text-white",
      Disabled: "bg-ink-12 text-ink-26",
    },
  },
  dark: {
    primary: {
      Default: "bg-orange text-dark-gray",
      Hover: "bg-orange-300 text-dark-gray",
      Pressed: "bg-orange-200 text-dark-gray",
      Disabled: "bg-paper-12 text-paper-26",
    },
    secondary: {
      Default: "border border-orange text-beige",
      Hover: "border border-orange bg-paper-12 text-beige",
      Pressed: "border border-orange bg-orange-200 text-dark-gray",
      Disabled: "border border-paper-12 text-paper-26",
    },
    text: {
      Default: "text-beige",
      Hover: "text-orange underline",
      Pressed: "text-orange-300",
      Disabled: "text-paper-26",
    },
    icon: {
      Default: "bg-orange text-white",
      Hover: "bg-orange-300 text-white",
      Pressed: "bg-orange-200 text-white",
      Disabled: "bg-paper-12 text-paper-26",
    },
  },
};

const SHAPE: Record<VariantKey, string> = {
  primary:
    "type-button1 inline-flex items-center justify-center rounded-full px-6 py-2.5",
  secondary:
    "type-button1 inline-flex items-center justify-center rounded-full px-6 py-2.5",
  text: "type-button1 inline-flex items-center justify-center",
  icon: "inline-flex h-9 w-9 items-center justify-center",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M4 10h11M10.5 5.5 16 10l-5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Matrix({ surface }: { surface: "light" | "dark" }) {
  const labelColor = surface === "dark" ? "text-beige" : "text-dark-gray";
  const mutedColor = surface === "dark" ? "text-paper-26" : "text-light-gray";
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[640px] grid-cols-[120px_repeat(4,1fr)] gap-y-8">
        {/* header row: state names */}
        <div />
        {STATES.map((state) => (
          <div key={state} className={`type-label4 ${mutedColor}`}>
            {state}
          </div>
        ))}

        {/* one row per variant */}
        {VARIANTS.map((variant) => (
          <div key={variant.key} className="contents">
            <div className={`type-label3 self-center ${labelColor}`}>
              {variant.label}
            </div>
            {STATES.map((state) => (
              <div key={state} className="flex items-center">
                <span
                  className={`${SHAPE[variant.key]} ${APPEARANCE[surface][variant.key][state]}`}
                >
                  {variant.key === "icon" ? <ArrowIcon /> : "Button"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

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
        description="Four variants — primary, secondary, text, and icon — across their default, hover, pressed, and disabled states, on both light and dark surfaces."
      />

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px] space-y-px">
          {/* Light surface */}
          <div className="border border-dark-beige bg-white p-6 md:p-10">
            <p className="type-label2 mb-10 text-orange">On light</p>
            <Matrix surface="light" />
          </div>

          {/* Dark surface */}
          <div className="bg-dark-gray p-6 md:p-10">
            <p className="type-label2 mb-10 text-orange">On dark</p>
            <Matrix surface="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
