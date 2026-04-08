"use client";

import { useState } from "react";
import { experiences } from "../../data/experiences";
import ExperienceItem from "../../components/Experience/ExperienceItem";
import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";

export default function ExperienceCard() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allSkills = Array.from(
    new Set(experiences.flatMap((exp) => exp.skills ?? []))
  ).sort();

  function toggleSkill(skill: string) {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  const displayExperiences = [...experiences].sort((a, b) => {
    const aMatches = (a.skills ?? []).filter((s) => selectedSkills.includes(s)).length;
    const bMatches = (b.skills ?? []).filter((s) => selectedSkills.includes(s)).length;
    return bMatches - aMatches;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Section heading */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-[18px] font-semibold text-gray-900 dark:text-white whitespace-nowrap">
          Experiences
        </h1>
        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
      </div>

      {/* Filter row */}
      {allSkills.length > 0 && (
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
      )}

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gray-200 dark:bg-white/10" />
        <div className="flex flex-col gap-6">
          {displayExperiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-5 group">
              <div className="flex-shrink-0 w-[18px] flex justify-center pt-[3px] relative z-10">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#2196F3] bg-white dark:bg-[#151516] transition-transform duration-200 group-hover:scale-[1.5]" />
              </div>
              <div className="flex-1 min-w-0 rounded-xl px-3 py-2 -mx-3 -my-2 transition-colors duration-200 group-hover:bg-gray-50 dark:group-hover:bg-white/[0.03]">
                <ExperienceItem {...exp} selectedSkills={selectedSkills} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
