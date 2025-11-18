"use client";
import Image from "next/image";

import SkillsItem from "./SkillsItem";

export default function Skills(){
    return(
        <div className = "card h-auto m-3 sm:m-10 p-3">
            <h1 className="text-2xl font-bold my-2"> Skills </h1>
            {/* Languages */}
            <h2 className="text-xl font-semibold mb-2"> Languages </h2>
            <SkillsItem
                name = "Python"
            />
            <SkillsItem
                name = "C"            />
            <SkillsItem
                name = "Java"
            />
            <SkillsItem
                name = "JavaScript"
            />
            <SkillsItem
                name = "TypeScript"
            />
            <SkillsItem
                name = "HTML5"
            />
            <h2 className="text-xl font-semibold mb-2"> Frameworks </h2>
            {/* Frameworks */}
            <h3 className="text-l font-medium mb-2 ml-2"> Frontend </h3>
            {/* Frontends */}
            <SkillsItem
                name = "React"
            />
            <SkillsItem
                name = "Next.js"
            />
            <SkillsItem
                name = "Tailwind CSS"
            />
            <SkillsItem
                name = "D3.js"
            />
            <SkillsItem
                name = "Plotly"
            />
            <h3 className="text-l font-medium mb-2 ml-2"> Backend </h3>
            {/* Backends */}
            <SkillsItem
                name = "FastAPI"
            />
            <SkillsItem
                name = "Flask"
            />
            {/* Databases & Cloud */}
            <h2 className="text-xl font-semibold mb-2"> Database & Cloud </h2>
            <SkillsItem
                name = "PostgreSQL"
            />
            <SkillsItem
                name = "AWS"
            />
        </div>
    );
}