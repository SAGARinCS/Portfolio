
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Social-Hub",
    desc: "A frontend-only social media app developed to enhance user experience.",
    tech: ["React", "TypeScript", "LocalStorage", "Vercel"],
    codeUrl: "https://github.com/SAGARinCS/SOCIAL-MEDIA-APP",
    liveUrl: "https://social-media-new-app.vercel.app",
  },
  {
    title: "Notepad & Note Taker",
    desc: "A minimal, modern note-taking app with persistent local storage and an elegant UI — made for productivity lovers.",
    tech: ["React", "TypeScript", "LocalStorage", "Vercel"],
    codeUrl: "https://github.com/SAGARinCS/Notepad",
    liveUrl: "https://notemakerandtaker.vercel.app",
  },
  {
    title:"Fushion-Fashion",
desc:"A complete e-commerce store.",
tech:['React',"typescript","tailwind"],
codeUrl:"https://github.com/SAGARinCS/Fusion-Fashion",
liveUrl:"fusion-fashion-one.vercel.app",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0F172A] flex flex-col items-center py-20 px-6 overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#00ADB5] mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>

      {/* Horizontal scroll section */}
      <div className="flex gap-8 overflow-x-auto pb-6 max-w-7xl w-full px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#00ADB5]/40 scrollbar-track-transparent">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="min-w-[320px] md:min-w-[380px] bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-[#00ADB5]/30 duration-300 relative snap-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Gradient hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#00ADB5]/10 to-transparent opacity-0 hover:opacity-100 rounded-2xl transition-all duration-500"
              initial={{ opacity: 0 }}
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 text-[#00ADB5] relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed relative z-10">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#00ADB5]/20 text-[#00ADB5] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto relative z-10">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00ADB5] hover:text-white transition"
                >
                  <FaGithub size={20} /> <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00ADB5] hover:text-white transition"
                >
                  <FaExternalLinkAlt size={20} /> <span>Live</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

