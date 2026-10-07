import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Props = {
  name: string;
  className?: string;
};

/** Side-by-side before/after pair. Swap the placeholders for <Image> later. */
export function BeforeAfter({ name, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-2 gap-px bg-mist-200 ${className}`}>
      <figure className="relative bg-paper">
        <PhotoPlaceholder label={`${name} before`} tone="grey" className="h-full min-h-full" />
        <figcaption className="absolute left-0 top-0 border-b border-r border-mist-200 bg-paper px-2.5 py-1 text-xs font-medium">
          Before
        </figcaption>
      </figure>
      <figure className="relative bg-paper">
        <PhotoPlaceholder label={`${name} after`} tone="blue" className="h-full min-h-full" />
        <figcaption className="absolute left-0 top-0 border-b border-r border-sky-300 bg-sky-100 px-2.5 py-1 text-xs font-medium">
          After
        </figcaption>
      </figure>
    </div>
  );
}
