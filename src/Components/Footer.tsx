import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#0A1A2F] text-center flex flex-col items-center gap-4">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} Sagar Pandey. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="https://github.com/SAGARinCS" target="_blank" rel="noopener noreferrer" className="text-[#00ADB5] hover:text-white transition">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-[#00ADB5] hover:text-white transition">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
