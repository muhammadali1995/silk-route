import React from 'react'
import { NavLink } from "react-router-dom";
import useWindowSize from "../../constants/useWindowResize";
import { LogoMobile, Logo } from "../Icons";

export default function Footer() {
    const [width] = useWindowSize()
    return (
        <footer className="bg-black pt-2">
            <div className="flex justify-between md:items-center gap-5 sm:flex-row flex-row-reverse px-[10px] sm:px-8  max-w-5xl  mx-auto  md:pl-12 lg:pl-0 pt-4 text-[16px] font-ptSansNarrow">
                <div>
                    {width > 786 ? <Logo /> : <LogoMobile />}
                </div>
                <ul className="lg:flex lg:gap-9 md:gap-5 gap-4  grid sm:grid-cols-4 grid-cols-1 list-none text-left text-white xl:text-navLink lg:text-xl text-base md:pt-2 ">
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/about'>About Us</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Services</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink>Blogs</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/faq'>FAQ</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/contact'>Contact </NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/terms-conditions'>Terms and Conditions</NavLink>
                    </li>
                    <li className=" hover:text-delayedYellow">
                        <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                    </li>
                </ul>
            </div>
            <p className="text-center font-ptSansNarrow text-white pt-8 pb-5 text-sm lg:ml-24">
                Silk Route. All rights reserved © 2023
            </p>
        </footer>
    )
}
