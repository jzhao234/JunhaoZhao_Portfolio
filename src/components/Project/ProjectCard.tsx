"use client";

import Image from "next/image";
import { useState } from "react";

import ProjectItem from "../../components/Project/ProjectItem";

export default function ProjectCard() {
  const projects = [
    {
      id: "JunhaoPortfolio",
      image: (<Image src = "/projects/Junhao_Portfolio.png" alt = "Junhao's Portfolio" width={300} height={100} />),
      name: "Junhao's Portfolio",
      description1: "- Built a personal portfolio using Next.js, TypeScript, and Tailwind CSS",
      description2: "- Deployed project using vercel",
      description3: "- Learned to adapt application to different display sizes",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://junhao-zhao-portfolio.vercel.app",
    },
    {
      id: "DrugSynergyy", 
      image: (<Image src = "/projects/Drug_Synergy_Finder.png" alt = "Drug Synergy Finder Photo" width={300} height={100}/>),
      name: "Drug Synergy Finder",
      description1: "- Built a full-stack web application to calculate and visualize drug synergies for cancer treatment research",
      description2: "- Used Next.js, TypeScript and Tailwind CSS to build the frontend and FastAPI and Python for the backend",
      description4: "- Visualize results using Plotly and D3.js for researchers to quickly analyze results with a comprehensive SAPE score for a subjective overview",
      skills: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"], 
    },
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
    <div className="card max-w-[95vw] mx-auto mt-5 p-5 flex flex-col justify-center">
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