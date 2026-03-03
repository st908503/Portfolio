"use client";

import { useState } from "react";

const FILTERS = ["All", "Fintech", "Mobile", "Web"];

export function ProjectFilters() {
  const [active, setActive] = useState("All");

  return (
    <div className="mb-4 flex flex-wrap gap-2 text-xs">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => setActive(filter)}
          className={`rounded-full border px-3 py-1 ${
            active === filter
              ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
              : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
