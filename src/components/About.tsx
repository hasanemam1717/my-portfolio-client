"use client";

import Image from "next/image";
import skill from "../assets/skill.png";
import note from "../assets/notebook.png";
import computer from "../assets/computer.png";
import experience from "../assets/Expreriance.png";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center max-w-xl mx-auto font-semibold p-4 mb-4">
        About <span className="text-white/80">Me</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-6 place-items-center">
        {/* Education Card */}
        <div className="w-full sm:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#c084fc] opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row gap-5 items-center p-5">
            <Image src={note} alt="Skill" className="w-auto h-[120px]" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl text-white font-bold">Education</h1>
              <h1 className="text-lg text-white/70 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>

        {/* Problem Solving Card */}
        <div className="w-full sm:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#64748b] to-[#adbfd6] opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row gap-5 items-center p-5">
            <Image src={computer} alt="Skill" className="w-auto h-[120px]" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl text-white font-bold">Problem Solving</h1>
              <h1 className="text-lg text-white/70 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="w-full sm:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#64748b] to-[#adbfd6] opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row gap-5 items-center p-5">
            <Image src={experience} alt="Skill" className="w-auto h-[120px]" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl text-white font-bold">Experience</h1>
              <h1 className="text-lg text-white/70 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="w-full sm:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#c084fc] opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row gap-5 items-center p-5">
            <Image src={skill} alt="Skill" className="w-auto h-[120px]" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl text-white font-bold">
                Technical Skills
              </h1>
              <h1 className="text-lg text-white/70 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
