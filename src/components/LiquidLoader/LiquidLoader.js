import React from "react";
import "../../styles/_liquidLoaderStyles.scss";

const LiquidLoader = () => {
  return (
    <div className="liquidWrapper">
      <div className="container">
        <h2>Milk</h2>
        <div className="loader">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 7 }}></span>
        </div>
      </div>
      <svg>
        <filter id="Gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix
            values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
          "
          ></feColorMatrix>
        </filter>
      </svg>
    </div>
  );
};

export default LiquidLoader;
