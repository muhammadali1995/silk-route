import React from "react";
import arrowRightDown from "./../../assets/imgs/arrowRightDown.png";
import arrowLeftUp from "./../../assets/imgs/arrowLeftUp.png";

export default function Main() {
  return (
    <div className="lg:py-24 py-16 md:px-7 px-[10px] lg:px-0 bg-vividPink">
      <div className="max-w-md mx-auto">
        <h1 className="lg:text-title60 text-[40px] text-delayedYellow font-anton lg:text-center lg:mt-7 sm:mt-4">
          Thinking of starting anew in the EU?
        </h1>
        <div className="flex items-center justify-between text-justify lg:mt-10 md:mt-7 mt-5 lg:pr-14">
          <h3 className="lg:mr-20 text-xl font-ptSansNarrow leading-8 lg:mt-6 sm:mt-2.5 text-white">
            <span className="text-delayedYellow">
              Silk Route is here to help.
            </span>
            We’re confident in saying we’re one of the best residency programs
            in Europe, and here’s why. We create companies tailored to each
            individual in our care–businesses that establish residency in the
            European Union and ensure long term success. But the genius of our
            business model is that we make this process a luxury experience for
            you
            <span className="text-delayedYellow">
              (full details available on our services page).
            </span>
          </h3>
          <img
            src={arrowRightDown}
            alt="arrowRightDown"
            className="hidden lg:block"
          />
        </div>
        <div className="flex items-center justify-between lg:pl-14 md:mt-8 mt-5 lg:-mt-16">
          <img
            src={arrowLeftUp}
            alt="arrowRightDown"
            className="hidden lg:block"
          />
          <h3 className="text-xl font-ptSansNarrow leading-8 text-justify text-white lg:ml-8 lg:pb-0 md:pb-10 pb-5">
            Our team of experts know the immigration process inside and out.
            Their objective is to take the fear out of the unknown because let’s
            be honest; uprooting your life to start over in a new country is
            daunting to say the least. Trusting Silk Route eliminates the
            anxiety, confusion, and uncertainty of immigration so all that’s
            left for you to think about is the excitement of new beginnings.
          </h3>
        </div>
        <h4 className="text-delayedYellow lg:mb-10 mb-5 lg:text-3xl text-[26px] md:-mt-4 mt-5 font-anton lg:text-center  lg:-mt-4">
          Are you ready to unlock the possibilities of a new life in the EU?
        </h4>
        <a
          href="/"
          className="text-springGreen font-ptSansNarrow underline flex lg:justify-center text-2xl"
        >
          Click here to begin your journey
        </a>
      </div>
    </div>
  );
}
