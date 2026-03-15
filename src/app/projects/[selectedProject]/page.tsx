import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SkillsItem from "../../../components/Skills/SkillsItem";
import { projects } from "../../../components/Data/Projects";
import { DemoLink, GithubLink } from "../../../components/Utilities/AvailableLink";
import ImageGallery from "../../../components/Utilities/ImageGallery";
import {Overview, Problem, Solution, Architecture, Challenges, Improvements, Features} from "../../../components/Project/ProjectValues";

type SelectedProjectProps = {
    params: Promise<{ selectedProject : string }>;
};

export async function generateMetadata ({ params }: SelectedProjectProps): Promise<Metadata> {

    const { selectedProject } = await params;
    const project = projects.find((p) => p.slug === selectedProject);
    if (!project) return {title: "Project not found" };

    return {
        title: project.name,
        description: project.description ?? project.description2 ?? "Project Details",
        openGraph: {
            title: project.name,
            description: project.description ?? project.description2 ?? "Project details",
            images: project.images ? project.images[1] : undefined,
        },
    };
    
}

export default async function SelectedProjectPage ({ params }: SelectedProjectProps) {
    const { selectedProject } = await params;
    const project = projects.find((p) => p.slug === selectedProject);
    if (!project) return notFound();

    return(
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col flex-2 w-full sm:min-w-2xl max-w-4xl">
                <div className="flex mt-10 mt-3 sm:mt-10 mx-3 sm:mx-10 justify-between">
                    <h1 className="text-xl font-bold"> {project.name} </h1>
                    <div className="flex gap-5">
                        <div className="blueBorder rounded-xl">
                            <GithubLink githubLink={project.githubLink}/>
                        </div>
                        <div className="blueBorder rounded-xl">
                            <DemoLink demoLink={project.demoLink}/>
                        </div>
                    </div>
                </div>

                <ImageGallery
                    images={project.images}
                />
                <div className="blueBorder rounded-xl mt-3 mx-3 sm:mx-10 p-5"> 
                    <Overview overview={project.overview}/>
                    <Problem problem={project.problem}/>
                    <Solution solution={project.solution}/>
                    <Architecture architecture={project.architechture}/>
                    <Challenges challenges={project.challenges}/>
                    <Improvements improvements={project.improvements}/>
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
                <Features features={project.features}/>
            </div>
        </div>
    )
    
}