import React, { useState } from "react";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import gppGood from "../../assets/imgs/gpp-good.png";
import goal from "../../assets/imgs/Icon_goal-24.png";
import aboutMobile from "./../../assets/imgs/about1.png";
import aboutTablet from "./../../assets/imgs/about2.png";
import about from "./../../assets/imgs/about3.png";
import aboutLaptop from "./../../assets/imgs/about4.png";
import Container from "../Container";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <header className=" relative  flex justify-between  ">
        <picture className="mx-auto w-full top-0 -z-10">
          <source media="(max-width: 360px)" srcset={aboutMobile} />
          <source media="(max-width: 768px)" srcset={aboutTablet} />
          <source media="(max-width: 1440px)" srcset={about} />
          <img
            src={aboutLaptop}
            alt="about"
            className="min-h-[800px] w-full sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px]"
          />
        </picture>
        <div className="absolute top-0 h-full w-full md:px-6 sm:px-8 px-2.5">
          <Container className={"h-full w-full"}>
            <h1 className="flex flex-col items-center justify-center w-full h-full lg:mt-11 mt-6 lg:pr-0 md:pr-10 pr-16">
              <span className="text-delayedYellow slider-title  ">
                Thinking of immigrating to Europe
              </span>
              <br />
              <span className="text-springGreen lg:pr-0 md:pr-44 -mt-7 slider-title ">
                but don’t know where to start?
              </span>
            </h1>
          </Container>
        </div>
      </header>
      {/* first section */}
      <section className="bg-electricPurple lg:py-24 py-[70px] md:text-center ">
        <h1 className="text-vividPink font-anton aboutTitle mt-4">
          Hi, we’re Silk Route.
        </h1>
        <div className="font-ptSansNarrow text-white text-justify aboutText mx-auto lg:pt-8 pt-[19px] max-w-3xl">
          <p className=" leading-[30px]">
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

          <p
            className={
              "leading-[30px]  " + (showInfo ? "block py-8" : "hidden")
            }
          >
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
          <p className={"leading-[30px] " + (showInfo ? "block" : "hidden")}>
            Because we pride ourselves on inclusivity, we chose to include an
            array of colors in our logo. These various hues represent the flags
            of different nations and express our deepest desire to work with
            people from every corner of the globe. Regardless of where you come
            from, Silk Route is committed to providing you with the highest
            quality of service. We are honored to be part of your journey from
            one life to the next.
          </p>

          <div className=" flex justify-center lg:pt-10 pt-[30px]">
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
      <section className=" bg-vividPink lg:pt-24 py-[70px] lg:pb-24 lg:text-center ">
        <div className="max-w-5xl mx-auto">
          <h1 className=" text-springGreen font-anton aboutTitle lg:mt-5">
            Mission statement
          </h1>
          <h2 className="font-anton aboutSubTitle  leading-10 mx-auto text-electricPurple lg:pt-6 lg:pb-8 pb-6 mt-5">
            Empowering people to begin new lives in the European Union through
            business ownership.
          </h2>
          <div className="flex lg:flex-row flex-col-reverse gap-3 items-center mx-auto  ">
            <p className=" font-ptSansNarrow text-black aboutText text-justify  leading-8 -mt-3">
              Our mission is to simplify the process of immigration by meeting
              you where you are and working with what you have, so that your
              dream of a new life becomes a reality. Treating you like family
              from start to finish, we design companies tailored to your unique
              situation–companies owned and run by you — that establish EU
              residency and allow you to discover the possibilities of a new
              life.
            </p>

            <img
              className="lg:block hidden max-w-[7.5rem] w-full max-h-[7.5rem]"
              src={goal}
              alt="mission statement"
            />
          </div>
        </div>
      </section>
      {/* third section */}
      <section className=" bg-springGreen lg:py-24 py-[70px]  lg:text-center  ">
        <div className="max-w-[1080px]  mx-auto">
          <h1 className=" text-vividPink  font-anton aboutTitle lg:mt-2.5">
            Vision statement
          </h1>
          <h2 className="font-anton aboutSubTitle text-electricPurple  leading-10 mx-auto lg:pt-6 mt-4">
            Striving to be the agency of choice for individuals seeking new life
            life in the European union.
          </h2>
          <div className="flex mx-auto lg:flex-row flex-col items-center  pt-6  lg:px-3">
            <div className="max-w-[12.5rem] w-full lg:block hidden max-h-[11rem] mb-8">
              <img src={gppGood} alt="vision statment" />
            </div>
            <p className=" font-ptSansNarrow text-black aboutText text-justify leading-8">
              It doesn’t take a crystal ball to see where our company is headed.
              Our dream is to become a global leader in immigration affairs
              concerning individuals who want to plant roots in Europe. We are
              in the business of helping people begin new lives in the EU, and
              we approach this both practically and sustainably. Creating and
              planting businesses is a practical approach to establishing EU
              residency, while giving full autonomy of the company to the
              individual allows them to sustain their success after arrival.
              Silk Route’s intention is to be one of the best residency programs
              in Europe. We trust that our future promises stories of new
              beginnings and lifelong successes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
