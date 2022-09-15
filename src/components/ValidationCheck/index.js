import React from "react";
import { useState } from "react";
import "../../styles/_validationCheckStyles.scss";

const ValidationCheck = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [validData, setValidData] = useState({
    lower: false,
    upper: false,
    number: false,
    special: false,
    length: false,
  });

  const handleCheckValidation = e => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    const { value } = e.target;
    if (lower.test(value)) {
      setValidData(prev => ({ ...prev, lower: true }));
    } else {
      setValidData(prev => ({ ...prev, lower: false }));
    }
    if (upper.test(value)) {
      setValidData(prev => ({ ...prev, upper: true }));
    } else {
      setValidData(prev => ({ ...prev, upper: false }));
    }
    if (number.test(value)) {
      setValidData(prev => ({ ...prev, number: true }));
    } else {
      setValidData(prev => ({ ...prev, number: false }));
    }
    if (special.test(value)) {
      setValidData(prev => ({ ...prev, special: true }));
    } else {
      setValidData(prev => ({ ...prev, special: false }));
    }
    if (length.test(value)) {
      setValidData(prev => ({ ...prev, length: true }));
    } else {
      setValidData(prev => ({ ...prev, length: false }));
    }
  };

  return (
    <div className="ValidationWrapper">
      <div className="box">
        <div className="inputBox">
          <input type={isClicked ? "text" : "password"} id="pswrd" placeholder="Password" onChange={handleCheckValidation} />
          <span className={isClicked ? "hide" : ""} id="toggleBtn" onClick={() => setIsClicked(!isClicked)} />
        </div>
        <div className="validation">
          <ul>
            <li className={validData.lower ? "valid" : ""} id="lower">
              At least one lowercase character
            </li>
            <li className={validData.upper ? "valid" : ""} id="upper">
              At least one uppercase character
            </li>
            <li className={validData.number ? "valid" : ""} id="number">
              At least one number
            </li>
            <li className={validData.special ? "valid" : ""} id="special">
              At least one special character
            </li>
            <li className={validData.length ? "valid" : ""} id="length">
              At least 8 characters
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValidationCheck;
