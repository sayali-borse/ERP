import React, { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext(null);

const AuthContext = ({ children }) => {
  // creating state for user is initially not login
  const [user, setUser] = useState(null);

  //  function for sign up
  function signUp(email, password) {
    const users = [];

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
  function login() {}

  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
