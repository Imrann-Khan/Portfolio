import React, { useState } from "react";
import { logo } from "./../assets";



const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full p-[10px] flex justify-between items-center fixed top-0 left-0 bg-white z-50 shadow-lg">
      <img src={logo} alt="logo" className="h-[30px]" />
      <div>
        <ul className="hidden md:flex">
          <li className="mr-5 hover:scale-110">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
              Home
            </a>
          </li>
          <li className="mr-5 hover:scale-110">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
              About
            </a>
          </li>
          <li className="mr-5 hover:scale-110">
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>
              Skills
            </a>
          </li>
          <li className="mr-5 hover:scale-110">
            <a href="#resume" onClick={(e) => handleSmoothScroll(e, '#resume')}>
              Resume
            </a>
          </li>
          <li className="mr-5 hover:scale-110">
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-end">
          {!toggle ?  
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              onClick={() => setToggle(!toggle)}
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6 cursor-pointer md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          : 
            <svg onClick={() => setToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5} stroke="currentColor" 
              className="w-6 cursor-pointer md:hidden h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
          {toggle && (
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
              <li className="mr-5 p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                  Home
                </a>
              </li>
              <li className="mr-5 p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
                  About
                </a>
              </li>
              <li className="mr-5 p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>
                  Skills
                </a>
              </li>
              <li className="mr-5 p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="#resume" onClick={(e) => handleSmoothScroll(e, '#resume')}>
                  Resume
                </a>
              </li>
              <li className="mr-5 p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

