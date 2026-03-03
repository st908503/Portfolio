"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { experience } from "@/lib/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  const { theme } = useThemeContext();

  return (
    <ul className={`
      space-y-4
      ${theme === 'dark' 
        ? 'divide-y divide-zinc-800/50' 
        : 'divide-y divide-zinc-200/50'
      }
    `}>
      {experience.map((item) => (
        <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
      ))}
    </ul>
  );
}
