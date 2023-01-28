import React from "react";
import "../../styles/_runningCarStyles.scss";

const RunningCar = () => {
  return (
    <div className="runningCarWrapper">
      <div className="road">
        <div className="police">
          <div className="light_beam" />
          <h4>Police</h4>
          <h3>Police</h3>
          <div className="side_mirror" />
          <span>
            <b />
            <i />
          </span>
        </div>
        <div className="police">
          <div className="light_beam" />
          <h4>Police</h4>
          <h3>Police</h3>
          <div className="side_mirror" />
          <span>
            <b />
            <i />
          </span>
        </div>
        <div className="taxi">
          <div className="light_beam" />
          <div className="side_mirror" />
          <span>
            <b />
            <i />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RunningCar;
