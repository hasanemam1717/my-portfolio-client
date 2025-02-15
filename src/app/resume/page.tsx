"use client"; // Ensure this is a Client Component
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  // Create a reference for the resume content
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle PDF download
  const handleDownload = useReactToPrint({
    // content: () => contentRef.current, // Pass the reference to the content
    documentTitle: "Hasan_Emam_Resume", // Name of the downloaded file
    onAfterPrint: () => alert("Resume downloaded successfully!"), // Success message
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Resume Content */}
      <div
        ref={contentRef} // Attach the reference to the resume content
        className="bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">Hasan Emam</h1>
          <p className="text-xl text-gray-600 mt-2">Full-Stack Web Developer</p>
          <div className="mt-4 space-x-4">
            <a
              href="mailto:hasan.emam@example.com"
              className="text-blue-600 hover:underline"
            >
              hasanimam0854@gmail.com
            </a>
            <span className="text-gray-700">|</span>
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              01717680772
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="www.linkedin.com/in/hasanemam"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://github.com/hasanemam1717"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </header>

        <hr className="border-gray-300" />

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800">Summary</h2>
          <p className="text-gray-700 mt-2">
            Passionate full-stack web developer with 3+ years of experience
            building scalable and user-friendly web applications. Proficient in
            React, Next.js, Node.js, and MongoDB. Strong problem-solving skills
            and a commitment to delivering high-quality code.
          </p>
        </section>

        <hr className="border-gray-300" />

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800">Experience</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl text-gray-900 font-semibold">
                Software Engineer - XYZ Corp.
              </h3>
              <p className="text-gray-600">Jan 2021 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Developed and maintained scalable web applications using React
                  and Node.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver projects
                  on time.
                </li>
                <li>
                  Optimized application performance, reducing load time by 30%.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-gray-900 font-semibold">
                Frontend Developer - ABC Ltd.
              </h3>
              <p className="text-gray-600">Jun 2019 - Dec 2020</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Built responsive user interfaces using React and Tailwind CSS.
                </li>
                <li>
                  Integrated RESTful APIs for seamless data exchange between
                  frontend and backend.
                </li>
                <li>
                  Improved user experience by implementing accessibility best
                  practices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Next.js
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Node.js
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              REST APIs
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Git
            </span>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800">Education</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Department of Marketing,BBA
            </h3>
            <p className="text-gray-600">
              Govt. Azizul Haque College, Bogura| Honers 1st Year : 2024-2025
            </p>
          </div>
        </section>
      </div>

      {/* Download Button */}
      <button
        onClick={() => handleDownload}
        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Resume;
