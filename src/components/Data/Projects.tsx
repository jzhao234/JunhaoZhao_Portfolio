import Image from "next/image";
import { ReactNode } from "react";

export type ProjectTypes = {
  id: string,
  slug: string,
  images: string[],
  name:  string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string; 
  skills: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: ProjectTypes[] = [
    {
      id: "JunhaoPortfolio",
      slug: "junhao-portfolio",
      images: ["/projects/Junhao_Portfolio.png"],
      name: "Junhao's Portfolio",
      description1: "- Built a personal portfolio using Next.js, TypeScript, and Tailwind CSS",
      description2: "- Deployed project using vercel",
      description3: "- Learned to adapt application to different display sizes",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://JunhaoZhao.com",
    },
    {
      id: "DrugSynergy", 
      slug: "drug-synergy-finder",
      images: ["/projects/Drug_Synergy_Finder.png"],
      name: "Drug Synergy Finder",
      description1: "- Built a full-stack web application to calculate and visualize drug synergies for cancer treatment research",
      description2: "- Used Next.js, TypeScript and Tailwind CSS to build the frontend and FastAPI and Python for the backend",
      description3: "- Visualize results using Plotly and D3.js for researchers to quickly analyze results with a comprehensive SAPE score for a subjective overview",
      skills: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"], 
    },
    {
      id: "Baketsu",
      slug: "baketsu-cloud-storage",
      images: ["/projects/home page.png"],
      name: "Baketsu",
      description1: "- Developed a full-stack cloud storage platform for scalable file storage utilizing AWS S3",
      description2: "- Implemented user authentication flows including registration, login, JWT handling, password hashing using bcrypt, protected routes, and backend-generated email verification tokens",
      description3: "- Built file preview endpoints to generate temporary S3 URLs for secure thumbnail rendering and improved file management UX.",
      description4: "- Designed relational database models using SQLite to track file metadata, size, folder structure, and per-user storage usage for accurate account management",
      skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
      githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
    }
  ];