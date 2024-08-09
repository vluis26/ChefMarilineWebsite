import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();


  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.scrollY > 500 ? setSticky(true) : setSticky(false);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Check if current path is '/schedule-meeting'
  const isScheduleMeetingPage = location.pathname === '/schedule-meeting';

  // Render null if on '/schedule-meeting' to hide NavBar
  if (isScheduleMeetingPage) return null;

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      {/* <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink>
        </li>
        <li>
          <ScrollLink to='service' smooth={true} offset={-325} duration={500}>Services</ScrollLink>
        </li>
        <li>
          <ScrollLink to='photo' smooth={true} offset={-300} duration={500}>Photos</ScrollLink>
        </li>
        <li>
          <ScrollLink to='contact' smooth={true} offset={-100} duration={500}>Contact Us</ScrollLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
