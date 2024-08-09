import React from 'react';
import './Footer.css'; // Make sure to adjust the path if necessary
import mail_icon from '../../assets/mail_646135.png';
import phone_icon from '../../assets/phone-call_455705.png';
import insta_icon from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-section contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li><img src={mail_icon} alt="Mail Icon" /> chefmarilinevilla@gmail.com</li>
              <li><img src={phone_icon} alt="Phone Icon" /> +1 786-439-8587</li>
              <li><img src={insta_icon} alt="Instagram Icon" /> @chefmarilinevilla</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Luis Villa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
