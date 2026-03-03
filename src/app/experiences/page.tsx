import type { Metadata } from "next";

import ExperienceCard from "../../components/Experience/ExperienceCard"

export const metadata: Metadata = {
  title: "Experiences",
  description: "Experience History: Fox Chase Cancer Center, Temple University, ITD-GBS",
};

export default function ExperiencePage() {
  return(
    <ExperienceCard/>
  )
}