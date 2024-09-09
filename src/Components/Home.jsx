import React from 'react'
import './../Constants'
import './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
import personal from "../assets/personal.jpg";


const Home = () => {
  return (
    <div className="mt-14 px-4 md:px-20 items-center flex flex-col md:flex-row md:justify-evenly">
        <div className='flex w-full flex-col  items-start content-end'>
            <h1 className='text-[30px] md:text-[35px] font-bold '>Hello, </h1>
            <div className='flex'>
            <h1 className='text-[30px]  md:text-[35px] font-bold mr-3'>I am</h1>
            <Typewriter
              options={{
                strings: ['Imran Khan', 'a Developer', 'a Competitive Programmer'],
                autoStart: true,
                loop: true,  
                }}
            />
            </div>
        <h1 className="text-[15px] mt-3 lg:text-[22px] text-gray-800">
          I worked as Developer and currently I am a Frontend Software
          Developer. I am passionate about learning new technologies and
          always ready to take new challenges. I am competitive coder and I love to solve problems.
        </h1>
        <button className="mt-3 bg-purple-800 p-2 px-3 lg:mt-2 lg:p-3 lg:px-5 rounded-md text-yellow-200 transition-all ease-in-out hover:scale-110">
          Resume
        </button>
      </div>
      <img src={personal} alt="HomeImage" className="w-[300px] md:w-[400px] lg:w-[600px] rounded-full" />
    </div>
  );
};

export default Home;
