import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import SkillsCard from "../components/Skills/SkillsCard";
import EducationCard from "../components/Education/EducationCard";
import HighlightsCard from "../components/Highlights/HighlightsCard"

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col max-w-200">
          <ProfileCard/>
        </div>
        <div className="flex flex-col min-w-90 max-w-150 sm:max-w-100 flex-1">
          <SkillsCard/>
          <EducationCard/>
        </div>
      </div>
    </div>
  );
}
