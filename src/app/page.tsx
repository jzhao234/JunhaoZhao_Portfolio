import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../components/Data/Projects";

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
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2196F3] text-white text-sm font-medium hover:bg-[#1976D2] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jzhao234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
            >
              GitHub
            </a>
            <a
              href="/files/resume.pdf"
              download="ZhaoJunhaoResume.pdf"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
            >
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
              className="relative flex flex-col border border-gray-200 dark:border-white/10 border-t-2 border-t-[#2196F3] rounded-xl overflow-hidden"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0"
                aria-label={`View ${project.name} details`}
              />
              {project.images?.[0] && (
                <div className="bg-gray-50 dark:bg-white/5 p-4">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    width={500}
                    height={280}
                    className="rounded w-full object-cover"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {projectDescriptions[project.id]}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.slice(0, 5).map((s) => (
                    <SkillTag key={s}>{s}</SkillTag>
                  ))}
                </div>
                {(project.githubLink || project.demoLink) && (
                  <div className="relative z-10 flex gap-2 mt-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-[#2196F3]/10 text-[#2196F3] hover:bg-[#2196F3]/20 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
                      >
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
        <div className="space-y-8">
          {featuredExperiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold">{exp.title}</h3>
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
                  <SkillTag key={skill}>{skill}</SkillTag>
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
              <h3 className="font-semibold">Temple University</h3>
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
        <h2 className="text-2xl font-bold">Open to software engineering opportunities</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
          Reach out on LinkedIn, view my projects on GitHub, or download my resume.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/junhao-zhao/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-[#2196F3] text-white text-sm font-medium hover:bg-[#1976D2] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jzhao234"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
          >
            GitHub
          </a>
          <a
            href="/files/resume.pdf"
            download="ZhaoJunhaoResume.pdf"
            className="px-5 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
    </div>
  );
}

function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
      {children}
    </span>
  );
}
