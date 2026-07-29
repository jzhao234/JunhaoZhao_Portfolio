"use client";

import Link from "next/link";
import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";
import highlightSkillsInText from "../Utilities/HighlightSkillsInText";

type ExperienceItemProps = {
  title: string;
  org?: string;
  location: string;
  date: string;
  bullets: string[];
  skills?: string[];
  link?: string;
  selectedSkills?: string[];
}

export default function ExperienceItem({
  title, org, location, date, bullets, skills, link, selectedSkills,
}: ExperienceItemProps) {

  const matchCount = (skills || []).filter((s) => selectedSkills?.includes(s)).length;
  const isDimmed = selectedSkills && selectedSkills.length > 0 && matchCount === 0;

  function skillBubbles() {
    if (!skills || skills.length === 0) return null;
    const combined = skills.map((skill) => ({
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
        <h3 className="font-display font-bold text-[17px] text-content">{title}</h3>
        <span className="font-mono text-[12px] text-subtle flex-shrink-0 whitespace-nowrap tracking-tight">{date}</span>
      </div>
      {org && <p className="text-[15px] text-subtle mt-0.5">{org}</p>}
      <p className="text-[14px] text-subtle mt-0.5">{location}</p>
      {link && (
        <Link href={link} className="inline-flex items-center gap-1 text-[14px] text-accent hover:underline mt-1">
          View project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      )}
      <ul className="mt-2 space-y-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-[15px] text-muted leading-relaxed flex gap-2.5 items-start">
            <span className="flex-shrink-0 mt-[10px]">
              <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor" className="text-subtle" aria-hidden="true">
                <circle cx="2" cy="2" r="2" />
              </svg>
            </span>
            <span>{highlightSkillsInText(bullet)}</span>
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
