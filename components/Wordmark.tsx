/* eslint-disable @next/next/no-img-element */
// Primary "fuego ux" wordmark — the black SVG asset, used in the top nav.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logos/wordmark-dark.svg"
      alt="Fuego UX"
      className={`h-5 w-auto md:h-6 ${className}`}
    />
  );
}
