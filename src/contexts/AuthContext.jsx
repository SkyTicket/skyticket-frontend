import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 });
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {!isLoading && children}{" "}
    </AuthContext.Provider>
  );
};
