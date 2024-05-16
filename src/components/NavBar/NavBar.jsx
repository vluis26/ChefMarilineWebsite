import React from 'react'
import './NavBar.css'
import logo from '../../assets/number1.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'

export const NavBar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Photos</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default NavBar