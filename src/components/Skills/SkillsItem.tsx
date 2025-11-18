"use client";
import { ReactNode } from "react";
import skillCategories from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";
import skillCategory from "../../utils/skillCategory";

type SkillsItemProps = {
    logo?: ReactNode;
    name: string;
    version?: string; 
    isHighlighted?: boolean;
}

export default function SkillsItem({logo, name, version, isHighlighted}: SkillsItemProps){
    return(
        <div className={`
            flex justify-between items-center inline-block p-1 px-3 my-2 mx-2
            font-semibold rounded-2xl 
            ${SkillCategoryColor(skillCategory(name)).text} ${SkillCategoryColor(skillCategory(name)).bg}
            ${
                isHighlighted
                    ? `border-1 border-${SkillCategoryColor(skillCategory(name))}`
                    : "border-transparent"
            }`}
        >
            <div>
                {logo}
            </div>
            <div>
                <p> {name} </p>
            </div>
        </div>
    );
}