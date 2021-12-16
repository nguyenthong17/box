import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavbarDriver() {
  return (
    <Nav className="navbar-link">
      <Nav.Item>
        <Link to="/driver/delivery">Show delivery</Link>
      </Nav.Item>
    </Nav>
  );
}
