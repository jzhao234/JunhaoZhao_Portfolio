"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import DarkModeToggle from "../Utilities/DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const logoClass = `rounded-full border-2 border-current flex items-center justify-center font-bold hover:text-[#2196F3] hover:border-[#2196F3] transition-all duration-300 ${
    scrolled ? "w-11 h-11 text-[16px]" : "w-14 h-14 text-[18px]"
  }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#151516] text-black dark:text-white border-b border-gray-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-3">

        {/* Left: name + links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={`${logoClass} mr-2`}>
            JZ
          </Link>
          <Link href="/" className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
            Projects
          </Link>
          <Link href="/experiences" className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
            Experiences
          </Link>
        </div>

        {/* Name only on mobile */}
        <Link href="/" className={`md:hidden ${logoClass}`}>
          JZ
        </Link>

        {/* Right: toggle (desktop) */}
        <div className="hidden md:flex items-center">
          <DarkModeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-[#2196F3]/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Image src="/icons/closeButton.svg" alt="Close menu" width={24} height={24} />
          ) : (
            <Image src="/icons/hamburgerMenu.svg" alt="Open menu" width={24} height={24} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
              Home
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
              Projects
            </Link>
            <Link href="/experiences" onClick={() => setIsOpen(false)} className="text-[15px] font-semibold hover:text-[#2196F3] transition-colors">
              Experiences
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
