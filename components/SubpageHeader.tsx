import type { ReactNode } from "react";

// Shared subpage header: orange numbered eyebrow + section label, large
// Pacaembu title (optional Redaction italic accent via <Em> in `title`),
// and a Body description.
type SubpageHeaderProps = {
  index: string; // zero-padded, e.g. "01"
  label: string;
  title: ReactNode;
  description: ReactNode;
};

export function SubpageHeader({
  index,
  label,
  title,
  description,
}: SubpageHeaderProps) {
  return (
    <header className="border-b border-dark-beige px-5 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <p className="type-label2 mb-6 flex items-center gap-3 text-orange">
          <span>{index}</span>
          <span className="h-px w-8 bg-orange" aria-hidden="true" />
          <span className="text-dark-gray">{label}</span>
        </p>
        <h1 className="type-h1 mb-6 max-w-[20ch] text-dark-gray">{title}</h1>
        <p className="type-body2 max-w-[60ch] text-light-gray">{description}</p>
      </div>
    </header>
  );
}
