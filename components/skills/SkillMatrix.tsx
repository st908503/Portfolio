import { skills } from "@/lib/data/skills";
import { SkillCategory } from "./SkillCategory";

export function SkillMatrix() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((category) => (
        <SkillCategory key={category.name} category={category} />
      ))}
    </div>
  );
}
