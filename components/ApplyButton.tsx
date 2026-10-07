import { APPLICATION_URL } from "@/lib/content";

export function ApplyButton() {
  return (
    <a
      href={APPLICATION_URL}
      className="group inline-flex items-center gap-4 border border-ink bg-ink px-8 py-5 text-base font-medium text-paper transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:px-12 sm:py-6 sm:text-lg"
    >
      Application For 1-1 Coaching
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
      </svg>
    </a>
  );
}
