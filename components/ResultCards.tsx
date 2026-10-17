import type { FeaturedResult } from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";

export function FeaturedCard({
  name,
  descriptor,
  lost,
  stat,
  duration,
  summary,
  quote,
  images,
  reverse = false,
}: FeaturedResult & { reverse?: boolean }) {
  return (
    <article className={`grid border border-mist-200 bg-paper ${images ? "lg:grid-cols-2" : ""}`}>
      {images && (
        <BeforeAfter
          name={name}
          images={images}
          className={`lg:sticky lg:top-20 lg:self-start ${reverse ? "lg:order-2" : ""}`}
        />
      )}
      <div className="flex flex-col justify-center gap-6 p-6 sm:p-10">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">{name}</p>
          <p className="mt-1 font-mono text-xs text-mist-500">{descriptor}</p>
        </div>
        <div className="flex items-baseline gap-3 border-y border-mist-200 py-4">
          <span className="font-display text-4xl font-semibold tracking-tight">
            {stat ?? `−${lost}`}
          </span>
          {duration && <span className="font-mono text-sm text-mist-500">in {duration}</span>}
        </div>
        {summary && <p className="text-[15px] leading-relaxed text-ink/80">{summary}</p>}
        <blockquote
          className={`space-y-4 border-l-2 border-sky-400 pl-4 text-[17px] leading-relaxed ${
            images ? "" : "max-w-3xl"
          }`}
        >
          {quote.map((p, i) => (
            <p key={i}>
              {i === 0 && "“"}
              {p}
              {i === quote.length - 1 && "”"}
            </p>
          ))}
        </blockquote>
      </div>
    </article>
  );
}
