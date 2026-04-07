import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../../components/Data/Projects";
import { DemoLink, GithubLink } from "../../../components/Utilities/AvailableLink";
import ImageGallery from "../../../components/Utilities/ImageGallery";
import { Overview, Problem, Solution, Architecture, Challenges, Improvements, Features } from "../../../components/Project/ProjectValues";
import skillCategory from "../../../utils/skillCategory";
import SkillCategoryColor from "../../../utils/SkillCategoryColor";

type SelectedProjectProps = {
  params: Promise<{ selectedProject: string }>;
};

export async function generateMetadata({ params }: SelectedProjectProps): Promise<Metadata> {
  const { selectedProject } = await params;
  const project = projects.find((p) => p.slug === selectedProject);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description ?? "Project Details",
    openGraph: {
      title: project.name,
      description: project.description ?? "Project details",
      images: project.images?.[0] ? [project.images[0]] : undefined,
    },
  };
}

export default async function SelectedProjectPage({ params }: SelectedProjectProps) {
  const { selectedProject } = await params;
  const project = projects.find((p) => p.slug === selectedProject);
  if (!project) return notFound();

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8">

      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-[14px] text-gray-400 dark:text-gray-500 hover:text-[#2196F3] transition-colors mb-6"
      >
        ← Projects
      </Link>

      {/* Title + actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h1>
        <div className="flex gap-2 flex-shrink-0">
          <DemoLink demoLink={project.demoLink} />
          <GithubLink githubLink={project.githubLink} />
        </div>
      </div>

      {/* Image gallery */}
      <ImageGallery images={project.images ?? []} />

      {/* Content — single column on mobile, sidebar on lg */}
      <div className="mt-10 lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">

        {/* Main content */}
        <div className="flex flex-col gap-8">
          <Overview overview={project.overview} />
          <Problem problem={project.problem} />
          <Solution solution={project.solution} />
          <Architecture architecture={project.architechture} />
          <Challenges challenges={project.challenges} />
          <Improvements improvements={project.improvements} />
        </div>

        {/* Sidebar */}
        <div className="mt-10 lg:mt-0 flex flex-col gap-8">

          {/* Skills */}
          {project.skills.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-300 mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, i) => {
                  const category = skillCategory(skill);
                  const colors = SkillCategoryColor(category);
                  return (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <Features features={project.features} />

        </div>
      </div>
    </div>
  );
}
