import React, { createContext } from "react";
import { useState } from "react";

const Authcontext = createContext(null);

const AuthContext = ({ children }) => {
  // creating state for user is initially not login
  const [user, setUser] = useState(null);
  function signUp() {}
  function login() {}

  return <Authcontext.Provider>{children}</Authcontext.Provider>;
};

export default AuthContext;
