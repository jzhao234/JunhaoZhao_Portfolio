"use client";
import Image from "next/image";
import ExperienceItem from "../../components/Experience/ExperienceItem";

export default function ExperiencePage() {

  return (
    <div className="max-w-[95vw] mx-auto mt-5 p-5 border-2 border-[#1E90FF]/20 rounded-lg bg-white text-black dark:bg-[#151516] dark:text-white flex flex-col justify-center">
      <h1 className="text-2xl mb-5 font-bold"> Experiences </h1>
      <div>
        {/* Experience */}
        <ExperienceItem
        logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
        title="Undergraduate Researcher at Fox Chase Cancer Center"
        location="Philadelphia, PA"
        date="MAY 2025 - Current"
        description1={<>- Built a full-stack web application using <span className="text-green-500 font-semibold">Next.js</span>, <span className="text-green-500 font-semibold">Tailwind CSS</span>, and <span className="text-purple-500 font-semibold">FastAPI</span> to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research</>}
        description2={"- Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team"}
        description3={"- Provided technical insights in journal talks and weekly lab meetings to improve research outcomes"}
        skills={["Next.js", "TypeScript", "Python", "Plotly", "FastAPI"]}
        sections={["Frontend", "Language", "Language", "Frontend", "Backend"]}

        />
        {/* Experience */}
        <ExperienceItem 
        logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
        title="Lab Consultant Intern at Temple" 
        location="Philadelphia, PA" 
        date="SEP 2023 - MAY 2025" 
        description1="- Diagnosed and resolved technical issues, ensuring optimal hardware functionality in the lab"
        description2="- Provided hands-on assistance, fostering a collaborative and positive work environment"
        description3="- Collaborated with faculty to develop and refine lab processes and resources"
        description4="- Responded promptly to service requests, demonstrating strong problem solving skills"
        />
        {/* Experience */}
        <ExperienceItem 
        logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple" width={50} height={50} />} 
        title="STEM Leadership Fellows at Temple" 
        location="Philadelphia, PA" 
        date="SEP 2024 - MAY 2025" 
        description1="- Assisted students in mastering the Jupyter Lab environment and programming in Python"
        description2="- Hosted office hours, providing tailored support to students and addressing individual learning needs"
        description3="- Collaborated with faculty and team members to develop and implement effective teaching strategies"
        description4="- Enhanced students coding skills, enabling them to effectively tackle data science challenges"
        />
        {/* Experience */}
        <ExperienceItem 
        logo={<Image src = "/logo/lavner.png" alt = "Lavner" width={50} height={50} />} 
        title="Instructing Intern at Lavner" 
        location="Philadelphia, PA" 
        date="JUN 2024 - AUG 2025" 
        description1="- Instructed students in a diverse range of STEM subjects including coding, 3D-printing, and robotics"
        description2="- Adapted and customized curriculum to align various learning speeds and comprehension"
        description3="- Provided personalized mentorship and attentive support, addressing individual student needs"
        description4="- Developed and implemented tailored instructional strategies for students with special needs"
        />
        {/* Experience */}
        <ExperienceItem 
        logo={<Image src = "/logo/PCDC.jpg" alt = "PCDC" width={50} height={50} />} 
        title="Intern and Volunteer at PCDC" 
        location="Philadelphia, PA" 
        date="AUG 2018 - DEC 2023" 
        description1="- Contributed to preserving the cultural heritage of Chinatown, promoting its rich cultural identity"
        description2="- Conducted in-depth research and performed data entry tasks to support community related projects"
        description3="- Led food distribution efforts during the pandemic, ensuring delivery of thousands of boxes of food"
        description4="- Managed participant data, contributing to the effective allocation of resources"
        />
      </div>
    </div>
  );
}
