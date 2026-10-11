import "../../App.css";
import "./Education.css";
import { useEffect, useRef, useState } from "react";

function Education() {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  // One observer on the grid so both cards slide in at the same moment.
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-block" id="Education">
      <div className="education-section">

        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background
        </p>

        <div className={`education-grid ${inView ? "in-view" : ""}`} ref={gridRef}>

          {/* College */}
          <div className="education-card edu-from-left">

            <div className="edu-year">
              2022 – 2026
            </div>

            <h4>B.Tech – Computer Science & Engineering</h4>

            <p className="edu-college">
              Rajiv Gandhi College of Engineering and Technology
            </p>

            <div className="edu-score">
              <span>CGPA</span>
              <strong>7.8 / 10</strong>
            </div>

          </div>

          {/* School */}
          <div className="education-card edu-from-right">

            <div className="edu-year">
              2022
            </div>

            <h4>Higher Secondary (HSC)</h4>

            <p className="edu-college">
              Seventh Day Adventist Hr. Sec. School
            </p>

            <div className="edu-score">
              <span>Percentage</span>
              <strong>75%</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;