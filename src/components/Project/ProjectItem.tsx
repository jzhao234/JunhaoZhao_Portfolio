"use client";
import Image from "next/image";
import Link from "next/link";
import {useState, useRef, useEffect, ReactNode} from "react";

import SkillsItem from "../Skills/SkillsItem";
import skillCategory from "../../utils/skillCategory";
import highlightSkillsInText from "../Utilities/HighlightSkillsInText";
import { AvailableDemoLink, AvailableGithubLink } from "../Utilities/AvailableLink";

type ProjectItemProps = {
    id: string;
    slug: string;
    images?: string[];
    name: string;
    description1?: string; 
    description2?: string; 
    description3?: string;
    description4?: string;
    skills?: string[];
    githubLink?: string;
    demoLink?: string;
    selectedSkills?: string[];
}

export default function ProjectItem({id, slug, images, name, description1, description2, description3, description4, skills, githubLink, demoLink, selectedSkills}: ProjectItemProps){
    
    function createSkillBubbles () {
        if (!skills || skills.length === 0) return null;

        const combined = skills.map((skill, i) => ({
            skill,
            section: skillCategory(skills[i]),
            isHighlighted: selectedSkills?.includes(skill),
        }));
        const sorted =
            selectedSkills && selectedSkills.length > 0
                ? combined.sort((a, b) => {
                    if (a.isHighlighted && !b.isHighlighted) return -1;
                    if (!a.isHighlighted && b.isHighlighted) return 1;
                    return a.skill.localeCompare(b.skill);
                })
                : combined.sort((a, b) => a.skill.localeCompare(b.skill));

        return sorted.map(({ skill, section, isHighlighted }, i) => (
            <SkillsItem
                key={i}
                name={skill}
                isHighlighted={isHighlighted}
                />
        ));
    }

    return(
        <Link href={`/projects/${slug}`} className = "cursor-pointer hover:text-[#1E90FF] w-80 flex-col my-3 p-2 text-black bg-white dark:text-white dark:bg-[#131213] border-2 border-[#1E90FF]/20 rounded-xl" >
            <div className = "flex flex-col justify-between items-center">
                <div className = "flex flex-col flex-shrink-0 w-60 h-40 ml-1 mr-3 my-2">
                    <h2 className = "py-1 font-bold text-center">{name}</h2>
                    <Image
                        src={images[0]}
                        alt="screenshot"
                        width={300}
                        height={100}
                    />
                </div>
                <div className="border-2 border-[#1E90FF]/20 rounded-xl py-1 px-2 flex space-x-10 my-2 px-10"> 
                    <div onClick={(e) => e.stopPropagation()}>
                        <AvailableGithubLink
                            githubLink={githubLink}
                        />
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <AvailableDemoLink
                            demoLink={demoLink}
                        />
                    </div>
                    <div className = "relative group flex justify-end items-center text-[#1E90FF] bg-white dark:bg-[#171718] rounded-xl p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className = {`transform transition-transform duration-300`}>
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                        <span className="w-fit whitespace-nowrap bg-white dark:bg-[#171718] p-1 px-2 rounded-2xl absolute hidden group-hover:block -translate-y-8 translate-x-18">
                            More Details
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {createSkillBubbles()}
            </div>
        </Link>
    );
}