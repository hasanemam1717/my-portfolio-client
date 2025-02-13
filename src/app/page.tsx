import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <ProjectCard></ProjectCard>
      <SkillsCard></SkillsCard>
      <Contact></Contact>
    </div>
  );
}
