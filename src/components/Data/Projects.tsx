import Image from "next/image";
import { ReactNode } from "react";

export type ProjectTypes = {
  id: string,
  slug: string,
  images?: string[],
  name:  string;
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
      name: "Junhao's Portfolio",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://JunhaoZhao.com",
    },
    {
      id: "DrugSynergy", 
      slug: "drug-synergy-finder",
      images: ["/projects/Drug_Synergy_Finder.png"],
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
      images: ["/projects/home page.png"],
      name: "Baketsu",
      skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
      githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
    }
  ];