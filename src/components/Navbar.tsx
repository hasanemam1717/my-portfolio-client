"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-bold text-white">Portfolio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href
                    ? "text-white font-bold"
                    : "text-gray-700 hover:text-white transition-colors duration-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/blog/create"
              className="px-4 py-2 text-white  rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              Post Blog
            </Link>{" "}
            <Link
              href="/resume"
              className="px-4 py-2 text-white  rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-white font-bold"
                      : "text-gray-700 hover:text-white transition-colors duration-200"
                  }`}
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/blog/create"
                className="px-4 py-2  text-white rounded-full hover:bg-white/20 transition-colors duration-200 "
                onClick={toggleMenu}
              >
                Post Blog
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 text-white  rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
