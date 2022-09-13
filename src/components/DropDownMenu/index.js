import React, { useState } from "react";
import "../../styles/_dropDownMenuStyles.scss";

const DropDownMenu = () => {
  const [isClicked, setIsClicked] = useState();
  const [optionName, setOptionName] = useState();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleChangeOption = e => {
    setOptionName(e.target.outerText);
  };

  return (
    <div className="dropDownWrapper">
      <div className={isClicked ? "dropDown active" : "dropDown"} onClick={handleClick}>
        <input type="text" className="text02" placeholder="DropDown Menu" readOnly value={optionName || ""} />
        <div className="option">
          <div onMouseOver={handleChangeOption}>HTML</div>
          <div onMouseOver={handleChangeOption}>CSS</div>
          <div onMouseOver={handleChangeOption}>Javscript</div>
          <div onMouseOver={handleChangeOption}>ReactJS</div>
          <div onMouseOver={handleChangeOption}>Photoshop</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
