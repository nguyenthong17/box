import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarCustomer() {
  return (
    <Nav>
      {/* <NavDropdown title='Order'>
        <NavDropdown.Item>
          <Link to='/customer/order/create'>Create Order</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/customer/orders'>Show all orders</Link>
        </NavDropdown.Item>
      </NavDropdown> */}
      {/* <NavDropdown title='Manage profile'>
        <NavDropdown.Item>
          <Link to='/customer/edit'>Edit profile</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/customer/password'>Change password</Link>
        </NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Item>
        <Link to="/customer/orders">Show all orders</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/customer/order/create">Create Order</Link>
      </Nav.Item>
    </Nav>
  );
}
