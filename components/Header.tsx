import { COACH_NAME } from "@/lib/content";
import { ApplyButton } from "./ApplyButton";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-mist-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <span className="font-display text-lg font-semibold tracking-tight">{COACH_NAME}</span>
        <ApplyButton size="sm">Apply now</ApplyButton>
      </div>
    </header>
  );
}
