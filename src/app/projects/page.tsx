import type { Metadata } from "next";

import ProjectCard from "../../components/Project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built over time: full-stack apps, data visualization, cloud, databases",
};

export default function ProjectsPage() {
  return(
    <ProjectCard/>
  )
}
