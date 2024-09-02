import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-2 bg-purple-200">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="h-7" />
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              Home
            </li>
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              About Me
            </li>
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              Skills
            </li>
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              Portfolio
            </li>
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              Companies
            </li>
            <li className="mr-3 text-[20px] transition-all ease-in-out hover:scale-110 cursor-pointer">
              Contact Me
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden">
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setToggle(!toggle)}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 cursor-pointer float-right"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setToggle(!toggle)}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
          {toggle ? (
            <ul className="flex flex-col mt-8 p-4 bg-gray-300">
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                Home
              </li>
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                About Me
              </li>
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                Skills
              </li>
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                Portfolio
              </li>
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                Companies
              </li>
              <li className="p-2 mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                Contact Me
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
