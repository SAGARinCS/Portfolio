import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-[#0F172A]/60 border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="text-[#00ADB5] font-bold text-lg">SAGAR</a>

          <ul className="hidden md:flex gap-6 items-center">
            {links.map((l) => (
              <li key={l.name}>
                <a className="text-gray-300 hover:text-[#00FFD1] transition" href={l.href}>
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="ml-4 px-3 py-1 rounded-full border border-[#00ADB5]/50 text-[#00ADB5] hover:bg-[#00ADB5] hover:text-black transition text-sm"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={() => setOpen((s) => !s)} className="text-gray-300">
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-white/5 bg-[#0F172A]">
            <div className="flex flex-col items-center py-4 gap-3">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-[#00FFD1] transition"
                >
                  {l.name}
                </a>
              ))}
              <a href="/resume.pdf" className="mt-2 px-4 py-2 rounded-full border border-[#00ADB5]/50 text-[#00ADB5] hover:bg-[#00ADB5] hover:text-black transition text-sm">Resume</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
