import React from "react";
import "../../styles/_energyBallStyles.scss";

const EnergyBall = () => {
  return (
    <div className="energyWrapper">
      <div className="energy">
        <span style={{ "--clr": "#fbad04", "--i": "18px", "--d": "2.5s" }}></span>
        <span style={{ "--clr": "#03a1d9", "--i": "13px", "--d": "5s" }}></span>
        <span style={{ "--clr": "#f7036d", "--i": "15px", "--d": "7.5s" }}></span>
        <span style={{ "--clr": "#93ff16", "--i": "20px", "--d": "10s" }}></span>
      </div>
    </div>
  );
};

export default EnergyBall;
