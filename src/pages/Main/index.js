import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/_mainStyles.scss";

const index = () => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="items">
          <div className="item">
            <p>Isometric menu Tab</p>
            <Link to={"/isometric"}>
              <img src="/images/isometricMenu.png" alt="IsometricMenu" />
            </Link>
            <p>22. 06. 21</p>
          </div>
          <div className="item">
            <p>Animation Input</p>
            <Link to={"/inputAnimation"}>
              <img src="/images/inputAnimation.png" alt="inputAnimation" />
            </Link>
            <p>22. 06. 23</p>
          </div>
          <div className="item">
            <p>Modern Button</p>
            <Link to={"/modernButton"}>
              <img src="/images/modernButton.png" alt="modernButton" />
            </Link>
            <p>22. 06. 24</p>
          </div>
          <div className="item">
            <p>Animated Menu</p>
            <Link to={"/animatedMenu"}>
              <img src="/images/animatedMenu.png" alt="animatedMenu" />
            </Link>
            <p>22. 06. 25</p>
          </div>
          <div className="item">
            <p>Circular Bar</p>
            <Link to={"/circularBar"}>
              <img src="/images/circularBar.png" alt="circularBar" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item">
            <p>Background Effects </p>
            <Link to={"/backgroundEffects"}>
              <img src="/images/backgroundEffects.png" alt="backgroundEffects" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
