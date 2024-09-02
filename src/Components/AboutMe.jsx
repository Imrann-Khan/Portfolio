import React from 'react'
import {laptop,wave} from '../assets/index'
import aboutSection from "../Constants/index"


const AboutMe = () => {
  return (
    <div>
      <img src={wave} alt='wave.svg'/>
      <img src={laptop} alt='laptop.png' className='absolute w-[200px] mt-[-25%] md:mt-[-27%] md:w-[300px] lg:mt-[-25%] lg:w-[350px]'/>
      <div className='h-[320px] p-1 w-full bg-purple-500 items-center'>
      <h2 className='text-white mt-[-12%] text-[50px] font-bold text-center'>About <span className='text-black'> Me</span></h2>
      <h2 className='mt-20 text-[18px] text-white px-30 md:px-40 lg:px-40 text-center lg:text-[20px]'>
        I am Software developer working in IT industry from last 6 years as Full Stack Developer. I am expert in UI/UX design, Front-end and Back-end Development.
        I have good programming skill in C, C++, Java and also Python. I am a regular problem solver in Codeforces.
      </h2>
      </div>
      <div className='flex flex-col w-full items-center mt-[-80px] md:flex-row lg:flex-row justify-around'>
        {
          aboutSection.map((item,index)=>
          (
            <div className='hover:bg-purple-500 mb-5 p-7 rounded-lg cursor-pointer'>
              <img src={item.image} alt='' className='w-[270px] h-[200px] rounded-xl object-cover'/>
              <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>
              <h2 className='text-[12px] text-center text-gray-600 group-hover:text-green-200'>{item.desc}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AboutMe
