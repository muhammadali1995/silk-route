import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png"
import menu from './../../assets/imgs/menu.png'
import closeMenu from './../../assets/imgs/closeMenu.png'

const Navbar = () => {
  let activeStyle = {
    color: "#FCFE00",
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const NavLinks = ({ className }) => {
    return <ul className={className}>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/home' style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About Us
        </NavLink>
      </li>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/services'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Services
        </NavLink>
      </li>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/blogs'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blogs
        </NavLink>
      </li>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/faq'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          FAQ
        </NavLink>
      </li>
      <li className=" hover:text-delayedYellow">
        <NavLink
          to='/contact'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact{" "}
        </NavLink>
      </li>
    </ul>
  }

  return (
    <div className="flex justify-between items-center md:px-24 px-2 pt-1 font-ptSansNarrow">
      <div className="md:w-auto w-32">
        <img src={logo} alt="" />
      </div>
      <NavLinks className={'lg:flex gap-14 list-none text-white text-nabar pr-16 hidden'} />
      <div className="lg:hidden md:w-12 w-8 cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <img src={menu} alt="menu" />
      </div>
      <div className={"absolute top-0 bg-vividPink right-0 p-7 sm:w-80 w-60 z-50 flex-col " + (menuIsOpen ? 'flex' : 'hidden')}>
        <button onClick={() => setMenuIsOpen(false)}>
          <img src={closeMenu} alt="closeMenu" />
        </button>
        <NavLinks className={'list-none flex flex-col gap-14 text-white text-nabar pr-16 pt-8'} />
      </div>
    </div>
  );
};

export default Navbar;
