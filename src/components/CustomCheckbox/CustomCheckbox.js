import React from "react";
import "../../styles/_customCheckboxStyles.scss";

const CustomCheckbox = () => {
  return (
    <div className="customCheckbox">
      <label>
        <input type="checkbox" />
        <span></span>
        <text>OFF</text>
        <text>ON</text>
      </label>
    </div>
  );
};

export default CustomCheckbox;
