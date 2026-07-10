import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload} from "react-icons/fa";
// import "../../App.css";
const RESUME_URL = "/resume/Srihariharanresume.pdf";

function Hero() {
  return (
     <header id="Home" className="hero-section">
        <div className="hero-content reveal-left">
          <h1 className="hero-title">
            Hi, I'm 
          </h1>
          <h1><span className="highlight-name">Srihariharan</span></h1>

          <p className="hero-subtitle">
            Aspiring Java Full Stack Developer — React • Java • MySQL • DSA
          </p>

          <div className="hero-buttons">
            <a href="#Projects" aria-label="View my projects" className="btn hero-btn-1">See Projects</a>
           <a  href={RESUME_URL}  className="btn hero-btn-2" target="_blank"rel="noopener noreferrer">  <FaDownload className="resume-icon" />  View Resume</a>
          </div>
          <div className="hero-socials">

  <a
    href="https://github.com/srihariharan9102004"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/srihariharan-r-29264b282/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:srihariharan9102004@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

</div>
        </div>

        {/* Animated floating shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </header>
  );
}

export default Hero;
     
    