import { ApplyButton } from "@/components/ApplyButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { COACH_NAME, story, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* Application */}
      <section id="apply" className="bg-grid relative border-b border-mist-200 bg-sky-50">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-sm font-semibold tracking-tight">{COACH_NAME}</span>
          <span className="text-sm text-mist-500">1-1 fitness coaching</span>
        </header>
        <div className="flex min-h-[70vh] items-center justify-center px-6 pb-24">
          <ApplyButton />
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="border-b border-mist-200 bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Client results</h2>
            <p className="mt-3 text-mist-500">
              Measured outcomes from clients coached one-on-one.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* My story */}
      <section id="story" className="bg-mist-50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[5fr_6fr] md:gap-16">
          <PhotoPlaceholder
            label={`${COACH_NAME}, coach`}
            tone="blue"
            className="aspect-[4/5] border border-sky-200"
          />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">My story</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/80">
              {story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-8 border-t border-mist-200 pt-6 text-sm font-semibold">{COACH_NAME}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-mist-200 bg-paper px-6 py-8 text-center text-sm text-mist-500">
        © {new Date().getFullYear()} {COACH_NAME}
      </footer>
    </main>
  );
}
