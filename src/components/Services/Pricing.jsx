import React from "react";

const Pricing = () => {
  return (
    <div className=" bg-delayedYellow py-[80px]">
      <h1 className="text-vividPink max-w-[970px] lg:px-0 md:px-[27px] px-[14px] mx-auto text-justify text-5xl font-anton ">Pricing:</h1>
      <p className="servicesText pt-11 text-electricPurple">
        At Silk Route, we believe that starting life anew shouldn’t break the
        bank! Our services are affordable, with a base price of only €6,000.
        Additional costs will be determined by each client’s education, work
        experience, nationality, age, and other factors that the client will
        specify on their questionnaire. As stated above, we deeply care about
        each person and their unique story. That’s why every step of the
        process, including pricing, will be tailored to each individual who
        trusts us with their transition.
      </p>
      <h1 className="text-vividPink max-w-[970px] mt-14 mb-2 lg:px-0 md:px-[27px] px-[14px] mx-auto text-justify text-5xl font-anton ">Families:</h1>
      <p className="servicesText text-electricPurple">You’re probably wondering,<span className="text-vividPink "> but what about my wife and kids?</span></p>
      <p className="servicesText pt-[30px] text-electricPurple">
        We have good news! Your wife and kids are more than welcome to come
        along. The spouse of a new resident automatically qualifies for
        residency as a dependent; he/she is free to work without restrictions in
        Latvia. Children under the age of 18 also automatically qualify for
        residency. Time for a family group hug!
      </p>
    </div>
  );
};

export default Pricing;
