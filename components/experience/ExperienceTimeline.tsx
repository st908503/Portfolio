import { experience } from "@/lib/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return (
    <ul className="space-y-4">
      {experience.map((item) => (
        <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
      ))}
    </ul>
  );
}
