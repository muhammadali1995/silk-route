import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

export default function Footer() {
    return (
        <footer className="bg-black pt-4">
            <div className="flex justify-between sm:flex-row flex-row-reverse px-2 sm:px-8 md:px-7 max-w-extraLg mx-auto lg:px-52 sm:items-center pt-4 text-[16px] font-ptSansNarrow">
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className="lg:flex lg:gap-9 gap-4 grid sm:grid-cols-4 grid-cols-1 list-none text-white text-navbar pt-8 2xl:mr-32 ">
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
            <p className="text-center font-ptSansNarrow text-white pt-11 pb-5 text-sm ml-24">
                Silk Route. All rights reserved © 2023
            </p>
        </footer>
    )
}
