import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import SkillsCard from "../components/Skills/SkillsCard";
import EducationCard from "../components/Education/EducationCard";
import HighlightsCard from "../components/Highlights/HighlightsCard"

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col">
          <ProfileCard/>
          <HighlightsCard/>
        </div>
        <div className="flex flex-col">
          <SkillsCard/>
          <EducationCard/>
        </div>
      </div>
    </div>
  );
}
