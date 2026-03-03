type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
      {label}
    </span>
  );
}
