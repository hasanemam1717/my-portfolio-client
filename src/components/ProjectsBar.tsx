"use client";
import Image from "next/image";
import carProject from "../assets/car.png";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectsBar = () => {
  const projects = [
    {
      title: "E-commerce Digital Products",
      description: "A robust e-commerce platform for selling digital products.",
      src: carProject,
      link: "https://car-store-client-seven.vercel.app",
      gitLink: "#",
      devStack: "MongoDB, Express.js, React.js, Node.js, Next.js",
    },
    {
      title: "E-learning Platform",
      description: "An interactive platform for online education.",
      src: carProject,
      link: "https://car-store-client-seven.vercel.app",
      gitLink: "#",
      devStack: "MongoDB, Express.js, React.js, Node.js, Next.js",
    },
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio showcase.",
      src: carProject,
      link: "https://car-store-client-seven.vercel.app",
      gitLink: "#",
      devStack: "MongoDB, Express.js, React.js, Node.js, Next.js",
    },
  ];

  return (
    <div className="my-20 py-18 text-white">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center max-w-xl mx-auto font-semibold p-4 my-6 md:my-12">
        Selected <span className="text-white/80">Projects</span>
      </h1>
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className={`flex flex-col md:flex-row gap-8 lg:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 space-y-4 border border-gray-100/30 p-6 lg:p-8 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <h1 className="text-3xl font-semibold">{project.title}</h1>
              <p className="text-gray-300">{project.description}</p>
              <p className="text-gray-400 font-medium">
                Tech Stack: {project.devStack}
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href={project.gitLink}
                  className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href={project.link}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Live Demo
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 flex justify-center items-center"
            >
              <Image
                src={project.src}
                width={500}
                height={350}
                className="rounded-lg shadow-lg w-full h-auto max-w-full"
                alt={project.title}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsBar;
