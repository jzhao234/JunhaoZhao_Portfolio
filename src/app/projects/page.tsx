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
    }
  ]

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allSkills = Array.from(
    new Set(
      projects.flatMap(exp => (exp.skills || []).filter(s => s && s.trim() !== ""))
    )
  ).sort();

  function toggleSkill(skill: string) {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  }
  const displayOrder = [...projects].sort((a, b) => {
    const aMatches = (a.skills || []).filter((s) => selectedSkills.includes(s)).length;
    const bMatches = (b.skills || []).filter((s) => selectedSkills.includes(s)).length;
    return bMatches - aMatches;
  });

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-[95vw] mx-auto mt-5 p-5 border-2 border-[#1E90FF]/20 rounded-lg bg-white text-black dark:bg-[#151516] dark:text-white flex flex-col justify-center">
      <h1 className="text-2xl mb-3 font-bold"> Projects </h1>

      <button onClick={toggleMenu} className="md:hidden max-w-fit flex items-center p-2 rounded hover:bg-[#1E90FF]/10">
        {isOpen ? (
          <Image
            src="/icons/closeButton.svg"
            alt="Close menu"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/icons/hamburgerMenu.svg"
            alt="Open menu"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        )}
        <p className="ml-3 font-semibold"> Sort Projects </p> 
      </button>

      <div className="hidden md:flex flex-wrap mt-3 gap-3 mb-6">
        {allSkills.map(skill => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`px-3 py-1 rounded-lg border-2 
              ${selectedSkills.includes(skill)
                ? "bg-[#1E90FF] text-white border-[#1E90FF] font-bold"
                : "bg-[1E90FF] dark:bg-[#1E1E1E] border-[#1E90FF]/20 dark:border-[#1E90FF]/20"}`}
          >
            {skill}
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="top-16 left-0 w-full bg-white dark:bg-[#151516] flex flex-col items-center space-y-4 py-6 md:hidden">
          <div className="flex flex-wrap gap-3 mb-6">
            {allSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-lg border-2 
                  ${selectedSkills.includes(skill)
                    ? "bg-[#1E90FF] text-white border-[#1E90FF] font-bold"
                    : "bg-[1E90FF] dark:bg-[#1E1E1E] border-[#1E90FF]/20 dark:border-[#1E90FF]/20"}`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {displayOrder.map((project) => (
          <ProjectItem key={project.id} {...project} selectedSkills={selectedSkills} />
        ))}
      </div>
    </div>
  );
}
