"use client";

import ProjectItem from "../Project/ProjectItem";
import Image from "next/image";

export default function Highlights(){
    return(
        <div className = "flex flex-col m-10 p-3 border-2 border-[#1E90FF]/20 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <h1 className="text-2xl font-bold my-2 ml-4"> Highlights </h1>
            <div className="flex justify-center"> 
                <ProjectItem
                    id = "synergy"
                    image={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
                    name="Drug Synergy Finder"
                    description1={<>- Built a full-stack web application using <span className="text-green-500 font-semibold">Next.js</span>, <span className="text-green-500 font-semibold">Tailwind CSS</span>, and <span className="text-purple-500 font-semibold">FastAPI</span> to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research</>}
                    description2={"- Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team"}
                    description3={"- Provided technical insights in journal talks and weekly lab meetings to improve research outcomes"}
                    skills={["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"]}
                    sections={["Frontend", "Language", "Language", "Frontend", "Backend"]}
                    githubLink={"https://github.com/jzhao234/JunhaoZhao_Portfolio"}
                    demoLink={"https://junhao-zhao-portfolio.vercel.app/experiences"}
                />
            </div>
            
        </div>
    ); 
}