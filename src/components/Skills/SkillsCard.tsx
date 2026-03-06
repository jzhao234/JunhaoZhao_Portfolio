"use client";
import Image from "next/image";

import SkillsItem from "./SkillsItem";

export default function Skills(){
    return(
        <div className = "card h-auto">
            <h2 className="text-2xl font-bold my-2"> Skills </h2>
            {/* Languages */}
            <h3 className="text-xl font-semibold mb-2"> Languages </h3>
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
            <h3 className="text-xl font-semibold mb-2"> Frameworks </h3>
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
            <h3 className="text-xl font-semibold mb-2"> Database & Cloud </h3>
            <SkillsItem
                name = "SQL"
            />
            <SkillsItem
                name = "SQLite"
            />
            <SkillsItem
                name = "AWS"
            />
            {/* Others */}
            <h3 className="text-xl font-semibold mb-2"> Others </h3>
            <SkillsItem
                name = "Bcrypt"
            />
        </div>
    );
}