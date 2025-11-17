"use client";
import Image from "next/image";
import { useState } from "react";

import ProjectItem from "../../components/Project/ProjectItem";

export default function ProjectsPage() {
  const projects = [
    {
      id: "synergy",
      image: (<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />),
      name: "Drug Synergy Finder",
      description1: (<>- Built a full-stack web application using <span className="text-green-500 font-semibold">Next.js</span>, <span className="text-green-500 font-semibold">Tailwind CSS</span>, and <span className="text-purple-500 font-semibold">FastAPI</span> to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research</>),
      description2: "- Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team",
      description3: "- Provided technical insights in journal talks and weekly lab meetings to improve research outcomes",
      skills: ["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"],
      sections: ["Frontend", "Language", "Language", "Frontend", "Backend"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://junhao-zhao-portfolio.vercel.app/experiences",
    },
    {
      id: "practice1", 
      name: "practice1", 
      skills: ["Next.js", "Python", "practice2"], 
      sections: ["Frontend", "Language", "Frontend"]
    },
    {
      id: "practice2",
      name: "practice2",
      skills: ["practice2", "practice3"],
      sections: ["Frontend", "Frontend"]
    }
  ]

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  function toggleSkill(skill: string) {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  }
  const displayOrder = [...projects].sort((a, b) => {
    const aMatches = a.skills.filter((s) => selectedSkills.includes(s)).length;
    const bMatches = b.skills.filter((s) => selectedSkills.includes(s)).length;
    return bMatches - aMatches;
  });

  return (
    <div className="max-w-[95vw] mx-auto mt-5 p-5 border-2 border-[#1E90FF]/20 rounded-lg bg-white text-black dark:bg-[#151516] dark:text-white flex flex-col justify-center">
      <h1 className="text-2xl mb-3 font-bold"> Projects </h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {["Next.js", "FastAPI", "Python", "Plotly", "practice2", "practice3"].map(skill => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`px-3 py-1 rounded-lg border-2 
              ${selectedSkills.includes(skill)
                ? "bg-[#1E90FF] text-white border-[#1E90FF]"
                : "bg-gray-100 dark:bg-[#1E1E1E] border-gray-300 dark:border-gray-700"}`}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {displayOrder.map((project) => (
          <ProjectItem key={project.id} {...project} selectedSkills={selectedSkills} />
        ))}
      </div>
    </div>
  );
}
