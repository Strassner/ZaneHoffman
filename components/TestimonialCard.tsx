import type { Testimonial } from "@/lib/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function TestimonialCard({ name, lost, duration, summary }: Testimonial) {
  return (
    <article className="flex flex-col border border-mist-200 bg-paper">
      <div className="grid grid-cols-2 gap-px bg-mist-200">
        <figure className="relative bg-paper">
          <PhotoPlaceholder label={`${name} before`} tone="grey" className="aspect-[3/4]" />
          <figcaption className="absolute left-0 top-0 border-b border-r border-mist-200 bg-paper px-3 py-1.5 text-xs font-medium text-ink">
            Before
          </figcaption>
        </figure>
        <figure className="relative bg-paper">
          <PhotoPlaceholder label={`${name} after`} tone="blue" className="aspect-[3/4]" />
          <figcaption className="absolute left-0 top-0 border-b border-r border-sky-300 bg-sky-100 px-3 py-1.5 text-xs font-medium text-ink">
            After
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-baseline justify-between gap-4 border-b border-mist-200 pb-5">
          <div>
            <p className="text-3xl font-semibold tracking-tight">−{lost}</p>
            <p className="mt-1 text-sm text-mist-500">in {duration}</p>
          </div>
          <p className="text-sm font-medium">{name}</p>
        </div>
        <p className="text-[15px] leading-relaxed text-ink/80">{summary}</p>
      </div>
    </article>
  );
}
