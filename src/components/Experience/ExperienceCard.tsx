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

      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-content">
          Experiences
        </h1>
        <div className="signal-rule mt-4" aria-hidden="true" />
      </div>

      {/* Filter row */}
      {allSkills.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-subtle flex-shrink-0">
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
                    ? `${colors.bg} ${colors.text} border border-transparent font-medium`
                    : "border border-line text-subtle hover:text-content hover:border-line-strong"
                }`}
              >
                {skill}
              </button>
            );
          })}
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className="px-2.5 py-0.5 text-[14px] rounded-full text-subtle hover:text-content transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[9px] top-3 bottom-3 w-px bg-line" />
        <div className="flex flex-col gap-6">
          {displayExperiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-5 group">
              <div className="flex-shrink-0 w-[18px] flex justify-center pt-[3px] relative z-10">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-accent bg-surface transition-transform duration-200 group-hover:scale-[1.5]" />
              </div>
              <div className="flex-1 min-w-0 rounded-xl px-3 py-2 -mx-3 -my-2 transition-colors duration-200 group-hover:bg-surface">
                <ExperienceItem {...exp} selectedSkills={selectedSkills} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
