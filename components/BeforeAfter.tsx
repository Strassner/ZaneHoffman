import Image, { type StaticImageData } from "next/image";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Props = {
  name: string;
  images?: { before: StaticImageData; after: StaticImageData };
  className?: string;
};

const beforeChip =
  "absolute left-0 top-0 border-b border-r border-mist-200 bg-paper px-2.5 py-1 text-xs font-medium";
const afterChip =
  "absolute left-0 top-0 border-b border-r border-sky-300 bg-sky-100 px-2.5 py-1 text-xs font-medium";

/** Side-by-side before/after pair. Falls back to placeholders when no photos are given. */
export function BeforeAfter({ name, images, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-2 gap-px bg-mist-200 ${className}`}>
      <figure className="relative bg-paper">
        {images ? (
          <Image
            src={images.before}
            alt={`${name} before`}
            fill
            sizes="(min-width: 1024px) 290px, 50vw"
            className="object-contain"
          />
        ) : (
          <PhotoPlaceholder label={`${name} before`} tone="grey" className="h-full min-h-full" />
        )}
        <figcaption className={beforeChip}>Before</figcaption>
      </figure>
      <figure className="relative bg-paper">
        {images ? (
          <Image
            src={images.after}
            alt={`${name} after`}
            fill
            sizes="(min-width: 1024px) 290px, 50vw"
            className="object-contain"
          />
        ) : (
          <PhotoPlaceholder label={`${name} after`} tone="blue" className="h-full min-h-full" />
        )}
        <figcaption className={afterChip}>After</figcaption>
      </figure>
    </div>
  );
}
