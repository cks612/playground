import React from "react";
import "../../styles/_scannerStyles.scss";

const Scanner = () => {
  return (
    <div className="scanner">
      <div className="scan">
        <div className="fingerPrint"></div>
        <h3>Scanning...</h3>
      </div>
    </div>
  );
};

export default Scanner;
