import React from "react";
import "../../styles/_inputFieldStyles.scss";

const InputField = () => {
  return (
    <div className="inputFieldWrapper">
      <div className="inputBox">
        <input type="text" required="required" />
        <span>First Name</span>
        <i />
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Last Name</span>
        <i />
      </div>
    </div>
  );
};

export default InputField;
