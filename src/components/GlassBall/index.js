import React from "react";
import "../../styles/_glassBallStyles.scss";

const GlassBall = () => {
  return (
    <div className="glassBallWrapper">
      <div className="ball">
        <div className="circle" style={{ "--clr": "#04fc43" }} />
        <div className="circle" style={{ "--clr": "#fee800" }} />
        <div className="circle" style={{ "--clr": "#ff2972" }} />
        <div className="circle" style={{ "--clr": "#03a9f4" }} />
      </div>
    </div>
  );
};

export default GlassBall;
