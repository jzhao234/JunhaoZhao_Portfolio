import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../components/Data/Projects";
import skillCategory from "../utils/skillCategory";
import SkillCategoryColor from "../utils/SkillCategoryColor";

const featuredExperiences = [
  {
    title: "Undergraduate Researcher",
    org: "Fox Chase Cancer Center / Temple University",
    date: "May 2025 – Present",
    bullets: [
      "Built a full-stack drug synergy analysis platform using Next.js and FastAPI for cancer treatment research",
      "Contributed algorithmic improvements to custom synergy scoring models using experimental dose-response data",
      "Presented technical findings in weekly lab meetings and journal discussions",
    ],
  },
  {
    title: "STEM Leadership Fellow",
    org: "Temple University",
    date: "Sep 2024 – May 2025",
    bullets: [
      "Supported students learning Python and data science in a university course lab",
    ],
  },
];

const techStack = [
  { category: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "C"] },
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "D3.js", "Plotly"] },
  { category: "Backend", skills: ["FastAPI", "Flask"] },
  { category: "Database & Cloud", skills: ["SQL", "SQLite", "AWS S3"] },
];

const projectDescriptions: Record<string, string> = {
  DrugSynergy:
    "Full-stack research platform for analyzing drug synergy in cancer treatment. A Python/FastAPI backend processes uploaded dose-response datasets and computes synergy scores; a Next.js frontend visualizes results with interactive D3.js and Plotly charts.",
  Baketsu:
    "Cloud file storage platform with JWT authentication, bcrypt password hashing, AWS S3 integration, and a SQLite database tracking per-user file metadata and folder structure.",
  JunhaoPortfolio:
    "This portfolio — built with Next.js, TypeScript, and Tailwind CSS. Designed for clarity and recruiter readability. Deployed on Vercel.",
};

const orderedProjectIds = ["DrugSynergy", "Baketsu"];

export default function Home() {
  const orderedProjects = orderedProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is (typeof projects)[number] => p !== undefined);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-12">

      {/* ── Hero ── */}
      <section className="flex flex-col sm:flex-row items-start gap-8">
        <Image
          src="/profile.jpg"
          alt="Junhao Zhao"
          width={160}
          height={160}
          className="rounded-2xl flex-shrink-0 border border-gray-200 dark:border-white/10"
        />
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Junhao Zhao</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            CS student at Temple University. I build full-stack web applications — most recently a drug synergy analysis platform for oncology research at Fox Chase Cancer Center.
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 tracking-wide">
            Next.js · Python · TypeScript · FastAPI · React
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 dark:bg-green-500 flex-shrink-0" />
            Open to SWE internships and full-time roles
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="https://www.linkedin.com/in/junhao-zhao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2196F3] text-white text-sm font-medium hover:bg-[#1976D2] transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/jzhao234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="/files/resume.pdf"
              download="ZhaoJunhaoResume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
            >
              <ResumeIcon />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section>
        <SectionLabel>Featured Projects</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {orderedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col border border-gray-200 dark:border-white/10 border-t-2 border-t-[#2196F3] rounded-xl overflow-hidden transition-all duration-200 hover:border-[#2196F3]/50 dark:hover:border-[#2196F3]/50 hover:shadow-lg dark:hover:shadow-[0_4px_24px_rgba(33,150,243,0.08)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${project.name} details`}
              />
              {project.images?.[0] && (
                <div className="bg-gray-50 dark:bg-white/5 p-4">
                  <div className="relative h-44 rounded overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{project.name}</h3>
                <div className="mt-2 h-[7.1rem] overflow-hidden">
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 leading-relaxed line-clamp-5 transition-colors">
                    {projectDescriptions[project.id]}
                  </p>
                </div>
                <div
                  className="flex flex-wrap items-start gap-1.5 overflow-hidden mt-3"
                  style={{ height: 46 }}
                >
                  {(project.cardSkills ?? project.skills).map((s, i) => (
                    <ColoredSkillTag key={i}>{s}</ColoredSkillTag>
                  ))}
                </div>
                {(project.githubLink || project.demoLink) && (
                  <div className="relative z-20 flex gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-[#2196F3] text-white hover:bg-[#1976D2] transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="text-sm text-[#2196F3] hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

      {/* ── Experience ── */}
      <section>
        <SectionLabel>Experience</SectionLabel>
        <div>
          {featuredExperiences.map((exp, i) => (
            <div key={i} className="flex gap-5">
              {/* Timeline column */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-300 dark:border-white/25 bg-white dark:bg-[#151516]" />
                {i < featuredExperiences.length - 1 && (
                  <div className="w-px flex-1 mt-1.5 bg-gray-200 dark:bg-white/10" />
                )}
              </div>
              {/* Content */}
              <div className={`flex-1 ${i < featuredExperiences.length - 1 ? "pb-8" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500 flex-shrink-0">{exp.date}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-0.5">{exp.org}</p>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/experiences" className="text-sm text-[#2196F3] hover:underline">
            View full experience →
          </Link>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section>
        <SectionLabel>Tech Stack</SectionLabel>
        <div className="space-y-3">
          {techStack.map(({ category, skills }) => (
            <div key={category} className="flex flex-wrap items-start gap-x-4 gap-y-2">
              <span className="text-xs text-gray-400 dark:text-gray-500 w-32 flex-shrink-0 pt-1">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <ColoredSkillTag key={skill}>{skill}</ColoredSkillTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section>
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Image
              src="/logo/Temple-Logo-T-Header.svg"
              alt="Temple University"
              width={40}
              height={40}
              className="flex-shrink-0 mt-0.5"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Temple University</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                B.S. Computer Science · Philadelphia, PA · 2022 – Present
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 leading-relaxed max-w-lg">
                Relevant coursework: Data Structures & Algorithms, Systems Programming, Software Design,
                Information Visualization, UX Design, Computational Probability & Statistics
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Central High School</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Philadelphia, PA · 2018 – 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-gray-200 dark:border-white/10 pt-12 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-400 dark:bg-green-500" />
          Available for summer 2026 internships and full-time roles
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open to software engineering opportunities</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
          Reach out on LinkedIn, view my projects on GitHub, or download my resume.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/junhao-zhao/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#2196F3] text-white text-sm font-medium hover:bg-[#1976D2] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/jzhao234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="/files/resume.pdf"
            download="ZhaoJunhaoResume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
          >
            <ResumeIcon />
            Download Resume
          </a>
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

function ColoredSkillTag({ children }: { children: ReactNode }) {
  const category = skillCategory(String(children));
  const colors = SkillCategoryColor(category);
  return (
    <span className={`px-2.5 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text}`}>
      {children}
    </span>
  );
}
