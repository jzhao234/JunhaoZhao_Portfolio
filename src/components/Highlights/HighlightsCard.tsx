"use client";

import ProjectItem from "../Project/ProjectItem";
import { projects } from "../Data/Projects";
import Image from "next/image";

export default function Highlights(){
    const project = projects.find((p) => p.id === "DrugSynergy");
    return(
        <div className = "card flex flex-col">
            <h2 className="text-2xl font-bold my-2 ml-4"> Highlights </h2>
            <div className="flex justify-center"> 
                <ProjectItem {...project} />
            </div>
            
        </div>
    ); 
}