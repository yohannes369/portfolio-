import React, { useEffect, useRef } from "react";

import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

import "./App.scss"; // Import the SCSS file for styling
import Footer from "./footer"
import { footer } from "framer-motion/client";
function App() {
  // Initialize particles
  const handleInit = async (main) => {
    await loadFull(main);
  };

  // References for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef =useRef(null)

  // Smooth scroll to the target section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Particles background for home section */}


      {/* Navbar with scroll-based navigation */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Main Content */}
      <div className="App__main-page-content">
        {/* Home Section */}
        <section ref={homeRef} id="home" className="section">
          <Home />
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="section">
          <About />
        </section>

        {/* Resume Section */}
        <section ref={resumeRef} id="resume" className="section">
          <Resume />
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="section">
          <Skills />
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="section">
          <Contact />
        </section>
            {/* About Section */}
            <section ref={footerRef} id="footer" className="section">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;