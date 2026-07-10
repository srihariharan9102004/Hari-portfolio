import "./About.css";
// import "../../App.css";
        function About() {
  return (
        <section className="section-block row align-items-center mb-5 reveal about-sec" id="About">
          <div className="col-md-7">
            <h2 className="fw-bold about-title">About Me</h2>
            <div className="accent-line"></div>

            <p className="about-text mt-3">
           I'm a passionate and dedicated <strong> “ FULL STACK DEVELOPER ” </strong> with a strong foundation in
<strong> Java, React.js, Front-End </strong>(HTML, CSS, Bootstrap, JavaScript, J Query) and <strong> MySQL </strong>. I have built
several hands-on projects that demonstrate my ability to develop responsive, user-friendly
web applications from <strong>front-end to back-end </strong>. I'm eager to upgrade my technical skills, problem solving abilities, and continuous learning mindset in a dynamic development team and I'm
currently seeking an entry-level opportunity where I can grow as a full-stack developer and
contribute to real-world projects 
            </p>

            <div className="about-details mt-3">
              <p><strong>Education:</strong> B.Tech / CSE (CGPA 7.8)</p>
             <p><strong>Contact:</strong> <a href="tel:+916379618368"> +91 63796 18368</a></p>
              <p> <strong>Email:</strong> <a href="mailto:srihariharan9102004@gmail.com"> srihariharan9102004@gmail.com </a></p>
               <p><strong>Location:</strong>  Puducherry-605007 </p>
               <p><strong>LinkedIn:</strong> 
               <a   target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/srihariharan-r-29264b282/">LinkedIn Profile</a></p>
            </div>
          </div>

        <div className="col-md-5 text-center">
  <div className="about-card premium-card">

    <div className="id-top">
      <span className="id-badge">PORTFOLIO ID</span>
    </div>

    <div className="photo-circle">
      <img
        src="/hariphoto/myphoto.png"
        alt="Srihariharan"
        className="profile-img"
      />
    </div>

    <h4 className="name">Srihariharan R</h4>
    <p className="role">Software Engineer • Full Stack Developer</p>

    <div className="hire-badge">
      Available for Hire
    </div>

    <div className="divider"></div>

    <div className="info-section">

      <div className="info-row">
        <span className="label">Joining Status</span>
        <span className="value">Immediate Joining</span>
      </div>

      <div className="info-row">
        <span className="label">Domain</span>
        <span className="value">
          Full Stack / WebApp / Software Development
        </span>
      </div>

      <div className="info-row">
        <span className="label">Specialization</span>
        <span className="value">
          Computer Science and Engineering
        </span>
      </div>

      <div className="info-row">
        <span className="label">Experience</span>
        <span className="value">
          3 Internships (6 Months)
        </span>
      </div>

      <div className="info-row">
        <span className="label">Organizations</span>
        <span className="value">
          • RKS Infotech • NexGen Technology • Valvenet Technology
        </span>
      </div>

    </div>
  </div>
</div>
        </section>
  );
        }

export default About;