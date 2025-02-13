"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-bold">Hasan Emam</h1>
            <p className="text-sm text-white/80">
              Light fire in the minds of men 🎆
            </p>
            <p className="text-xs text-white font-thin">Design By Emam</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-6 text-gray-300">
            {/* Home Link */}
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            {/* Projects Link */}
            <li>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>

            {/* Skills Link */}
            <li>
              <Link href="/skills" className="hover:text-white">
                Skills
              </Link>
            </li>

            {/* Contact Link */}
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {/* Facebook Icon */}
            <a href="#" className="text-white/80 hover:text-white text-2xl">
              <FaFacebook />
            </a>

            {/* GitHub Icon */}
            <a href="#" className="text-white/80 hover:text-white text-2xl">
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a href="#" className="text-white/80 hover:text-white text-2xl">
              <FaLinkedin />
            </a>

            {/* Twitter Icon */}
            <a href="#" className="text-white/80 hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
