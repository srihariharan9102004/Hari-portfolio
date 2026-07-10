import "../../App.css";
import "./Education.css";

function Education() {
  return (
    <section className="section-block" id="Education">
      <div className="education-section">

        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background
        </p>

        <div className="education-grid">

          {/* College */}
          <div className="education-card">

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
          <div className="education-card">

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