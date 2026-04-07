"use client";

import { ReactNode } from "react";
import Link from "next/link";

import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";

type ExperienceItemProps = {
  logo: ReactNode;
  title: string;
  location: string;
  date: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  skills?: string[];
  sections?: string[];
  link?: string;
  selectedSkills?: string[];
}

export default function ExperienceItem({
  title, location, date,
  description1, description2, description3, description4,
  skills, sections, link, selectedSkills,
}: ExperienceItemProps) {

  const matchCount = (skills || []).filter((s) => selectedSkills?.includes(s)).length;
  const isDimmed = selectedSkills && selectedSkills.length > 0 && matchCount === 0;

  function skillBubbles() {
    if (!skills || skills.length === 0 || !sections) return null;
    const combined = skills.map((skill, i) => ({
      skill,
      isHighlighted: selectedSkills?.includes(skill),
    }));
    const sorted =
      selectedSkills && selectedSkills.length > 0
        ? combined.sort((a, b) => {
            if (a.isHighlighted && !b.isHighlighted) return -1;
            if (!a.isHighlighted && b.isHighlighted) return 1;
            return a.skill.localeCompare(b.skill);
          })
        : combined.sort((a, b) => a.skill.localeCompare(b.skill));

    return sorted.map(({ skill, isHighlighted }, i) => {
      const category = skillCategory(skill);
      const colors = SkillCategoryColor(category);
      return (
        <span
          key={i}
          className={`px-2.5 py-0.5 text-[14px] rounded-full transition-colors ${colors.bg} ${colors.text} ${
            isHighlighted ? "ring-1 ring-current ring-offset-1 dark:ring-offset-transparent font-medium" : ""
          }`}
        >
          {skill}
        </span>
      );
    });
  }

  return (
    <div className={`transition-opacity ${isDimmed ? "opacity-40" : "opacity-100"}`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-[16px]">{title}</h3>
        <span className="text-[14px] text-gray-400 dark:text-gray-500 flex-shrink-0 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-[14px] text-gray-500 dark:text-gray-500 mt-0.5">{location}</p>
      {link && (
        <Link href={link} className="text-[14px] text-[#2196F3] hover:underline mt-1 inline-block">
          View project →
        </Link>
      )}
      <ul className="mt-2 space-y-1">
        {[description1, description2, description3, description4]
          .filter(Boolean)
          .map((desc, i) => (
            <li key={i} className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
              <span className="text-gray-400 flex-shrink-0 mt-0.5">–</span>
              <span>{desc}</span>
            </li>
          ))}
      </ul>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {skillBubbles()}
        </div>
      )}
    </div>
  );
}
