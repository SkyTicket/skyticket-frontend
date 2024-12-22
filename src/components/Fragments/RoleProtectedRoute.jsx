import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, user_role } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user_role)) {
    return <Navigate to="/" replace />; // Redirect ke home jika role tidak sesuai
  }

  return children;
};

export default RoleProtectedRoute;