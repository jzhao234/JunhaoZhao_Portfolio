import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import { experiences } from "../data/experiences";
import { skills, categoryLabels, categoryOrder } from "../data/skills";
import skillCategory from "../utils/skillCategory";
import highlightSkillsInText from "../components/Utilities/HighlightSkillsInText";
import SkillCategoryColor from "../utils/SkillCategoryColor";

const techStack = categoryOrder
  .map((key) => ({
    category: categoryLabels[key],
    skills: [...skills.filter((s) => s.category === key)]
      .sort((a, b) => {
        if (a.importance !== undefined && b.importance !== undefined) return a.importance - b.importance;
        if (a.importance !== undefined) return -1;
        if (b.importance !== undefined) return 1;
        return 0;
      })
      .map((s) => s.name),
  }))
  .filter(({ skills }) => skills.length > 0);

export default function Home() {
  const featuredProjects = [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => (a.importance ?? 0) - (b.importance ?? 0));

  const featuredExperiences = [...experiences]
    .filter((e) => e.featured)
    .sort((a, b) => (a.importance ?? 0) - (b.importance ?? 0));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16 space-y-16">

      {/* ── Hero ── */}
      <section className="flex flex-col sm:flex-row items-start gap-8">
        <Image
          src="/profile.jpg"
          alt="Junhao Zhao"
          width={210}
          height={210}
          priority
          className="rounded-2xl flex-shrink-0 border border-line"
        />
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-content">
            Junhao Zhao
          </h1>
          <p className="mt-4 text-[17px] text-muted leading-relaxed max-w-xl">
            Backend-leaning software engineer building APIs, data-intensive applications, and
            research tools. Most recently, I built software for drug synergy analysis at Fox Chase
            Cancer Center using Python, FastAPI, and scientific visualization.
          </p>
          <div className="mt-4 flex items-start gap-2.5 font-mono text-[13px] text-subtle">
            <span className="relative flex h-2 w-2 flex-shrink-0 mt-[5px]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-positive opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
            </span>
            Seeking full-time backend and software engineering roles
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <GhostLink href="https://www.linkedin.com/in/junhao-zhao/" external>
              <LinkedInIcon />
              LinkedIn
            </GhostLink>
            <GhostLink href="https://github.com/jzhao234" external>
              <GitHubIcon />
              GitHub
            </GhostLink>
            <GhostLink href="/files/Junhao_Zhao_Resume.pdf" download="ZhaoJunhaoResume.pdf">
              <ResumeIcon />
              Resume
            </GhostLink>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section>
        <SectionLabel>Tech Stack</SectionLabel>
        <div className="space-y-3.5">
          {techStack.map(({ category, skills }) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row sm:items-baseline gap-y-1.5 sm:gap-x-5"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-subtle sm:w-36 sm:flex-shrink-0 sm:pt-0.5">
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

      {/* ── Featured Projects ── */}
      <section>
        <SectionLabel>Featured Projects</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-surface border border-line rounded-xl overflow-hidden transition-colors duration-200 hover:border-accent/50"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label={`View ${project.name} details`}
              />
              {project.images?.[0] && (
                <div className="bg-raised p-4 flex-shrink-0 border-b border-line">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-[19px] font-bold text-content transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <div className="mt-2 min-h-[6.5rem]">
                  <p className="text-[15px] text-muted leading-relaxed line-clamp-4">
                    {highlightSkillsInText(project.cardDescription)}
                  </p>
                </div>
                <div
                  className="flex flex-wrap items-start gap-1.5 mt-3 min-h-[3.5rem]"
                >
                  {(project.cardSkills ?? project.skills).map((s, i) => (
                    <ColoredSkillTag key={i}>{s}</ColoredSkillTag>
                  ))}
                </div>
                {(project.githubLink || project.demoLink) && (
                  <div className="relative z-20 flex gap-2 mt-4 pt-3.5 border-t border-line">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-md bg-accent text-accent-contrast hover:bg-accent-hover transition-colors cursor-pointer"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-md border border-line text-muted hover:border-accent hover:text-accent transition-colors cursor-pointer"
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
        <ViewAllLink href="/projects">View all projects</ViewAllLink>
      </section>

      {/* ── Experience ── */}
      <section>
        <SectionLabel>Experience</SectionLabel>
        <div>
          {featuredExperiences.map((exp, i) => (
            <div key={i} className="flex gap-5 group">
              {/* Timeline column */}
              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-accent bg-canvas transition-colors duration-200 group-hover:bg-accent" />
                {i < featuredExperiences.length - 1 && (
                  <div className="w-px flex-1 mt-1.5 bg-line" />
                )}
              </div>
              {/* Content */}
              <div className={`flex-1 ${i < featuredExperiences.length - 1 ? "pb-9" : ""}`}>
                <div className="rounded-xl px-3.5 py-2.5 -mx-3.5 -my-2.5 transition-colors duration-200 group-hover:bg-surface">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-display text-[18px] font-bold text-content">{exp.title}</h3>
                    <span className="font-mono text-[12px] text-subtle flex-shrink-0 tracking-tight">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-[15px] text-subtle mt-1">{exp.org}</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-[15px] text-muted leading-relaxed flex gap-2.5 items-start"
                      >
                        <span className="flex-shrink-0 mt-[9px] w-1 h-1 rounded-full bg-line-strong" />
                        <span>{highlightSkillsInText(b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewAllLink href="/experiences">View full experience</ViewAllLink>
      </section>

      {/* ── Education ── */}
      <section>
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <Image
              src="/logo/Temple-Logo-T-Header.svg"
              alt="Temple University"
              width={40}
              height={40}
              className="flex-shrink-0 mt-0.5"
            />
            <div>
              <h3 className="font-display text-[18px] font-bold text-content">Temple University</h3>
              <p className="text-[15px] text-muted mt-0.5">
                B.S. Computer Science · Philadelphia, PA · 2022 – Present
              </p>
              <p className="mt-1 text-[14px] text-subtle leading-relaxed max-w-lg">
                Studied abroad at Temple University Japan Campus in Fall 2025
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              src="/logo/CentralHS.gif"
              alt="Central High School"
              width={40}
              height={40}
              className="flex-shrink-0 mt-0.5 rounded"
            />
            <div>
              <h3 className="text-[16px] font-semibold text-muted">Central High School</h3>
              <p className="text-[14px] text-subtle">Philadelphia, PA</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── Shared bits ────────────────────────────────────────────── */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-subtle whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 signal-rule" aria-hidden="true" />
    </div>
  );
}

function ViewAllLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="mt-7">
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:text-accent-hover transition-colors cursor-pointer"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>
    </div>
  );
}

function GhostLink({
  href,
  children,
  external,
  download,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-[14px] font-medium text-content hover:border-accent hover:text-accent transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
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
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
    <span className={`px-2.5 py-0.5 text-[13px] rounded-full ${colors.bg} ${colors.text}`}>
      {children}
    </span>
  );
}
