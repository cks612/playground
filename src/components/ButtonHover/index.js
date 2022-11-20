import React from "react";
import "../../styles/_buttonHoverStyles.scss";
const ButtonHover = () => {
  return (
    <div className="buttonHoverWrapper">
      <div className="container">
        <a href="#" style={{ "--clr": "#1e9bff" }}>
          <span />
          <span />
          <span />
          <span />
          Button
        </a>
        <a href="#" style={{ "--clr": "#ff1867" }}>
          <span />
          <span />
          <span />
          <span />
          Button
        </a>
        <a href="#" style={{ "--clr": "#6eff3e" }}>
          <span />
          <span />
          <span />
          <span />
          Button
        </a>
      </div>
    </div>
  );
};

export default ButtonHover;
