import type { ReactNode } from "react";

// Swaps select words inside a Pacaembu headline to Redaction 10 italic — the
// signature brand treatment. Renders inline; inherits the surrounding size.
//   Building software is <Em>easy.</Em>
export function Em({ children }: { children: ReactNode }) {
  return <em className="em-accent">{children}</em>;
}
