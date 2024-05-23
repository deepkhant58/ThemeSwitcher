import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Form } from "react-bootstrap";
function Switcher() {
  const { themeColor, handleClick } = useContext(ThemeContext);

  return (
    <div>
      <div className="custom-switch">
        <Form.Check
          type="switch"
          checked={themeColor === "theme-dark"}
          onChange={() =>
            handleClick(
              themeColor === "theme-dark" ? "theme-light" : "theme-dark"
            )
          }
        />
        <label>Click Here For Dark Mode</label>
      </div>
      <lable className="option-title">Theme Multiple Options</lable>
      <div className="theme-option">
        <div
          className="theme-blue"
          onClick={() => {
            handleClick("theme-blue");
          }}
        ></div>
        <div
          className="theme-purple"
          onClick={() => {
            handleClick("theme-purple");
          }}
        ></div>
        <div
          className="theme-yellow"
          onClick={() => {
            handleClick("theme-yellow");
          }}
        ></div>
        <div
          className="theme-green"
          onClick={() => {
            handleClick("theme-green");
          }}
        ></div>
        <div
          className="theme-orange"
          onClick={() => {
            handleClick("theme-orange");
          }}
        ></div>
      </div>

      <div className="main">
        <div className="theme-contant">
          <h4>Dynamic Theme Switcher</h4>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h5>- Deep Khant</h5>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
