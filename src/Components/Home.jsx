import React from "react";
import HomeImage from "../assets/homeImage.png";

const Home = () => {
  return (
    <div className="mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row">
      <div>
        <h1 className="mt-3 text-[40px] font-semibold">Hello,</h1>
        <h1 className="mt-3 text-[40px] font-semibold">
          I am
          <span className="text-purple-800"> Imran Khan</span>
        </h1>
        <h1 className="text-[20px] mt-3 text-green-600">
          I worked as Developer and currently I am a Frontend Software
          Developer.
        </h1>
        <button className="mt-3 bg-purple-800 p-2 px-3 rounded-md text-yellow-200 transition-all ease-in-out hover:scale-110">
          Resume
        </button>
      </div>
      <img src={HomeImage} alt="HomeImage" className="w-[350px] md:w-[400px]" />
    </div>
  );
};

export default Home;
