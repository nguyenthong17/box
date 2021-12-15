import React, {useContext} from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";


export default function Footer() {
  const {isLoggedIn} = useContext (AuthContext)

  return (
    <div className="footer">
      <p>
      &copy; box
      </p>
      { !isLoggedIn && 
      <Link to='/admin/login'>
        <p>Log in as admin</p>
      </Link>
      }


      {/* below is for testing the link */}
    </div>
  );
}
