import React from 'react'
import './Service.css'
import image_icon from '../../assets/IMG_3254.jpg'

const Service = () => {
  return (
    <div className='service'>
        <div className="service-left">
            <h3>About Business</h3>
            <h2>Somehtign about somthing</h2>
            <p>asudhgladgadsadsajbsdljfbdshjfbdfhff  dsfljkgsdlhfga dgfhljadglfh dh df sakjhfgdvs </p>
            <p>asdlis jhsdj  aslj  </p>
        </div>
        <div className="service-right">
            <img src={image_icon} alt='' className='service-img'/>
        </div>
    </div>
  )
}

export default Service