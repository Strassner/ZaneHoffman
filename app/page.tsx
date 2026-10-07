import { ApplyButton } from "@/components/ApplyButton";
import { Header } from "@/components/Header";
import { MarkerPanel } from "@/components/MarkerPanel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CompactCard, FeaturedCard, QuoteCard } from "@/components/ResultCards";
import {
  COACH_NAME,
  compactResults,
  disclaimer,
  featuredResults,
  quotes,
  story,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Application */}
        <section
          id="apply"
          className="bg-grid flex min-h-[55vh] flex-col items-center justify-center gap-4 border-b border-mist-200 bg-sky-50 px-6 py-24"
        >
          <ApplyButton />
          <p className="font-mono text-xs text-mist-500">Takes 30 seconds</p>
        </section>

        {/* Testimonials */}
        <section id="results" className="border-b border-mist-200 bg-paper py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Client results
              </h2>
              <p className="mt-3 text-mist-500">Measured outcomes from clients coached one-on-one.</p>
            </div>

            <div className="space-y-6">
              <MarkerPanel />

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                {compactResults.map((r) => (
                  <CompactCard key={r.name} {...r} />
                ))}
              </div>

              {featuredResults.map((r, i) => (
                <FeaturedCard key={r.name} {...r} reverse={i % 2 === 1} />
              ))}

              <div className="grid gap-6 md:grid-cols-3">
                {quotes.map((q) => (
                  <QuoteCard key={q.name} {...q} />
                ))}
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mist-500">{disclaimer}</p>
          </div>
        </section>

        {/* My story */}
        <section id="story" className="border-b border-mist-200 bg-mist-50 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[5fr_6fr] md:gap-16">
            <PhotoPlaceholder
              label={`${COACH_NAME}, coach`}
              tone="blue"
              className="aspect-[4/5] border border-sky-200"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                My story
              </h2>
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/80">
                {story.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 border-t border-mist-200 pt-6 text-sm font-semibold">{COACH_NAME}</p>
            </div>
          </div>
        </section>

        {/* Closing application */}
        <section className="bg-grid flex flex-col items-center gap-4 bg-sky-50 px-6 py-24 text-center">
          <h2 className="mb-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            This only gets harder the longer you wait. Start today.
          </h2>
          <ApplyButton />
          <p className="font-mono text-xs text-mist-500">Takes 30 seconds</p>
        </section>

        <footer className="border-t border-mist-200 bg-paper px-6 py-8 text-center text-sm text-mist-500">
          © {new Date().getFullYear()} {COACH_NAME}
        </footer>
      </main>
    </>
  );
}
