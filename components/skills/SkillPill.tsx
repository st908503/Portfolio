import type { ComponentType } from "react";

type SkillPillProps = {
  label: string;
  icon: ComponentType<{ className?: string; size?: number }>;
};

export function SkillPill({ label, icon: Icon }: SkillPillProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 transition-all hover:bg-zinc-800/60">
      <Icon className="h-3.5 w-3.5 flex-shrink-0" />
      {label}
    </span>
  );
}
