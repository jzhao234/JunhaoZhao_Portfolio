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
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-[18px] font-semibold text-gray-900 dark:text-white whitespace-nowrap">
          Projects
        </h1>
        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-[14px] text-gray-400 dark:text-gray-500 flex-shrink-0">
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
              className={`px-2.5 py-0.5 text-[14px] rounded-full transition-colors cursor-pointer ${
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
            className="px-2.5 py-0.5 text-[14px] rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
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
              className={`group relative flex flex-col border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#2196F3]/50 dark:hover:border-[#2196F3]/50 hover:shadow-lg dark:hover:shadow-[0_4px_24px_rgba(33,150,243,0.08)] ${
                isDimmed ? "opacity-40" : "opacity-100"
              }`}
            >
              {/* Stretched link — z-10 covers image area too */}
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${project.name} details`}
              />

              {project.images?.[0] && (
                <div className="bg-gray-50 dark:bg-white/5 p-4 flex-shrink-0">
                  <div className="relative h-40 rounded overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-[18px] font-bold">{project.name}</h2>

                {/* Description — clamped to 5 lines, ... glows on hover */}
                <ClampedDescription text={projectDescriptions[project.id] ?? ""} />

                {/* Skill pills — immediately after description, clamped to 2 rows */}
                <ClampedPills
                  skills={project.skills}
                  cardSkills={project.cardSkills}
                  selectedSkills={selectedSkills}
                />

                {/* Buttons — pushed to bottom */}
                {(project.githubLink || project.demoLink) && (
                  <div className="relative z-20 flex gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-medium rounded-md bg-[#2196F3] text-white hover:bg-[#1976D2] transition-colors"
                      >
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-medium rounded-md border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
                      >
                        <GitHubIcon />
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

// Pill height: text-[14px] (~20px line-height) + py-0.5 (4px padding) = 24px
// gap-1.5 = 6px between rows → 2 rows = 54px + a few px buffer = 58px
const TWO_ROW_HEIGHT = 58;

function ClampedPills({
  skills,
  cardSkills,
  selectedSkills,
}: {
  skills: string[];
  cardSkills?: string[];
  selectedSkills: string[];
}) {
  // cardSkills controls what's displayed; skills always drives filtering
  const pillsToRender = cardSkills ?? skills;

  return (
    <div
      className="flex flex-wrap items-start gap-1.5 mt-3"
      style={{ height: TWO_ROW_HEIGHT, overflow: 'clip' }}
    >
      {pillsToRender.map((skill, i) => {
        const category = skillCategory(skill);
        const colors = SkillCategoryColor(category);
        const isHighlighted = selectedSkills.includes(skill);
        return (
          <span
            key={i}
            className={`px-2.5 py-0.5 text-[14px] rounded-full transition-colors ${colors.bg} ${colors.text} ${
              isHighlighted
                ? "ring-1 ring-current ring-offset-1 dark:ring-offset-transparent font-medium"
                : ""
            }`}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}

// text-[16px] leading-relaxed = 16px * 1.625 = 26px per line; 5 lines = 130px
function ClampedDescription({ text }: { text: string }) {
  return (
    <div className="mt-2 overflow-hidden" style={{ height: 130 }}>
      <p className="text-[16px] text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 leading-relaxed line-clamp-5 transition-colors">
        {text}
      </p>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
