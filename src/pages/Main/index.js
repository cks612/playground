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

          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
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
