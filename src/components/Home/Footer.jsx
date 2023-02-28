import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/LOGO.svg";

export default function Footer() {
    return (
        <footer className="bg-black pt-2">
            <div className="flex justify-between md:items-center text-center sm:flex-row flex-row-reverse px-[10px] sm:px-8  max-w-extraLg mx-auto 2xl:px-52 xl:px-40 lg:px-28 md:px-12 pt-4 text-[16px] font-ptSansNarrow">
                <div>
                    <img className='md:w-[141px] w-[122px]' src={logo} alt="" />
                </div>
                <ul className="lg:flex lg:gap-9 gap-4 grid sm:grid-cols-4 grid-cols-1 list-none text-left text-white text-navbar md:pt-2 xl:mr-32 lg:mr-12">
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Home</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>About Us</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Services</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Blogs</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>FAQ</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Contact </NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Terms and Conditions</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Privacy Policy</NavLink>
                    </li>
                </ul>
            </div>
            <p className="text-center font-ptSansNarrow text-white pt-8 pb-5 text-sm lg:ml-24">
                Silk Route. All rights reserved © 2023
            </p>
        </footer>
    )
}
