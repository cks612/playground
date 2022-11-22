import React, { useState } from "react";
import "../styles/_socialMenuStyles.scss";

const SocialMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="socialMenuWrapper">
      <div className={isClicked ? "menu active" : "menu"}>
        <div className="toggle">
          <ion-icon name="share-social-outline" onClick={handleClick} />
        </div>
        <li style={{ "--i": 0, "--clr": "#1877f2" }}>
          <a href="#">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li style={{ "--i": 1, "--clr": "#25d366" }}>
          <a href="#">
            <ion-icon name="logo-whatsapp" />
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
          <a href="#">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li style={{ "--i": 3, "--clr": "#ea4c89" }}>
          <a href="#">
            <ion-icon name="logo-dribbble" />
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
          <a href="#">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
          <a href="#">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <li style={{ "--i": 6, "--clr": "#bd081c" }}>
          <a href="#">
            <ion-icon name="logo-pinterest" />
          </a>
        </li>
        <li style={{ "--i": 7, "--clr": "#ff0000" }}>
          <a href="#">
            <ion-icon name="logo-youtube" />
          </a>
        </li>
      </div>
    </div>
  );
};

export default SocialMenu;
