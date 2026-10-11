    import "./Navbar.css";
// import "../../App.css";
import { FaSun, FaMoon} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { scrollToSection } from "../../utils/scrollToSection";
function Navbar({ dark, setDark }) {
  // Menu open/closed is React state (not Bootstrap's data attributes) so
  // we can close it ourselves the moment a section link is chosen.
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const closeMenu = () => setOpen(false);

  // Tap/click anywhere outside the navbar also closes the menu.
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  return (
//      <nav className="main-navbar navbar navbar-expand-lg px-4 fixed-top">
//   <a className="navbar-brand fw-bold site-logo" href="#Home">
//     Srihariharan R
//   </a>

//   <button
//     className="navbar-toggler custom-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navMenu"
//     aria-controls="navMenu"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon" />
//   </button>

//     <ul className="navbar-nav ms-auto align-items-center">

//       <li className="nav-item me-3">
//         <button className="btn mode-toggle-btn" onClick={() => setDark((d) => !d)}>
//           {dark ? <FaSun /> : <FaMoon />}
//         </button>
//       </li>

//       {["About", "Skills", "Projects","Experience","Achievements", "Contact"].map((item) => (
//         <li className="nav-item nav-li" key={item}>
//           <a className="nav-link cool-link" href={`#${item}`}>
//             {item.charAt(0).toUpperCase() + item.slice(1)}
//           </a>
//         </li>
//       ))}

//     </ul>
//   </div>
// </nav>
 <nav ref={navRef} className="main-navbar navbar navbar-expand-lg fixed-top px-4">

      {/* Logo */}
      <a className="navbar-brand fw-bold site-logo" href="#Home" onClick={(e) => { e.preventDefault(); closeMenu(); scrollToSection("Home"); }}>
        Srihariharan R
      </a>

      {/* Mobile Right Controls */}
      <div className="d-flex align-items-center d-lg-none ms-auto">

        {/* Mobile Theme Button */}
<button
  className={`btn mode-toggle-btn ${dark ? "dark-btn" : "light-btn"}`}
  onClick={() => setDark((d) => !d)}
>
  {dark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
</button>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-controls="navMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>

      {/* Navbar Menu */}
      <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navMenu">

        <ul className="navbar-nav ms-auto align-items-center">

          {/* Desktop Theme Button */}
          <li className="nav-item me-3 d-none d-lg-block">
            <button
              className={`btn mode-toggle-btn ${dark ? "dark-btn" : "light-btn"}`}
              onClick={() => setDark((d) => !d)}
            >
              {dark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
            </button>
          </li>

          {[
            "About",
            "Education",
            "Skills",
            "Projects",
            "Experience",
            "Achievements",
            "Contact",
          ].map((item) => (
            <li className="nav-item" key={item}>
              <a
                className="nav-link cool-link"
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;
    
    
   