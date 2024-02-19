import React, {useState} from 'react'

import axios, { AxiosHeaders } from 'axios';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (e) => {
      e.preventDefault();
      
      const serviceId = 'service_u0t5qrs';
      const templateId = 'template_y6am2ng';
      const publickey = 'yJ1B8COD9BtNzIHi1';

      const formData = {
          service_id: serviceId,
          template_id: templateId,
          user_id: publickey,
          template_params: {
              from_first_name: firstName,
              from_last_name: lastName,
              from_email: email,
              from_message: message,
          }
      };

      try{
          const res = axios.post("https://api.emailjs.com/api/v1.0/email/send", formData);
          console.log(res.formData);
          setFirstName('');
          setLastName('');
          setMessage('');
          setEmail('');
      } catch (error) {
          console.error(error);
      }
  
  }


  return (
    <div className='contactContainer'>
      <div className="contact">
        <div className="contactHeader">
          <h1>Contact Us</h1>
          <p>
            Don't hesitate to reach out - we are here to help
          </p>
        </div>
        <form onSubmit={handleSubmit} className='ContactForm'>
          <div className='ContactName'>
            <div className='ContactfirstName'>
              <p>First Name</p>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
              />
            </div>
            <div className='ContactlastName'>
              <p>Last Name</p>
              <input 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
              />
            </div>
          </div>
          <div className='ContactEmail'>
            <p>Email</p>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className='message'>
            <p>Message</p>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
              rows={5} // Adjust the number of rows as needed to control the initial height
            />
          </div>

          <div className="submitContact">
            <input type="submit" value="Send" className='submit' />
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact