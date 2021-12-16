import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children, redirectTo }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;
  if (isLoggedIn && user?.userType === "admin") {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
}
