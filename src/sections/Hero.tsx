
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const roles = [
  "Frontend Developer",
  "UI Enthusiast",
  "Problem Solver",
  "Tech Explorer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // change role every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0b1221] text-white text-center px-6 overflow-hidden"
    >
      {/* Name */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-[#00ADB5]">Sagar Pandey</span>
      </motion.h1>

      {/* Animated Role */}
      <motion.div className="text-2xl sm:text-3xl text-[#00ADB5] mb-6 font-semibold min-h-[40px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            {roles[currentRole]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-xl text-gray-400 mb-8 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I craft modern, responsive, and engaging web interfaces using React,
        Next.js, and TypeScript — combining design precision with functional
        excellence to create smooth user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-[#00ADB5] text-white font-medium hover:bg-[#00cbd2] transition-all duration-300 shadow-md hover:shadow-[#00ADB5]/40"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-[#00ADB5] text-[#00ADB5] font-medium hover:bg-[#00ADB5]/10 transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Subtle glow background */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-[#00ADB5]/10 rounded-full blur-3xl top-1/2 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 text-[#00ADB5] cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#tech" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
