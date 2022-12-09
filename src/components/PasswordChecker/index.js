import React from "react";
import { useState } from "react";
import "../../styles/_passwordCheckerStyles.scss";

const PasswordChecker = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrenth, setPasswordStrenth] = useState(0);

  const handleCheckValidation = e => {
    let i = 0;

    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const final = new RegExp("(?=.*[A-Za-z0-8])");

    const { value } = e.target;
    if (value.length > 6) {
      i++;
    }
    if (value.length >= 10) {
      i++;
    }
    if (upper.test(value)) {
      i++;
    }
    if (number.test(value)) {
      i++;
    }
    if (final.test(value)) {
      i++;
    }
    setPasswordStrenth(i);
  };

  return (
    <div className="passwordCheckerWrapper">
      <div className={passwordStrenth <= 2 ? "container weak" : passwordStrenth >= 2 && passwordStrenth <= 4 ? "container medium" : "container strong"}>
        <h2>Password Strength Check</h2>
        <div className="inputBox">
          <input type={showPassword ? "text" : "password"} placeholder="password" id="myPassword" onChange={handleCheckValidation} />
          <div className={showPassword ? "show hide" : "show"} onClick={() => setShowPassword(!showPassword)} />
        </div>
        <div className="strengthMeter" />
      </div>
    </div>
  );
};

export default PasswordChecker;
