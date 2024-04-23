import { createContext } from "react";

export const AuthContext = createContext();
const user = JSON.parse(localStorage.getItem("user")) || null;

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
