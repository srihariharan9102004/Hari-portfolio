// ======================================================
// ================  IMPORTS & CONFIG  ==================
// ======================================================
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 

const RESUME_URL = "/Srihari.resume2.pdf";

// ======================== APP ==========================
// ======================================================
export default function App() {
  const [dark, setDark] = useState(false);
  const [activeExp, setActiveExp] = useState(null);

  // ================== PROJECT DATA ===================
  const projects = [
    {
      video: "/projectbgimg/deepfake.mp4",
      title: "Hybrid Convolutional Model for Multimodal Deepfake Detection",
      desc: "Developed an AI-based system to detect deepfake content in images, audio, and video using deep learning models . And improving detection accuracy across multiple media types.",
      tech: ["Python", "Deep Learning", "CNN","GNN","AI"],
      github: "https://github.com/yourusername/deepfake-project"
    },
     {
      video: "/projectbgimg/reminder.mp4",
      title: "Map-Based Location Reminder Application (In Progress)",
      desc: "Built a GPS-based reminder app with real-time alerts using Leaflet, Nominatim, and OSRM APIs, leveraging browser APIs for a fully client-side solution.",
      tech: ["React.js", "Google Maps API","Location Services","JAVA", "MySQL"],
      github: "https://github.com/srihariharan9102004/REMEMBER-location-app.git"
    },

     {
      video: "/projectbgimg/sihvideo.mp4",
      title: "Voice-Text Assistive System (SIH Hackathon 2024)",
      desc: "Led a team building a voice↔text system to help visually impaired users communicate.",
      tech: ["React", "Java", "API"],
      github: "https://github.com/yourusername/deepfake-project"
    },
    {
      video: "/videos/project1.mp4",
      title: "Electronic Theft Detection (AI & DL)",
      desc: "Research & prototype using computer vision and ML for theft detection.",
      tech: ["Python", "Deep Learning"],
      github: "https://github.com/yourusername/deepfake-project"
    },
    {
      video: "/videos/project1.mp4",
      title: "Web Projects & Internships",
      desc: "Developed responsive UI using React.js and JavaScript, improving page responsiveness by 20% Worked on a real-time website involving both front-end and back-end development Contributed to website maintenance and back-end improvements using Java Built Java-based backen.",
      tech: ["React.js", "HTML & CSS", "Bootstrap","JAVA","MySQL"],
      github: "https://github.com/srihariharan9102004/next-ias.git"
    },
    
  ];

  const [activeAch, setActiveAch] = useState(0);

const achievements = [
  {
    title: "Conference Presenter (ICA6NT 2026)",
    desc: "Presented research paper on multimodal deepfake detection at Velammal Institute of Technology, Chennai",
    certificate: "/ACHIEVEMENTS/conference.jpg",
  },
  {
    title: "Java Web Development (A+)",
    desc: "Completed 4-credit course with Excellent grade covering Core Java & Web Dev",
    certificate: "/ACHIEVEMENTS/java.jpg",
  },
  {
    title: "Smart India Hackathon 2024",
    desc: "Built Voice↔Text system using Google TTS API & MySQL for accessibility",
    certificate: "",
  },
  {
    title: "IBM MySQL Certification",
    desc: "Learned CRUD operations, database design, and large dataset handling",
    certificate: "/ACHIEVEMENTS/IBMSQL.jpg",
  },
];
const [activeCert, setActiveCert] = useState(null);
const [autoDelay, setAutoDelay] = useState(3000); // default 3 sec


// Auto Slide (2 seconds)--ACHIEVEMENTS & CERTIFICATIONS

useEffect(() => {
  const slider = setInterval(() => {
    setActiveAch((prev) =>
      prev === achievements.length - 1 ? 0 : prev + 1
    );
  }, autoDelay);

  return () => clearInterval(slider);
}, [autoDelay, achievements.length]);

// Manual Controls

const nextAch = () => {
  setActiveAch((prev) =>
    prev === achievements.length - 1 ? 0 : prev + 1
  );

  // Pause auto (set to 10 sec)
  setAutoDelay(10000);

  // Reset back to normal after 10 sec
  setTimeout(() => {
    setAutoDelay(3000);
  }, 10000);
};

const prevAch = () => {
  setActiveAch((prev) =>
    prev === 0 ? achievements.length - 1 : prev - 1
  );

  setAutoDelay(10000);

  setTimeout(() => {
    setAutoDelay(3000);
  }, 10000);
};

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
    <div className="portfolio-root">

      {/* ======================================================
          ======================== NAVBAR =======================
          ====================================================== */}
     <nav className="main-navbar navbar navbar-expand-lg px-4 fixed-top">
  <a className="navbar-brand fw-bold site-logo" href="#home">
    Srihariharan R
  </a>

  <button
    className="navbar-toggler custom-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navMenu"
  >
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse" id="navMenu">
    <ul className="navbar-nav ms-auto align-items-center">

      <li className="nav-item me-3">
        <button className="btn mode-toggle-btn" onClick={() => setDark((d) => !d)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </li>

      {["About", "Skills", "Projects","Experience","Achievements", "Contact"].map((item) => (
        <li className="nav-item nav-li" key={item}>
          <a className="nav-link cool-link" href={`#${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </li>
      ))}

    </ul>
  </div>
</nav>


      {/* ======================================================
          ======================== HERO =======================
          ====================================================== */}
      <header id="home" className="hero-section">
        <div className="hero-content reveal-left">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">Srihariharan</span>
          </h1>

          <p className="hero-subtitle">
            Aspiring Java Full Stack Developer — React • Java • MySQL • DSA
          </p>

          <div className="hero-buttons">
            <a href="#Projects" className="btn hero-btn-1">See Projects</a>
            <a href={RESUME_URL} className="btn hero-btn-2" download>Download Resume</a>
          </div>
        </div>

        {/* Animated floating shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </header>

      {/* ======================================================
          ====================== MAIN BODY =====================
          ====================================================== */}
      <main className=" my-5">
<div className="container">
        {/* ==================== ABOUT SECTION =================== */}
        <section className="section-block" id="About">
        <section id="About" className="row align-items-center mb-5 reveal About-sec">
          <div className="col-md-7">
            <h2 className="fw-bold about-title">About Me</h2>
            <div className="accent-line"></div>

            <p className="about-text mt-3">
           I'm a passionate and dedicated <strong> “ FULL STACK DEVELOPER ” </strong> with a strong foundation in
<strong> Java , React js , Front- End </strong>(HTML, CSS, Bootstrap, JavaScript, J Query) and <strong> MySQL </strong> . I have built
several hands - on projects that demonstrate my ability to develop responsive, user - friendly
web applications from <strong>front-end to back-end </strong>. I'm eager to upgrade my technical skills, problem solving abilities, and continuous learning mindset in a dynamic development team and I'm
currently seeking an entry- level opportunity where I can grow as a full-stack developer and
contribute to real-world projects 
            </p>

            <div className="about-details mt-3">
              <p><strong>Education:</strong> B.Tech / CSE (CGPA 7.8)</p>
              <p><strong>Contact:</strong> +91 63796 18368</p>
              <p><strong>Email:</strong> srihariharan9102004@gmail.com</p>
               <p><strong>Location:</strong>  Puducherry-605007 </p>
            </div>
          </div>

          <div className="col-md-5 text-center">
            <div className="about-card p-4 shadow-sm">
              <div className="photo-circle mb-3">
                <img src="/hariphoto/myphoto.png" alt="Srihariharan" className="profile-img" />
              </div>
              <h5 className="fw-bold mb-1">Srihariharan R</h5>
              <small className="text-muted">Aspiring Software Engineer</small>

              <div className="mt-3 about-extra">
                <p><strong>Interests:</strong> Artificial Intelligence, Software Developer, MERN</p>
                <p><strong>Achievements:</strong> SIH Hackathon 2024, IEEE Paper 2025</p>
              </div>
            </div>
          </div>
        </section>
        </section>


        {/* ====================== SKILLS SECTION ====================== */}
        <section className="section-block" id="Skills">
    <section id="Skills" className="mb-5 skills-section">
  <h3 className="fw-bold text-center skills-title">Technical Skills</h3>
  <br></br>
  <br></br>

  <div className="skills-grid">
    {[
      { name: "Java", level: 70 },
      { name: "React.js", level: 60 },
      { name: "Spring Boot", level: 60 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "DSA", level: 60 },
      { name: "OOP Concepts", level: 80 },
      { name: "Problem Solving", level: 80 },
       { name: "AI prompting", level: 80 },
      { name: "Learn to unlock new skill", level:100}
    ].map((skill) => (
      <div
        key={skill.name}
        className="skill-card"
        style={{ "--level": `${skill.level}%` }}
      >
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
    ))}
  </div>
</section>
</section>
</div>

                            {/* ====================== PROJECTS ====================== */}

        <section className="section-block" id="Projects">
<section id="Projects" className="Projects-section reveal">
  <div className="container">
  <h3 className="fw-bold text-center mb-4">Projects</h3>

  <div className="row g-4 mt-2">
    {projects.map((p) => (
      <div className="col-md-4" key={p.title}>
        
        <div className="neo-pro-card">
          
          {/* ========= PROJECT video ========= */}
          <div className="neo-pro-img-wrap">
  <video
    src={p.video}
    className="neo-pro-video"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

          {/* ========= TEXT ========= */}
          <div className="neo-pro-content">
            <h5 className="neo-pro-title">{p.title}</h5>
            <p className="neo-pro-desc">{p.desc}</p>

            <div className="neo-tag-box">
              {p.tech.map((t) => (
                <span key={t} className="neo-tag-small">{t}</span>
              ))}
            </div>
             {/* 🔥 VIEW CODE BUTTON */}
  <a
    href={p.github}
    target="_blank"
    rel="noopener noreferrer"
    className="view-code-btn"
  >
    View Code
  </a>
          </div>

        </div>

      </div>
    ))}
  </div></div>
</section>
</section>
 <div className="container">
        {/* =================== EXPERIENCE ======================= */}
        <section className="section-block" id="Experience">
      <section id="Experience" className="mb-5 reveal Experience-sec" style={{paddingTop:"80px", marginTop:"-80px"}}>
  <h3 className="fw-bold text-center mb-4">Experience & Internships</h3>
  <br></br>

  <div className="timeline">

    <div className="timeline-item reveal">
      <h6>Web-Application Development Intern — RKS Infotech</h6>
      <p className="small">Developed UI & full-stack features <br></br>Worked on a real-time website involving both front-end and back-end development </p>
      <button className="exp-btn" onClick={() => setActiveExp("rks")}>Click — More Info</button>
    </div>

    <div className="timeline-item reveal">
      <h6>Intern — NexGen Technology (AI & ML)</h6>
      <p className="small">Intern – NexGen Technology (AI & ML): Built an Electronic Theft Detection system using Deep Learning (CNN), 
        <br></br>contributing to data preprocessing, model training, and accuracy improvement.</p>
      <button className="exp-btn" onClick={() => setActiveExp("nexgen")}>Click — More Info</button>
    </div>

    <div className="timeline-item reveal">
      <h6>Front-End Intern — VALVENET TECHNOLOGY</h6>
      <p className="small">Built UI pages & layouts<br></br>Built responsive web pages using HTML, CSS, JavaScript, and React.js with a focus on clean and consistent UI design.</p>
      <button className="exp-btn" onClick={() => setActiveExp("tsa")}>Click — More Info</button>
    </div>

  </div>
</section>
</section>

{/* ================= ACHIEVEMENTS ================= */}
<section id="Achievements" className="section-block">
  <div className="container achievements-section">

    <h3 className="text-center fw-bold mb-4">
      Achievements & Certifications
    </h3>

    <div className="achievements-container">

      <button className="ach-btn left" onClick={prevAch}>‹</button>

      <div className="ach-slider">
        {achievements.map((item, index) => {
          let position = "next";

          if (index === activeAch) position = "active";
          else if (
            index === activeAch - 1 ||
            (activeAch === 0 && index === achievements.length - 1)
          ) position = "prev";

          return (
            <div className={`ach-card ${position}`} key={index}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
               
               <button
    className="view-btn"
    onClick={() => setActiveCert(item.certificate)}
  >
    View Certificate
  </button>
            </div>
          );
        })}
      </div>

      <button className="ach-btn right" onClick={nextAch}>›</button>

    </div>

  </div>
</section>

{activeCert && (
  <div className="modal-overlay" onClick={() => setActiveCert(null)}>
    <div className="modal-box cert-modal" onClick={(e) => e.stopPropagation()}>

      <button className="close-btn" onClick={() => setActiveCert(null)}>
        ×
      </button>

      {/* PDF / Image Viewer */}
      <img
        src={activeCert}
        alt="certificate"
        className="cert-img"
        src={activeCert}
        title="Certificate"
        width="100%"
        height="500px"
        style={{ borderRadius: "10px" }}
      />

    </div>
  </div>
)}

        {/* ====================== CONTACT ====================== */}
<section className="section-block" id="Contact">
<section id="Contact" className="mb-5 reveal Contact-sec">
  <h3 className="fw-bold text-center contact-title">
    Get Contact
  </h3>
  <p className="text-center contact-subtitle">
   Open to internships, full-time roles & collaborations
  </p>

  <div className="row mt-5 g-4 justify-content-center">

    {/* Email */}
    <div className="col-md-4">
      <div className="contact-pro-card">
         <img src="/contactimg/email.png" alt="Gmail" className="contact-img-icon" />
         <h6>gmail</h6>
         <p>srihariharan9102004@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="col-md-4">
     <div className="contact-pro-card">
      <img src="/contactimg/phone.png" alt="Phone" className="contact-img-icon" />
      <h6>Phone</h6>
      <p>+91 63796 18368</p>
</div>
    </div>

{/* LinkedIn */}
<div className="col-md-4">
  <a
    href="https://www.linkedin.com/in/srihariharan-r-29264b282/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none"
  >
     <div className="contact-pro-card">
      <img src="/contactimg/linkedin.png" alt="LinkedIn" className="contact-img-icon" />
      <h6>LinkedIn</h6>
      <p>Connect with me professionally</p>
    </div>
  </a>
</div>

  </div>

  {/* CTA */}
  <div className="text-center mt-5">
    <a
      href="mailto:srihariharan9102004@gmail.com"
      className="btn contact-pro-cta"
    >
      Contact Me
    </a>
  </div>
</section>
</section>
</div>

      </main>

      {/* ======================= FOOTER ======================= */}
      <footer className="text-center py-4 text-muted small">
        © {new Date().getFullYear()} Srihariharan R — Built with React & Bootstrap
      </footer>

      {/* ======================== MODAL ======================= */}
      {activeExp && (
        <div className="modal-overlay" onClick={() => setActiveExp(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setActiveExp(null)}>×</button>

            {activeExp === "rks" && (
              <div>
                <h4>WEB-APPLICATION Development Intern – RKS Infotech <br></br>(3 Months)</h4>
                <ul>
                  <li>Developed responsive and user-friendly websites using React.js, HTML, CSS, Bootstrap, and JavaScript</li>
                  <li>Worked on real-world projects involving both front-end and back-end development (Java)</li>
                  <li>Collaborated with the team using GitHub for version control and project management</li>
                  <li>Implemented SEO strategies to improve website visibility and search performance</li>
                  <li>Optimized website performance and UI for better user experience</li>
                  <li>Served as a Team Leader, coordinating tasks and guiding team members to meet project goals</li>
                  <li>Improved backend functionality and maintenance using Java</li>
                  <li>Built Java–JDBC features integrated with the database, reducing data processing time by 15%</li>
                </ul>
              </div>
            )}

            {activeExp === "nexgen" && (
              <div>
                <h4>Intern – NexGen Technology (AI & ML) </h4>
                <ul>
                  <li>Built Java–JDBC features integrated with the database, reducing data processing time by 15%</li>
                  <li>Worked on an AI-based Electronic Theft Detection real-world project</li>
                  <li>Involved in dataset collection, preprocessing, and model training</li>
                  <li>Assisted in improving model accuracy using Deep Learning (CNN) techniques</li>
                <li>Gained hands-on experience with Python, ML concepts, and dataset handling</li>
                <li>Demonstrated good performance, technical skills, and learning ability throughout the internship</li>
                <li>Tech Used: Python, Deep Learning (CNN), Dataset Handling</li>
                
                </ul>
              </div>
            )}

            {activeExp === "tsa" && (
              <div>
                <h4>Front-End Intern – Top Skilled Academy</h4>
                <ul>
                  <li>Built functional web pages using HTML, CSS, React.js.</li>
                  <li>Built and enhanced web UI components based on assigned tasks</li>
                 
                  <li>Worked on front-end development with a focus on clean design and usability</li>
                   <li>Completed all assigned work efficiently and on time  </li>
                    <li>Demonstrated a hard-working, enthusiastic, and responsible attitude</li>
                    <li>Gained real-world exposure to software development practices</li>
                    <li>Recognized for good performance and professionalism during the internship</li>
                    <li>Created clean UI layouts and improved design consistency across pages</li>
                    <li>Tech Used: HTML, CSS, JavaScript, React.js</li>

                </ul>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}