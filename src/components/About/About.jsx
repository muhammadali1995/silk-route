import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import goal from "../../assets/imgs/Icon_goal-24.png";
import gppGood from "../../assets/imgs/gpp-good.png";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <header className=" bg-headerImage w-full h-headerHeight bg-cover bg-no-repeat bg-center">
        <Navbar />
        <p className="text-center pt-72 font-anton px-40">
          <span className="text-delayedYellow text-title80 text-center  ">
            Thinking of immigrating to Europe
          </span>
          <br />
          <span className="text-springGreen  text-title80 text-center ">
            but don’t know where to start?
          </span>
        </p>
      </header>
      {/* first section */}
      <section className=" bg-electricPurple py-24 text-center ">
        <p className=" text-vividPink font-anton text-5xl">
          Hi, we’re Silk Route.
        </p>
        <div className=" font-ptSansNarrow text-white text-xl text-center mx-auto pt-8 max-w-3xl leading-9">
          <p>
            {" "}
            We’re an immigration consultancy firm that specializes in helping
            people like you gain residency in Europe by creating businesses that
            you own and operate. Our company is run by a highly qualified team
            of immigration lawyers, all of whom graduated from the finest
            European universities. Our board of advisors have spent their lives
            working for the Office of Citizenship and Migration Affairs. Many
            have served in high up positions in Latvian embassies, foreign
            ministries, as well as other embassies across Europe. We also have
            powerful stakeholders from India and other parts of the globe who
            believe in our mission. But don’t let that intimidate you. We’re
            merely saying...you can trust us! We’re all here for one reason:
            helping you start anew in the EU, and we believe that doing so
            doesn’t have to cost a fortune.
          </p>

          <p className={showInfo ? "block py-8" : "hidden"}>
            Our brand name and logo were carefully curated to represent our
            purpose and values. Historically speaking, the Silk Route was an
            ancient trade network that connected China with Europe and the
            Middle East. It promoted the exchange of various valuable goods,
            including silks, spices, and precious stones. We drew inspiration
            from this piece of history when we created our company, as we also
            specialize in the transportation of valuable goods; only this time,
            our valuable good is far more important than any costly fabric or
            expensive gemstone–our valuable good is you!
          </p>
          <p className={showInfo ? "block" : "hidden"}>
            Because we pride ourselves on inclusivity, we chose to include an
            array of colors in our logo. These various hues represent the flags
            of different nations and express our deepest desire to work with
            people from every corner of the globe. Regardless of where you come
            from, Silk Route is committed to providing you with the highest
            quality of service. We are honored to be part of your journey from
            one life to the next.
          </p>

          <div className=" flex justify-center pt-10">
            {showInfo ? (
              <img
                onClick={() => setShowInfo(false)}
                className=" h-8 cursor-pointer"
                src={arrowUp}
                alt=""
              />
            ) : (
              <button
                onClick={() => setShowInfo(true)}
                className=" text-delayedYellow font-bold font-ptSansNarrow cursor-pointer  underline decoration-delayedYellow    "
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </section>
      {/* second section */}
      <section className=" bg-vividPink py-24 text-center  ">
        <p className=" text-springGreen font-anton text-5xl">
          Mission statement
        </p>
        <p className="font-anton text-title28 max-w-6xl leading-10 mx-auto text-electricPurple py-6">
          Empowering people to begin new lives in the European Union through
          business ownership.
        </p>
        <div className="flex gap-4 mx-auto max-w-6xl ">
          <p className=" font-ptSansNarrow text-black text-xl  pt-8 text-justify leading-9">
            Our mission is to simplify the process of immigration by meeting you
            where you are and working with what you have, so that your dream of
            a new life becomes a reality. Treating you like family from start to
            finish, we design companies tailored to your unique
            situation–companies owned and run by you — that establish EU
            residency and allow you to discover the possibilities of a new life.
          </p>

          <img className=" w-52" src={goal} alt="" />
        </div>
      </section>
      {/* third section */}
      <section className=" bg-springGreen py-24 text-center  ">
        <p className=" text-vividPink  font-anton text-5xl">Vision statement</p>
        <p className="font-anton text-title28 text-electricPurple max-w-6xl leading-10 mx-auto py-6">
          Striving to be the agency of choice for individuals seeking new life
          life in the European union.
        </p>
        <div className="flex gap-2 mx-auto max-w-6xl ">
          <img className=" w-52" src={gppGood} alt="" />
          <p className=" font-ptSansNarrow text-black text-xl  pt-8 text-justify leading-9">
            It doesn’t take a crystal ball to see where our company is headed.
            Our dream is to become a global leader in immigration affairs
            concerning individuals who want to plant roots in Europe. We are in
            the business of helping people begin new lives in the EU, and we
            approach this both practically and sustainably. Creating and
            planting businesses is a practical approach to establishing EU
            residency, while giving full autonomy of the company to the
            individual allows them to sustain their success after arrival. Silk
            Route’s intention is to be one of the best residency programs in
            Europe. We trust that our future promises stories of new beginnings
            and lifelong successes.
          </p>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-black">
        <div className=" flex justify-between px-24 pt-1 font-ptSansNarrow">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-14 list-none text-white text-nabar pr-16 pt-8">
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
        <p className="text-center font-ptSansNarrow text-white pt-11">
          Silk Route. All rights reserved © 2023
        </p>
      </footer>
    </div>
  );
};

export default About;
