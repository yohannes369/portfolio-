import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";

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

  // Smooth scroll to the target section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Inline styles
  const appStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflowX: "hidden",
    backgroundColor: "#f4f4f4",
  };

  const navbarStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "#333",
    color: "#fff",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const navListStyles = {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  };

  const navItemStyles = {
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  };

  const mainContentStyles = {
    marginTop: "60px", // Account for the fixed navbar height
    paddingBottom: "20px",
  };

  const sectionStyles = {
    boxSizing: "border-box",
    padding: "5rem 2rem",
    minHeight: "calc(100vh - 60px)", // Full viewport height minus navbar height
    scrollMarginTop: "60px", // Prevent overlap with the fixed navbar
    borderBottom: "1px solid #ddd",
    lastChild: {
      borderBottom: "none",
    },
  };

  return (
    <div style={appStyles}>
      {/* Particles background for home section */}
      <Particles id="particles" options={particles} init={handleInit} />

      {/* Navbar with scroll-based navigation */}
      <nav style={navbarStyles}>
        <ul style={navListStyles}>
          <li
            style={navItemStyles}
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </li>
          <li
            style={navItemStyles}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            style={navItemStyles}
            onClick={() => scrollToSection(resumeRef)}
          >
            Resume
          </li>
          <li
            style={navItemStyles}
            onClick={() => scrollToSection(skillsRef)}
          >
            Skills
          </li>
          <li
            style={navItemStyles}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={mainContentStyles}>
        {/* Home Section */}
        <section ref={homeRef} id="home" style={sectionStyles}>
          <Home />
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" style={sectionStyles}>
          <About />
        </section>

        {/* Resume Section */}
        <section ref={resumeRef} id="resume" style={sectionStyles}>
          <Resume />
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" style={sectionStyles}>
          <Skills />
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" style={sectionStyles}>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;