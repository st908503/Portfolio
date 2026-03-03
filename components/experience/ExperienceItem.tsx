// components/experience/ExperienceItem.tsx
import type { ExperienceItem as ExperienceItemType } from "@/types/experience";
import { formatDateLabel } from "@/lib/utils/formatDate";

type Props = {
  item: ExperienceItemType;
};

export function ExperienceItem({ item }: Props) {
  return (
    <li className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-zinc-50">{item.role}</p>
          <p className="text-xs text-zinc-400">{item.company}</p>
          {item.location && (
            <p className="text-xs text-zinc-500">{item.location}</p>
          )}
        </div>
        <p className="text-xs text-zinc-500">
          {formatDateLabel(item.start, item.end)}
        </p>
      </div>
      <ul className="list-disc space-y-1 pl-4 text-xs text-zinc-300">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="text-xs text-zinc-400">
        {item.tech.join(" · ")}
      </p>
    </li>
  );
}
