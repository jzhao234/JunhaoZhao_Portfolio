"use client";

import ProjectItem from "../Project/ProjectItem";
import Image from "next/image";

export default function Highlights(){
    return(
        <div className = "card flex flex-col m-3 sm:m-10 p-3">
            <h1 className="text-2xl font-bold my-2 ml-4"> Highlights </h1>
            <div className="flex justify-center"> 
                <ProjectItem
                    id = "synergy"
                    image={<Image src = "/projects/Drug_Synergy_Finder.png" alt = "Drug Synergy Finder Photo" width={300} height={100}/>} 
                    name="Drug Synergy Finder"
                    description1={"- Built a full-stack web application to calculate and visualize drug synergies for cancer treatment research"}
                    description2={"- Used Next.js, TypeScript and Tailwind CSS to build the frontend and FastAPI and Python for the backend"}
                    description3={"- Visualize results using Plotly and D3.js for researchers to quickly analyze results with a comprehensive SAPE score for a subjective overview"}
                    skills={["Next.js", "Python", "TypeScript", "Tailwind CSS", "Plotly", "D3.js", "FastAPI"]}
                />
            </div>
            
        </div>
    ); 
}