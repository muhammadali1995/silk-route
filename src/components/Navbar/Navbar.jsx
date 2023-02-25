import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png"

const Navbar = () => {
  let activeStyle = {
    // color: "#FCFE00",
  };

  return (
    <div className=" flex justify-between px-24 pt-1 font-ptSansNarrow">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="flex gap-14 list-none text-white text-nabar pr-16 pt-8">
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About Us
          </NavLink>
        </li>
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Services
          </NavLink>
        </li>
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blogs
          </NavLink>
        </li>
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            FAQ
          </NavLink>
        </li>
        <li className=" hover:text-delayedYellow">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
