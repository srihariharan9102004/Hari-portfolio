import "../../App.css";
        import "./Achievement.css";
        import { useState, useEffect } from "react";
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
    title:"Micro1 AI Interview Certification",
    desc:"Certified by Micro1 for outstanding performance in an AI-based technical interview, showcasing strong Programming analytical, problem-solving, and communication abilities.",
    certificate: "/ACHIEVEMENTS/micro1.jpg",
  },
  {
    title: "IBM MySQL Certification",
    desc: "Learned CRUD operations, database design, and large dataset handling",
    certificate: "/ACHIEVEMENTS/IBMSQL.jpg",
  },
];
        function Achievement() {
const [activeAch, setActiveAch] = useState(0);
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
  return (
<>
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
  
{/* <button
  className="view-btn"
  disabled={!item.certificate}
  onClick={() => item.certificate && setActiveCert(item.certificate)}
>
  {item.certificate ? "View Certificate" : "No Certificate"}
</button> */}


            </div>
          );
        })}
      </div>

      <button className="ach-btn right" onClick={nextAch}>›</button>

    </div>

  </div>
</section>


{activeCert && (
  <div
    className="modal-overlay"
    onClick={() => setActiveCert(null)}
  >
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

      <img
        src={activeCert}
        alt="Certificate"
        className="cert-img"
      />
    </div>
  </div>
)}

 </> );
        }

export default Achievement;