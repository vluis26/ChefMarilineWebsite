import React from 'react'
import './NavBar.css'
import logo from '../../assets/number1.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

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
          {/* change offset to position scroll feature */}
            <li><Link to='hero' smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='service' smooth={true} offset={-325} duration={500}>Services</Link></li>
            <li><Link to='photo' smooth={true} offset={-300} duration={500}>Photos</Link></li>
            <li><Link to='contact' smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar