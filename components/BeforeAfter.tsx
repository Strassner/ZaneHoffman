import Image, { type StaticImageData } from "next/image";

type Props = {
  name: string;
  images: { before: StaticImageData; after: StaticImageData };
  className?: string;
};

const beforeChip =
  "absolute left-0 top-0 border-b border-r border-mist-200 bg-paper px-2.5 py-1 text-xs font-medium";
const afterChip =
  "absolute left-0 top-0 border-b border-r border-sky-300 bg-sky-100 px-2.5 py-1 text-xs font-medium";

/** Side-by-side before/after pair, each column sized to its photo's own ratio. */
export function BeforeAfter({ name, images, className = "" }: Props) {
  const beforeRatio = images.before.width / images.before.height;
  const afterRatio = images.after.width / images.after.height;

  return (
    <div
      className={`grid gap-px bg-mist-200 ${className}`}
      style={{
        gridTemplateColumns: `${beforeRatio}fr ${afterRatio}fr`,
        aspectRatio: beforeRatio + afterRatio,
      }}
    >
      <figure className="relative bg-paper">
        <Image
          src={images.before}
          alt={`${name} before`}
          fill
          sizes="(min-width: 1024px) 290px, 50vw"
          className="object-contain"
        />
        <figcaption className={beforeChip}>Before</figcaption>
      </figure>
      <figure className="relative bg-paper">
        <Image
          src={images.after}
          alt={`${name} after`}
          fill
          sizes="(min-width: 1024px) 290px, 50vw"
          className="object-contain"
        />
        <figcaption className={afterChip}>After</figcaption>
      </figure>
    </div>
  );
}
