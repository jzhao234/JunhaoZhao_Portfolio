"use client";

import Image from "next/image";
import EducationItem from "./EducationItem"

export default function EducationCard(){
    return(
        <div className = "max-w-100 m-10 p-3 border-2 border-[#1E90FF]/20 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <div>
              <h1 className = "text-2xl font-bold my-2"> Education </h1>
            </div>
            <EducationItem
                logo = {<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple" width={50} height={50} />}
                name = "Temple University"
                location = "Philadelphia, PA"
                date = "2022-Current"
                title = "Computer Science Bachelor's of Science"
                classTitle = "Related Course Work"
                class1 = "- Programming in C"
                class2 = "- Program Design and Abstraction"
                class3 = "- Discrete Math II"
                class4 = "- Computational Probability and Statistics"
                class5 = "- Computer Systems and Low-Level Programming"
                class6 = "- Data Structures"
                class7 = "- Systems Programming and Operating Systems"
                class8 = "- Data Structures and Algorithms"
                class9 = "- Software Design"
                class10 = "- Calculus II"
                class11 = "- Information Visualization"
                class12 = "- User Experience Design"
                class13 = "- Interpersonal Communciation"
            />
            <EducationItem
                logo = {<Image src = "/logo/CentralHS.gif" alt = "Central" width={50} height={50}/>}
                name = "Central Highschool"
                location = "Philadelphia, PA"
                date = "2018-2022"
                title = "Highschool Diploma"
          />
        </div>
    );
}