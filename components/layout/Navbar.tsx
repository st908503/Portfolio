"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/constants/navigation";
import { cn } from '@/lib/utils/cn'

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition hover:text-zinc-50",
              isActive && "text-zinc-50"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
