import type { SkillCategory as SkillCategoryType } from "@/types/skill";
import { SkillPill } from "./SkillPill";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type Props = {
  category: SkillCategoryType;
};

export function SkillCategory({ category }: Props) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-3 rounded-2xl border p-5 transition-all duration-300",
        isDark
          ? "border-zinc-800 bg-zinc-900/60"
          : "border-zinc-200 bg-white shadow-sm"
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-wider",
          isDark ? "text-emerald-400" : "text-emerald-600"
        )}
      >
        {category.name}
      </p>

      <div className="flex flex-wrap gap-2">
        {category.items.map(({ label, icon }) => (
          <SkillPill key={label} label={label} icon={icon} />
        ))}
      </div>
    </div>
  );
}