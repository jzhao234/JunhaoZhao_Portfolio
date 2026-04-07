"use client";

import { skills, categoryLabels, categoryOrder } from "../../data/skills";
import SkillsItem from "./SkillsItem";

function sortedByImportance<T extends { importance?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.importance !== undefined && b.importance !== undefined) return a.importance - b.importance;
    if (a.importance !== undefined) return -1;
    if (b.importance !== undefined) return 1;
    return 0;
  });
}

export default function Skills() {
  return (
    <div className="card h-auto">
      <h2 className="text-2xl font-bold my-2">Skills</h2>
      {categoryOrder.map((category) => {
        const categorySkills = sortedByImportance(skills.filter((s) => s.category === category));
        if (categorySkills.length === 0) return null;
        return (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{categoryLabels[category]}</h3>
            {categorySkills.map((skill) => (
              <SkillsItem key={skill.name} name={skill.name} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
