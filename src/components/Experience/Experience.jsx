//  import "./Experience.css";
import "../../App.css";
 import { useState } from "react";
 import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Experience() {
      const [activeExp, setActiveExp] = useState(null);
    const [activeCert, setActiveCert] = useState(null);
  return (   
    <>    <section className="section-block" id="Experience">
      <section id="Experience" className="mb-5 reveal Experience-sec" style={{paddingTop:"80px", marginTop:"-80px"}}>
  <h3 className="fw-bold text-center mb-4">Experience & Internships</h3>
  <br />

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

{/* ================= EXPERIENCE MODAL ================= */}
{activeExp && (
  <div className="modal-overlay" onClick={() => setActiveExp(null)}>
    <div
      className="modal-box"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setActiveExp(null)}
      >
        ×
      </button>

      {/* RKS */}
      {activeExp === "rks" && (
        <div>
          <h4>
            WEB-APPLICATION Development Intern – RKS Infotech
            <br />
            (3 Months)
          </h4>

          <ul>
            <li>Developed responsive and user-friendly websites using React.js, HTML, CSS, Bootstrap, and JavaScript</li>
            <li>Worked on real-world projects involving both front-end and back-end development (Java)</li>
            <li>Collaborated with the team using GitHub for version control and project management</li>
            <li>Implemented SEO strategies to improve website visibility and search performance</li>
            <li>Optimized website performance and UI for better user experience</li>
            <li>Served as a Team Leader, coordinating tasks and guiding team members</li>
            <li>Improved backend functionality and maintenance using Java</li>
            <li>Built Java–JDBC features integrated with the database</li>
            <li><i>Tech Used: React.js, Java, JDBC, MySQL</i></li>
          </ul>

          <button
            className="view-btn"
            onClick={() => {
              setActiveExp(null);
              setActiveCert("/experience/rks-certificate.jpeg");
            }}
          >
            View Certificate
          </button>
        </div>
      )}

      {/* NEXGEN */}
      {activeExp === "nexgen" && (
        <div>
          <h4>Intern – NexGen Technology (AI & ML)</h4>

          <ul>
            <li>Worked on an AI-based Electronic Theft Detection system</li>
            <li>Involved in dataset collection, preprocessing, and model training</li>
            <li>Improved model accuracy using Deep Learning (CNN)</li>
            <li>Gained hands-on experience with Python and ML concepts</li>
            <li>Demonstrated strong technical and learning abilities</li>
            <li><i>Tech Used: Python, Deep Learning (CNN), Dataset Handling</i></li>
          </ul>

          <button
            className="view-btn"
            onClick={() => {
              setActiveExp(null);
              setActiveCert("/experience/nexgen-certificate.jpg");
            }}
          >
            View Certificate
          </button>
        </div>
      )}

      {/* VALVENET */}
      {activeExp === "tsa" && (
        <div>
          <h4>Front-End Intern – VALVENET TECHNOLOGY</h4>

          <ul>
            <li>Built responsive web pages using HTML, CSS, JavaScript, and React.js</li>
            <li>Enhanced UI components and layouts</li>
            <li>Focused on clean design and usability</li>
            <li>Completed all assigned work efficiently and on time</li>
            <li>Gained real-world software development experience</li>
            <li>Improved design consistency across pages</li>
            <li><i>Tech Used: HTML5, CSS3, JavaScript, React.js</i></li>
          </ul>

          <button
            className="view-btn"
            onClick={() => {
              setActiveExp(null);
              setActiveCert("/experience/valvenet-certificate.jpg");
            }}
          >
            View Certificate
          </button>
        </div>
      )}
    </div>
  </div>
)}

{/* ================= CERTIFICATE MODAL ================= */}
{activeCert && (
  <div className="modal-overlay" onClick={() => setActiveCert(null)}>
    <div
      className="modal-box cert-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setActiveCert(null)}
      >
        ×
      </button>

<div className="cert-viewer">
  <Zoom>
  <img
    src={activeCert}
    alt="Certificate"
    className="cert-img"
    title="Certificate"
/>
  </Zoom>
</div>
    </div>
  </div>
)}
</>

  );
}

export default Experience;