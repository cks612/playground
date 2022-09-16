import React from "react";
import "../../styles/_glowingRingStyles.scss";

const GlowingRing = () => {
  return (
    <div className="glowingRingWrapper">
      <div className="container">
        <div className="loader">
          <span />
        </div>
        <div className="loader">
          <span />
        </div>
        <div className="loader">
          <i />
        </div>
        <div className="loader">
          <i />
        </div>
      </div>
    </div>
  );
};

export default GlowingRing;
