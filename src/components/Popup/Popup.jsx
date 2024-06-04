import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose }) => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f913e83a-f251-41a1-b23c-ed9c3ce9cea8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
    }
  };



  if (!show) {
    return null;
  }

  return (
  
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Download our free Ebook</h2>
        <p>Want to learn how to manage your business?</p>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required />
            <label>Your Email</label>
            <input type='email' name='email' placeholder='Enter your email' required />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your number' required />
            <label>Restaurant Name</label>
            <input type='text' name='restaurant' placeholder='Enter your restaurant name' required />
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>

  );
};

export default Popup;
