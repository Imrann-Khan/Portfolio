"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import {assets} from '@/assets/assets';
import {motion} from "motion/react"

const Contact = () => {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d875d968-7012-4ea9-a9c6-1cde0df44202");

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
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 
      bg-no-repeat bg-center bg-[length:90%_auto]'
      style={{backgroundImage: `url('/footer-bg-color.png')`,}}
    >
      <motion.h4
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </motion.h4>
      <motion.h2
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, project proposals, or just want to say hello, feel free to reach out. I'm always open to new opportunities and collaborations!
      </motion.p>

        <motion.form
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:1.1}}
                type='text' placeholder='Enter your name' 
                className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-700 rounded-md bg-white' name='name' required/>

                <motion.input
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:1.2}}
                 type='email' placeholder='Enter your email' className='flex-1 p-3 outline-none 
                border-[0.5px] border-gray-700 rounded-md bg-white' name='email' required/>
            </div>
            <motion.textarea 
            initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, delay:1.3}}
            className='w-full p-4 outline-none border-[0.5px]
             border-gray-400 rounded-md bg-white mb-6' rows='6' 
             placeholder='Enter your message' name='text' required></motion.textarea>

            <motion.button
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            type='submit' className='w-max flex items-center justify-center gap-2
             text-white bg-black/80 hover:bg-black rounded-full
             py-3 px-8 mx-auto duration-500'>
                Submit now
                <Image src={assets.right_arrow_white} alt='send icon' className='w-4' />
            </motion.button>
            <p className='mt-4'>{result}</p>
        </motion.form>

    </motion.div>
  );
};

export default Contact;