import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [user_role, setUserRole] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const role = Cookies.get("user_role");


    if (token) {
      setIsLoggedIn(true);
      setUserEmail(email || null);
      setUserRole(role || null);
    }
    setIsLoading(false);
  }, []);

  const login = (token, role, email) => {
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("user_role", role, { expires: 7 });
    if (email) Cookies.set("email", email, { expires: 7 });

    setIsLoggedIn(true);
    setUserEmail(email);
    setUserRole(role);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("user_role");
    setIsLoggedIn(false);
    setUserEmail(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userEmail, user_role, login, logout }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
