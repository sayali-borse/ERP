import React, { createContext, useState } from "react";

// ✅ Proper naming
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = { email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
  }

  function login() {}

  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
