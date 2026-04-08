import type { ProjectTypes } from "./types";

const portfolio: ProjectTypes = {
  id: "JunhaoPortfolio",
  slug: "junhao-portfolio",
  images: ["/projects/portfolio/homePage.png"],
  name: "Junhao's Portfolio",
  features: [
    "Project detail pages with slug-based routing",
    "Image galleries for project case studies",
    "SEO setup (per-page metadata, sitemap.xml, robots.txt)",
    "Deployed on Vercel with a custom domain",
  ],
  overview: `My personal portfolio built with Next.js (App Router) and Tailwind CSS, featuring project detail pages, image galleries, and SEO fundamentals. Deployed on Vercel with a custom domain.`,
  cardDescription:
    "This portfolio — built with Next.js, TypeScript, and Tailwind CSS. Designed for clarity and recruiter readability. Deployed on Vercel.",
  skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
  demoLink: "https://JunhaoZhao.com",
};

export default portfolio;
