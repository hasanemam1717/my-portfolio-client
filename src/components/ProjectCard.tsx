"use client";
import Image from "next/image";
import carProject from "../assets/car.png";
import Link from "next/link";

const ProjectCard = () => {
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
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 lg:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-4 border border-gray-100/30 p-4 lg:p-6 rounded-md">
              <h1 className="text-3xl font-semibold">{project.title}</h1>
              <p className="text-gray-300">{project.description}</p>
              <p className="text-gray-400 font-medium">
                Tech Stack: {project.devStack}
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href={project.gitLink}
                  className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                >
                  GitHub
                </Link>
                <Link
                  href={project.link}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Live Demo
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={project.src}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
