import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_646135.png'
import phone_icon from '../../assets/phone-call_455705.png'
import insta_icon from '../../assets/instagram.png'

const Contact = () => {

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


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to message us using the contact form or from our contact information below</p>
            <ul>
                <li> <img src={mail_icon} /> chefmarilinevilla@gmail.com</li>
                <li> <img src={phone_icon} /> +1 786-439-8587</li>
                <li> <img src={insta_icon} /> @chefmarilinevilla</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required ></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact