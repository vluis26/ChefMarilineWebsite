import React, { useState } from 'react';
import './Hero.css';
import video from '../../assets/marilineINC.mp4';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/schedule-meeting');
  };


  return (
    <div className='hero'>
      <video className='hero-video' autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className='hero-overlay'></div>
      <div className='hero-text'>
        <h1>Unlock your Restaurant's Potential</h1>
        <p>Ready to take your restaurant to the next level? Sign up now to receive our free Ebook.
          Gain insights from industry experts and start transforming your business today!
        </p>
        <button className='btn' onClick={handleButtonClick}>Claim My Free Consultation!</button>
      </div>
    </div>
  );
};

export default Hero;
