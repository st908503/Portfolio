"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300"
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      {open && (
        <div className="absolute left-0 top-14 z-40 w-full border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">
          <nav className="flex flex-col gap-2 px-6 py-3 text-sm text-zinc-300">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-1",
                    isActive && "text-zinc-50 font-medium"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
