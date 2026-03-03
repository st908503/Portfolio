"use client";

import { useThemeContext } from "@/features/theme/theme-provider";

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: "external" | "github" | "linkedin";
};

export function Icon({ name, className: externalClassName, ...props }: IconProps) {
  const { theme } = useThemeContext();

  // Icon-specific sizing for consistent appearance
  const sizeClasses = name === "external" 
    ? "h-3 w-3" 
    : "h-4 w-4";

  if (name === "external") {
    return (
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        {...props}
        className={`
          ${sizeClasses}
          ${theme === 'dark' 
            ? 'stroke-zinc-400' 
            : 'stroke-zinc-600'
          }
          ${externalClassName ?? ""}
        `}
        strokeWidth="1.2"
        stroke="currentColor"
        fill="none"
      >
        <path d="M4 4h8v8M9 3h4v4" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        {...props}
        className={`
          ${sizeClasses}
          ${theme === 'dark' 
            ? 'text-zinc-300' 
            : 'text-zinc-700'
          }
          ${externalClassName ?? ""}
        `}
        fill="currentColor"
      >
        <path d="M8 1.5a6.5 6.5 0 0 0-2.06 12.67c.33.06.45-.14.45-.32 0-.16-.01-.7-.01-1.27-1.64.3-2.06-.4-2.19-.78-.07-.18-.37-.78-.64-.94-.22-.12-.54-.42-.01-.43.5-.01.86.46.98.65.57.96 1.48.69 1.84.52.06-.41.22-.69.4-.85-1.46-.17-2.99-.73-2.99-3.26 0-.72.26-1.31.69-1.77-.07-.17-.3-.86.07-1.78 0 0 .55-.18 1.8.68a6.12 6.12 0 0 1 3.28 0c1.25-.87 1.8-.68 1.8-.68.37.92.14 1.61.07 1.78.43.46.69 1.05.69 1.77 0 2.54-1.54 3.09-3.01 3.26.23.2.43.59.43 1.19 0 .86-.01 1.55-.01 1.76 0 .18.12.39.45.32A6.5 6.5 0 0 0 8 1.5Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        {...props}
        className={`
          ${sizeClasses}
          ${theme === 'dark' 
            ? 'text-zinc-300' 
            : 'text-zinc-700'
          }
          ${externalClassName ?? ""}
        `}
        fill="currentColor"
      >
        <path d="M3.5 2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM2.5 6h2v7.5h-2V6Zm4 0h1.9v1.03h.03c.26-.49.9-1.03 1.85-1.03 1.98 0 2.35 1.3 2.35 3v4.5h-2V9.7c0-.79-.01-1.8-1.1-1.8-1.1 0-1.27.86-1.27 1.75v3.85h-2V6Z" />
      </svg>
    );
  }

  return null;
}
