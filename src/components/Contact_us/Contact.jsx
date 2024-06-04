import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_646135.png'
import phone_icon from '../../assets/phone-call_455705.png'
import insta_icon from '../../assets/instagram.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best service to help your business succeed.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><img src={mail_icon} alt="Facebook" /></a>
            <a href="https://twitter.com"><img src={phone_icon} alt="Twitter" /></a>
            <a href="https://linkedin.com"><img src={insta_icon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Luis Villa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
