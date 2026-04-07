import { skills } from "../data/skills";

export default function skillCategory(skill: string) {
  const match = skills.find((s) => s.name.toLowerCase() === skill.toLowerCase());
  return match?.category ?? null;
}
