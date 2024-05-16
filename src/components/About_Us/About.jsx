import React from 'react'
import './About.css'
import about_img from '../../assets/number4.jpeg'
import play_icon from '../../assets/number3.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>

        </div>
        <div className="about-right">
            <h3>About Business</h3>
            <h2>Somehtign about somthing</h2>
            <p>asudhgladgadsadsajbsdljfbdshjfbdfhff  dsfljkgsdlhfga dgfhljadglfh dh df sakjhfgdvs </p>
            <p>asdlis jhsdj  aslj  </p>
        </div>

    </div>
  )
}

export default About