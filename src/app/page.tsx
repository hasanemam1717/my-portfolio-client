import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsBar from "@/components/ProjectsBar";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <ProjectsBar></ProjectsBar>
      <SkillsCard></SkillsCard>
      <Contact></Contact>
    </div>
  );
}
