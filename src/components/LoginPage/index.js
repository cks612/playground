import React from "react";
import "../../styles/_loginPageStyles.scss";

const LoginPage = () => {
  return (
    <div className="loginPageWrapper">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2>Sign in</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="Username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="password" />
              </div>
              <div className="inputBox">
                <input type="submit" value="login" />
              </div>
            </form>
          </div>
        </div>
        <a href="#" className="btns">
          Forget Password
        </a>
        <a href="#" className="btns signup">
          Signup
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
