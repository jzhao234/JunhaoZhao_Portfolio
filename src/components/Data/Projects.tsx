import Image from "next/image";
import { ReactNode } from "react";

export type ProjectTypes = {
  id: string,
  slug: string,
  images?: string[],
  alt?: string[],
  name:  string;
  description?: string;
  features?: string[],
  overview?: string;
  problem?: string;
  solution?: string;
  architechture?: string[]; 
  challenges?: string[];
  improvements?: string[];
  skills: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: ProjectTypes[] = [
    {
      id: "JunhaoPortfolio",
      slug: "junhao-portfolio",
      images: ["/projects/Junhao_Portfolio.png"],
      alt: ["Junhao's Portfolio | Homepage"],
      name: "Junhao's Portfolio",
      features: [
        "Project detail pages with slug-based routing",
        "Image galleries for project case studies",
        "SEO setup (per-page metadata, sitemap.xml, robots.txt)",
        "Deployed on Vercel with a custom domain",
      ],
      overview: `My personal portfolio built with Next.js (App Router) and Tailwind CSS, featuring project detail pages, image galleries, and SEO fundamentals. Deployed on Vercel with a custom domain.`,
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://JunhaoZhao.com",
    },
    {
      id: "DrugSynergy", 
      slug: "drug-synergy-finder",
      images: ["/projects/Drug_Synergy_Finder.png"],
      alt: ["Drug Synergy Finder | Homepage"],
      name: "Drug Synergy Finder",
      features: [
        "Upload CSV or XLSX dose-response datasets",
        "Parse and preprocess experimental drug response data",
        "Perform dose-response curve fitting",
        "Calculate synergy scores using Bliss Independence",
        "Support custom SAPE algorithm analysis",
        "Display interactive synergy heatmaps",
        "Visualize dose-response curves and response matrices",
        "Explore results through dynamic D3.js and Plotly charts",
      ],
      overview:`This project is a full-stack web application designed to analyze and visualize drug synergy in multi-drug treatments. Combination therapies are widely used in areas such as cancer treatment because multiple drugs can target different biological pathways simultaneously, improving treatment effectiveness and reducing the likelihood of drug resistance.
        
        The platform allows researchers to upload dose-response datasets and evaluate drug interactions using established synergy models such as Bliss Independence, while also supporting our custom algorithm called SAPE for additional analysis of drug combination effects. The backend is built with FastAPI and Python to process uploaded datasets, compute synergy scores, and perform dose-response curve fitting.
        
        The frontend uses Next.js and Tailwind CSS, with D3.js and Plotly for interactive data visualization, enabling users to explore dose-response matrices, synergy heatmaps, and other graphical representations of drug interaction data.
        
        By combining traditional synergy models with new analytical approaches and interactive visualization tools, the platform helps researchers interpret complex experimental data and identify promising drug combinations more efficiently.`,
      problem:`Combination therapies are widely used in areas such as cancer treatment because multiple drugs can target different biological pathways at once. However, evaluating whether drugs work better together, worse together, or simply independently can be difficult. Experimental datasets are often large, irregular, and not easy to interpret through spreadsheets or static scripts alone. Researchers need a more intuitive way to process dose-response data, calculate synergy metrics, and visually explore interaction patterns across drug combinations.`,
      solution:`To address this, I built a web-based platform that accepts uploaded dose-response datasets and processes them through a FastAPI and Python backend. The backend handles data parsing, dose-response curve fitting, and synergy score calculations using models such as Bliss Independence, while also supporting our custom SAPE algorithm for additional analysis. The frontend, built with Next.js and Tailwind CSS, presents the results through interactive visualizations using D3.js and Plotly, allowing users to explore heatmaps, matrices, and dose-response relationships directly in the browser.`,
      architechture:[
        "Next.js frontend for the user interface and file upload workflow",
        "FastAPI backend for API endpoints and analysis requests",
        "Python processing layer for dataset parsing and computational logic", 
        "Synergy analysis using Bliss Independence and SAPE",
        "D3.js and Plotly for interactive scientific visualization",
      ],
      challenges:[
        "Handling experimental datasets with inconsistent or irregular matrix structures",
        "Connecting a scientific Python analysis workflow to a modern web frontend",
        "Designing backend endpoints that support computationally heavy data processing",
        "Creating interactive visualizations that clearly communicate complex drug interaction patterns",
        "Translating raw numerical output into visual insights that researchers can interpret quickly",
      ],
      improvements:[
        'Add support for additional synergy models such as Loewe, HSA, and ZIP',
        'Improve dataset validation and error handling for messy experimental files',
        'Support larger datasets with more scalable backend processing',
        'Add experiment saving and user accounts',
        'Expand visualization options for comparing multiple drug combinations',
        "Improve interpretability by adding summary statistics and annotation tools",
      ],
      skills: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"], 
    },
    {
      id: "Baketsu",
      slug: "baketsu-cloud-storage",
      images: ["/projects/baketsu/home.png", "/projects/baketsu/dashboard.png", "/projects/baketsu/files.png"],
      alt: ["Baketsu | Homepage", "Baketsu | Dashboard", "Baketsu | File Manager"],
      name: "Baketsu",
      skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
      githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
    },
    {
      id: "Baketsu",
      slug: "baketsu-cloud-storage",
      images: ["/projects/baketsu/home.png", "/projects/baketsu/dashboard.png", "/projects/baketsu/files.png"],
      alt: ["Baketsu | Homepage", "Baketsu | Dashboard", "Baketsu | File Manager"],
      name: "Baketsu",
      features: [
        "Authenticated file uploads with upload verification",
        "Store files in AWS S3 and track upload metadata in SQLite",
        "Track per-file size and aggregate per-user storage usage",
        "Dashboard showing storage usage and pricing breakdowns",
        "Backend structured into core, models, routes, schemas, and services",
        "API endpoints for upload workflows and usage retrieval",
      ],
      overview: `Baketsu is a cloud storage web application built to make file uploads reliable, traceable, and easy to understand from a user perspective. Users can upload files through a web interface, store them in AWS S3, and view storage usage metrics in a dashboard.

        The backend is built with FastAPI and Python, with a clean architecture (core/models/routes/schemas/services) to keep the codebase maintainable as features expand. Uploaded files are tracked in a SQLite database, including per-file size data, which is then aggregated into per-user usage metrics to power storage and pricing breakdown views.

        By combining a structured backend, verified upload workflows, and clear usage analytics, Baketsu turns raw file storage into something users can manage and interpret quickly.`,
      problem: `Building a cloud upload system is more than “send a file.” You need a secure workflow that verifies users, stores files reliably, tracks metadata consistently, and turns file activity into useful product information like per-user storage usage and pricing. Without this structure, uploads become hard to debug, usage is inaccurate, and dashboards become unreliable.`,
      solution: `To solve this, I built an end-to-end upload pipeline that stores files in AWS S3 while writing consistent metadata to SQLite. I designed the FastAPI backend using a service-based structure (core/models/routes/schemas/services) so upload logic, database logic, and API routing stay separated and scalable. I also implemented database models that track file size at upload time and aggregate per-user usage, enabling a dashboard that clearly shows storage totals and pricing breakdowns.`,
      architechture: [
        "Next.js frontend for upload UX and dashboard views",
        "FastAPI backend with structured organization (core/models/routes/schemas/services)",
        "AWS S3 for cloud file storage",
        "SQLite for file metadata, size tracking, and per-user aggregation",
        "Usage + pricing breakdown logic powering dashboard components",
      ],
      challenges: [
        "Designing a backend architecture that stays scalable and readable as features grow",
        "Keeping S3 upload state consistent with database records and user sessions",
        "Accurately tracking file sizes and aggregating per-user usage for analytics",
        "Surfacing meaningful upload errors and status to the frontend",
      ],
      improvements: [
        "Add folders/tags and better file organization",
        "Add sharing/permissions for collaborative file access",
        "Improve upload resilience (retries, chunked uploads for large files)",
        "Add audit logs and event history for uploads and account activity",
        "Expand analytics (file types, time-based trends, per-project usage)",
      ],
      skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
      githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
    },
  ];