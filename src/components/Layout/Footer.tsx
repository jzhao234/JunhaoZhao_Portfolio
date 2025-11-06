"use client";

export default function Footer(){
    return(
        <footer className="bg-white dark:bg-[#151516]">
            <p className="text-sm pl-3 text-black dark:text-white">
                &copy; {new Date().getFullYear()} Junhao Zhao. All rights reserved.
            </p>
        </footer>
    );
}