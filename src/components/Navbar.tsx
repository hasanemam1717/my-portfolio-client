"use client";

import Link from "next/link";
import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";

const navlinks = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="relative z-10">
      {/* Dropdown Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
      >
        <FaUser className="text-white" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
          >
            {/* User Profile Option */}
            <button
              onClick={() => {
                console.log("User Profile Clicked");
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FaUser className="text-gray-500 dark:text-gray-400" />
              <span>Profile</span>
            </button>

            {/* Theme Toggle Option */}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-500 dark:text-gray-400" />
              )}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNavbar = () => {
    setNav(!nav);
  };
  const closeNavbar = () => {
    setNav(false);
  };
  const menuVariant = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center mx-5 text-white font-semibold">
        <ul className="flex p-4 text-xl flex-row space-x-8 items-center">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link href={navlink.path}>{navlink.title}</Link>
            </li>
          ))}
          <li>
            <Link href={"/contact"}>
              <h1 className="text-lg cursor-pointer">Contact Me</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute mt-1 w-1/3 h-1 transition-all ease-out bg-orange-700 rounded-full group-hover:w-full"></div>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <Link href={"/"}>Hasan</Link>
          <Dropdown />
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div
        onClick={toggleNavbar}
        className="md:hidden absolute top-5 right-2 rounded border-white/70 p-1 z-50 text-white"
      >
        {nav ? <VscClose size={30} /> : <CgMenuMotion size={30} />}
      </div>
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariant}
        className="fixed left-0 top-0 w-full h-screen z-40 bg-black/80"
      >
        <ul className="text-2xl text-center mt-20 flex flex-col space-y-4">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                className="text-white"
                href={navlink.path}
                onClick={closeNavbar}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
          <li>
            <Link className="text-white" href="/contact" onClick={closeNavbar}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/" onClick={closeNavbar}>
              Hasan
            </Link>
          </li>
          {/* Dropdown in Mobile Menu */}
          <li className="flex justify-center">
            <Dropdown />
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
