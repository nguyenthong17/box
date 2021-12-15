import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function NavbarAdmin() {
  return (
    <Nav>
      <NavDropdown title='Driver'>
        <NavDropdown.Item>
          <Link  to='/admin/driver/create'>Create</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/admin/driver'>List all driver</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Link to='/admin/orders'>Manage Order</Link>
      </Nav.Item>  
    </Nav>
  )
}
