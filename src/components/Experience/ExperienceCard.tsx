"use client";

import { useState } from "react";
import Image from "next/image";

import ExperienceItem from "../../components/Experience/ExperienceItem";
import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";

export default function ExperienceCard() {
  const experiences = [
    {
      logo: (<Image src="/logo/Temple-Logo-T-Header.svg" alt="Temple" width={40} height={40} />),
      title: "Undergraduate Researcher at Fox Chase Cancer Center",
      location: "Philadelphia, PA",
      date: "May 2025 – Present",
      description1: "Built a full-stack web application using Next.js, Tailwind CSS, and FastAPI to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research.",
      description2: "Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team.",
      description3: "Provided technical insights in journal talks and weekly lab meetings to improve research outcomes.",
      skills: ["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"],
      sections: ["Frontend", "Language", "Language", "Frontend", "Backend"],
      link: "/projects/drug-synergy-finder",
    },
    {
      logo: (<Image src="/logo/Temple-Logo-T-Header.svg" alt="Temple" width={40} height={40} />),
      title: "STEM Leadership Fellow at Temple University",
      location: "Philadelphia, PA",
      date: "Sep 2024 – May 2025",
      description1: "Assisted students in mastering the Jupyter Lab environment and programming in Python.",
      description2: "Hosted office hours, providing tailored support to students and addressing individual learning needs.",
      description3: "Collaborated with faculty to develop and implement effective teaching strategies.",
    },
    {
      logo: (<Image src="/logo/Temple-Logo-T-Header.svg" alt="Temple" width={40} height={40} />),
      title: "Lab Consultant Intern at Temple University",
      location: "Philadelphia, PA",
      date: "Sep 2023 – May 2025",
      description1: "Diagnosed and resolved technical issues, ensuring optimal hardware functionality in the lab.",
      description2: "Provided hands-on assistance, fostering a collaborative and positive work environment.",
      description3: "Collaborated with faculty to develop and refine lab processes and resources.",
    },
    {
      logo: (<Image src="/logo/lavner.png" alt="Lavner" width={40} height={40} />),
      title: "Instructing Intern at Lavner Education",
      location: "Philadelphia, PA",
      date: "Jun 2024 – Aug 2024",
      description1: "Instructed students in a diverse range of STEM subjects including coding, 3D printing, and robotics.",
      description2: "Adapted and customized curriculum to align with various learning speeds and comprehension levels.",
      description3: "Developed and implemented tailored instructional strategies for students with special needs.",
    },
    {
      logo: (<Image src="/logo/PCDC.jpg" alt="PCDC" width={40} height={40} />),
      title: "Intern and Volunteer at PCDC",
      location: "Philadelphia, PA",
      date: "Aug 2018 – Dec 2023",
      description1: "Contributed to preserving the cultural heritage of Chinatown, promoting its rich cultural identity.",
      description2: "Conducted in-depth research and performed data entry tasks to support community-related projects.",
      description3: "Led food distribution efforts during the pandemic, ensuring delivery of thousands of boxes of food.",
    },
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allSkills = Array.from(
    new Set(
      experiences.flatMap((exp) => (exp.skills || []).filter((s) => s && s.trim() !== ""))
    )
  ).sort();

  function toggleSkill(skill: string) {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  const displayOrder = [...experiences].sort((a, b) => {
    const aMatches = (a.skills || []).filter((s) => selectedSkills.includes(s)).length;
    const bMatches = (b.skills || []).filter((s) => selectedSkills.includes(s)).length;
    return bMatches - aMatches;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Section heading */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Experiences
        </h1>
        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
      </div>

      {/* Filter row */}
      {allSkills.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
            Filter:
          </span>
          {allSkills.map((skill) => {
            const category = skillCategory(skill);
            const colors = SkillCategoryColor(category);
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-2.5 py-0.5 text-xs rounded-full transition-colors cursor-pointer ${
                  isSelected
                    ? `${colors.bg} ${colors.text} font-medium`
                    : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/15"
                }`}
              >
                {skill}
              </button>
            );
          })}
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className="px-2.5 py-0.5 text-xs rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gray-200 dark:bg-white/10" />

        <div className="flex flex-col gap-6">
          {displayOrder.map((exp, idx) => (
            <div key={idx} className="relative flex gap-5">
              {/* Dot — aligned to title baseline */}
              <div className="flex-shrink-0 w-[18px] flex justify-center pt-[3px] relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3] ring-2 ring-white dark:ring-[#151516]" />
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <ExperienceItem {...exp} selectedSkills={selectedSkills} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
