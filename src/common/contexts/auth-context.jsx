import React, { createContext } from "react";
import { postData } from "../apis/base-api";
import { LOGIN_API } from "../apis/api-urls";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const loginUser = async (values) => {
    try {
      let data = await postData(LOGIN_API, values);
      console.log("data", data);
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
