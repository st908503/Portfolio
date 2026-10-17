"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/constants/navigation";
import { ThemeToggle } from "./ThemeToggle";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header className="site-header" ref={headerRef}>
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="Shashank Tripathi — home" onClick={() => setOpen(false)}>
        <span className="brand-mark">ST</span>
        <span className="brand-name">Shashank Tripathi<span>Frontend & Full Stack Engineer</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link href="/contact" className="header-contact">Contact <ArrowUpRight size={16} /></Link>
        <button ref={menuButton} className="icon-button menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
      {[{ label: "Home", href: "/" }, ...navigation, { label: "Contact", href: "/contact" }].map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<ArrowUpRight size={18} /></Link>)}
    </nav>}
  </header>;
}
