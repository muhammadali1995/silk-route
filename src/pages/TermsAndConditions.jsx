import React from "react";
// import Navbar from '../components/Navbar/Navbar';

const TermsAndConditions = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <h1 className="capitalize text-[34px] font-anton text-center">
        Terms and Conditions
      </h1>
      <div className="max-w-md mx-auto ">
        <article>
          <h2 className="termsTitle">PREAMBLE</h2>
          <ul className="termsText pl-5 ">
            <li>
              Whereas,{" "}
              <span className="text-vividPink ">https://www.silkroute.lv </span>{" "}
              is a website owned and governed by Silk Route; and
            </li>
            <li>
              Whereas, Silk Route is an immigration firm providing services in
              areas as specified on its website; and
            </li>
            <li>
              {" "}
              Whereas, these Terms and Conditions have been drafted to provide
              information regarding rules, regulations, and conditions set by
              Silk <br /> Route for their website and to provide the information
              through which clients can avail of its services; and
            </li>
            <li>
              Whereas, throughout the Terms and Conditions, Privacy Policy, and
              Disclaimer the terms such as “we”, “our”, and “us” as well as
              “firm” and <br /> “Silk Route” have been used to describe Silk
              Route’s website and services therein.
            </li>
            <li>
              Therefore, after availing, using, or visiting the website of Silk
              Route the users, customers, clients and visitors will be assumed
              to be in <br /> consent to these Terms of Service as well as our
              Privacy Policy.
            </li>
          </ul>
        </article>
        <article>
          <h2 className="termsTitle">
            1. TERMS AND CONDITIONS OF THE SILK ROUTE
          </h2>
          <p className="termsText pl-10">
            The following Terms and Conditions (“Terms”, “Terms of Use”, “Terms
            of Service”, “Silk Route”) govern all use of our services, online
            platform and website (collectively called “services” and “website”)
            called Silk Route. These Terms, as well as our Privacy Policy,
            posted on Silk Route’s website, shall also be equally applicable and
            enforced to the offers, services and projects of our website. These
            terms are primarily directed towards all the clients, users, and
            buyers ( “you”, “your”, “user”, “client”) as well as any visitors of
            Silk Route’s website.
          </p>
        </article>
        <article>
          <h2 className="termsSubTitle">1.1. User Agreement</h2>
          <p className="termsText pl-10">
            All the terms in our Terms of Use, Privacy Policy, and any other
            legal document constitute an agreement between you and Silk Route.
            These terms shall apply to you as a user, visitor, trainer, coach,
            athlete or anyone who has used our services or accessed this
            website. If you are not in agreement with the terms provided on this
            page or any one of the terms, you may not access the website in
            whole or in part and you also can not use any of our services.
          </p>
        </article>
      </div>
    </div>
  );
};

export default TermsAndConditions;
