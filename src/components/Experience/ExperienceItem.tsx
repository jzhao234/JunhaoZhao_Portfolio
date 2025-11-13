"use client";
import {useState, useRef, useEffect, ReactNode} from "react";

import SkillsItem from "../Skills/SkillsItem";

type ExperienceItemProps = {
    logo: ReactNode;
    title: string;
    location: string;
    date: string;
    description1?: React.ReactNode; 
    description2?: React.ReactNode; 
    description3?: React.ReactNode;
    description4?: React.ReactNode;
    // skills used
    [key: string]: any;
}

export default function ExperienceItem({logo, title, location, date, description1, description2, description3, description4, ...rest}: ExperienceItemProps){
    
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

    const entries = Object.values(rest)
    const skills = entries.filter((_, i) => i % 2 === 0);
    const sections = entries.filter((_, i) => i % 2 !== 0);
    function printSkills () {
        return skills.map((skill, i) => (
            <SkillsItem
            key={i}
            name={skill}
            section={sections[i]}
            />
        ));
    }



    return(
        <div ref={parentRef} onClick={toggleDropdown} className = "flex-col cursor-pointer m-2 p-2 text-black bg-white dark:text-white dark:bg-[#131213] border-2 border-[#1E90FF]/20 rounded-xl" >
            <div className = "flex justify-between items-center space-x-8">
                <div className = "flex items-center space-x-2 px-1">
                    <div className = "w-10 h-10 mr-3">
                        {logo}
                    </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-col">
                    <div>
                        <p className = "font-medium">{title}</p>
                    </div>
                    <div>
                        <p className = "font-thin">{location}</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className = "flex flex-col">
                    <div className = "pr-1">
                        <p className = "flex justify-end font-light">{date}</p>
                    </div>
                    <div className = "flex justify-end text-[#1E90FF]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className = {`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            {!isOpen&&(
                <div className="ml-14">
                    {printSkills()}
                </div>
            )}
            {isOpen && (
                <div className = "pl-14 pr-3 py-5" style = {{width: parentWidth}}>
                    <div>
                        <p>{description1}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                        <p>{description4}</p>
                    </div>
                </div>
            )}
            
        </div>
    );
}