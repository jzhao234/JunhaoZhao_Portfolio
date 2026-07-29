"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import DarkModeToggle from "../Utilities/DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experiences", label: "Experiences" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 60) return true;
        if (prev && y < 20) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoClass = `rounded-full border border-line-strong flex items-center justify-center font-display font-bold text-content hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer ${
    scrolled ? "w-10 h-10 text-[15px]" : "w-12 h-12 text-[17px]"
  }`;

  const linkClass = (href: string) =>
    `text-[14px] font-medium transition-colors cursor-pointer ${
      pathname === href ? "text-accent" : "text-muted hover:text-content"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-3">

        {/* Left: logo + links */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/" className={`${logoClass} mr-1`} aria-label="Home">
            JZ
          </Link>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Logo only on mobile */}
        <Link href="/" className={`md:hidden ${logoClass}`} aria-label="Home">
          JZ
        </Link>

        {/* Right: theme toggle (desktop) */}
        <div className="hidden md:flex items-center">
          <DarkModeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-muted hover:text-accent hover:bg-surface transition-colors cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Signature motif: the navbar's lower edge */}
      <div className="signal-rule" aria-hidden="true" />

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-canvas border-b border-line">
          <div className="max-w-5xl mx-auto px-6 py-2 flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`min-h-[44px] flex items-center ${linkClass(href)}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <div className="min-h-[44px] flex items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
