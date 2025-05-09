"use client";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className = "flex sticky top-0 border-b-2 border-[#1E90FF]/20 text-black bg-white dark:text-white dark:bg-[#0f0f10] py-5 px-10 w-full pt-7">

        <div className = "flex justify-start ml-10 w-1/4">
          <div className = "hover:text-[#1E90FF]">
            <Link href = "/" className = "text-2xl font-medium"> Junhao Zhao </Link>
          </div>
        </div>

        <div className = "flex justify-end space-x-25">
            <Link href="/" className="hover:text-[#1E90FF]"> Home </Link>
            <Link href="/projects" className="hover:text-[#1E90FF]"> Projects </Link>
            <Link href="/experiences" className="hover:text-[#1E90FF]"> Experiences </Link>
        </div>

      </nav>
    );
}