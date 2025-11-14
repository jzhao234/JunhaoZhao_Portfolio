"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import DarkModeToggle from "../Utilities/DarkModeToggle";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return(
    <nav className = "flex items-center sticky top-0 text-black bg-white dark:text-white dark:bg-[#151516] px-10 w-full py-3 justify-between">
      <Link href="/" className="hover:text-[#1E90FF] justify-center text-2xl font-bold my-2 py-1 mx-2 sm:mx-10 font-semibold"> Junhao </Link>
      <div className = "hidden md:flex w-full">
          <Link href="/" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10 font-semibold"> Home </Link>
          <Link href="/projects" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10 font-semibold"> Projects </Link>
          <Link href="/experiences" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10 font-semibold"> Experiences </Link>
          <DarkModeToggle/>
      </div>
      <button onClick={toggleMenu} className="md:hidden p-2 rounded hover:bg-[#1E90FF]/10">
        {isOpen ? (
          <Image
            src="/icons/closeButton.svg"
            alt="Close menu"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/icons/hamburgerMenu.svg"
            alt="Open menu"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        )}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#151516] flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#1E90FF] px-2 py-1 mx-2 sm:mx-10 font-semibold">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-[#1E90FF] px-2 py-1 mx-2 sm:mx-10 font-semibold">Projects</Link>
          <Link href="/experiences" onClick={() => setIsOpen(false)} className="hover:text-[#1E90FF] px-2 py-1 mx-2 sm:mx-10 font-semibold">Experiences</Link>
          <DarkModeToggle/>
        </div>
      )}
    </nav>
  );
}
