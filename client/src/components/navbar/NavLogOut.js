import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { AuthContext } from '../../context/auth' 

export default function NavLogOut() {
  const {logoutUser} = useContext(AuthContext)
  const handleLogOut = () => {
    logoutUser()
  }
  return (
    <Navbar.Collapse className='justify-content-end'>
      <Nav>
        <Nav.Item>
          <Link to='/' onClick={handleLogOut}>
            Sign out
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  )
}
