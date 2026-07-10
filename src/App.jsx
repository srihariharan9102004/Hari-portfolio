// ======================================================
// ================  IMPORTS & CONFIG  ==================
// ======================================================
import React, { useState, useEffect, useRef  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Achievement from "./components/Achievement/Achievement";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";


const RESUME_URL = "/resume/Srihariresume.pdf";

// ======================== APP ==========================
// ======================================================
export default function App() {
  const [dark, setDark] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  // ================== DARK MODE ===================
  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // ================== SCROLL REVEAL ===================
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-active");
        });
      },
      { threshold: 0.18 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

return (
  <>
    {/* Portfolio always exists */}
    <Navbar dark={dark} setDark={setDark} />

    <Hero />
    <About />
    <main className="portfolio-container m-5">
  
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievement />
      <Contact />
      <Footer />
    </main>

    {/* Welcome overlay sits above everything */}
    {showWelcome && (
      <Welcome onFinish={() => setShowWelcome(false)} />
    )}
  </>
);
}
