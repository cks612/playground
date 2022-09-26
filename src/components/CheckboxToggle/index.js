import React from "react";
import { useState } from "react";
import "../../styles/_checkboxToggleStyles.scss";

const CheckboxToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "checkboxWrapper darkMode" : "checkboxWrapper"}>
      <div className="box">
        <div className="profile">
          <div className="imgBx">
            <img src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG" alt="myImg" />
          </div>
          <h4 className="text">
            Voyage-dev
            <br /> <span>Creative Designer</span>
          </h4>
        </div>
        <ul className="menu">
          <li>
            <label>
              <span className="title">
                <i class="fa-solid fa-wifi" />
                Wi-Fi
              </span>
              <span className="action">
                <input type="checkbox" />
                <i />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className="title">
                <i class="fa fa-regular fa-bluetooth" />
                Bluetooth
              </span>
              <span className="action">
                <input type="checkbox" />
                <i />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className="title">
                <i class="fa-solid fa-plane" />
                Airplane Mode
              </span>
              <span className="action">
                <input type="checkbox" />
                <i />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className="title">
                <i class="fa-solid fa-location-dot" />
                Location
              </span>
              <span className="action">
                <input type="checkbox" />
                <i />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className="title">
                <i class="fa-solid fa-moon" />
                Dark Mode
              </span>
              <span className="action">
                <input type="checkbox" onClick={() => setIsDarkMode(!isDarkMode)} />
                <i />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckboxToggle;
