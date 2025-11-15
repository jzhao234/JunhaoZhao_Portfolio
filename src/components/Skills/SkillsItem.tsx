"use client";
import { ReactNode } from "react";

type SkillsItemProps = {
    logo?: ReactNode;
    name: string;
    section: string;
    version?: string; 
}

export default function SkillsItem({logo, name, section, version}: SkillsItemProps){
    const colors = {
        Language: { text: "text-blue-500", bg: "bg-blue-500/20" },
        Frontend: { text: "text-green-500", bg: "bg-green-500/20" },
        Backend: { text: "text-purple-500", bg: "bg-purple-500/20" },
        "Database-Cloud": { text: "text-red-500", bg: "bg-red-500/20" },
        Practice: { text: "text-yellow-500", bg: "bg-yellow-500/20" },
    };
    return(
        <div className={`
            flex justify-between items-center inline-block p-1 px-3 my-2 mx-2
            font-semibold rounded-2xl 
            ${colors[section].text} ${colors[section].bg}`}
        >
            <div>
                {logo}
            </div>
            <div>
                <p> {name} </p>
            </div>
        </div>
    );
}