import React from "react";
import "../../styles/_animatedCubesStyles.scss";

const AnimatedCubes = () => {
  return (
    <div className="AnimatedCubeWrapper">
      <div className="cube">
        <div className="big">
          <span style={{ "--i": 0, "--clr": "#e2e2e2" }} />
          <span style={{ "--i": 1, "--clr": "#f0f0f0" }} />
          <span style={{ "--i": 2, "--clr": "#e2e2e2" }} />
          <span style={{ "--i": 3, "--clr": "#f0f0f0" }} />
          <span className="top" style={{ "--clr": "#fff" }} />
        </div>
      </div>
      <div className="cube2">
        <div className="big">
          <span style={{ "--i": 0, "--clr": "#ffa20d" }} />
          <span style={{ "--i": 1, "--clr": "#ff8502" }} />
          <span style={{ "--i": 2, "--clr": "#ffa20d" }} />
          <span style={{ "--i": 3, "--clr": "#ff8502" }} />
          <span className="top" style={{ "--clr": "#ffbb56" }} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCubes;
