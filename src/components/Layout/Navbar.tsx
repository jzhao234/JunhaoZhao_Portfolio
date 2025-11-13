"use client";
import Link from "next/link";
import React from "react";

import DarkModeToggle from "../Utilities/DarkModeToggle";

const Navbar: React.FC = () => {
    return(
      <nav className = "flex sticky top-0 text-black bg-white dark:text-white dark:bg-[#151516] px-10 w-full py-3 justify-left">
        <div className = "flex justify-center w-full">
            <Link href="/" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10"> Home </Link>
            <Link href="/projects" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10"> Projects </Link>
            <Link href="/experiences" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1 mx-2 sm:mx-10"> Experiences </Link>
            <DarkModeToggle/>
        </div>
      </nav>
    );
}

export default Navbar;
