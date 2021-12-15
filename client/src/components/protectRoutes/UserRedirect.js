import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Navigate } from "react-router-dom";

export default function UserRedirect({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;
  if (isLoggedIn) {
    if (user?.userType === "admin") {
      return <Navigate to={"/admin"} />;
    } else if (user?.userType === "driver") {
      return <Navigate to={"/driver"} />;
    } else if (user?.userType === "customer") {
      return <Navigate to={"/customer"} />;
    }
  } else {
    return children;
  }
}
