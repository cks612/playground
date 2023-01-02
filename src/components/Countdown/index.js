import React from "react";
import { useState } from "react";
import "../../styles/_countDownStyles.scss";

const Countdown = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [circleStyle, setCircleStyle] = useState({
    day_dot: {},
    ddStlye: {},
    hhStyle: {},
    mmStyle: {},
    ssStyle: {},
  });
  const [dotStyle, setDotStyle] = useState({
    day_dot: {},
    hr_dot: {},
    min_dot: {},
    sec_dot: {},
  });

  let endDate = "01/01/2024 00:00:00";
  const x = setInterval(() => {
    const now = new Date(endDate).getTime();
    const countDown = new Date().getTime();
    const distance = now - countDown;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({
      ...time,
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
    });

    const ddStyle = {
      strokeDashoffset: 440 - (440 * d) / 365,
    };

    const hhStyle = {
      strokeDashoffset: 440 - (440 * h) / 24,
    };
    const mmStyle = {
      strokeDashoffset: 440 - (440 * m) / 60,
    };
    const ssStyle = {
      strokeDashoffset: 440 - (440 * s) / 60,
    };

    // animate circle dots
    // 360deg / 365days = 0.986
    const day_dot = {
      transform: `rotateZ(${d * 0.986}deg)`,
    };
    // 360deg / 24hrs = 15
    const hr_dot = {
      transform: `rotateZ(${h * 15}deg)`,
    };
    // 360deg / 60min = 6
    const min_dot = {
      transform: `rotateZ(${m * 6}deg)`,
    };
    // 360deg / 60sec = 6
    const sec_dot = {
      transform: `rotateZ(${s * 6}deg)`,
    };

    setCircleStyle({
      ddStlye: ddStyle,
      hhStyle: hhStyle,
      mmStyle: mmStyle,
      ssStyle: ssStyle,
    });

    setDotStyle({
      day_dot: day_dot,
      hr_dot: hr_dot,
      min_dot: min_dot,
      sec_dot: sec_dot,
    });

    if (distance < 0) {
      clearInterval(x);
      setIsFinished(!isFinished);
    }
  });

  return (
    <div className="CountdownWrapper">
      <div id="time" style={isFinished ? { display: "none" } : null}>
        <div className="circle" style={{ "--clr": "#fff" }}>
          <div className="dots day_dot" style={dotStyle.day_dot} />
          <svg>
            <circle cx={70} cy={70} r={70} />
            <circle cx={70} cy={70} r={70} style={circleStyle.ddStlye} />
          </svg>
          <div id="days">
            {time.days}
            <br /> <span>Days</span>
          </div>
        </div>

        <div className="circle" style={{ "--clr": "#ff2972" }}>
          <div className="dots hr_dot" style={dotStyle.hr_dot} />
          <svg>
            <circle cx={70} cy={70} r={70} />
            <circle cx={70} cy={70} r={70} id="hh" style={circleStyle.hhStyle} />
          </svg>
          <div id="hours">
            {time.hours}
            <br /> <span>Hours</span>
          </div>
        </div>

        <div className="circle" style={{ "--clr": "#fee800" }}>
          <div className="dots min_dot" style={dotStyle.min_dot} />
          <svg>
            <circle cx={70} cy={70} r={70} />
            <circle cx={70} cy={70} r={70} id="mm" style={circleStyle.mmStyle} />
          </svg>
          <div id="minutes">
            {time.minutes}
            <br /> <span>Minutes</span>
          </div>
        </div>

        <div className="circle" style={{ "--clr": "#04fc43" }}>
          <div className="dots sec_dot" style={dotStyle.sec_dot} />
          <svg>
            <circle cx={70} cy={70} r={70} />
            <circle cx={70} cy={70} r={70} id="ss" style={circleStyle.ssStyle} />
          </svg>
          <div id="seconds">
            {time.seconds}
            <br /> <span>Seconds</span>
          </div>
        </div>
      </div>

      <h2 className="newYear" style={isFinished ? { display: "none" } : null}>
        2023
        <br />
        <span>Happy New Year</span>
      </h2>
    </div>
  );
};

export default Countdown;
