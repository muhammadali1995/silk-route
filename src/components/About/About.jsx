import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import arrowUp from "../../assets/icons/ArrowUp.svg";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <header className="bg-headerImage w-full h-headerHeight bg-cover bg-no-repeat bg-center">
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

      <section className=" bg-electricPurple py-24 text-center ">
        <p className=" text-vividPink font-anton text-5xl">
          Hi, we’re Silk Route.
        </p>
        <div className=" font-ptSansNarrow text-white text-xl text-center mx-80 pt-8">
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
                className=" h-8"
                src={arrowUp}
                alt=""
              />
            ) : (
              <button
                onClick={() => setShowInfo(true)}
                className=" text-delayedYellow font-bold font-ptSansNarrow"
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </section>

      <aside className=" bg-vividPink py-24 text-center ">
        <p className=" text-springGreen font-anton text-5xl">Mission statement</p>
        <p className="font-anton text-electricPurple">
          Empowering people to begin new lives in the European Union through
          business ownership.
        </p>
        <div>
          <p className=" font-ptSansNarrow text-black text-xl text-center mx-80 pt-8">
            Our mission is to simplify the process of immigration by meeting you
            where you are and working with what you have, so that your dream of
            a new life becomes a reality. Treating you like family from start to
            finish, we design companies tailored to your unique
            situation–companies owned and run by you — that establish EU
            residency and allow you to discover the possibilities of a new life.
          </p>
          <img src="" alt="" />
        </div>
      </aside>
    </div>
  );
};

export default About;
