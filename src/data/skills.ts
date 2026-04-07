export type SkillCategory = "Language" | "Frontend" | "Backend" | "DatabaseCloud" | "Others";

export type SkillType = {
  name: string;
  category: SkillCategory;
  importance?: number;
};

export const categoryLabels: Record<SkillCategory, string> = {
  Language:      "Languages",
  Frontend:      "Frontend",
  Backend:       "Backend",
  DatabaseCloud: "Database & Cloud",
  Others:        "Others",
};

export const categoryOrder: SkillCategory[] = ["Language", "Frontend", "Backend", "DatabaseCloud", "Others"];

export const skills: SkillType[] = [
  // Languages
  { name: "Python",      category: "Language", importance: 1 },
  { name: "TypeScript",  category: "Language", importance: 2 },
  { name: "JavaScript",  category: "Language", importance: 3 },
  { name: "Java",        category: "Language", importance: 4 },
  { name: "C",           category: "Language", importance: 5 },
  { name: "HTML5",       category: "Language" },

  // Frontend
  { name: "Next.js",     category: "Frontend", importance: 1 },
  { name: "React",       category: "Frontend", importance: 2 },
  { name: "Tailwind CSS",category: "Frontend", importance: 3 },
  { name: "D3.js",       category: "Frontend" },
  { name: "Plotly",      category: "Frontend" },

  // Backend
  { name: "FastAPI",     category: "Backend", importance: 1 },
  { name: "Flask",       category: "Backend" },

  // Database & Cloud
  { name: "AWS Amazon S3", category: "DatabaseCloud", importance: 1 },
  { name: "SQL",           category: "DatabaseCloud" },
  { name: "SQLite",        category: "DatabaseCloud" },

  // Others
  { name: "Bcrypt",      category: "Others" },
];
