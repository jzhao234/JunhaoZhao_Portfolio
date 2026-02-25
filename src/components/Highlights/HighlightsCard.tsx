"use client";

import ProjectItem from "../Project/ProjectItem";
import { projects } from "../Data/Projects";
import Image from "next/image";

export default function Highlights(){
    const project = projects.find((p) => p.id === "DrugSynergy");
    return(
        <div className = "card flex flex-col m-3 sm:m-10 p-3">
            <h1 className="text-2xl font-bold my-2 ml-4"> Highlights </h1>
            <div className="flex justify-center"> 
                <ProjectItem {...project} />
            </div>
            
        </div>
    ); 
}