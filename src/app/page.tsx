import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import SkillsCard from "../components/Skills/SkillsCard";
import EducationCard from "../components/Education/EducationCard";
import HighlightsCard from "../components/Highlights/HighlightsCard"

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col min-w-94 sm:min-w-156 max-w-full md:max-w-175 flex-1">
          <div>
            <ProfileCard/>
          </div>
          <div className="block md:hidden"> 
            <SkillsCard/>
          </div>
          <div className="hidden md:block"> 
            <HighlightsCard/>
          </div>
        </div>
        <div className="flex flex-col min-w-90 max-w-full md:max-w-130 flex-1">
          <div className="min-w-0 hidden md:block"> 
            <SkillsCard/>
          </div>
          <div className="min-w-0 block md:hidden"> 
            <HighlightsCard/>
          </div>
          <div className="min-w-0 ">
            <EducationCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
