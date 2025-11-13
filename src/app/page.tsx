import Image from "next/image";

import ProfileCard from "../components/Profile/ProfileCard";
import ExperienceCard from "../components/Experience/ExperienceCard";
import SkillsCard from "../components/Skills/SkillsCard"

export default function Home() {

  return (
    <div>
      <div className = "flex flex-wrap justify-center align-items">
        <div className="flex flex-col">
          <ProfileCard/>
          <div className="hidden [@media(min-width:1119px)]:block">
            <ExperienceCard/>
          </div>
        </div>
        <SkillsCard/>
      </div>
    </div>
  );
}
