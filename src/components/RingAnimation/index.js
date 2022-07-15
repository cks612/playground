import React from "react";
import "../../styles/_ringAnimationStyles.scss";

const ringAnimation = () => {
  return (
    <div className="ringAnimation">
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default ringAnimation;
