"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import tagImg from "../assets/Adobe Express - file (1).png";
import htmlImg from "../assets/Adobe Express - file (2).png";
import dp from "../assets/Adobe Express - file.png";

const Hero = () => {
  return (
    <div>
      <div className="relative mt-4 overflow-clip bg-gradient-to-b from-[#000000] to-[#040f4a] w-full">
        <div className="absolute rounded-[55%] bg-gradient-to-b from-[#000000] to-[#151519] w-[3000px] top-[500px] left-[50%] h-[1300px] -translate-x-1/2"></div>
        <div className="relative">
          <div className="text-4xl  md:text-8xl font-bold text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I am
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hasan Emam
            </motion.h1>
          </div>
          <motion.div
            className="absolute left-1/4 top-1/3"
            drag
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={tagImg}
              width="190"
              height="190"
              alt="tagImg"
              draggable="false"
            />
          </motion.div>
          <motion.div
            className="absolute right-48 top-8"
            drag
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={htmlImg}
              width="140"
              height="140"
              alt="htmlImag"
              draggable="false"
            />
          </motion.div>
          <motion.p
            className="text-center max-w-lg mx-auto mt-8 text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I specialize in building scalable, high-performance web applications
            using modern technologies. With expertise in both frontend and
            backend development, I create seamless user experiences and robust
            backend systems that power dynamic applications.
          </motion.p>
          <motion.div
            className="h-auto w-auto mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image src={dp} alt="Profile Image" className="mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
