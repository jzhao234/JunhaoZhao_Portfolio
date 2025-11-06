import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import ExperienceCard from "../components/Experience/ExperienceCard";
import SkillsCard from "../components/Skills/SkillsCard"

export default function Home() {

  return (
    <div>

      <div className = "flex flex-wrap justify-center">
        {/* ME */}
        <div className = "flex-col">
          {/* Box 1 Profile */}
          <ProfileCard/>
          {/* Experiences Start*/}
          <ExperienceCard/>
          {/* Experiences End */}
        </div>
        
        <div className = "flex-col">
          {/* Tech Stack Start*/}
          <SkillsCard/>
          {/* Tech Stack End*/}

          {/* Education */}
          
          
          {/* Certificates */}
          <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <div>
              <h2> Certificates </h2>
              <p>n/a</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
