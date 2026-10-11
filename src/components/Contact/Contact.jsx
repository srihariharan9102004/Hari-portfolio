import "../../App.css";
import "./Contact.css";
import { useState } from "react";

const CONTACT_EMAIL = "srihariharan9102004@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body =
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Message:\n${form.message}`;

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

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
         <img src="/contactimg/email.png" alt="Gmail" className="contact-img-icon" loading="lazy" decoding="async" />
         <h6>Email</h6>
         <a href="mailto:srihariharan9102004@gmail.com">srihariharan9102004@gmail.com</a>
      </div>
    </div>

    {/* Phone */}
    <div className="col-md-4">
     <div className="contact-pro-card">
      <img src="/contactimg/phone.png" alt="Phone" className="contact-img-icon" loading="lazy" decoding="async" />
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
      <img src="/contactimg/linkedin.png" alt="LinkedIn" className="contact-img-icon" loading="lazy" decoding="async" />
      <h6>LinkedIn</h6>
      <p>Connect with me professionally</p>
    </div>
  </a>
</div>

  </div>

  {/* Message Form */}
  <div className="row justify-content-center mt-5">
    <div className="col-lg-7 col-md-9">
      <form className="contact-form-box" onSubmit={handleSend}>
        <h5 className="contact-form-title">Send Me a Message</h5>

        <div className="contact-form-group">
          <label htmlFor="contact-name">Name :</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-phone">No :</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-message">Message :</label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            required
          />
        </div>

        <button type="submit" className="btn contact-pro-cta contact-form-submit">
          Get In Touch
        </button>
      </form>
    </div>
  </div>
</section>
</section>
  );
}

export default Contact;