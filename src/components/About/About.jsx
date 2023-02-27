import React, { useState } from "react";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import gppGood from "../../assets/imgs/gpp-good.png";
import goal from "../../assets/imgs/Icon_goal-24.png";
import big_ben from "../../assets/imgs/big_ben.png";
import Container from "../Container";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div >
      <header className=" relative  flex justify-between  ">
        <img
          src={big_ben}
          alt="big_ben"
          className="min-h-[800px] sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px] mx-auto w-full top-0 -z-10"
        />
        <div className="absolute top-0 h-full w-full md:px-14 sm:px-8 px-4">
          <Container className={'h-full w-full'}>
            <h1 className="flex flex-col items-center justify-center w-full h-full">
              <span className="text-delayedYellow slider-title  ">
                Thinking of immigrating to Europe
              </span>
              <br />
              <span className="text-springGreen  slider-title left-50%">
                but don’t know where to start?
              </span>
            </h1>
          </Container>
        </div>
      </header>
      {/* first section */}
      <section className=" bg-electricPurple py-24  text-center ">
        <h1 className=" text-vividPink font-anton aboutTitle">
          Hi, we’re Silk Route.
        </h1>
        <div className=" font-ptSansNarrow text-white aboutText text-center mx-auto pt-8 max-w-3xl leading-8">
          <p>
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
      <section className=" bg-vividPink pt-24  pb-28 text-center   ">
        <div className="max-w-5xl mx-auto">
          <h1 className=" text-springGreen font-anton aboutTitle">
            Mission statement
          </h1>
          <h2 className="font-anton aboutSubTitle  leading-10 mx-auto text-electricPurple pt-6 pb-8">
            Empowering people to begin new lives in the European Union through
            business ownership.
          </h2>
          <div className="flex lg:flex-row flex-col-reverse gap-3 items-center mx-auto  ">
            <p className=" font-ptSansNarrow text-black aboutText lg:text-justify text-center leading-8">
              Our mission is to simplify the process of immigration by meeting
              you where you are and working with what you have, so that your
              dream of a new life becomes a reality. Treating you like family
              from start to finish, we design companies tailored to your unique
              situation–companies owned and run by you — that establish EU
              residency and allow you to discover the possibilities of a new
              life.
            </p>

            <img
              className="max-w-[6.5rem] w-full max-h-[6.5rem]"
              src={goal}
              alt="mission statement"
            />
          </div>
        </div>
      </section>
      {/* third section */}
      <section className=" bg-springGreen py-24  text-center  ">
        <div className="max-w-[1080px]  mx-auto">
          <h1 className=" text-vividPink  font-anton aboutTitle">
            Vision statement
          </h1>
          <h2 className="font-anton aboutSubTitle text-electricPurple  leading-10 mx-auto pt-6">
            Striving to be the agency of choice for individuals seeking new life
            life in the European union.
          </h2>
          <div className="flex lg:gap-9 gap-4 mx-auto lg:flex-row flex-col items-center  pt-8 px-3">
            <img
              className="max-w-[12.5rem] w-full max-h-[11rem]"
              src={gppGood}
              alt="vision statment"
            />
            <p className=" font-ptSansNarrow text-black aboutText   lg:text-justify text-center leading-8">
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
