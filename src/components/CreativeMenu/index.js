import React from "react";
import "../../styles/_creativeMenuStyles.scss";
const CreativeMenu = () => {
  return (
    <div className="creativeMenuWrapper">
      <ul>
        <li style={{ "--clr": "#81ecec" }}>
          <a href="#" data-text="Home">
            Home
          </a>
        </li>
        <li style={{ "--clr": "#ff7675" }}>
          <a href="#" data-text="About">
            About
          </a>
        </li>
        <li style={{ "--clr": "#55efc4" }}>
          <a href="#" data-text="Services">
            Services
          </a>
        </li>
        <li style={{ "--clr": "#a29bfe" }}>
          <a href="#" data-text="Work">
            Work
          </a>
        </li>
        <li style={{ "--clr": "#fd79a8" }}>
          <a href="#" data-text="Team">
            Team
          </a>
        </li>
        <li style={{ "--clr": "#ffeaa7" }}>
          <a href="#" data-text="Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CreativeMenu;
