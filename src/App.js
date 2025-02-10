import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import { InView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="App">
      {/* Particles JS */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Additional Sections with Scroll Animations */}
      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <About />
          </motion.div>
        )}
      </InView>

      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Skills />
          </motion.div>
        )}
      </InView>

      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Resume />
          </motion.div>
        )}
      </InView>

      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Contact />
          </motion.div>
        )}
      </InView>
    </div>
  );
}

export default App;