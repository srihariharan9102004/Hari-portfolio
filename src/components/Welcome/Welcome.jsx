import { useEffect, useState } from "react";
import "./Welcome.css";

const NAME = "Srihariharan R";

export default function Welcome({ onFinish }) {
  const [text, setText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [hide, setHide] = useState(false);

  // Typewriter
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < NAME.length) {
        setText(NAME.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);

        setTimeout(() => {
          setShowSubtitle(true);
        }, 250);

        setTimeout(() => {
          closeIntro();
        }, 3400);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const closeIntro = () => {
    setHide(true);

    setTimeout(() => {
      onFinish();
    }, 700);
  };

  useEffect(() => {
    const skip = () => closeIntro();

    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);

    return () => {
      window.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  return (
    <div className={`welcome-overlay ${hide ? "hide" : ""}`}>

      <div className="welcome-content">

        <span className="welcome-small">
          WELCOME
        </span>

        <h1 className="welcome-name">
          {text}
          <span className="cursor">|</span>
        </h1>

        <div className={`subtitle ${showSubtitle ? "show" : ""}`}>
          <h3>Full Stack Developer</h3>

          <p>
            Building scalable software with Java, React & AI.
          </p>
        </div>

      </div>

    </div>
  );
}