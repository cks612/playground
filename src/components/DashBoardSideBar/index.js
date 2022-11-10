import React from "react";
import "../../styles/_dashBoardSideBarStyles.scss";
import { useState } from "react";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sideBarWrapper">
      <div className={toggle ? "navigation active" : "navigation"}>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-brands fa-apple" />
              </span>
              <span className="title">Brand Name</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-light fa-house" />
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-regular fa-user" />
              </span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-regular fa-comment" />
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-question" />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear" />
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-lock" />
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-arrow-right-from-bracket" />
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={handleToggleClick} />
      </div>
    </div>
  );
};

export default SideBar;
