// import "./Skills.css";
import "../../App.css";
function Footer() {
  const skills =[
      { name: "Java", level: 70 },
      { name: "React.js", level: 60 },
      { name: "Spring Boot", level: 60 },
      { name: "HTML 5", level: 90 },
      { name: "CSS 3", level: 90 },
      { name: "Bootstrap", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "DSA", level: 60 },
      { name: "OOP Concepts", level: 80 },
      { name: "Problem Solving", level: 80 },
       { name: "AI prompting", level: 80 },
      { name: "Learning Agility", level:100}
    ];
  return (
       <section className="section-block mb-5 skills-section" id="Skills">
  <h3 className="fw-bold text-center skills-title">Technical Skills</h3>
<br />
 
  <div className="skills-grid">
    {skills.map((skill) => (
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
  );
}

export default Footer;