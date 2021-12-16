import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="container footer d-flex">
      <p className='col align-self-center'>&copy; box</p>
      {!isLoggedIn && (
        <Link to="/admin/login">
          <p>Log in as admin</p>
        </Link>
      )}
    </div>
  );
}
