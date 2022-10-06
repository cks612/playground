import React from "react";
import { useState } from "react";
import "../../styles/_navigationSearchStyles.scss";

const NavigationSearchBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  const handleClicked = e => {
    const { className } = e.target;

    if (isClicked === false && className === "fa-solid fa-magnifying-glass searchBtn") setIsClicked(!isClicked);
    else if (isClicked === true && className === "fa-solid fa-x closeBtn active") setIsClicked(!isClicked);
  };
  return (
    <div className="navigationSearchBarWrapper">
      <header className={isToggleClicked ? "open" : ""}>
        <a href="#" className="logo">
          Logo
        </a>
        <div className="group">
          <ul className="navigation">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="search">
            <span className="icon">
              <i className={isClicked ? "fa-solid fa-magnifying-glass searchBtn active" : "fa-solid fa-magnifying-glass searchBtn"} onClick={handleClicked} />
              <i className={isClicked ? "fa-solid fa-x closeBtn active" : "fa-solid fa-x closeBtn"} onClick={handleClicked} />
            </span>
          </div>
          <i className="fa-solid fa-bars menuToggle" onClick={() => setIsToggleClicked(!isToggleClicked)} />
        </div>
        <div className={isClicked ? "searchBox active" : "searchBox"}>
          <input type="text" placeholder="Search here..." />
        </div>
      </header>
    </div>
  );
};

export default NavigationSearchBar;
