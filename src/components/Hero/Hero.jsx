import "./Hero.css";
import { scrollToSection } from "../../utils/scrollToSection";
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
            <a href="#Projects" aria-label="View my projects" className="btn hero-btn-1" onClick={(e) => { e.preventDefault(); scrollToSection("Projects"); }}>See Projects</a>
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

        {/* Decorative 3D coding scene — sits behind the content, never
            intercepts clicks, and is hidden from screen readers. */}
        <div className="hero-3d" aria-hidden="true">
          <div className="h3d-monitor">
            <div className="h3d-screen">
              <div className="h3d-bar">
                <i></i><i></i><i></i>
                <span>App.jsx</span>
              </div>
              <div className="h3d-code">
                <div className="ln" style={{ "--i": 0, "--w": "62%" }}><b className="k">const</b> <b className="f">App</b> <b className="o">=</b> <b className="o">() =&gt; {"{"}</b></div>
                <div className="ln" style={{ "--i": 1, "--w": "78%" }}>&nbsp;&nbsp;<b className="k">const</b> [<b className="v">dev</b>, <b className="v">setDev</b>] = <b className="f">useState</b>()</div>
                <div className="ln" style={{ "--i": 2, "--w": "70%" }}>&nbsp;&nbsp;<b className="f">useEffect</b>(() =&gt; <b className="o">{"{"}</b></div>
                <div className="ln" style={{ "--i": 3, "--w": "84%" }}>&nbsp;&nbsp;&nbsp;&nbsp;<b className="f">fetch</b>(<b className="s">"/api/projects"</b>)</div>
                <div className="ln" style={{ "--i": 4, "--w": "66%" }}>&nbsp;&nbsp;&nbsp;&nbsp;.<b className="f">then</b>(<b className="v">res</b> =&gt; <b className="v">res</b>.<b className="f">json</b>())</div>
                <div className="ln" style={{ "--i": 5, "--w": "40%" }}>&nbsp;&nbsp;<b className="o">{"}"}</b>, [])</div>
                <div className="ln" style={{ "--i": 6, "--w": "58%" }}>&nbsp;&nbsp;<b className="k">return</b> &lt;<b className="f">Portfolio</b> /&gt;</div>
                <div className="ln" style={{ "--i": 7, "--w": "12%" }}><b className="o">{"}"}</b><span className="h3d-caret"></span></div>
              </div>
            </div>
            <div className="h3d-neck"></div>
            <div className="h3d-base"></div>
          </div>

          <div className="h3d-terminal">
            <div className="h3d-bar">
              <i></i><i></i><i></i>
              <span>terminal</span>
            </div>
            <div className="h3d-term-body">
              <div className="tl" style={{ "--i": 0 }}><b className="p">$</b> npm run dev</div>
              <div className="tl" style={{ "--i": 1 }}><b className="g">✓</b> ready in 312 ms</div>
              <div className="tl" style={{ "--i": 2 }}><b className="p">$</b> git push origin main</div>
              <div className="tl" style={{ "--i": 3 }}><b className="g">✓</b> deployed<span className="h3d-caret"></span></div>
            </div>
          </div>

          <span className="h3d-sym sy1">&lt;/&gt;</span>
          <span className="h3d-sym sy2">{"{ }"}</span>
          <span className="h3d-sym sy3">;</span>
          <span className="h3d-sym sy4">( )</span>
        </div>

        {/* Animated floating shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </header>
  );
}

export default Hero;
     
    