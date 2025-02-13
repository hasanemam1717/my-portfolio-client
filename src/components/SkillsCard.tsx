"use client";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { SiMongoose, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const SkillsCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const skillIcons = [
    { icon: <AiOutlineHtml5 size={140} />, label: "HTML" },
    { icon: <SiTailwindcss size={130} />, label: "Tailwind CSS" },
    { icon: <FaNodeJs size={140} />, label: "JavaScript" },
    { icon: <IoLogoReact size={140} />, label: "React" },
    { icon: <BiLogoRedux size={140} />, label: "Redux Toolkit" },
    { icon: <TbBrandNextjs size={140} />, label: "Next.js" },
    { icon: <SiMongodb size={140} />, label: "MongoDB" },
    { icon: <SiMongoose size={130} />, label: "Mongoose" },
    { icon: <TbBrandTypescript size={140} />, label: "TypeScript" },
  ];

  return (
    <div className="bg-gradient-to-b  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8"
        >
          What I Do
        </motion.h1>

        {/* Infinite Scrolling Wave Animation */}
        <div className="hidden lg:block overflow-hidden relative">
          <motion.div
            className="flex"
            animate={controls}
            initial={{ x: "0%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            onHoverStart={() => {
              setIsHovered(true);
              controls.stop(); // Stop scrolling when hovered
            }}
            onHoverEnd={() => {
              setIsHovered(false);
              controls.start({ x: ["0%", "-100%"] }); // Resume scrolling
            }}
          >
            {[...skillIcons, ...skillIcons].map((skill, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col justify-center items-center bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-colors mx-2"
                animate={{
                  y: [0, -20, 0], // Wave motion
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index % skillIcons.length) * 0.2,
                }}
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-8  px-3 py-2 bg-white/50 text-black rounded-md shadow-lg text-sm"
                  >
                    {skill.label}
                  </motion.div>
                )}
                <div className="text-white">{skill.icon}</div>
                <h1 className="text-lg sm:text-xl text-white mt-2">
                  {skill.label}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Grid layout for smaller devices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-4">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-center items-center bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-colors"
            >
              <div className="text-white">{skill.icon}</div>
              <h1 className="text-lg sm:text-xl text-white mt-2">
                {skill.label}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
