import React, { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const loginUser = async (values) => {
    try {
      console.log("values......", values);
    } catch (error) {
      console.log("error", error);
    }
  };
  const contextValues = {
    loginUser,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
