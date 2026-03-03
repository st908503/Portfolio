import { cn } from "@/lib/utils/cn";

type TooltipProps = React.PropsWithChildren<{
  content: string;
  className?: string;
}>;

export function Tooltip({ content, className, children }: TooltipProps) {
  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span
        className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[10px] text-zinc-100 opacity-0 shadow-lg transition group-hover:opacity-100"
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
}
