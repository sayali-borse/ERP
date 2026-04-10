import React, { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("SignUp");
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="auth-container">
            <h1 className="page-title">
              {" "}
              {mode === "SignUp" ? "Sign Up" : "Login"}
            </h1>
            <form className="auth-form">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-input" type="email" id="email" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input className="form-input" type="password" id="password" />
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                {" "}
                {mode === "SignUp" ? "Sign Up" : "Login"}
              </button>
            </form>
            <div className="auth-switch">
              {mode === "SignUp" ? (
                <p>
                  Already you have an Account?{" "}
                  <span className="auth-link" onClick={setMode("Login")}>
                    {" "}
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't you have an Account?{" "}
                  <span className="auth-link" onClick={setMode("Login")}>
                    {" "}
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
