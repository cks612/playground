import React from "react";
import "../../styles/_floatingTextStyles.scss";

const FloatingText = () => {
  return (
    <div className="floatingTextWrapper">
      <div className="container">
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Full Name</span>
          <i />
        </div>
      </div>
    </div>
  );
};

export default FloatingText;
