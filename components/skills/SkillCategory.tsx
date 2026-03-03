import type { SkillCategory as SkillCategoryType } from "@/types/skill";
import { SkillPill } from "./SkillPill";

type Props = {
  category: SkillCategoryType;
};

export function SkillCategory({ category }: Props) {
  return (
    <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
        {category.name}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <SkillPill key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
