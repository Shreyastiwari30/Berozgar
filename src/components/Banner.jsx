import React from "react";
import bgImage from "../assets/Bg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className=" bg-cover bg-center h-44 w-3/4 md:w-2/4 mx-auto mt-16 rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg hover:translate-1.5 duration-1000"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-lg md:text-2xl font-bold ml-4 text-start">
        Need help to get started?
      </h1>
      <p className="text-sm md:text-base ml-4 mt-1 text-start">
        Get AI assistance to build your resume from scratch
      </p>
      <button className="bg-white text-blue-700 font-semibold rounded-full w-fit px-4 py-1 mt-4 ml-4 hover:bg-blue-50 transition">
        <Link to='/gpt' >Get Started</Link>
      </button>
    </div>
  );
};

export default Banner;
