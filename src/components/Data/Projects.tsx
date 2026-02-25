import Image from "next/image";

export const projects = [
    {
      id: "JunhaoPortfolio",
      image: (<Image src = "/projects/Junhao_Portfolio.png" alt = "Junhao's Portfolio" width={300} height={100} />),
      name: "Junhao's Portfolio",
      description1: "- Built a personal portfolio using Next.js, TypeScript, and Tailwind CSS",
      description2: "- Deployed project using vercel",
      description3: "- Learned to adapt application to different display sizes",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/jzhao234/JunhaoZhao_Portfolio",
      demoLink: "https://junhao-zhao-portfolio.vercel.app",
    },
    {
      id: "DrugSynergy", 
      image: (<Image src = "/projects/Drug_Synergy_Finder.png" alt = "Drug Synergy Finder Photo" width={300} height={100}/>),
      name: "Drug Synergy Finder",
      description1: "- Built a full-stack web application to calculate and visualize drug synergies for cancer treatment research",
      description2: "- Used Next.js, TypeScript and Tailwind CSS to build the frontend and FastAPI and Python for the backend",
      description4: "- Visualize results using Plotly and D3.js for researchers to quickly analyze results with a comprehensive SAPE score for a subjective overview",
      skills: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"], 
    },
  ];