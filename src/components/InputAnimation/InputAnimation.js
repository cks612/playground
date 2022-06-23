import React from "react";
import "../../styles/_InputAnimationStyles.scss";

const InputAnimation = () => {
  return (
    <div className="inputBoxWrapper">
      <div className="inputBox">
        <input type="text" required="required" />
        <span>First Name</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Last Name</span>
      </div>
    </div>
  );
};

export default InputAnimation;
