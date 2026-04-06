"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../Data/Projects";
import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";

const projectDescriptions: Record<string, string> = {
  DrugSynergy:
    "Full-stack research platform for analyzing drug synergy in cancer treatment. A Python/FastAPI backend processes uploaded dose-response datasets and computes synergy scores; a Next.js frontend visualizes results with interactive D3.js and Plotly charts.",
  Baketsu:
    "Cloud file storage platform with JWT authentication, bcrypt password hashing, AWS S3 integration, and a SQLite database tracking per-user file metadata and folder structure.",
  JunhaoPortfolio:
    "This portfolio — built with Next.js, TypeScript, and Tailwind CSS. Designed for clarity and recruiter readability. Deployed on Vercel.",
};

const displayOrder = ["DrugSynergy", "Baketsu", "JunhaoPortfolio"];

export default function ProjectCard() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const baseProjects = displayOrder
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is (typeof projects)[number] => p !== undefined);

  const allSkills = Array.from(
    new Set(baseProjects.flatMap((p) => p.skills))
  ).sort();

  function toggleSkill(skill: string) {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  const displayProjects =
    selectedSkills.length === 0
      ? baseProjects
      : [...baseProjects].sort((a, b) => {
          const aMatches = a.skills.filter((s) => selectedSkills.includes(s)).length;
          const bMatches = b.skills.filter((s) => selectedSkills.includes(s)).length;
          return bMatches - aMatches;
        });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Section heading */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Projects
        </h1>
        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
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

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayProjects.map((project) => {
          const matchCount = project.skills.filter((s) =>
            selectedSkills.includes(s)
          ).length;
          const isDimmed = selectedSkills.length > 0 && matchCount === 0;

          return (
            <div
              key={project.id}
              className={`relative flex flex-col border border-gray-200 dark:border-white/10 border-t-2 border-t-[#2196F3] rounded-xl overflow-hidden transition-opacity ${
                isDimmed ? "opacity-40" : "opacity-100"
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0"
                aria-label={`View ${project.name} details`}
              />
              {project.images?.[0] && (
                <div className="bg-gray-50 dark:bg-white/5 p-4">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    width={500}
                    height={280}
                    className="rounded w-full object-cover"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold">{project.name}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {projectDescriptions[project.id]}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.slice(0, 5).map((s) => (
                    <ColoredSkillTag
                      key={s}
                      skill={s}
                      isHighlighted={selectedSkills.includes(s)}
                    />
                  ))}
                </div>
                {(project.githubLink || project.demoLink) && (
                  <div className="relative z-10 flex gap-2 mt-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-[#2196F3]/10 text-[#2196F3] hover:bg-[#2196F3]/20 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ColoredSkillTag({
  skill,
  isHighlighted,
}: {
  skill: string;
  isHighlighted: boolean;
}) {
  const category = skillCategory(skill);
  const colors = SkillCategoryColor(category);
  return (
    <span
      className={`px-2.5 py-0.5 text-xs rounded-full transition-colors ${colors.bg} ${colors.text} ${
        isHighlighted ? "ring-1 ring-current ring-offset-1 dark:ring-offset-transparent font-medium" : ""
      }`}
    >
      {skill}
    </span>
  );
}
