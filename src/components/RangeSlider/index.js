import React, { useState } from "react";
import "../../styles/_rangeSliderStyles.scss";

const RangeSlider = () => {
  const [value, setValue] = useState(0);
  const rangeSliderHandler = e => {
    setValue(e.target.value);
  };

  return (
    <div className="rangeWrapper">
      <div className="box">
        <input type="range" className="range" value={value} min="0" max="100" onChange={rangeSliderHandler} />
        <span id="rangeValue">{value}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
