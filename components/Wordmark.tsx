// Live-text "fuego ux" wordmark set in Pacaembu: "fuego" heavy (700), "ux"
// light (400), lowercase. Used in the top nav. (The footer renders its own
// oversized variant.) Size/family/line-height come from the type theme; the
// two weights are overridden per-span.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`type-h5 lowercase leading-none text-dark-gray ${className}`}
      aria-label="Fuego UX"
    >
      <span className="font-bold">fuego</span>{" "}
      <span className="font-normal">ux</span>
    </span>
  );
}
