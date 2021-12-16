import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [headers, setHeaders] = useState(null);

  const loginUser = (token) => {
    localStorage.setItem("authToken", token);
    verifyToken();
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  const getHeaders = (token) => {
    return { authorization: `Bearer ${token}` };
  };

  const verifyToken = () => {
    const storedToken = localStorage.getItem("authToken");

    const headersToken = getHeaders(storedToken);
    setHeaders(headersToken);

    if (storedToken) {
      axios
        .get("/auth/verify", {
          headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then((response) => {
          const payload = response.data;
          setUser(payload);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((err) => {
          setUser(null);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        errMessage,
        loginUser,
        setErrMessage,
        logoutUser,
        headers
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
