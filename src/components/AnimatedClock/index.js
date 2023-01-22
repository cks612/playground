import React, { useState } from "react";
import "../../styles/_animatedClockStyles.scss";

const AnimatedClock = () => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * 6;
  const sc = day.getSeconds() * 6;

  const [, setHour] = useState(sc);

  setInterval(() => {
    setHour(prev => ({ ...(prev + 1) }));
  });

  const scStyle = {
    transform: `rotateZ(${sc}deg)`,
  };

  const mmStyle = {
    transform: `rotateZ(${mm}deg)`,
  };

  const hrStyle = {
    transform: `rotateZ(${hh + mm / 12}deg)`,
  };
  return (
    <div className="animatedClockWrapper">
      <div className="clock">
        <div className="numbers">
          <span style={{ "--i": 0 }}>
            <b>12</b>
          </span>
          <span style={{ "--i": 1 }}>
            <b>3</b>
          </span>
          <span style={{ "--i": 2 }}>
            <b>6</b>
          </span>
          <span style={{ "--i": 3 }}>
            <b>9</b>
          </span>
          <div className="circle" id="hr" style={hrStyle}>
            <i />
          </div>
          <div className="circle" id="mm" style={mmStyle}>
            <i />
          </div>
          <div className="circle" id="sc" style={scStyle}>
            <i />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedClock;
