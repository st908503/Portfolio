import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = React.ComponentProps<typeof Link>;

export function ExternalLink({ className, children, ...props }: Props) {
  return (
    <Link
      className={cn(
        "inline-flex items-center text-xs text-emerald-400 hover:text-emerald-300",
        className
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
