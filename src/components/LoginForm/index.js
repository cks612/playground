import React from "react";
import "../../styles/_loginFormStyles.scss";

const LoginForm = () => {
  return (
    <div className="loginFormWrapper">
      <div className="box">
        <div className="form">
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Username</span>
            <i />
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i />
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </div>
          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
