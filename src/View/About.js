import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function About() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className={`${themeColor}`}>
      <div className="main">
        <div className="theme-contant">
          <h4>Deep Khant</h4>
          <p>
            Hello! I am a dedicated React JS developer with one year of
            experience in creating dynamic and responsive web applications. I
            have honed my skills in building reusable components, managing state
            with hooks and the Context API, and collaborating effectively with
            design and backend teams. Proficient in modern JavaScript (ES6+),
            HTML, and CSS, I ensure optimal performance and user experience.
          </p>
          <h5 style={{ fontSize: "17px" }}>-- React js Developer</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
