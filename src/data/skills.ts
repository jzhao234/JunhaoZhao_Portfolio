export type SkillCategory =
  | "Language"
  | "Backend"
  | "DataVisualization"
  | "DatabaseCloud"
  | "Frontend"
  | "Others";

export type SkillType = {
  name: string;
  category: SkillCategory;
  importance?: number;
};

export const categoryLabels: Record<SkillCategory, string> = {
  Language: "Languages",
  Backend: "Backend",
  DataVisualization: "Data / Visualization",
  DatabaseCloud: "Cloud / Storage",
  Frontend: "Frontend",
  Others: "Others",
};

export const categoryOrder: SkillCategory[] = [
  "Language",
  "Backend",
  "DataVisualization",
  "DatabaseCloud",
  "Frontend",
  "Others",
];

export const skills: SkillType[] = [
  // Languages
  { name: "Go", category: "Language", importance: 1 },
  { name: "TypeScript", category: "Language", importance: 2 },
  { name: "Python", category: "Language", importance: 3 },
  { name: "Java", category: "Language", importance: 4 },
  { name: "C", category: "Language", importance: 5 },
  { name: "SQL", category: "Language", importance: 6 },
  { name: "JavaScript", category: "Language", importance: 7 },
  { name: "HTML5", category: "Language", importance: 8 },

  // Backend
  { name: "FastAPI", category: "Backend", importance: 1 },
  { name: "Flask", category: "Backend", importance: 2 },

  // Data / Visualization
  { name: "SciPy", category: "DataVisualization", importance: 1 },
  { name: "Plotly", category: "DataVisualization", importance: 2 },
  { name: "D3.js", category: "DataVisualization", importance: 3 },

  // Cloud / Storage
  { name: "AWS Amazon S3", category: "DatabaseCloud", importance: 1 },
  { name: "PostgreSQL", category: "DatabaseCloud", importance: 2 },
  { name: "SQLite", category: "DatabaseCloud", importance: 3 },

  // Frontend
  { name: "Next.js", category: "Frontend", importance: 1 },
  { name: "React", category: "Frontend", importance: 2 },
  { name: "Tailwind CSS", category: "Frontend", importance: 3 },
  { name: "Vue 3", category: "Frontend", importance: 4 },

  // Others
  { name: "MCP", category: "Others", importance: 1 },
  { name: "Bcrypt", category: "Others", importance: 2 },
];
