"use client";
import Image from "next/image";
import Technology from "./Technology";

export default function Skills({logo, name, version}){
    return(
        <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516] flex-col">
            {/* Description */}
            <div>
                <h2 className = "font-medium text-lg"> Skills </h2>
            </div>

            <Technology
                logo = {<Image src = "/logo/javaLogo.svg" alt = "Java" width={40} height={40}/>}
                name = "Java"
                version = "Version Java SE 24 (JDK 24)"
            />
            <Technology
                logo = {<Image src = "/logo/cLogo.svg" alt = "Java" width={40} height={40}/>}
                name = "C"
                version = "Version C23"
            />
            <Technology
                logo = {<Image src = "/logo/tailwindLogo.svg" alt = "Tailwind CSS" width={40} height={40}/>}
                name = "Tailwind CSS"
                version = "Version 4.1"
            />
            <Technology
                logo = {<Image src = "/logo/htmlLogo.svg" alt = "HTMl" width={40} height={40}/>}
                name = "HTML"
                version = "Version HTML5"
            />
        </div>
    );
}