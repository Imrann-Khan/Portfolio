import React, { useState } from 'react';
import { phone } from '../assets';
import SectionHeading from '../Shared/SectionHeading';
import personal from "../assets/personal.jpg";
import axios from 'axios'; 

function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const { email: emailInput, message: messageInput } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    email: emailInput, 
    message: messageInput, 
  };

  try {
    const response = await axios.post('http://localhost:5001/send-email', formData);
    console.log('Email sent:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


  return (
    <div id="contact" className='flex flex-col justify-center mt-5'>
      <div className='flex flex-row justify-center'>
        <SectionHeading firstTitle='Contact' secondTitle=' Me' />
        <img src={phone} alt='' className="w-[80px] ml-4 animate-bounce" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
        <img src={personal} alt='' className="w-[350px] md:w-[450px] mr-10 rounded-full" />
        <div className='w-full'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col '>
              <label className='text-gray-400'>Email</label>
              <input
                type="email"
                name="email"
                placeholder='yourname@gmail.com'
                className='border-[1.5px] px-2 border-purple-300 hover:border-purple-500 rounded-md'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-400'>Message</label>
              <textarea
                name="message"
                rows={7}
                placeholder='Type your message here'
                className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className='transition-all ease-in-out w-20 hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px] py-1 mt-5 text-white rounded-md'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
