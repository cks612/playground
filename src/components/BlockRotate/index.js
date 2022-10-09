import React from "react";
import "../../styles/_blockRotateStyles.scss";

const BlockRotate = () => {
  return (
    <div className="blockWrapper">
      <div className="box">
        <div className="loader">
          <span style={{ "--i": 1 }} />
          <span style={{ "--i": 2 }} />
          <span style={{ "--i": 3 }} />
          <span style={{ "--i": 4 }} />
          <span style={{ "--i": 5 }} />
          <span style={{ "--i": 6 }} />
          <span style={{ "--i": 7 }} />
          <span style={{ "--i": 8 }} />
          <span style={{ "--i": 9 }} />
          <span style={{ "--i": 10 }} />
          <span style={{ "--i": 11 }} />
          <span style={{ "--i": 12 }} />
        </div>
        <h3>
          CSS is <b>Awesome</b>
        </h3>
      </div>
    </div>
  );
};

export default BlockRotate;
