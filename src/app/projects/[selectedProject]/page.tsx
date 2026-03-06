import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../../components/Data/Projects";
import SkillsItem from "../../../components/Skills/SkillsItem";
import { AvailableDemoLink, AvailableGithubLink } from "../../../components/Utilities/AvailableLink";
import ImageGallery from "../../../components/Utilities/ImageGallery";

type Props = {
    params: { selectedProject: string };
};

export function generateMetadata({ params }: Props): Metadata {
    const project = projects.find((p) => p.slug === params.selectedProject);
    if (!project) return {title: "Project not found" };

    return {
        title: project.name,
        description: project.description1 ?? project.description2 ?? "Project Details",
        openGraph: {
            title: project.name,
            description: project.description1 ?? project.description2 ?? "Project details",
            images: project.images ? project.images[1] : undefined,
        },
    };
    
}

export default function selectedProjectPage ({params}: Props) {

    const project = projects.find((p) => p.slug === params.selectedProject);
    if (!project) return notFound();

    return(
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col flex-2 w-full sm:min-w-2xl max-w-4xl">
                <ImageGallery
                    images={project.images}
                />
                <div className="flex mt-10 mt-3 sm:mt-10 mx-3 sm:mx-10 justify-between">
                    <h1 className="text-xl font-bold"> {project.name} </h1>
                    <div className="flex gap-5">
                        <div className="blueBorder rounded-xl">
                            <AvailableGithubLink githubLink={project.githubLink}/>
                        </div>
                        <div className="blueBorder rounded-xl">
                            <AvailableDemoLink demoLink={project.demoLink}/>
                        </div>
                    </div>
                </div>
                <div className="blueBorder rounded-xl mt-3 mx-3 sm:mx-10 p-5"> 
                    <h2 className="text-xl font-bold"> Description </h2>
                </div>
            </div>
            
            <div className="flex flex-col flex-1 w-full min-w-sm lg:max-w-lg">
                <div className = "card h-auto m-3 sm:m-10 p-5">
                    <h2 className="text-xl font-bold my-2"> Skills </h2>
                    {
                        project.skills.map((skill, i) => (
                            <SkillsItem
                                key = {i}
                                name = {skill}
                            />
                        ))
                    }
                
                </div>
                <div className="card flex gap-5 flex flex-col">
                    <h2 className="text-xl font-bold my-2"> Bullet Points </h2>
                    
                </div>
            </div>
        </div>
    )
    
}