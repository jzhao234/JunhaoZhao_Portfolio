"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import DarkModeToggle from "../Utilities/DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#151516] text-black dark:text-white border-b border-gray-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-3">

        <Link
          href="/"
          className="text-xl font-bold hover:text-[#2196F3] transition-colors"
        >
          Junhao
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#2196F3] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-[#2196F3] transition-colors">
            Projects
          </Link>
          <Link href="/experiences" className="text-sm font-medium hover:text-[#2196F3] transition-colors">
            Experiences
          </Link>
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
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#2196F3] transition-colors">
              Home
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#2196F3] transition-colors">
              Projects
            </Link>
            <Link href="/experiences" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#2196F3] transition-colors">
              Experiences
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
