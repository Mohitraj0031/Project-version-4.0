import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className=" flex-1 bg-purple-200  min-h-screen ">
      <div className="bg-gradient-to-r from-black via-black to-transparent">
        <div className="relative text-center p-6 z-10 bg-[url('/images/background.jpg')] z-0  bg-cover opacity-90 bg-center bg-fixed h-screen ">
          {/* centering this div is remaining*/}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-200 font-bold ">
                Ryshkka
              </h1>
              <p className="text-lg sm:text-3xl mt-4 text-purple-200">
                Your one-stop shop for all clothings and accessories
              </p>
              <button className="bg-purple-400 p-3 mt-6 hover:bg-purple-600 text-white font-semibold rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
