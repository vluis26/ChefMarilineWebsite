import React from 'react';
import './Popup.css';
import mail_icon from '../../assets/mail_646135.png';
import phone_icon from '../../assets/phone-call_455705.png';
import insta_icon from '../../assets/instagram.png';
import contact_image from '../../assets/Screenshot 2024-08-09 at 12.52.27 AM.png';

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
                <img src={contact_image} alt="Contact Image" className="contact-image" />
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type='text' id='name' name='name' placeholder='Enter your name' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type='email' id='email' name='email' placeholder='Enter your email' required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type='tel' id='phone' name='phone' placeholder='Enter your number' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="restaurant">Restaurant Name</label>
                            <input type='text' id='restaurant' name='restaurant' placeholder='Enter your restaurant name' required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Write your message here</label>
                        <textarea id='message' name='message' rows='6' placeholder='Enter your message' required></textarea>
                    </div>
                    <button type='submit' className='btn dark-btn'>Submit Now</button>
                    <span>{result}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;


