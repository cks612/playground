import React, { useState } from "react";
import "../../styles/_analogClockStyles.scss";

const AnalogClock = () => {
  const day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  const [hour, setHour] = useState(ss);

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  setInterval(() => {
    setHour(prev => ({ ...(prev + 1) }));
  });

  const scStyle = {
    "--clr": "#04fc43",
    transform: `rotateZ(${ss}deg)`,
  };

  const mmStyle = {
    "--clr": "#fee800",
    transform: `rotateZ(${mm}deg)`,
  };

  const hrStyle = {
    "--clr": "#ff2972",
    transform: `rotateZ(${hh + mm / 12}deg)`,
  };
  return (
    <div className="analogClock">
      <div className="container">
        <div className="clock">
          <div className="circle" id="sc" style={scStyle}>
            <i></i>
          </div>
          <div className="circle circle2" id="mn" style={mmStyle}>
            <i></i>
          </div>
          <div className="circle circle3" id="hr" style={hrStyle}>
            <i></i>
          </div>

          <span style={{ "--i": 1 }}>
            <b>1</b>
          </span>
          <span style={{ "--i": 2 }}>
            <b>2</b>
          </span>
          <span style={{ "--i": 3 }}>
            <b>3</b>
          </span>
          <span style={{ "--i": 4 }}>
            <b>4</b>
          </span>
          <span style={{ "--i": 5 }}>
            <b>5</b>
          </span>
          <span style={{ "--i": 6 }}>
            <b>6</b>
          </span>
          <span style={{ "--i": 7 }}>
            <b>7</b>
          </span>
          <span style={{ "--i": 8 }}>
            <b>8</b>
          </span>
          <span style={{ "--i": 9 }}>
            <b>9</b>
          </span>
          <span style={{ "--i": 10 }}>
            <b>10</b>
          </span>
          <span style={{ "--i": 11 }}>
            <b>11</b>
          </span>
          <span style={{ "--i": 12 }}>
            <b>12</b>
          </span>
        </div>

        <div id="time">
          <div id="hour" style={{ "--clr": "#ff2972" }}>
            {h}
          </div>
          <div id="minutes" style={{ "--clr": "#fee800" }}>
            {m}
          </div>
          <div id="seconds" style={{ "--clr": "#04fc43" }}>
            {s}
          </div>
          <div id="ampm"> {h >= 12 ? "AM" : "PM"}</div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
