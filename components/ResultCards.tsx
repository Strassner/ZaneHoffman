import type { CompactResult, FeaturedResult, Quote } from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";

export function CompactCard({ name, descriptor }: CompactResult) {
  return (
    <article className="border border-mist-200 bg-paper">
      <BeforeAfter name={name} className="aspect-[4/3]" />
      <div className="p-4">
        <p className="font-display text-lg font-semibold tracking-tight">{name}</p>
        <p className="mt-1 font-mono text-xs leading-relaxed text-mist-500">{descriptor}</p>
      </div>
    </article>
  );
}

export function FeaturedCard({
  name,
  descriptor,
  lost,
  duration,
  summary,
  quote,
  images,
  reverse = false,
}: FeaturedResult & { reverse?: boolean }) {
  return (
    <article className="grid border border-mist-200 bg-paper lg:grid-cols-2">
      <BeforeAfter
        name={name}
        images={images}
        className={`${
          images
            ? "aspect-[1046/973] lg:sticky lg:top-20 lg:self-start"
            : "aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]"
        } ${reverse ? "lg:order-2" : ""}`}
      />
      <div className="flex flex-col justify-center gap-6 p-6 sm:p-10">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">{name}</p>
          <p className="mt-1 font-mono text-xs text-mist-500">{descriptor}</p>
        </div>
        <div className="flex items-baseline gap-3 border-y border-mist-200 py-4">
          <span className="font-display text-4xl font-semibold tracking-tight">−{lost}</span>
          {duration && <span className="font-mono text-sm text-mist-500">in {duration}</span>}
        </div>
        {summary && <p className="text-[15px] leading-relaxed text-ink/80">{summary}</p>}
        <blockquote className="space-y-4 border-l-2 border-sky-400 pl-4 text-[17px] leading-relaxed">
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

export function QuoteCard({ quote, name, descriptor }: Quote) {
  return (
    <figure className="flex flex-col justify-between gap-6 border border-mist-200 bg-mist-50 p-6">
      <blockquote className="leading-relaxed">“{quote}”</blockquote>
      <figcaption>
        <p className="font-display font-semibold tracking-tight">{name}</p>
        <p className="mt-0.5 font-mono text-xs text-mist-500">{descriptor}</p>
      </figcaption>
    </figure>
  );
}
