import { ApplyButton } from "@/components/ApplyButton";
import { Header } from "@/components/Header";
import { FeaturedCard } from "@/components/ResultCards";
import { COACH_NAME, disclaimer, featuredResults } from "@/lib/content";

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
        <section id="results" className="bg-paper py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Client results
              </h2>
              <p className="mt-3 text-mist-500">Measured outcomes from clients coached one-on-one.</p>
            </div>

            <div className="space-y-6">
              {featuredResults.map((r, i) => (
                <FeaturedCard key={i} {...r} reverse={i % 2 === 1} />
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mist-500">{disclaimer}</p>
          </div>
        </section>

        <footer className="border-t border-mist-200 bg-paper px-6 py-8 text-center text-sm text-mist-500">
          © {new Date().getFullYear()} {COACH_NAME}
        </footer>
      </main>
    </>
  );
}
