import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/_navStyles.scss";

const Nav = () => {
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate("/playground");
  };
  return (
    <div className="header">
      <div className="headerLink">
        <span onClick={goToHomeHandler}>Home</span>
        <a href="https://cks612.github.io/resume/">Resume</a>
      </div>
      <div className="authorName" onClick={goToHomeHandler}>
        Welcome to Voyage's playground
      </div>
    </div>
  );
};

export default Nav;
