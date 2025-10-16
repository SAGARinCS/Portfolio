import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";

import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-inter">
      <Navbar />
      <main>
        <Hero />
       
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
