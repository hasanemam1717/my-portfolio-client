"use client";

import Image from "next/image";
import skill from "../assets/skill.png";
import note from "../assets/notebook.png";
import computer from "../assets/computer.png";
import experience from "../assets/Expreriance.png";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-12">
        About <span className="text-white/70">Me</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Education Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 opacity-30 animate-gradient-xy"></div>
          <div className="relative flex flex-col items-center text-center p-6">
            <Image src={note} alt="Education" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="text-base text-white/70 mt-3 leading-relaxed">
              BBA Honours, Department of Marketing, Bogura Azizul Haque College.
              HSC, Ahmed Uddin Shah Shishu Niketan School and College.
            </p>
          </div>
        </div>

        {/* Problem Solving Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-500 to-slate-300 opacity-30 animate-gradient-xy"></div>
          <div className="relative flex flex-col items-center text-center p-6">
            <Image src={computer} alt="Problem Solving" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold text-white">Problem Solving</h2>
            <p className="text-base text-white/70 mt-3 leading-relaxed">
              Ability to identify, analyze, and resolve challenges effectively
              with critical thinking, creativity, and persistence.
            </p>
          </div>
        </div>

        {/* Experience Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-500 to-slate-300 opacity-30 animate-gradient-xy"></div>
          <div className="relative flex flex-col items-center text-center p-6">
            <Image src={experience} alt="Experience" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold text-white">Experience</h2>
            <p className="text-base text-white/70 mt-3 leading-relaxed">
              Full-Stack Web Developer skilled in React, Next.js, and Node.js.
              Experienced in building scalable apps, optimizing performance, and
              collaborating with cross-functional teams.
            </p>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-3">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 opacity-30 animate-gradient-xy"></div>
          <div className="relative flex flex-col items-center text-center p-6">
            <Image src={skill} alt="Technical Skills" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            <p className="text-base text-white/70 mt-3 leading-relaxed">
              Proficient in React, Next.js, Node.js, Express.js, MongoDB,
              TypeScript, Tailwind CSS, JavaScript, HTML, and CSS. Experienced
              in REST APIs, Git, Firebase, GraphQL, and Docker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
