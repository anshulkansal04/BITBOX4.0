import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="body-signup">
      <div className="wrapper-signup">
        <div className="signup-box">
          <div className="login-header">
            <span>Signup</span>
          </div>
          <form action="/signup" method="post">
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="fname"
                id="fname"
                autoComplete="off"
                required
              />

              <label htmlFor="user" className="label-signup">
                First Name
              </label>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="lname"
                id="lname"
                autoComplete="off"
                required
              />
              <label htmlFor="user" className="label-signup">
                Last Name
              </label>
            </div>

            <div className="input-box">
              <input
                type="text"
                name="email"
                id="email"
                className="input-field"
                autoComplete="off"
              />
              <label htmlFor="user" className="label-signup">
                E-Mail
              </label>
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field"
                name="password"
                id="pass"
                autoComplete="off"
              />
              <label htmlFor="pass" className="label-signup">
                Password
              </label>
            </div>

            <div className="input-box">
              <button className="input-submit">SignUp</button>
            </div>
            <div className="register">
              <span>
                Already have an account? <Link to="/Login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
