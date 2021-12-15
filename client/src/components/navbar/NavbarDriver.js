import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function NavbarDriver() {
  return (
    <Nav>
      <Nav.Item>
        <Link to='/driver/delivery'>Show delivery</Link>
      </Nav.Item>
      <NavDropdown title='Manage profile'>
        <NavDropdown.Item>
          <Link to='/driver/edit'>Edit profile</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/driver/password'>Change password</Link>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}