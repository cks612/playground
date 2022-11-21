import React from "react";
import { useState } from "react";
import "../../styles/_luckySpinningStyles.scss";

const LuckySpinning = () => {
  const [value, setIsClicked] = useState(100);
  const handleSpinning = () => {
    setIsClicked(value + Math.ceil(Math.random() * 3600));
  };

  return (
    <div className="luckySpinningWrapper">
      <div className="container">
        <div className="spinBtn" onClick={handleSpinning}>
          Spin
        </div>
        <div className="wheel" style={{ transform: "rotate(" + value + "deg)" }}>
          <div className="number" style={{ "--i": 1, "--clr": "#db7093" }}>
            <span>100</span>
          </div>
          <div className="number" style={{ "--i": 2, "--clr": "#20b2aa" }}>
            <span>1</span>
          </div>
          <div className="number" style={{ "--i": 3, "--clr": "#d63e92" }}>
            <span>50</span>
          </div>
          <div className="number" style={{ "--i": 4, "--clr": "#daa520" }}>
            <span>0</span>
          </div>
          <div className="number" style={{ "--i": 5, "--clr": "#ff340f" }}>
            <span>1000</span>
          </div>
          <div className="number" style={{ "--i": 6, "--clr": "#ff7f50" }}>
            <span>10</span>
          </div>
          <div className="number" style={{ "--i": 7, "--clr": "#3cb371" }}>
            <span>5</span>
          </div>
          <div className="number" style={{ "--i": 8, "--clr": "#4169e1" }}>
            <span>20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckySpinning;
