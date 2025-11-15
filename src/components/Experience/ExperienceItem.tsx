"use client";
import {useState, useRef, useEffect, ReactNode} from "react";

import SkillsItem from "../Skills/SkillsItem";
import Link from "next/link";

type ExperienceItemProps = {
    logo: ReactNode;
    title: string;
    location: string;
    date: string;
    description1?: React.ReactNode; 
    description2?: React.ReactNode; 
    description3?: React.ReactNode;
    description4?: React.ReactNode;
    skills?: string[];
    sections?: string[];
    link?: string;
}

export default function ExperienceItem({logo, title, location, date, description1, description2, description3, description4, skills, sections, link}: ExperienceItemProps){
    
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
        if (!skills || !sections) return null;
        return skills.map((skill, i) => (
            <SkillsItem
            key={i}
            name={skill}
            section={sections[i]}
            />
        ));
    }

    function projectLink () {
        if (!link) return null;
        return(
            <Link href={link} className="cursor-pointer text-[#1E90FF]"> Project Link </Link>
        );
    }


    return(
        <div ref={parentRef} className = "flex-col my-3 p-1 text-black bg-white dark:text-white dark:bg-[#131213] border-2 border-[#1E90FF]/20 rounded-xl" >
            <div className = "flex justify-between items-center">
                <div className = "flex items-center pr-2 sm:pr-4">
                    <div className = "flex-shrink-0 w-10 h-10 ml-1 mr-3">
                        {logo}
                    </div>
                    <div className = "flex flex-col">
                        <div>
                            <p className = "font-medium">{title}</p>
                        </div>
                        <div>
                            <p className = "text-sm font-thin">{location}</p>
                        </div>
                    </div>
                </div>
                <div className = "flex flex-col">
                    <div className = "pr-1">
                        <p className = "flex justify-end mt-3 text-sm hidden sm:block font-thin">{date}</p>
                    </div>
                    <div onClick={toggleDropdown} className = "cursor-pointer srelative group flex justify-end items-center text-[#1E90FF]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor" className = {`bg-white dark:bg-[#171718] rounded-xl p-1/2 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                        <span className="w-fit whitespace-nowrap bg-white dark:bg-[#171718] p-1 px-2 rounded-2xl absolute hidden group-hover:block -translate-y-8 translate-x-18">
                            More Details
                        </span>
                    </div>
                </div>
            </div>
            {!isOpen&&(
                <div className="sm:ml-14 flex flex-wrap justify-center items-center">
                    {createSkillBubbles()}
                </div>
            )}
            {isOpen && (
                <div className = "px-2 sm:pl-14 pr-3 py-3" style = {{width: parentWidth}}>
                    {projectLink()}
                    <p className="pb-1 mr-1">{description1}</p>
                    <p className="pb-1 mr-1">{description2}</p>
                    <p className="pb-1 mr-1">{description3}</p>
                    <p className="mr-1">{description4}</p>
                </div>
            )}
            
        </div>
    );
}