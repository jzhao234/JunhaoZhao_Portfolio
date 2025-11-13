import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import SkillsCard from "../components/Skills/SkillsCard";
import EducationCard from "../components/Education/EducationCard";

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col">
          <ProfileCard/>
          <div className="hidden [@media(min-width:1119px)]:block">
            <EducationCard/>
          </div>
        </div>
        <SkillsCard/>
      </div>
    </div>
  );
}
