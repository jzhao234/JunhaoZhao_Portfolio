import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import SkillsCard from "../components/Skills/SkillsCard";
import EducationCard from "../components/Education/EducationCard";
import HighlightsCard from "../components/Highlights/HighlightsCard"

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col min-w-94 sm:min-w-156 max-w-fit lg:max-w-175 flex-1">
          <ProfileCard/>
        </div>
        <div className="flex flex-col min-w-90 max-w-fit lg:max-w-130 flex-1">
          <SkillsCard/>
          <EducationCard/>
        </div>
      </div>
    </div>
  );
}
