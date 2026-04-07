import Image from "next/image";
import { ReactNode } from "react";

export type ProjectTypes = {
  id: string,
  slug: string,
  importance?: number,
  featured?: boolean,
  images?: string[],
  name:  string;
  cardDescription?: string;
  description?: string;
  features?: string[],
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  improvements?: string[];
  skills: string[];
  cardSkills?: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: ProjectTypes[] = [
    {
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
      cardDescription: "This portfolio — built with Next.js, TypeScript, and Tailwind CSS. Designed for clarity and recruiter readability. Deployed on Vercel.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://JunhaoZhao.com",
    },
    {
      id: "DrugSynergy",
      importance: 1,
      featured: true,
      slug: "drug-synergy-finder",
      images: ["/projects/drugSynergy/homePage.png", "/projects/drugSynergy/curveFittings.png", "/projects/drugSynergy/SAPEScores.png", "/projects/drugSynergy/responseMatrix.png"],
      name: "Drug Synergy Finder",
      cardDescription: "Full-stack research platform for analyzing drug synergy in cancer treatment. A Python/FastAPI backend processes uploaded dose-response datasets and computes synergy scores; a Next.js frontend visualizes results with interactive D3.js and Plotly charts.",
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
      architecture:[
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
      importance: 2,
      featured: true,
      slug: "baketsu-cloud-storage",
      images: ["/projects/baketsu/homePage.png", "/projects/baketsu/dashboard.png", "/projects/baketsu/filesPage.png", "/projects/baketsu/filePreview.png"],
      name: "Baketsu",
      cardDescription: "Cloud file storage platform with JWT authentication, bcrypt password hashing, AWS S3 integration, and a SQLite database tracking per-user file metadata and folder structure.",
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
      architecture: [
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
    {
      id: "OsakaHibachiExpress",
      importance: 2,
      featured: false,
      slug: "osaka-hibachi-express",
      images: [
        "/projects/osakaExpress/homePage.png",
      ],
      name: "Osaka Hibachi Express",
      cardDescription:
        "Paid client website built with Next.js. Mobile-first restaurant site with clear menu/contact flow and strong Lighthouse results (95 Performance, 93 Accessibility, 100 SEO).",
      features: [
        "Mobile-first layout optimized for customers coming from search",
        "Clear navigation to Menu, Location/Hours, and Contact",
        "Menu section designed for quick scanning and readability",
        "Performance-focused images and lightweight UI",
        "SEO-ready structure (metadata, headings, indexable pages)",
        "Production deployment with custom domain (osakahibachiexpress.com)",
        "Accessibility-focused semantic structure and readable typography",
      ],
      overview: `Osaka Hibachi Express is a paid client website built with Next.js for a local restaurant. The goal was a fast, clean site that makes it easy for customers to find the menu, hours, location, and contact details on mobile.

    I focused on information hierarchy and page speed so visitors can take action quickly (view the menu, call, get directions). The live site (osakahibachiexpress.com) achieved Lighthouse scores of 95 Performance, 93 Accessibility, 69 Best Practices, and 100 SEO.`,
      problem: `Restaurant visitors usually arrive from mobile search and need answers immediately: menu, hours, location, and how to contact or order. If those details are buried, slow to load, or hard to read on mobile, users bounce and the business loses customers.`,
      solution: `I built a mobile-first Next.js site with a clear conversion path and high-visibility calls to action. I structured the content so key info is reachable within one or two scrolls, optimized assets for performance, and ensured the site follows SEO-friendly and accessible page structure. The result is a production-ready client site that loads quickly and is easy to maintain.`,
      architecture: [
        "Next.js frontend with reusable sections/components",
        "Tailwind CSS for responsive design and consistent styling",
        "SEO foundations (metadata, headings, indexable routes)",
        "Deployment to production with custom domain + DNS configuration",
      ],
      challenges: [
        "Designing a layout that prioritizes menu/location info on mobile",
        "Keeping pages lightweight while still looking polished",
        "Ensuring accessibility and readable typography across devices",
        "Improving Lighthouse Best Practices by addressing audit recommendations",
      ],
      improvements: [
        "Add structured data (Restaurant schema) for richer search results",
        "Add analytics to track calls, direction clicks, and menu engagement",
        "Add a photo gallery and promotions/announcements section",
        "Continue improving Best Practices score by resolving remaining audit items",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SEO",
        "Accessibility",
        "Performance Optimization",
        "Client Communication",
        "Deployment",
      ],
      demoLink: "https:osakahibachiexpress.com",
    },
    {
      id: "SoraAscent",
      importance: 2,
      featured: false,
      slug: "sora-ascent",
      images: [
        "/projects/soraAscent/homePage.png",
        "/projects/soraAscent/process.png",
        "/projects/soraAscent/aboutMe.png"
      ],
      name: "Sora Ascent",
      cardDescription:
        "Founder-built lead-gen website for a local web design service. Built with Next.js + Tailwind and a Resend-powered contact form. Achieved Lighthouse scores of 99 Performance and 100 in Accessibility, Best Practices, and SEO. Live at soraascent.com.",
      features: [
        "Mobile-first, conversion-focused marketing site for local businesses",
        "Service packaging and pricing presentation for quick self-qualification",
        "Contact form that emails leads via Resend (reliable production delivery)",
        "SEO-ready foundations (metadata, sitemap.xml, robots.txt, clean headings)",
        "Performance + accessibility tuned UI (99 Perf / 100 A11y / 100 BP / 100 SEO)",
        "Deployed with custom domain (soraascent.com)",
      ],
      overview: `Sora Ascent is my founder-built website for a local web design service. I designed it to function as both a portfolio and an inbound lead funnel, prioritizing clear offer communication, simple navigation, and a frictionless path to contact.

    The site is built with Next.js and Tailwind CSS. Lead capture is handled through a production contact form that sends submissions directly to my email via Resend. I focused heavily on performance, accessibility, and SEO fundamentals, achieving Lighthouse scores of 99 Performance and 100 in Accessibility, Best Practices, and SEO. The site is live at soraascent.com.`,
      problem: `Local business sites often fail to communicate the offer quickly, load slowly on mobile, and don’t provide a clear next step for visitors. For a service business, the website needs to build trust fast, explain what’s included, and convert visitors into inquiries without relying on vague or risky claims.`,
      solution: `I built a conversion-first marketing site with clear service packaging and a simple inquiry path. I implemented SEO fundamentals (page metadata, sitemap, robots, semantic headings) and optimized for speed and accessibility. For lead capture, I integrated a Resend-backed contact workflow that reliably delivers submissions to email, supported by “what happens next” copy to reduce friction and set expectations.`,
      architecture: [
        "Next.js frontend for routing, pages, and reusable UI sections",
        "Tailwind CSS for responsive design and consistent styling",
        "Resend integration for contact form email delivery",
        "SEO setup: metadata, sitemap.xml, robots.txt, canonical/redirect strategy",
        "Deployed with custom domain (soraascent.com)",
      ],
      challenges: [
        "Writing concise copy that communicates the offer clearly to non-technical business owners",
        "Balancing credibility and clarity without making unverifiable promises",
        "Designing a clean layout that stays conversion-focused on mobile",
        "Implementing reliable form delivery and a smooth post-submit experience",
      ],
      improvements: [
        "Add more case studies with screenshots and measurable outcomes",
        "Add lightweight analytics to track submissions and CTA clicks",
        "Build industry-specific landing pages for local SEO",
        "Add a short automated intake flow to qualify leads before calls",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Resend",
        "SEO",
        "Accessibility",
        "Performance Optimization",
        "Deployment",
        "Copywriting",
      ],
      demoLink: "https:soraascent.com",
    }
  ];