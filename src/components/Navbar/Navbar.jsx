import React, { useEffect, useState } from "react";
import NavRoutes from "../../constants/nav-links";
import Container from "../Container";
import closeMenu from "./../../assets/imgs/closeMenu.png";
import menu from "./../../assets/imgs/menu.png";
import NavbarLink from "./NavBarLink";
import { Logo, LogoMobile } from "../Icons";
import useWindowSize from "../../constants/useWindowResize";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [width] = useWindowSize();
 const {pathname} = useLocation()
 console.log('params', pathname);
  useEffect(()=>{
    document.title=pathname
  })
  const NavLinks = ({ className }) => {
    return (
      <ul className={className}>
        {NavRoutes.map(({ name, link }) => (
          <NavbarLink key={link} link={link} name={name} />
        ))}
      </ul>
    );
  };

  return (
    <div className="absolute w-full main top-0">
      <Container>
        <div className="w-full lg:my-4 flex justify-between items-center md:px-20   lg:py-2.5 py-5 px-2.5 lg:pt-0  font-ptSansNarrow">
          <div className="z-10 lg:mt-2 md:ml-0 ml-4 flex">
            {width > 786 ? <Logo /> : <LogoMobile />}
          </div>
          <NavLinks
            className={
              "lg:flex gap-14 list-none text-white text-navLink pr-12 -mt-3 hidden"
            }
          />
          <div
            className="lg:hidden md:w-12 sm:w-10 w-8 mr-7 cursor-pointer z-10"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <img className="w-full" src={menu} alt="menu" />
          </div>
          <div
            className={
              "absolute top-0 bg-vividPink p-7 sm:w-80 w-60 z-50  flex-col duration-500 ease transition-all " +
              (width<1024 && menuIsOpen ? "right-0 " : " -right-96 opacity-0")
            }
          >
            <button onClick={() => setMenuIsOpen(false)}>
              <img className="sm:w-full w-8" src={closeMenu} alt="closeMenu" />
            </button>
            <NavLinks
              className={
                "list-none flex flex-col gap-14 text-white text-navLink pr-16 pt-8"
              }
              setMenuIsOpen={setMenuIsOpen}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
