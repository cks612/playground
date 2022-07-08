import React from "react";
import "../../styles/_gradientClockStyles.scss";

const GradientClock = () => {
  return (
    <div className="gradientClock">
      <div className="circle">
        <ul>
          <li style={{ "--i": -4 }}>
            <span>W</span>
          </li>
          <li style={{ "--i": -3 }}>
            <span>E</span>
          </li>
          <li style={{ "--i": -2 }}>
            <span>C</span>
          </li>
          <li style={{ "--i": -1 }}>
            <span>D</span>
          </li>
          <li style={{ "--i": 0 }}>
            <span>E</span>
          </li>
          <li style={{ "--i": 1 }}>
            <span>c</span>
          </li>
          <li style={{ "--i": 2 }}>
            <span>o</span>
          </li>
          <li style={{ "--i": 3 }}>
            <span>d</span>
          </li>
          <li style={{ "--i": 4 }}>
            <span>i</span>
          </li>
          <li style={{ "--i": 5 }}>
            <span>g</span>
          </li>
          <li style={{ "--i": 6 }}>
            <span>B</span>
          </li>
          <li style={{ "--i": 7 }}>
            <span>O</span>
          </li>
          <li style={{ "--i": 8 }}>
            <span>O</span>
          </li>
          <li style={{ "--i": 9 }}>
            <span>T</span>
          </li>
          <li style={{ "--i": 10 }}>
            <span>C</span>
          </li>
          <li style={{ "--i": 11 }}>
            <span>A</span>
          </li>
          <li style={{ "--i": 12 }}>
            <span>m</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GradientClock;
