"use client";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    return(
      <nav className = "flex sticky top-0 text-black bg-white dark:text-white dark:bg-[#151516] px-10 w-full py-3 justify-left">
      {/* 
        <div className = "flex justify-start ml-10 w-1/4">
          <div className = "hover:text-[#1E90FF]">
            <Link href = "/" className = "text-2xl font-medium"> Junhao Zhao </Link>
          </div>
        </div> 
      */}

        <div className = "flex justify-center space-x-25">
            <Link href="/" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1"> Home </Link>
            <Link href="/projects" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1"> Projects </Link>
            <Link href="/experiences" className="hover:text-[#1E90FF] border-y-2 border-[#1E90FF]/30 px-2 py-1"> Experiences </Link>
        </div>

      </nav>
    );
}

export default Navbar;
