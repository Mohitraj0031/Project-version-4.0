import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-purple-400 shadow-md">
      <div className="navbar flex justify-between items-center text-black  h-16">
        <img className="h-14  m-4" src={logo} alt="company logo" />
        <ul className="navbar-menu hidden flex1 lg:flex lg:justify-between lg:gap-x-6 lg:text-lg font-semibold">
          <li className="hover:bg-purple-700 hover:text-white p-2 pl-6 pr-6 rounded-full border-1 hover:border-white">
            <NavLink to="/Home" end>
              Home
            </NavLink>
          </li>
          <li className="hover:bg-purple-700 hover:text-white p-2 pl-6 pr-6 rounded-full">
            Products
          </li>
          <li className="hover:bg-purple-700 hover:text-white p-2 pl-6 pr-6 rounded-full">
            Orders
          </li>
          <li className="hover:bg-purple-700 hover:text-white p-2 pl-6 pr-6 rounded-full">
            <NavLink to="/Contacts">
              Contact us
            </NavLink>
            
          </li>
        </ul>
        <div className="navbar-right hidden lg:flex lg:items-center lg:justify-center lg:gap-x-2 m-2">
          <ion-icon className="text-3xl" name="bag-add-outline"></ion-icon>
          <div className="navbar-search-icons ">
            <div className="dot"></div>
          </div>
          <button className="p-2 text-3xl">
            <ion-icon name="person-outline">Sign in</ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
