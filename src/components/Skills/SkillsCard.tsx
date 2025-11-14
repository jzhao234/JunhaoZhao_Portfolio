"use client";
import Image from "next/image";

import SkillsItem from "./SkillsItem";

export default function Skills(){
    return(
        <div className = "max-w-100 sm:h-150 m-10 p-3 border-2 border-[#1E90FF]/20 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516] flex-col">
            <h1 className="text-2xl font-bold my-2"> Skills </h1>
            {/* Languages */}
            <h2 className="text-xl font-semibold mb-2"> Languages </h2>
            <SkillsItem
                name = "Python"
                section = "Language"
            />
            <SkillsItem
                name = "C"
                section = "Language"
            />
            <SkillsItem
                name = "Java"
                section = "Language"
            />
            <SkillsItem
                name = "JavaScript"
                section = "Language"
            />
            <SkillsItem
                name = "TypeScript"
                section = "Language"
            />
            <SkillsItem
                name = "HTML5"
                section = "Language"
            />
            <h2 className="text-xl font-semibold mb-2"> Frameworks </h2>
            {/* Frameworks */}
            <h3 className="text-l font-medium mb-2 ml-2"> Frontend </h3>
            {/* Frontends */}
            <SkillsItem
                name = "React"
                section = "Frontend"
            />
            <SkillsItem
                name = "Next.js"
                section = "Frontend"
            />
            <SkillsItem
                name = "Tailwind CSS"
                section = "Frontend"
            />
            <SkillsItem
                name = "D3.js"
                section = "Frontend"
            />
            <SkillsItem
                name = "Plotly"
                section = "Frontend"
            />
            <h3 className="text-l font-medium mb-2 ml-2"> Backend </h3>
            {/* Backends */}
            <SkillsItem
                name = "FastAPI"
                section = "Backend"
            />
            <SkillsItem
                name = "Flask"
                section = "Backend"
            />
            {/* Databases & Cloud */}
            <h2 className="text-xl font-semibold mb-2"> Database & Cloud </h2>
            <SkillsItem
                name = "PostgreSQL"
                section = "Database-Cloud"
            />
            <SkillsItem
                name = "AWS"
                section = "Database-Cloud"
            />
        </div>
    );
}