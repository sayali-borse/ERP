import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Authcontext from "../context/AuthContext";

const Auth = () => {
  const [mode, setMode] = useState("SignUp");
  const { signUp } = useContext(Authcontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    signUp(data.email, data.password);
  }
  return (
    <>
      {/* ------------ creating form ------- */}
      <div className="page">
        <div className="container">
          <div className="auth-container">
            <h1 className="page-title">
              {" "}
              {mode === "SignUp" ? "Sign Up" : "Login"}
            </h1>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="form-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input "
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",

                    minLength: {
                      value: 5,
                      message: "Minimum 5 characters Requied",
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum 12 characters Requied",
                    },
                  })}
                />
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
              </div>
              {/* ------- submit button ------ */}
              <button type="submit" className="btn btn-primary btn-large">
                {" "}
                {mode === "SignUp" ? "Sign Up" : "Login"}
              </button>
            </form>
            <div className="auth-switch">
              {mode === "SignUp" ? (
                <p>
                  Already you have an Account?{" "}
                  <span className="auth-link" onClick={() => setMode("Login")}>
                    {" "}
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't you have an Account?{" "}
                  <span className="auth-link" onClick={() => setMode("SignUp")}>
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
