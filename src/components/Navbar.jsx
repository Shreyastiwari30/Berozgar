import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-purple-100 fixed top-0 left-0 w-full ">
        <nav className="p-3 flex flex-col md:flex-row items-center justify-between w-full md:w-[70%] mx-auto h-auto md:h-16 bg-purple-100 ">
          <p className="text-blue-700 font-bold text-2xl md:text-3xl mb-2 md:mb-0">
            Berozgar <span className="text-orange-500">.com</span>
          </p>

          <ul className="flex flex-col md:flex-row text-[2.3vh] items-center text-gray-800 gap-4 md:gap-10 mb-2 md:mb-0">
            <li className="hover:text-blue-500 cursor-pointer"><Link to='/' >Home</Link></li>
            <li className="hover:text-blue-500 cursor-pointer"><Link to='/about' >About</Link></li>
            <li className="hover:text-blue-500 cursor-pointer"><Link to='/contact' >Contact</Link></li>
            <li className="hover:text-blue-500 cursor-pointer"><Link to='/tasks' >Jobs</Link></li>
          </ul>

          <div className="flex gap-3">
            <button className=" px-4 py-1 border border-blue-700 text-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white transition">
              <Link to='/login'>Login</Link>
            </button>
            <button className="px-4 py-1 bg-orange-500 text-white border border-orange-500 rounded-2xl hover:bg-orange-600 transition">
              <Link to='/register' >Register</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
