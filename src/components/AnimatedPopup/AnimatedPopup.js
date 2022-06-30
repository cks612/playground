import React, { useState } from "react";
import "../../styles/_animatedPopupStyles.scss";

const AnimatedPopup = () => {
  const [toggle, setToggle] = useState();

  const toggleActiveHandler = e => {
    setToggle(!toggle);
  };
  return (
    <div className="animatedWrapper">
      <div className={toggle === true ? "container active" : "container"}>
        <div className="content">
          <h2>Heading...</h2>
          <p>Lorem</p>
        </div>
        <div className="toggleBtn" onClick={toggleActiveHandler}></div>
      </div>
    </div>
  );
};

export default AnimatedPopup;
