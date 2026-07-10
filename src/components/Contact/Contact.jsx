import "../../App.css";
function Contact() {
  return (

<section className="section-block" id="Contact">
<section id="Contact" className="mb-5 reveal Contact-sec">
  <h3 className="fw-bold text-center contact-title">
    Contact Me
  </h3>
  <p className="text-center contact-subtitle">
   Open to internships, full-time roles & collaborations
  </p>

  <div className="row mt-5 g-4 justify-content-center">

    {/* Email */}
    <div className="col-md-4">
      <div className="contact-pro-card">
         <img src="/contactimg/email.png" alt="Gmail" className="contact-img-icon" />
         <h6>Email</h6>
         <a href="mailto:srihariharan9102004@gmail.com">srihariharan9102004@gmail.com</a>
      </div>
    </div>

    {/* Phone */}
    <div className="col-md-4">
     <div className="contact-pro-card">
      <img src="/contactimg/phone.png" alt="Phone" className="contact-img-icon" />
      <h6>Phone</h6>
      <a href="tel:+916379618368">+91 63796 18368</a>
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
  );
}

export default Contact;