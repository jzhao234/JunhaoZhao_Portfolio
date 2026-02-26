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
      description3: "- Visualize results using Plotly and D3.js for researchers to quickly analyze results with a comprehensive SAPE score for a subjective overview",
      skills: ["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"], 
    },
    {
      id: "Baketsu",
      image: (<Image src="/projects/home page.png" alt="Baketsu Screenshot" width={300} height={300} />),
      name: "Baketsu",
      description1: "- Developed a full-stack cloud storage platform for scalable file storage utilizing aws s3",
      description2: "- Implemented user authentication flows including registration, login, JWT handling, password hashing (bcrypt), protected routes, and backend-generated email verification tokens",
      description3: "- Built file preview endpoints to generate temporary S3 URLs for secure thumbnail rendering and improved file management UX.",
      description4: "- Designed relational database models using SQLite to track file metadata, size, folder structure, and per-user storage usage for accurate account management",
      skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
      githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
    }
  ];