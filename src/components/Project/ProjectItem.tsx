"use client";
import Image from "next/image";
import {useState, useRef, useEffect, ReactNode} from "react";

import SkillsItem from "../Skills/SkillsItem";
import skillCategory from "../../utils/skillCategory";
import highlightSkillsInText from "../Utilities/HighlightSkillsInText";

type ProjectItemProps = {
    id: string;
    image?: ReactNode;
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

export default function ProjectItem({id, image, name, description1, description2, description3, description4, skills, githubLink, demoLink, selectedSkills}: ProjectItemProps){
    
    const [isOpen, setIsOpen] = useState(false);
    const [parentWidth, setParentWidth] = useState(0);
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current){
            setParentWidth(parentRef.current.offsetWidth);
        }
    }, []);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

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

    function availableGithubLink(){
        if (!githubLink) return null;
        return (
            <a href={`${githubLink}`} target = "_blank"   rel="noopener noreferrer" className = "hover:text-[#1E90FF]">
                <div className="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className = "p-2 bg-white dark:bg-[#171718] rounded-xl fill-current text-[#1E90FF] h-8 w-8">
                        <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                    </svg>
                    <span className="w-fit whitespace-nowrap bg-white dark:bg-[#171718] p-1 px-2 rounded-2xl absolute hidden group-hover:block -translate-y-16">
                        GitHub Repo
                    </span>
                </div>
            </a>
        );
    }
    function availableDemoLink(){
        if (!demoLink) return null;
        return (
            <a href={`${demoLink}`} target = "_blank"   rel="noopener noreferrer" className = "hover:text-[#1E90FF]">
                <div className="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" className="p-1 bg-white dark:bg-[#171718] rounded-xl fill-current text-[#1E90FF] h-8 w-8">
                        <path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z"/>
                    </svg>
                    <span className="w-fit whitespace-nowrap bg-white dark:bg-[#171718] p-1 px-2 rounded-2xl absolute hidden group-hover:block -translate-y-16">
                        Live Demo
                    </span>
                </div>
            </a>
        );
    }



    return(
        <div ref={parentRef} onClick={toggleDropdown} id={id} className = "w-80 flex-col cursor-pointer my-3 p-2 text-black bg-white dark:text-white dark:bg-[#131213] border-2 border-[#1E90FF]/20 rounded-xl" >
            <div className = "flex flex-col justify-between items-center">
                <div className = "flex-shrink-0 w-60 h-40 ml-1 mr-3 my-2">
                    {image}
                </div>
                <div className="flex items-center adjust-center">
                    <div className = "flex flex-col">
                        <p className = "font-medium text-center">{name}</p>
                    </div>
                </div>
                <div className="border-2 border-[#1E90FF]/20 rounded-xl py-1 px-2 flex space-x-10 my-2 px-10"> 
                    <div>
                        {availableGithubLink()}
                    </div>
                    <div> 
                        {availableDemoLink()}
                    </div>
                    <div className = "relative group flex justify-end items-center text-[#1E90FF] bg-white dark:bg-[#171718] rounded-xl p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className = {`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                        <span className="w-fit whitespace-nowrap bg-white dark:bg-[#171718] p-1 px-2 rounded-2xl absolute hidden group-hover:block -translate-y-8 translate-x-18">
                            More Details
                        </span>
                    </div>
                </div>
            </div>
            {!isOpen&&(
                <div className="flex flex-wrap justify-center">
                    {createSkillBubbles()}
                </div>
            )}
            {isOpen && (
                <div className = "px-2 pr-4 py-3" style = {{width: parentWidth}}>
                    <p className="pb-1 mr-1">{highlightSkillsInText(description1)}</p>
                    <p className="pb-1 mr-1">{highlightSkillsInText(description2)}</p>
                    <p className="pb-1 mr-1">{highlightSkillsInText(description3)}</p>
                    <p className="mr-1">{highlightSkillsInText(description4)}</p>
                </div>
            )}
            
        </div>
    );
}