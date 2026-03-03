// components/home/HighlightsGrid.tsx
import { getTotalExperience } from "@/lib/utils/getTotalExperience";

export function HighlightsGrid() {
  const totalExp = getTotalExperience("2021-04-01");

  return (
    <section className="grid gap-4 text-sm text-zinc-300 sm:grid-cols-3">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Experience
        </h2>
        <p>{totalExp} across fintech, enterprise, and banking products.</p>
      </div>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Fintech & payments
        </h2>
        <p>UPI, BBPS, KYC, merchant onboarding, settlements, fraud detection.</p>
      </div>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Architecture & quality
        </h2>
        <p>RBAC, micro-frontends, performance optimization, monitoring, secure APIs.</p>
      </div>
    </section>
  );
}
