"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KelcisLockup } from "@/components/brand/KelcisLockup";
import { nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-oat bg-cream">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-12">
        <KelcisLockup />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`eyebrow transition-colors hover:text-bronze ${
                    pathname === item.href ? "text-bronze" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="eyebrow flex items-center gap-2 lg:hidden"
        >
          <span aria-hidden="true">{open ? "×" : "+"}</span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="site-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-ink text-cream transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="px-6 py-12">
          <ul className="flex flex-col divide-y divide-cream/10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-5 font-serif text-3xl font-light hover:text-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
