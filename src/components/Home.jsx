import React from "react";
import { FiSearch } from 'react-icons/fi';
import Banner from "./banner";

const Home = () => {
  return (
    <div className="mt-15 text-center py-16 px-4 bg-gradient-to-br from-purple-200 via-blue-100 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Find Gigs. Get Paid. <br />
        <span className="text-blue-700">Berozgaari Ends Here!</span>
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Thousands of micro-jobs across Indore and India
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 justify-center items-center">
        
        <input
          type="text"
          placeholder="Enter skill or keyword"
          className="w-full md:w-1/3 px-4 py-2 border rounded-full outline-blue-500"
        />

        <select className="w-full md:w-1/4 px-4 py-2 border rounded-full outline-blue-500">
          <option>Select experience</option>
          <option>Beginner</option>
          <option>Experienced</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          className="w-full md:w-1/4 px-4 py-2 border rounded-full outline-blue-500"
        />

        <button className="w-auto flex gap-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
          <FiSearch className="text-gray-500 text-xl" />
          Search

        </button>
      </div>
      <Banner/>
    </div>
  );
};

export default Home;
