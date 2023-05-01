import React from "react";
import "../../styles/_zeroCollision.scss";

const ZeroCollision = () => {
  return (
    <div className="zeroCollisionWrapper">
      <div className="container">
        <div className="square">
          <span style={{ "--i": 0 }} />
          <span style={{ "--i": 1 }} />
          <span style={{ "--i": 2 }} />
          <span style={{ "--i": 3 }} />
        </div>
        <div className="square">
          <span style={{ "--i": 0 }} />
          <span style={{ "--i": 1 }} />
          <span style={{ "--i": 2 }} />
          <span style={{ "--i": 3 }} />
        </div>
        <div className="square">
          <span style={{ "--i": 0 }} />
          <span style={{ "--i": 1 }} />
          <span style={{ "--i": 2 }} />
          <span style={{ "--i": 3 }} />
        </div>
      </div>
    </div>
  );
};

export default ZeroCollision;
