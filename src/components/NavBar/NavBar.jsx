import React from 'react'
import './NavBar.css'
import logo from '../../assets/number1.jpeg'

export const NavBar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default NavBar