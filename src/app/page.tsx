import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#09041c]">
      <Hero></Hero>
      <About></About>
      <ProjectCard></ProjectCard>
    </div>
  );
}
