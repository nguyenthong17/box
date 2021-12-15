import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDefault from './NavDefault'
import NavLogOut from './NavLogOut'
import NavbarAdmin from './NavbarAdmin'
import NavbarDriver from './NavbarDriver'
import NavbarCustomer from './NavbarCustomer'

// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavTemplate() {
  const {isLoggedIn, user} = useContext(AuthContext)
  return (
    <Container className='d-flex'>
      <Link to='/'>
        <img className='.logo' src='/logo.png' alt="Logo" height='50px'/>
      </Link>

      <Navbar className='navbar-link col-11'>  
        {( user?.userType === 'customer') && <NavbarCustomer />}
        {( user?.userType === 'driver') && <NavbarDriver/>}
        {( user?.userType === 'admin') && <NavbarAdmin />}
        {isLoggedIn ? <NavLogOut /> :<NavDefault />}
      </Navbar>
    
    </Container>
)}
