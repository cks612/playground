import React from "react";
import "../../styles/_modernButtonStyles.scss";

const ModernButton = () => {
  return (
    <div className="modernButtonWrapper">
      <a href="#" style={{ "--clr": " #1e9bff" }}>
        <span>Button</span>
        <i></i>
      </a>
      <a href="#" style={{ "--clr": " #ff1867" }}>
        <span>Button</span>
        <i></i>
      </a>
      <a href="#" style={{ "--clr": " #6eff3e" }}>
        <span>Button</span>
        <i></i>
      </a>
    </div>
  );
};

export default ModernButton;
