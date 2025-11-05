"use client";
import { ReactNode } from "react";

type TechnologyProps = {
    logo: ReactNode;
    name: string;
    version: string; 
    // icon: 
}

export default function Technology({logo, name, version}: TechnologyProps){
    return(
        <div className = "m-2 p-2 text-black bg-white dark:text-white dark:bg-[#131213] rounded-xl shadow-xs shadow-[#1E90FF]/25 flex justify-between items-center space-x-8">
            <div className = "flex items-center space-x-2 px-1">
                <div>
                    {logo}
                </div>
                <div>
                    <p> {name} </p>
                    <p className = "text-black dark:text-gray-300 text-[0.6rem]"> {version} </p>
                </div>
            </div>
            <div>
                {/* {icon} */}
            </div>
        </div>
    );
}