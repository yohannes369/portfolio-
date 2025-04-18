import React, { useEffect, useRef, useState } from "react";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import Footer from "./footer";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingState, setLoadingState] = useState({
    progress: 0,
    message: "Initializing..."
  });

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
    footer: useRef(null)
  };

  useEffect(() => {
    const loadingStages = [
      { progress: 10, message: "Loading assets..." },
      { progress: 30, message: "Processing data..." },
      { progress: 60, message: "Rendering components..." },
      { progress: 85, message: "Finalizing..." },
      { progress: 100, message: "Ready!" }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        setLoadingState(loadingStages[currentStage]);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-container">
            <div className="loading-animation">
              <div className="loading-spinner"></div>
              <div className="loading-progress-bar">
                <div 
                  className="loading-progress-fill" 
                  style={{ width: `${loadingState.progress}%` }}
                ></div>
              </div>
              <div className="loading-details">
                <div className="loading-percentage">{loadingState.progress}%</div>
                <div className="loading-message">{loadingState.message}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`App ${isLoading ? 'app-loading' : ''}`}>
        {/* <Particles id="particles" options={particles} init={handleInit} /> */}
        
        <Navbar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />

        <div className="App__main-page-content">
          <section ref={sectionRefs.home} id="home" className="section">
            <Home />
          </section>
          <section ref={sectionRefs.about} id="about" className="section">
            <About />
          </section>
          <section ref={sectionRefs.resume} id="resume" className="section">
            <Resume />
          </section>
          <section ref={sectionRefs.skills} id="skills" className="section">
            <Skills />
          </section>
          <section ref={sectionRefs.contact} id="contact" className="section">
            <Contact />
          </section>
          <section ref={sectionRefs.footer} id="footer" className="section">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;