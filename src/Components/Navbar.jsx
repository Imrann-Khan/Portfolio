import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="h-7" />
        <div>
          <ul className="flex flex-row">
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Home
            </li>
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              About Me
            </li>
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Skills
            </li>
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Portfolio
            </li>
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Companies
            </li>
            <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Contact Me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
