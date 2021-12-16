import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavbarCustomer() {
  return (
    <Nav>
      <Nav.Item>
        <Link to="/customer/orders">Show all orders</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/customer/order/create">Create Order</Link>
      </Nav.Item>
    </Nav>
  );
}
