import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const adminData = localStorage.getItem("eeduhub_admin");

  // Not logged in → redirect
  if (!adminData) {
    return <Navigate to="/AdminLogin" replace />;
  }

  // Logged in → show children
  return children;
}

export default ProtectedRoute;
