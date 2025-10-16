import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const TechStack: React.FC = () => {
  const techs = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section
      id="tech"
      className="py-20 px-6 bg-[#0b1221] text-center relative overflow-hidden"
    >
      {/* Glowing background orbs for ambience */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00ADB5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00FFD1]/10 rounded-full blur-3xl" />

      <motion.h3
        className="text-3xl md:text-4xl font-bold text-[#00ADB5] mb-12 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto relative z-10">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(0, 173, 181, 0.4)",
            }}
            className="relative flex flex-col items-center bg-white/5 rounded-2xl p-6 w-32 h-32 justify-center border border-white/10 shadow-lg transition-all duration-300 group"
          >
            {/* Glowing ring animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ADB5]/30 via-[#00FFD1]/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

            <div className="text-5xl text-[#00ADB5] mb-3 relative z-10 drop-shadow-[0_0_10px_#00adb566] group-hover:text-[#00FFD1] transition-all duration-300">
              {t.icon}
            </div>
            <p className="text-sm text-gray-300 font-medium relative z-10">
              {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
