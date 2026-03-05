"use client";

import Image from "next/image";
import { useState } from "react";

import ProjectItem from "../../components/Project/ProjectItem";
import { projects } from "../Data/Projects";

export default function ProjectCard() {

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

  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleMenuMobile = () => setIsOpenMobile(!isOpenMobile)

  return (
    <div className="max-w-[95vw] mx-auto mt-5 p-5 flex flex-col justify-center">
      <h1 className="text-2xl mb-3 font-bold"> Projects </h1>

      {/* Display Sorting Options Mobile */}
      <div className="flex flex-wrap gap-3 mb-6 mt-3">
        <button onClick={toggleMenuMobile} className="md:hidden flex items-center">
          {isOpenMobile ? (
            <Image
              src="/icons/closeButton.svg"
              alt="Close menu"
              width={28}
              height={28}
              className="cursor-pointer hover:bg-[#1E90FF]/10"
            />
          ) : (
            <Image
              src="/icons/hamburgerMenu.svg"
              alt="Open menu"
              width={28}
              height={28}
              className="cursor-pointer hover:bg-[#1E90FF]/10"
            />
          )}
          <p className="ml-3 font-semibold"> Sort Projects </p>
        </button>
        {isOpenMobile && (
          <div className="flex flex-wrap bg-white dark:bg-[#151516] gap-3 md:hidden">
            {allSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-2xl border-2
                  ${selectedSkills.includes(skill)
                    ? "bg-[#1E90FF] text-white border-[#1E90FF] font-bold"
                    : "bg-[1E90FF] dark:bg-[#1E1E1E] border-[#1E90FF]/20 dark:border-[#1E90FF]/20"}`}
              >
                {skill}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Display Sorting Desktop */}
      <div className="hidden md:flex flex-wrap gap-3 mb-6">
        <button onClick={toggleMenu} className="flex items-center"> 
          {isOpen ? (
            <Image
              src="/icons/closeButton.svg"
              alt="Close menu"
              width={28}
              height={28}
              className="cursor-pointer hover:bg-[#1E90FF]/10"
            />
          ) : (
            <Image
              src="/icons/hamburgerMenu.svg"
              alt="Open menu"
              width={28}
              height={28}
              className="cursor-pointer hover:bg-[#1E90FF]/10"
            />
          )}
          <p className="ml-3 font-semibold"> Sort Projects </p>
        </button>
        {isOpen && (
          <div className="flex flex-wrap bg-white dark:bg-[#151516] gap-3">
            {allSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-2xl border-2 
                  ${selectedSkills.includes(skill)
                    ? "bg-[#1E90FF] text-white border-[#1E90FF] font-bold"
                    : "bg-[1E90FF] dark:bg-[#1E1E1E] border-[#1E90FF]/20 dark:border-[#1E90FF]/20"}`}
              >
                {skill}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Display Projects */}
      <div className="flex flex-wrap justify-center gap-6">
        {displayOrder.map((project) => (
          <ProjectItem key={project.id} {...project} selectedSkills={selectedSkills} />
        ))}
      </div>
    </div>
  );
}