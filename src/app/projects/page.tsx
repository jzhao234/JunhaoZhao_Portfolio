"use client";
import Image from "next/image";

import ProjectItem from "../../components/Project/ProjectItem";

export default function ProjectsPage() {

  return (
    <div className="max-w-[95vw] mx-auto mt-5 p-5 border-2 border-[#1E90FF]/20 rounded-lg bg-white text-black dark:bg-[#151516] dark:text-white flex flex-col justify-center">
      <h1 className="text-2xl mb-3 font-bold"> Projects </h1>
      <div>
        {/* Experience */}
        <ProjectItem
        id = "synergy"
        image={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
        name="Drug Synergy Finder"
        description1={<>- Built a full-stack web application using <span className="text-green-500 font-semibold">Next.js</span>, <span className="text-green-500 font-semibold">Tailwind CSS</span>, and <span className="text-purple-500 font-semibold">FastAPI</span> to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research</>}
        description2={"- Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team"}
        description3={"- Provided technical insights in journal talks and weekly lab meetings to improve research outcomes"}
        skills={["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"]}
        sections={["Frontend", "Language", "Language", "Frontend", "Backend"]}

        />
        
      </div>
    </div>
  );
}
