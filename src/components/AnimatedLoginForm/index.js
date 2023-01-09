import React from "react";
import "../../styles/_animatedLoginStyles.scss";

const AnimatedLogin = () => {
  return (
    <div className="animatedLoginWrapper">
      <div className="container">
        <div className="box">
          <div className="cover" />
          <div className="shadow" />
          <div className="content">
            <div className="form">
              <h3 className="logo">
                <i class="fa-solid fa-key" />
              </h3>
              <h2>Sign in</h2>
              <div className="inputBox">
                <input type="text" required />
                <i class="fa-solid fa-user" />
                <span>Username</span>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <i class="fa-solid fa-lock" />
                <span>Password</span>
              </div>
              <div className="links">
                <a href="#">
                  <i class="fa-solid fa-question" />
                  Forgot Password
                </a>
                <a href="#">
                  <i class="fa-solid fa-user-plus" />
                  Sign up
                </a>
              </div>
              <div className="inputBox">
                <input type="submit" value="login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogin;
