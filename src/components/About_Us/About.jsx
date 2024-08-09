import React from 'react'
import './About.css'
import about_img from '../../assets/IMG_3251.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>

        </div>
        <div className="about-right">
            <h3>At ChefMariline Consulting</h3>
            <h2>Helping Restaurants</h2>
            <p>Chef Mariline Villa specializes in empowering restaurant owners and aspiring restaurateurs to achieve their business goals through expert guidance and practical strategies. With a proven track record of transforming restaurants into successful, high-performing establishments, we offer comprehensive consulting services tailored to your unique needs. By partnering with us, you'll gain access to our extensive industry knowledge, innovative marketing techniques, and efficient operational solutions, ensuring your restaurant stands out in a competitive market. Choose ChefMariline Consulting to elevate your business and secure lasting success.</p>
        </div>

    </div>
  )
}

export default About