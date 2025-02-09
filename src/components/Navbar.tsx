"use client";

import Link from "next/link";
import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";

const navlinks = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

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
    <div className="p-2 ">
      <div className="hidden md:flex items-center mx-auto max-w-[450px]  text-white font-semibold">
        <ul className="flex mt-8 text-xl flex-row space-x-8 items-center justify-center">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link href={navlink.path}>{navlink.title} </Link>
            </li>
          ))}
          <li>
            <Link href={"/contact"}>
              <h1 className="text-lg cursor-pointer ">Contact Me</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute mt-1 w-1/3 h-1 transition-all ease-out bg-orange-700 rounded-full group-hover:w-full"></div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
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
        className="fixed left-0  top-0 w-full z-40 bg-black/80"
      >
        <ul className="text-2xl text-center mt-2 flex flex-col space-y-4">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                className="text-white "
                href={navlink.path}
                onClick={closeNavbar}
              >
                {" "}
                {navlink.title}{" "}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
