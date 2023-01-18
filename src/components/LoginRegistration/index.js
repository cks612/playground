import React, { useState } from "react";
import "../../styles/_loginRegistrationStyles.scss";

const LoginRegistartionForm = () => {
  const [hasAccount, setHasAccount] = useState(false);
  console.log(hasAccount);
  return (
    <div className="loginRegisterWrapper">
      <div className="container">
        {hasAccount ? (
          <div className="form signin">
            <h2>Sign In</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <i class="fa-regular fa-user" />
              <span>username</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i class="fa-solid fa-lock" />
              <span>password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
            <p>
              Not Registered ? /
              <a href="#" className="create" onClick={() => setHasAccount(!hasAccount)}>
                Create an account
              </a>
            </p>
          </div>
        ) : (
          <div className="form signup">
            <h2>Sign Up</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <i class="fa-regular fa-user" />
              <span>username</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" />
              <i class="fa-regular fa-envelope" />
              <span>email address</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i class="fa-solid fa-lock" />
              <span>create password</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i class="fa-solid fa-lock" />
              <span>confirm password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" />
            </div>
            <p>
              Already a member ? /
              <a href="#" className="login" onClick={() => setHasAccount(!hasAccount)}>
                Log in
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegistartionForm;
