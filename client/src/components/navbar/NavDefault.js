import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavDefault() {
  return (
    <>
     <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Item>
              <Link to='/customer/signup'>Sign up</Link>
            </Nav.Item>
            
            <NavDropdown title='Login'>
              <NavDropdown.Item>
                <Link to='/customer/login'>Log in for Customer</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/driver/login'>Log in for Driver</Link>
              </NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse> 
    </>
  )
}
