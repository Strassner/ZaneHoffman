type Props = {
  label: string;
  tone?: "grey" | "blue";
  className?: string;
};

/** Neutral portrait placeholder. Swap for <Image> once real photos exist. */
export function PhotoPlaceholder({ label, tone = "grey", className = "" }: Props) {
  const bg = tone === "blue" ? "bg-sky-100" : "bg-mist-100";
  const fg = tone === "blue" ? "text-sky-300" : "text-mist-300";

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end justify-center overflow-hidden ${bg} ${className}`}
    >
      <svg viewBox="0 0 200 250" className={`h-[88%] w-auto ${fg}`} fill="currentColor" aria-hidden="true">
        <circle cx="100" cy="82" r="38" />
        <path d="M18 250c0-58 36-98 82-98s82 40 82 98z" />
      </svg>
    </div>
  );
}
