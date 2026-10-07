import { marker } from "@/lib/content";

export function MarkerPanel() {
  return (
    <div className="border border-sky-300 bg-sky-100 p-8 sm:p-12">
      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
        {marker.headline}
      </h3>

      <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
        <div>
          <p className="font-mono text-xs text-mist-500">{marker.beforeLabel}</p>
          <p className="font-display text-6xl font-semibold leading-none tracking-tight text-mist-500 sm:text-7xl">
            {marker.before}
          </p>
        </div>
        <svg
          viewBox="0 0 24 24"
          className="mb-2 h-8 w-8 text-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3 12h17M14 5.5 20.5 12 14 18.5" />
        </svg>
        <div>
          <p className="font-mono text-xs text-ink">{marker.afterLabel}</p>
          <p className="font-display text-6xl font-semibold leading-none tracking-tight sm:text-7xl">
            {marker.after}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl leading-relaxed text-ink/80">{marker.body}</p>
      <p className="mt-3 max-w-2xl text-sm italic text-mist-500">{marker.note}</p>
    </div>
  );
}
