// import "./Footer.css";
import "../../App.css";
function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Srihariharan R. All Rights Reserved.
      </p>
      <p>
        Designed & Developed with ❤️ using React.js
      </p>
    </footer>
  );
}

export default Footer;