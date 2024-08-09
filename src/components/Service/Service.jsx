import React, { useState } from 'react';
import './Service.css'; // Import your CSS file for styling
import image_icon from '../../assets/IMG_3254.jpg';

const Service = () => {
  // State to manage the visibility of dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  // Sample content for dropdowns
  const dropdownContent = {
    0: "System Implementation: We streamline your restaurant's operations by implementing efficient systems that enhance productivity and consistency, ensuring your business runs smoothly from the kitchen to the front-of-house.",
    1: "Operational Experience: With hands-on operational experience, we provide insights and strategies that optimize your day-to-day restaurant activities, allowing you to deliver exceptional service while maximizing efficiency.",
    2: "Customer Service: We elevate your restaurant's customer service by training your team in best practices, ensuring every guest enjoys a memorable dining experience that keeps them coming back.",
    3: "Financial Management: Our financial management services help you maintain a healthy bottom line by optimizing your budget, controlling costs, and increasing profitability through smart financial planning and analysis.",
    4: "Menu Development: We craft menus that not only showcase your culinary vision but also appeal to your target audience, balancing creativity with profitability to make your offerings stand out in a competitive market.",
    5: "New Restaurant Launch: From concept to opening day, we guide you through every step of launching a new restaurant, ensuring your vision comes to life with a strong foundation for long-term success.",
  };

  return (
    <div className='service'>
      <div className="service-left">
        <h3>At ChefMariline Consulting</h3>
        <h2>Services We Offer</h2>
        <p>We provide a comprehensive range of services to help your restaurant succeed. Our offerings include:</p>
        <ul>
          {Object.keys(dropdownContent).map((key, index) => (
            <li key={index}>
              <div 
                className='dropdown-title' 
                onClick={() => toggleDropdown(index)}
              >
                {/* Display the first two words of the content */}
                {dropdownContent[key].split(" ").slice(0, 2).join(" ")}
              </div>
              {openDropdown === index && (
                <div className='dropdown-content'>
                  {dropdownContent[index]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-right">
        <img src={image_icon} alt='Service Image' className='service-img'/>
      </div>
    </div>
  );
};

export default Service;
