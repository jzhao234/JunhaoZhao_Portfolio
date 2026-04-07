export type ExperienceType = {
  id: string;
  logo: { src: string; alt: string };
  title: string;
  org?: string;
  location: string;
  date: string;
  bullets: string[];
  skills?: string[];
  link?: string;
  importance?: number;
  featured?: boolean;
};

export const experiences: ExperienceType[] = [
  {
    id: "researcher",
    logo: { src: "/logo/Temple-Logo-T-Header.svg", alt: "Temple" },
    title: "Undergraduate Researcher",
    org: "Fox Chase Cancer Center / Temple University",
    location: "Philadelphia, PA",
    date: "May 2025 – Present",
    bullets: [
      "Built a full-stack web application using Next.js, Tailwind CSS, and FastAPI to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research.",
      "Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team.",
      "Provided technical insights in journal talks and weekly lab meetings to improve research outcomes.",
    ],
    skills: ["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"],
    link: "/projects/drug-synergy-finder",
    importance: 1,
    featured: true,
  },
  {
    id: "stem-fellow",
    logo: { src: "/logo/Temple-Logo-T-Header.svg", alt: "Temple" },
    title: "STEM Leadership Fellow",
    org: "Temple University",
    location: "Philadelphia, PA",
    date: "Sep 2024 – May 2025",
    bullets: [
      "Assisted students in mastering the Jupyter Lab environment and programming in Python.",
      "Hosted office hours, providing tailored support to students and addressing individual learning needs.",
      "Collaborated with faculty to develop and implement effective teaching strategies.",
    ],
    importance: 2,
    featured: true,
  },
  {
    id: "lab-consultant",
    logo: { src: "/logo/Temple-Logo-T-Header.svg", alt: "Temple" },
    title: "Lab Consultant Intern",
    org: "Temple University",
    location: "Philadelphia, PA",
    date: "Sep 2023 – May 2025",
    bullets: [
      "Diagnosed and resolved technical issues, ensuring optimal hardware functionality in the lab.",
      "Provided hands-on assistance, fostering a collaborative and positive work environment.",
      "Collaborated with faculty to develop and refine lab processes and resources.",
    ],
    importance: 3,
  },
  {
    id: "lavner",
    logo: { src: "/logo/lavner.png", alt: "Lavner" },
    title: "Instructing Intern",
    org: "Lavner Education",
    location: "Philadelphia, PA",
    date: "Jun 2024 – Aug 2024",
    bullets: [
      "Instructed students in a diverse range of STEM subjects including coding, 3D printing, and robotics.",
      "Adapted and customized curriculum to align with various learning speeds and comprehension levels.",
      "Developed and implemented tailored instructional strategies for students with special needs.",
    ],
    importance: 4,
  },
  {
    id: "pcdc",
    logo: { src: "/logo/PCDC.jpg", alt: "PCDC" },
    title: "Intern and Volunteer",
    org: "PCDC",
    location: "Philadelphia, PA",
    date: "Aug 2018 – Dec 2023",
    bullets: [
      "Contributed to preserving the cultural heritage of Chinatown, promoting its rich cultural identity.",
      "Conducted in-depth research and performed data entry tasks to support community-related projects.",
      "Led food distribution efforts during the pandemic, ensuring delivery of thousands of boxes of food.",
    ],
    importance: 5,
  },
];
