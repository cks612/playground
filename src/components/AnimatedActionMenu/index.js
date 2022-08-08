import React, { useState } from "react";
import "../../styles/_animatedActionMenuStyles.scss";

const AnimatedActionMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="animatedActionMenuWrapper">
      <div className="navigation">
        <div className={isClicked ? "menuToggle active" : "menuToggle"} onClick={() => setIsClicked(!isClicked)} />
        <div className="menu">
          <ul>
            <li style={{ "--i": "0.1s" }}>
              <a href="#">
                <i className="fa-solid fa-camera" />
              </a>
            </li>
            <li style={{ "--i": "0.2s" }}>
              <a href="#">
                <i className="fa-solid fa-gear" />
              </a>
            </li>
            <li style={{ "--i": "0.3s" }}>
              <a href="#">
                <i className="fa-solid fa-trash-can" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimatedActionMenu;
