import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    setIsLoggedIn(!!token);
    setUserEmail(email || null);
    setIsLoading(false);
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 });
    if (email) Cookies.set("email", email, { expires: 7 });
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const [userId, setUserId] = useState(null);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("email");
    setIsLoggedIn(false);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {!isLoading && children}{" "}
    </AuthContext.Provider>
  );
};
