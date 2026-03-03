import { cn } from "@/lib/utils/cn";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-800 bg-zinc-900/40 p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
